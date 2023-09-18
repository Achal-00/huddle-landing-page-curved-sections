export default function Content() {
  return (
    <div className="text-center p-[5%] grid gap-[1em] landscape:col-start-2 landscape:col-end-3 landscape:row-start-1 landscape:row-end-2 landscape:text-left landscape:content-center landscape:p-[0%] landscape:pr-[20%]">
      <h1 className="font-headings text-[150%] text-very-dark-cyan landscape:text-[200%]">
        Flowing Conversations
      </h1>
      <p className="font-others font-semibold text-very-dark-cyan">
        You wouldn't paginate a conversation in real life, so why do it online?
        Our threads have just-in-time loading for a more natural flow.
      </p>
    </div>
  );
}
