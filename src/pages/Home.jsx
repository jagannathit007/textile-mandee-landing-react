import "../style/Home.css"
import { useState, useEffect } from "react";
import { FiSearch } from "react-icons/fi";
import googleplay from "../assets/googleplay.png"
import appstore from "../assets/appstore.png"
import { RiArrowDownDoubleFill } from "react-icons/ri";
import { FaUsers, FaNetworkWired, FaIdCard, FaFacebookSquare, FaInstagram, FaLinkedin, FaSearch } from "react-icons/fa";
import category1 from "../assets/category1.png"
import category2 from "../assets/category2.png"
import category3 from "../assets/category3.png"
import category4 from "../assets/category4.png"
import category5 from "../assets/category5.png"
import scanQR from "../assets/scanQR.png"
import mixkitVideo from "../assets/mixkit.mp4"
import logo from "../assets/logo.webp"
import logoPng from "../assets/logo.webp"
import f1Background from "../assets/f1.jpg"
import f2Background from "../assets/f1.jpg"
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
            <div className="hero_logo_top_left">
              <img src={logo} alt="TexTile Mandee Logo" />
            </div>
            <div className="container-fluid position-relative">
                <div className="hero py-2 mt-5">
                  <div className="inner_hero text-white">
                    {/* <div className="hero_logo">
                      <img src={logo} alt="TexTile Mandee Logo" />
                    </div> */}
                    <h1>TexTile Mandee India's </h1>
                    <h2><span>#1</span> <span>Textile</span> <span key={rotatingText} className="rotating-text">{texts[rotatingText]}</span></h2>
                    <div className="hero_description">
                      {/* <p className="hero_description_main">Connect, Collaborate & Grow your textile business faster than ever!</p> */}
                      <p className="hero_description_sub">TexTile Mandee is the ultimate B2B networking platform built exclusively for textile professionals, manufacturers, wholesalers, traders, and retailers in Surat and across India.</p>
                    </div>
                    <div className="hero_search_store_container">
                      <a href={"/#/member"} className="hero_search position-relative">
                        <FiSearch className="hero_search_icon"/>
                        <span>Search Members</span>
                      </a>
                      {/* <div className="hero_inner_store gap-3">
                        <a href="https://play.google.com/store/apps/details?id=app.textile.mandee" target="_blank"><img src={googleplay} alt="google play store" /></a>
                        <a href="https://apps.apple.com/in/app/textile-mandee/id6743525584" target="_blank"><img src={appstore} alt="apple store" /></a>
                      </div> */}
                    </div>
                  </div>
                  <a 
                    href="#" 
                    className="text-decoration-none hero_down_link"
                    onClick={(e) => {
                      e.preventDefault();
                      window.scrollTo({
                        top: document.documentElement.scrollHeight,
                        behavior: 'smooth'
                      });
                    }}
                  >
                    <button className="hero_down text-white border-0 d-flex align-items-center justify-content-center fw-medium fs-5"><RiArrowDownDoubleFill /></button>
                  </a>
                </div>
            </div>
        </section>

        <section className="main_category" id="main_category" style={{backgroundImage: `url(${f1Background})`}}>
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

        <section className="main_download" id="main_download" style={{backgroundImage: `url(${f2Background})`}}>
          <div className="container">
            <div className="download_wrapper">
              <div className="download_left_section">
                <h1 className="download_main_title">DOWNLOAD THE APP NOW !</h1>
                <p className="download_subtitle">Connect With Textile Professionals</p>
                <div className="download_app_buttons">
                  <a href="https://play.google.com/store/apps/details?id=app.textile.mandee" target="_blank" className="download_app_link">
                    <img src={googleplay} alt="google play store" />
                  </a>
                  <a href="https://apps.apple.com/in/app/textile-mandee/id6743525584" target="_blank" className="download_app_link">
                    <img src={appstore} alt="apple store" />
                  </a>
                </div>
              </div>
              
              <div className="download_content_wrapper">
                <div className="download_qr_container">
                  <img src={scanQR} alt="QR scan" className="qr_code_image"/>
                  {/* <p className="scan_me_text">SCAN ME</p> */}
                </div>

                <div className="download_feature_card download_feature_card_left">
                  <div className="feature_card_icon">
                    <FaNetworkWired />
                  </div>
                  <h3 className="feature_card_title">B2B Networking</h3>
                  <p className="feature_card_description">Connect with 1000+ textile professionals including manufacturers, traders, exporters, importers, and buyers across India's textile industry.</p>
                </div>

                <div className="download_feature_card download_feature_card_right">
                  <div className="feature_card_icon">
                    <FaSearch />
                  </div>
                  <h3 className="feature_card_title">Advanced Search</h3>
                  <p className="feature_card_description">Quickly find the right businesses using smart filters like location, product type, fabric category, and price range.</p>
                </div>
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

