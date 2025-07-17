import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { chatIcons_1, chatIcons_2, chatItems } from "../constants";
import { IoIosArrowBack } from "react-icons/io";
import vector from "/images/chatItems/vector.svg";
import vector1 from "/images/chatItems/vector1.svg";
import { IoMdClose } from "react-icons/io";
import chatIcons_icon3 from "/images/chatItems/icon3.svg";
import chatIcons_icon4 from "/images/chatItems/icon4.svg";
import chatIcons_icon1 from "/images/chatItems/icon1.svg";
import clsx from "clsx";

const Chat = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <section className="fixed top-0 right-0 z-40">
      <div
        className={clsx(
          "relative z-40 h-screen shadow-[-4px_0_10px_rgba(0,0,0,0.1)]",
          isOpen ? "w-[300px]" : "lg:w-[64px] w-0"
        )}
      >
        <div className="relative z-40 flex flex-col items-center justify-between h-full py-[24px] px-[12px] bg-gray-100">
          <div
            className={clsx("flex flex-col gap-[16px]", isOpen ? "hidden" : "")}
          >
            {/* chatIcons_1 */}
            <div className="flex flex-col gap-[12px]">
              {chatIcons_1.map((chatIcon, index) => (
                <div
                  key={index}
                  className="bg-blue01/10 hover:bg-blue01/30 transition-colors duration-300 p-[8px] rounded-[12px] cursor-pointer"
                >
                  <img src={chatIcon.imgPath} className="w-[25px]" alt="" />
                </div>
              ))}
            </div>
            <div className="w-full h-[2px] bg-black/10" />
            {/* chatItems */}
            <div className="flex flex-col gap-[16px] overflow-hidden">
              {chatItems.map((chatItem, index) => (
                <div
                  key={index}
                  className="rounded-[12px] overflow-hidden hover:scale-110 transform transition-transform duration-300 cursor-pointer"
                >
                  <img src={chatItem.imgPath} alt="" />
                </div>
              ))}
            </div>
            {/* chatIcons_2 */}
            <div className="flex flex-col gap-[12px]">
              <div className="w-full h-[1px] bg-black/10" />
              {chatIcons_2.map((chatIcon, index) => (
                <div
                  key={index}
                  className="bg-blue01/10 hover:bg-blue01/30 transition-colors duration-300 cursor-pointer p-[8px] rounded-[12px]"
                >
                  <img src={chatIcon.imgPath} className="w-[25px]" alt="" />
                </div>
              ))}
            </div>
          </div>
          {/* menu */}
          {isOpen && (
            <div className="flex flex-col gap-[14px]">
              <div className="flex flex-col gap-[16px]">
                <div className="flex items-center gap-[15px]">
                  <img src={chatIcons_icon1} className="w-[25px]" alt="" />
                  <h2 className="text-[16px] font-medium text-grey02">
                    Профиль
                  </h2>
                </div>
                <div className="flex items-center gap-[15px]">
                  <CiSearch className="size-[25px] text-grey01/50" />
                  <input
                    type="text"
                    placeholder="Поиск..."
                    className=" text-[14px] font-normal text-black placeholder:text-[14px] placeholder:font-normal placeholder:text-grey01/40 p-[10px] rounded-[12px] "
                  />
                </div>
              </div>
              <div className="w-full h-[1px] bg-grey01/50" />
              <div className="flex flex-col gap-[20px] ">
                {chatItems.map((item, index) => (
                  <div key={index}>
                    <div
                      className={clsx(
                        "flex items-center justify-between gap-[16px]",
                        index > 8 ? "hidden" : ""
                      )}
                    >
                      <img
                        src={item.imgPath}
                        className="rounded-[12px] overflow-hidden hover:scale-110 transform transition-transform duration-300 cursor-pointer"
                        alt=""
                      />
                      <div className="flex flex-col gap-[4px]">
                        <h2 className="text-[16px] text-blue02 font-medium">
                          {item.name}
                        </h2>
                        <p className="text-[14px] text-grey01 font-normal">
                          {item.text}
                        </p>
                      </div>
                      <div className="flex flex-col items-end justify-end gap-[4px]">
                        <p className="text-[14px] text-grey01/60 font-normal">
                          {item.time}
                        </p>
                        <div className="flex items-center justify-end">
                          <div className="bg-red01 px-[4px] rounded-[6px] text-white text-[10px]">
                            {item.message}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="w-full h-[1px] bg-grey01/50" />
              <div className="flex flex-col gap-[16px]">
                <div className="flex items-center gap-[15px]">
                  <img src={chatIcons_icon3} className="w-[25px]" alt="" />
                  <h2 className="text-[16px] font-medium text-grey01">
                    Профиль
                  </h2>
                </div>
                <div className="flex items-center gap-[15px]">
                  <img src={chatIcons_icon4} className="w-[25px]" alt="" />
                  <h2 className="text-[16px] font-medium text-grey01">
                    Профиль
                  </h2>
                </div>
              </div>
            </div>
          )}
        </div>
        <div
          className={clsx(
            "fixed z-10 -right-10 lg:right-7",
            isOpen ? "top-0 right-[260px] lg:right-[260px]" : "top-1/2 -translate-y-1/2"
          )}
        >
          <div className="relative z-10">
            <button onClick={toggleMenu}>
              {isOpen ? (
                <IoMdClose className="absolute top-1/2 left-2 -translate-y-1/2 text-white z-20" />
              ) : (
                <IoIosArrowBack className="absolute top-1/2 left-2 -translate-y-1/2 text-blue01 z-20" />
              )}
              {isOpen ? (
                <img src={vector1} className="relative z-10" alt="" />
              ) : (
                <img src={vector} className="relative z-10" alt="" />
              )}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Chat;
