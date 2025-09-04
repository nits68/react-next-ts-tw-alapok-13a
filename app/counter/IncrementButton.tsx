type Props = {
  onIncrement: () => void;
};

const IncrementButton = ({ onIncrement }: Props) => {
  return (
    <button
      className="cursor-pointer rounded-2xl border p-3 font-medium shadow-lg active:scale-95 active:shadow-sm"
      onClick={onIncrement}
    >
      Növel
    </button>
  );
};

export default IncrementButton;
