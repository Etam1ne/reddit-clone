'use client'

export default function Dialog({
  isOpen,
  className,
  children,
} : {
  isOpen: boolean;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={`${isOpen ? "scale-100" : "scale-0" } top-full left-0 absolute w-max flex flex-col p-1 gap-1 bg-white 
                  transition-all origin-top duration-100 ease-out` + " " + className}>
        {children}
    </div>
  )
}
