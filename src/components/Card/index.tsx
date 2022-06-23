import { CaretRight, IconProps } from "phosphor-react";

interface CardProps extends React.HTMLProps<HTMLAnchorElement> {
  title: string;
  icon: React.ForwardRefExoticComponent<
    IconProps & React.RefAttributes<SVGSVGElement>
  >;
  description: string;
}

export const Card = ({
  title,
  icon: Icon,
  description,
  ...rest
}: CardProps) => {
  return (
    <a
      {...rest}
      className="bg-gray-700 rounded overflow-hidden flex items-stretch gap-6 hover:bg-gray-600 transition-colors cursor-pointer"
    >
      <div className="bg-green-700 h-full p-6 flex items-center">
        <Icon size={40} />
      </div>
      <div className="py-6 leading-relaxed">
        <strong className="text-2xl">{title} </strong>
        <p className="text-sm text-gray-200 mt-2">{description} </p>
      </div>
      <div className="h-full p-6 flex items-center">
        <CaretRight size={24} />
      </div>
    </a>
  );
};
