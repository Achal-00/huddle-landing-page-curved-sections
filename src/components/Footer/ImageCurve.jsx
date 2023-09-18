export default function ImageCurve() {
  return (
    <div className="absolute bottom-full w-full">
      <img
        src="bg-footer-top-mobile.svg"
        alt=""
        className="landscape:hidden w-full"
      />
      <img
        src="bg-footer-top-desktop.svg"
        alt=""
        className="hidden landscape:block w-full"
      />
    </div>
  );
}
