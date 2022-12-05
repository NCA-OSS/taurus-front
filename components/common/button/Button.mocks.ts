import { IButton } from "./Button";

const base: IButton = {
  children: "Submit",
  loading: false,
  disabled: false,
  fullWidth: false,
};

const loading: IButton = {
  children: "Submit",
  loading: true,
  disabled: false,
  fullWidth: false,
};

const outline: IButton = {
  children: "Submit",
  variant: "outline",
  loading: false,
  disabled: false,
  fullWidth: false,
};

const disabled: IButton = {
  children: "Submit",
  disabled: true,
  loading: false,
  fullWidth: false,
};

export const mockButtonProps = {
  base,
  loading,
  outline,
  disabled,
};
