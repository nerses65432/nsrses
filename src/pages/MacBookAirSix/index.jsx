import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Line, Text } from "components";

const MacBookAirSixPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-indigo-100 flex flex-col font-playfairdisplay items-center justify-end mx-auto w-full">
        <div className="md:h-[79px] h-[97px] md:px-5 relative w-full">
          <div className="absolute bg-indigo-100_01 h-[79px] inset-x-[0] mx-auto top-[0] w-full"></div>
          <div className="absolute bottom-[0] flex flex-col gap-[11px] inset-x-[0] items-center justify-start mx-auto w-auto md:w-full">
            <div className="flex flex-col items-center justify-start w-full">
              <div className="flex flex-col justify-start w-full">
                <div className="flex flex-row sm:gap-10 items-start justify-between md:ml-[0] ml-[500px] w-[59%] md:w-full">
                  <Img
                    className="h-[61px] md:h-auto object-cover"
                    src="images/img_ufgohj1.png"
                    alt="ufgohjOne"
                  />
                  <Img
                    className="h-[9px] mt-5"
                    src="images/img_menu.svg"
                    alt="menu"
                  />
                </div>
                <Line className="bg-white-A700 h-px w-full" />
              </div>
            </div>
            <Line className="bg-gray-900 border-[6px] border-gray-900_01 border-solid h-1.5 rounded-[3px] shadow-bs w-[26%]" />
          </div>
        </div>
        <div className="flex flex-col mt-20 md:px-5 relative w-[43%] sm:w-full">
          <div className="md:h-[83px] h-[97px] mx-auto w-full">
            <div className="absolute bottom-[0] h-[66px] inset-x-[0] mx-auto w-[99%] sm:w-full">
              <div className="absolute backdrop-opacity-[0.5] bg-gray-900 blur-[4.00px] border-[3px] border-indigo-50 border-solid h-11 inset-x-[0] mx-auto rounded-[22px] top-[0] w-full"></div>
              <Img
                className="absolute h-[66px] inset-y-[0] left-[0] my-auto"
                src="images/img_group2_indigo_100_02.svg"
                alt="groupTwo"
              />
            </div>
            <Img
              className="absolute bottom-[20%] h-[50px] left-[0] object-cover w-[9%]"
              src="images/img_screenshot2023_50x46.png"
              alt="screenshot2023"
            />
            <Text
              className="absolute backdrop-opacity-[0.5] blur-[4.00px] leading-[34.00px] right-[10%] text-[13px] text-black-900 text-center top-[0] w-[72%] sm:w-full"
              size="txtPlayfairDisplayRomanRegular13"
            >
              Drag Kia the Khola to ur desired time{" "}
            </Text>
          </div>
          <div className="md:h-[139px] h-[173px] ml-auto mr-[67px] mt-[-32.54px] w-[64%] z-[1]">
            <div className="absolute md:h-[171px] h-[173px] inset-[0] justify-center m-auto w-full">
              <div className="absolute flex flex-row gap-[34px] h-max inset-[0] items-center justify-between m-auto rounded-[9px] shadow-bs1 w-full">
                <div className="h-[170px] md:h-[171px] relative w-[46%]">
                  <div className="bg-indigo-50 h-[84px] m-auto rounded-[9px] w-[97%]"></div>
                  <Text
                    className="absolute h-max inset-[0] justify-center m-auto md:text-5xl text-9xl text-black-900 w-max"
                    size="txtPlayfairDisplayRomanRegular128"
                  >
                    00{" "}
                  </Text>
                </div>
                <div className="bg-indigo-50 h-[86px] my-[42px] rounded-[9px] w-[45%]"></div>
              </div>
              <Text
                className="absolute h-max inset-[0] justify-center m-auto md:text-5xl text-9xl text-black-900 w-max"
                size="txtPlayfairDisplayRomanRegular128"
              >
                :
              </Text>
            </div>
            <Text
              className="absolute h-max inset-y-[0] my-auto right-[0] md:text-5xl text-9xl text-black-900"
              size="txtPlayfairDisplayRomanRegular128"
            >
              00
            </Text>
          </div>
        </div>
        <Button
          className="common-pointer bg-blue_gray-400 border-[5px] border-black-900 border-solid cursor-pointer font-semibold min-w-[139px] mt-3 py-3 rounded-[17px] text-base text-black-900 text-center"
          onClick={() => navigate("/macbookairthree")}
        >
          reset
        </Button>
        <Img
          className="h-[179px] md:h-auto mt-[69px] object-cover w-[13%] sm:w-full"
          src="images/img_screenshot2023_179x163.png"
          alt="screenshot2023_One"
        />
        <footer className="bg-gray-900_02 flex items-center justify-center mt-[292px] md:px-5 w-full">
          <Line className="bg-black-900 h-px w-full" />
        </footer>
        <div className="flex h-[99px] justify-end md:px-5 relative w-full">
          <div className="flex flex-col h-full items-start justify-start mb-[31px] ml-auto mr-[522px] mt-auto pr-2.5 pt-2.5">
            <Text
              className="text-black-900 text-xs"
              size="txtPlayfairDisplayRomanRegular12"
            >
              study hard. achieve big.
            </Text>
          </div>
          <div className="absolute bg-indigo-200 h-[99px] inset-[0] justify-center m-auto w-full"></div>
        </div>
      </div>
    </>
  );
};

export default MacBookAirSixPage;
