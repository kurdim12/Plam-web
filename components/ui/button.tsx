import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full font-semibold transition-all duration-300 ease-emphatic focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/60 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        gold: "bg-gold text-green-darkest hover:bg-gold-bright hover:-translate-y-0.5 shadow-[0_14px_34px_-14px_rgba(201,162,75,0.7)]",
        ghost:
          "border border-gold/40 text-cream hover:bg-cream/5 hover:border-gold/70",
        whatsapp:
          "bg-[#25D366] text-white hover:brightness-105 hover:-translate-y-0.5 shadow-[0_14px_34px_-14px_rgba(37,211,102,0.7)]",
        outline: "border border-ink/15 text-ink hover:border-gold/60 hover:bg-gold/5",
      },
      size: {
        default: "h-12 px-6 text-sm",
        lg: "h-14 px-8 text-base",
        sm: "h-10 px-5 text-sm",
      },
    },
    defaultVariants: { variant: "gold", size: "default" },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => (
    <button
      ref={ref}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
);
Button.displayName = "Button";

export { Button, buttonVariants };
