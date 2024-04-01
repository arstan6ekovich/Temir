import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import img from "../../components/image/image 34.png";
import image from "../../components/image/iPhone 14 Pro.png";

import card from "../../components/image/Frame 26.png";
import phone from "../../components/image/Frame 27.png";
import icon from "../../components/image/Frame 28.png";

import osa from "../../components/image/Add details.png";
import osa1 from "../../components/image/tap card.png";
import osa2 from "../../components/image/Go share.png";

import hand from "../../components/image/Hand,R.png";
import iphone from "../../components/image/iPhone-12.png";
import hand2 from "../../components/image/Hand,L.png";

import QR from "../../components/image/QR Code.png";
import photo from "../../components/image/image 23.png";
import { Link, useNavigate } from "react-router-dom";

import motion_web from "../../components/image/Group 27.png";

const Products = () => {
  const [scrollPostion, setScrollPostion] = useState(0);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPostion(position);
  };
  const [isModal, setModal] = useState(false);

  const nav = useNavigate();
  console.log(scrollPostion);
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
    AOS.refresh();
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <div id="Products">
      <div className="container">
        <div className="text">
          <h1
            style={{
              translateX: "-200px",
              fontFamily: "Arial",
              fontSize: "70px",
              lineHeight: "72px",
              letterSpacing: "0.08em",
              textAlign: "left",
              color: "#FFFFFF",
            }}
          >
            Smart interface
          </h1>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "50px",
              marginTop: "20px",
            }}
          >
            <h3 data-aos="fade-left">• High quality products </h3>
            <h3 data-aos="fade-right"> •Convenient to use</h3>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            width: "300px",
            marginLeft: "37%",
            marginTop: "100px",
          }}
          className="images"
        >
          <div data-aos="fade-up" data-aos-anchor-placement="top-start">
            <img
              style={{ display: "flex", justifyContent: "center" }}
              src={img}
              alt=""
            />
          </div>
          <img style={{ marginTop: "-50px" }} src={image} alt="" />
        </div>

        <div className="text-content">
          <h1
            style={{
              color: "white",
              fontSize: "60px",
              height: "500px",
              fontWeight: "500",
              marginTop: "150px",
              marginLeft: "150px",
            }}
          >
            The smart way <br /> of staying <br />
            connected
          </h1>

          <p
            style={{
              color: "white",
              transform:
                scrollPostion > 880 ? "translateX(0px)" : "translateX(-700px)",
              transition: "2s",
            }}
          >
            Digital business cards are the modern way to share contact
            information. Digital business cards are more interactive,
            costeffective, and sustainable than their physical counterparts. One
            major benefit of digital business cards is that they can be shared
            with anyone, anywhere.
          </p>
        </div>
        <div className="components-images" style={{ height: "400px" }}>
          <div
            className="block"
            style={{
              transform:
                scrollPostion < 1250 ? "translateX(-350px)" : "translateX(0px)",
              transition: "1.5s",
            }}
          >
            <img src={card} alt="" />
            <h2>SMART CARDS</h2>
          </div>
          <div
            className="block1"
            style={{
              transform: scrollPostion < 1250 ? "scale(0)" : "scale(1)",
              transition: "2s",
            }}
          >
            <img src={phone} alt="" />
            <h2>KEYCHAINS</h2>
          </div>
          <div
            className="block1"
            style={{
              transform:
                scrollPostion < 1250 ? "translateX(350px)" : "translateX(0px)",
              transition: "1.5s",
            }}
          >
            <img src={icon} alt="" />
            <h2>MOBILE TAGS</h2>
          </div>
        </div>
        <button className="button">Order</button>
      </div>
      <div className="text-again">
        <h1
          style={{
            color: "white",
            fontSize: "70px",
            fontWeight: "500",
            marginTop: "150px",
            marginLeft: "240px",
          }}
        >
          How it works
        </h1>
        <div className="block5">
          <div className="content">
            <img src={osa} alt="" />
          </div>
          <div className="content">
            <img src={osa1} alt="" />
          </div>
          <div className="content">
            <img src={osa2} alt="" />
          </div>
        </div>
        <div className="line">
          <p
            style={{
              transform:
                scrollPostion < 1800 ? "translateX(400px)" : "translateX(0px)",
              transition: "1.5s",
            }}
            className="description"
          >
            <span style={{ marginLeft: "-10px", position: "absolute" }}>•</span>
            Choose your design & personalize with your own company logo. The
            logo will be engraved into the metal card.
          </p>
        </div>
      </div>
      <div className="">
        <h1
          style={{
            color: "white",
            fontSize: "40px",
            fontWeight: "400",
            marginTop: "150px",
            marginLeft: "350px",
          }}
        >
          FAQ
        </h1>
        <div className="slinder">
          <details
            style={{
              transform:
                scrollPostion < 2214 ? "translateX(-600px)" : "translateX(0px)",
              transition: "1s",
            }}
          >
            <summary>How to customize the card?</summary>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
              reiciendis optio accusantium error quod repellendus iste voluptas
              saepe tenetur beatae unde libero quo iure deleniti commodi,
              perspiciatis culpa quibusdam aperiam!
            </p>
          </details>
          <details
            style={{
              transform:
                scrollPostion < 2244 ? "translateX(-600px)" : "translateX(0px)",
              transition: "1s",
            }}
          >
            <summary>How to use a cards and what we can add?</summary>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint
              tempore optio et voluptatum. Minus voluptatem sed culpa, illum
              soluta aliquam modi dolores sunt! Perferendis quasi possimus
              provident ad odit dolore?
            </p>
          </details>
          <details
            style={{
              transform:
                scrollPostion < 2284 ? "translateX(-600px)" : "translateX(0px)",
              transition: "1s",
            }}
          >
            <summary>How to share with my card?</summary>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequatur, laborum excepturi omnis suscipit ad laboriosam totam
              non officiis exercitationem molestias dignissimos, amet corrupti
              blanditiis? Eligendi quaerat aspernatur neque amet eos.
            </p>
          </details>
          <details
            style={{
              transform:
                scrollPostion < 2324 ? "translateX(-600px)" : "translateX(0px)",
              transition: "1s",
            }}
          >
            <summary>How long does delivery take?</summary>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi,
              debitis ipsam beatae quidem mollitia doloribus dolorum accusantium
              laudantium nam aliquid saepe, reiciendis eligendi excepturi ad
              ipsa aliquam! Cumque, est placeat.
            </p>
          </details>
          <details
            style={{
              transform:
                scrollPostion < 2364 ? "translateX(-600px)" : "translateX(0px)",
              transition: "1s",
            }}
          >
            <summary>Is there a product warranty?</summary>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
              suscipit reprehenderit aliquam. Porro, enim temporibus facilis
              esse inventore id voluptate, beatae culpa modi in, a aliquam
              maxime totam velit dolor!
            </p>
          </details>
          <details
            style={{
              transform:
                scrollPostion < 2404 ? "translateX(-600px)" : "translateX(0px)",
              transition: "1s",
            }}
          >
            <summary>What is privacy policy?</summary>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Praesentium, placeat minima laborum rem dolore perferendis illo
              omnis temporibus labore repellat repudiandae ut corrupti
              voluptatem vero molestiae inventore animi eius? Consequatur.
            </p>
          </details>
        </div>
        <div className="img">
          <img
            style={{ marginLeft: "750px", marginTop: "-500px" }}
            src={hand}
            alt=""
          />

          <img
            style={{
              transform: scrollPostion < 2100 ? "scale(0)" : "scale(1)",
              marginTop: "-730px",
              marginLeft: "770px",
              position: "absolute",
              transition: "2s",
            }}
            src={iphone}
            alt=""
          />
          <img
            style={{
              marginLeft: "700px",
              marginTop: "-370px",
              position: "relative",
              transform:
                scrollPostion < 2500 ? "translateY(200px)" : "translateY(0px)",
              transition: "1s",
            }}
            src={hand2}
            alt=""
          />
        </div>
      </div>
      <section id="hero">
        <div className="container">
          <div className="hero">
            <h1>INTERFACE</h1>
            <div
              data-aos="fade-down"
              style={{
                height: "60px",
                width: "2px",
                background: "white",
                position: "absolute",
                marginLeft: "38%",
                marginTop: "160px",
              }}
            ></div>
            <img
              style={{ marginLeft: "45%", marginTop: "160px" }}
              src={QR}
              alt=""
            />
            <div
              data-aos="fade-up"
              style={{
                height: "60px",
                width: "2px",
                background: "white",
                position: "absolute",
                marginLeft: "55%",
                marginTop: "-64px",
              }}
            ></div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                marginLeft: "46%",
              }}
            >
              <h2 style={{ color: "rgba(255, 255, 255, 1)" }}>
                Scun to preview
              </h2>
              <span
                style={{
                  color: "rgba(255, 255, 255, 0.5)",
                  marginLeft: "70px",
                }}
              >
                or
              </span>
              <button className="btn" style={{ position: "absolute" }}>
                Go over
              </button>
            </div>
          </div>

          <div id="Section">
            <div className="animation" data-aos="fade-down">
              <h1>1</h1>
              <h3>Fast delivery</h3>
              <p>
                We deliver right to your front door or office. Free of charge!
              </p>
            </div>
            <div className="animation" data-aos="fade-down">
              <h1>2</h1>
              <h3>High quality</h3>
              <p>
                We are committed to work only with the highest product quality.
              </p>
            </div>
            <div className="animation" data-aos="fade-down">
              <h1>3</h1>
              <h3>Customer Service</h3>
              <p>We are just one phone call away. For anything.</p>
            </div>
          </div>
        </div>
        <section id="content-inputs">
          <div className="container">
            <div className="inputs">
              <h1>Contact us</h1>
              <div className="div">
                <div class="group">
                  <input
                    required=""
                    type="text"
                    class="input"
                    placeholder="Felix Chan..."
                  />
                  <span class="highlight"></span>
                  <span class="bar"></span>
                  <label>Full name</label>
                </div>
                <div class="group">
                  <input
                    required=""
                    type="email"
                    class="input"
                    placeholder="Your email..."
                  />
                  <span class="highlight"></span>
                  <span class="bar"></span>
                  <label>Email</label>
                </div>
                <div class="group">
                  <input
                    required=""
                    type="text"
                    class="input"
                    placeholder="Enter message..."
                  />
                  <span class="highlight"></span>
                  <span class="bar"></span>
                  <label>Message</label>
                </div>
                <button>Submit</button>
              </div>
            </div>
          </div>
        </section>
        <div className="components">
          <img style={{ position: "relative" }} src={photo} alt="" />
          <div className="modal-window">
            <div
              className="modal-content"
              style={{
                display: isModal ? "none" : "flex",
                transform:
                  scrollPostion > 0 ? "translateX(50px)" : "translateY(0px)",
                transition: "2s",
                borderRadius: "10px",
              }}
            >
              <h1
                style={{
                  color: "white",
                  fontSize: "60px",
                  display: "flex",
                  marginLeft: "60px",
                  justifyContent: "center",

                  alignItems: "center",
                }}
              >
                Visit us at our store <br /> in the <br /> Mall of Emirate
              </h1>
              <button
                style={{
                  background: "rgba(229, 226, 226, 0.061)",
                  backdropFilter: "flur(10px)",
                  border: "none",
                  color: "white",
                  fontFamily: "normal",
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                }}
                className="thb"
                onClick={() => setModal(true)}
              >
                more
                <ion-icon name="arrow-forward-outline"></ion-icon>
              </button>
            </div>
          </div>
        </div>
        <div
          className="modal-window"
          style={{ display: isModal ? "flex" : "none", position: "absolute" }}
        >
          <div
            className="modal-content"
            style={{
              marginLeft: "760px",
              marginTop: "-500px",
              borderRadius: "20px",
              transform:
                scrollPostion > scrollPostion
                  ? "translateX(300px)"
                  : "translateX(0px)",
              transition: "2s",
            }}
          >
            <button
              onClick={() => setModal(false)}
              style={{
                position: "absolute",
                color: "white",
                cursor: "pointer",
                marginLeft: "-330px",
                marginTop: "10px",
                background: "rgba(229, 226, 226, 0.061)",
                backdropFilter: "flur(10px)",
                border: "none",
                fontFamily: "normal",
                fontSize: "30px",
              }}
            >
              <ion-icon name="arrow-back-outline"></ion-icon>
            </button>
            <h2 className="h2">
              We are stationed in one of the most beautiful and prestigious
              malls on this planed .
            </h2>
            <h2 className="h3">
              Visit us and we will consult you to all our products
            </h2>
            <button
              style={{
                padding: "10px 30px",
                backdropFilter: "flur(10px)",
                background: "rgba(229, 226, 226, 0.061)",
                fontFamily: "normal",
                color: "white",
                borderRadius: "5px",
                border: "2px solid white",
                marginLeft: "-50px",
                marginTop: "25px",
                position: "absolute",
              }}
            >
              Get directions
            </button>
            <button
              style={{
                padding: "10px 30px",
                background: "black",
                border: "2px solid white",
                color: "white",
                borderRadius: "5px",
                fontFamily: "normal",
                fontSize: "20px",
                marginTop: "20px",
                marginLeft: "110px",
              }}
              onClick={() => nav("/hero")}
            >
              Or bug online
            </button>
          </div>
        </div>
        <div id="posledni">
          <div className="container">
            <div
              className="posledni"
              data-aos="fade-down"
              style={{
                position: "absolute",

                gap: "100px",
                marginLeft: "220px",
              }}
            >
              <h2>HOME</h2>
              <h2>ORDER</h2>
              <h1>TEMIR LLC</h1>
              <h2>ABOUT</h2>
              <h2>CONTACTS</h2>
              <p
                style={{
                  position: "absolute",
                  width: "250px",
                  textAlign: "center",
                  fontFamily: "Jura",
                  fontSize: "14px",
                  fontWeight: "400",
                  lineHeight: "28.18px",
                  textAlign: "center",
                  marginTop: "80px",
                  color: "rgba(103, 103, 103, 1)",
                  marginLeft: "-40px",
                }}
              >
                Mall Of Emirates. G-floor. Near: Rado, Pandora, Steve Madden
              </p>
              <div
                className="logo"
                style={{
                  position: "absolute",
                }}
              >
                <Link
                  to={
                    "https://api.whatsapp.com/send?phone=%2B996700232400&data=ARA_x_g7QfqK5lPOqf0qpsSjC-6ivHpFMkZVpge2hYxoWtw_qvikJ3YOG72zkfkrinTUiHBXJzgHfWbTWbkpOkEHMcskH3UNmlUjoVYXJZk2gq3YAv-h2ShfpwIjDoaiKfpsfLk1q2yiBqDtGlYo0dCIIg&source=FB_Page&app=facebook&entry_point=page_cta&fbclid=IwAR3DOsM-XZdNiEgaM7tLAq9SKDEBYYASNvQJgb9PSP12_8Yah1OY-bpjwUQ_aem_AXmz4c-UTaJH-UZUeasFVKbM6gQLtnVCNwiXoSyTJbvHJA3JAlbMaOi0GmlvPhcEEQ8mdC9dezsBZYFEnz0MdqdL"
                  }
                >
                  <button>
                    <ion-icon name="logo-whatsapp"></ion-icon>
                  </button>
                </Link>
                <Link to={"https://www.facebook.com/motionwebllc2021"}>
                  <button>
                    <ion-icon name="logo-facebook"></ion-icon>
                  </button>
                </Link>
                <Link to={"https://youtu.be/YASX4D_bL90?si=avLWtnpZxdpNHFKZ"}>
                  <button>
                    <ion-icon name="logo-youtube"></ion-icon>
                  </button>
                </Link>
                <Link
                  to={
                    "https://www.instagram.com/motion_web?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                  }
                >
                  <button>
                    <ion-icon name="logo-instagram"></ion-icon>
                  </button>
                </Link>
                <Link to={"https://motion.kg/"}>
                  <button>
                    <ion-icon name="mail-unread-outline"></ion-icon>
                  </button>
                </Link>
              </div>
              <img
                style={{
                  position: "absolute",
                  marginTop: "280px",
                  marginLeft: "-30px",
                }}
                src={motion_web}
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
