import BottomCurve from "./BottomCurve";
import Content from "./Content";
import MainImage from "./MainImage";
import TopCurve from "./TopCurve";

export default function SectionSix() {
  return (
    <div className="mt-[30%] landscape:mt-[20%] landscape:py-[3%] bg-very-pale-blue grid gap-[3em] relative landscape:grid-cols-2">
      <TopCurve />
      <MainImage />
      <Content />
      <BottomCurve />
    </div>
  );
}
