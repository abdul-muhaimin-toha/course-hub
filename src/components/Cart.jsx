import PropTypes from "prop-types";
import { totalCreditHours } from "../App";

const Cart = ({ cartItems }) => {
  const cartCreditHours = cartItems.reduce(
    (sum, cartItem) => sum + cartItem.credit,
    0,
  );

  return (
    <div className="w-full self-start  rounded-md bg-blue-500 p-5 text-white md:w-2/6 lg:w-1/4 ">
      <h2 className="text-lg font-bold">
        Credit Hour Remaining {totalCreditHours - cartCreditHours} hr
      </h2>
      <div className="my-3">
        <h3 className="mb-2 py-2 text-lg font-bold">Course Name</h3>
        <div className="min-h-44 space-y-2 text-slate-200">
          {cartItems.map((cartItem, index) => (
            <p key={index}>
              {index + 1} {cartItem.name}
            </p>
          ))}
        </div>
      </div>
      <div className="border-b py-2">
        <h2 className="mb-2 text-lg font-bold">
          Total Credit Hour: {cartCreditHours}
        </h2>
      </div>
      <div className="pt-3">
        <h2 className="mb-2 text-lg font-bold">
          Total Price:{" "}
          {cartItems.reduce((sum, cartItem) => sum + cartItem.price, 0)} USD
        </h2>
      </div>
    </div>
  );
};

Cart.propTypes = {
  cartItems: PropTypes.array.isRequired,
};

export default Cart;
