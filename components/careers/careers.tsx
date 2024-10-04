"use client";
import React, { useState } from "react";

interface JobItem {
  id: number;
  title: string;
  description: string;
  responsibilities: string[];
  skills: string[];
  employmentType: string;
  experience: string;
  salary: string;
  location: string;
  insights: string;
}

const careerData: JobItem[] = [
  {
    id: 1,
    title: "Software Developer - Node.js",
    description: "Develop backend services using Node.js.",
    responsibilities: [
      "Write clean, scalable code.",
      "Troubleshoot and debug applications.",
      "Collaborate with front-end developers.",
    ],
    skills: [
      "Proficiency in Node.js.",
      "Experience with databases like MongoDB.",
      "Familiarity with RESTful APIs.",
    ],
    employmentType: "Full-time",
    experience: "2+ years of experience",
    salary: "$70,000 - $90,000/year",
    location: "Remote",
    insights:
      "We're looking for team players who love coding in a fast-paced environment.",
  },
  {
    id: 2,
    title: "Front-End Developer - React, Vue",
    description: "Build user interfaces with React and Vue.",
    responsibilities: [
      "Design responsive web applications.",
      "Ensure cross-browser compatibility.",
      "Work closely with UX/UI designers.",
    ],
    skills: [
      "Proficiency in React and Vue.",
      "Solid understanding of CSS and JavaScript.",
      "Experience with version control systems like Git.",
    ],
    employmentType: "Part-time",
    experience: "3+ years of experience",
    salary: "$50,000 - $75,000/year",
    location: "San Francisco, CA",
    insights: "A great opportunity to work with modern front-end frameworks.",
  },
  {
    id: 3,
    title: "Data Scientist - Machine Learning",
    description: "Analyze data and build predictive models.",
    responsibilities: [
      "Collect and clean data.",
      "Implement machine learning algorithms.",
      "Present findings to stakeholders.",
    ],
    skills: [
      "Experience with Python and R.",
      "Knowledge of machine learning frameworks.",
      "Strong statistical analysis skills.",
    ],
    employmentType: "Full-time",
    experience: "2+ years of experience",
    salary: "$80,000 - $100,000/year",
    location: "Remote",
    insights: "Join our team to drive data-driven decision-making.",
  },
  {
    id: 4,
    title: "UI/UX Designer - Creative Agency",
    description: "Design user-centric web and mobile applications.",
    responsibilities: [
      "Conduct user research and usability testing.",
      "Create wireframes and prototypes.",
      "Collaborate with developers to implement designs.",
    ],
    skills: [
      "Proficiency in design tools like Figma and Adobe XD.",
      "Understanding of user-centered design principles.",
      "Strong visual design skills.",
    ],
    employmentType: "Contract",
    experience: "3+ years of experience",
    salary: "$60,000 - $90,000/year",
    location: "New York, NY",
    insights: "Help shape our products by focusing on user experience.",
  },
  {
    id: 5,
    title: "DevOps Engineer - Cloud Services",
    description: "Manage cloud infrastructure and CI/CD pipelines.",
    responsibilities: [
      "Automate deployment processes.",
      "Monitor system performance.",
      "Collaborate with development teams.",
    ],
    skills: [
      "Experience with AWS or Azure.",
      "Familiarity with containerization tools like Docker.",
      "Knowledge of scripting languages.",
    ],
    employmentType: "Full-time",
    experience: "3+ years of experience",
    salary: "$90,000 - $120,000/year",
    location: "Chicago, IL",
    insights: "Join our team to optimize our deployment processes.",
  },
  {
    id: 6,
    title: "Product Manager - Tech Startup",
    description: "Oversee product development from conception to launch.",
    responsibilities: [
      "Define product vision and strategy.",
      "Collaborate with cross-functional teams.",
      "Analyze market trends and customer feedback.",
    ],
    skills: [
      "Strong project management skills.",
      "Experience with Agile methodologies.",
      "Excellent communication skills.",
    ],
    employmentType: "Full-time",
    experience: "5+ years of experience",
    salary: "$100,000 - $140,000/year",
    location: "Remote",
    insights: "Lead our product initiatives and drive success.",
  },
];

export const Career: React.FC = () => {
  const [activeId, setActiveId] = useState<number | null>(null);

  const handleToggle = (id: number) => {
    setActiveId(activeId === id ? null : id);
  };

  return (
    <section className="text-gray-900 w-full px-4">
      <div className="w-full mt-6 mx-auto " id="careers">
        <div className="flex flex-col justify-start items-start w-4/5 mx-auto pt-16 sm:pt-20 lg:pt-28 xl:pt-36">
          <span className="border border-blue-600 text-blue-600 px-3 py-1 rounded-md my-2">
            We are hiring
          </span>
          <div className="text-black font-extrabold leading-none text-4xl md:text-5xl lg:text-6xl">
            Discover your new career
          </div>

          <div className="w-full my-4">
            <ul className="list-none w-full">
              {careerData.map((job) => (
                <li
                  key={job.id}
                  className="w-full border-b-2 last:border-none border-gray-300"
                >
                  <div
                    className="flex justify-between items-center py-7 cursor-pointer"
                    onClick={() => handleToggle(job.id)}
                  >
                    <div className="text-black font-medium w-full md:text-2xl text-pera">
                      {job.title}
                    </div>
                    <span className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-600">
                      {activeId === job.id ? "-" : "+"}
                    </span>
                  </div>
                  <div
                    className={`overflow-hidden transition-all duration-500 ease-in-out ${
                      activeId === job.id ? "max-h-screen" : "max-h-0"
                    }`}
                  >
                    <div className="space-y-4 text-base md:text-xl">
                      <p className="text-gray-600">
                        <strong>Description:</strong>{" "}
                        <span className="text-gray-500">{job.description}</span>
                      </p>
                      <p className="text-gray-600">
                        <strong>Responsibilities:</strong>
                      </p>
                      <ul className="list-disc pl-5 text-gray-500">
                        {job.responsibilities.map((item, index) => (
                          <li key={index}>{item}</li>
                        ))}
                      </ul>
                      <p className="text-gray-600">
                        <strong>Skills and Qualifications:</strong>
                      </p>
                      <ul className="list-disc pl-5 text-gray-500">
                        {job.skills.map((skill, index) => (
                          <li key={index}>{skill}</li>
                        ))}
                      </ul>
                      <p className="text-gray-600">
                        <strong>Employment Type:</strong>{" "}
                        <span className="text-gray-500">
                          {job.employmentType}
                        </span>
                      </p>
                      <p className="text-gray-600">
                        <strong>Experience:</strong>{" "}
                        <span className="text-gray-500">{job.experience}</span>
                      </p>
                      <p className="text-gray-600">
                        <strong>Salary:</strong>{" "}
                        <span className="text-gray-500">{job.salary}</span>
                      </p>
                      <p className="text-gray-600">
                        <strong>Job Location:</strong>{" "}
                        <span className="text-gray-500">{job.location}</span>
                      </p>
                      <p className="text-gray-600">
                        <strong>Hiring Insights:</strong>{" "}
                        <span className="text-gray-500">{job.insights}</span>
                      </p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
