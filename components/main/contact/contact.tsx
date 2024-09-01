import React from 'react';
import Link from 'next/link';

export function ContactForm() {
  return (
    <div className="flex flex-col justify-center bg-sky-50 w-full" id="contact-us">
      <div className="container mx-auto flex flex-col lg:flex-row gap-12 px-6 m-24 md:ml-24">
        {/* Left side: Text and Links */}
        <div className="lg:w-1/2 lg:text-left ">
          <h1 className="text-gray-800 md:text-6xl text-4xl font-extrabold mb-4">Let&apos;s Talk</h1>
          <p className="text-lg text-gray-600 mb-8">
            Have some big idea or brand to develop and need help? Then reach out; we&apos;d love to hear about your project and provide help.
          </p>

          <div className="mb-8">
            <h2 className="text-gray-800 text-2xl font-bold mb-2">Email</h2>
            <Link href="mailto:info@example.com" className="flex items-center text-[#007bff] text-lg">
              <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="#007bff" viewBox="0 0 479.058 479.058" className="mr-3">
                <path d="M434.146 59.882H44.912C20.146 59.882 0 80.028 0 104.794v269.47c0 24.766 20.146 44.912 44.912 44.912h389.234c24.766 0 44.912-20.146 44.912-44.912v-269.47c0-24.766-20.146-44.912-44.912-44.912zm0 29.941c2.034 0 3.969.422 5.738 1.159L239.529 264.631 39.173 90.982a14.902 14.902 0 0 1 5.738-1.159zm0 299.411H44.912c-8.26 0-14.971-6.71-14.971-14.971V122.615l199.778 173.141c2.822 2.441 6.316 3.655 9.81 3.655s6.988-1.213 9.81-3.655l199.778-173.141v251.649c-.001 8.26-6.711 14.97-14.971 14.97z" />
              </svg>
              <span>info@example.com</span>
            </Link>
          </div>

          <div>
            <h2 className="text-gray-800 text-2xl font-bold mb-2">Socials</h2>
            <div className="flex space-x-6">
              <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-[#007bff] text-xl">
                <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="#007bff" viewBox="0 0 24 24">
                  <path d="M6.812 13.937H9.33v9.312c0 .414.335.75.75.75l4.007.001a.75.75 0 0 0 .75-.75v-9.312h2.387a.75.75 0 0 0 .744-.657l.498-4a.75.75 0 0 0-.744-.843h-2.885c.113-2.471-.435-3.202 1.172-3.202 1.088-.13 2.804.421 2.804-.75V.909a.75.75 0 0 0-.648-.743A26.926 26.926 0 0 0 15.071 0c-7.01 0-5.567 7.772-5.74 8.437H6.812a.75.75 0 0 0-.75.75v4c0 .414.336.75.75.75zm.75-3.999h2.518a.75.75 0 0 0 .75-.75V6.037c0-2.883 1.545-4.536 4.24-4.536.878 0 1.686.043 2.242.087v2.149c-.402.205-3.976-.884-3.976 2.697v2.755c0 .414.336.75.75.75h2.786l-.312 2.5h-2.474a.75.75 0 0 0-.75.75V22.5h-2.505v-9.312a.75.75 0 0 0-.75-.75H7.562z" />
                </svg>
              </Link>
              <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-[#007bff] text-xl">
                <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="#007bff" viewBox="0 0 511 512">
                  <path d="M111.898 160.664H15.5c-8.285 0-15 6.719-15 15V497c0 8.285 6.715 15 15 15h96.398c8.286 0 15-6.715 15-15V175.664c0-8.281-6.714-15-15-15zM96.898 482H30.5V190.664h66.398zM63.703 0C28.852 0 .5 28.352.5 63.195c0 34.852 28.352 63.2 63.203 63.2 34.848 0 63.195-28.352 63.195-63.2C126.898 28.352 98.551 0 63.703 0zm0 96.395c-18.308 0-33.203-14.891-33.203-33.2C30.5 44.891 45.395 30 63.703 30c18.305 0 33.195 14.89 33.195 33.195 0 18.309-14.89 33.2-33.195 33.2zm289.207 62.148c-22.8 0-45.273 5.496-65.398 15.777-.684-7.652-7.11-13.656-14.942-13.656h-96.406c-8.281 0-15 6.719-15 15V497c0 8.285 6.719 15 15 15h96.406c8.285 0 15-6.715 15-15V320.266c0-22.735 18.5-41.23 41.235-41.23 22.734 0 41.226 18.495 41.226 41.23V497c0 8.285 6.719 15 15 15h96.403c8.285 0 15-6.715 15-15V302.066c0-79.14-64.383-143.523-143.524-143.523zM466.434 482h-66.399V320.266c0-39.278-31.953-71.23-71.226-71.23-39.282 0-71.239 31.952-71.239 71.23V482h-66.402V190.664h66.402v11.082c0 5.77 3.309 11.027 8.512 13.524a15.01 15.01 0 0 0 15.875-1.82c14.379-14.573 34.184-22.038 55.073-22.038 43.42 0 78.933 35.54 78.933 79.488v224.6zM375.56 232.132c-29.905 0-54.421 24.09-54.421 53.858V477c0 1.765-.164 3.492-.477 5.16h-66.424c.185-1.674.286-3.404.286-5.16V320.266c0-38.282-26.84-70.33-63.407-79.312V205.66h66.406v17.406c0 1.859 1.09 3.543 2.77 4.305 1.674.758 3.645.516 5.043-.641a129.38 129.38 0 0 1 81.546-29.676c62.928 0 114.184 47.454 122.879 108.773H477V312.79c-22.933-48.347-72.739-80.658-123.536-80.658zm-101.812-52.555c8.47-2.355 17.299-.51 23.807 4.881a15.002 15.002 0 0 0 21.973-3.417l29.426-39.128a15.001 15.001 0 0 0-3.417-21.973c-20.269-15.227-45.991-19.93-70.128-12.869-24.127 7.054-44.373 24.121-56.601 47.736-2.622 4.912-1.016 10.946 3.57 14.227zm98.6-84.667c.684-7.652-4.656-14.712-12.309-15.399-25.383-2.309-51.089.168-75.482 7.383-28.07 8.194-53.144 24.763-71.465 47.797-3.191 3.992-2.538 9.828 1.52 13.003 4.081 3.206 9.787 2.573 13.003-1.52 16.48-20.647 38.748-35.287 63.134-42.411 20.864-6.097 42.952-8.418 64.73-6.675 7.671.696 14.711-4.647 15.399-12.31zm-102.547 17.114c3.535-6.626 11.74-9.095 18.358-5.553 6.631 3.552 9.09 11.738 5.552 18.359-3.536 6.626-11.743 9.093-18.359 5.551-6.626-3.552-9.09-11.739-5.551-18.357zm7.482 19.005c6.53 3.506 9.035 11.545 5.529 18.068-3.506 6.53-11.538 9.032-18.068 5.529-6.53-3.507-9.033-11.538-5.529-18.068 3.506-6.53 11.537-9.034 18.068-5.529zm7.481 19.004c6.53 3.507 9.034 11.538 5.529 18.068-3.506 6.53-11.537 9.033-18.068 5.529-6.53-3.506-9.033-11.537-5.529-18.068 3.506-6.53 11.537-9.034 18.068-5.529zm7.482 19.004c6.53 3.507 9.034 11.537 5.529 18.068-3.506 6.53-11.537 9.033-18.068 5.529-6.53-3.506-9.033-11.537-5.529-18.068 3.506-6.53 11.537-9.034 18.068-5.529zm-81.213-74.736c6.53 3.507 9.034 11.537 5.529 18.068-3.506 6.53-11.537 9.033-18.068 5.529-6.53-3.506-9.033-11.537-5.529-18.068 3.506-6.53 11.537-9.034 18.068-5.529zm60.747 8.057c3.536 6.629 1.075 14.807-5.551 18.359-6.63 3.543-14.823 1.074-18.359-5.553-3.536-6.628-1.075-14.807 5.551-18.359 6.63-3.544 14.823-1.073 18.359 5.553zm0 0zm-30.374 16.92c6.531 3.506 9.034 11.537 5.529 18.068-3.506 6.53-11.537 9.034-18.068 5.529-6.53-3.506-9.033-11.537-5.529-18.068 3.506-6.53 11.537-9.034 18.068-5.529z" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
        
        {/* Right side: Form */}
        <div className="lg:w-1/3 ">
          <form className="bg-white shadow-md rounded px-6 pt-6 pb-8 mb-4">
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                Name
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="name"
                type="text"
                placeholder="Your name"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                Email
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                placeholder="Your email"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
                Message
              </label>
              <textarea
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="message"
                placeholder="Your message"
              />
            </div>
            <div className="flex items-center justify-between">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
