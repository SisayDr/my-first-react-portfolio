function Contact() {
  return (
    <div id="contact" className="max-w-4xl m-auto p-3">
      <h1 className="text-center italic text-3xl p-5 md:p-16 md:text-5xl text-indigo-500 font-bold font-mono underline">
        &emsp;Contact&emsp;
      </h1>
      <form action="" className=" space-y-16 max-w-xl mx-auto my-10">
        <div className="flex flex-col md:flex-row gap-2 w-full">
          <div className="relative md:w-2/5 flex-grow">
            <input
              className="border border-indigo-500 w-full p-3 text-gray-700  dark:text-white"
              type="text"
              placeholder="enter your name"
            />
            <label className="absolute left-0 p-2 -top-10 text-gray-700  dark:text-white font-semibold">
              Your Name{" "}
            </label>
          </div>
          <div className="relative md:w-1/2 flex-grow mt-10 md:mt-0">
            <input
              className="border border-indigo-500 w-full p-3 text-gray-700  dark:text-white"
              type="email"
              placeholder="enter your email address"
            />
            <label className="absolute left-0 p-2 -top-10 text-gray-700  dark:text-white font-semibold">
              Email{" "}
            </label>
          </div>
        </div>
        <div className="relative">
          <textarea
            rows={5}
            className="border border-indigo-500 w-full p-2 text-gray-700  dark:text-white"
            type="email"
            placeholder="write message here"
          />
          <label className="absolute left-0 p-2 -top-10 text-gray-700  dark:text-white font-semibold">
            Your Message{" "}
          </label>
        </div>
        <p className="text-center">
          <button
            type="submit"
            className="bg-red-500 text-white py-3 px-7 text-xl italic rounded-md"
          >
            Send Email &rarr;
          </button>
        </p>
      </form>
    </div>
  );
}

export default Contact;
