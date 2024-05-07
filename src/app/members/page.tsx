import Image from "next/image";
import TopNavbar from "../topnavbar";
import React from "react";
import Link from "next/link";

export default function Home() {

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-8">
      <TopNavbar/>
    </main>
  );
}