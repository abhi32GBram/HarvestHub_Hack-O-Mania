import React from "react";

import { Img, Text } from "@/components";

const HarvestHubButton = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col items-center justify-center px-1 w-auto">
          <Text
            className="text-gray-200 text-lg tracking-[-0.25px] w-auto"
            size="txtInterMedium18"
          >
            Get Started
          </Text>
        </div>
        <Img
          className="h-6 w-6"
          src="images/img_arrowright.svg"
          alt="arrowright"
        />
      </div>
    </>
  );
};


export default HarvestHubButton;
