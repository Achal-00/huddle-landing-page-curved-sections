export default function Navbar() {
  return (
    <div className="flex items-center justify-between p-[5%] landscape:py-[4%]">
      <img src="logo.svg" alt="" className="w-[10em]" />
      <button className="border-[thin] border-pink text-pink rounded-full py-[0.2em] px-[1em] font-others font-semibold hover:text-light-pink hover:border-light-pink">
        Try it Free
      </button>
    </div>
  );
}
