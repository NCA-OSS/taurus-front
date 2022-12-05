import { IImageCard } from "./ImageCard";

const base: IImageCard = {
  imageUrl: "https://picsum.photos/640/360",
  title: "Card Title Here",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, deserunt?",
  buttonTitle: "Buy Now",
};

export const mockImageCardProps = {
  base,
};
