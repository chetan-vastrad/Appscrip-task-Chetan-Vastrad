import { useState } from "react";
import styles from "./Header.module.css";
import Logo from "../../assets/logo.png";
import ele from "../../assets/icons/ele.png";
import searchicon from "../../assets/icons/search.png";
import heart from "../../assets/icons/heart.png";
import bag from "../../assets/icons/bag.png";
import profile from "../../assets/icons/profile.png";
import arrow from "../../assets/icons/arrow.png"
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const showMenuHandelr = () => {
    setIsMenuOpen((pre) => !pre);
  };
  return (
    <div>
      <div className={styles.topHeader}>
        <div className={styles.innerTopHeader}>
          <img src={ele} alt="Elelemet" />
          <p> Lorem ipsum dolor</p>
        </div>
        <div className={styles.innerTopHeader}>
          <img src={ele} alt="Elelemet" />
          <p> Lorem ipsum dolor</p>
        </div>
        <div className={styles.innerTopHeader}>
          <img src={ele} alt="Elelemet" />
          <p> Lorem ipsum dolor</p>
        </div>
      </div>
      <div className={styles.topMiddleHeader}>
        <div className={styles.middleHeader}>
          <div className={`${styles.mobileMenu}`}>
            {isMenuOpen ? (
              <i
                className="fa-solid fa-xmark menuIcon"
                onClick={showMenuHandelr}
              ></i>
            ) : (
              <i
                className="fa-solid fa-bars menuIcon"
                onClick={showMenuHandelr}
              ></i>
            )}
            <img src={Logo} alt="Logo" />
          </div>
          <h2 className={styles.mainLogo}>LOGO</h2>
          <div className={`${styles.middleHeaderIcons}`}>
           <img src={searchicon} alt="Search" />
           <img src={heart} alt="Like"  />
           <img src={bag} alt="Bag" />
           <img src={profile} alt="Profile" />
            <span>
              ENG <img src={arrow} alt="Bottom Arrow"/>
            </span>
          </div>
        </div>
        <div
          className={`${styles.menuBar} ${
            isMenuOpen ? styles.menuBarOpen : ""
          }`}
        >
          <ul>
            <li><a href="">SHOP</a></li>
            <li><a href="">SKILLS</a></li>
            <li><a href="">STORIES</a></li>
            <li><a href="">ABOUT</a></li>
            <li><a href="">CONTACT US</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Header;
