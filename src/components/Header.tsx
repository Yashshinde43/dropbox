"use client";
import {
  SignInButton,
  SignOutButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { ThemeToggler } from "./ThemeToggler";

const Header = () => {
  return (
    <div className="flex item-center justify-between lg:flex-row" >
      <Link href={"/"} className="flex items-center space-x-3">
        <div className="bg-[#0160FE] w-fit">
          <Image
            src={
              "https://www.shareicon.net/download/2016/07/13/606936_dropbox_2048x2048.png"
            }
            alt="logo"
            width={50}
            height={50}
            className="invert"
          ></Image>
        </div>
        <h1 className="font-bold text-2xl">DROPBOX 2.O</h1>
      </Link>
      <div className="px-6 flex space-x-2 items-center text-xl m-1">
        <ThemeToggler />
        <SignedOut>
          <SignInButton mode="modal"/>
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </div>
  );
};

export default Header;
