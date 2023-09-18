export default function Content() {
  return (
    <div className="text-center p-[5%] grid gap-[1em] landscape:col-start-1 landscape:col-end-2 landscape:row-start-1 landscape:row-end-2 landscape:text-left landscape:content-center landscape:p-[0%] landscape:pl-[20%]">
      <h1 className="font-headings text-[150%] text-very-dark-cyan landscape:text-[200%]">
        Your Users
      </h1>
      <p className="font-others font-semibold text-very-dark-cyan">
        It takes no time at all to integrate Huddle with your app's
        authentication solution. This means, once signed in to your app, your
        users can start chatting immediately.
      </p>
    </div>
  );
}
