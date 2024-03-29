import "../../component/media_query_mobile/mobile.css";
import "./home.css";
import Navbar from "../../component/navbar/navbar";
import lady_doctor from "../../assets/lady-doctor.png";
import ContactForm from "../../component/person-data/person-data";
import teacher from "../../assets/fa-solid--chalkboard-teacher (1).svg";
import file from "../../assets/bxs--file-pdf.svg";
import steve from "../../assets/Steve-Jobs.png";
import question from "../../assets/questionmark.svg";
import liveicon from "../../assets/icons8-live-100.png";
import doctor from "../../assets/Indian_doctor.png";
import videocam from "../../assets/live-tv-red.svg";
import lap_person from "../../assets/lap-person.png";
import heart from "../../assets/herat.jpeg";
import furit from "../../assets/dragon-fruit.png";
import phone from "../../assets/phone.jpeg";
import whatapp from "../../assets/Whatsapp-logo.png";
import groupimg from "../../assets/group-positive-young-people.jpg";
import manager from "../../assets/manager-img.png";
import Liveclass from "../../component/intrative-class/liveclass";
import aboutperson from "../../assets/about-person.svg";
import { FadeOnVisible } from "../../component/FadeOnVisible/FadeOnVisible";

const Home = () => {
  return (
    <>
    <div className="main-home">
      <div className="head-name ">
        <div className="siva">
          <h1>
            SIVA MITHRA <span className="academy">NEET ACADEMY</span>
          </h1>
        </div>
        <div className="assist">
          <p>
            For any assistance :88385 21414 | 82483 53063 (9 am to 10 pm) | Mail
            ID: sivamithraneetacademy@gmail.com
          </p>
        </div>
      </div>
      <Navbar />
      <div className="bg-sky-950 form-data ">
        <div className="lady-doctor">
          <div>
            <img src={lady_doctor} className="lady-img" alt="" />
          </div>
          <div className="neet-font">
            <h2>
              &quot;Unlock your Medical Potential Welcome to{" "}
              <span className="text-blue-700">NEET</span>, where dreams take the
              first step toward reality.&quot;
            </h2>
          </div>
        </div>

        <ContactForm />
      </div>
      <div className="group-img" id="about">
        <img src={groupimg} alt="" className="five-person" />

        <div className="text-about text-white bg-blue-900" id="about-container">
          <div className="img-about">
            <img src={aboutperson} alt="" className="about-person" />
            <h1 className="text-5xl">
              About <span className="dot">:</span><span className="us">US</span>
            </h1>
          </div>
          <br></br>
          <p>
            Welcome to NEET Training Center,your dedicated partner on the path
            to medical excellence. At NEET Training Center , we believe in
            empowering aspiring medical professionals to achieve their dreams
            through personalized, innovative, and comprehensive NEET
            preparation.
          </p>
        </div>
      </div>

      <div className="choose">
        <h2 className="text-indigo-950">Why Choose us ?</h2>
      </div>

      <div className="steve-img">
        <FadeOnVisible>
          <main>
            <div className="flex items-center teacher">
              <div className="img-teacher" id="slide-teachet">
                <img src={teacher} className="teacher-img " alt="" />
              </div>
              <div
                className="text-2xl img-teacher-text text-indigo-950"
                id="slide-teacher"
              >
                <h2 className="my-5 text-3xl font-bold">Expert Faculty:</h2>
                <p>
                  Our team of experienced and passionate educators is committed
                  to guiding you through every step of your NEET preparation.
                </p>
              </div>
            </div>
          </main>
        </FadeOnVisible>
        <Liveclass />
        <FadeOnVisible>
          <main>
          <div className="flex items-center teacher">
            <div>
              <img src={file} className="teacher-img" alt="" />
            </div>
            <div
              className=" text-2xl  img-teacher-text text-indigo-950"
              id="slide-teacher"
            >
              <h2 className="my-5 text-3xl font-bold">
                Comprehensive Study Material:{" "}
              </h2>
              <p className="text-2xl">
                Access meticulously curated study materials designed to cover
                the entire NEET syllabus, equipping you with the knowledge and
                skills needed to excel.
              </p>
            </div>
          </div>
          </main>
        </FadeOnVisible>

        <div className="steve-jobs">
          <img src={steve} alt="" className="steve" />
        </div>
        <div className="steve-jobs">
          <img src={question} alt="" className="question  animate-bounce" />
        </div>
        <div className="steve-jobs">
          <img src={question} alt="" className="question-1 animate-bounce" />
        </div>
        <div className="steve-jobs">
          <img src={question} alt="" className="question-2 animate-bounce" />
        </div>
      </div>

      <div className="flex items-end bg-sky-950 ">
        <div className="our-vision">
          <div className="vision">
            <h2>Our Vision:</h2>
            <p>
              To be the preferred destination for NEET preparation, known for
              nurturing future medical leaders who not only excel academically
              but also contribute positively to the healthcare community.
            </p>
          </div>
          <div className="vision">
            <h2>Join Us</h2>
            <p>
              Embark on your NEET preparation with . We invite you to be part of
              a supportive community that believes in turning aspirations into
              achievements.
            </p>
          </div>
        </div>
        <div className="manager-img">
          <img src={manager} alt="" className="team-manager" />
        </div>
      </div>

      {/* <div className="live-class"> */}
      <div className="live-stream ">
        <div>
          <img src={videocam} className="cam" alt="" />
        </div>
        <div>
          <h2 className="color">
            LIVE <br /> STREAMING
          </h2>
        </div>
      </div>
      {/* </div> */}

      {/* <div> */}
      <div className="session">
        <div>
          <div className="live-session">
            <img src={liveicon} className="live" alt="" />
            <p className=" font-bold text-xl  ">LIVE</p>
          </div>
          <div className="master">
            <div>
              <img src={doctor} className="doctor" alt="" />
            </div>
            <div>
              <h2 className="text-blue-500 days text-4xl font-bold">
                30 days with <br /> Dr.Venugopal <br />
                (masterclass)
              </h2>
            </div>
          </div>
        </div>
      </div>

      {/* </div> */}

      <div className="lap-person">
        <div className="experts-person">
          <h2 className="experts text-sky-950">
            LIVE CLASS WITH <br /> EXPERTS
          </h2>
          <p className=" text-sky-500">
            Experience real time learning with dynamic live classes at NEET,
            shaping your success in every session.
          </p>
          <div className="small-ball"></div>
          <div className="small-ball-2 "></div>
          <div className="small-ball-3 "></div>
        </div>
        <div className="lap-boy">
          <img src={lap_person} className="person" alt="" />
        </div>
        <div className="blue-ball"></div>
      </div>

      <div>
        <img src={heart} className="heart" alt="" />
      </div>

      <div className="lap-person mt-9">
        <div className="experts-person">
          <h2 className="experts text-sky-950">
            ADVANCED <br /> LEARNING BY AR/VR
          </h2>
          <p className=" text-sky-500">
            &quot;Elevate your education with cutting-edge AR/VR technology for
            an immersive and advanced learning experience at NEET&quot;
          </p>
          <div className="small-ball1"></div>
          <div className="small-ball-4 "></div>
          <div className="small-ball-5 "></div>
        </div>
        <div>
          <img src={furit} className="furit" alt="" />
        </div>
        <div className="blue-ball-1"></div>
      </div>

      <div className="wapp">
        <img src={phone} className="phone" alt="" />
      </div>

      <div className="lap-person mt-9">
        <div className="experts-person">
          <h2 className="experts text-sky-950">
            24/7 AVAILABLE <br /> WHATSAPP <br /> INTEGRATION
          </h2>
          <p className=" whatsapp-text text-sky-500">
            Stay connected effortlessly with our WhatsApp integration, ensuring
            seamless communication and support for your educational journey at
            NEET
          </p>
          <div className="small-ball2"></div>
          <div className="small-ball-6 "></div>
          <div className="small-ball-7 "></div>
        </div>
        <div>
          <img src={whatapp} className="whatapp" alt="" />
        </div>
        <div className="blue-ball-2"></div>
      </div>
      </div>
    </>
  );
};

export default Home;
