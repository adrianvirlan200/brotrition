"use client";
import { NextUIProvider } from "@nextui-org/react";
import MainTable from "@components/MainTable";
import Circular_protein from "@components/Circular_protein";
import Image from "next/image";
import { useEffect, useState } from "react";
import axios from "axios";
import { get } from "mongoose";
const Home = () => {
  const [username, setUsername] = useState("");

  useEffect(() => {
    getUser();
  }, []);

  const getUser = () => {
    axios({
      method: "get",
      url: "http://localhost:3001/Home",
      withCredentials: true,
    })
      .then((res) => {
        setUsername(res.data.email);
      })
      .catch((err) => console.log(err));
  };

  return (
    <NextUIProvider>
      <section className="w-full flex-center flex-col">
        <h1 className="head_text text-center green_gradient">BroTrition</h1>
        <h2>Logged user: {username}</h2>
        <p className="desc text-center">
          BroTrition is a web application that helps you track your daily
          nutrition intake. It provides you with a list of foods and their
          nutritional values. You can add the foods you eat to your daily log
          and track your daily nutrition intake. You can also set your daily
          nutrition goals and track your progress. BroTrition is a simple and
          easy-to-use application that helps you stay healthy and fit.
        </p>

        <div className="flex-center w-full">
          <MainTable />
        </div>

        <div className="flex-center">
          <Circular_protein />
          <Circular_protein />
          <Circular_protein />
        </div>

        <div>
          <Image
            src="/brotrition_assets/png/pear.png" // Assuming your image is stored in the brotrition_assets directory
            width={30} // Desired width of your image in pixels
            height={30} // Desired height of your image in pixels
            alt="Description of your image" // Always include an alt attribute for accessibility
          />
        </div>
      </section>
    </NextUIProvider>
  );
};

export default Home;