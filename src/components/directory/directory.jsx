import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import "./directory.scss";
import MenuItem from "../menu-item/MenuItem";

import { selectorDirectorySections } from "../../redux/directory/directorySelector";

const Directory=({sections})=> {
  return (
    <div className="directory-menu">
      {sections.map((section) => {
        const { title, imageUrl, size, id, linkUrl } = section;
        return (
          <MenuItem
            key={id}
            title={title}
            pic={imageUrl}
            size={size}
            linkUrl={linkUrl}
          />
        );
      })}
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  sections: selectorDirectorySections
})

export default connect(mapStateToProps)(Directory);
