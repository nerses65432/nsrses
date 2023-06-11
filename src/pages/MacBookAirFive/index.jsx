import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Line, Text } from "components";

const MacBookAirFivePage = () => {
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
        <div className="flex flex-col mt-[89px] md:px-5 relative w-[43%] sm:w-full">
          <div className="backdrop-opacity-[0.5] blur-[4.00px] flex flex-col justify-start mx-auto w-full">
            <Text
              className="md:ml-[0] ml-[183px] text-[13px] text-black-900 text-center"
              size="txtPlayfairDisplayRomanRegular13"
            >
              Drag Kia the Khola to ur desired time{" "}
            </Text>
            <div className="md:h-[66px] h-[69px] relative w-full">
              <div className="absolute bottom-[0] h-[66px] inset-x-[0] mx-auto w-[99%] sm:w-full">
                <div className="absolute bg-gray-900 border-[3px] border-indigo-50 border-solid h-11 inset-x-[0] mx-auto rounded-[22px] top-[0] w-full"></div>
                <Img
                  className="absolute h-[66px] inset-y-[0] left-[0] my-auto"
                  src="images/img_group2.svg"
                  alt="groupTwo"
                />
              </div>
              <Img
                className="absolute h-[50px] left-[0] object-cover top-[0] w-[9%]"
                src="images/img_screenshot2023.png"
                alt="screenshot2023"
              />
            </div>
          </div>
          <div className="flex flex-row items-start justify-center ml-auto mr-[67px] mt-[-32.54px] w-[64%] z-[1]">
            <div className="h-[127px] md:h-[86px] relative w-[46%]">
              <div className="absolute bg-indigo-50 bottom-[0] h-[84px] inset-x-[0] mx-auto rounded-[9px] shadow-bs1 w-[97%]"></div>
              <Text
                className="common-pointer absolute inset-x-[0] mx-auto shadow-bs1 md:text-5xl text-9xl text-black-900 top-[0] w-max"
                size="txtPlayfairDisplayRomanRegular128"
                onClick={() => navigate("/macbookairseven")}
              >
                00{" "}
              </Text>
            </div>
            <div className="h-[171px] md:h-[173px] mt-0.5 relative w-[55%]">
              <div className="absolute bottom-[0] flex flex-col inset-x-[0] items-center justify-start mx-auto w-[99%]">
                <div className="flex flex-row items-start justify-evenly w-full">
                  <Text
                    className="mt-[43px] shadow-bs1 md:text-5xl text-9xl text-black-900"
                    size="txtPlayfairDisplayRomanRegular128"
                  >
                    :
                  </Text>
                  <div className="bg-indigo-50 h-[86px] mb-[43px] rounded-[9px] shadow-bs1 w-[82%]"></div>
                </div>
              </div>
              <Text
                className="common-pointer absolute h-full inset-y-[0] my-auto right-[0] shadow-bs1 md:text-5xl text-9xl text-black-900"
                size="txtPlayfairDisplayRomanRegular128"
                onClick={() => navigate("/")}
              >
                00
              </Text>
            </div>
          </div>
        </div>
        <Button
          className="common-pointer bg-gray-50 border-[5px] border-black-900 border-solid cursor-pointer font-semibold min-w-[139px] mt-3 py-3 rounded-[17px] text-base text-black-900 text-center"
          onClick={() => navigate("/macbookairsix")}
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
        <div className="flex md:h-[98px] h-[99px] justify-end md:px-5 relative w-full">
          <div className="flex flex-col h-full items-start justify-start mb-[31px] ml-auto mr-[522px] mt-auto pr-2.5 pt-2.5">
            <Text
              className="text-black-900 text-xs"
              size="txtPlayfairDisplayRomanRegular12"
            >
              study hard. achieve big.
            </Text>
          </div>
          <div className="absolute bg-gray-900_03 flex flex-col h-full inset-[0] items-center justify-center m-auto p-[17px] w-full">
            <Img
              className="h-16 md:h-auto object-cover w-[6%]"
              src="images/img_fretetet1.png"
              alt="fretetetOne"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default MacBookAirFivePage;
