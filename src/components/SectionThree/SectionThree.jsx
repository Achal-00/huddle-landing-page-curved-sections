export default function SectionThree() {
  return (
    <section className="mt-[20%] landscape:mt-[10%] grid gap-[3em] landscape:grid-cols-2 landscape:w-[80%] landscape:mx-auto">
      <div className="grid justify-self-center w-[10em]">
        <img src="icon-communities.svg" alt="" className="w-[2em]" />
        <h1 className="font-others font-bold text-very-dark-cyan text-[400%] text-center">
          1.4k+
        </h1>
        <p className="text-center text-gray-400">Communities Formed</p>
      </div>
      <div className="grid justify-self-center w-[10em]">
        <img src="icon-messages.svg" alt="" className="w-[2em]" />
        <h1 className="font-others font-bold text-very-dark-cyan text-[400%] text-center">
          2.7m+
        </h1>
        <p className="text-center text-gray-400">Messages Sent</p>
      </div>
    </section>
  );
}
