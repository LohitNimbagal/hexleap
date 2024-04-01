import React from "react";
import { cn } from "@/lib/utils"
import { cva, type VariantProps } from "class-variance-authority";

const card = cva("shadow-2xl bg-[#FFFFFF] relative", {
    variants: {
        intent: {
            event: [
                "bg-[#FFFFFF]",
                "w-[238.53px]",
                "h-[511px]",
                "p-[10px]"
            ],
            collection: [
                "w-[257px]",
                "h-[625px]",
                // "border-[#A9ACB2]",
                "border-[0.96px]",
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
}) => <div className={card({ intent, className, })} {...props}>
        {children}
    </div >

