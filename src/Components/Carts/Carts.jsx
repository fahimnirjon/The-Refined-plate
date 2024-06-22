import PropTypes from "prop-types";

const Carts = ({ addCarts }) => {
  // console.log(addCarts);
  return (
    <div>
      {/* food cart */}
      <div className=" text-xl font-semibold text-center">
        <div className="mt-8">
          <h3>Want to cook: {addCarts.length}</h3>
          <div className="border-b-2 mt-4 mb-6"></div>
        </div>
        <div className="overflow-x-auto"></div>
      </div>
    </div>
  );
};

Carts.propTypes = {
  addCarts: PropTypes.array.isRequired,
};

export default Carts;
