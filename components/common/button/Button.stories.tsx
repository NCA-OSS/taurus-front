import { ComponentMeta, ComponentStory } from "@storybook/react";
import Button, { IButton } from "./Button";
import { mockButtonProps } from "./Button.mocks";

export default {
  title: "common/Button",
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockButtonProps.base,
} as IButton;

export const Loading = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Loading.args = {
  ...mockButtonProps.loading,
} as IButton;

export const Outline = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Outline.args = {
  ...mockButtonProps.outline,
} as IButton;

export const Disabled = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Disabled.args = {
  ...mockButtonProps.disabled,
} as IButton;
