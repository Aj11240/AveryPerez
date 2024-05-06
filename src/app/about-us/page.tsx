'use client';
import TopNavbar from "../topnavbar";
import React from "react";
import BoardMember from "./board_member"
import BoardIteration from "./board_iteration"
import {Accordion, AccordionItem} from "@nextui-org/react";


export default function Page() {
    return (
    <main className="flex min-h-screen flex-col items-center p-8">

        <TopNavbar/>
        <div className="my-8 text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:text-left p-10">
            <h1 className="text-2xl text-center font-semibold">Our Mission Statement</h1>
            <br/>
            <p className="text-center">
            Established in 2019, Kosmos is dedicated to spreading K-Pop's phenomenal influence and the excellence of Korean culture around the world.
            </p> 
            <br/>
            <br/>
            <h1 className="text-2xl text-center font-semibold">History of KOSMOS @ Cal</h1>
            <br/>
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
            <BoardMember name="Hoang" position="Executive" message="Rip Gfriend." image="/averyperez.github.io/Hoang.jpg"/>
            <BoardMember name="Lianna" position="Executive" message="Rip Gfriend." image="/averyperez.github.io/Hoang.jpg"/>
            <BoardMember name="Scott" position="Executive Intern" message="Rip Gfriend." image="/averyperez.github.io/Hoang.jpg"/>
            <BoardMember name="Abbie" position="Vice Executive" message="Rip Gfriend." image="/averyperez.github.io/Hoang.jpg"/>
        </div>
        <br/>
        <div className="mb-32 text-center grid lg:grid-cols-4 lg:mb-0 lg:w-full lg:max-w-5xl lg:text-left">
            <BoardMember name="Grace" position="Vice Executive" message="Rip Gfriend." image="/averyperez.github.io/Hoang.jpg"/>
            <BoardMember name="Adriel" position="Design" message="Rip Gfriend." image="/averyperez.github.io/Hoang.jpg"/>
            <BoardMember name="Anna" position="Design Intern" message="Rip Gfriend." image="/averyperez.github.io/Hoang.jpg"/>
            <BoardMember name="Fira" position="Closer Director" message="Rip Gfriend." image="/averyperez.github.io/Hoang.jpg"/>
        </div>
        <br/>
        <div className="mb-32 text-center grid lg:grid-cols-4 lg:mb-0 lg:w-full lg:max-w-5xl lg:text-left">
            <BoardMember name="Vince" position="Closer Director" message="Rip Gfriend." image="/averyperez.github.io/Hoang.jpg"/>
            <BoardMember name="Adriel" position="Design" message="Rip Gfriend." image="/averyperez.github.io/Hoang.jpg"/>
            <BoardMember name="Monica" position="Tech Team" message="Rip Gfriend." image="/averyperez.github.io/Hoang.jpg"/>
            <BoardMember name="Chien-Hao" position="Tech Team Inter" message="Rip Gfriend." image="/averyperez.github.io/Hoang.jpg"/>
        </div>
        <br/>
        <div className="mb-32 text-center grid lg:grid-cols-4 lg:mb-0 lg:w-full lg:max-w-5xl lg:text-left">
            <BoardMember name="Seoyun" position="Tech Team Intern" message="Rip Gfriend." image="/averyperez.github.io/Hoang.jpg"/>
            <BoardMember name="Adriel" position="Design" message="Rip Gfriend." image="/averyperez.github.io/Hoang.jpg"/>
            <BoardMember name="Shiho" position="Social Media" message="Rip Gfriend." image="/averyperez.github.io/Hoang.jpg"/>
            <BoardMember name="Michelle" position="Social Media Intern" message="Rip Gfriend." image="/averyperez.github.io/Hoang.jpg"/>
        </div>
        <br/>
        <div className="mb-32 text-center grid lg:grid-cols-4 lg:mb-0 lg:w-full lg:max-w-5xl lg:text-left">
            <BoardMember name="Angelina" position="Social" message="Rip Gfriend." image="/averyperez.github.io/Hoang.jpg"/>
            <BoardMember name="Brendon" position="Social Intern" message="Rip Gfriend." image="/averyperez.github.io/Hoang.jpg"/>
            <BoardMember name="Justine" position="Finance" message="Rip Gfriend." image="/averyperez.github.io/Hoang.jpg"/>
            <BoardMember name="Fiona" position="Finance Intern" message="Rip Gfriend." image="/averyperez.github.io/Hoang.jpg"/>
        </div>
        <div className="my-8 text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:text-left p-10">
            <h1 className="text-2xl text-center font-semibold">Previous Board Iterations</h1>
        </div>
        <BoardIteration 
        name="Spring 2023" 
        image="/fa22board.jpg" 
        execs={["Executive: Avery Perez", "Executive: Ethan Lai", "Vice Executive: Annie Li", "Vice Executive: Kaleigh Lin"]}
        board={["Social Chair: Vincent Baugh", "Finance Chair: Hannah Chen", "Social Media Manager: Junkee Kim Kim", "Tech Team Lead: Abbie Tsai", "Design Chair: Adriel Vijuan"]}
        interns={["Executive Intern: Hoang Ton", "Finance Intern: Justine Tan", "Social Media Intern: Kyle Kuida", "Social Intern: Wei-Chi Chen"]}
        />

        <BoardIteration 
        name="Fall 2022" 
        image="/averyperez.github.io/fa22board.jpg" 
        execs={["Executive: Avery Perez", "Executive: Ethan Lai", "Vice Executive: Junkee Kim Kim", "Vice Executive: Kaleigh Lin"]}
        board={["Social Chair: Xin Wei Yap", "Social Chair: Vincent Baugh", "Finance Chair: Hannah Chen", "Social Media Manager: Sarah Kung", "Tech Team Lead: Abbie Tsai", "Design Chair: Adriel Vijuan"]}
        interns={["Executive Intern: Nicole Cheng", "Finance Intern: Angela Gao", "Tech Lead Intern: Yiwei Yu", "Communications Intern: Julia Pan", "Social Media Intern: Annie Li"]}
        />

        <BoardIteration 
        name="Spring 2022" 
        image="/averyperez.github.io/sp22board.JPG" 
        execs={["Executive: Vivian Le", "Executive: Sean Kelly", "Vice Executive: Avery Perez", "Vice Executive: Ethan Lai"]}
        board={["Social Chair: Kaleigh Lin", "Finance Chair: Hannah Chen", "Social Media Manager: Sarah Kung", "Tech Team Lead: Novia Kayvetz-Vuong", "Design Chair: Adriel Vijuan"]}
        interns={["Executive Intern: Claire Lee", "Executive Intern: Harika Gopi", "Tech Lead Intern: William Xu"]}
        />

        <BoardIteration 
        name="Fall 2021" 
        image="/averyperez.github.io/fa21board.jpg" 
        execs={["Executive: Vivian Le", "Executive: Sean Kelly", "Vice Executive: Giorgia Foresta"]}
        board={["Social: LeeAnne Brown", "Finance: Junkee Kim Kim", "Design: Sarah Kung", "Social Media: Harika Gopi", "Communications: Avery Perez", "Communications: Novia Kayvetz-Vuong"]}
        interns={["Executive Intern: Elle Yoo", "Social Media Intern: Anethia Pham", "Finance Intern: Hannah Chen"]}
        />

        <BoardIteration 
        name="Spring 2021" 
        image="/averyperez.github.io/sp21board.jpg" 
        execs={["Executive: Vivian Le", "Executive: Sean Kelly", "Vice Executive: Giorgia Foresta"]}
        board={["Communications: Novia Kayvetz-Vuong", "Social Media: Harika Gopi"]}
        interns={["None"]}
        />

        <BoardIteration 
        name="Fall 2020" 
        image="/averyperez.github.io/fa20board.jpg" 
        execs={["Executive: Vivian Le", "Executive: Sean Kelly"]}
        board={["None"]}
        interns={["None"]}
        />

        <BoardIteration 
        name="Fall 2019 & Spring 2020" 
        image="/averyperez.github.io/OGboard.jpg" 
        execs={["Executive: Vivian Le", "Executive: Sean Kelly", "Executive: Janice Ji", "Executive: Yeseul Cho"]}
        board={["None"]}
        interns={["None"]}
        />

    </main>
    );
  }