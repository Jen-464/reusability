// inheriting default button prop && custom props
export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    color?: "main" | "light" | "dark"; // ? - optional
    rounded?: boolean;
    label?: string;
    size?: "small" | "medium" | "large";
};

export function CustomButton ({ color, label, size, rounded, children, ...props }: ButtonProps) {

    const finalClass = "px-6 py-2 " +
        (color === "light" ? "bg-cyan-300 " : color === "dark" ? "bg-cyan-500 " : "bg-cyan-400 ") +
        (color === "dark" ? "text-white " : "text-dark ") +
        (rounded === true ? "rounded-xl " : "rounded-none ") +
        (size === "small" ? "text-sm" : size === "large" ? "text-2xl" : "text-base");

    return (
        <button className={finalClass} {...props}>
            {label} {children}
        </button>
    );
}

CustomButton.displayName = "CustomButton";