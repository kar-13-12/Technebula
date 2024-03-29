import "./course.css";
// import sperm_cell from "../../assets/sperm-cell.jpeg";
// import nervous_system from "../../assets/nervous-system.jpeg";
// import infographic_cell from "../../assets/Infographic_ cell.jpeg";
import Navbar from "../../component/navbar/navbar";
import Accordioncourse from "../../component/accrodion-course/accrodion";

const Course = () => {
  return (
    <div className="neet-cell">
      <Navbar />
      <div className="body-cell">
        <Accordioncourse />
      </div>
    </div>
  );
};

export default Course;
