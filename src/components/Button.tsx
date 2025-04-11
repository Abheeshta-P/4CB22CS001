import { ReactNode } from 'react'
import classNames from 'classnames'

type Size = "small" | "medium" | "large" | "responsive";

type ButtonProps = {
  children: ReactNode,
  bg?: String,
  color?: String,
  className?: String,
  size?: Size
}

const sizeClasses: Record<Size, string> = {
  small: "px-2 py-2 text-xs max-w-36",
  medium: "px-4 py-2.5 text-sm",
  large: "px-6 py-3 text-base",
  responsive: `
    px-2 py-2 text-xs
    sm:px-4 sm:py-2.5 sm:text-sm
    md:px-6 md:py-3 md:text-base
  `
};

function Button({
  children,
  bg = "bg-black",
  color = "text-white",
  className = "",
  size = "responsive",
  ...rest
}: ButtonProps) {
  return (
    <div
      {...rest}
      className={classNames("border text-center rounded-xl hover:bg-zinc-900 cursor-pointer transition-all", sizeClasses[size], bg, color, className)}
    >
      {children}
    </div>
  )
}

export default Button