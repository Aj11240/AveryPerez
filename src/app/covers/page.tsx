import Image from "next/image";
import TopNavbar from "../topnavbar";
import React from "react";

export default function Page() {

  return (
    <main className="flex min-h-screen flex-col items-center p-8">
      <TopNavbar/>
      <div className="my-8 text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:text-left p-10">
            <h1 className="text-2xl text-center font-semibold">Latest Cover</h1>
            <br/>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/RGT685PoZJU?si=r2k0tWpdmBav_TQx" title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"/>
        </div>
    </main>
  );
}