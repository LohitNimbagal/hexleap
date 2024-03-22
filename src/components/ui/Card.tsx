// import React from 'react'
// import { FC } from 'react'
// import { VariantProps, cva } from 'class-variance-authority'
// import { cn } from '@/lib/utils'


// const cardVariant = cva(
//     "h-[511px] w-[238px] p-1",
//     {
//         variants: {
//             variant: {
//                 default: "bg-red-700 text-left",
//                 add: "bg-yellow-700 text-center"
//             },
//         },
//         defaultVariants: {
//             variant: "default"
//         }
//     }
// )

// interface SportsCardProps extends VariantProps<typeof cardVariant> {
//     children: JSX.Element | string
// }

// const SportsCard: FC<SportsCardProps> = ({ variant, children, ...props }) => {
//     return (
//         <div className={cn(cardVariant({ variant }))} {...props}>
//             {children}
//         </div>
//     );
// };

// const SportsCardTitle: FC<SportsCardProps> = ({ variant, children, ...props }) => {
//     return (
//         <h2 className={cn(cardVariant({ variant }))} {...props}>
//             {children}
//         </h2>
//     );
// };

import * as React from "react"

import { cn } from "@/lib/utils"

const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "h-[511px] w-[238px] p-1 py-5 flex flex-col items-center gap-5",
      className
    )}
    {...props}
  />
))
Card.displayName = "Card"

const CardImage = React.forwardRef<
HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("", className)}
    {...props}
  />
))
CardImage.displayName = "CardImage"

const CardTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn(
      "text-[14px] w-full font-semibold leading-none tracking-tight text-start px-2",
      className
    )}
    {...props}
  />
))
CardTitle.displayName = "CardTitle"

const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
))
CardDescription.displayName = "CardDescription"

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn(" w-[218.4px] h-[54px] bg-[#F7F7F8]", className)} {...props} />
))
CardContent.displayName = "CardContent"

// const CardFooter = React.forwardRef<
//   HTMLDivElement,
//   React.HTMLAttributes<HTMLDivElement>
// >(({ className, ...props }, ref) => (
//   <div
//     ref={ref}
//     className={cn("flex items-center p-6 pt-0", className)}
//     {...props}
//   />
// ))
// CardFooter.displayName = "CardFooter"

export { Card, CardImage, CardTitle, CardDescription, CardContent }


// export { SportsCard, SportsCardTitle, cardVariant }
