import { useState } from "react";
import { PhotoSlider } from "react-photo-view";
import "react-photo-view/dist/index.css"; // Import the CSS for react-photo-view

const Slider = () => {
  const [visible, setVisible] = useState(false);
  const [index, setIndex] = useState(0);
  const images = ["/slider/1.jpg", "/slider/2.jpg", "/slider/3.jpg"]; // Use an array for images

  const openSlider = (selectedIndex) => {
    setIndex(selectedIndex);
    setVisible(true);
  };

  return (
    <>
      <button onClick={() => openSlider(2)}>Open Slider with index 2</button>
      <button onClick={() => openSlider(1)}>Open Slider with index 1</button>
      <button onClick={() => setVisible(true)}>Open Slider</button>

      <PhotoSlider
        images={images.map((item, idx) => ({ src: item, key: idx.toString() }))}
        visible={visible}
        onClose={() => setVisible(false)}
        index={index}
        onIndexChange={setIndex}
      />
    </>
  );
};

export default Slider;
