import cn from "classnames";
import { Control, Controller } from "react-hook-form";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  name: string;
  control: Control<unknown>;
  className?: string;
}

export const Input = ({
  label,
  control,
  name,
  className,
  ...rest
}: InputProps) => {
  return (
    <Controller
      name={name as never}
      control={control}
      render={({ field, fieldState }) => (
        <div className="flex flex-col gap-1">
          <label className="text-sm text-detailColor dark:text-white">
            {label}
          </label>
          <input
            className={cn(
              "bg-black indent-2 text-sm outline-slate-800",
              className,
            )}
            {...rest}
            {...field}
          />
          {fieldState.error && (
            <span className="text-xs text-red-500">
              {fieldState.error.message}
            </span>
          )}
        </div>
      )}
    />
  );
};
