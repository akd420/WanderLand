import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

const Slider = () => {
  const img1 = "/slider1.jpg";
  const img2 = "/slider2.jpg";
  const img3 = "/slider3.jpg";
  const [sliderRef] = useKeenSlider(
    {
      loop: true,
    },
    [
      (slider) => {
        let timeout;
        let mouseOver = false;
        function clearNextTimeout() {
          clearTimeout(timeout);
        }
        function nextTimeout() {
          clearTimeout(timeout);
          if (mouseOver) return;
          timeout = setTimeout(() => {
            slider.next();
          }, 2000);
        }
        slider.on("created", () => {
          slider.container.addEventListener("mouseover", () => {
            mouseOver = true;
            clearNextTimeout();
          });
          slider.container.addEventListener("mouseout", () => {
            mouseOver = false;
            nextTimeout();
          });
          nextTimeout();
        });
        slider.on("dragStarted", clearNextTimeout);
        slider.on("animationEnded", nextTimeout);
        slider.on("updated", nextTimeout);
      },
    ]
  );

  return (
    <>
      <div ref={sliderRef} className="keen-slider max-w-screen-xl mx-auto h-auto object-cover absolute opacity-75 my-12">
        <div className="keen-slider__slide number-slide1 mx-auto"><img className="h-[300px] md:h-[500px] lg:h-[800px]" src={img1} alt="" /></div>
        <div className="keen-slider__slide number-slide1 mx-auto"><img className="h-[300px] md:h-[500px] lg:h-[800px]" src={img2} alt="" /></div>
        <div className="keen-slider__slide number-slide1 mx-auto"><img className="h-[300px] md:h-[500px] lg:h-[800px]" src={img3} alt="" /></div>
      </div>
    </>
  );
};

export default Slider;
