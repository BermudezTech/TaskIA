import Icon from "./Icon";

interface NavBtnProps {
    name: string;
    size?: number;
    icon: string;
}

function NavBtn({ name, size, icon }: NavBtnProps) {
    return (
        <div className="flex gap-4 items-center h-8 p-4">
            <Icon name={icon} size={size || 24} />
            <p>{name}</p>
        </div>
    );
}

export default NavBtn;
