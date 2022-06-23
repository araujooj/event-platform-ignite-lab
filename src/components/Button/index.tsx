import { IconProps } from "phosphor-react";
import { ReactNode } from "react";

interface ButtonProps extends React.HTMLProps<HTMLAnchorElement> {
  children: ReactNode;
  colorScheme?: "primary" | "secondary";
  icon: React.ForwardRefExoticComponent<
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
    <a
      {...rest}
      className={
        colorScheme === "primary"
          ? "p-4 text-sm bg-green-500 flex items-center rounded font-bold uppercase gap-2 justify-center hover:bg-green-700 transition-colors cursor-pointer"
          : "p-4 text-sm border border-blue-500 flex items-center rounded font-bold uppercase gap-2 justify-center hover:bg-blue-500 hover:text-gray-900 transition-colors cursor-pointer"
      }
    >
      <Icon size={24} />
      {children}
    </a>
  );
};
