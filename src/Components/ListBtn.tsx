import contrastColor from "@/utils/contrastColor.js";

interface ListBtnProps {
    emoji: string;
    name: string;
    taskCount: number;
    color?: string;
}

function ListBtn({ emoji, name, taskCount, color }: ListBtnProps) {
    return (
        <div
            className={`flex gap-4 items-center justify-between h-10 p-4 rounded-lg font-bold`}
            style={{
                backgroundColor: `${color || "#1E9BE1B2"}`,
                color: contrastColor(color || "white"),
            }}
        >
            <div className="flex gap-4 items-center">
                <p className="text-2xl emoji">{emoji}</p>
                <p>{name}</p>
            </div>
            <p>{taskCount}</p>
        </div>
    );
}

export default ListBtn;
