import classNames from "classnames";
import { IconProps } from "phosphor-react";
import { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  colorScheme?: "primary" | "secondary";
  icon?: React.ForwardRefExoticComponent<
    IconProps & React.RefAttributes<SVGSVGElement>
  >;
}

export const Button = ({
  children,
  colorScheme = "primary",
  icon: Icon,
  ...rest
}: ButtonProps) => {
  return (
    <button
      {...rest}
      className={classNames(
        "p-4 text-sm bg-green-500 flex items-center rounded font-bold uppercase gap-2 justify-center hover:bg-green-700 transition-colors cursor-pointer",
        {
          "border border-blue-500 hover:bg-blue-500 hover:text-gray-900 transition-colors ":
            colorScheme === "secondary",
        }
      )}
    >
      {!!Icon && <Icon size={24} />}
      {children}
    </button>
  );
};
