import { cva } from "class-variance-authority";
import classNames from "classnames";
import { ButtonHTMLAttributes, ReactNode } from "react";

const button = cva("border-2 rounded-md relative font-bold", {
  variants: {
    variant: {
      default: "bg-primary hover:bg-secondary text-white",
      outline: "bg-white",
      plain: "bg-transparent border-transparent",
    },
    size: {
      small: "px-2 py-1 text-xs",
      medium: "px-3 py-2 text-sm",
      large: "px-5 py-3 text-base",
    },
    fullWidth: {
      true: "w-full",
    },
    disabled: {
      true: "cursor-not-allowed",
    },
  },
  compoundVariants: [
    {
      disabled: false,
      variant: "outline",
      className:
        "border-primary hover:border-secondary text-primary hover:text-secondary",
    },
    {
      disabled: true,
      variant: "outline",
      className: "border-slate-300 text-slate-300",
    },
    {
      disabled: true,
      variant: "default",
      className: "bg-slate-300 hover:bg-slate-300",
    },
    {
      disabled: false,
      variant: "default",
      className: "border-primary hover:border-secondary",
    },
    {
      disabled: true,
      variant: "plain",
      className: "text-slate-300",
    },
    {
      disabled: false,
      variant: "plain",
      className: "text-primary",
    },
  ],
  defaultVariants: {
    variant: "default",
    size: "medium",
    disabled: false,
    fullWidth: false,
  },
});

export interface IButton
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "disabled"> {
  children: ReactNode;
  loading?: boolean;
  disabled?: boolean;
  fullWidth?: boolean;
  variant?: "default" | "outline" | "plain";
  size?: "small" | "medium" | "large";
}

const Button: React.FC<IButton> = ({
  children,
  variant,
  size,
  fullWidth,
  disabled,
  loading,
}: IButton) => {
  return (
    <button className={button({ variant, size, fullWidth, disabled })}>
      <span
        className={classNames(
          "leading-[1.25rem]",
          loading && "text-transparent"
        )}
      >
        {children}
      </span>
      {loading && (
        <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 block w-4 h-4">
          <svg
            className="animate-spin"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              className="fill-current"
              d="M7.229 1.173a9.25 9.25 0 1011.655 11.412 1.25 1.25 0 10-2.4-.698 6.75 6.75 0 11-8.506-8.329 1.25 1.25 0 10-.75-2.385z"
            ></path>
          </svg>
          <span className="sr-only">Loading</span>
        </span>
      )}
    </button>
  );
};

export default Button;
