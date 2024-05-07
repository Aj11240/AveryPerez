import {Image} from "@nextui-org/react";
import TopNavbar from "../../topnavbar";
import React from "react";
import Link from "next/link";

export default function Home() {

  return (
    <main className="flex min-h-screen flex-col items-center p-8">
      <TopNavbar/>
      <div className="my-8 text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:text-left p-10">
        <div>
        <h1 className="text-2xl text-center font-semibold">Hoang Ton</h1>
        <h1 className="text-lg text-center font-semibold">@hoon.evday</h1>
        </div>
        <br/>
        <Image 
        src="/kosmos/Hoang.jpg"
        isZoomed
        width={240}
        height={240}
        />
      </div>
    </main>
  );
}