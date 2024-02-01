function Modal({
    children,
    openModal,
    closeModal,
    isOpen = false,
    windowPercentage = 50,
}: {
    children: React.ReactNode;
    openModal: () => void;
    closeModal: () => void;
    isOpen?: boolean;
    windowPercentage?: number;
}) {
    return (
        <div
            className="modal flex justify-center items-center fixed w-full h-full bg-black bg-opacity-50"
            onClick={closeModal}
            style={{
                display: isOpen ? "flex" : "none",
            }}
        >
            <div
                className="modal-content bg-white p-4 rounded"
                style={{ width: `${windowPercentage}%` }}
            >
                <div
                    className="modal-close cursor-pointer float-right"
                    onClick={closeModal}
                >
                    X
                </div>
                {children}
            </div>
        </div>
    );
}

export default Modal;
