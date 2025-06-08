import { forwardRef } from "react";
// import { Button } from "@mui/material"

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    color?: "salmon" | "steelblue" | "green";
};

export const CustomButton = forwardRef<HTMLButtonElement, ButtonProps>(
    ({ color = "steelblue", children, ...otherProps }, ref) => {
        return (
            <button ref={ref} style={{ backgroundColor: color }} {...otherProps}> {children} </button>
        )
    }
)

CustomButton.displayName = "CustomButton";
