import PropTypes from "prop-types";

const Cart = ({ addCarts, handlePreparing }) => {
  // console.log(addCarts);
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>time</th>
              <th>Calories</th>
            </tr>
          </thead>
          <tbody>
            {addCarts.map((cart, idx) => (
              <tr key={idx}>
                <th>{idx + 1}</th>
                <td>{cart.recipe_name}</td>
                <td>{cart.preparing_time}</td>
                <td>{cart.calories}</td>
                <td>
                  <button
                    onClick={() => handlePreparing(cart)}
                    className="btn  border-none  text-black hover:text-white font-semibold bg-green-400 rounded-full "
                  >
                    Preparing
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

Cart.propTypes = {
  addCarts: PropTypes.array.isRequired,
  handlePreparing: PropTypes.func.isRequired,
};
export default Cart;
