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
                "lg:w-[238.53px]",
                "min-w-[230px]",
                "h-[511px]",
                "p-[10px]",
                "ring-1 ring-inset ring-offset-[10px] ring-offset-white dark:ring-offset-[#3B3E47] ring-[#006555]"
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
        {intent === 'collection' &&
            <>
                <div className="bg-gradient-to-l from-[#E1E6EB] from-5% to-[#EAECF3] dark:from-[#1D1D28] dark:to-[#1E1E2B] z-10 rounded-full w-[20px] h-[20px] absolute bottom-[258px] lg:bottom-[195px] left-[-10px]" />
                <div className="bg-gradient-to-r from-[#E1E6EB] from-5% to-[#EAECF3] dark:from-[#1D1D28] dark:to-[#1E1E2B] z-10 rounded-full w-[20px] h-[20px] absolute bottom-[258px] lg:bottom-[195px] right-[-10px]" />
            </>
        }
        {children}
    </div >

export const CardTitle = React.forwardRef<
    HTMLParagraphElement,
    React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
    <h3
        ref={ref}
        className={cn(
            "text-[17px] font-medium text-black dark:text-white capitalize",
            className
        )}
        {...props}
    />
))
CardTitle.displayName = "CardTitle"


export const CardText = React.forwardRef<
    HTMLParagraphElement,
    React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
    <p
        ref={ref}
        className={cn(
            "text-[12px] text-[#525965] dark:text-[#DFDFDF]",
            className
        )}
        {...props}
    />
))
CardText.displayName="CardText"


export const CardWrapper = React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
    <div
        ref={ref}
        className={cn(
            "flex overflow-scroll scrollbar-hide lg:gap-0 px-5 lg:px-0",
            className
        )}
        {...props}
    />
))
CardWrapper.displayName = "CardWrapper"

const cardContent = cva("", {
    variants: {
        intent: {
            event: [
                "w-[218.4px] h-[54px] flex items-start gap-[40px] p-[10px] bg-[#F7F7F8] dark:bg-[#292B32]"
            ],
            adv: [
                "px-2 lg:px-[15px] space-y-3 pt-3"
            ],
            collection: [
                "w-[213px] h-[100.66px] flex flex-col items-center justify-between font-normal text-[14px] space-y-[5px] overflow-hidden text-center mt-[20px]"
            ],
        }
    },
    defaultVariants: {
        intent: "event",
    },
});

export interface CardContentProps
    extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof card> { }

export const CardContent: React.FC<CardProps> = ({
    className,
    intent,
    children,
    ...props
}) => <div className={cardContent({ intent, className })} {...props}>
        {children}
    </div >

