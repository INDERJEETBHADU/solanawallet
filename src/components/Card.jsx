import React from "react";
import arc from "../assests/images/polis.svg";
import pint from "../assests/images/Crypto.svg";
import dollar from "../assests/images/usdc.svg";

function Card() {
  return (
    <>
      <section className=" bg-black">
        <div className="container">
          <p className="  font-bold text-[16px] leading-[28px] text-white ">
            Percentage to withdraw:
          </p>
          <div className=" max-w-[688px] w-full py-[14px] rounded-[12px] border-[1px] mt-[16px] bg-[#1A1F28] border-[#3C465D] ">
            <div className=" flex justify-between px-[16px] ">
              <div className=" flex items-center gap-[10px] ">
                <img src={arc} alt="arc" />
                <h3 className="   font-medium text-[16px]  leading-[28px] text-white ">
                  arcPYTH-USDC
                </h3>
              </div>

              <input
                type="text"
                className=" font-medium text-[20px] leading-[32px] text-[#A1ADC4] bg-[transparent] text-right outline-none border-none"
                placeholder="0.00"
              />
            </div>
          </div>
          <div className=" flex  max-w-[688px] w-full mt-[10px]   items-center justify-between">
            <p className=" font-medium  text-[12px] leading-[16px] tracking-[0.2px] text-white ">
              <span className=" text-[#63779C] ">Pool deposit:</span> $24,117.40
            </p>
            <div className=" flex  items-cente r gap-[8px]">
              <div className=" max-w-[41px] w-full py-[2px] px-[6px] h-[22px]   rounded-[6px]  flex items-center justify-center bg-[#323B4D] ">
                <p className=" font-medium   text-[11px] leading-[20px] text-[#C6C8CD] ">
                  25%
                </p>
              </div>
              <div className=" max-w-[41px] h-[22px] w-full py-[2px] px-[6px]   rounded-[6px]  flex items-center justify-center bg-[#323B4D] ">
                <p className=" font-medium   text-[11px] leading-[20px] text-[#C6C8CD] ">
                  50%
                </p>
              </div>
              <div className=" max-w-[41px] h-[22px] w-full py-[2px] px-[6px]  rounded-[6px]  flex items-center justify-center bg-[#323B4D] ">
                <p className=" font-medium   text-[11px] leading-[20px] text-[#C6C8CD] ">
                  75%
                </p>
              </div>
              <div className=" max-w-[41px] h-[22px] w-full py-[2px] px-[6px]  rounded-[6px]  flex items-center justify-center bg-[#323B4D] ">
                <p className=" font-medium   text-[11px] leading-[20px] text-[#C6C8CD] ">
                  100%
                </p>
              </div>
            </div>
          </div>
          <h6 className=" font-normal text-[14px]  leading-[28px] text-[#FFFFFF] mt-[17px] ">
            You receive
          </h6>
          <div className=" bg-[#282F3E] mt-[8px] max-w-[688px] w-full rounded-[12px] p-[16px] ">
            <div className=" flex  items-center justify-between">
              <div className="bg-[#384257] max-w-[193px]  w-full  rounded-[8px] p-[6px_12px] ">
                <div className=" flex items-center gap-[8px]">
                  <img src={pint} alt="pint" />
                  <div className=" flex items-center gap-[6px]">
                    <p className="  font-bold text-[16px] leading-[28px] text-white">
                      0.000000
                    </p>
                    <p className="  font-normal text-[16px] leading-[28px] text-white">
                      PYTH
                    </p>
                  </div>
                </div>
              </div>
              <div className="">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.9 5.70005C12.9 5.20299 12.4971 4.80005 12 4.80005C11.503 4.80005 11.1 5.20299 11.1 5.70005V11.1H5.70005C5.20299 11.1 4.80005 11.503 4.80005 12C4.80005 12.4971 5.20299 12.9 5.70005 12.9L11.1 12.9001V18.3C11.1 18.7971 11.503 19.2 12 19.2C12.4971 19.2 12.9 18.7971 12.9 18.3V12.9001H18.3C18.7971 12.9001 19.2 12.4971 19.2 12C19.2 11.503 18.7971 11.1 18.3 11.1H12.9V5.70005Z"
                    fill="#A1ADC4"
                  />
                </svg>
              </div>
              <div className="bg-[#384257] max-w-[193px]  w-full  rounded-[8px] p-[6px_12px] ">
                <div className=" flex items-center gap-[8px]">
                  <img src={dollar} alt="pint" />
                  <div className=" flex items-center gap-[6px]">
                    <p className="  font-bold text-[16px] leading-[28px] text-white">
                      0.000000
                    </p>
                    <p className="  font-normal text-[16px] leading-[28px] text-white">
                      USDC
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Card;
