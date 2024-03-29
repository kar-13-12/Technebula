import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import "./accrodion.css";
import bioImage1 from "../../assets/1b.jpg"; // Import the biology image
import bioImage2 from "../../assets/2b.png";
import bioImage3 from "../../assets/3b.jpg";
import bioImage4 from "../../assets/4b.png";
import bioImage5 from "../../assets/5b.webp";
import bioImage6 from "../../assets/6b.jpg";
import bioImage7 from "../../assets/7b.jpeg";
import bioImage8 from "../../assets/8b.jpg";
import bioImage9 from "../../assets/9b.jpg";
import bioImage10 from "../../assets/10b.jpg";
import physicsImage1 from "../../assets/1p.jpg"; // Import the first physics image
import physicsImage2 from "../../assets/2p.jpg"; // Import the second physics image
import physicsImage3 from "../../assets/3p.webp"; // Import the third physics image
import physicsImage4 from "../../assets/4p.jpg";
import physicsImage5 from "../../assets/5p.jpg";
import physicsImage6 from "../../assets/6p.jpg";
import physicsImage7 from "../../assets/7p.jpg";
import physicsImage8 from "../../assets/8p.jpg";
import physicsImage9 from "../../assets/9p.jpg";
import physicsImage10 from "../../assets/10p.jpg";
import physicsImage11 from "../../assets/11p.jpg";
import physicsImage12 from "../../assets/12p.jpg";
import physicsImage13 from "../../assets/13p.jpg";
import physicsImage14 from "../../assets/14p.jpg";
import physicsImage15 from "../../assets/15p.jpg";
import physicsImage16 from "../../assets/16p.jpg";
import physicsImage17 from "../../assets/17p.jpg";
import physicsImage18 from "../../assets/18p.jpg";
import physicsImage19 from "../../assets/19p.jpg";
import physicsImage20 from "../../assets/20p.jpg";
import chemistryImage1 from "../../assets/c1.jpeg"; // Import the first chemistry image
import chemistryImage2 from "../../assets/c2.jpg"; // Import the second chemistry image
import chemistryImage3 from "../../assets/c3.jpg";
import chemistryImage4 from "../../assets/c4.jpg";
import chemistryImage5 from "../../assets/c5.jpg";
import chemistryImage6 from "../../assets/c6.jpg";
import chemistryImage7 from "../../assets/c7.jpg";
import chemistryImage8 from "../../assets/c8.jpg";
import chemistryImage9 from "../../assets/c9.jpg";
import chemistryImage10 from "../../assets/c10.jpg";
import chemistryImage11 from "../../assets/c11.jpg";
import chemistryImage12 from "../../assets/c12.jpg";
import chemistryImage13 from "../../assets/c13.jpg";
import chemistryImage14 from "../../assets/c14.jpg";
import chemistryImage15 from "../../assets/c15.jpg";
import chemistryImage16 from "../../assets/c16.jpg";
import chemistryImage17 from "../../assets/c17.jpg";
import chemistryImage18 from "../../assets/c18.jpg";
import chemistryImage19 from "../../assets/c19.jpg";
import chemistryImage20 from "../../assets/c20.jpg";
import mathImage1 from "../../assets/m1.jpg";
import mathImage2 from "../../assets/m2.jpg";
import mathImage3 from "../../assets/m3.jpg";
import mathImage4 from "../../assets/m4.jpg";
import mathImage5 from "../../assets/m5.jpg";
import mathImage6 from "../../assets/m6.jpg";
import mathImage7 from "../../assets/m7.jpg";
import mathImage8 from "../../assets/m8.jpg";
import mathImage9 from "../../assets/m9.jpg";
import mathImage10 from "../../assets/m10.png";
import mathImage11 from "../../assets/m11.png";
import mathImage12 from "../../assets/m12.jpg";
import mathImage13 from "../../assets/m13.jpg";
import mathImage14 from "../../assets/m14.jpg";

