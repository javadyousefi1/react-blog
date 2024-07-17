import Input from "@/components/inputs/Input";
import Button from "@/components/elements/Button";
import Styles from "../../styles/style.module.css";
import homeImage from "@assets/home.png";

const Main = () => {
  return (
    <section className={`h-[calc(100vh-0px)] w-full`}>
      <div
        className={`${Styles.dotBackground} w-full h-full flex justify-center items-center px-4`}
      >
        <div className="container flex flex-col items-center justify-between max-w-7xl md:flex-row gap-y-6">
          {/* content */}
          <div className="flex flex-col md:gap-y-12 gap-y-8">
            <div className="flex flex-col md:gap-y-2">
              <h1 className="text-3xl font-black text-center text-black md:text-left md:text-6xl">
                Hi, i’m Javad
              </h1>
              <h1 className="text-3xl font-black text-center text-black md:text-left md:text-6xl">
                Front end dev
              </h1>
            </div>
            {/* desc */}
            <div className="flex flex-col-reverse items-center justify-start md:gap-x-2 md:flex-row gap-y-2">
              <div className="md:h-[40px] md:w-[3px] h-[3px] w-[40px] bg-black"></div>
              <p className="text-sm text-dark-gray max-w-[600px] font-semibold text-center md:text-left">
                On this blog I share tips and tricks, frameworks, projects,
                tutorials, etc Make sure you subscribe to get the latest updates
              </p>
            </div>
            <div className="flex md:gap-x-4 gap-x-2">
              <Input
                className="md:!w-[300px]"
                type="text"
                name="email"
                onChange={() => {}}
                value={""}
                placeHolder="Enter Your Email"
              />
              <Button className="!w-[80px] font-semibold text-xs md:text-md">
                Subscribe
              </Button>
            </div>
          </div>
          {/* iamge */}
          <img
            src={homeImage}
            alt="Picture of the author"
            className="w-[400px]"
          />
        </div>
        {/* arrow */}
        <span className="absolute z-10 hidden bottom-5 md:block">
          <svg
            width="21 "
            height="21  "
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4 9L12 17L20 9"
              stroke="black"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </div>
    </section>
  );
};

export default Main;
