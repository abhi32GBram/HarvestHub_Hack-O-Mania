import React from "react";

import { Button, Input, Text } from "@/src_login/components";

const LoginPage = () => {
  return (
    <>
      <div className="bg-black-900 flex flex-col font-inter items-center justify-start mx-auto w-full">
        <div className="flex md:flex-col flex-row gap-7 items-center justify-between max-w-[1398px] mx-auto md:px-5 w-full">
          <img
            className="h-[1024px] md:h-auto object-cover"
            src="/login_public/images/img_imagesidebar.png"
            alt="imagesidebar"
          />
          <div className="flex flex-col  md:gap-10 gap-[66px] items-end justify-start">
            <div className="flex flex-col items-start justify-start w-[96%] md:w-full">
              <img
                className="h-[183px] w-[183px] md:ml-80"
                src="/login_public/images/img_mainlogohhregister.svg"
                alt="mainlogohhregis"
              />
              <img
                className="h-[31px] md:h-auto mt-[50px] object-cover"
                src="/login_public/images/img_vector.png"
                alt="vector"
              />
              <div className="flex flex-col items-center justify-start mt-[43px] w-full">
                <div className="flex flex-col gap-2 items-start justify-start w-[583px] sm:w-full">
                  <Text className="text-base text-green-600 w-auto" size="txtInterSemiBold16">
                    Username
                  </Text>
                  <Input
                    name="input"
                    placeholder="kissan_xyz"
                    className="p-0 placeholder:text-gray-600 text-base text-left w-full"
                    wrapClassName="w-full"
                    size="sm"
                  ></Input>
                </div>
                <div className="flex flex-col gap-2 items-start justify-start mt-6 w-[583px] sm:w-full">
                  <Text className="text-base text-green-600 w-auto" size="txtInterSemiBold16">
                    Password
                  </Text>
                  <Input
                    name="password"
                    placeholder="***********"
                    className="p-0 placeholder:text-gray-600 text-base text-left w-full"
                    wrapClassName="w-full"
                    type="password"
                  ></Input>
                </div>
                <Button className="cursor-pointer font-semibold mt-8 text-base text-center w-[583px]">
                  Log in
                </Button>
              </div>
              <div className="border border-gray-400 border-solid flex flex-col justify-start mt-[59px] p-[23px] sm:px-5 rounded-[5px] w-full">
                <Text className="mt-[7px] text-center sm:text-3xl md:text-[32px] text-[34px] text-green-100" size="txtInterSemiBold34" >
                  Sign up
                </Text>
                <Text className=" text-center ml-3.5 md:ml-[0] mr-[31px] mt-3.5 text-gray-500 text-lg" size="txtInterRegular18" >
                  Register with HarvestHub to Begin your journey
                </Text>
                <a href="/register">
                  <Button
                    className="cursor-pointer font-semibold mb-[4px] md:ml-[120px] ml-[21px] mr-[26px] mt-[39px] text-base text-center w-[479px]"
                    href="/register" // Add this line to set the navigation target
                  >
                    Create account
                  </Button>
                </a>
              </div>
            </div>
            <div className="flex flex-row sm:gap-10 items-center justify-between w-full">
              <div className="flex flex-row gap-8 items-start justify-start w-auto">
                <Text
                  className="text-gray-600_01 text-xs w-auto"
                  size="txtInterRegular12"
                >
                  Cookies
                </Text>
                <Text
                  className="text-gray-600_01 text-xs w-auto"
                  size="txtInterRegular12"
                >
                  <span className="text-gray-600_01 font-inter text-left font-normal">
                    Legal{" "}
                  </span>
                  <span className="text-gray-600_01 font-inter text-left font-normal">
                    policy
                  </span>
                </Text>
              </div>
              <div className="flex flex-col items-start justify-start w-auto">
                <Text
                  className="text-gray-600_01 text-xs w-auto"
                  size="txtInterRegular12"
                >
                  Copyright 2024
                </Text>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
