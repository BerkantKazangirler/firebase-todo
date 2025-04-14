interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  id?: string;
}
import classNames from "classnames";
export const Button = ({ children, className, ...rest }: ButtonProps) => {
  return (
    <button className={classNames(className)} {...rest}>
      {children}
    </button>
  );
};
