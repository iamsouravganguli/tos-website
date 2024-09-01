// components/ContactForm.tsx
import React from 'react';
import Link from 'next/link';

export function ContactForm() {
  return (
    <div className="flex flex-col justify-center bg-sky-50" id="contact-us">
      <div className="container mx-auto flex flex-col lg:flex-row gap-12 px-12 m-24 ">
        {/* Left side: Text and Links */}
        <div className="lg:w-1/2 lg:text-left">
          <h1 className="text-gray-800 md:text-6xl text-4xl font-extrabold mb-4">Let's Talk</h1>
          <p className="text-lg text-gray-600 mb-8">
            Have some big idea or brand to develop and need help? Then reach out; we'd love to hear about your project and provide help.
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
                  <path d="M111.898 160.664H15.5c-8.285 0-15 6.719-15 15V497c0 8.285 6.715 15 15 15h96.398c8.286 0 15-6.715 15-15V175.664c0-8.281-6.714-15-15-15zM96.898 482H30.5V190.664h66.398zM63.703 0C28.852 0 .5 28.352.5 63.195c0 34.852 28.352 63.2 63.203 63.2 34.848 0 63.195-28.352 63.195-63.2C126.898 28.352 98.551 0 63.703 0zm0 96.395c-18.308 0-33.203-14.891-33.203-33.2C30.5 44.891 45.395 30 63.703 30c18.305 0 33.195 14.89 33.195 33.195 0 18.309-14.89 33.2-33.195 33.2zm289.207 62.148c-22.8 0-45.273 5.496-65.398 15.777-.684-7.652-7.11-13.656-14.942-13.656h-96.406c-8.281 0-15 6.719-15 15V497c0 8.285 6.719 15 15 15h96.406c8.285 0 15-6.715 15-15V320.266c0-22.735 18.5-41.23 41.235-41.23 22.734 0 41.226 18.495 41.226 41.23V497c0 8.285 6.719 15 15 15h96.403c8.285 0 15-6.715 15-15V302.066c0-79.14-64.383-143.523-143.524-143.523zM466.434 482h-66.399V320.266c0-39.278-31.953-71.23-71.226-71.23-39.282 0-71.239 31.952-71.239 71.23V482h-66.402V190.664h66.402v11.082c0 5.77 3.309 11.027 8.512 13.524a15.01 15.01 0 0 0 15.875-1.82c14.379-14.573 34.184-22.038 55.073-22.038 43.42 0 78.933 35.54 78.933 79.488v224.6zM375.56 232.132c-29.905 0-54.421 24.09-54.421 53.858V477c0 1.765 1.358 3.171 3.209 3.171h41.445c1.851 0 3.209-1.406 3.209-3.171V286.847c0-29.77-24.514-53.715-54.361-53.715zM54.26 482H44.912c-8.26 0-14.971-6.71-14.971-14.971V102.615c0-8.26 6.711-14.971 14.971-14.971h9.348c8.26 0 14.971 6.711 14.971 14.971v364.414c0 8.261-6.711 14.971-14.971 14.971zm0 0" />
                </svg>
              </Link>
              <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-[#007bff] text-xl">
                <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="#007bff" viewBox="0 0 448 512">
                  <path d="M100.28 448H7.4V171.7h92.88V448zM53.59 121.1c-29.81 0-54.11-24.3-54.11-54.1S23.78 13 53.59 13s54.1 24.3 54.1 54.1c0 29.8-24.29 54.1-54.1 54.1zm394.72 326.9h-92.9V314.1c0-31.8-11.6-53.5-40.6-53.5-22.1 0-35.9 14.9-41.8 29.3-2.1 5-2.6 12.1-2.6 19.2v139.7h-92.9V171.7h89.7v22.3h1.3c12.5-18.9 34.6-45.9 84.2-45.9 61.4 0 107.2 40.4 107.2 127.2V448zM29.2 0C13.1 0 0 13.1 0 29.2v453.6C0 496.9 13.1 510 29.2 510H418.8c16.1 0 29.2-13.1 29.2-29.2V29.2C448 13.1 434.9 0 418.8 0H29.2z" />
                </svg>
              </Link>
            </div>
          </div>
        </div>

        {/* Right side: Contact Form */}
        <div className="lg:w-1/2 border-2 border-gray-300 p-6 rounded-lg shadow-lg bg-white">
          <form action="#" method="POST" className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="name" className="text-gray-800 text-xl font-semibold">Name</label>
              <input type="text" id="name" name="name" required className="border-2 border-gray-200 rounded-md p-3 w-full text-lg" />
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="text-gray-800 text-xl font-semibold">Email</label>
              <input type="email" id="email" name="email" required className="border-2 border-gray-200 rounded-md p-3 w-full text-lg" />
            </div>
            <div className="space-y-2">
              <label htmlFor="message" className="text-gray-800 text-xl font-semibold">Message</label>
              <textarea id="message" name="message" rows={6} required className="border-2 border-gray-200 rounded-md p-3 w-full text-lg" />
            </div>
            <div>
              <button type="submit" className="bg-[#007bff] text-white px-6 py-3 rounded-md text-lg font-semibold">
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
