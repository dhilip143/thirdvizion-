
import image1 from "/src/assets/WebStackImages/React.png";
import image2 from  "/src/assets/WebStackImages/Node.png";
import image3 from "/src/assets/WebStackImages/Vue.png";
import image4 from  "/src/assets/WebStackImages/Nuxt.png";
// "/src/assets/Images/slider1_4.png";
import image5 from "/src/assets/WebStackImages/Angular.png";
import image6 from "/src/assets/WebStackImages/Framer.png";
import image7 from "/src/assets/WebStackImages/Lottie.png";
// "/src/assets/Images/slider1_7.png";
import image8 from "/src/assets/WebStackImages/Tailwind.png"; 
import image9 from  "/src/assets/WebStackImages/Bootstrap.png";  
import image10 from "/src/assets/WebStackImages/Vite2.png";

const WebStack = () => {
  return (
    <>
      <div className="">
        <div
          className="slider"
          style={{
            "--width": "150px",
            "--height": "100px",
            "--quantity": 9,
            "--time": "14s",
          }}
        >
          <div className="list">
            <div className="item hidden" style={{ "--position": 1 }}>
              <img src={image1} alt="" className="" />
            </div>
            <div className="item" style={{ "--position": 2 }}>
              <img src={image2} alt="" className="" />
            </div>
            <div className="item" style={{ "--position": 3 }}>
              <img src={image3} alt="" className="" />
            </div>
            <div className="item" style={{ "--position": 4 }}>
              <img src={image4} alt="" className="" />
            </div>
            <div className="item" style={{ "--position": 5 }}>
              <img src={image5} alt="" className="" />
            </div>
            <div className="item" style={{ "--position": 6 }}>
              <img src={image6} alt="" className="" />
            </div>
            <div className="item" style={{ "--position": 7 }}>
              <img src={image7} alt="" className="" />
            </div>
            <div className="item" style={{ "--position": 8 }}>
              <img src={image8} alt="" className="" />
            </div>
            <div className="item" style={{ "--position": 9 }}>
              <img src={image9} alt="" className="" />
            </div>
            <div className="item" style={{ "--position": 10 }}>
              <img
                src={image10}
                alt=""
                className=""
              />
            </div>
          </div>
        </div>

        {/* Second Row */}
        <div
          className="slider"
          reverse="true"
          style={{
            "--width": "150px",
            "--height": "100px",
            "--quantity": 9,
            "--time": "14s",
          }}
        >
          <div className="list">
            <div className="item" style={{ "--position": 2 }}>
              <img src={image2} alt="" className="" />
            </div>
            <div className="item" style={{ "--position": 3 }}>
              <img src={image3} alt="" className="" />
            </div>
            <div className="item" style={{ "--position": 4 }}>
              <img src={image4} alt="" className="" />
            </div>
            <div className="item" style={{ "--position": 5 }}>
              <img src={image5} alt="" className="" />
            </div>
            <div className="item" style={{ "--position": 6 }}>
              <img src={image6} alt="" className="" />
            </div>
            <div className="item" style={{ "--position": 7 }}>
              <img src={image7} alt="" className="" />
            </div>
            <div className="item" style={{ "--position": 8 }}>
              <img src={image8} alt="" className="" />
            </div>
            <div className="item" style={{ "--position": 9 }}>
              <img src={image9} alt="" className="" />
            </div>
            <div className="item" style={{ "--position": 10 }}>
              <img
                src={image10}
                alt=""
                className=""
              />
            </div>
          </div>
        </div>

        {/* Third Row */}
        <div
          className="slider"
          style={{
            "--width": "150px",
            "--height": "100px",
            "--quantity": 9,
            "--time": "14s",
          }}
        >
          <div className="list">
            <div className="item" style={{ "--position": 2 }}>
              <img src={image2} alt="" className="" />
            </div>
            <div className="item" style={{ "--position": 3 }}>
              <img src={image3} alt="" className="" />
            </div>
            <div className="item" style={{ "--position": 4 }}>
              <img src={image4} alt="" className="" />
            </div>
            <div className="item" style={{ "--position": 5 }}>
              <img src={image5} alt="" className="" />
            </div>
            <div className="item" style={{ "--position": 6 }}>
              <img src={image6} alt="" className="" />
            </div>
            <div className="item" style={{ "--position": 7 }}>
              <img src={image7} alt="" className="" />
            </div>
            <div className="item" style={{ "--position": 8 }}>
              <img src={image8} alt="" className="" />
            </div>
            <div className="item" style={{ "--position": 9 }}>
              <img src={image9} alt="" className="" />
            </div>
            <div className="item" style={{ "--position": 10 }}>
              <img
                src={image10}
                alt=""
                className=""
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WebStack;