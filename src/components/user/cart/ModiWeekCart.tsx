type ModiWeekCartPropType = {
  imgSrc: string;
  day: string;
}
const ModiWeekCart: React.FC<ModiWeekCartPropType> = ({ imgSrc, day }) => {
  return (
    <>
      <div>
        <div className="relative flex flex-col">
          {/* wish list icon */}
          <span className="absolute right-3 top-3">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.22318 17.1157L9.22174 17.1144C6.62662 14.7612 4.55384 12.879 3.1178 11.1233C1.69324 9.38167 1 7.88671 1 6.3252C1 3.79748 2.97228 1.8252 5.5 1.8252C6.93721 1.8252 8.33224 2.49913 9.23865 3.56353L10 4.4576L10.7614 3.56353C11.6678 2.49913 13.0628 1.8252 14.5 1.8252C17.0277 1.8252 19 3.79748 19 6.3252C19 7.88673 18.3068 9.38173 16.882 11.1248C15.4459 12.8818 13.3734 14.7661 10.7786 17.1241C10.7782 17.1245 10.7778 17.1248 10.7775 17.1251L10.0026 17.8252L9.22318 17.1157Z"
                fill="white"
                stroke="#0C0C0C"
                strokeWidth="2"
              />
            </svg>
          </span>
          {/* ModiWeekCart image */}
          <img src={imgSrc} alt="" className="object-cover h-[200px] md:w-[288px]  md:h-[426px]" />
          {/* title */}
          <p className="mt-2 font-semibold text-black text-md">{day}</p>

          {/* free space */}
          <div className="h-[40px]"></div>
        </div>
      </div>
    </>
  );
};

export default ModiWeekCart;
