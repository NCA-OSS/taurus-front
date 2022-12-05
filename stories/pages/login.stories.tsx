import LoginPage from "@pages/login";
import { ComponentMeta } from "@storybook/react";

export default {
  title: "Pages/Login",
  component: LoginPage,
  argTypes: {},
  parameters: {
    layout: "fullscreen",
  },
} as ComponentMeta<typeof LoginPage>;

export const Login = () => <LoginPage />;
