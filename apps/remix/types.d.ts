declare module "feather-icons-react" {
  type IconProps = {
    size?: string | number;
    className?: string;
    fill?: string;
    strokeWidth?: string | number;
  };

  type Icon = (prop: IconProps) => JSX.Element;

  export const Search: Icon;
  export const ArrowLeft: Icon;
}
