import { classMerge } from "../utils/classMerge"

type Props = React.ComponentProps<"button"> & {
    isLoading?: boolean,
    variant?: "base" | "icon" | "iconSmall",
}

const variants = {
    button: {
        base: "h-12",
        icon: "h-12 w-12",
        iconSmall: "h-8 w-8",
    }
}

export function Button({ children, isLoading, disabled, className, type="button", variant = "base", ...rest }: Props) {
    return (
        <button type={type} {...rest} disabled={disabled || isLoading}
        className={classMerge(["flex items-center justify-center bg-green-100 text-white rounded-lg cursor-pointer hover:bg-green-200 transition ease-linear disabled:opacity-50",

        variants.button[variant],
        isLoading && "disabled:cursor-progress",
        disabled && "cursor-not-allowed",
        className,
        
        ])}
        
        >{children}</button>
    )
}