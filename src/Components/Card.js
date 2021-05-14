import React from "react";
import { Image } from "./Image";
import { Text } from "./Text";

function Card() {
  return (
    <>
      <section className="card--section">
        <Image />
        <Text />
      </section>
    </>
  );
}

export { Card };
