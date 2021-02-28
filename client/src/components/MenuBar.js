import React, { useContext, useState } from "react";
import { Menu, Image } from "semantic-ui-react";
import { Link } from "react-router-dom";
import logo from "../images/doyhero.png";
import { AuthContext } from "../context/auth";
import { Dropdown } from "semantic-ui-react";
import i18next from "i18next";
import { useTranslation } from "react-i18next";

function handleClick(lang) {
  i18next.changeLanguage(lang);
}
function MenuBar() {
  const { t } = useTranslation();

  const { user, logout } = useContext(AuthContext);
  const pathname = window.location.pathname;

  const path = pathname === "/" ? "home" : pathname.substr(1);
  const [activeItem, setActiveItem] = useState(path);

  const handleItemClick = (e, { name }) => setActiveItem(name);

  const menuBar = user ? (
    <Menu pointing secondary size="massive" color="blue">
      <Menu.Item
        name="home"
        active={activeItem === "home"}
        onClick={handleItemClick}
        as={Link}
        to="/"
      >
        <Image src={logo} size="small" />
      </Menu.Item>
      <Menu.Item
        name={t("restaurants")}
        active={activeItem === "restaurants"}
        onClick={handleItemClick}
        as={Link}
        to="/restaurants"
      />
      <Menu.Item
        name={t("about")}
        active={activeItem === "about"}
        onClick={handleItemClick}
        as={Link}
        to="/about"
      />
      <Menu.Item
        name={t("contact")}
        active={activeItem === "Contact"}
        onClick={handleItemClick}
        as={Link}
        to="/contact"
      />
      <Menu.Menu position="right">
        <Menu.Item name={t("logout")} onClick={logout} />
      </Menu.Menu>
      <Menu.Item>
        <Dropdown text={t("Language")}>
          <Dropdown.Menu>
            <Dropdown.Item onClick={() => handleClick("tr")} text="Türkçe" />
            <Dropdown.Item onClick={() => handleClick("en")} text="English" />
          </Dropdown.Menu>
        </Dropdown>
      </Menu.Item>
    </Menu>
  ) : (
    <Menu pointing secondary size="massive" color="teal">
      <Menu.Item
        name="home"
        active={activeItem === "home"}
        onClick={handleItemClick}
        as={Link}
        to="/"
      >
        <Image src={logo} size="small" />
      </Menu.Item>
      <Menu.Item
        name={t("restaurants")}
        active={activeItem === "restaurants"}
        onClick={handleItemClick}
        as={Link}
        to="/restaurants"
      />
     
      <Menu.Item
        name={t("about")}
        active={activeItem === "about"}
        onClick={handleItemClick}
        as={Link}
        to="/about"
      />
       <Menu.Item
        name={t("contact")}
        active={activeItem === "Contact"}
        onClick={handleItemClick}
        as={Link}
        to="/contact"
      />
      <Menu.Menu position="right">
        <Menu.Item
          name={t("login")}
          active={activeItem === "Login"}
          onClick={handleItemClick}
          as={Link}
          to="/login"
        />
        <Menu.Item
          name={t("register")}
          active={activeItem === "Register"}
          onClick={handleItemClick}
          as={Link}
          to="/register"
        />
      </Menu.Menu>
      <Menu.Item>
        <Dropdown text={t("Language")}>
          <Dropdown.Menu>
            <Dropdown.Item onClick={() => handleClick("tr")} text="Türkçe" />
            <Dropdown.Item onClick={() => handleClick("en")} text="English" />
          </Dropdown.Menu>
        </Dropdown>
      </Menu.Item>
    </Menu>
  );

  return menuBar;
}

export default MenuBar;
