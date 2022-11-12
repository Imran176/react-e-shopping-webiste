import React, { useState } from "react";
import "./directory.scss";
import MenuItem from "../menu-item/MenuItem";

const sectionsData = [
  {
    title: "hats",
    imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
    id: 1,
    linkUrl: "shop/hats",
  },
  {
    title: "jackets",
    imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
    id: 2,
    linkUrl: "shop/jackets",
  },
  {
    title: "sneakers",
    imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
    id: 3,
    linkUrl: "shop/sneakers",
  },
  {
    title: "womens",
    imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
    size: "large",
    id: 4,
    linkUrl: "shop/womens",
  },
  {
    title: "mens",
    imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
    size: "large",
    id: 5,
    linkUrl: "shop/mens",
  },
];

function Directory(props) {
  const [sections, setSection] = useState(sectionsData);

  return (
    <div className="directory-menu">
      {sections.map((section) => {
        const { title, imageUrl, size, id, linkUrl } = section;
        return <MenuItem key={id} title={title} pic={imageUrl} size={size}/>;
      })}
    </div>
  );
}

export default Directory;
