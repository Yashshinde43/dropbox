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
    <div className="flex item-center justify-between lg:flex-row">
      <Link href={"/"} className="flex items-center space-x-3">
        <div className="bg-[#0160FE] w-fit p-1 ml-1 rounded-2xl">
          <Image
            src={
              "https://www.shareicon.net/data/128x128/2016/07/02/789726_folder_512x512.png"
            }
            alt="logo"
            width={50}
            height={50}
            className="invert"
          ></Image>
        </div>
        <h1 className="font-bold text-2xl p-1">FileDrop</h1>
      </Link>
      <div className="px-6 flex space-x-2 items-center text-xl m-2">
        <ThemeToggler />
        <SignedOut>
          <SignInButton mode="modal" />
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </div>
  );
};

export default Header;