function MyComponent() {
  const biocourses = [
    {
      title: "BIOLOGY",
      topics: [
        "Diversity in Living World",
        "Structural Organisation in Animals and Plants",
        "Cell Structure and Function",
        "Plant Physiology",
        "Human Physiology",
        "Reproduction",
        "Genetics and Evolution",
        "Biology and Human Welfare",
        "Biotechnology and its Applications",
        "Ecology and Environment",
      ],
    },

    {
      title: "PHYSICS COURSE",
      topics: [
        "Physics and measurement",
        "Kinematics",
        "Laws of motion",
        "Work,Energy and Power",
        "Rotational motion",
        "Gravitation",
        "Properties of solids and liquids",
        "Thermodynamics",
        "Kinetic theory of gases",
        "Oscillations and waves",
        "Electrostatics",
        "Current Electricity",
        "Magnetic effects of current and magnetism",
        "Electrostatic induction and alternating currents",
        "Electromagnetic waves",
        "Optics",
        "Dual nature of matter and radiation",
        "Atoms and nuclei",
        "Electronic Devices",
        "Experimental Skills",
      ],
    },

    {
      title: "CHEMISTRY COURSE",
      topics: [
        "Some Basic concepts in chemistry",
        "Atomic Structure",
        "Chemical Bonding and molecular structue",
        "Chemical thermodynamics",
        "Solutions",
        "Equilibrium",
        "Redox reactions and electrochemistry",
        "Chemical kinetics",
        "Classification of elements and periodicity in properties",
        "P-Block elements",
        "d and f Block elements",
        "Co-ordination compounds",
        "Purification and characterisation of organic compounds",
        "Some basic principles of organic chemistry",
        "Hydrocarbons",
        "Organic Compounds containing Halogens",
        "Organic Compounds containing Oxygen",
        "Organic Compounds containing Nitrogens",
        "Biomolecules",
        "Principles related to practical chemistry",
      ],
    },

    {
      title: "MATHS COURSE",
      topics: [
        "Sets,Relations and functions",
        "Complex numbers and quadratic equations",
        "Matrices and determinants",
        "Permutations and combinations",
        "Binomial theorem and its simple applications",
        "Sequence and series",
        "Limit,continuity and differentiability",
        "Integral calculus",
        "Differential equations",
        "Co-ordinate geometry",
        "Three dimensional geometry",
        "Vector algebra",
        "Statistics and probability",
        "Trignometry",
      ],
    },
  ]; // List of courses and their corresponding topics

  const biologyImages = [
    bioImage1,
    bioImage2,
    bioImage3,
    bioImage4,
    bioImage5,
    bioImage6,
    bioImage7,
    bioImage8,
    bioImage9,
    bioImage10,
  ]; // List of biology images
  const physicsImages = [
    physicsImage1,
    physicsImage2,
    physicsImage3,
    physicsImage4,
    physicsImage5,
    physicsImage6,
    physicsImage7,
    physicsImage8,
    physicsImage9,
    physicsImage10,
    physicsImage11,
    physicsImage12,
    physicsImage13,
    physicsImage14,
    physicsImage15,
    physicsImage16,
    physicsImage17,
    physicsImage18,
    physicsImage19,
    physicsImage20,
  ]; // List of physics images
  const chemistryImages = [
    chemistryImage1,
    chemistryImage2,
    chemistryImage3,
    chemistryImage4,
    chemistryImage5,
    chemistryImage6,
    chemistryImage7,
    chemistryImage8,
    chemistryImage9,
    chemistryImage10,
    chemistryImage11,
    chemistryImage12,
    chemistryImage13,
    chemistryImage14,
    chemistryImage15,
    chemistryImage16,
    chemistryImage17,
    chemistryImage18,
    chemistryImage19,
    chemistryImage20,
  ]; // List of chemistry images
  const mathImages = [
    mathImage1,
    mathImage2,
    mathImage3,
    mathImage4,
    mathImage5,
    mathImage6,
    mathImage7,
    mathImage8,
    mathImage9,
    mathImage10,
    mathImage11,
    mathImage12,
    mathImage13,
    mathImage14,
  ];

  const [selectedTopicIndex, setSelectedTopicIndex] = useState(0); // State to track selected topic
  const [selectedCourseIndex, setSelectedCourseIndex] = useState(0); // State to track selected course
  const [openAccordion, setOpenAccordion] = useState(null); // State to track open accordion section

  const handleNextClick = () => {
    setSelectedTopicIndex(
      (selectedTopicIndex + 1) % biocourses[selectedCourseIndex].topics.length
    );
  };

  const handlePreviousClick = () => {
    setSelectedTopicIndex(
      (selectedTopicIndex - 1 + biocourses[selectedCourseIndex].topics.length) %
        biocourses[selectedCourseIndex].topics.length
    );
  };

  const handleTopicClick = (courseIndex, topicIndex) => {
    setSelectedTopicIndex(topicIndex);
    setSelectedCourseIndex(courseIndex);
  };

  const handleAccordionChange = (panel) => (event, isExpanded) => {
    setOpenAccordion(isExpanded ? panel : null);
  };

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <div
        className="course-title"
        style={{ display: "flex", alignItems: "center", marginBottom: "20px"}}
      >
        <div className="style" style={{ marginRight: "100px" }}>
          {biocourses.map((course, courseIndex) => (
            <div key={courseIndex} style={{ marginBottom: "20px" }}>
              <Accordion
                expanded={openAccordion === course.title}
                onChange={handleAccordionChange(course.title)}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography variant="h6">{course.title}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <div>
                    {course.topics.map((topic, topicIndex) => (
                      <Button
                        key={topicIndex}
                        onClick={() =>
                          handleTopicClick(courseIndex, topicIndex)
                        }
                        color="primary"
                        style={{
                          marginBottom: "10px",
                          display: "block",
                          color: "black",
                        }}
                      >
                        {topic}
                      </Button>
                    ))}
                  </div>
                </AccordionDetails>
              </Accordion>
            </div>
          ))}
        </div>
        <div className="bio-img" style={{ position: "relative" }}>
          <img
            className="course-img"
            src={
              selectedCourseIndex === 0
                ? biologyImages[selectedTopicIndex]
                : selectedCourseIndex === 1
                ? physicsImages[selectedTopicIndex]
                : selectedCourseIndex === 2
                ? chemistryImages[selectedTopicIndex]
                : mathImages[selectedTopicIndex]
            }
            alt={`Image ${selectedTopicIndex}`}
            style={{ width: "500px" }} // Adjust width as needed
          />
          {selectedTopicIndex <
            biocourses[selectedCourseIndex].topics.length - 1 && (
            <img
              className="img-course"
              src={
                selectedCourseIndex === 0
                  ? biologyImages[selectedTopicIndex + 1]
                  : selectedCourseIndex === 1
                  ? physicsImages[selectedTopicIndex + 1]
                  : selectedCourseIndex === 2
                  ? chemistryImages[selectedTopicIndex + 1]
                  : mathImages[selectedTopicIndex + 1]
              }
              alt={`Image ${selectedTopicIndex + 1}`}
              style={{
                width: "200px",
                position: "absolute",
                top: "10rem",
                left: "100%",
                marginLeft: "20px",
              }} // Adjust width and margins as needed
            />
          )}
        </div>
      </div>
      <div className="next" style={{ marginBottom: "20px", marginLeft:"20rem" }}>
        <Button
          onClick={handlePreviousClick}
          variant="contained"
          color="primary"
          style={{ marginRight: "10px" }}
        >
          Previous
        </Button>
        <Button onClick={handleNextClick} variant="contained" color="primary">
          Next
        </Button>
      </div>
    </div>
  );
}

export default MyComponent;
