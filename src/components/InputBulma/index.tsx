import { InputHTMLAttributes } from "react"

interface InputProps extends InputHTMLAttributes<HTMLInputElement>{
    id: string
    label: string
    className: string
    class2: string
    placeholder: string
    htmlFor: string
}
export function InputBulma( { id, htmlFor, value, className, placeholder, class2, label, ...props } : InputProps) {
    return (
            <div className={class2}>
                <label className="label" htmlFor={htmlFor}>{label}</label>
                <div className="control">
                    <input
                        {...props}
                        id={id}
                        value={value}
                        className={className}
                        placeholder={placeholder}
                    />
                </div>
            </div>
    )
}