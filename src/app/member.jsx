"use client";
import {Card, CardBody, CardFooter, Image, useDisclosure, User, Link} from "@nextui-org/react";


export default function Member({name, handle, link, pic, page}) {
    const {isOpen, onOpen, onOpenChange} = useDisclosure();
    return (
        <Card 
            href={page}
            as={Link}
            isPressable
        >
        <User   
            name={name}
            description={(
                <Link href={link} size="sm" isExternal>
                {handle}
                </Link>
            )}
            avatarProps={{
                src: pic
            }}
        >
        </User>
        </Card>
    );
}
