import React from "react";
import mobile from "../images/image-header-mobile.jpg";
import desktop from "../images/image-header-desktop.jpg";
function Image() {
  return (
    <>
      <section className='image--section'>
        <picture>
          <source media="(min-width:769px )" srcset={desktop} />
          <img src={mobile} alt="header" />
        </picture>
      </section>
    </>
  );
}

export { Image };
