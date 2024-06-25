import React, { Fragment, useEffect, useState } from "react";
import { getData } from "@/utils/getData";
import BlogSection from "../../home/corporate/Blog";
import HorizontalBlogSection from "./HorizontalBlog";

const BodyContent = () => {
  const [value, setValue] = useState();

  useEffect(() => {
    getData(`/api/property`)
      .then((res) => {
        setValue(res.data);
      })
      .catch((error) => console.log("Error", error));
  }, []);

  return (
    <Fragment>
      <HorizontalBlogSection />
      <BlogSection value={value?.LatestBlogInCorporate} />
    </Fragment>
  );
};

export default BodyContent;
