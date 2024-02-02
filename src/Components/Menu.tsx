"use client";
import { useState } from "react";
import Icon from "./Icon";

function Menu() {
    let [open, setOpen] = useState<boolean>(false);
    return (
        <div className="relative">
            <div
                className="cursor-pointer hover:opacity-80"
                onClick={() => setOpen(!open)}
            >
                <Icon name="threeDots" size={32} />
            </div>
            <div
                className="absolute bg-white p-4 w-60 rounded flex flex-col gap-2 top-10 right-0 shadow-2xl z-10"
                style={{ display: open ? "flex" : "none" }}
            >
                <button className="hover:bg-gray-300 p-1 h-9 flex align-center justify-center">
                    Editar
                </button>
                <button className="hover:bg-gray-300 p-1 h-9 flex align-center justify-center">
                    Agregar subtarea
                </button>
                <button className="hover:bg-gray-300 p-2 h-9 flex align-center justify-center">
                    Eliminar
                </button>
            </div>
        </div>
    );
}

export default Menu;
