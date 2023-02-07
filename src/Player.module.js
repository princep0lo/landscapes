import React, { Component, useState } from "react";
import player from "./css/player.module.css";

const PlayerModule = (props) => {

  return (
    <>
      <div className={[player.player, props.viewMode].join(" ")} onMouseEnter={() => props.setShowButtons("")} onMouseLeave={() => props.setShowButtons(player.hideButton)}>
        <img className={[player.rewindButton, props.showButtons].join(" ")} onClick={() => props.setSelectedImage(1)} onMouseOver={() => props.setTooltip("Rewind to first image")} onMouseLeave={() => props.setTooltip("")} src={process.env.PUBLIC_URL + "/assets/icons/rewind.png"} alt="" />
        <div className={[player.arrowButton, props.showButtons].join(" ")} onClick={() => props.selectedImage > 1 && props.setSelectedImage((state) => state - 1)} onMouseOver={() => props.setTooltip("Show previous image (left arrow or a)")} onMouseLeave={() => props.setTooltip("")}>
          <img className={player.icon} src={process.env.PUBLIC_URL + "/assets/icons/previous.png"} alt="" />
        </div>

        <img className={player.mainImage} src={process.env.PUBLIC_URL + "/assets/images/" + props.title + "/" + props.shortTitle + " (" + props.selectedImage + ").jpg"} alt="" onClick={() => props.toggleZoomImage(true)} />

        <div className={[player.arrowButton, props.showButtons].join(" ")} onClick={() => props.selectedImage < props.imageLength && props.setSelectedImage((state) => state + 1)} onMouseOver={() => props.setTooltip("Show next image (right arrow or d)")} onMouseLeave={() => props.setTooltip("")}>
          <img className={[player.icon].join(" ")} src={process.env.PUBLIC_URL + "/assets/icons/next.png"} alt="" />
        </div>
        <img className={[player.rewindButton, props.showButtons, player.rotateHorizontal].join(" ")} onClick={() => props.setSelectedImage(props.imageLength)} onMouseOver={() => props.setTooltip("Rewind to last image")} onMouseLeave={() => props.setTooltip("")} src={process.env.PUBLIC_URL + "/assets/icons/rewind.png"} alt="" />
      </div>
      {props.zoomImage && <img className={player.zoomImage} src={process.env.PUBLIC_URL + "/assets/images/" + props.title + "/" + props.shortTitle + " (" + props.selectedImage + ").jpg"} alt="" onClick={() => props.toggleZoomImage(false)} />}
    </>
  );
};

export default PlayerModule;
