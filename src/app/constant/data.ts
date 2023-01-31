import { StaticImageData } from "next/image";
import MenPng from "../media/img/men.png";
import WomenPng from "../media/img/women.png";
import JacketsPng from "../media/img/jackets.png";
import SneakersPng from "../media/img/sneakers.png";
import HatPng from "../media/img/hat.png";

export const enum CategoryEnum {
  MEN = "mens",
  WOMEN = "womens",
  JACKETS = "jackets",
  SNEAKERS = "sneakers",
  HATS = "hats",
}

export const categoryPhotos: { [key in CategoryEnum]: StaticImageData } = {
  mens: MenPng,
  womens: WomenPng,
  jackets: JacketsPng,
  sneakers: SneakersPng,
  hats: HatPng,
};
