import Icon from "@/Components/Icon";

interface TitleProps {
    name: string;
    icon: string;
}

function Title({ name, icon }: TitleProps) {
    return (
        <h1 className="text-3xl font-bold flex gap-4 items-center">
            <Icon name={icon} size={32} />
            {name}
        </h1>
    );
}

export default Title;
