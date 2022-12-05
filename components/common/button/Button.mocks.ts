import { IButton } from "./Button";

const base: IButton = {
  children: "Submit",
  variant: "default",
  size: "medium",
  loading: false,
  disabled: false,
  fullWidth: false,
};

const loading: IButton = {
  children: "Submit",
  variant: "default",
  size: "medium",
  loading: true,
  disabled: false,
  fullWidth: false,
};

const outline: IButton = {
  children: "Submit",
  variant: "outline",
  size: "medium",
  loading: false,
  disabled: false,
  fullWidth: false,
};

const plain: IButton = {
  children: "Submit",
  variant: "plain",
  size: "medium",
  loading: false,
  disabled: false,
  fullWidth: false,
};

const disabled: IButton = {
  children: "Submit",
  variant: "default",
  size: "medium",
  disabled: true,
  loading: false,
  fullWidth: false,
};

const small: IButton = {
  children: "Submit",
  variant: "default",
  size: "small",
  disabled: false,
  loading: false,
  fullWidth: false,
};

const large: IButton = {
  children: "Submit",
  variant: "default",
  size: "large",
  disabled: false,
  loading: false,
  fullWidth: false,
};

const fullWidth: IButton = {
  children: "Submit",
  variant: "default",
  size: "medium",
  disabled: false,
  loading: false,
  fullWidth: true,
};

export const mockButtonProps = {
  base,
  loading,
  outline,
  disabled,
  small,
  large,
  fullWidth,
  plain,
};
