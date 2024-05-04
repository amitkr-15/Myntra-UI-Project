import { RiGooglePlayFill } from "react-icons/ri";
import { AiOutlineApple } from "react-icons/ai";
import { FaFacebook, FaYoutube, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <div className="footer_container">
        <div className="footer_column">
          <h3>ONLINE SHOPPING</h3>

          <a href="#">Men</a>
          <a href="#">Women</a>
          <a href="#">Kids</a>
          <a href="#">Home & Living</a>
          <a href="#">Beauty</a>
          <a href="#">Gift Card</a>
          <a href="#">Myntra Insider</a>
        </div>

        <div className="footer_column">
          <h3>CUSTOMER POLICIES</h3>

          <a href="#">Contac Us</a>
          <a href="#">FAQ</a>
          <a href="#">T&C</a>
          <a href="#">Terms Of Use</a>
          <a href="#">Track Orders</a>
          <a href="#">shipping</a>
          <a href="#">Cancellation</a>
          <a href="#">Returns</a>
          <a href="#">Privacy policy</a>
          <a href="#">Grievance Officer</a>
        </div>

        <div className="footer_column">
          <h3>EXPERIENCE MYNRTA APP ON MOBILE</h3>
          <div className="download_link">
            <a href="https://play.google.com/store/apps/details?id=com.myntra.android&hl=en_IN&gl=US">
              <RiGooglePlayFill size={50} />
            </a>
            GET IT ON <br />
            Google Play <br />
            <a className="ml-2" href="https://apps.apple.com/in/app/myntra-fashion-shopping-app/id907394059">
              <AiOutlineApple size={50} />
            </a>
            Download On The <br />
            Apple Store <br />
          </div>

          <h3>KEEP IN TOUCH</h3>
          <div className="social_link  text-2xl flex ">
            <FaFacebook className="mt-0"  />
            <FaYoutube  className="ml-4" />
            <FaInstagram className="ml-4"  />
          </div>
        </div>
      </div>
      <hr />

      <div className="copyright">
        © 2023 www.myntra.com. All rights reserved.
      </div>
      <hr />

      <div className="footer_column ">
        <h3 className="rg">Registred Office Address</h3>
        <address>
          Buildings Alyssa,
          <br />
          Begonia and Clover situated in Embassy Tech Village,
          <br />
          Outer Ring Road,
          <br />
          Varthur Hobli,
          <br />
          Bengaluru – 560103, India
        </address>
        <div className="copyright">
          CIN: U72300KA2007PTC041799 <br />
          Telephone: +91-80-61561999 <br />
        </div>
      </div>

      <hr />
    </footer>
  );
};

export default Footer;
