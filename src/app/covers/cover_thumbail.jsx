import {Card, CardBody, CardFooter, Image} from "@nextui-org/react";

export default function CoverThumbnail({name, image}) {
    return (
        <Card shadow="sm" isPressable onPress={() => console.log("item pressed")}>
            <CardBody className="overflow-visible p-0">
                <Image
                shadow="sm"
                radius="lg"
                width="100%"
                alt="standing next to you"
                className="w-full object-cover h-[140px]"
                src={"http://img.youtube.com/vi/"+ image +"/maxresdefault.jpg"}
                />
            </CardBody>
            <CardFooter className="text-small justify-center">
                <b>{name}</b>
            </CardFooter>
        </Card>
    );
}