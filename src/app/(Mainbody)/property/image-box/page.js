/**
 * It fetches data from the API and then passes it to the component
 * @returns The data is being returned as an array of objects.
 */
"use client";
import React, { Fragment, useEffect, useState } from "react";
import BodyContent from "@/components/property/tabPanelPages";
import NavbarFive from "@/layout/headers/NavbarFive";
import FooterThree from "@/layout/footers/FooterThree";
import ImgBox from "@/components/property/tabPanelPages/ImageBox";
import { getData } from "@/utils/getData";
import { useSearchParams } from "next/navigation";

const ImageBox = () => {
  const searchParams = useSearchParams()
  const id = searchParams.get('id')
  const [value, setValue] = useState({});

  useEffect(() => {
    getData(`/api/property`)
    .then((res) => {
      setValue(
        Object.keys(res.data)
        .map((key) => [res.data[key]])
        .flat(2)
        .filter((item) => item.id === id) 
        .pop(),
      );
    })
    .catch((error) => console.log("Error", error));
  }, [id]);
  return (
    <Fragment>
      <NavbarFive />
      <BodyContent singleData={value}>
        <ImgBox singleData={value?.img} id={id} />
      </BodyContent>
      <FooterThree />
    </Fragment>
  );
};

export default ImageBox;
