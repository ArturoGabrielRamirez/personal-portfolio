const Label = ({ htmlFor, text, className }: { htmlFor: string, text: string, className?: string }) => {
    
    return (
        <label htmlFor={htmlFor} className={`text-sm text-gray-400 ${className}`}>
            {text}
        </label>
    )
}

export default Label