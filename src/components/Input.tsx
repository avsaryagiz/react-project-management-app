import React, { TextareaHTMLAttributes, forwardRef } from "react";

interface InputProps {
  label: string;
  textarea?: boolean;
}

type InputElementProps = React.InputHTMLAttributes<HTMLInputElement>;
type TextareaElementProps = TextareaHTMLAttributes<HTMLTextAreaElement>;

const Input = forwardRef(function Input(
  { label, textarea, ...props }: InputProps & (InputElementProps | TextareaElementProps),
  ref: any
) {
  const classes =
    "w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600";
  return (
    <p className="flex flex-col gap-1 my-4">
      <label htmlFor="input" className="text-sm font-bold uppercase text-stone-500">
        {label}
      </label>
      {textarea ? (
        <textarea ref={ref} id="input" className={classes} {...(props as TextareaElementProps)} />
      ) : (
        <input ref={ref} type="text" id="input" className={classes} {...(props as InputElementProps)} />
      )}
    </p>
  );
});

export default Input;
