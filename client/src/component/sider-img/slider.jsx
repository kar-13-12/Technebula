import React from "react";
import Slider from "react-slick";
import cell from "../../assets/sperm-cell.jpeg";

const Responsive = () => {
  var settings = {
    centerMode: true,
    centerPadding: "60px",
    className: "center",
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className="slider-container">
        <div className="bio-head ">
          <h1>Biology Course</h1>
        </div>
        <Slider {...settings}>
          {/* <div className=""> */}
          <div className="cells">
            <img src={cell} alt="" className="cell_img" />
            <h3 className="cell-type">Sperm-cell</h3>
          </div>
          <div className="cells">
            <img src={cell} alt="" className="cell_img" />
            <h3 className="cell-type">Sperm-cell</h3>
          </div>
          <div className="cells">
            <img src={cell} alt="" className="cell_img" />
            <h3 className="cell-type">Sperm-cell</h3>
          </div>
          <div className="cells">
            <img src={cell} alt="" className="cell_img" />
            <h3 className="cell-type">Sperm-cell</h3>
          </div>
          <div className="cells">
            <img src={cell} alt="" className="cell_img" />
            <h3 className="cell-type">Sperm-cell</h3>
          </div>
          <div className="cells">
            <img src={cell} alt="" className="cell_img" />
            <h3 className="cell-type">Sperm-cell</h3>
          </div>
          {/* </div> */}
        </Slider>
      </div>
    </>
  );
};

export default Responsive;
