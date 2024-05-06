'use client';
import TopNavbar from "../topnavbar";
import React from "react";
import BoardMember from "./board_member"
import BoardIteration from "./board_iteration"

export default function Page() {
    return (
    <main className="flex min-h-screen flex-col items-center p-8">
        <TopNavbar/>
        <div className="my-8 text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:text-left p-10">
            <h1 className="text-2xl text-center font-semibold">Our Mission Statement</h1>
            <p className="text-center">
            Established in 2019, Kosmos is dedicated to spreading K-Pop's phenomenal influence and the excellence of Korean culture around the world.
            </p> 
            <br/>
            <h1 className="text-2xl text-center font-semibold">History of KOSMOS @ Cal</h1>
            <p className="text-center">
            KOSMOS was founded in Fall 2019 by UC Berkeley students Vivian Le, Sean Kelly, Janice Wenyao Ji, and Yeseul Cho. They wanted to create a cover Twice's "Fancy"
            with a group of friends, which slowly turned into the creation of more and more kpop covers of popular artists
            like BTS, Itzy, TXT, and Blackpink. Following the remote semesters of Fall '20 and Spring '21, KOSMOS has grown massively into a full-fledged
            dance team, producing 10+ dance covers per semester and now performs semesterly at events like the EAU Night Market and AFX Showcase.
            </p>
            <br/>
            <h1 className="text-2xl text-center font-semibold">Meet our Board!</h1>
        </div>
        <div className="mb-32 text-center grid lg:grid-cols-4 lg:mb-0 lg:w-full lg:max-w-5xl lg:text-left">
            <BoardMember name="Hoang" position="Executive" message="Rip Gfriend." image="/Hoang.jpg"/>
            <BoardMember name="Lianna" position="Executive" message="Rip Gfriend." image="/Hoang.jpg"/>
            <BoardMember name="Scott" position="Executive Intern" message="Rip Gfriend." image="/Hoang.jpg"/>
            <BoardMember name="Abbie" position="Vice Executive" message="Rip Gfriend." image="/Hoang.jpg"/>
        </div>
        <br/>
        <div className="mb-32 text-center grid lg:grid-cols-4 lg:mb-0 lg:w-full lg:max-w-5xl lg:text-left">
            <BoardMember name="Grace" position="Vice Executive" message="Rip Gfriend." image="/Hoang.jpg"/>
            <BoardMember name="Adriel" position="Design" message="Rip Gfriend." image="/Hoang.jpg"/>
            <BoardMember name="Anna" position="Design Intern" message="Rip Gfriend." image="/Hoang.jpg"/>
            <BoardMember name="Fira" position="Closer Director" message="Rip Gfriend." image="/Hoang.jpg"/>
        </div>
        <br/>
        <div className="mb-32 text-center grid lg:grid-cols-4 lg:mb-0 lg:w-full lg:max-w-5xl lg:text-left">
            <BoardMember name="Vince" position="Closer Director" message="Rip Gfriend." image="/Hoang.jpg"/>
            <BoardMember name="Adriel" position="Design" message="Rip Gfriend." image="/Hoang.jpg"/>
            <BoardMember name="Monica" position="Tech Team" message="Rip Gfriend." image="/Hoang.jpg"/>
            <BoardMember name="Chien-Hao" position="Tech Team Inter" message="Rip Gfriend." image="/Hoang.jpg"/>
        </div>
        <br/>
        <div className="mb-32 text-center grid lg:grid-cols-4 lg:mb-0 lg:w-full lg:max-w-5xl lg:text-left">
            <BoardMember name="Seoyun" position="Tech Team Intern" message="Rip Gfriend." image="/Hoang.jpg"/>
            <BoardMember name="Adriel" position="Design" message="Rip Gfriend." image="/Hoang.jpg"/>
            <BoardMember name="Shiho" position="Social Media" message="Rip Gfriend." image="/Hoang.jpg"/>
            <BoardMember name="Michelle" position="Social Media Intern" message="Rip Gfriend." image="/Hoang.jpg"/>
        </div>
        <br/>
        <div className="mb-32 text-center grid lg:grid-cols-4 lg:mb-0 lg:w-full lg:max-w-5xl lg:text-left">
            <BoardMember name="Angelina" position="Social" message="Rip Gfriend." image="/Hoang.jpg"/>
            <BoardMember name="Brendon" position="Social Intern" message="Rip Gfriend." image="/Hoang.jpg"/>
            <BoardMember name="Justine" position="Finance" message="Rip Gfriend." image="/Hoang.jpg"/>
            <BoardMember name="Fiona" position="Finance Intern" message="Rip Gfriend." image="/Hoang.jpg"/>
        </div>
        <div className="my-8 text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:text-left p-10">
            <h1 className="text-2xl text-center font-semibold">Previous Board Iterations</h1>
        </div>
        <div className="mb-32 text-center grid lg:grid-cols-2 lg:mb-0 lg:w-full lg:max-w-5xl lg:text-left">
            <BoardIteration name="Spring 2023" image="/fa22board.jpg"/>
            <BoardIteration name="Fall 2022" image="/fa22board.jpg"/>
        </div>
        <div className="mb-32 text-center grid lg:grid-cols-2 lg:mb-0 lg:w-full lg:max-w-5xl lg:text-left">
            <BoardIteration name="Spring 2022" image="/sp22board.jpg"/>
            <BoardIteration name="Fall 2021" image="/fa21board.jpg"/>
        </div>
        <div className="mb-32 text-center grid lg:grid-cols-2 lg:mb-0 lg:w-full lg:max-w-5xl lg:text-left">
            <BoardIteration name="Spring 2021" image="/sp21board.jpg"/>
            <BoardIteration name="Fall 2020" image="/fa20board.jpg"/>
        </div>
        <div className="mb-32 text-center grid lg:grid-cols-2 lg:mb-0 lg:w-full lg:max-w-5xl lg:text-left">
            <BoardIteration name="Fall 2019 & Spring 2020" image="/ogboard.jpg"/>
        </div>
    </main>
    );
  }