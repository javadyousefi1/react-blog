import { ReactNode, useEffect } from "react";
// components
import Footer from "@components/Footer";
import Header from "@components/user/header/Header";
// rrd
// routes
import { router } from "../routes/route";
import Sidebar from "@components/admin/Sidebar";
import { Outlet } from "react-router-dom";


const Layout: React.FC = () => {

  const test = window.location
console.log(test)
  // const { pathname } = useLocation();

  // change title of each page dynamic by route
  // useEffect(() => {
  //   // scroll to page first
  //   window.scrollTo(0, 0);
  //   // // set title of each page
  //   // const currentRouteTitle = router.find((r) => r.path === pathname);
  //   // document.title = currentRouteTitle?.title ?? "صفحه ای یافت نشد";
  // }, [pathname]);

  // if (!pathname.includes("admin")) {
  //   return (
  //     <>
  //       <Header />
  //       <main className="min-h-screen">{children}</main>
  //       <Footer />
  //     </>
  //   );
  // }

  // if (pathname.includes("login") || pathname.includes("register")) {
  //   return (
  //     <>
  //       <main className="w-full min-h-screen bg-red-400">{children}</main>
  //     </>
  //   );
  // }

  return (
    <>
      <Header />
      <main className="min-h-screen">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
