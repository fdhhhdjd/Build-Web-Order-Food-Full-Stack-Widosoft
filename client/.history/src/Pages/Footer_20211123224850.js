import React from "react";
import {
  AiFillInstagram,
  AiOutlineSend,
  AiOutlinePhone,
  AiFillCustomerService,
} from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt, FaFacebookF } from "react-icons/fa";
import { ImLocation } from "react-icons/im";
const Footer = () => {
  return (
    <>
      <div className="footer-container">
        <div className="container">
          <div className="main-container">
            <p>Xem web của chúng tôi thường xuyên để được xem các Ưu đãi</p>
            <div className="mail">
              <input type="email" placeholder="Please Enter Your Email" />
              <button>
                <AiOutlineSend />
              </button>
            </div>

            <h3>Đường dẫn nhanh</h3>
            <ul>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#testimonial">Testimonial</a>
              </li>
              <li>
                <a href="#">Contact Us</a>
              </li>
              <li>
                <a href="#">Portfolio</a>
              </li>
              <li>
                <a href="#">Career</a>
              </li>
              <li>
                <a href="#blog">Blog</a>
              </li>
              <li>
                <a href="#">Terms & Conditions</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
            </ul>

            <h3>Các ngành nghề</h3>
            <ul>
              <li>
                <a href="https://profile-forme.surge.sh/" target="_blank">
                  Website Development
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/jonhny.nguyen.184"
                  target="_blank"
                >
                  AI Artificial Intelligence
                </a>
              </li>
              <li>
                <a href="https://khang-designer.surge.sh/" target="_blank">
                  Website Design
                </a>
              </li>
              <li>
                <a href="https://profile-forme.surge.sh/" target="_blank">
                  Mobile App Design
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/hoang.p.tran.12"
                  target="_blank"
                >
                  Digital Marketing
                </a>
              </li>
              <li>
                <a href="https://khang-designer.surge.sh/" target="_blank">
                  Graphic Design
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/hoang.p.tran.12"
                  target="_blank"
                >
                  IOS App Development
                </a>
              </li>
            </ul>

            <h3>Liên hệ tôi thông qua</h3>
            <div className="touch-section">
              <div className="icon">
                <MdEmail />
              </div>
              <div className="detail">
                <div className="detail-name">Email</div>
                <div className="detail-content">
                  <a href="mailto: phihoang1107@gmail.com">
                    phihoang1107@gmail.com
                  </a>
                </div>
              </div>
            </div>
            <div className="touch-section">
              <div className="icon">
                <FaPhoneAlt />
              </div>
              <div className="detail">
                <div className="detail-name">Số điện thoại</div>
                <div className="detail-content">
                  <a href="tel:0936095986">+0936095986</a>
                </div>
              </div>
            </div>

            <div className="touch-section">
              <div className="icon">
                <ImLocation />
              </div>
              <div className="detail">
                <div className="detail-name">Địa chỉ</div>
                <div className="detail-content">
                  <a href="#"> 76/13/7 đường 44 T.D.Hội p16 q8</a>
                </div>
              </div>
            </div>
          </div>
          <div className="copyright">
            <div className="copy">
              <p>
                Website build 2021 by &nbsp;
                <a
                  href="https://profile-forme.surge.sh/"
                  target="_blank"
                  style={{ color: "red" }}
                >
                  Nguyễn Tiến Tài
                </a>
                &nbsp; with ReactJs.
              </p>
            </div>
            <div className="icons">
              <div className="icon">
                <a
                  href="https://www.facebook.com/hoang.p.tran.12"
                  target="_blank"
                >
                  <FaFacebookF />
                </a>
              </div>
              <div className="icon">
                <a href="https://www.instagram.com/gnaoh1107_/" target="_blank">
                  <AiFillInstagram />
                </a>
              </div>
              <div className="icon">
                <a href="tel:0936095986">
                  <AiOutlinePhone />
                </a>
              </div>
              <div className="icon">
                <a
                  href="https://www.tiktok.com/@hoangnee79?_d=secCgYIASAHKAESPgo8RtRNJyvwIZKxTgbDxiRKn2CMwmTDhfMpylSch2NNfsz%2B7HwIG4TZT%2FYg%2FPeafXRRhox%2B61GSwFmywNg6GgA%3D&checksum=3a577ba9520a0be4a6a24bd303d832ee4f2480b32e4bdcc0c180957fe5e2d506&language=vi&sec_uid=MS4wLjABAAAAZ01V1lpGsYBGbOVDtrdrKw7PL5i9P9X-5JEjbHoizFw&sec_user_id=MS4wLjABAAAAZ01V1lpGsYBGbOVDtrdrKw7PL5i9P9X-5JEjbHoizFw&share_app_id=1180&share_author_id=68371748143&share_link_id=CA1599CE-4009-4076-A6A8-9F062CAB77AF&tt_from=messenger&u_code=k1jhchlk&user_id=68371748143&utm_campaign=client_share&utm_medium=ios&utm_source=messenger&source=h5_t&_r=1"
                  target="_blank"
                >
                  <AiFillCustomerService />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
