export interface IButton {
  text: string;
}

const Button: React.FC<IButton> = ({ text }) => {
  return (
    <div
      className={
        'rounded-default hover:cursor-pointer hover:bg-[#226AFF] bg-[#0554F6] text-white py-3 px-7 text-center'
      }
    >
      {text}
    </div>
  );
};

export default Button;
