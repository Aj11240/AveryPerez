"use client";
import TopNavbar from "../topnavbar";
import React from "react";
import CoverThumbnail from "./cover_thumbail";

export default function Page() {

  return (
    <main className="flex min-h-screen flex-col items-center p-8">
      <TopNavbar/>
      <h1 className="text-2xl text-center font-semibold p-8">Latest Cover</h1>
      <div className="my-8 text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:text-left p-10">
        
            <iframe width="560" height="315" src="https://www.youtube.com/embed/RGT685PoZJU?si=r2k0tWpdmBav_TQx" title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen/>

            <h1 className="text-2xl text-center font-semibold p-8">Spring 2024 Covers</h1>
            <div className="gap-2 grid grid-cols-2 sm:grid-cols-4">

                <CoverThumbnail name="Jung Kook(전정국)- ‘Standing Next to You’" image="RGT685PoZJU"/>
                <CoverThumbnail name="ATEEZ (에이티즈) - '미친 폼 (Crazy Form)'" image="HGQYkZBtJFI"/>
                <CoverThumbnail name="LE SSERAFIM (르세라핌) - ‘EASY’" image="ZyB7ee00GBQ"/>

            </div>

            <h1 className="text-2xl text-center font-semibold p-8">Fall 2023 Covers</h1>
            <div className="gap-2 grid grid-cols-2 sm:grid-cols-4">

                <CoverThumbnail name="EVERGLOW (에버글로우) - ‘SLAY’" image="33HeMgKKIh0"/>
                <CoverThumbnail name="XG - ‘NEW DANCE’" image="YZ9VRrTPLvs"/>
                <CoverThumbnail name="SEVENTEEN 세븐틴 - ‘Super’" image="ZAkTSEvtTG8"/>
                <CoverThumbnail name="ITZY 있지 - ‘CAKE’" image="eEdK4yVdhKs"/>

            </div>

            <h1 className="text-2xl text-center font-semibold p-8">Summer 2023 Covers</h1>
            <div className="gap-2 grid grid-cols-2 sm:grid-cols-4">

                <CoverThumbnail name="IVE (아이브) - ‘I AM’" image="BYXcRED7szU"/>
                <CoverThumbnail name="TXT 투모로우바이투게더 - ‘Sugar Rush Ride’" image="co-_4ScFqb4"/>
                <CoverThumbnail name="ENHYPEN 엔하이픈 - ‘Sacrifice (Eat Me Up)’" image="8ChQaQjlSPU"/>
                <CoverThumbnail name="ATEEZ 에이티즈 - ‘Bouncy (K-Hot Chilli Peppers)’" image="lIFoybx-zOc"/>
                <CoverThumbnail name="NewJeans 뉴진스 - 'Cool With You'" image="aq8emNqPvIY"/>

            </div>

            <h1 className="text-2xl text-center font-semibold p-8">Spring 2023 Covers</h1>
            <div className="gap-2 grid grid-cols-2 sm:grid-cols-4">

                <CoverThumbnail name="X1 엑스원 - ‘FLASH’" image="pIbLVT8Lwc0"/>
                <CoverThumbnail name="TWICE 트와이스 - ‘CRY FOR ME’" image="s0iXyDf9G0c"/>
                <CoverThumbnail name="ATEEZ 에이티즈 - ‘Halazia’" image="ARGCmJC59rE"/>
                <CoverThumbnail name="XG - ‘LEFT RIGHT’" image="MasG42QE-gE"/>
                <CoverThumbnail name="THE BOYZ 더보이즈 - ‘ROAR’" image="I-uS_KCqQjI"/>
                <CoverThumbnail name="TWICE 트와이스 - ‘SET ME FREE’" image="NGc_EV9RM5I"/>
                <CoverThumbnail name="EXO 엑소 - ‘Tempo’" image="ucBTH8M0vOA"/>
                <CoverThumbnail name="EVERGLOW 에버글로우 - ‘LA DI DA’" image="_5MKLIwgAa4"/>

            </div>

            <h1 className="text-2xl text-center font-semibold p-8">Fall 2022 Covers</h1>
            <div className="gap-2 grid grid-cols-2 sm:grid-cols-4">

                <CoverThumbnail name="TWICE 트와이스 - ‘Talk That Talk’" image="Us-PHOABXuw"/>
                <CoverThumbnail name="ATEEZ 에이티즈 - ‘Guerrilla’" image="BAC4ailY8B4"/>
                <CoverThumbnail name="Wanna One 워너원 - 'Energetic'" image="EP1qrMg_mJo"/>

            </div>

            <h1 className="text-2xl text-center font-semibold p-8">Summer 2022 Covers</h1>
            <div className="gap-2 grid grid-cols-2 sm:grid-cols-4">

                <CoverThumbnail name="TXT 투모로우바이투게더 - ‘Good Boy Gone Bad’" image="txrgTs76R70"/>
                <CoverThumbnail name="IVE 아이브 - 'Love Dive'" image="-YMKQwoO6XM"/>
                <CoverThumbnail name="NCT DREAM 엔시티 드림 - 'BEATBOX'" image="YS5WoNhHITQ"/>
                <CoverThumbnail name="LE SSERAFIM 르세라핌 - 'Fearless'" image="n60xSU9Tui8"/>

            </div>

        </div>
    </main>
  );
}