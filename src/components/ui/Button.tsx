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
        "bg-[#1D1D1F]",
        "text-white",
      ],
    },
    size: {
      small: ["text-sm", "py-[10px]", "px-[30px]"],
      large: ["text-base", "py-[10px]", "px-[50px]"],
    },
  },
  compoundVariants: [
    { intent: "primary", size: "small", class: "capitalize" },
    { intent: "secondary", size: "large", class: "capitalize" }
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
}) => <button className={button({ intent, size, className })} {...props} />;