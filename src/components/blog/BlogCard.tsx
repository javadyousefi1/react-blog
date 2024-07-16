import ArticleImage from "@assets/Article_Image.png";
import profile from "@assets/profile.jpg";
const BlogCard = () => {
  return (
    <>
      <div className="flex-col bg-white hover:shadow-custom-shadow transition-all duration-300 ease-in-out rounded-lg min-w-[250px] min-h-[300px] p-3">
        {/* Image */}
        <img
          src={ArticleImage}
          alt="ArticleImage"
          className="rounded-lg w-[260px] h-[196px]"
        />
        {/* title */}
        <h1 className="mt-4 font-bold text-black text-md">
          Fundamental of javascript
        </h1>
        {/* author */}
        <div className="flex items-center justify-between gap-x-4 mt-14">
          {/* profile */}
          <div>
            <img
              src={profile}
              alt="profile"
              className="rounded-full w-[50px]"
            />
          </div>
          {/* detail */}
          <div className="flex-col flex-1">
            <h1 className="font-bold">Javad</h1>
            <div className="flex items-center justify-between">
              <p className="text-sm">Jan 10, 2022</p>
              <div className="w-[3px] h-[3px] rounded-full bg-black"></div>
              <p className="text-sm">3 min read</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogCard;
