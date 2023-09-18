export default function TopCurve() {
  return (
    <div className="absolute bottom-full w-full">
      <img
        src="bg-section-top-mobile-1.svg"
        alt=""
        className="w-full landscape:hidden"
      />
      <img
        src="bg-section-top-desktop-1.svg"
        alt=""
        className="w-full hidden landscape:block"
      />
    </div>
  );
}
