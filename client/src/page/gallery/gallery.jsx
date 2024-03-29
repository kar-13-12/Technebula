import Navbar from "../../component/navbar/navbar";
import gallery1 from "../../assets/g1.jpg";
import gallery2 from "../../assets/g2.jpg";
import gallery3 from "../../assets/gallery-3.jpeg";
import gallery4 from "../../assets/g5.jpg";
import gallery5 from "../../assets/gallery-3.jpeg";
import gallery6 from "../../assets/g6.jpg";
import "./gallery.css";
import { FadeOnVisible } from "../../component/FadeOnVisible/FadeOnVisible";
import { FadeOnVisibleLeft } from "../../component/FadeOnVisibleLeft/FadeOnVisibleLeft";

const Gallery = () => {
  return (
    <div className="head-gallery">
      <Navbar />
      <div className="three-img">
  <div className='image-container'>
    <img src={gallery1} className="g1" alt="" />
    <div className="details-overlay">
      <p>Teaching Session</p>
    </div>
  </div>
  <div className='image-container'>
    <img src={gallery2} className="g1" alt="" />
    <div className="details-overlay">
      <p>Students</p>
    </div>
  </div>
  <div className='image-container'>
    <img src={gallery3} className="g1" alt="" />
    <div className="details-overlay">
      <p>Seminar Time</p>
    </div>
  </div>
</div>

      <div className="learning">
        <h1>Discover The New way of Learning</h1>
      </div>
      <FadeOnVisible>
      <div className="group-1">
        <div className="palce">
          <p>Place of Knowledge</p>
        </div>
        <div>
          <img src={gallery4} className="g4" alt="" />
        </div>
        
        <div className="lorem">
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam
            ducimus voluptates debitis veritatis molestias adipisci quo? Nulla,
            molestias possimus debitis, repudiandae ullam eius ratione, iusto
            eum laudantium vel nesciunt iste?
          </p>
        </div>
      </div>
      </FadeOnVisible>
      <FadeOnVisible>
      <div className="main-seminar">
        <div className="seminar">
          <p>Semianr Session</p>
          <img src={gallery5} className="g5" alt="" />
        </div>
        <div className="seminar-para">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum
            quas non maiores assumenda doloribus ea quo quae voluptas ducimus
            sunt, consectetur fugiat rem consequuntur voluptatibus consequatur
            aperiam, ipsa similique sit.
          </p>
        </div>
      </div>
      </FadeOnVisible>
    </div>
  );
};

export default Gallery;
