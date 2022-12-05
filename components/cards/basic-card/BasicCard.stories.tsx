import { ComponentMeta, ComponentStory } from "@storybook/react";
import BasicCard, { IBasicCard } from "./BasicCard";
import { mockBasicCardProps } from "./BasicCard.mocks";

export default {
  title: "Components/Cards/Basic Card",
  component: BasicCard,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof BasicCard>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof BasicCard> = (args) => (
  <BasicCard {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockBasicCardProps.base,
} as IBasicCard;
