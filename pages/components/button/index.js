import React, { useState } from "react";
import { pushFlat, labelText } from "../../../styles/Index.module.scss";

export default function Button({ id, title, url }) {
  const [playing, setPlaying] = useState(false);
  const [audio] = useState(typeof Audio !== "undefined" && new Audio(url));

  const play = () => {
    setPlaying(true);
    audio.play();
  };

  const pause = () => {
    setPlaying(false);
    audio.pause();
  };

  console.log(url);
  return (
    <><div className="col d-flex flex-wrap">
      <button
        key={id}
        className={pushFlat}
        onClick={playing ? pause : play}
      ></button><br />
      <p className={labelText}>{title}</p>
      </div>
    </>
  );
}
