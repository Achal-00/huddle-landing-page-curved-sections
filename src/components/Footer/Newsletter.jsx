import { useState } from "react";

export default function Newsletter() {
  const [mail, setMail] = useState("");

  function submitHandler() {
    var validRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (mail.match(validRegex)) {
      document.querySelector(".newsletter-input").style.border =
        "medium solid green";
      document.querySelector(".error-holder").classList.add("hidden");
    } else {
      document.querySelector(".newsletter-input").style.border =
        "medium solid transparent";
      document.querySelector(".error-holder").classList.remove("hidden");
    }
  }

  return (
    <div className="grid gap-[2em] px-[5%] landscape:col-start-2 landscape:col-end-3 landscape:px-0 landscape:pr-[20%]">
      <h1 className="text-very-pale-blue font-others font-semibold text-[150%]">
        NEWSLETTER
      </h1>
      <p className="text-very-pale-blue font-others landscape:pr-[20%]">
        To recieve tips on how to grow your community, sign up to our weekly
        newsletter. We'll never send you spam or pass on your email address
      </p>
      <div className="grid gap-[1em] landscape:grid-cols-[0.6fr_0.4fr]">
        <div>
          <input
            type="text"
            className="h-[3em] rounded-[0.3em] outline-none pl-[1em] w-full newsletter-input"
            placeholder="example@mail.com"
            onChange={(e) => setMail(e.currentTarget.value)}
          />
          <p className="text-light-red text-[90%] hidden error-holder">
            check your email please
          </p>
        </div>
        <button
          className="h-[3em] bg-pink w-[50%] justify-self-end rounded-[0.3em] text-very-pale-blue font-others font-semibold landscape:w-full hover:bg-light-pink"
          onClick={submitHandler}
        >
          Subscribe
        </button>
      </div>
    </div>
  );
}
