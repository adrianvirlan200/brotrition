"use client";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@nextui-org/react";
import Image from "next/image";
import { useRouter } from "next/navigation";


const TopNav = () => {
  const router = useRouter();
  
  const handleLogIn = () => {
    router.push("/Login");
  };

  return (
    <div className="lg:mb-16 w-screen h-16 pr-5">
      <Navbar shouldHideOnScroll isBordered maxWidth="full">
        <NavbarBrand>
          <Link color="foreground" className="text-xl text-bold" href="/">
            <Image
              src="/brotrition_assets/png/pear.png"
              width={60}
              height={60}
              alt="Description of your image"
            />
            <p className="font-bold text-inherit text-4xl green_gradient">
              BroTrition
            </p>
          </Link>
        </NavbarBrand>
        <NavbarContent className="hidden lg:flex gap-16" justify="end">
          <NavbarItem>
            <Link color="foreground" className="text-xl text-bold" href="#">
              About
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" className="text-xl text-bold" href="#">
              Products
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link href="#" aria-current="page" className="text-xl text-bold">
              Support
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="#" className="text-xl text-bold">
              Blog
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="#" className="text-xl text-bold">
              Forum
            </Link>
          </NavbarItem>
        </NavbarContent>
        <NavbarContent className="lg:flex gap-16" justify="end">
          <NavbarItem className="lg:flex">
            <Button
              onClick={handleLogIn}
              className="border-2 border-green-700 bg-transparent text-2xl text-bold"
            >
              Log In
            </Button>
          </NavbarItem>
        </NavbarContent>
      </Navbar>
    </div>
  );
};

export default TopNav;
