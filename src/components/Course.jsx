import PropTypes from "prop-types";
import { useState } from "react";

const Course = ({ course, handleCart }) => {
  const [isAdded, setisAdded] = useState(false);
  const { photo, name, description, price, credit } = course;
  return (
    <div className="flex flex-col gap-3 rounded-md border-2 border-blue-500 bg-slate-100 p-3">
      <img
        src={photo ? photo : "default-course-poster.png"}
        alt=""
        className="h-36 w-full rounded-md object-cover"
      />
      <h2 className="text-md h-10 font-bold dark:text-black">
        {name || "Unknown"}
      </h2>
      <p className="text-sm font-light dark:text-slate-700">
        {description || "Description Unavailable"}
      </p>
      <div className="flex items-center justify-between p-1">
        <div className="p- flex items-center gap-2">
          <img
            src="dollar-sign.png"
            alt="Icon Currency"
            className="o h-4 w-4"
          />
          <p className="text-blue-500">Price: {price}</p>
        </div>
        <div className="flex items-center gap-2">
          <img
            src="credit-icon.png"
            alt="Icon Credit Hour"
            className="o h-4 w-4"
          />
          <p className="text-blue-500">Credit: {credit}hr</p>
        </div>
      </div>
      <button
        onClick={() => handleCart(course, setisAdded)}
        className={`w-full rounded-md ${isAdded ? "bg-blue-400" : "bg-blue-500"} p-2 text-white`}
      >
        {isAdded ? "Remove" : "Select"}
      </button>
    </div>
  );
};

Course.propTypes = {
  course: PropTypes.object.isRequired,
  handleCart: PropTypes.func.isRequired,
};

export default Course;
