"use client";
import Title from "@/Components/Title";
import { useState } from "react";

function Inbox() {
    let [IACreate, setIACreate] = useState<boolean>(false);
    return (
        <div>
            <Title name="Nueva tarea" icon="inbox" />
            <div className="flex gap-4 items-center justify-center w-full">
                <button
                    style={{ fontWeight: IACreate ? "bold" : "normal" }}
                    onClick={() => setIACreate(true)}
                >
                    Crear con Inteligencia Artificial
                </button>
                <div className="w-1 h-6 border-2 border-solid border-gray-300 mt-2 mb-2"></div>
                <button
                    style={{ fontWeight: IACreate ? "normal" : "bold" }}
                    onClick={() => setIACreate(false)}
                >
                    Crear de forma manual
                </button>
            </div>
            {!IACreate && (
                <form className="flex flex-col gap-4 mt-4">
                    <label htmlFor="name">Nombre de la tarea: </label>
                    <input
                        type="text"
                        name="name"
                        placeholder="Completar ensayo, realizar informe, estudiar..."
                    />
                    <label htmlFor="description">
                        Descripción de la tarea:
                    </label>
                    <textarea
                        name="description"
                        placeholder="Describir el contenido de la tarea..."
                        className="w-full h-40 border-2 border-solid border-gray-300 p-2 rounded-lg resize-none"
                    />
                    <label htmlFor="list">Seleccione la lista:</label>
                    <select
                        name="list"
                        className="w-full p-1 rounded border-2 border-solid border-gray-300"
                    >
                        <option value="work">Trabajo</option>
                        <option value="study">Estudio</option>
                        <option value="personal">Personal</option>
                    </select>
                    <label htmlFor="category">Seleccione la categoria:</label>
                    <select
                        name="category"
                        className="w-full p-1 rounded border-2 border-solid border-gray-300"
                    >
                        <option value="work">Trabajo</option>
                        <option value="study">Estudio</option>
                        <option value="personal">Personal</option>
                    </select>
                    <button
                        type="submit"
                        className="btn w-full mt-4 p-2 rounded bg-green-500 text-white hover:bg-green-600"
                    >
                        Crear
                    </button>
                </form>
            )}
        </div>
    );
}

export default Inbox;
