import { ComponentMeta, ComponentStory } from "@storybook/react";
import Button, { IButton } from "./Button";
import { mockButtonProps } from "./Button.mocks";

export default {
  title: "Components/Common/Button",
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

export const Plain = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Plain.args = {
  ...mockButtonProps.plain,
} as IButton;

export const Disabled = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Disabled.args = {
  ...mockButtonProps.disabled,
} as IButton;

export const Small = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Small.args = {
  ...mockButtonProps.small,
} as IButton;

export const Large = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Large.args = {
  ...mockButtonProps.large,
} as IButton;

export const FullWidth = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

FullWidth.args = {
  ...mockButtonProps.fullWidth,
} as IButton;
