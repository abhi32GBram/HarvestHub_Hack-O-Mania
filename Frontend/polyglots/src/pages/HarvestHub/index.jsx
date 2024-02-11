import React from "react";

import HarvestHubButton from "@/components/HarvestHubButton";
import HarvestHubFooter02 from "@/components/HarvestHubFooter02";
import { Button, Text } from "@/components";

const HarvestHubPage = () => {
  return (
    <>
      <div className=" bg-black-900">
        <div className="flex flex-col font-inter items-center justify-end mx-auto w-full">
          <div className="md:h-[1642px] h-[2277px] md:px-5 relative w-full md:w-full">
            <div className="bg-black-900 flex flex-col gap-[9px] md:h-auto h-full items-center justify-start m-auto max-w-[1440px] w-full">
              <img
                className="h-12 sm:h-auto object-cover w-full md:w-full"
                src="images/Banner.png"
                alt="bannerOne"
              />
              <div className="relative w-full">
                <div
                  className="bg-cover bg-no-repeat flex flex-col h-[900px] justify-end m-auto pt-[86px] md:px-10 sm:px-5 px-[86px] w-full"
                  style={{ backgroundImage: "url('images/img_background.png')" }}>
                  <img
                    className="h-[51px] md:h-auto md:ml-[0] ml-[65px] mt-[147px] object-cover"
                    src="images/img_something1.png"
                    alt="somethingOne"
                  />
                  <a href="/login" className="md:h-[203px] h-[239px] md:ml-[0] ml-[279px] mr-[189px] relative w-[64%] md:w-full">
                    <HarvestHubButton className="absolute bg-green-A200_a3 border border-solid bottom-[0] flex flex-row items-center justify-center left-[38%] p-3 rounded-[12px] w-auto white_A700_7a_white_A700_3d_border2" />
                    <img
                      className="absolute h-[203px] inset-x-[0] mx-auto top-[0]"
                      src="images/img_headingbadge.svg"
                      alt="headingbadge"
                    />
                  </a>
                  <img
                    className="h-[364px] sm:h-auto md:ml-[0] ml-[249px] mr-[229px] mt-[13px] object-cover w-[63%] md:w-full"
                    src="images/img_logoprism1.png"
                    alt="logoprismOne"
                  />
                </div>
                <header className="absolute flex md:flex-col flex-row md:gap-5 inset-x-[0] items-center justify-center mx-auto top-[0] w-full">
                  <img
                    className="h-16 mb-1 md:ml-[0] ml-[34px] md:mt-0 mt-3 w-16"
                    src="images/img_logoprism.svg"
                    alt="mainlogohhregis"
                  />
                  <ul className="flex sm:flex-1 w-full sm:flex-col flex-row gap-12 sm:hidden items-center justify-start mb-6 md:ml-[0] ml-[92px] md:mt-0 mt-8  sm:w-full common-row-list">
                    <li>
                      <a
                        href="/Home"
                        className="text-gray-200 text-lg tracking-[-0.25px]"
                      >
                        <Text size="txtInterMedium18">Home</Text>
                      </a>
                    </li>
                    <li>
                      <a
                        href="/AboutUs"
                        className="text-gray-200 text-lg tracking-[-0.25px]"
                      >
                        <Text size="txtInterMedium18">About Us</Text>
                      </a>
                    </li>
                    <li>
                      <a
                        href="Solutions"
                        className="text-gray-200 text-lg tracking-[-0.25px]"
                      >
                        <Text size="txtInterMedium18">Solutions</Text>
                      </a>
                    </li>
                    <li>
                      <a
                        href="/Resources"
                        className="text-gray-200 text-lg tracking-[-0.25px]"
                      >
                        <Text size="txtInterMedium18">Resources</Text>
                      </a>
                    </li>
                  </ul>
                  <div className="flex md:flex-col flex-row gap-2 items-start justify-start md:ml-[0] ml-[547px] mr-[29px] md:mt-0 my-4 w-auto">
                    <a href="/login">
                      <Button
                        className="cursor-pointer border border-solid flex items-center justify-center min-w-[103px] text-green-600"
                      >
                        <div className="font-medium text-left text-lg tracking-[-0.25px]">
                          Login
                        </div>
                      </Button>
                    </a>
                    <a href="/register">
                      <Button
                        className="border border-solid cursor-pointer flex items-center justify-center min-w-[122px] text-green-A700"
                        rightIcon={<img className="h-6" src="images/img_arrowright.svg" alt="arrow_right" />}>
                        <div className="font-medium text-left text-lg tracking-[-0.25px] white_A700_72_white_A700_33_border">
                          Sign Up
                        </div>
                      </Button>
                    </a>
                  </div>
                </header>
              </div>
              <img
                className="h-[712px] w-[1440px]"
                src="images/img_featuresflowbaseco.svg"
                alt="featuresflowbas"
              />
            </div>
            <HarvestHubFooter02 className="absolute bottom-[0] flex flex-col font-manrope inset-x-[0] items-center justify-start mx-auto w-full" />
          </div>
        </div>
      </div>
    </>
  );
};

export default HarvestHubPage;
