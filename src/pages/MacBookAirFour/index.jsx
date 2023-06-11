import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Line, Text } from "components";

const MacBookAirFourPage = () => {
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
        <Text
          className="mt-[89px] text-[13px] text-black-900 text-center"
          size="txtPlayfairDisplayRomanRegular13"
        >
          Drag Kia the Khola to ur desired time{" "}
        </Text>
        <div className="md:h-[177px] h-[216px] md:px-5 relative w-[43%] sm:w-full">
          <div className="absolute h-[177px] inset-x-[0] mx-auto top-[1%] w-[99%] sm:w-full">
            <div className="flex flex-col h-full items-center justify-start m-auto w-full">
              <div className="flex flex-col gap-[33px] items-center justify-start w-full">
                <div className="bg-gray-900 border-[3px] border-indigo-50 border-solid h-11 rounded-[22px] w-full"></div>
                <div className="flex flex-row gap-7 items-start justify-center w-[58%] md:w-full">
                  <div className="bg-indigo-50 h-[84px] mb-4 rounded-[9px] w-[46%]"></div>
                  <div className="bg-indigo-50 h-[100px] rounded-[9px] w-[46%]"></div>
                </div>
              </div>
            </div>
            <Img
              className="absolute h-[66px] left-[0] top-[0]"
              src="images/img_group2.svg"
              alt="groupTwo"
            />
          </div>
          <Img
            className="absolute h-[50px] left-[0] object-cover top-[0] w-[9%]"
            src="images/img_screenshot2023.png"
            alt="screenshot2023"
          />
          <Text
            className="absolute bottom-[0] right-[19%] md:text-5xl text-9xl text-black-900"
            size="txtPlayfairDisplayRomanRegular128"
          >
            02:30
          </Text>
        </div>
        <Button
          className="common-pointer bg-blue_gray-400 border-[5px] border-black-900 border-solid cursor-pointer font-semibold min-w-[139px] mt-[5px] py-3 rounded-[17px] text-base text-black-900 text-center"
          onClick={() => navigate("/macbookairfive")}
        >
          start
        </Button>
        <Img
          className="h-[179px] md:h-auto mt-[69px] object-cover w-[13%] sm:w-full"
          src="images/img_screenshot2023_1.png"
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

export default MacBookAirFourPage;
