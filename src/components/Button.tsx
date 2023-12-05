import { VariantProps, cva } from "class-variance-authority";
import React from "react";
import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

export const buttonStyles = cva(
  ["hover:bg-secondary-hover", "transition-colors"],
  {
    variants: {
      variant: {
        default: ["bg-secondary", "hover:bg-secondary-hover"],
        ghost: ["hover:bg-slate-200"],
        dark: [
          "bg-secondary-dark",
          "hover:bg-secondary-dark-hover",
          "text-secondary",
        ],
        nowarthuran: [
          "bg-gray-600",
          "text-slate-100",
          "hover:bg-slate-200",
          "hover:text-black",
        ],
      },
      size: {
        default: ["rounded", "p-2"],
        icon: [
          "rounded-full",
          "w-10",
          "h-10",
          "flex",
          "items-center",
          "justify-center",
          "p-2.5",
        ],
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

type ButtonProps = VariantProps<typeof buttonStyles> & ComponentProps<"button">;

export function Button({ variant, size, className, ...props }: ButtonProps) {
  return (
    <button
      {...props}
      className={twMerge(buttonStyles({ variant, size }), className)}
    />
  );
}
