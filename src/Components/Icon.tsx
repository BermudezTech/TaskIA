interface IconProps {
    size: number;
    name: string;
    color?: string;
}

function Icon({ size, name, color }: IconProps) {
    if (name === "home") {
        return (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width={`${size}`}
                height={`${size}`}
                viewBox="0 0 24 24"
                fill={color || "#8D1E8F"}
            >
                <path
                    d="M4 21V9L12 3L20 9V21H14V14H10V21H4Z"
                    fill={color || "#8D1E8F"}
                />
            </svg>
        );
    } else if (name === "inbox") {
        return (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width={`${size}`}
                height={`${size}`}
                viewBox="0 0 24 24"
                fill="none"
            >
                <path
                    d="M5 21C4.45 21 3.97933 20.8043 3.588 20.413C3.19667 20.0217 3.00067 19.5507 3 19V5C3 4.45 3.196 3.97933 3.588 3.588C3.98 3.19667 4.45067 3.00067 5 3H19C19.55 3 20.021 3.196 20.413 3.588C20.805 3.98 21.0007 4.45067 21 5V19C21 19.55 20.8043 20.021 20.413 20.413C20.0217 20.805 19.5507 21.0007 19 21H5ZM12 16C12.6333 16 13.2083 15.8167 13.725 15.45C14.2417 15.0833 14.6 14.6 14.8 14H19V5H5V14H9.2C9.4 14.6 9.75833 15.0833 10.275 15.45C10.7917 15.8167 11.3667 16 12 16Z"
                    fill={color || "#129F97"}
                />
            </svg>
        );
    } else if (name === "calendar") {
        return (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width={`${size}`}
                height={`${size}`}
                viewBox="0 0 24 24"
                fill="none"
            >
                <path
                    d="M9 16.5C8.3 16.5 7.70833 16.2583 7.225 15.775C6.74167 15.2917 6.5 14.7 6.5 14C6.5 13.3 6.74167 12.7083 7.225 12.225C7.70833 11.7417 8.3 11.5 9 11.5C9.7 11.5 10.2917 11.7417 10.775 12.225C11.2583 12.7083 11.5 13.3 11.5 14C11.5 14.7 11.2583 15.2917 10.775 15.775C10.2917 16.2583 9.7 16.5 9 16.5ZM5 22C4.45 22 3.97933 21.8043 3.588 21.413C3.19667 21.0217 3.00067 20.5507 3 20V6C3 5.45 3.196 4.97933 3.588 4.588C3.98 4.19667 4.45067 4.00067 5 4H6V2H8V4H16V2H18V4H19C19.55 4 20.021 4.196 20.413 4.588C20.805 4.98 21.0007 5.45067 21 6V20C21 20.55 20.8043 21.021 20.413 21.413C20.0217 21.805 19.5507 22.0007 19 22H5ZM5 20H19V10H5V20Z"
                    fill={color || "#9C1212"}
                />
            </svg>
        );
    } else if (name === "calendarNext") {
        return (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width={`${size}`}
                height={`${size}`}
                viewBox="0 0 24 24"
                fill="none"
            >
                <path
                    d="M15 22V20H19V10H5V14H3V6C3 5.45 3.196 4.97933 3.588 4.588C3.98 4.19667 4.45067 4.00067 5 4H6V2H8V4H16V2H18V4H19C19.55 4 20.021 4.196 20.413 4.588C20.805 4.98 21.0007 5.45067 21 6V20C21 20.55 20.8043 21.021 20.413 21.413C20.0217 21.805 19.5507 22.0007 19 22H15ZM8 24L6.6 22.6L9.175 20H1V18H9.175L6.6 15.4L8 14L13 19L8 24Z"
                    fill={color || "#C56308"}
                />
            </svg>
        );
    } else if (name === "timePass") {
        return (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width={`${size}`}
                height={`${size}`}
                viewBox="0 0 24 24"
                fill="none"
            >
                <g clipPath="url(#clip0_2_25)">
                    <path
                        d="M12 1.33334C9.89032 1.33334 7.82803 1.95893 6.0739 3.131C4.31978 4.30307 2.9526 5.96897 2.14527 7.91805C1.33793 9.86713 1.1267 12.0118 1.53827 14.081C1.94985 16.1501 2.96575 18.0507 4.45751 19.5425C5.94927 21.0342 7.84989 22.0501 9.91902 22.4617C11.9882 22.8733 14.1329 22.6621 16.0819 21.8547C18.031 21.0474 19.6969 19.6802 20.869 17.9261C22.0411 16.172 22.6667 14.1097 22.6667 12C22.6667 9.17103 21.5428 6.45793 19.5425 4.45754C17.5421 2.45715 14.829 1.33334 12 1.33334ZM16.1333 15.4533C16.0849 15.5266 16.0224 15.5896 15.9496 15.6387C15.8767 15.6878 15.7949 15.722 15.7088 15.7393C15.6227 15.7567 15.534 15.7568 15.4478 15.7398C15.3616 15.7227 15.2797 15.6888 15.2067 15.64L11.2733 12.9733V7.16668C11.2733 6.98987 11.3436 6.8203 11.4686 6.69527C11.5936 6.57025 11.7632 6.50001 11.94 6.50001C12.1168 6.50001 12.2864 6.57025 12.4114 6.69527C12.5364 6.8203 12.6067 6.98987 12.6067 7.16668V12.2667L15.94 14.5267C16.0138 14.5746 16.0774 14.6366 16.1271 14.7092C16.1768 14.7819 16.2117 14.8636 16.2297 14.9497C16.2476 15.0359 16.2484 15.1247 16.2318 15.2112C16.2153 15.2976 16.1818 15.3799 16.1333 15.4533ZM15.9 5.48668C14.962 4.92129 13.9127 4.56551 12.8243 4.44375C11.7358 4.322 10.6339 4.43714 9.59413 4.78129C8.55436 5.12544 7.60135 5.69045 6.80047 6.43756C5.9996 7.18466 5.36982 8.09617 4.95435 9.10955C4.53888 10.1229 4.34754 11.2142 4.39348 12.3085C4.43941 13.4028 4.72153 14.4742 5.22046 15.4492C5.7194 16.4241 6.42335 17.2797 7.28402 17.957C8.14469 18.6344 9.1417 19.1175 10.2067 19.3733L9.99998 20.42C8.77861 20.1357 7.63348 19.5898 6.64365 18.8199C5.65381 18.0499 4.84285 17.0744 4.26674 15.9605C3.69063 14.8467 3.3631 13.6211 3.30676 12.3683C3.25043 11.1156 3.46662 9.86552 3.94043 8.70446C4.41423 7.54339 5.13436 6.49898 6.05109 5.64332C6.96782 4.78766 8.05933 4.14113 9.25025 3.74836C10.4412 3.3556 11.7031 3.22596 12.949 3.36839C14.1949 3.51082 15.3951 3.92193 16.4667 4.57334L15.9 5.48668Z"
                        fill={color || "#E0D700"}
                    />
                </g>
                <defs>
                    <clipPath id="clip0_2_25">
                        <rect
                            width={`${size}`}
                            height={`${size}`}
                            fill="white"
                        />
                    </clipPath>
                </defs>
            </svg>
        );
    } else if (name === "achieved") {
        return (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width={`${size}`}
                height={`${size}`}
                viewBox="0 0 24 24"
                fill="none"
            >
                <path
                    d="M3 3H21V7H3V3ZM4 8H20V21H4V8ZM9.5 11C9.36739 11 9.24021 11.0527 9.14645 11.1464C9.05268 11.2402 9 11.3674 9 11.5V13H15V11.5C15 11.3674 14.9473 11.2402 14.8536 11.1464C14.7598 11.0527 14.6326 11 14.5 11H9.5Z"
                    fill={color || "#129F64"}
                />
            </svg>
        );
    } else if (name === "plus") {
        return (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width={`${size}`}
                height={`${size}`}
                viewBox="0 0 24 24"
                fill="none"
            >
                <path
                    d="M18 10H14V6C14 5.46957 13.7893 4.96086 13.4142 4.58579C13.0391 4.21071 12.5304 4 12 4C11.4696 4 10.9609 4.21071 10.5858 4.58579C10.2107 4.96086 10 5.46957 10 6L10.071 10H6C5.46957 10 4.96086 10.2107 4.58579 10.5858C4.21071 10.9609 4 11.4696 4 12C4 12.5304 4.21071 13.0391 4.58579 13.4142C4.96086 13.7893 5.46957 14 6 14L10.071 13.929L10 18C10 18.5304 10.2107 19.0391 10.5858 19.4142C10.9609 19.7893 11.4696 20 12 20C12.5304 20 13.0391 19.7893 13.4142 19.4142C13.7893 19.0391 14 18.5304 14 18V13.929L18 14C18.5304 14 19.0391 13.7893 19.4142 13.4142C19.7893 13.0391 20 12.5304 20 12C20 11.4696 19.7893 10.9609 19.4142 10.5858C19.0391 10.2107 18.5304 10 18 10Z"
                    fill={color || "#484848"}
                />
            </svg>
        );
    } else if (name === "threeDots") {
        return (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width={`${size}`}
                height={`${size}`}
                viewBox="0 0 32 32"
                fill="none"
            >
                <path
                    d="M19 26C19 26.7956 18.6839 27.5587 18.1213 28.1213C17.5587 28.6839 16.7956 29 16 29C15.2044 29 14.4413 28.6839 13.8787 28.1213C13.3161 27.5587 13 26.7956 13 26C13 25.2044 13.3161 24.4413 13.8787 23.8787C14.4413 23.3161 15.2044 23 16 23C16.7956 23 17.5587 23.3161 18.1213 23.8787C18.6839 24.4413 19 25.2044 19 26ZM19 16C19 16.7956 18.6839 17.5587 18.1213 18.1213C17.5587 18.6839 16.7956 19 16 19C15.2044 19 14.4413 18.6839 13.8787 18.1213C13.3161 17.5587 13 16.7956 13 16C13 15.2044 13.3161 14.4413 13.8787 13.8787C14.4413 13.3161 15.2044 13 16 13C16.7956 13 17.5587 13.3161 18.1213 13.8787C18.6839 14.4413 19 15.2044 19 16ZM19 6C19 6.79565 18.6839 7.55871 18.1213 8.12132C17.5587 8.68393 16.7956 9 16 9C15.2044 9 14.4413 8.68393 13.8787 8.12132C13.3161 7.55871 13 6.79565 13 6C13 5.20435 13.3161 4.44129 13.8787 3.87868C14.4413 3.31607 15.2044 3 16 3C16.7956 3 17.5587 3.31607 18.1213 3.87868C18.6839 4.44129 19 5.20435 19 6Z"
                    fill={color || "#C2C2C2"}
                />
            </svg>
        );
    } else if (name === "dots") {
        return (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width={`${size}`}
                height={`${size}`}
                viewBox="0 0 24 24"
                fill="none"
            >
                <g clipPath="url(#clip0_5_167)">
                    <path
                        d="M9 4C9.53043 4 10.0391 4.21071 10.4142 4.58579C10.7893 4.96086 11 5.46957 11 6C11 6.53043 10.7893 7.03914 10.4142 7.41421C10.0391 7.78929 9.53043 8 9 8C8.46957 8 7.96086 7.78929 7.58579 7.41421C7.21071 7.03914 7 6.53043 7 6C7 5.46957 7.21071 4.96086 7.58579 4.58579C7.96086 4.21071 8.46957 4 9 4ZM11 12C11 11.4696 10.7893 10.9609 10.4142 10.5858C10.0391 10.2107 9.53043 10 9 10C8.46957 10 7.96086 10.2107 7.58579 10.5858C7.21071 10.9609 7 11.4696 7 12C7 12.5304 7.21071 13.0391 7.58579 13.4142C7.96086 13.7893 8.46957 14 9 14C9.53043 14 10.0391 13.7893 10.4142 13.4142C10.7893 13.0391 11 12.5304 11 12ZM11 18C11 17.4696 10.7893 16.9609 10.4142 16.5858C10.0391 16.2107 9.53043 16 9 16C8.46957 16 7.96086 16.2107 7.58579 16.5858C7.21071 16.9609 7 17.4696 7 18C7 18.5304 7.21071 19.0391 7.58579 19.4142C7.96086 19.7893 8.46957 20 9 20C9.53043 20 10.0391 19.7893 10.4142 19.4142C10.7893 19.0391 11 18.5304 11 18ZM17 12C17 11.4696 16.7893 10.9609 16.4142 10.5858C16.0391 10.2107 15.5304 10 15 10C14.4696 10 13.9609 10.2107 13.5858 10.5858C13.2107 10.9609 13 11.4696 13 12C13 12.5304 13.2107 13.0391 13.5858 13.4142C13.9609 13.7893 14.4696 14 15 14C15.5304 14 16.0391 13.7893 16.4142 13.4142C16.7893 13.0391 17 12.5304 17 12ZM15 16C15.5304 16 16.0391 16.2107 16.4142 16.5858C16.7893 16.9609 17 17.4696 17 18C17 18.5304 16.7893 19.0391 16.4142 19.4142C16.0391 19.7893 15.5304 20 15 20C14.4696 20 13.9609 19.7893 13.5858 19.4142C13.2107 19.0391 13 18.5304 13 18C13 17.4696 13.2107 16.9609 13.5858 16.5858C13.9609 16.2107 14.4696 16 15 16ZM17 6C17 5.46957 16.7893 4.96086 16.4142 4.58579C16.0391 4.21071 15.5304 4 15 4C14.4696 4 13.9609 4.21071 13.5858 4.58579C13.2107 4.96086 13 5.46957 13 6C13 6.53043 13.2107 7.03914 13.5858 7.41421C13.9609 7.78929 14.4696 8 15 8C15.5304 8 16.0391 7.78929 16.4142 7.41421C16.7893 7.03914 17 6.53043 17 6Z"
                        fill={color || "#9B9B9B"}
                    />
                </g>
                <defs>
                    <clipPath id="clip0_5_167">
                        <rect
                            width={`${size}`}
                            height={`${size}`}
                            fill="white"
                        />
                    </clipPath>
                </defs>
            </svg>
        );
    }
    return null;
}

export default Icon;
