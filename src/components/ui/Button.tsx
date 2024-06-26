import React from "react";
import { cva, type VariantProps } from "class-variance-authority";

const button = cva("button", {
  variants: {
    intent: {
      primary: [
        "bg-[#2C9CF0]",
        "rounded",
        "text-white",
        "text-[14px]",
        "border-transparent",
      ],
      secondary: [
        "bg-black",
        "text-white",
      ],
      icon: [
        "border-[#2C9CF0] border-2 py-[12px] px-[6px] absolute"
      ]
    },
    size: {
      small: ["text-sm", "py-[10px]", "px-[30px]"],
      large: ["lg:text-base", "py-[10px]", "px-[30px]", "text-sm"],
      left: ["top-[400px]", "right-[90px]"],
      right: ["top-[449px]", "left-[90px]"]
    },
  },
  compoundVariants: [
    { intent: "primary", size: "small", class: "capitalize" },
    { intent: "secondary", size: "large", className: "text-[12px]" }
  ],
  defaultVariants: {
    intent: "primary",
    size: "small",
  },
});

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
  VariantProps<typeof button> { }

export const Button: React.FC<ButtonProps> = ({
  className,
  intent,
  size,
  ...props
}) => <button className={button({ intent, size, className })} {...props} />