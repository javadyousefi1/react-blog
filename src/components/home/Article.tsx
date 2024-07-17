import BlogCard from "../blog/BlogCard";
import Button from "../elements/Button";
import Title from "../title/Title";

const Article = () => {
  return (
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
  );
};

export default Article;
