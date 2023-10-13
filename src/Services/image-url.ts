import React from "react";

const getCropperImageUrl = (url: string) => {
  const target = "media/";
  if (!url) {
    return "Image cannot be found";
  }
  const index = url.indexOf(target) + target.length;

  return url.slice(0, index) + "crop/600/400/" + url.slice(index);
};

export default getCropperImageUrl;
