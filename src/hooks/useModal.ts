import { useState } from "react";

/**
 * Generates a modal functionality.
 *
 * @return {object} An object containing functions to open and close the modal.
 */
export const useModal = (): [boolean, () => void, () => void] => {
    let [open, setOpen] = useState(false);
    const openModal = () => {
        setOpen(true);
    };
    const closeModal = () => {
        setOpen(false);
    };
    return [open, openModal, closeModal];
};
