"use client";
import Title from "@/Components/Title";
import Picker from "@emoji-mart/react";
import data from "@emoji-mart/data";
import ReactColorPicker from "@super-effective/react-color-picker";
import { useState } from "react";

function NewList() {
    let [name, setName] = useState<string>("");
    let [emoji, setEmoji] = useState<string>("🎓");
    let [color, setColor] = useState<string>("#3cd6bf");

    const onEmojiSelect = (emoji: any) => {
        console.log(emoji);
        setEmoji(emoji.native);
    };

    let handleColorChange = (color: string) => {
        setColor(color);
    };

    return (
        <>
            <Title name="Nueva Lista" icon="plus" />
            <form className="flex flex-col gap-4 mt-4">
                <label>Nombre de la lista:</label>
                <input
                    type="text"
                    placeholder="Estudio, trabajo, personal, etc"
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                />
                <label>Seleccione un emoji: </label>
                <div className="w-full flex justify-center gap-4 items-center">
                    <Picker
                        data={data}
                        onEmojiSelect={onEmojiSelect}
                        theme="light"
                    />
                    <p className="text-5xl border-2 p-2 border-solid border-gray-300 rounded-full">
                        {emoji}
                    </p>
                </div>
                <label>Color de la lista: </label>
                {/* <div className="w-full flex justify-center"> */}
                <ReactColorPicker onChange={handleColorChange} color={color} />
                {/* </div> */}
                <button
                    type="submit"
                    className="btn w-full mt-4 p-2 rounded bg-green-500 text-white hover:bg-green-600"
                >
                    Crear
                </button>
            </form>
        </>
    );
}

export default NewList;
