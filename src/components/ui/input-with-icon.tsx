import React from "react"
import { Input } from "./input"

interface InputWithIconProps extends React.InputHTMLAttributes<HTMLInputElement> {
    icon?: React.ReactNode,
    containerClassName?: string
}

export const InputWithIcon = React.forwardRef<HTMLInputElement, InputWithIconProps>(
    ({ className, icon, containerClassName, ...props }, ref) => {
        return (
            <div className={`relative items-center ${containerClassName}`}>
                {
                    icon &&
                    <div className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-500">
                        {icon}
                    </div>
                }
                <Input className={`pl-8 ${className}`} ref={ref} {...props} />
            </div>
        )
    },
)

InputWithIcon.displayName = "InputWithIcon"

