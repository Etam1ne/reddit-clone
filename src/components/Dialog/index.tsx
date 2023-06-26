export default function Dialog({
  isOpen,
  className,
  children,
}: {
  isOpen: boolean;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={
        `${
          isOpen ? "scale-100" : "scale-0"
        } absolute left-0 top-full flex origin-top flex-col gap-1 bg-white 
                  p-1 transition-all duration-100 ease-out` +
        " " +
        className
      }
    >
      {children}
    </div>
  );
}
