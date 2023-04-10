"use client";

import {
  useController,
  useFormContext,
  UseControllerProps,
} from "react-hook-form";

interface InputProps extends UseControllerProps {
  name: string;
  label?: string | JSX.Element;
  type?: string;
  placeholder?: string;
  disabled?: boolean;
  formatPrice?: boolean;
  required?: boolean;
}

const Checkbox: React.FC<InputProps> = (props) => {
  const formContext = useFormContext();
  const { name, label, rules, type, formatPrice, ...inputProps } = props;

  const {
    field,
    fieldState: { invalid, isTouched, isDirty, error },
    formState: { isSubmitted },
  } = useController({ name, rules });

  if (!formContext || !name) {
    const msg = !formContext
      ? "Checkbox must be wrapped by the FormProvider"
      : "Name must be defined";
    console.error(msg);
    return null;
  }

  return (
    <div className="relative h-12 w-full">
      <div>
        <label className="inline-flex">
          <input
            name={name}
            onChange={field.onChange}
            onBlur={field.onBlur}
            value={field.value || false}
            {...inputProps}
            type="checkbox"
            className="bg-gray-100 border-primary-50 h-4 w-4 rounded border text-primary-500 accent-primary-500 focus:ring-0"
          />
          <span className="ml-4">{label}</span>
        </label>
      </div>
      <span>
        <small className="text-rose-500">{error?.message}</small>
      </span>
    </div>
  );
};

export default Checkbox;
