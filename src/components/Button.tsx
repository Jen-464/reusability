import { forwardRef } from "react";
import { Button } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import type { Theme } from "@mui/material/styles";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

// inheriting default button prop && custom props
export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    color?: "main" | "light" | "dark"; // ? - optional
    icon?: "facebook" | "linkedin" | "instagram";
    size?: "small" | "medium" | "large";
    rounded?: boolean;
};

export const CustomButton = forwardRef<HTMLButtonElement, ButtonProps>(
    ({ color, icon, rounded, children, ...otherProps }, ref) => {
        const theme: Theme = useTheme();
        const bgColor =
            color === "dark" ? theme.palette.primary.dark :
                color === "light" ? theme.palette.primary.light :
                    theme.palette.primary.main;

        const IconComponent =
            icon === "facebook" ? FacebookIcon :
                icon === "instagram" ? InstagramIcon :
                    icon === "linkedin" ? LinkedInIcon :
                        null;

        const isRounded = rounded === false ? 0 : 1;

        return (
            <Button
                ref={ref}
                variant="contained"
                style={{
                    backgroundColor: bgColor,
                    textTransform: "none",
                    display: "flex",
                    gap: "8px",
                }}
                sx={{ borderRadius: isRounded}}
                onClick={() => alert(`Clicked on ${color} blue`)}
                {...otherProps}>
                {IconComponent && <IconComponent />}
                {children}
            </Button>
        )
    }
)

CustomButton.displayName = "CustomButton";
