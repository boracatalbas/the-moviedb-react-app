import React from "react";
import "./style.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as Icons from "@fortawesome/free-solid-svg-icons";

export default function NavbarList({ items }) {
  const getItem = (item) => {
    let itemList = null;
    switch (item.type) {
      case "logo":
        itemList = <img src={item.src} alt="item.src" />;
        break;
      case "icon":
        itemList = <FontAwesomeIcon icon={Icons[item.name]} />;
        break;
      default:
        itemList = <p>{item.name}</p>;
        break;
    }
    return itemList;
  };

  return (
    <ul>
      {items.map((item, index) => {
        return <li key={index}>{getItem(item)}</li>;
      })}
    </ul>
  );
}
