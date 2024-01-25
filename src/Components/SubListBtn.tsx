interface SubListBtnProps {
    progress: number;
    name: string;
    taskCount: number;
    color?: string;
}

function SubListBtn({ progress, name, taskCount, color }: SubListBtnProps) {
    return (
        <div
            className="flex gap-4 items-center justify-between h-6 p-4 rounded-lg font-bold cursor-pointer hover:opacity-80"
            style={{ color: `${color || "#1E9BE1B2"}` }}
        >
            <div className="flex gap-4 items-center">
                <div
                    className="w-5 h-5 rounded-full border border-solid"
                    style={{
                        borderColor: `${color || "#1E9BE1B2"}`,
                        background: `repeating-conic-gradient(
                            from 0deg,
                            ${
                                color || "#1E9BE1B2"
                            } 0deg calc(3.6deg * ${progress}),
                            white calc(3.6deg * ${progress}) calc(3.6deg * 100)
                        )`,
                    }}
                ></div>
                <p>{name}</p>
            </div>
            <p>{taskCount}</p>
        </div>
    );
}

export default SubListBtn;
