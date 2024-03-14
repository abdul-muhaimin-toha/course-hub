import { useState } from "react";
import { useEffect } from "react";

import Cart from "./components/Cart";
import Courses from "./components/Courses";
import Navbar from "./components/Navbar";

export const totalCreditHours = 20;

function App() {
  const [courses, setCourse] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    fetch("courses.json")
      .then((res) => res.json())
      .then((data) => setCourse(data));
  }, []);

  const handleCart = (course, setisAdded) => {
    const isAddedInCart = cartItems.find(
      (cartitem) => cartitem.id === course.id,
    );
    const cartCreditHours = cartItems.reduce(
      (sum, cartItem) => sum + cartItem.credit,
      0,
    );

    if (isAddedInCart) {
      const afterRemoved = cartItems.filter(
        (cartItem) => cartItem.id !== course.id,
      );
      setCartItems(afterRemoved);
      setisAdded(false);
    } else if (
      !isAddedInCart &&
      cartCreditHours + course.credit <= totalCreditHours
    ) {
      setCartItems([...cartItems, course]);
      setisAdded(true);
    }
  };

  return (
    <>
      <Navbar></Navbar>
      <div className="mx-auto flex max-w-7xl flex-col-reverse   gap-6 p-4 md:flex-row">
        {/* main-courses container */}
        <Courses courses={courses} handleCart={handleCart}></Courses>
        {/* Cart container */}
        <Cart cartItems={cartItems}></Cart>
      </div>
    </>
  );
}

export default App;
