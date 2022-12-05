import classNames from "classnames";

export interface IBasicCard extends HTMLDivElement {
  title: string;
  description: string;
}

const BasicCard: React.FC<IBasicCard> = ({ title, description, className }) => {
  return (
    <div
      className={classNames(
        "p-5 max-w-md rounded-md bg-primary text-white",
        className
      )}
    >
      <h2 className="font-bold text-2xl">{title}</h2>
      <p className="mt-3 text-base">{description}</p>
    </div>
  );
};

export default BasicCard;
