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
                <CoverThumbnail name="BLACKPINK 블랙핑크 x PUBG MOBILE - ‘Ready For Love’" image="EFaGHTVk2so"/>
                <CoverThumbnail name="NCT DREAM 엔시티 드림 - 'BEATBOX'" image="YS5WoNhHITQ"/>
                <CoverThumbnail name="LE SSERAFIM 르세라핌 - 'Fearless'" image="n60xSU9Tui8"/>

            </div>

            <h1 className="text-2xl text-center font-semibold p-8">Spring 2022 Covers</h1>
            <div className="gap-2 grid grid-cols-2 sm:grid-cols-4">

                <CoverThumbnail name="KEP1ER 케플러 - 'WADADA'" image="K3WOuoH9x_M"/>
                <CoverThumbnail name="NCT 127 엔씨티 127 - ‘FAVORITE (VAMPIRE)’" image="V3P21XWFgpk"/>
                <CoverThumbnail name="IVE 아이브 - 'Eleven’" image="qGWJdQGiPKw"/>
                <CoverThumbnail name="ENHYPEN 엔하이픈 - ‘Blessed-Cursed’" image="Ue06KHOPeuE"/>
                <CoverThumbnail name="GOT the Beat 걸스온탑 - ‘STEP BACK’" image="HHRZCzwJBLU"/>
                <CoverThumbnail name="SEVENTEEN 세븐틴 - ‘Thanks 고맙다’" image="nd6PMFi2Kgc"/>
                <CoverThumbnail name="NMIXX 엔믹스 - ‘O.O’" image="NE8CRdotYnc"/>
                <CoverThumbnail name="(G)I-DLE (여자)아이들 - ‘TOMBOY’" image="XOuUCSnOcOU"/>
                <CoverThumbnail name="Red Velvet 레드벨벳 - ‘Feel My Rhythm’" image="luRjYJ38vMo"/>
                <CoverThumbnail name="Stray Kids 스트레이 키즈 - ‘MANIAC’" image="b8BACZiWcD4"/>
                <CoverThumbnail name="STAYC 스테이씨 - ‘RUN2U’" image="s5gFzjs4SzM"/>

            </div>

            <h1 className="text-2xl text-center font-semibold p-8">Fall 2021 Covers</h1>
            <div className="gap-2 grid grid-cols-2 sm:grid-cols-4">

                <CoverThumbnail name="STAYC 스테이씨 - ‘Stereotype’" image="0cIizStTIqA"/>
                <CoverThumbnail name="TXT 투모로우바이투게더 - ‘0X1=LOVESONG (I Know I Love You)’" image="N4WOuLnpZ2I"/>
                <CoverThumbnail name="TWICE 트와이스 - ‘Alcohol-Free ’" image="ykAp9geN8uc"/>
                <CoverThumbnail name="ENHYPEN 엔하이픈 - ‘Drunk-Dazed’" image="-2h_2yoCnYA"/>
                <CoverThumbnail name="ITZY 있지 - ‘LOCO’" image="ObelaU86cCc"/>
                <CoverThumbnail name="GFRIEND 여자친구 - ‘FEVER’" image="bOacQt-56hE"/>
                <CoverThumbnail name="ATEEZ 에이티즈 - ‘Deja Vu’" image="6w1r6oqn6T4"/>

            </div>

            <h1 className="text-2xl text-center font-semibold p-8">Spring 2021 Covers</h1>
            <div className="gap-2 grid grid-cols-2 sm:grid-cols-4">

                <CoverThumbnail name="ITZY 있지 - NOT SHY" image="dtIiAdNodYE"/>

            </div>

            <h1 className="text-2xl text-center font-semibold p-8">Spring 2020 Covers</h1>
            <div className="gap-2 grid grid-cols-2 sm:grid-cols-4">

                <CoverThumbnail name="(G)I-DLE ((여자)아이들) - LION" image="F3U20C8fWC4"/>
                <CoverThumbnail name="TXT (투마로우바이투게더) - 9와 4분의 3 승강장에서 너를 기다려 (Run Away)" image="-Dy4e2xzq58"/>
                <CoverThumbnail name="TWICE 트와이스 - Feel Special" image="C_ZM8Bx8XNA"/>
                <CoverThumbnail name="BLACKPINK 블랙핑크 - KILL THIS LOVE" image="snz7ZgoTbxA"/>
                <CoverThumbnail name="MAMAMOO 마마무 - ‘HIP’" image="MA1J57YQIn4"/>

            </div>

            <h1 className="text-2xl text-center font-semibold p-8">Fall 2019 Covers</h1>
            <div className="gap-2 grid grid-cols-2 sm:grid-cols-4">

                <CoverThumbnail name="ITZY 있지 - ICY" image="tpkEjKt2XHU"/>
                <CoverThumbnail name="BTS 방탄소년단 - FAKE LOVE" image="ra77vZLZrLw"/>
                <CoverThumbnail name="TWICE 트와이스 - FANCY" image="v_QENomVTm0"/>

            </div>

        </div>
    </main>
  );
}