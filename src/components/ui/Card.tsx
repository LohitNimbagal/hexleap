import React from "react";
import { cn } from "@/lib/utils"
import { cva, type VariantProps } from "class-variance-authority";

const card = cva("shadow-2xl bg-[#FFFFFF] dark:bg-[#3B3E47] relative", {
    // ring-1 ring-inset ring-offset-[10px] ring-[#006555] 
    variants: {
        intent: {
            event: [
                "w-[238.53px]",
                "h-[511px]",
                "p-[10px]"
            ],
            adv: [
                "w-[238.53px]",
                "h-[511px]",
                "p-[10px]",
                "ring-1 ring-inset ring-offset-[10px] ring-[#006555]"
            ],
            collection: [
                "w-[257px]",
                "h-[625px]",
                // "border-[#A9ACB2]",
                // "border-[0.96px]",
                "flex flex-col items-center"
            ],
        }
    },
    compoundVariants: [
        { intent: "event", className: "event" },
        { intent: "collection", className: "collection" }
    ],
    defaultVariants: {
        intent: "event",
    },
});

export interface CardProps
    extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof card> { }

export const Card: React.FC<CardProps> = ({
    className,
    intent,
    children,
    ...props
}) => <div className={card({ intent, className })} {...props}>
        {children}
    </div >

