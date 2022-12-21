import React, { useRef } from "react";
import emailjs from "emailjs-com";
import { toast } from "react-hot-toast";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm("service_xlehqul", "template_85cg10i", form.current, "kZ5JPVD1o7AD7zOP3").then(
      (result) => {
        //    console.log(result.text);
        toast.success("message send");
      },
      (error) => {
        //    console.log(error.text);
        toast.error("something wrong");
      }
    );
  };

  return (
    <section className="bg-white dark:bg-midnight">
      <div className="container px-6 py-12 mx-auto">
        <div className="lg:flex lg:items-center lg:-mx-6">
          <div className="lg:w-1/2 lg:mx-6">
            <h1 className="text-3xl font-semibold text-black capitalize dark:text-white lg:text-4xl">
              Contact us for <br /> more info
            </h1>

            <div className="mt-6 space-y-8 md:mt-8">
              <p className="flex items-start -mx-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 mx-2 text-gs dark:text-gs"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path stroke-linecap="round" stroke-linejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>

                <span className="mx-2 text-black truncate w-72 dark:text-white">Monfalcone Gorizia, Italy</span>
              </p>

              <p className="flex items-start -mx-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 mx-2 text-gs dark:text-gs"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>

                <span className="mx-2 text-black truncate w-72 dark:text-white">(+39) 3475780677</span>
              </p>

              <p className="flex items-start -mx-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 mx-2 text-gs dark:text-gs"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>

                <span className="mx-2 text-black truncate w-72 dark:text-white">ritamrahman@gmail.com</span>
              </p>
            </div>

            <div className="mt-6 w-80 md:mt-8">
              <h3 className="text-black dark:text-white ">Follow us</h3>

              <div className="flex mt-4 -mx-1.5 ">
                <a
                  className="mx-1.5 dark:hover:text-gs text-black dark:text-white transition-colors duration-300 transform hover:text-gs"
                  href="https://www.linkedin.com/in/ritamrahman/"
                  target="_blank"
                >
                  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M15.2 8.80005C16.4731 8.80005 17.694 9.30576 18.5941 10.2059C19.4943 11.1061 20 12.327 20 13.6V19.2H16.8V13.6C16.8 13.1757 16.6315 12.7687 16.3314 12.4687C16.0313 12.1686 15.6244 12 15.2 12C14.7757 12 14.3687 12.1686 14.0687 12.4687C13.7686 12.7687 13.6 13.1757 13.6 13.6V19.2H10.4V13.6C10.4 12.327 10.9057 11.1061 11.8059 10.2059C12.7061 9.30576 13.927 8.80005 15.2 8.80005Z"
                      fill="currentColor"
                    />
                    <path d="M7.2 9.6001H4V19.2001H7.2V9.6001Z" fill="currentColor" />
                    <path
                      d="M5.6 7.2C6.48366 7.2 7.2 6.48366 7.2 5.6C7.2 4.71634 6.48366 4 5.6 4C4.71634 4 4 4.71634 4 5.6C4 6.48366 4.71634 7.2 5.6 7.2Z"
                      fill="currentColor"
                    />
                  </svg>
                </a>

                <a
                  className="mx-1.5 dark:hover:text-gs text-black dark:text-white transition-colors duration-300 transform hover:text-gs"
                  href="https://www.facebook.com/ritam.rahman4/"
                  target="_blank"
                >
                  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M7 10.2222V13.7778H9.66667V20H13.2222V13.7778H15.8889L16.7778 10.2222H13.2222V8.44444C13.2222 8.2087 13.3159 7.9826 13.4826 7.81591C13.6493 7.64921 13.8754 7.55556 14.1111 7.55556H16.7778V4H14.1111C12.9324 4 11.8019 4.46825 10.9684 5.30175C10.1349 6.13524 9.66667 7.2657 9.66667 8.44444V10.2222H7Z"
                      fill="currentColor"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div className="mt-8 lg:w-1/2 lg:mx-6">
            <div className="w-full px-8 py-10 mx-auto overflow-hidden bg-white rounded-lg shadow-2xl dark:bg-midnight lg:max-w-xl shadow-gray-300/50 dark:shadow-black">
              <h1 className="text-lg font-medium text-black dark:text-white">What do you want to ask</h1>

              <form ref={form} onSubmit={sendEmail} className="mt-6">
                <div className="flex-1">
                  <label className="block mb-2 text-sm text-black dark:text-white">Full Name</label>
                  <input
                    type="text"
                    name="from_name"
                    placeholder="John Doe"
                    className="block w-full px-5 py-3 mt-2 text-black placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-midnight dark:text-white dark:border-gray-700 focus:border-gs dark:focus:border-gs focus:ring-gs focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                </div>

                <div className="flex-1 mt-6">
                  <label className="block mb-2 text-sm text-black dark:text-white">Email address</label>
                  <input
                    type="email"
                    name="from_mail"
                    placeholder="johndoe@example.com"
                    className="block w-full px-5 py-3 mt-2 text-black placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-midnight dark:text-white dark:border-gray-700 focus:border-gs dark:focus:border-gs focus:ring-gs focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                </div>

                <div className="w-full mt-6">
                  <label className="block mb-2 text-sm text-black dark:text-white">Message</label>
                  <textarea
                    className="block w-full h-32 px-5 py-3 mt-2 text-black placeholder-gray-400 bg-white border border-gray-200 rounded-md md:h-48 dark:placeholder-gray-600 dark:bg-midnight dark:text-white dark:border-gray-700 focus:border-gs dark:focus:border-gs focus:ring-gs focus:outline-none focus:ring focus:ring-opacity-40"
                    placeholder="Message"
                    name="message"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full px-6 py-3 mt-6 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-gradient-to-r from-gs to-ge rounded-md hover:bg-gs focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50"
                >
                  get in touch
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
