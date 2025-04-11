import { ReactNode } from 'react'
import classNames from 'classnames'

type Size = "small" | "medium" | "large";

type ButtonProps = {
  children: ReactNode,
  bg?: String,
  color?: String,
  className?: String,
  size?: Size
}

const sizeClasses: Record<Size, string> = {
  "small": "px-2 py-2 text-xs max-w-36",
  "medium": "px-4 py-2.5 text-sm",
  "large": "px-6 py-3 text-base"
}

function Button({
  children,
  bg = "bg-black",
  color = "text-white",
  className = "",
  size = "large",
  ...rest
}:ButtonProps) {
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