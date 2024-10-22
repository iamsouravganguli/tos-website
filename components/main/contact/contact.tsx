"use client";

import React from "react";
import Link from "next/link";
import { useForm, Controller } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";

// Validation schema
const schema = yup.object().shape({
  name: yup.string().required("Name is required"),
  email: yup
    .string()
    .email("Invalid email format")
    .required("Email is required"),
  subject: yup.string().required("Subject is required"),
  message: yup.string().required("Message is required"),
  interest: yup.string().required("Interest is required"),
});

// API function to send data
const sendContactForm = async (data: any) => {
  return await axios.post("/api/contact", data); // replace with your actual API endpoint
};

export function ContactForm() {
  const [activeButton, setActiveButton] = React.useState("Web Design");

  // useForm with yupResolver
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  // Mutation using TanStack Query
  const mutation = useMutation({
    mutationKey: ["contactForm"],
    mutationFn: sendContactForm,
    onSuccess: () => {
      alert("Message sent successfully");
    },
    onError: () => {
      alert("An error occurred. Please try again later");
    },
  });

  // Handle form submission
  const onSubmit = (data: any) => {
    mutation.mutate(data);
  };

  const handleInterestClick = (value: string) => {
    setActiveButton(value);
  };
  return (
    <section className="w-full bg-sky-50 py-20 " id="contact-us">
      <div className=" max-w-6xl max-lg:max-w-3xl mx-auto bg-white shadow-md rounded-lg">
        <div className="grid lg:grid-cols-2 items-center gap-14 sm:p-8 p-4 pb-8 font-[sans-serif] ">
          <div>
            <h1 className="text-4xl font-bold text-dark">Get in Touch</h1>
            <p className="text-sm  mt-4 leading-relaxed text-gray-600">
              Have some big idea or brand to develop and need help? Then reach
              out we&apos;d love to hear about your project and provide help.
            </p>

            <ul className="mt-12 flex space-x-6">
              {/*Mail */}
              <div className="group relative flex justify-start items-center text-zinc-600 text-sm font-bold">
                <div className="absolute opacity-0 group-hover:opacity-100 group-hover:-translate-y-[150%] -translate-y-[300%] duration-500 group-hover:delay-500 skew-y-[20deg] group-hover:skew-y-0 shadow-md">
                  <div className="bg-white flex items-center gap-1 p-2 rounded-md">
                    <img
                      src="/assets/mail.png"
                      alt="Location"
                      className="w-5 h-5"
                    />
                    <span>Mail</span>
                  </div>
                  <div className="shadow-md bg-white absolute bottom-0 translate-y-1/2 left-1/2 translate-x-full rotate-45 p-1"></div>
                  <div className="rounded-md bg-white group-hover:opacity-0 group-hover:scale-[115%] group-hover:delay-700 duration-500 w-full h-full absolute top-0 left-0">
                    <div className="border-b border-r border-white bg-white absolute bottom-0 translate-y-1/2 left-1/2 translate-x-full rotate-45 p-1"></div>
                  </div>
                </div>

                <div className="shadow-md flex items-center group-hover:gap-2 bg-white p-3 rounded-full cursor-pointer duration-300">
                  <img
                    src="/assets/mail.png"
                    alt="Location"
                    className="w-5 h-5 fill-zinc-600"
                  />
                  <span className="text-[0px] group-hover:text-sm duration-300">
                  info@tos.systems
                  </span>
                </div>
              </div>
              {/*Mobile No */}
              <div className="group relative flex justify-start items-center text-zinc-600 text-sm font-bold">
                <div className="absolute opacity-0 group-hover:opacity-100 group-hover:-translate-y-[150%] -translate-y-[300%] duration-500 group-hover:delay-500 skew-y-[20deg] group-hover:skew-y-0 shadow-md">
                  <div className="bg-white flex items-center gap-1 p-2 rounded-md">
                    <img
                      src="/assets/phone.png"
                      alt="Location"
                      className="w-5 h-5"
                    />
                    <span>Mobile No</span>
                  </div>
                  <div className="shadow-md bg-white absolute bottom-0 translate-y-1/2 left-1/2 translate-x-full rotate-45 p-1"></div>
                  <div className="rounded-md bg-white group-hover:opacity-0 group-hover:scale-[115%] group-hover:delay-700 duration-500 w-full h-full absolute top-0 left-0">
                    <div className="border-b border-r border-white bg-white absolute bottom-0 translate-y-1/2 left-1/2 translate-x-full rotate-45 p-1"></div>
                  </div>
                </div>

                <div className="shadow-md flex items-center group-hover:gap-2 bg-white p-3 rounded-full cursor-pointer duration-300">
                  <img
                    src="/assets/phone.png"
                    alt="Location"
                    className="w-5 h-5 fill-zinc-600"
                  />
                  <span className="text-[0px] group-hover:text-sm duration-300">
                  +91-8062178484
                  </span>
                </div>
              </div>
              {/*Location */}
              <div className="group relative flex justify-start items-center text-zinc-600 text-sm font-bold">
                <div className="absolute opacity-0 group-hover:opacity-100 group-hover:-translate-y-[150%] -translate-y-[300%] duration-500 group-hover:delay-500 skew-y-[20deg] group-hover:skew-y-0 shadow-md">
                  <div className="bg-white flex items-center gap-1 p-2 rounded-md">
                    <img
                      src="/assets/location.png"
                      alt="Location"
                      className="w-5 h-5"
                    />
                    <span>Location</span>
                  </div>
                  <div className="shadow-md bg-white absolute bottom-0 translate-y-1/2 left-1/2 translate-x-full rotate-45 p-1"></div>
                  <div className="rounded-md bg-white group-hover:opacity-0 group-hover:scale-[115%] group-hover:delay-700 duration-500 w-full h-full absolute top-0 left-0">
                    <div className="border-b border-r border-white bg-white absolute bottom-0 translate-y-1/2 left-1/2 translate-x-full rotate-45 p-1"></div>
                  </div>
                </div>

                <div className="shadow-md flex items-center group-hover:gap-2 bg-white p-3 rounded-full cursor-pointer duration-300">
                  <img
                    src="/assets/location.png"
                    alt="Location"
                    className="w-5 h-5 fill-zinc-600"
                  />
                  <span className="text-[0px] group-hover:text-sm duration-300">
                    Dehradun
                  </span>
                </div>
              </div>
            </ul>

            {/*socials*/}

            <ul className="flex justify-start items-center list-none w-full py-10">
              <li className="relative bg-white rounded-full mr-2 w-12 h-12 text-lg flex justify-center items-center shadow-lg cursor-pointer transition-transform duration-200 ease-[cubic-bezier(0.68,-0.55,0.265,1.55)] hover:scale-110 group">
                <span className="absolute bottom-14 bg-white text-indigo-500 text-sm px-2 py-1 rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-[cubic-bezier(0.68,-0.55,0.265,1.55)] translate-y-0 group-hover:translate-y-0">
                  Facebook
                </span>
                <Link
                  href="https://www.facebook.com/media.tos.systems"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="/assets/facebook.svg"
                    alt="Facebook"
                    className="w-6 h-6"
                  />
                </Link>
              </li>
              <li className="relative bg-white rounded-full mx-2 w-12 h-12 text-lg flex justify-center items-center shadow-lg cursor-pointer transition-transform duration-200 ease-[cubic-bezier(0.68,-0.55,0.265,1.55)] hover:scale-110 group">
                <span className="absolute bottom-14 bg-white text-indigo-500 text-sm px-2 py-1 rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-[cubic-bezier(0.68,-0.55,0.265,1.55)] translate-y-0 group-hover:translate-y-0">
                  LinkedIn
                </span>
                <Link
                  href="https://www.linkedin.com/company/media-tos-system"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="/assets/linkedin.svg"
                    alt="LinkedIn"
                    className="w-6 h-6"
                  />
                </Link>
              </li>
              <li className="relative bg-white rounded-full mx-2 w-12 h-12 text-lg flex justify-center items-center shadow-lg cursor-pointer transition-transform duration-200 ease-[cubic-bezier(0.68,-0.55,0.265,1.55)] hover:scale-110 group">
                <span className="absolute bottom-14 bg-white text-indigo-500 text-sm px-2 py-1 rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-[cubic-bezier(0.68,-0.55,0.265,1.55)] translate-y-0 group-hover:translate-y-0">
                  Instagram
                </span>
                <Link
                  href="https://www.instagram.com/media.tos.systems"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="/assets/instagram.svg"
                    alt="Instagram"
                    className="w-6 h-6"
                  />
                </Link>
              </li>
            </ul>
          </div>

          <div className="bg-slate-100 p-6 pb-8  rounded-lg shadow-md">
            <p className="text-sm font-semibold text-gray-800">
              I&apos;m interested in...
            </p>
            <form className="mt-8 space-y-4">
              <div className="space-y-4 max-lg:mt-4">
                {["Web Design", "Graphic Design", "AI Bots"].map(
                  (interest, index) => (
                    <Controller
                      key={index}
                      name="interest"
                      control={control}
                      render={({ field }) => (
                        <button
                          {...field}
                          type="button"
                          className={`px-4 py-2 rounded-lg ${
                            activeButton === interest
                              ? "text-white bg-medium-light"
                              : "text-gray-600 bg-transparent border-gray-300"
                          } text-sm tracking-wider font-medium outline-none border-2 mr-4`}
                          onClick={() => handleInterestClick(interest)}
                        >
                          {interest}
                        </button>
                      )}
                    />
                  )
                )}
                {errors.name && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.name.message}
                  </p>
                )}
              </div>

              <div className="relative mb-4">
                <Controller
                  name="name"
                  control={control}
                  render={({ field }) => (
                    <>
                      <input
                        {...field}
                        type="text"
                        id="name"
                        className="block px-2.5 pb-2.5 pt-4 w-full text-sm bg-slate-100 text-gray-900 bg-transparent rounded-lg border border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        placeholder=" " // Space to enable floating effect
                      />
                      <label
                        htmlFor="name"
                        className="absolute text-sm text-gray-500  duration-300 bg-slate-100 transform -translate-y-4 scale-75 -top-3 z-10 origin-[0]  px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                        style={{ lineHeight: "1.5rem", padding: "0 0.25rem" }} // Adjust line height and padding
                      >
                        Name
                      </label>
                      {errors.name && (
                        <p className="text-red-500">{errors.name.message}</p>
                      )}
                    </>
                  )}
                />
              </div>

              <div className="relative mb-4">
                <Controller
                  name="email"
                  control={control}
                  render={({ field }) => (
                    <>
                      <input
                        {...field}
                        type="email"
                        id="email"
                        className="block px-2.5 pb-2.5 pt-4 w-full text-sm bg-slate-100 text-gray-900 bg-transparent rounded-lg border border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        placeholder=" " // Space to enable floating effect
                      />
                      <label
                        htmlFor="email"
                        className="absolute text-sm text-gray-500  duration-300 bg-slate-100 transform -translate-y-4 scale-75 -top-3 z-10 origin-[0]  px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                        style={{ lineHeight: "1.5rem", padding: "0 0.25rem" }} // Adjust line height and padding
                      >
                        Email
                      </label>
                      {errors.email && (
                        <p className="text-red-500">{errors.email.message}</p>
                      )}
                    </>
                  )}
                />
              </div>

              <div className="relative mb-4">
                <Controller
                  name="subject"
                  control={control}
                  render={({ field }) => (
                    <>
                      <input
                        {...field}
                        type="text"
                        id="subject"
                        className="block px-2.5 pb-2.5 pt-4 w-full text-sm bg-slate-100 text-gray-900 bg-transparent rounded-lg border border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        placeholder=" " // Space to enable floating effect
                      />
                      <label
                        htmlFor="subject"
                        className="absolute text-sm text-gray-500  duration-300 bg-slate-100 transform -translate-y-4 scale-75 -top-3 z-10 origin-[0]  px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                        style={{ lineHeight: "1.5rem", padding: "0 0.25rem" }} // Adjust line height and padding
                      >
                        Subject
                      </label>
                      {errors.subject && (
                        <p className="text-red-500">{errors.subject.message}</p>
                      )}
                    </>
                  )}
                />
              </div>

              <div className="relative mb-4">
                <Controller
                  name="message"
                  control={control}
                  render={({ field }) => (
                    <>
                      <textarea
                        {...field}
                        id="message"
                        className="block px-2.5 pb-20 pt-4 w-full text-sm bg-slate-100 text-gray-900 bg-transparent rounded-lg border border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        placeholder=" " // Space to enable floating effect
                      />
                      <label
                        htmlFor="message"
                        className="absolute text-sm text-gray-500  duration-300 bg-slate-100 transform -translate-y-4 scale-75 -top-3 z-10 origin-[0]  px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-6 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                        style={{ lineHeight: "1.5rem", padding: "0 0.25rem" }} // Adjust line height and padding
                      >
                        Message
                      </label>
                      {errors.message && (
                        <p className="text-red-500">{errors.message.message}</p>
                      )}
                    </>
                  )}
                />
              </div>

              <button
                type="button"
                className="button w-full h-10 bg-blue-500 rounded-lg cursor-pointer select-none
    active:translate-y-2  active:[box-shadow:0_0px_0_0_#1b6ff8,0_0px_0_0_#1b70f841]
    active:border-b-[0px]
    transition-all duration-150 [box-shadow:0_10px_0_0_#1b6ff8,0_15px_0_0_#1b70f841]
    border-b-[1px] border-blue-500"
              >
                <div className="flex items-center justify-center text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16px"
                    height="16px"
                    fill="#fff"
                    className="mr-2"
                    viewBox="0 0 548.244 548.244"
                  >
                    <path
                      fillRule="evenodd"
                      d="M392.19 156.054 211.268 281.667 22.032 218.58C8.823 214.168-.076 201.775 0 187.852c.077-13.923 9.078-26.24 22.338-30.498L506.15 1.549c11.5-3.697 24.123-.663 32.666 7.88 8.542 8.543 11.577 21.165 7.879 32.666L390.89 525.906c-4.258 13.26-16.575 22.261-30.498 22.338-13.923.076-26.316-8.823-30.728-22.032l-63.393-190.153z"
                      clipRule="evenodd"
                      data-original="#000000"
                    />
                  </svg>
                  Send Message
                </div>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
