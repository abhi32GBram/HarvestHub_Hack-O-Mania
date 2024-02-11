import React from "react";

import { Img, Line, List, Text } from "@/components";

const HarvestHubFooter02 = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="absolute bg-black-900 h-[540px] inset-[0] m-auto w-full"></div>
        <div className="absolute flex flex-col md:gap-10 gap-[66px] h-max inset-[0] items-center justify-center m-auto md:px-10 sm:px-5 px-[140px] py-[60px] w-auto md:w-full">
          <div className="flex flex-col items-start justify-start w-full">
            <div className="flex md:flex-col flex-row md:gap-10 gap-[158px] items-start justify-between w-auto">
              <div className="flex flex-col gap-3 items-start justify-start w-auto">
                <Text
                  className="text-2xl md:text-[22px] text-center text-light_green-A700 sm:text-xl tracking-[2.40px] w-auto"
                  size="txtManropeSemiBold24"
                >
                  {props?.documentationtitle}
                </Text>
                <Text
                  className="text-base text-center text-white-A700 w-auto"
                  size="txtManropeMedium16"
                >
                  Getting Started
                </Text>
                <Text
                  className="text-base text-center text-gray-100_01 w-auto"
                  size="txtMontserratRomanMedium16"
                >
                  {props?.foldermanagement}
                </Text>
                <Text
                  className="text-base text-center text-gray-100_01 w-auto"
                  size="txtManropeMedium16Gray10001"
                >
                  {props?.dataentryuploads}
                </Text>
              </div>
              <List
                className="sm:flex-col flex-row md:gap-10 gap-[158px] grid md:grid-cols-1 grid-cols-2 w-[64%] md:w-full"
                orientation="horizontal"
              >
                <div className="flex flex-col gap-3 items-start justify-start w-auto">
                  {props?.communityforum}
                  <Text
                    className="text-base text-center text-white-A700 w-auto"
                    size="txtManropeMedium16"
                  >
                    {props?.faqs}
                  </Text>
                  <Text
                    className="text-base text-center text-white-A700 w-auto"
                    size="txtManropeMedium16"
                  >
                    {props?.regionaldiscussions}
                  </Text>
                  <Text
                    className="text-base text-center text-white-A700 w-auto"
                    size="txtManropeMedium16"
                  >
                    {props?.discussionboard}
                  </Text>
                </div>
                <div className="flex flex-col gap-3 items-start justify-start w-auto">
                  <Text
                    className="text-2xl md:text-[22px] text-center text-light_green-A700 sm:text-xl tracking-[2.40px] w-auto"
                    size="txtManropeSemiBold24"
                  >
                    {props?.farmerinterfacetitle}
                  </Text>
                  <Text
                    className="text-base text-center text-white-A700_01"
                    size="txtManropeMedium16WhiteA70001"
                  >
                    {props?.farmingtips}
                  </Text>
                  <Text
                    className="text-base text-center text-white-A700_01 w-auto"
                    size="txtManropeMedium16WhiteA70001"
                  >
                    {props?.sustainablepractices}
                  </Text>
                  <Text
                    className="text-base text-center text-white-A700_01 w-auto"
                    size="txtManropeMedium16WhiteA70001"
                  >
                    {props?.localmeetups}
                  </Text>
                </div>
              </List>
            </div>
          </div>
          <div className="flex flex-col gap-[21px] items-start justify-start w-full">
            <Img
              className="h-12 md:h-auto object-cover"
              src="images/img_arch1.png"
              alt="archOne"
            />
            <Line className="bg-green-800 h-px w-full" />
            <div className="flex flex-col gap-[21px] items-start justify-start w-full">
              {props?.copyright}
              <Line className="bg-green-600 h-px w-full" />
            </div>
            <div className="flex flex-col items-center justify-start w-auto">
              <div className="flex flex-row gap-[23px] items-center justify-start w-auto">
                <Img
                  className="h-[15px] w-[15px]"
                  src="images/img_facebook.svg"
                  alt="facebook"
                />
                <Img
                  className="h-[15px] w-[15px]"
                  src="images/img_info.svg"
                  alt="info"
                />
                <Img
                  className="h-6 w-6"
                  src="images/img_filllogostwitterfill.svg"
                  alt="filllogostwitte"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

HarvestHubFooter02.defaultProps = {
  documentationtitle: "DOCUMENTATION",
  gettingstarted: "Getting Started",
  foldermanagement: "Folder Management",
  dataentryuploads: "Data Entry & Uploads",
  communityforum: (
    <Text
      className="text-center text-light_green-A700 text-xl tracking-[2.00px] w-auto"
      size="txtManropeSemiBold20"
    >
      <span className="md:text-[22px] sm:text-xl text-light_green-A700 font-manrope text-2xl font-semibold">
        COMMUNITY
      </span>
      <span className="text-light_green-A700 font-manrope font-semibold">
        {" "}
      </span>
      <span className="md:text-[22px] sm:text-xl text-light_green-A700 font-manrope text-2xl font-semibold">
        FORUM
      </span>
      <span className="text-light_green-A700 font-manrope font-semibold">
        {" "}
      </span>
    </Text>
  ),
  faqs: "FAQ ",
  regionaldiscussions: "Regional Discussions",
  discussionboard: "Discussion Board ",
  farmerinterfacetitle: "FARMER INTERFACE",
  sustainablepractices: "Sustainable Practices",
  localmeetups: "Local Meetups",
  copyright: (
    <Text
      className="text-[15px] text-indigo-200 w-auto"
      size="txtMontserratRomanMedium15"
    >
      <span className="text-indigo-200 font-montserrat text-left font-medium">
        © 2024 ·{" "}
      </span>
      <span className="text-indigo-200 font-montserrat text-left font-medium">
        +91-912X-XXXX{" "}
      </span>
    </Text>
  ),
};

export default HarvestHubFooter02;
