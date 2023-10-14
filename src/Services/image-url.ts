import noImages from "../assets/no-image-placeholder.webp";
const getCropperImageUrl = (url: string) => {
  const target = "media/";
  if (!url) {
    return noImages;
  }
  const index = url.indexOf(target) + target.length;

  return url.slice(0, index) + "crop/600/400/" + url.slice(index);
};

export default getCropperImageUrl;
