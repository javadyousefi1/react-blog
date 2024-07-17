import Main from "@/components/home/Main";
import Category from "@/components/home/Category";
import Article from "@/components/home/Article";
import Email from "@/components/home/Email";

export default function Home() {
  return (
    <main>
      {/* main */}
      <Main />
      {/* Browse the category */}
      <Category />
      {/* article */}
      <Article />
      {/* email */}
      <Email />
    </main>
  );
}
