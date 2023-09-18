export default function SectionOne() {
  return (
    <section className="grid gap-[2em] text-center px-[5%] mt-[20%] landscape:mt-[10%]">
      <h1 className="font-headings text-[220%] text-very-dark-cyan landscape:lg:text-[300%]">
        Build the community your fans will love
      </h1>
      <p className="font-others font-semibold text-very-dark-cyan landscape:w-[45%] landscape:mx-auto">
        Huddle re-imagines the way we build communities. You have a voice, but
        so does your audience. Create connections with your users as you engage
        in genuine discussion.
      </p>
      <button className="bg-pink rounded-full w-[15em] landscape:w-[20em] p-[1em] text-very-pale-blue font-others font-semibold mx-auto shadow-lg hover:bg-light-pink">
        Get Started For Free
      </button>
    </section>
  );
}
