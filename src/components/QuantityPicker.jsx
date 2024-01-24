function QuantityPicker({ handleSubtractClick, handleAddClick, count }) {
  return (
    <>
      <div className="flex w-11/12 items-center justify-around p-2">
        <button
          className="flex h-8 w-8 items-center justify-center rounded-full bg-black p-0 text-center text-white transition-all duration-100 hover:border-none hover:outline-none focus:border-none focus:outline-none active:scale-105"
          onClick={handleSubtractClick}
        >
          -
        </button>
        <p className="w-6 text-center">{count}</p>
        <button
          className="flex h-8 w-8 items-center justify-center rounded-full bg-black p-0 text-center text-white transition-all duration-100 hover:border-none hover:outline-none focus:border-none focus:outline-none active:scale-105"
          onClick={handleAddClick}
        >
          +
        </button>
      </div>
    </>
  );
}

export default QuantityPicker;
