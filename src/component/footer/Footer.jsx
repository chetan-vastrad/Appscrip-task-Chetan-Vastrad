import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Footer.module.css";
import UsaImage from "../../assets/usa.png";
import Gpay from "../../assets/paymnet/gpay.png";
import Applepay from "../../assets/paymnet/apple.png";
import Paypal from "../../assets/paymnet/pp.png";
import Mastercard from "../../assets/paymnet/ms.png";
import Amex from "../../assets/paymnet/amex.png";
import pay from "../../assets/paymnet/pay.png";
const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [expandedSection, setExpandedSection] = useState(null);

  const toggleSection = (section) => {
    setExpandedSection(expandedSection === section ? null : section);
  };
  return (
    <div>
      <div className={styles.footerSection}>
        <div className={styles.footerSectionTop}>
          <div className={`${styles.collg8} ${styles.footerSectionTop_1}`}>
            <h3>BE THE FIRST TO KNOW</h3>
            <p>Sign up for updates from metta musa</p>
            <div className={`${styles.collg12}`}>
              <input type="text" placeholder="Enter your email" />
              <button>SUBSCRIBE</button>
            </div>
          </div>
          <div className={`${styles.collg4} ${styles.footerSectionTop_2}`}>
            <h3>CONTACT US</h3>
            <div className={styles.contactUsSection}>
              <p>
                <a href="tel: 9090909090">+91 9090909090</a>
              </p>
              <p>
                <a href="mailto:customercare@mettamuse.com">
                  customercare@mettamuse.com
                </a>
              </p>
            </div>
            <h3>CURRENCY</h3>
            <div className={`${styles.collg12}`}>
              <img src={UsaImage} alt="USA Flag" />
              <span>USD</span>
            </div>
            <p className={styles.footerSectionCurrency}>
              Transactions will be completed in Euros and a currency reference
              is available on hove
            </p>
          </div>
        </div>
        <div className={styles.footerSectionBottom}>
          <div className={styles.footerSectionBottomInner}>
            <div className={styles.collg4}>
              <div
                className={styles.footerHeader}
                onClick={() => toggleSection("mettaMuse")}
              >
                <h3>metta muse</h3>
                <i
                  className={`fa-solid fa-angle-${
                    expandedSection === "mettaMuse" ? "up" : "down"
                  }`}
                ></i>
              </div>
              <ul
                className={`${styles.footerContent} ${
                  expandedSection === "mettaMuse"
                    ? styles.visible
                    : styles.hidden
                }`}
              >
                <li>
                  <a href="">About Us</a>
                </li>
                <li>
                  <a href="">Stories</a>
                </li>
                <li>
                  <a href="">Artisans</a>
                </li>
                <li>
                  <a href="">Boutiques</a>
                </li>
                <li>
                  <a href="">Contact Us</a>
                </li>
                <li>
                  <a href="">EU Compliances Docs</a>
                </li>
              </ul>
            </div>
            <div className={styles.collg4}>
              <div
                className={styles.footerHeader}
                onClick={() => toggleSection("quickLinks")}
              >
                <h3>QUICK LINKS</h3>
                <i
                  className={`fa-solid fa-angle-${
                    expandedSection === "quickLinks" ? "up" : "down"
                  }`}
                ></i>
              </div>
              <ul
                className={`${styles.footerContent} ${
                  expandedSection === "quickLinks"
                    ? styles.visible
                    : styles.hidden
                }`}
              >
                <li>
                  <a href="">Orders & Shipping</a>
                </li>
                <li>
                  <a href="">Join/Login as a Seller</a>
                </li>
                <li>
                  <a href="">Payment & Pricing</a>
                </li>
                <li>
                  <a href="">Return & Refunds</a>
                </li>
                <li>
                  <a href="">FAQs</a>
                </li>
                <li>
                  <a href="">Privacy Policy</a>
                </li>
                <li>
                  <a href="">Terms & Conditions</a>
                </li>
              </ul>
            </div>
            <div className={styles.collg4}>
              <div className={styles.followus}>
                <div
                  className={`${styles.footerHeader}`}
                  onClick={() => toggleSection("followus")}
                >
                  <h3>FOLLOW US</h3>
                  <i
                    className={`fa-solid fa-angle-${
                      expandedSection === "followus" ? "up" : "down"
                    }`}
                  ></i>
                </div>
                <ul
                  className={`${styles.footerContent} ${
                    expandedSection === "followus"
                      ? styles.visible
                      : styles.hidden
                  }`}
                >
                  <li>
                    <a href="">
                      <i className="fa-brands fa-instagram"></i>
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <i className="fa-brands fa-linkedin"></i>
                    </a>
                  </li>
                </ul>
              </div>
              <div className={styles.paymentSection}>
                <h3>metta muse ACCEPTS</h3>
                <ul className={styles.paymentCard}>
                  <li>
                    <img src={Gpay} alt="G Pay Logo" />
                  </li>
                  <li>
                    <img src={Mastercard} alt="MasterCard Logo" />
                  </li>
                  <li>
                    <img src={Paypal} alt="Paypal Logo" />
                  </li>
                  <li>
                    <img src={Amex} alt="Amex Pay Logo" />
                  </li>
                  <li>
                    <img src={Applepay} alt="Apple  Pay Logo" />
                  </li>
                  <li>
                    <img src={pay} alt="Apple  Pay Logo" />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <p style={{ textAlign: "center" }} className={styles.bottomText}>
          Copright: @ {currentYear} metta muse. All rights reservesed{" "}
        </p>
      </div>
    </div>
  );
};
export default Footer;
