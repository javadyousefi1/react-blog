import Button from "../elements/Button";
import Input from "../inputs/Input";
import email from "@assets/email.png";

const Email = () => {
  return (
    <section>
      <div className="flex flex-col items-center justify-center px-4 py-10 bg-ligth-gray1">
        {/* icon */}
        <img src={email} alt="Picture of the author" className="w-[130px]" />
        <h1 className="mt-5 font-bold text-black md:text-3xl whitespace-nowrap">
          Subscribe For the lastest updates
        </h1>
        <p className="mt-1 font-light text-center md:text-lg text-gray md:whitespace-nowrap">
          Subscribe to newsletter and never miss the new post every week.
        </p>
        <div className="flex  md:gap-x-4 gap-x-2 w-full max-w-[500px] mt-8 px-4">
          <Input
            className=""
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
    </section>
  );
};

export default Email;
