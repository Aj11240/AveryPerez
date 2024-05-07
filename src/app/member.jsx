import {User, Link} from "@nextui-org/react"

export default function Member({name, handle, link, pic}) {
    return (
        <a>
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
        />
        </a>
    );
}
