import React from "react";

import { Button, Input, Text } from "@/src_register/components";

const SignUpPage = () => {
  return (
    <>
      <div className="bg-black-900 flex flex-col font-inter items-center justify-start mx-auto w-full">
        <div className="flex md:flex-col flex-row md:gap-5 items-center justify-evenly max-w-[1387px] mx-auto md:px-5 w-full">
          <img
            className="md:flex-1 h-[1024px] sm:h-auto object-cover w-[55%] md:w-full"
            src="/register_public/images/img_imagesidebar.png"
            alt="imagesidebar"
          />
          <div className="flex md:flex-1 flex-col items-start justify-start w-[46%] md:w-full">
            <img
              className="h-[129px] w-[129px]"
              src="/register_public/images/img_mainlogohhregister.svg"
              alt="mainlogohhregis"
            />
            <img
              className="h-[31px] md:h-auto mt-[26px] object-cover"
              src="/register_public/images/img_registerwithh.png"
              alt="registerwithh"
            />
            <div className="flex flex-col items-center justify-start md:ml-[0] ml-[13px] mt-[46px] w-[93%] md:w-full">
              <div className="flex flex-col gap-2 items-start justify-start mt-[5px] w-[583px] sm:w-full">
                <Text className="text-base text-green-600 w-auto" size="txtInterSemiBold16">
                  Select Role
                </Text>
                <select
                  name="role" className="p-0 placeholder:text-gray-600 bg-green-700 rounded-md text-white-A700 text-base text-center w-full mb-3" wrapClassName="w-full">
                  <option value="">Select...</option>
                  <option value="admin">Admin</option>
                  <option value="farmer">Farmer</option>
                </select>
              </div>
              <div className="flex flex-col gap-2 items-start justify-start w-[583px] sm:w-full">
                <Text className="text-base text-green-600 w-auto" size="txtInterSemiBold16">
                  Name
                </Text>
                <Input name="name" placeholder="John Doe" className="p-0 placeholder:text-gray-600 text-base text-left w-full" wrapClassName="w-full" type="email">

                </Input>
              </div>
              <div className="flex flex-col gap-2 items-start justify-start mt-3.5 w-[583px] sm:w-full">
                <Text
                  className="text-base text-green-600 w-auto"
                  size="txtInterSemiBold16"
                >
                  Username
                </Text>
                <Input
                  name="username"
                  placeholder="kissam_xyz"
                  className="p-0 placeholder:text-gray-600 text-base text-left w-full"
                  wrapClassName="w-full"
                  size="xs"
                ></Input>
              </div>
              <div className="flex flex-col gap-2 items-start justify-start mt-[15px] w-[583px] sm:w-full">
                <Text className="text-base text-green-600 w-auto" size="txtInterSemiBold16">
                  Password
                </Text>
                <Input
                  name="password"
                  placeholder="*******"
                  className="p-0 placeholder:text-gray-600 text-base text-left w-full"
                  wrapClassName="w-full"
                  type="password"
                ></Input>
              </div>
              <div className="flex flex-col gap-2 items-start justify-start mt-[9px] w-[583px] sm:w-full">
                <Text className="text-base text-green-600 w-auto" size="txtInterSemiBold16">
                  Contact Number
                </Text>
                <Input
                  name="contact number"
                  placeholder="+XX XXXXX-XXXXX"
                  className="p-0 placeholder:text-gray-600 text-base text-left w-full"
                  wrapClassName="w-full"

                ></Input>
              </div>
              <div className="flex flex-col gap-2 items-start justify-start mt-[9px] w-[583px] sm:w-full">
                <Text className="text-base text-green-600 w-auto" size="txtInterSemiBold16">
                  Region
                </Text>
                <Input
                  name="region"
                  placeholder="Pune"
                  className="p-0 placeholder:text-gray-600 text-base text-left w-full"
                  wrapClassName="w-full"

                ></Input>
              </div>

              <Button
                className="cursor-pointer font-semibold mt-[35px] text-base text-center w-[583px]"
                size="sm"
              >
                Register
              </Button>
            </div>
            <div className="border border-gray-400 border-solid flex flex-col gap-3.5 justify-start mt-5 p-3 rounded-[5px] w-full">
              <Text className="md:ml-[0] ml-[px] text-center text-gray-500 text-lg" size="txtInterRegular18">
                Login with your Credentials
              </Text>
              <a href="/login">
                <Button className="cursor-pointer font-semibold h-[38px] mb-2 md:ml-[0] ml-[45px] mr-[42px] text-base text-center w-[514px]"
                  color="green_900_01">
                  Login{" "}
                </Button>
              </a>
            </div>
            <div className="flex flex-row sm:gap-10 items-center justify-between md:ml-[0] ml-[9px] mt-[11px] w-[98%] md:w-full">
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

export default SignUpPage;
