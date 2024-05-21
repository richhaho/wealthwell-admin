import Image from "next/image";
import ButtonLead from "@/components/ButtonLead";
import { FC } from "react";

const Hero: FC = () => {
  return (
    <section className="max-w-7xl mx-auto bg-base-100 flex flex-col lg:flex-row items-center justify-center gap-16 lg:gap-20 px-8 py-8 lg:py-20">
      <div className="flex flex-col gap-10 lg:gap-14 items-center justify-center text-center lg:text-left lg:items-start">
        <a
          href="https://www.producthunt.com/posts/shipfast-2?utm_source=badge-top-post-badge&utm_medium=badge&utm_souce=badge-shipfast&#0045;2"
          target="_blank"
          className=" -mb-4 md:-mb-6 group"
          title="Product Hunt link"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 122 37"
            className="w-32 md:w-36 fill-base-content/80 group-hover:fill-base-content"
          >
            </svg>
        </a>

        <h1 className="font-extrabold text-4xl lg:text-6xl tracking-tight md:-mb-4">
        Achieve Financial Wellness with Confidence
        </h1>
        <p className="text-lg opacity-80 leading-relaxed">
        Empower your financial journey with WealthWell – your personalized finance
        coaching companion powered by AI. Take control of your financial future, 
        set achievable goals, and unlock your path to prosperity.
        </p>
        {/*
        
        <button className="btn btn-primary btn-wide">
          Get {config.appName}
          </button>*/}
          <ButtonLead />

        {/*<TestimonialsAvatars priority={false} />*/}
      </div>
      <div className="lg:w-full">
        <Image
          src="https://www.bettertechtips.com/wp-content/uploads/2022/07/personal-finance-696x385.jpg"
          alt="Product Demo"
          className="w-full"
          priority={true}
          width={500}
          height={500}
        />
      </div>
    </section>
  );
};

export default Hero;
