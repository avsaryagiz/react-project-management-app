// Input.tsx
import React, { TextareaHTMLAttributes } from "react";

interface InputProps {
  label: string;
  textarea?: boolean;
}

type InputElementProps = React.InputHTMLAttributes<HTMLInputElement>;
type TextareaElementProps = TextareaHTMLAttributes<HTMLTextAreaElement>;

export default function Input({ label, textarea, ...props }: InputProps & (InputElementProps | TextareaElementProps)) {
  return (
    <div>
      <label htmlFor="input">{label}</label>
      {textarea ? (
        <textarea id="input" {...props as TextareaElementProps} />
      ) : (
        <input type="text" id="input" {...props as InputElementProps} />
      )}
    </div>
  );
}
