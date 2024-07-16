import { ChangeEvent } from "react";

type InputPropType = {
  type: "text" | "email" | "checkbox";
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  value: string | number;
  name: string;
  placeHolder: string;
  className?: string;
  error?: boolean;
  disabled?: boolean;
};
const Input: React.FC<InputPropType> = ({
  type,
  onChange,
  name,
  placeHolder,
  className,
  value,
  error,
  disabled,
}) => {
  const inputStyle = `w-full px-3 py-4 text-xs border outline-none border-none bg-white text-lg rounded-lg transition linear duration-150 ${className} ${
    error ? "border-red-400 bg-red-50" : ""
  }`;

  return (
    <>
      <input
        placeholder={placeHolder}
        value={value}
        type={type}
        onChange={onChange}
        name={name}
        className={inputStyle}
        disabled={disabled}
      />
    </>
  );
};

export default Input;
