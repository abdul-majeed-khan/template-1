"use client";
import { ConfigDB } from "@/config/themeCustomizerConfig";
import Customizer from "@/layout/Customizer";
import TapToTop from "@/layout/TapToTop";
import StoreOldData from "@/utils/StoreOldData";
import { usePathname } from "next/navigation";
import { Fragment, useEffect } from "react";
import { ToastContainer } from "react-toastify";

export default function RootLayout({ children }) {
  const pathName = usePathname();
  // Set default theme colors
  useEffect(() => {
    document.documentElement.style.setProperty("--theme-default", ConfigDB.PrimaryColor ? ConfigDB.PrimaryColor : "#ff5c41");
    document.documentElement.style.setProperty("--theme-default2", ConfigDB.SecondaryColor ? ConfigDB.SecondaryColor : "#ff8c41");
  }, [pathName]);

  return (
    <Fragment>
      {children}
      <Customizer />
      <TapToTop />
      <StoreOldData />
      <ToastContainer position='bottom-left' autoClose={5000} hideProgressBar={false} newestOnTop closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme={"light"} />
    </Fragment>
  );
}
