const Title = ({ title, subtitle, className }: { title: string, subtitle?: string, className?: string }) => {
    return (
        <div className={`flex flex-col items-center gap-2 ${className}`}>
            <h2 className='text-2xl font-bold text-gray-800 dark:text-white'>{title}</h2>
            {subtitle && <h2 className='text-xl italic text-gray-600'>{subtitle}</h2>}
        </div>
    );
};

export default Title