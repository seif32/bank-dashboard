import type { SelectHTMLAttributes } from "react";

type SelectProps = SelectHTMLAttributes<HTMLSelectElement> & {
  options: OptionsType[];
  label?: string;
};

export type OptionsType = {
  label: string;
  value: string;
};

export default function Select({
  className,
  options,
  label,
  ...rest
}: SelectProps) {
  return (
    <div>
      {label && (
        <label className="block text-sm font-medium text-gray-700 mb-1">
          {label}
        </label>
      )}
      <select
        className={`w-full border border-gray-300 p-2 rounded-md focus:outline-none    ${className}`}
        {...rest}
      >
        {options.map((option) => {
          return (
            <option value={option.value} key={option.value}>
              {option.label}
            </option>
          );
        })}
      </select>
    </div>
  );
}
