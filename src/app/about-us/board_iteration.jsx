"use client";
import Image from "next/image";
import React from "react";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Accordion, AccordionItem, ScrollShadow} from "@nextui-org/react";

export default function BoardIteration({name, image, execs, board, interns}) {
    return (
        <div className="mb-32 text-center grid lg:grid-cols-1 lg:mb-0 lg:w-full lg:max-w-5xl lg:text-left">

          <a
            className="flex flex-row gap-16 group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          >
            
            <div>
              <h2 className="mb-3 text-2xl font-semibold">
                {name}
              </h2>
              <Image
              src={image}
              alt="Board Iteration Image"
              width={500}
              height={100}
              priority
                />
            </div>

            <div>
              <h3 className="mb-3 text-xl font-semibold">Executives</h3>
              <ul className="list-none">
              {execs.map((item) => (
                <li>{item}</li>
              ))}
              </ul>
            <br/>

            <h3 className="mb-3 text-xl font-semibold">Board</h3>
              <ul className="list-none">
              {board.map((item) => (
                <li>{item}</li>
              ))}
              </ul>
            <br/>
            
            <h3 className="mb-3 text-xl font-semibold">Interns</h3>
              <ul className="list-none">
              {interns.map((item) => (
                <li>{item}</li>
              ))}
              </ul>
            </div>

          </a>  
       
        </div>
    );
}