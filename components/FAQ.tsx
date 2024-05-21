"use client";

import { FC, ReactNode, useRef, useState } from "react";

// <FAQ> component is a list of <Item> component
// Just import the FAQ & add your FAQ content to the const faqList

type FaqElement = {
  question: string;
  answer: ReactNode;
}
type FaqElementItem = {
  item: FaqElement;
}


const faqList: FaqElement[] = [
  {
    question: "Is my financial data secure with WealthWell?",
    answer: <div className="space-y-2 leading-relaxed">Yes, protecting your financial data is our top priority. WealthWell employs industry-standard encryption protocols and security measures to safeguard your information. 
    We adhere to strict privacy policies and never share your data with third parties without your consent.</div>,
  },
  {
    question: "Can I get a refund?",
    answer: (
      <p>
        Yes! You can request a refund within 7 days of your purchase. Reach out
        by email.
      </p>
    ),
  },
  {
    question: " Can I connect my bank accounts and investment portfolios to WealthWell?",
    answer: (
      <div className="space-y-2 leading-relaxed">Yes, WealthWell offers the ability to securely connect your financial accounts, including bank accounts, investment portfolios, credit cards, and more. 
      This allows for comprehensive tracking and analysis of your financial data within the platform.</div>
    ),
  },
  {
    question: "Is WealthWell suitable for individuals at all stages of their financial journey?",
    answer: (
      <div className="space-y-2 leading-relaxed">Absolutely! Whether youre just starting to take control of your finances or youre a seasoned investor looking to optimize your portfolio, WealthWell is designed to accommodate users at all stages of their financial journey. Our personalized coaching, 
      AI-driven insights, and comprehensive tools cater to a diverse range of financial needs and goals.</div>
    ),
  },
  {
    question: "Can I access WealthWell on my mobile device?",
    answer: (
      <div className="space-y-2 leading-relaxed">Yes, WealthWell is accessible on both desktop and mobile devices, allowing you to manage your finances anytime, anywhere. Download our mobile app from the App Store or Google Play Store to access your account,
       track your financial progress, and stay connected with your financial advisor on the go.</div>
    ),
  },
];

const Item: FC<FaqElementItem> = ({ item }) => {
  const accordion = useRef(null);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <li>
      <button
        className="relative flex gap-2 items-center w-full py-5 text-base font-semibold text-left border-t md:text-lg border-base-content/10"
        onClick={(e) => {
          e.preventDefault();
          setIsOpen(!isOpen);
        }}
        aria-expanded={isOpen}
      >
        <span
          className={`flex-1 text-base-content ${isOpen ? "text-primary" : ""}`}
        >
          {item?.question}
        </span>
        <svg
          className={`flex-shrink-0 w-4 h-4 ml-auto fill-current`}
          viewBox="0 0 16 16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className={`transform origin-center transition duration-200 ease-out ${
              isOpen && "rotate-180"
            }`}
          />
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className={`transform origin-center rotate-90 transition duration-200 ease-out ${
              isOpen && "rotate-180 hidden"
            }`}
          />
        </svg>
      </button>

      <div
        ref={accordion}
        className={`transition-all duration-300 ease-in-out opacity-80 overflow-hidden`}
        style={
          isOpen
            ? { maxHeight: accordion?.current?.scrollHeight, opacity: 1 }
            : { maxHeight: 0, opacity: 0 }
        }
      >
        <div className="pb-5 leading-relaxed">{item?.answer}</div>
      </div>
    </li>
  );
};

const FAQ: FC = () => {
  return (
    <section className="bg-base-200" id="faq">
      <div className="py-24 px-8 max-w-7xl mx-auto flex flex-col md:flex-row gap-12">
        <div className="flex flex-col text-left basis-1/2">
          <p className="inline-block font-semibold text-primary mb-4">FAQ</p>
          <p className="sm:text-4xl text-3xl font-extrabold text-base-content">
            Frequently Asked Questions
          </p>
        </div>

        <ul className="basis-1/2">
          {faqList.map((item, i) => (
            <Item key={i} item= {item} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default FAQ;
