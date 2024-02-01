import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import ListBtn from "@/Components/ListBtn";
import NavBtn from "@/Components/NavBtn";
import SubListBtn from "@/Components/SubListBtn";
import Icon from "@/Components/Icon";
import Modal from "@/Components/Modal";
import ModalWindows from "@/Components/ModalWindows";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "TaskIA - AI Tasker",
    description: "Gestiona tus tareas de forma efectiva utilizando AI Tasker",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <div className="content">
                    <aside className="w-full h-screen p-4 flex flex-col justify-between	">
                        {/* MAIN MENU */}
                        <div className="flex flex-col gap-4 ">
                            <NavBtn name="Inicio" icon="home" path="/" />
                            <NavBtn name="Inbox" icon="inbox" />
                            <NavBtn name="Hoy" icon="calendar" path="/today" />
                            <NavBtn name="Proximamente" icon="calendarNext" />
                            <NavBtn
                                name="En cualquier momento"
                                icon="timePass"
                            />
                            <NavBtn name="Algún día" icon="achieved" />
                            <hr className="w-full my-4 border-blue-400 mx-auto" />
                        </div>
                        {/* LISTS */}
                        <div className="flex flex-col gap-4 overflow-y-auto">
                            <ListBtn emoji="🎓" name="Estudio" taskCount={10} />
                            <SubListBtn
                                progress={40}
                                name="Robótica I"
                                taskCount={3}
                            />
                            <SubListBtn
                                progress={80}
                                name="Control III"
                                taskCount={7}
                            />
                            <ListBtn
                                emoji="💻"
                                name="Trabajo"
                                taskCount={10}
                                color="#1EE149B2"
                            />
                            <ListBtn
                                emoji="🧠"
                                name="Personal"
                                taskCount={10}
                                color="#221EE1B2"
                            />
                            <ListBtn
                                emoji="🌐"
                                name="Web development"
                                taskCount={10}
                                color="#1EE1D6B2"
                            />
                        </div>
                        <Link href="/newList">
                            <p className="flex items-center justify-center gap-2 text-sm text-center text-gray-400 cursor-pointer hover:opacity-80">
                                <Icon name="plus" size={24} />
                                Nueva lista
                            </p>
                        </Link>
                    </aside>
                    <main className="overflow-y-auto h-screen">{children}</main>
                </div>
            </body>
        </html>
    );
}
