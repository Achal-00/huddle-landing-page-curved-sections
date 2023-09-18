export default function BottomCurve() {
  return (
    <div className="absolute top-full w-full">
      <img
        src="bg-section-bottom-mobile-1.svg"
        alt=""
        className="w-full landscape:hidden"
      />
      <img
        src="bg-section-bottom-desktop-1.svg"
        alt=""
        className="w-full hidden landscape:block"
      />
    </div>
  );
}
