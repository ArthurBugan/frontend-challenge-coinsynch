"use client";

import { useEffect, useState } from "react";
import { StaticImageData } from "next/image";
import useEmblaCarousel, { EmblaOptionsType } from "embla-carousel-react";
import { WheelGesturesPlugin } from "embla-carousel-wheel-gestures";
import ClassNames from "embla-carousel-class-names";

type PropType = {
  images: StaticImageData[];
  options?: EmblaOptionsType;
};

type Axis = "x" | "y";

const classNamesOptions = { selected: "active" };
const wheelGestureOptions = {};

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { images, options } = props;
  const [active, setActive] = useState<number>(0);

  const [emblaRef, emblaApi] = useEmblaCarousel(options, [
    WheelGesturesPlugin(wheelGestureOptions),
    ClassNames(classNamesOptions),
  ]);

  const onSelect = (e: any) => {
    console.log(emblaApi?.selectedScrollSnap());
    setActive(emblaApi?.selectedScrollSnap() || 0);
  };

  useEffect(() => {
    emblaApi?.on("select", onSelect);
  }, [emblaApi]);

  return (
    <div className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {images.map((item, i) => (
            <div
              data-prev={i < active}
              className="embla__slide data-[prev='true']:invisible"
              key={item.src}
            >
              <img
                className="embla__slide__img"
                src={item.src}
                alt="Image Carrousel Home"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EmblaCarousel;
