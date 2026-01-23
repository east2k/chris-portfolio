const Tooltip = ({ children, content }: { children: React.ReactNode; content: string }) => {
    return (
        <div className="relative group">
            {children}
            <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:block bg-black text-white text-xs px-2 py-1 rounded whitespace-nowrap">
                {content}
            </div>
        </div>
    );
};

export default Tooltip;
