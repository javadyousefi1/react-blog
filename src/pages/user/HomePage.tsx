import Styles from "../../styles/style.module.css";

import homeImage from "@assets/home.png";
import email from "@assets/email.png";
import Input from "@/components/inputs/Input";
import Button from "@/components/elements/Button";
import Title from "@/components/title/Title";
import CategoryCard from "@/components/category/CategoryCard";
import BlogCard from "@/components/blog/BlogCard";

export default function Home() {
  const categoryList = [
    {
      id: 1,
      text: "css",
      icon: (
        <svg
          width="60"
          height="60"
          viewBox="0 0 60 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="60" height="60" rx="7.45763" fill="#FFFFFE" />
          <path
            d="M29.4798 49L16.0033 45.3013L13 12H46L42.9936 45.2962L29.4798 49Z"
            fill="#264DE4"
          />
          <path
            d="M40.4198 43.1759L42.9889 14.7228H29.5V46.1688L40.4198 43.1759Z"
            fill="#2965F1"
          />
          <path
            d="M19.8849 27.0739L20.2551 31.1581H29.5001V27.0739H19.8849ZM19.1409 18.8073L19.5164 22.8915H29.5001V18.8073H19.1409ZM29.5001 37.6812L29.482 37.6859L24.881 36.4577L24.5869 33.2003H20.4397L21.0185 39.6133L29.4811 41.9357L29.5001 41.9306V37.6812Z"
            fill="#EBEBEB"
          />
          <path
            d="M39.0887 27.0739L39.8345 18.8073H29.4857V22.8915H35.307L34.9311 27.0739H29.4857V31.1581H34.5729L34.0933 36.4552L29.4856 37.6846V41.9338L37.9549 39.6133L38.017 38.9232L38.988 28.1706L39.0887 27.0739Z"
            fill="white"
          />
        </svg>
      ),
    },
    {
      id: 2,
      text: "Js",
      icon: (
        <svg
          width="60"
          height="60"
          viewBox="0 0 60 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="60" height="60" rx="7.45763" fill="#FFFFFE" />
          <path
            d="M15.0002 36.1433L18.3667 34.0646C19.0162 35.2395 19.607 36.2336 21.0243 36.2336C22.3827 36.2336 23.2394 35.6915 23.2394 33.5827V19.2413H27.3735V33.6423C27.3735 38.0109 24.8635 39.9995 21.2014 39.9995C17.8942 39.9995 15.9745 38.252 15 36.143L15.0002 36.1433ZM29.619 35.6913L32.9851 33.7029C33.8714 35.1794 35.0231 36.264 37.0605 36.264C38.7736 36.264 39.8659 35.3901 39.8659 34.1849C39.8659 32.7388 38.7437 32.2265 36.8538 31.3832L35.8204 30.9308C32.8377 29.6357 30.8592 28.0087 30.8592 24.574C30.8592 21.4104 33.2216 19 36.913 19C39.5413 19 41.4312 19.9341 42.7895 22.3745L39.5705 24.4837C38.8616 23.1882 38.0941 22.6761 36.9129 22.6761C35.702 22.6761 34.9342 23.4594 34.9342 24.4837C34.9342 25.749 35.702 26.2615 37.4738 27.0449L38.5073 27.4967C42.0215 29.0335 44 30.6 44 34.1248C44 37.9213 41.0765 40 37.149 40C33.3101 40 30.8295 38.1321 29.6188 35.6915"
            fill="#2B2C34"
          />
        </svg>
      ),
    },
    {
      id: 3,
      text: "Tailwind",
      icon: (
        <svg
          width="60"
          height="60"
          viewBox="0 0 60 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="60" height="60" rx="7.45763" fill="#FFFFFE" />
          <g clipPath="url(#clip0_2402_273)">
            <path
              d="M30 18C24.6667 18 21.3333 20.6598 20 25.9792C22 23.3194 24.3333 22.322 27 22.987C28.5214 23.3663 29.6089 24.4674 30.8127 25.6859C32.7736 27.6712 35.043 29.9688 40 29.9688C45.3333 29.9688 48.6667 27.309 50 21.9896C48 24.6494 45.6667 25.6468 43 24.9818C41.4786 24.6025 40.3911 23.5015 39.1873 22.2829C37.2264 20.2976 34.957 18 30 18ZM20 29.9688C14.6667 29.9688 11.3333 32.6286 10 37.9481C12 35.2883 14.3333 34.2909 17 34.9558C18.5214 35.3352 19.6089 36.4362 20.8127 37.6548C22.7736 39.6401 25.043 41.9377 30 41.9377C35.3333 41.9377 38.6667 39.2779 40 33.9584C38 36.6182 35.6667 37.6156 33 36.9506C31.4786 36.5713 30.3911 35.4703 29.1873 34.2517C27.2264 32.2664 24.957 29.9688 20 29.9688Z"
              fill="url(#paint0_linear_2402_273)"
            />
          </g>
          <defs>
            <linearGradient
              id="paint0_linear_2402_273"
              x1="8.8888"
              y1="25.6601"
              x2="43.3904"
              y2="45.6049"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#2298BD" />
              <stop offset="1" stopColor="#0ED7B5" />
            </linearGradient>
            <clipPath id="clip0_2402_273">
              <rect
                width="40"
                height="24"
                fill="white"
                transform="translate(10 18)"
              />
            </clipPath>
          </defs>
        </svg>
      ),
    },
    {
      id: 4,
      text: "Vue Js",
      icon: (
        <svg
          width="60"
          height="60"
          viewBox="0 0 60 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="60" height="60" rx="7.45763" fill="#FFFFFE" />
          <path
            d="M40.8 15H48L30 45.9719L12 15H25.77L30 22.1819L34.14 15H40.8Z"
            fill="#41B883"
          />
          <path
            d="M12 15L30 45.9719L48 15H40.8L30 33.5832L19.11 15H12Z"
            fill="#41B883"
          />
          <path
            d="M19.1101 15L30.0001 33.6729L40.8001 15H34.1401L30.0001 22.1819L25.7701 15H19.1101Z"
            fill="#35495E"
          />
        </svg>
      ),
    },
    {
      id: 5,
      text: "React Js",
      icon: (
        <svg
          width="60"
          height="60"
          viewBox="0 0 60 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="60" height="60" rx="7.45763" fill="#FFFFFE" />
          <g clipPath="url(#clip0_2402_393)">
            <path
              d="M42.888 23.6565C42.4623 23.5089 42.033 23.3722 41.6005 23.2465C41.6731 22.9465 41.74 22.6501 41.7994 22.3589C42.7741 17.5777 42.1369 13.7259 39.9605 12.4577C37.8737 11.2419 34.4611 12.5096 31.0145 15.5407C30.6749 15.84 30.3427 16.1479 30.0184 16.4641C29.8013 16.2538 29.5804 16.0476 29.3558 15.8456C25.7436 12.6047 22.123 11.2387 19.9489 12.5106C17.8641 13.7301 17.2467 17.3511 18.1242 21.8824C18.2115 22.3312 18.3101 22.7776 18.4198 23.2214C17.9073 23.3685 17.4128 23.5251 16.9395 23.6919C12.7045 25.184 10 27.5223 10 29.9477C10 32.4527 12.9034 34.9653 17.3144 36.4888C17.672 36.6118 18.0326 36.7258 18.3958 36.8306C18.2778 37.3085 18.1731 37.7897 18.0817 38.2735C17.2452 42.7261 17.8984 46.2615 19.9777 47.4734C22.1252 48.7248 25.7295 47.4386 29.2391 44.3384C29.5236 44.0863 29.802 43.8271 30.0737 43.561C30.4249 43.9035 30.7855 44.2359 31.155 44.558C34.5547 47.5141 37.9122 48.7078 39.9894 47.4926C42.1348 46.2375 42.8322 42.4395 41.9269 37.8187C41.8556 37.4567 41.7756 37.0965 41.687 36.7384C41.9402 36.6626 42.1886 36.5846 42.4308 36.5035C47.0164 34.9683 50 32.4862 50 29.9477C50 27.5134 47.2081 25.1594 42.888 23.6565ZM41.8934 34.8645C41.6747 34.9376 41.4503 35.0082 41.2216 35.0769C40.7153 33.4574 40.0322 31.7354 39.1961 29.956C39.9939 28.2192 40.6508 26.5191 41.1428 24.9102C41.552 25.0299 41.9491 25.156 42.3319 25.2891C46.0334 26.5769 48.2912 28.4807 48.2912 29.9477C48.2912 31.5102 45.8528 33.5387 41.8934 34.8645ZM40.2506 38.1541C40.6509 40.1973 40.708 42.0446 40.4428 43.4889C40.2047 44.7866 39.7256 45.6517 39.1331 45.9983C37.8727 46.7357 35.1769 45.7773 32.2695 43.249C31.9258 42.9496 31.5904 42.6405 31.2638 42.3222C32.3909 41.0766 33.5173 39.6285 34.6167 38.0202C36.5505 37.8468 38.3773 37.5633 40.0341 37.1763C40.1139 37.5004 40.1861 37.8265 40.2506 38.1541ZM23.6369 45.8709C22.4053 46.3103 21.4244 46.3229 20.8314 45.9775C19.5697 45.2422 19.0452 42.4034 19.7606 38.5956C19.8457 38.1456 19.9431 37.6981 20.0527 37.2536C21.6911 37.6199 23.5047 37.8833 25.443 38.0422C26.5498 39.6159 27.7087 41.0624 28.8767 42.329C28.6285 42.5717 28.3744 42.8082 28.1147 43.0383C26.5627 44.4091 25.0075 45.3817 23.6369 45.8709ZM17.8672 34.8549C15.9167 34.1812 14.3059 33.3056 13.2019 32.3502C12.2097 31.4917 11.7089 30.6393 11.7089 29.9477C11.7089 28.4758 13.8803 26.5984 17.502 25.3225C17.9416 25.1677 18.4016 25.0217 18.8789 24.8846C19.3795 26.5299 20.0361 28.2501 20.8284 29.9897C20.0258 31.7549 19.3598 33.5027 18.8544 35.1674C18.5228 35.0714 18.1937 34.9672 17.8672 34.8549ZM19.8013 21.5507C19.0495 17.6685 19.5487 14.74 20.8052 14.005C22.1433 13.2222 25.1023 14.3384 28.2212 17.1369C28.4246 17.3198 28.6247 17.5064 28.8214 17.6966C27.6592 18.9577 26.5109 20.3935 25.4139 21.9579C23.5327 22.1341 21.7319 22.417 20.0763 22.7961C19.9742 22.3834 19.8825 21.9682 19.8013 21.5508V21.5507ZM37.0555 25.8561C36.6644 25.1736 36.2589 24.4996 35.8391 23.8346C37.1153 23.9977 38.3381 24.2142 39.4864 24.4788C39.1417 25.5955 38.712 26.7628 38.2063 27.9596C37.8366 27.2508 37.4529 26.5495 37.0555 25.8561ZM30.0192 18.9307C30.8073 19.7936 31.5967 20.7569 32.3731 21.8022C30.7981 21.727 29.2205 21.7267 27.6455 21.8013C28.4227 20.7656 29.2188 19.8036 30.0192 18.9307ZM22.9378 25.868C22.5454 26.5558 22.1689 27.2527 21.8086 27.9582C21.3111 26.7656 20.8853 25.5929 20.5377 24.4605C21.6789 24.2025 22.8959 23.9916 24.1641 23.8315C23.7396 24.5005 23.3307 25.1794 22.9378 25.8678V25.868ZM24.2005 36.1867C22.8903 36.0389 21.655 35.8389 20.5141 35.5878C20.8672 34.4352 21.3023 33.2376 21.8106 32.0194C22.1723 32.7255 22.5504 33.4228 22.9445 34.1109C23.3498 34.8183 23.7695 35.5111 24.2005 36.1867ZM30.0664 41.0862C29.2564 40.2033 28.4486 39.2264 27.6597 38.1757C28.4256 38.206 29.2064 38.2215 30 38.2215C30.8153 38.2215 31.6213 38.203 32.4145 38.1674C31.6356 39.2369 30.8492 40.2153 30.0664 41.0862ZM38.2223 31.9572C38.757 33.1888 39.2077 34.3801 39.5655 35.513C38.4058 35.7805 37.1536 35.9958 35.8342 36.1558C36.257 35.4785 36.6664 34.7928 37.0622 34.099C37.4646 33.3939 37.8514 32.6798 38.2223 31.9572ZM35.582 33.2363C34.9761 34.2999 34.3361 35.3434 33.6631 36.365C32.444 36.4522 31.2222 36.4956 30 36.4949C28.7552 36.4949 27.5444 36.4558 26.3784 36.3794C25.6878 35.3601 25.0357 34.3148 24.4233 33.2458H24.4234C23.8139 32.1824 23.2446 31.096 22.7167 29.9889C23.2433 28.8816 23.8109 27.7946 24.4183 26.7304L24.4181 26.7306C25.0253 25.6661 25.6723 24.6253 26.3577 23.6104C27.5472 23.5195 28.767 23.4721 29.9998 23.4721H30C31.2384 23.4721 32.4598 23.5199 33.6491 23.6115C34.3275 24.6249 34.9704 25.6621 35.5764 26.7213C36.1858 27.7831 36.7609 28.8648 37.3008 29.9644C36.7665 31.0753 36.1932 32.1666 35.582 33.2363ZM39.107 13.9536C40.4464 14.7342 40.9673 17.8821 40.1258 22.0103C40.072 22.2737 40.0117 22.5419 39.9461 22.814C38.2864 22.4268 36.4844 22.139 34.5977 21.9601C33.4986 20.3785 32.3597 18.9405 31.2164 17.6957C31.516 17.4038 31.8228 17.1195 32.1364 16.843C35.0895 14.2461 37.8495 13.2208 39.107 13.9536ZM30 26.3382C31.9727 26.3382 33.5719 27.9543 33.5719 29.9477C33.5719 31.9411 31.9727 33.5572 30 33.5572C28.0273 33.5572 26.4281 31.9411 26.4281 29.9477C26.4281 27.9543 28.0273 26.3382 30 26.3382Z"
              fill="#00D8FF"
            />
          </g>
          <defs>
            <clipPath id="clip0_2402_393">
              <rect
                width="40"
                height="36"
                fill="white"
                transform="translate(10 12)"
              />
            </clipPath>
          </defs>
        </svg>
      ),
    },
  ];

  return (
    <main className="">
      {/* main */}
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
                  tutorials, etc Make sure you subscribe to get the latest
                  updates
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
      {/* Browse the category */}
      <section className="container px-4 mt-10 max-w-7xl">
        <Title
          title="Browse the category"
          linkText={{ text: "see all category", href: "" }}
        />
        {/* map on category list */}
        <div className="flex justify-between pb-2 overflow-x-auto gap-x-4">
          {categoryList.map((category) => (
            <CategoryCard
              key={category.id}
              icon={category.icon}
              text={category.text}
            />
          ))}
        </div>
      </section>
      {/* article */}
      <article className="w-full py-20 mt-20 bg-white ">
        {/* Featured Article */}
        <div className="container px-4 max-w-7xl">
          <Title
            title="Featured Article"
            linkText={{ text: "See All Article", href: "" }}
          />
          <div className="flex justify-between pb-2 mt-8 overflow-x-auto gap-x-4">
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
          </div>
        </div>
        {/* css */}
        <div className="container px-4 mt-20 max-w-7xl">
          <Title title="Css" linkText={{ text: "See All Article", href: "" }} />
          <div className="flex justify-between pb-2 mt-8 overflow-x-auto gap-x-4">
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
          </div>
        </div>
        {/* Javascript */}
        <div className="container px-4 mt-20 max-w-7xl">
          <Title
            title="Javascript"
            linkText={{ text: "See All Article", href: "" }}
          />
          <div className="flex justify-between pb-2 mt-8 overflow-x-auto gap-x-4">
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
          </div>
        </div>
        <div className="flex justify-center">
          <Button className="!w-max mt-16 !p-3">More Articles</Button>
        </div>
      </article>
      {/* email */}
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
    </main>
  );
}
