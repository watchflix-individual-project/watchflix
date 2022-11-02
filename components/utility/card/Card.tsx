//import Image from 'next/image';

export interface ICard {
  title: string;
  description: string;
}

const Card: React.FC<ICard> = ({ title, description }) => {
  return (
    <div className="mb-4 drop-shadow-custom rounded-default">
      <div className="h-[170px] w-full rounded-t-default bg-gradient-to-r from-violet-500 to-fuchsia-500"></div>
      <div className="px-4 py-3 bg-white  rounded-b-default">
        <h1 className="mb-2 text-lg font-bold text-[#17181A]">{title}</h1>
        <p className="pb-4 text-sm text-[#454545]">{description}</p>
      </div>
    </div>
  );
};

export default Card;
