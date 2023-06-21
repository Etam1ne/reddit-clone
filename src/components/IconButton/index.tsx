export default function IconButton({
    className,
    onClick,
    children,
} : {
    className?: string;
    onClick?: () => void;
    children: React.ReactNode;
}) {
  return (
    <button className="w-8 h-8 hover:bg-themeGrey200 flex justify-center items-center">
        <div className="w-6 h-6">
            {children}
        </div>
    </button>
  )
}
