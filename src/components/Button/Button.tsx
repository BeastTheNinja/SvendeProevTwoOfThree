import type { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  variant?: "primary" | "secondary" | "danger";
  type?: "button" | "submit" | "reset" | "delete" | "update" | "create";
  
};

function Button({
  children,
  variant = "primary",
  ...props
}: ButtonProps) {
  return (
    <button
      type="button"
      data-variant={variant}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
