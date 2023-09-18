import Content from "./Content";
import MainImage from "./MainImage";

export default function SectionFive() {
  return (
    <div className="mt-[30%] landscape:mt-[20%] grid gap-[3em] landscape:grid-cols-2">
      <MainImage />
      <Content />
    </div>
  );
}
