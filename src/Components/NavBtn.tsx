"use client";
import { usePathname } from "next/navigation";
import Icon from "./Icon";
import Link from "next/link";

interface NavBtnProps {
    name: string;
    size?: number;
    icon: string;
    path?: string;
}

function NavBtn({ name, size, icon, path }: NavBtnProps) {
    const pathName = usePathname();
    let samePath = pathName === path;
    return (
        <Link href={path || ""}>
            <div
                className="flex gap-4 items-center h-8 p-4 cursor-pointer rounded-lg hover:opacity-80"
                style={{
                    backgroundColor: samePath ? "#1E9BE140" : "transparent",
                }}
            >
                <Icon name={icon} size={size || 24} />
                <p>{name}</p>
            </div>
        </Link>
    );
}

export default NavBtn;
