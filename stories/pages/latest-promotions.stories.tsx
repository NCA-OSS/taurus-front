import LatestPromotionsPage from "@pages/latest-promotions";
import { ComponentMeta } from "@storybook/react";

export default {
  title: "Pages/Latest Promotions",
  component: LatestPromotionsPage,
  argTypes: {},
  parameters: {
    layout: "fullscreen",
  },
} as ComponentMeta<typeof LatestPromotionsPage>;

export const LatestPromotions = () => <LatestPromotionsPage />;
