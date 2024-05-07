import Image from "next/image";

export default function BoardMember({name, position, image}) {
    return (
          <a 
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            className=" z-0 group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            rel="noopener noreferrer"
          >
            <h2 className="mb-3 text-2xl font-semibold">
              {name}
            </h2>
            <h2 className="mb-3 text-xl font-semibold italic">
              {position}
            </h2>
            <Image
              src={image}
              alt="Board Member Image"
              width={250}
              height={100}
              priority
              />
          </a>
    );
}
