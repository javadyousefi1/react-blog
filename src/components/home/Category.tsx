import Title from "@/components/title/Title";
import CategoryCard from "../category/CategoryCard";
import { useEffect } from "react";
import { getAllCatories } from "@/services/category";
// react query
import { useQuery } from "@tanstack/react-query";
import { queryKeys } from "@/react-query/queryKeys";

const Category = () => {
  useEffect(() => {
    getAllCatories();
  }, []);

  const { data: categoryList, isLoading } = useQuery({
    queryKey: [queryKeys.CATEGORY],
    queryFn: getAllCatories,
    select: (originalData) => originalData?.data,
  });
  console.log(categoryList);
  return (
    <section className="container px-4 mt-10 max-w-7xl">
      <Title
        title="Browse the category"
        linkText={{ text: "see all category", href: "" }}
      />
      {/* map on category list */}
      <div className="flex justify-start pb-2 overflow-x-auto gap-x-10">
        {!isLoading &&
          categoryList?.map((category) => (
            <CategoryCard
              key={category.id}
              icon={category.image}
              text={category.title}
            />
          ))}
      </div>
    </section>
  );
};

export default Category;
