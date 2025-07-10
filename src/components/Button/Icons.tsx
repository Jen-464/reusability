import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import type { IconProp, SizeProp } from '@fortawesome/fontawesome-svg-core';

type IconProps = {
    icon: IconProp;
    size?: SizeProp;
    color?: string;
}

export function CustomIcon ({ icon, size, color, ...props}: IconProps) {
    return (
        <FontAwesomeIcon icon={icon} size={size} color={color} {...props} />
    )
}

// size label color