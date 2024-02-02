import getContrastColor from "@/utils/contrastColor";
import Icon from "./Icon";
import Menu from "./Menu";

interface Category {
    name: string;
    emoji: string;
    color: string;
}

interface TaskProps {
    name: string;
    description?: string;
    done: boolean;
    date: string;
    category: Category;
    subList: string;
    type: "task" | "subtask";
}

function Task({
    name,
    description,
    done,
    date,
    category,
    subList,
    type,
}: TaskProps) {
    let color = category.color;
    return (
        <div
            className="flex justify-between items-center h-auto p-4 bg-gray-100 rounded-lg mt-4 mb-4"
            style={{
                marginLeft: `${type === "subtask" ? "64px" : "0"}`,
                width: type === "subtask" ? "calc(100% - 64px)" : "100%",
                opacity: done ? 0.5 : 1,
            }}
        >
            <div className="grid grid-cols-[32px_1fr] gap-x-4 gap-y-4">
                <span className="block w-6 h-6 border-2 border-solid border-gray-300 rounded-full"></span>
                <h1
                    className="text-xl"
                    style={{ textDecoration: done ? "line-through" : "none" }}
                >
                    {name}
                </h1>
                {type === "task" ? (
                    <span></span>
                ) : (
                    <Icon name="dots" size={24} />
                )}
                <div>
                    {description && (
                        <p className="text-gray-500 text-sm">{description}</p>
                    )}
                    <p
                        className="text-sm font-bold flex items-center gap-2"
                        style={{ color: color || "#62B9EA" }}
                    >
                        <Icon
                            name="calendar"
                            size={18}
                            color={color || "#62B9EA"}
                        />
                        {date}
                    </p>
                </div>
            </div>
            <div className="flex items-center gap-4 ml-4">
                <div className="flex flex-col gap-2">
                    <p
                        className="w-auto p-2 rounded-lg h-6 flex items-center justify-center font-bold gap-2"
                        style={{
                            backgroundColor: color || "#62B9EA",
                            color: getContrastColor(color || "white"),
                        }}
                    >
                        <span className="emoji">{category.emoji}</span>
                        {category.name}
                    </p>
                    <p
                        className="font-bold text-right"
                        style={{ color: color || "#62B9EA" }}
                    >
                        {subList}
                    </p>
                </div>
                <Menu />
            </div>
        </div>
    );
}

export default Task;
