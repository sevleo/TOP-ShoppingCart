import PropTypes from "prop-types";

function QuantityPicker({
  handleSubtractClick,
  handleAddClick,
  count,
  className = "w-8 h-8",
}) {
  return (
    <>
      <div className="flex w-11/12 items-center justify-around p-0">
        <button
          className={`flex ${className} items-center justify-center rounded-full bg-black p-0 text-center text-white transition-all duration-100 hover:border-none hover:outline-none focus:border-none focus:outline-none active:scale-105`}
          onClick={handleSubtractClick}
        >
          -
        </button>
        <p className="w-6 text-center">{count}</p>
        <button
          className={`flex ${className} items-center justify-center rounded-full bg-black p-0 text-center text-white transition-all duration-100 hover:border-none hover:outline-none focus:border-none focus:outline-none active:scale-105`}
          onClick={handleAddClick}
        >
          +
        </button>
      </div>
    </>
  );
}

QuantityPicker.propTypes = {
  handleSubtractClick: PropTypes.func.isRequired,
  handleAddClick: PropTypes.func.isRequired,
  count: PropTypes.number.isRequired,
  className: PropTypes.string.isRequired,
};

export default QuantityPicker;
