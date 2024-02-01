"use client";

import { useModal } from "@/hooks/useModal";
import Modal from "./Modal";

function ModalWindows({ name }: { name: string }) {
    let [openTasks, openModalTasks, closeModalTasks] = useModal();
    if (name === "CreateTask")
        return (
            <Modal
                openModal={openModalTasks}
                closeModal={closeModalTasks}
                isOpen={openTasks}
                windowPercentage={70}
            >
                <h1 className="text-3xl font-bold">Modal</h1>
                <p>This is a modal for creating a task, so here I'm</p>
            </Modal>
        );
    return null;
}

export default ModalWindows;
