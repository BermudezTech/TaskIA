import Task from "@/Components/Task";
import Title from "@/Components/Title";

function TodayPage() {
    return (
        <>
            <Title name="Hoy" icon="calendar" />
            <Task
                name="Terminar el sidebar de la aplicación"
                description="Lorem ipsum dolor sit amet consectetur. A arcu duis sed eget in mauris in gravida. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea voluptatem ad libero tempora! Repellendus nemo, possimus itaque quidem repellat at reprehenderit mollitia corporis nihil. Accusamus nisi eligendi minima dolores quae."
                done={false}
                date="Hoy, 2:00 p.m."
                category={{ name: "Estudio", emoji: "🎓", color: "#1E9BE1B2" }}
                subList="Control III"
                type="task"
            />
            <Task
                name="Terminar el sidebar de la aplicación"
                done={false}
                date="Hoy, 2:00 p.m."
                category={{ name: "Estudio", emoji: "🎓", color: "#1E9BE1B2" }}
                subList="Control III"
                type="subtask"
            />
        </>
    );
}

export default TodayPage;
