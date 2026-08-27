import type { InputHTMLAttributes } from "react";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  type?: "text" | "email" | "password" | "number" | "url" | "tel" | "search" | "date" | "time" | "datetime-local" | "month" | "week" | "color";
  value?: string | number;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  textarea?: boolean;
};

function Input({ label, id, ...props }: InputProps) {
  return (
    <div>
      {label && <label htmlFor={id}>{label}</label>}

      <input
        id={id}
        {...props}
      />
    </div>
  );
}

export default Input;
