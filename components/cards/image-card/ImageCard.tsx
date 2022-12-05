import Image from "next/image";
import Link from "next/link";

export interface IImageCard {
  imageUrl: string;
  title: string;
  description: string;
  buttonTitle: string;
}

const ImageCard: React.FC<IImageCard> = ({
  imageUrl,
  title,
  description,
  buttonTitle,
}) => {
  return (
    <div className="rounded-xl max-w-md bg-white">
      <Image
        className="rounded-xl"
        src={imageUrl}
        alt="photo"
        width={640}
        height={360}
      />
      <div className="p-5">
        <h2 className="text-2xl font-bold">{title}</h2>
        <p className="text-slate-500 mt-2 mb-3">{description}</p>
        <Link
          href="/"
          className="text-primary hover:underline underline-offset-4"
        >
          {buttonTitle}
        </Link>
      </div>
    </div>
  );
};

export default ImageCard;
