import Navbar from "../../component/navbar/navbar";
import gallery1 from "../../assets/g1.jpg";
import gallery2 from "../../assets/g2.jpg";
import gallery3 from "../../assets/gallery-3.jpeg";
import gallery4 from "../../assets/g5.jpg";
import gallery5 from "../../assets/g5.jpg";
import gallery6 from "../../assets/g6.jpg";
import './gallery.css';

const Gallery = () => {
 

  return (
    <>
      <Navbar />
      <div className="three-img">
        <img src={gallery1} className="g1" alt=""/>
        <img src={gallery2} className="g1" alt=""/>
        <img src={gallery3} className="g1" alt=""/>
      </div>
      <div className="learning">
        <h1>Discover The New way of Learning</h1>
      </div>
      <div className="group-1">
        <div className="palce">
          <p>Place of Knowledge</p>
        </div>
        <div className="">
          <img src={gallery4} className="g4" alt=""/>
        </div>
        <div className="lorem">
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam ducimus voluptates debitis veritatis molestias adipisci quo? Nulla, molestias possimus debitis, repudiandae ullam eius ratione, iusto eum laudantium vel nesciunt iste?</p>
        </div>
      </div>
    </>
  );
};

export default Gallery;
 