export default function IconButton({
  className,
  onClick,
  children,
}: {
  className?: string;
  onClick?: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      onClick={onClick}
      className={
        "flex items-center justify-center gap-2 p-2 hover:bg-themeGrey200" +
        " " +
        className
      }
    >
      {children}
    </button>
  );
}
