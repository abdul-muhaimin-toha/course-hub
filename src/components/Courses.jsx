import PropTypes from "prop-types";
import Course from "./Course";

const Courses = ({ courses, handleCart }) => {
  return (
    <div className="grid w-full grid-cols-1 gap-6 md:w-4/6 md:grid-cols-2 lg:w-3/4 lg:grid-cols-3 ">
      {courses.map((course) => (
        <Course
          course={course}
          key={course.id}
          handleCart={handleCart}
        ></Course>
      ))}
    </div>
  );
};

Courses.propTypes = {
  courses: PropTypes.array.isRequired,
  handleCart: PropTypes.func.isRequired,
};

export default Courses;
