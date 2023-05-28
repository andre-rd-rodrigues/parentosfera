"use client";
import React from "react";
import styles from "./title.module.scss";
import Typewriter from "typewriter-effect";

type Props = {
  words: string[];
};

const Title = ({ words }: Props) => {
  return (
    <Typewriter
      options={{
        strings: words,
        autoStart: true,
        loop: true,
        wrapperClassName: styles.typewriter
      }}
    />
  );
};

export default Title;
