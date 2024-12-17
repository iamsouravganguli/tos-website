'use client'
import Image from "next/image";
import React from "react";
import { useForm, Controller } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import Link from "next/link";

export const Services = () => {
  const img1 = "/assets/wegive/img1.png";
  const gif1 = "/assets/wegive/laptop.webp";
  const heart = "/assets/wegive/heart.png"; // Assuming this is a GIF image.
  const cloud = "/assets/wegive/cloud.png";
  const ai = "/assets/wegive/ai.png";

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

  const [activeButton, setActiveButton] = React.useState("Web Design");

  const handleCall = () => {
    const userChoice = confirm(
      "Choose a number to call:\n\n1. +91-9304251279\n2. +91-8062178484"
    );
    if (userChoice) {
      const selectedNumber = prompt(
        "Enter 1 for +91-9304251279 or 2 for +91-8062178484:"
      );
      if (selectedNumber === "1") {
        window.location.href = "tel:+919304251279";
      } else if (selectedNumber === "2") {
        window.location.href = "tel:+919382826158";
      } else {
        alert("Invalid selection!");
      }
    }
  };

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
    <section className="mt-32 flex flex-col items-center ">
      <h1 className="text-3xl font-semibold mb-8">Our Services</h1>
      
      <div className="flex flex-col md:flex-row items-center gap-8 px-8 md:px-32 mt-20">
        <Image
          src={img1}
          alt="Mobile Application Service"
          width={200}
          height={200}
          className="w-[20rem]"
        />
        <div>
          <h2 className="text-2xl font-semibold">Bringing Mobile Applications to Life:</h2>
          <p className="text-lg text-gray-600 mt-4">
            We leverage industry best practices to produce budget-optimized and brand-driven mobile applications that drive exceptional user experiences.
          </p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center gap-8 px-8 md:px-32 mt-20">
        <div>
          <h2 className="text-2xl font-semibold">Elevating Your Business with Web Applications:</h2>
          <p className="text-lg text-gray-600 mt-4">
            Through agile execution, best coding practices, and state-of-the-art collaboration tools, we deliver responsive and reliable web applications and eCommerce websites built on cutting-edge technologies to drive your business forward.
          </p>
        </div>
        <div>
          <img
            src={gif1}
            alt="Laptop Animation"
            width={200}
            height={200}
            className="rounded-lg w-[50rem]"
          />
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center gap-8 px-8 md:px-32 mt-20">
        <div>
          <img
            src={heart}
            alt="Heart Animation"
            width={200}
            height={200}
            className="rounded-lg w-[50rem]"
          />
        </div>
        <div>
          <h2 className="text-2xl font-semibold">Make Your Brand Unforgettable – Branding & Print Design:</h2>
          <p className="text-lg text-gray-600 mt-4">
            We create compelling graphic designs, unique content, and visually appealing visuals to showcase every pixel of your business, bringing your brand to life with innovative, idea-driven design.
          </p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center gap-8 px-8 md:px-32 mt-20">
        <div>
          <h2 className="text-2xl font-semibold">Simple, Secure, and Scalable Cloud Platform- Hosting & Cloud:</h2>
          <p className="text-lg text-gray-600 mt-4">
            We offer a range of AWS-managed support services and cloud computing solutions, providing a secure, scalable, and reliable way to host your data in the cloud while significantly reducing hardware costs.
          </p>
        </div>
        <div>
          <img
            src={cloud}
            alt="Cloud Animation"
            width={200}
            height={200}
            className="rounded-lg w-[50rem]"
          />
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center gap-8 px-8 md:px-32 mt-20">
        <div>
          <img
            src={ai}
            alt="AI Animation"
            width={200}
            height={200}
            className="rounded-lg w-[60rem]"
          />
        </div>
        <div>
          <h2 className="text-2xl font-semibold">AI & ML Solutions for Brand Innovation</h2>
          <p className="text-lg text-gray-600 mt-4">
            Harnessing the power of artificial intelligence and machine learning, we craft dynamic graphic designs, unique content, and engaging visuals that evolve with your audience. Our AI-driven approach ensures your brand stands out, offering personalized, data-driven design solutions that resonate with your target market.
          </p>
        </div>
      </div>

      <div className="bg-slate-100 p-6 pb-8 w-full mt-20 flex flex-col justify-center items-center">
        <p className="text-2xl font-semibold text-gray-800 pt-20">Contact Us</p>
        <form className="mt-8 " onSubmit={handleSubmit(onSubmit)}>
          <div className="space-y-4 max-lg:mt-4 flex flex-col lg:flex-row my-5 lg:justify-start lg:space-x-4 lg:space-y-0 items-center">
            {["Web Design", "Graphic Design", "AI Bots"].map((interest, index) => (
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
                    } text-sm tracking-wider font-medium outline-none border-2 transform transition-transform duration-200 hover:scale-105`}
                    onClick={() => handleInterestClick(interest)}
                  >
                    {interest}
                  </button>
                )}
              />
            ))}
            {errors.name && (
              <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>
            )}
          </div>

          {/* Name Input */}
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
                    placeholder=" "
                  />
                  <label
                    htmlFor="name"
                    className="absolute text-sm text-gray-500 duration-300 bg-slate-100 transform -translate-y-4 scale-75 -top-3 z-10 origin-[0] px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4"
                  >
                    Name
                  </label>
                </>
              )}
            />
            {errors.name && (
              <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>
            )}
          </div>

          {/* Email Input */}
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
                    placeholder=" "
                  />
                  <label
                    htmlFor="email"
                    className="absolute text-sm text-gray-500 duration-300 bg-slate-100 transform -translate-y-4 scale-75 -top-3 z-10 origin-[0] px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4"
                  >
                    Email
                  </label>
                </>
              )}
            />
            {errors.email && (
              <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>
            )}
          </div>

          {/* Subject Input */}
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
                    placeholder=" "
                  />
                  <label
                    htmlFor="subject"
                    className="absolute text-sm text-gray-500 duration-300 bg-slate-100 transform -translate-y-4 scale-75 -top-3 z-10 origin-[0] px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4"
                  >
                    Subject
                  </label>
                </>
              )}
            />
            {errors.subject && (
              <p className="text-red-500 text-xs mt-1">{errors.subject.message}</p>
            )}
          </div>

          {/* Message Input */}
          <div className="relative mb-4">
            <Controller
              name="message"
              control={control}
              render={({ field }) => (
                <>
                  <textarea
                    {...field}
                    id="message"
                    rows={4}
                    className="block px-2.5 pb-2.5 pt-4 w-full text-sm bg-slate-100 text-gray-900 bg-transparent rounded-lg border border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                  />
                  <label
                    htmlFor="message"
                    className="absolute text-sm text-gray-500 duration-300 bg-slate-100 transform -translate-y-4 scale-75 -top-3 z-10 origin-[0] px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4"
                  >
                    Message
                  </label>
                </>
              )}
            />
            {errors.message && (
              <p className="text-red-500 text-xs mt-1">{errors.message.message}</p>
            )}
          </div>

          <div className="mt-6">
            <button
              type="submit"
              className="w-full py-2 bg-blue-500 text-white rounded-lg"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};
