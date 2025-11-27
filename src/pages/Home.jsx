import "../style/Home.css"
import { useState, useEffect } from "react";
import { FiSearch } from "react-icons/fi";
import googleplay from "../assets/googleplay.png"
import appstore from "../assets/appstore.png"
import { RiArrowDownDoubleFill } from "react-icons/ri";
import category1 from "../assets/category1.png"
import category2 from "../assets/category2.png"
import category3 from "../assets/category3.png"
import category4 from "../assets/category4.png"
import category5 from "../assets/category5.png"
import scanQR from "../assets/scanQR.png"
import mixkitVideo from "../assets/mixkit.mp4"
import logo from "../assets/logo.webp"
import logoPng from "../assets/logo.webp"
import { FaFacebookSquare, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Home = () => {
  const [rotatingText, setRotatingText] = useState(0);
  const texts = ["Business app", "B2B Digital Hub"];

  useEffect(() => {
    const interval = setInterval(() => {
      setRotatingText((prev) => (prev + 1) % texts.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [texts.length]);
  return (
    <>
        <section className="main_hero">
            <video 
              className="hero-video" 
              autoPlay 
              loop 
              muted 
              playsInline
            >
              <source src={mixkitVideo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className="hero-overlay"></div>
            <div className="container-fluid">
                <div className="hero py-4 mt-5 mb-5">
                  <div className="inner_hero text-white">
                    <div className="hero_logo">
                      <img src={logo} alt="TexTile Mandee Logo" />
                    </div>
                    <h1>TexTile Mandee India's </h1>
                    <h2><span>#1</span> <span>Textile</span> <span key={rotatingText} className="rotating-text">{texts[rotatingText]}</span></h2>
                    <div className="hero_search_store_container">
                      <a href={"/#/member"} className="hero_search text-black bg-white rounded position-relative">
                        <FiSearch className="text-black hero_search_icon"/>
                        <span>Search Members</span>
                      </a>
                      <div className="hero_inner_store gap-3">
                        <a href="https://play.google.com/store/apps/details?id=app.textile.mandee" target="_blank"><img src={googleplay} alt="google play store" /></a>
                        <a href="https://apps.apple.com/in/app/textile-mandee/id6743525584" target="_blank"><img src={appstore} alt="apple store" /></a>
                      </div>
                    </div>
                  </div>
                  <a 
                    href="#main_category" 
                    className="text-decoration-none"
                    onClick={(e) => {
                      e.preventDefault();
                      const element = document.getElementById('main_category');
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                      }
                    }}
                  >
                    <button className="hero_down text-white border-0 d-flex align-items-center mx-auto mb-3 fw-medium fs-5">Scroll Down <RiArrowDownDoubleFill /></button>
                  </a>
                </div>
            </div>
        </section>

        <section className="main_category" id="main_category">
            <div className="container-fluid">
              <div className="category">
                <div className="text-center">
                  {/* <p className="category_subtitle">CHOOSE US</p> */}
                  <h1>Featured Categories</h1>
                  <p className="category_description">Discover powerful features inside the app that are designed to revolutionize how you do business — smarter, faster, and better.</p>
                </div>

                <div className="category_slider_wrapper mt-lg-5 mt-4">
                  <div className="category_cards_container">
                    <div className="category_card">
                      <div className="category_card_img">
                        <img src={category1} alt="category images" />
                      </div>
                      <div className="category_card_content">
                        <h3 className="category_card_title">Outstation Broker</h3>
                        <a href={"/#/member"} className="category_card_link">View more</a>
                      </div>
                    </div>
                    <div className="category_card">
                      <div className="category_card_img">
                        <img src={category2} alt="category images" />
                      </div>
                      <div className="category_card_content">
                        <h3 className="category_card_title">Surat Trader</h3>
                        <a href={"/#/member"} className="category_card_link">View more</a>
                      </div>
                    </div>
                    <div className="category_card">
                      <div className="category_card_img">
                        <img src={category3} alt="category images" />
                      </div>
                      <div className="category_card_content">
                        <h3 className="category_card_title">Value Addition</h3>
                        <a href={"/#/member"} className="category_card_link">View more</a>
                      </div>
                    </div>
                    <div className="category_card">
                      <div className="category_card_img">
                        <img src={category4} alt="category images" />
                      </div>
                      <div className="category_card_content">
                        <h3 className="category_card_title">Weaver</h3>
                        <a href={"/#/member"} className="category_card_link">View more</a>
                      </div>
                    </div>
                    <div className="category_card">
                      <div className="category_card_img">
                        <img src={category5} alt="category images" />
                      </div>
                      <div className="category_card_content">
                        <h3 className="category_card_title">Buyer</h3>
                        <a href={"/#/member"} className="category_card_link">View more</a>
                      </div>
                    </div>
                    {/* Duplicate set for seamless loop */}
                    <div className="category_card">
                      <div className="category_card_img">
                        <img src={category1} alt="category images" />
                      </div>
                      <div className="category_card_content">
                        <h3 className="category_card_title">Outstation Broker</h3>
                        <a href={"/#/member"} className="category_card_link">View more</a>
                      </div>
                    </div>
                    <div className="category_card">
                      <div className="category_card_img">
                        <img src={category2} alt="category images" />
                      </div>
                      <div className="category_card_content">
                        <h3 className="category_card_title">Surat Trader</h3>
                        <a href={"/#/member"} className="category_card_link">View more</a>
                      </div>
                    </div>
                    <div className="category_card">
                      <div className="category_card_img">
                        <img src={category3} alt="category images" />
                      </div>
                      <div className="category_card_content">
                        <h3 className="category_card_title">Value Addition</h3>
                        <a href={"/#/member"} className="category_card_link">View more</a>
                      </div>
                    </div>
                    <div className="category_card">
                      <div className="category_card_img">
                        <img src={category4} alt="category images" />
                      </div>
                      <div className="category_card_content">
                        <h3 className="category_card_title">Weaver</h3>
                        <a href={"/#/member"} className="category_card_link">View more</a>
                      </div>
                    </div>
                    <div className="category_card">
                      <div className="category_card_img">
                        <img src={category5} alt="category images" />
                      </div>
                      <div className="category_card_content">
                        <h3 className="category_card_title">Buyer</h3>
                        <a href={"/#/member"} className="category_card_link">View more</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </section>

        <section className="main_download" id="main_download">
          <div className="container">
            <div className="download position-relative p-xl-5 p-4">
              <h1>Download The App Now !</h1>
              <p>Experience seamless online business <br/> only on the TexTile Mandee app</p>
              <div className="download_image gap-3 pt-xl-4 d-flex">
                      <a href="https://play.google.com/store/apps/details?id=app.textile.mandee" target="_blank"><img src={googleplay} alt="google play store" /></a>
                      <a href="https://apps.apple.com/in/app/textile-mandee/id6743525584" target="_blank"><img src={appstore} alt="apple store" /></a>
              </div>
              <div className="qrscan">
                <img src={scanQR} alt="QR scan"/>
              </div>
            </div>
          </div>
        </section>

        <footer className="bg-black text-white">
          <div className="container">
            <div className="footer_main">
              <div className="footer_content">
                <div className="footer_brand">
                  <div className="footer_brand_header">
                    <div className="footer_logo">
                      <img src={logoPng} alt="TexTile Mandee Logo" />
                    </div>
                    <h1>TexTile Mandee</h1>
                  </div>
                  <p className="footer_description">Join 1000+ textile professionals using TexTile Mandee.</p>
                  <p className="footer_tagline">India's First Textile B2B Digital Hub</p>
                  <div className="footer_social mt-4">
                    <a href="https://www.instagram.com/textilemandee/?igsh=MjNyeGFsdmc2aTV2#" className="footer_social_link" target="_blank">
                      <FaInstagram className="footer_icon"/>
                    </a>
                    {/* <a href="#" className="footer_social_link" target="_blank">
                      <FaFacebookSquare className="footer_icon"/>
                    </a>
                    <a href="#" className="footer_social_link" target="_blank">
                      <FaXTwitter className="footer_icon"/>
                    </a>
                    <a href="#" className="footer_social_link" target="_blank">
                      <FaLinkedin className="footer_icon"/>
                    </a> */}
                  </div>
                </div>
                
                <div className="footer_links">
                  <h3>Quick Links</h3>
                  <ul>
                    <li><a href={"/#/member"}>Search Members</a></li>
                    <li><a href="#main_category">Categories</a></li>
                    <li><a href="#main_download">Download App</a></li>
                  </ul>
                </div>

                <div className="footer_download">
                  <h3>Download Our App</h3>
                  <p>Get the app and start connecting with textile professionals</p>
                  <div className="footer_image gap-3 mt-3">
                    <a href="https://play.google.com/store/apps/details?id=app.textile.mandee" target="_blank"><img src={googleplay} alt="google play store" /></a>
                    <a href="https://apps.apple.com/in/app/textile-mandee/id6743525584" target="_blank"><img src={appstore} alt="apple store" /></a>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="footer_bottom">
              <hr className="footer_divider"/>
              <p className="footer_bar">By continuing past this page, you agree to our <span>Terms of Service, Cookie Policy, Privacy Policy </span> and Content Policies. All trademarks are properties of their respective owners 2025 <span>©</span> TexTile Mandee™ Ltd. All rights reserved.</p>
            </div>
          </div>
        </footer>
    </>
  )
}

export default Home

