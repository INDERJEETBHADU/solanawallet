import React from "react";
import { Button, Dialog, DialogBody } from "@material-tailwind/react";
import bagpack from "../assests/images/wallet_small_box.svg";

function Modul() {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(!open);
  return (
    <>
      <Button onClick={handleOpen} variant="gradient">
        Open Dialog
      </Button>

      <Dialog open={open} handler={handleOpen}>
        <DialogBody className="    h-[100vh]  flex  flex-col">
          <div className="container flex  grow  justify-center">
            <div className="  flex items-center justify-center">
              <div className=" max-w-[364px] w-full rounded-[24px] bg-[#1E242E] h-[646px] p-[0px_32px_32px_32px] ">
                <h3 className=" ff_inter text-center mt-[24px]  font-bold text-[18px] leading-[28px] text-[white] ">
                  Connect a Solana wallet
                </h3>
                {/* three_boxes_here */}
                <div className=" flex items-center justify-ce nter gap-[15px] mt-[16px]">
                  {/* box_1 */}
                  <div className=" cursor-pointer max-w-[90px] w-full h-[88px] rounded-[16px] bg-[#28303E]  flex   items-center justify-center ">
                    {/* small_box_inside */}
                    <div className=" max-w-[40px] w-full h-[40px] rounded-[12px] bg-[#AB9FF2] flex items-center justify-center ">
                      <svg
                        width="30"
                        height="25"
                        viewBox="0 0 30 25"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M12.2321 18.8974C10.5575 21.4633 7.75154 24.7105 4.01776 24.7105C2.25273 24.7105 0.555542 23.9838 0.555542 20.8275C0.555542 12.7891 11.5306 0.345459 21.7136 0.345459C27.5067 0.345459 29.8148 4.36468 29.8148 8.92887C29.8148 14.7873 26.0131 21.486 22.2341 21.486C21.0348 21.486 20.4464 20.8275 20.4464 19.783C20.4464 19.5105 20.4917 19.2153 20.5822 18.8974C19.2923 21.1 16.8031 23.1436 14.4724 23.1436C12.7752 23.1436 11.9153 22.0764 11.9153 20.5777C11.9153 20.0328 12.0284 19.465 12.2321 18.8974ZM25.9911 8.77016C25.9911 10.1002 25.2065 10.7651 24.3287 10.7651C23.4376 10.7651 22.6662 10.1002 22.6662 8.77016C22.6662 7.4402 23.4376 6.77524 24.3287 6.77524C25.2065 6.77524 25.9911 7.4402 25.9911 8.77016ZM21.0038 8.7702C21.0038 10.1002 20.2191 10.7651 19.3413 10.7651C18.4502 10.7651 17.6789 10.1002 17.6789 8.7702C17.6789 7.4402 18.4502 6.77524 19.3413 6.77524C20.2191 6.77524 21.0038 7.4402 21.0038 8.7702Z"
                          fill="#FFFDF8"
                        />
                      </svg>
                    </div>
                  </div>
                  {/* box_2 */}
                  <div className=" cursor-pointer max-w-[90px] w-full h-[88px] rounded-[16px] bg-[#28303E]  flex   items-center justify-center ">
                    <svg
                      width="40"
                      height="40"
                      viewBox="0 0 40 40"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clip-path="url(#clip0_30_59)">
                        <path
                          d="M20.1366 38.3283C20.5566 38.3283 20.8972 38.6651 20.8972 39.0806C20.8972 39.496 20.5566 39.8327 20.1366 39.8327C19.7166 39.8327 19.3761 39.496 19.3761 39.0806C19.3761 38.6651 19.7166 38.3283 20.1366 38.3283ZM19.3104 2.3958C19.6821 2.42649 19.9822 2.70812 20.0326 3.07325L20.9371 9.64584C21.241 11.8173 23.8599 12.7582 25.4766 11.2826L34.5398 3.0333C34.7585 2.83431 35.099 2.8481 35.3004 3.0641C35.4851 3.26228 35.4907 3.56568 35.3133 3.77032L27.41 12.887C25.955 14.5623 27.0286 17.1784 29.2465 17.3652L36.2199 18.0374C36.5672 18.0709 36.8213 18.3762 36.7874 18.7194C36.7594 19.0023 36.5414 19.231 36.2571 19.2753L28.9296 20.4194C26.8022 20.7094 25.8387 23.2288 27.2225 24.8655L29.7985 27.9024C30.006 28.147 29.9735 28.5116 29.7258 28.7166C29.5161 28.8904 29.2123 28.8971 28.9948 28.7329L25.8193 26.3346C24.1056 25.0459 21.6355 26.1413 21.4544 28.2741L20.7546 36.5922C20.7257 36.9358 20.4204 37.1911 20.0726 37.1626C19.7774 37.1383 19.539 36.9148 19.499 36.6249L18.3893 28.5899C18.0919 26.4184 15.473 25.4776 13.8498 26.9532L4.20828 35.7324C4.0087 35.9141 3.69781 35.9015 3.51388 35.7044C3.34513 35.5234 3.34 35.2465 3.50194 35.0596L11.9165 25.3488C13.3714 23.6734 12.3044 21.0573 10.0864 20.8706L3.11142 20.1982C2.76412 20.1647 2.51005 19.8594 2.54394 19.5162C2.57188 19.2333 2.78985 19.0047 3.0741 18.9602L10.3968 17.8163C12.5243 17.5263 13.4942 15.007 12.1105 13.3702L10.3569 11.303C10.0995 10.9996 10.1398 10.5475 10.447 10.2933C10.7072 10.0778 11.084 10.0695 11.3537 10.2734L13.5071 11.9011C15.2208 13.1898 17.6909 12.0945 17.872 9.96168L18.4513 3.1137C18.4878 2.68106 18.8725 2.35964 19.3104 2.3958ZM0.760536 18.7475C1.18057 18.7475 1.52107 19.0843 1.52107 19.4998C1.52107 19.9152 1.18057 20.252 0.760536 20.252C0.340503 20.252 0 19.9152 0 19.4998C0 19.0843 0.340503 18.7475 0.760536 18.7475ZM38.9043 17.9838C39.3243 17.9838 39.6649 18.3206 39.6649 18.736C39.6649 19.1514 39.3243 19.4882 38.9043 19.4882C38.4843 19.4882 38.1438 19.1514 38.1438 18.736C38.1438 18.3206 38.4843 17.9838 38.9043 17.9838ZM19.2006 0C19.6206 0 19.9611 0.336778 19.9611 0.752216C19.9611 1.16766 19.6206 1.50443 19.2006 1.50443C18.7806 1.50443 18.4401 1.16766 18.4401 0.752216C18.4401 0.336778 18.7806 0 19.2006 0Z"
                          fill="url(#paint0_linear_30_59)"
                        />
                        <path
                          d="M19.6568 26.2234C23.6245 26.2234 26.841 23.0422 26.841 19.1178C26.841 15.1936 23.6245 12.0123 19.6568 12.0123C15.6891 12.0123 12.4727 15.1936 12.4727 19.1178C12.4727 23.0422 15.6891 26.2234 19.6568 26.2234Z"
                          fill="url(#paint1_radial_30_59)"
                        />
                      </g>
                      <defs>
                        <linearGradient
                          id="paint0_linear_30_59"
                          x1="5.18268"
                          y1="6.336"
                          x2="27.9286"
                          y2="26.9274"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stop-color="#FFC10B" />
                          <stop offset="1" stop-color="#FB3F2E" />
                        </linearGradient>
                        <radialGradient
                          id="paint1_radial_30_59"
                          cx="0"
                          cy="0"
                          r="1"
                          gradientUnits="userSpaceOnUse"
                          gradientTransform="translate(18.0162 16.4946) rotate(67.5196) scale(10.4448 10.5463)"
                        >
                          <stop stop-color="#FFC10B" />
                          <stop offset="1" stop-color="#FB3F2E" />
                        </radialGradient>
                        <clipPath id="clip0_30_59">
                          <rect width="40" height="40" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                  {/* box_3 */}
                  <div className=" cursor-pointer max-w-[90px] w-full h-[88px] rounded-[16px] bg-[#28303E]  flex   items-center justify-center ">
                    <img src={bagpack} alt="bagpack" />
                  </div>
                </div>
                {/* more_wallet */}
                <div className=" flex   items-center mt-[12px] gap-[9px]">
                  <h6 className="  ff_inter  font-medium text-[14px] leading-[28px] text-[#A1ADC4] ">
                    More wallets
                  </h6>
                  <svg
                    className=" cursor-pointer"
                    width="10"
                    height="6"
                    viewBox="0 0 10 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M0.21967 0.21967C0.512563 -0.0732233 0.987437 -0.0732233 1.28033 0.21967L5 3.93934L8.71967 0.219671C9.01256 -0.0732226 9.48744 -0.0732225 9.78033 0.219671C10.0732 0.512564 10.0732 0.987438 9.78033 1.28033L5.53033 5.53033C5.38968 5.67098 5.19891 5.75 5 5.75C4.80109 5.75 4.61032 5.67098 4.46967 5.53033L0.21967 1.28033C-0.0732233 0.987437 -0.0732233 0.512563 0.21967 0.21967Z"
                      fill="#A1ADC4"
                    />
                  </svg>
                </div>
                {/* line */}
                <div className="  max-w-[300px]  w-full h-[1px] bg-[linear-gradient(90deg,#202731_0%,#3C465D_50%,#202731_100%)]  my-[8px]"></div>
                <p className="  ff_inter  font-normal text-[13px] leading-[22px] text-[#A1ADC4]  ">
                  By connecting a wallet, you agree to{" "}
                  <span className=" text-[#5099CC]">
                    Arcana’s Terms and Conditions,
                  </span>{" "}
                  and confirm that you’ve read and understand the{" "}
                  <span className=" text-[#5099CC]">Risk Statement.</span>
                </p>
                {/* overflow_scroll_para */}
                <div className=" max-w-[300px] w-full no-scrollbar   h-[230px] overflow-y-scroll mt-[16px]  rounded-[16px] bg-[#242B38] px-[26px] ">
                  <p className=" ff_inter fw-normal  text-[13px] leading-[21px] text-[#D3D5D7] ">
                    Lorem ipsum dolor sit amet consectetur. Sed metus congue
                    interdum venenatis consequat tincidunt viverra mauris.
                    Praesent lectus amet ornare facilisis nisl semper facilisis
                    lectus. Venenatis nunc suspendisse massa vivamus ut leo
                    pretium pellentesque in. Cras quisque ornare auctor pulvinar
                    commodo leo. facilisis nisl semper facilisis lectus.
                    Venenatis nunc suspendisse massa vivamus ut leo pretium
                    pellentesque in. Cras quisque ornare auctor pulvinar commodo
                    leo.
                  </p>
                </div>
                {/* check_box_here */}
                <div className=" flex  items-center gap-[8px] mt-[16px]">
                  <input
                    type="checkbox"
                    className=" max-w-[24px] cursor-pointer w-full h-[24px] rounded-[8px]  border-[2px] border-[#3B4049] bg-[transparent] "
                  />
                  <p className=" ff_inter font-normal text-[12px]  leading-[21px] text-[#D2D3D5]   ">
                    I’ve read & accept the Terms and Conditions.
                  </p>
                </div>
                {/* wallet_btn */}
                <button className=" ff_inter max-w-[300px] w-full rounded-[12px] mt-[10px] py-[8px]  font-medium text-[14px] leading-[24px] text-[#72767C]    bg-[#30363F] ">
                  Connect Wallet
                </button>
              </div>
            </div>
          </div>
        </DialogBody>
      </Dialog>
    </>
  );
}

export default Modul;
