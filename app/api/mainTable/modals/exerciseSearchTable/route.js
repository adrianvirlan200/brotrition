import { NextResponse } from "next/server";
import executeQuery from "@server/db.js";
import { getServerSession } from "next-auth";
import { authOptions } from "@app/nextauth/NextAuthOptions";

export async function POST(request) {
  try {
    const dataReceived = await request.json();
    const searchingParams = dataReceived.searchBoxValue;

    const session = await getServerSession(authOptions);
    const weight = session.user.weight;

    let data = [];

    const query =
      " SELECT id, activity, 125_pound, 155_pound, 185_pound\
        FROM brotrition.exercise_data\
        WHERE MATCH(activity) AGAINST(+? IN BOOLEAN MODE)\
        LIMIT 75";
    const result = await executeQuery(query, [searchingParams]);

    const w1 = 125 * 0.45359237;
    const w2 = 155 * 0.45359237;
    const w3 = 185 * 0.45359237;

    for (let i = 0; i < result.length; i++) {
      const var1 = Math.abs(w1 - weight);
      const var2 = Math.abs(w2 - weight);
      const var3 = Math.abs(w3 - weight);

      if (var1 < var2 && var1 < var3) {
        var cal = result[i]["125_pound"];
      } else if (var2 < var1 && var2 < var3) {
        var cal = result[i]["155_pound"];
      } else {
        var cal = result[i]["185_pound"];
      }

      result[i].calories = cal;

      delete result[i]["125_pound"];
      delete result[i]["155_pound"];
      delete result[i]["185_pound"];
    }

    // console.log(result);

    return new Response(JSON.stringify({ data: result, status: 201 }));
  } catch (error) {
    console.error(error);
    return new Response(
      JSON.stringify({ message: "An error occurred.", status: 500 })
    );
  }
}