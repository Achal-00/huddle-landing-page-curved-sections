import Contact from "./Contact";
import ImageCurve from "./ImageCurve";
import Newsletter from "./Newsletter";
import Socials from "./Socials";

export default function Footer() {
  return (
    <section className="mt-[50%] landscape:mt-[20%] bg-very-dark-cyan grid gap-[5em] py-[10%] relative landscape:grid-cols-2 text-[90%]">
      <Newsletter />
      <Contact />
      <Socials />
      <ImageCurve />
    </section>
  );
}
