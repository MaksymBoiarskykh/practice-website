import { useSelector } from "react-redux";
import { Slider } from "../components/UI/Slider/Slider";
import sliderData from "../components/UI/Slider/data";

export const About = () => {
  const theme = useSelector((state) => state.theme.value);
  return (
    <main className={`App ${theme}`}>
      <Slider data={sliderData} />
    </main>
  );
};
