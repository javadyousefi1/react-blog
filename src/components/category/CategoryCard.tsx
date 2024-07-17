const CategoryCard: React.FC<{ icon: string; text: string }> = ({
  icon,
  text,
}) => {
  return (
    <div className="inline-block mt-10 group">
      <div className="md:w-[220px] w-[150px] h-[210px]  md:h-[280px] bg-white shadow-md rounded-lg hover:bg-blue transition-all ease-out duration-300 flex justify-     items-center">
        <div className="">
          {/* icon */}
          <div className="pl-10 mb-2">
            <span>
              <img src={icon} alt={text}/>
            </span>
          </div>
          {/* text */}
          <p className="pl-5 text-lg font-bold text-black transition-all duration-300 ease-out md:text-3xl group-hover:text-white">
            {text}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;
