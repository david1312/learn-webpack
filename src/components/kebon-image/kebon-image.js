import Kebon from "./kebon.jpg";
import "./kebon-image.scss";

class KebonImage {
  render() {
    const img = document.createElement("img");

    img.src = Kebon;
    img.alt = "kebon";
    img.classList.add("kiwi-image");
    const body = document.querySelector("body");

    body.appendChild(img);
  }
}

export default KebonImage;
