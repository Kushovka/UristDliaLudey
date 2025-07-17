import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { RiMenu2Fill } from "react-icons/ri";
import { IoMdClose } from "react-icons/io";
import { motion } from "framer-motion";
import clsx from "clsx";
import icon1 from "/images/headerItems/icon1.svg";
import img1 from "/images/headerItems/img1.png";
import dopIcon1 from "/images/headerItems/dopIcon1.svg";
import dopIcon2 from "/images/headerItems/dopIcon2.svg";
import dopIcon3 from "/images/headerItems/dopIcon3.svg";
import dopIcon4 from "/images/headerItems/dopIcon4.svg";
import icon from "/images/notifyItems/icon.svg";
import { navItems, navItems_faq, notifyItems } from "../constants";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenCom, setIsOpenCom] = useState(false);
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  return (
    <section className="flex justify-center">
      <div className="flex w-full max-w-[1240px] md:max-w-full items-center justify-between md:pl-[256px] md:pr-[104px] py-[18px] px-[30px] relative">
        <div className="relative hidden md:block max-w-[180px] w-full">
          <input
            type="text"
            placeholder="Поиск..."
            className="w-full text-[14px] font-normal text-black placeholder:text-grey01/50 p-[10px] rounded-[12px] shadow-md"
          />
          <CiSearch className="absolute top-1/2 -translate-y-1/2 right-2 size-[20px] text-grey01/50" />
        </div>

        <div className="flex md:hidden items-center gap-[12px]">
          <button
            onClick={() => setIsOpenMenu(!isOpenMenu)}
            className="relative z-40"
          >
            <RiMenu2Fill className="cursor-pointer text-[22px]" />
          </button>
          <h1 className="text-[26px] font-medium text-blue01 cursor-pointer">
            Sky<span className="font-semibold text-grey01">Net</span>
          </h1>
        </div>

        <div className="flex items-center gap-[10px] relative">
          <button onClick={() => setIsOpenCom(!isOpenCom)}>
            <img src={icon1} alt="icon" className="cursor-pointer" />
          </button>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center gap-[10px] group"
          >
            <img
              src={img1}
              className="rounded-[12px] overflow-hidden cursor-pointer"
              alt="avatar"
            />
            <h1 className="text-[14px] font-medium text-blue02 cursor-pointer md:block hidden">
              Иванов Иван
            </h1>
            {isOpen ? (
              <IoIosArrowUp className="size-[18px] text-grey01 group-hover:text-blue02 transition-colors duration-300" />
            ) : (
              <IoIosArrowDown className="size-[18px] text-grey01 group-hover:text-blue02 transition-colors duration-300" />
            )}
          </button>

          {isOpen && (
            <div className="absolute w-[230px] top-[calc(100%+10px)] right-0 z-20 bg-white p-[20px] rounded-[12px] shadow-[0_0_10px_rgba(0,0,0,0.4)] flex  flex-col gap-[16px]">
              <div className="absolute -top-2 right-6 w-0 h-0 border-l-[8px] border-r-[8px] border-b-[8px] border-l-transparent border-r-transparent border-b-white"></div>
              <div className="flex items-center gap-[16px]">
                <img
                  src={img1}
                  className="md:w-[70px] w-[50px] rounded-[12px]"
                  alt="avatar"
                />
                <div>
                  <h1 className="md:text-[18px] text-[16px] text-blue02 font-semibold">
                    Иванов Иван
                  </h1>
                  <p className="md:text-[14px] text-[12px] text-grey01 font-normal">
                    IvanovIvan@mail.ru
                  </p>
                </div>
              </div>
              <div className="w-full h-[1px] bg-grey01/50" />
              <div className="flex flex-col gap-[15px]">
                <div className="flex gap-[12px]">
                  <img src={dopIcon1} alt="" />
                  <h2>Профиль</h2>
                </div>
                <div className="flex gap-[12px]">
                  <img src={dopIcon2} alt="" />
                  <h2>История действий</h2>
                </div>
                <div className="flex gap-[12px]">
                  <img src={dopIcon3} alt="" />
                  <h2>Настройки</h2>
                </div>
              </div>
              <div className="w-full h-[1px] bg-grey01/50" />
              <div className="flex gap-[12px]">
                <img src={dopIcon4} alt="" />
                <h2>Поддержка</h2>
              </div>
            </div>
          )}

          {isOpenCom && (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="absolute w-[300px] top-[calc(100%+10px)] right-0 z-40 bg-gray-100 flex flex-col shadow-[0_4px_10px_rgba(0,0,0,0.2)] rounded-[12px] p-[24px] pb-[47px] gap-[24px]"
            >
              <h1 className="text-[18px] text-blue02 font-semibold">
                Уведомления
              </h1>
              <div className="flex flex-col gap-[8px]">
                {notifyItems.map((notifyItem, index) => (
                  <div key={index} className="flex flex-col gap-[8px]">
                    <div className="flex gap-[12px]">
                      <img src={icon} alt="" />
                      <h1 className="text-[14px] text-grey03 font-medium ">
                        {notifyItem.startText}{" "}
                        <span className="font-bold">{notifyItem.dopText}</span>{" "}
                        {notifyItem.endText}
                      </h1>
                    </div>
                    {index !== notifyItems.length - 1 && (
                      <div className="w-full h-[1px] bg-black/10" />
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: isOpenMenu ? 0 : "-100%" }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed top-0 left-0 bottom-0 w-[260px] bg-white z-40 flex md:hidden flex-col shadow-md"
          >
            {/* Верх: лого и крестик */}
            <div className="flex md:hidden items-center justify-between px-[16px] py-[16px] border-b border-gray-200">
              <h1 className="text-[24px] font-medium text-blue01 cursor-pointer">
                Sky<span className="font-semibold text-grey01">Net</span>
              </h1>
              <button onClick={() => setIsOpenMenu(false)}>
                <IoMdClose className="text-[24px] cursor-pointer text-grey01 hover:text-blue01 transition-colors duration-200" />
              </button>
            </div>

            {/* Основное меню */}
            <div className="flex-1 overflow-y-auto flex flex-col justify-between p-[24px] gap-[35px]">
              <div className="flex flex-col gap-[30px]">
                {navItems.map((item, index) => (
                  <div
                    key={index}
                    className={clsx(
                      "flex items-center gap-[12px]",
                      index === 0
                        ? "border-l-[4px] border-blue01 pl-[8px]"
                        : "pl-[12px]"
                    )}
                  >
                    <img
                      src={item.imgPath}
                      alt="icon"
                      className="cursor-pointer"
                    />
                    <h1
                      className={clsx(
                        "text-[16px] font-semibold cursor-pointer",
                        index === 0 ? "text-blue01" : "text-grey01"
                      )}
                    >
                      {item.name}
                    </h1>
                  </div>
                ))}
              </div>
              <div className="flex flex-col gap-[30px]">
                {navItems_faq.map((item_faq, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-[12px] pl-[12px]"
                  >
                    <img
                      src={item_faq.imgPath}
                      alt="icon"
                      className="cursor-pointer"
                    />
                    <h1 className="text-[16px] font-semibold text-grey01 cursor-pointer">
                      {item_faq.name}
                    </h1>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Header;
