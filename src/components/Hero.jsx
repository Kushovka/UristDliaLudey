import React from "react";

import { motion } from "framer-motion";
import { IoIosArrowDown } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import clsx from "clsx";

import { applicationItems, notifyItems, statItems } from "../constants";

import icon from "/images/notifyItems/icon.svg";

const Hero = () => {
  return (
    <section className="pl-[256px] pr-[96px]">
      <div className="flex justify-center gap-[32px]">
        {/* right */}
        <div>
          {/* stat */}
          <div className="flex gap-[33px] pb-[60px] ">
            {statItems.map((statItem, index) => (
              <div
                key={index}
                className="hover:scale-105 transition-all duration-300"
              >
                <motion.div
                  initial={{ opacity: 0, y: 100 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.3,
                    ease: [0, 0, 0.2, 1],
                    delay: index * 0.3,
                  }}
                  className="flex flex-col w-[286px] p-[24px] rounded-[12px] shadow-[0_4px_10px_rgba(0,0,0,0.2)]  cursor-pointer"
                >
                  <p className="text-[16px] font-medium text-grey02">
                    {statItem.title}
                  </p>
                  <h1 className="text-[28px] font-semibold text-blue02">
                    {statItem.content}
                  </h1>
                  <p
                    className={clsx(
                      "text-[14px] font-medium",
                      index === 3 ? "text-red01" : "text-green01"
                    )}
                  >
                    {statItem.progress}
                  </p>
                </motion.div>
              </div>
            ))}
          </div>

          {/* application */}
          <div className="rounded-[12px] shadow-[0_4px_10px_rgba(0,0,0,0.2)] px-[10px]">
            <div className="flex items-center justify-between mb-[20px]">
              <div className="flex items-center gap-[16px]">
                <h1 className="text-[18px] font-semibold text-black">
                  Последние заявки
                </h1>
                <div className="flex items-center gap-[4px] cursor-pointer">
                  <p className="text-[14px] text-grey01/80 font-medium">Все</p>
                  <IoIosArrowDown className="size-[18px] text-grey01" />
                </div>
              </div>
              <div className="relative max-w-[180px] w-full">
                <input
                  type="text"
                  placeholder="Поиск..."
                  className="w-full text-[14px] font-normal text-black placeholder:text-grey01/50 py-[6px] px-[8px] rounded-[12px] border border-grey01"
                />
                <CiSearch className="absolute top-1/2 -translate-y-1/2 right-2 size-[20px] text-grey01/50" />
              </div>
            </div>
            <div className="">
              <div className="flex justify-between gap-[20px] pb-[8px] border-b border-grey01/50 px-[50px]">
                <h1 className="text-[14px] font-medium text-grey01">ID</h1>
                <h1 className="text-[14px] font-medium text-grey01">Клиент</h1>
                <h1 className="text-[14px] font-medium text-grey01">Сумма</h1>
                <h1 className="text-[14px] font-medium text-grey01">Статус</h1>
                <h1 className="text-[14px] font-medium text-grey01">Дата</h1>
                <h1 className="text-[14px] font-medium text-grey01">
                  Ответственный
                </h1>
              </div>

              <div className="flex flex-col mt-[12px]">
                {applicationItems.map((item, idx) => (
                  <React.Fragment key={item.id}>
                    <div className="grid grid-cols-6 gap-[20px] items-center py-[10px] rounded-[8px] hover:bg-grey01/5 transition min-w-[100px]">
                      <h2 className="text-[16px] text-blue02 font-medium pl-[20px]">
                        {item.id}
                      </h2>
                      <h2 className="text-[16px] text-blue02 font-medium">
                        {item.client}
                      </h2>
                      <h2 className="text-[16px] text-blue02 font-medium">
                        {item.startSum}{" "}
                        <span className="text-[14px] text-grey01">
                          {item.dop1Sum}
                        </span>{" "}
                        {item.endSum}{" "}
                        <span className="text-[14px] text-grey01">
                          {item.dop2Sum}
                        </span>
                      </h2>
                      <div className="flex justify-start pl-[20px]">
                        <div
                          className="px-[8px] py-[2px] rounded-[6px] text-[12px] font-medium whitespace-nowrap text-white"
                          style={{ backgroundColor: item.statColor }}
                        >
                          {item.stat}
                        </div>
                      </div>
                      <h2 className="text-[14px] text-grey01 text-center">
                        {item.date}
                      </h2>
                      <h2 className="text-[16px] text-blue02 font-medium text-center">
                        {item.manager}
                      </h2>
                    </div>

                    {idx !== applicationItems.length - 1 && (
                      <div className="w-full h-[1px] bg-grey01/50" />
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>

          {/* result */}
          <div className="grid grid-cols-2 gap-[32px] pt-[32px]">
            {/* left */}
            <div className="hover:scale-105 transition-all duration-300">
              <motion.div
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.5,
                  ease: "easeOut",
                }}
                className="rounded-[12px] shadow-[0_4px_10px_rgba(0,0,0,0.2)] p-[24px] flex flex-col gap-[24px]  cursor-pointer"
              >
                <div>
                  <h1 className="text-[18px] text-black font-semibold">
                    Статусы заявок
                  </h1>
                </div>
                <div className="flex flex-col gap-[14px]">
                  {/* 1 */}
                  <div className="flex items-center justify-between gap-[10px]">
                    <p className="text-[16px] text-grey01 font-semibold">
                      ФИКС
                    </p>
                    <div className="flex items-center gap-[14px] w-full max-w-[400px]">
                      <div className="relative w-full h-[19px] rounded-[4px] bg-[#BFDBFE] overflow-hidden">
                        <div
                          className="absolute top-0 left-0 h-full bg-[#1E40AF] rounded-[4px]"
                          style={{ width: "40%" }}
                        ></div>
                      </div>
                      <span className="text-[14px] font-semibold text-[#1E40AF]">
                        40%
                      </span>
                    </div>
                  </div>

                  {/* 2 */}
                  <div className="flex items-center justify-between gap-[10px]">
                    <p className="text-[16px] text-grey01 font-semibold">
                      AML-OK
                    </p>
                    <div className="flex items-center gap-[14px] w-full max-w-[400px]">
                      <div className="relative w-full h-[19px] rounded-[4px] bg-[#DCFCE7] overflow-hidden">
                        <div
                          className="absolute top-0 left-0 h-full bg-[#166534] rounded-[4px]"
                          style={{ width: "25%" }}
                        ></div>
                      </div>
                      <span className="text-[14px] font-semibold text-[#166534]">
                        25%
                      </span>
                    </div>
                  </div>

                  {/* 3 */}
                  <div className="flex items-center justify-between gap-[20px]">
                    <p className="text-[16px] text-grey01 font-semibold">
                      Верификация
                    </p>
                    <div className="flex items-center gap-[14px] w-full max-w-[400px]">
                      <div className="relative w-full h-[19px] rounded-[4px] bg-[#FEF9C3] overflow-hidden">
                        <div
                          className="absolute top-0 left-0 h-full bg-[#A16207] rounded-[4px]"
                          style={{ width: "50%" }}
                        ></div>
                      </div>
                      <span className="text-[14px] font-semibold text-[#A16207]">
                        50%
                      </span>
                    </div>
                  </div>

                  {/* 4 */}
                  <div className="flex items-center justify-between gap-[20px]">
                    <p className="text-[16px] text-grey01 font-semibold">
                      Отклоненные
                    </p>
                    <div className="flex items-center gap-[14px] w-full max-w-[400px]">
                      <div className="relative w-full h-[19px] rounded-[4px] bg-[#FEE2E2] overflow-hidden">
                        <div
                          className="absolute top-0 left-0 h-full bg-[#BE123C] rounded-[4px]"
                          style={{ width: "20%" }}
                        ></div>
                      </div>
                      <span className="text-[14px] font-semibold text-[#BE123C]">
                        20%
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
            {/* rigth */}
            <div className="hover:scale-105 transition-all duration-300 ">
              <motion.div
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.5,
                  ease: "easeOut",
                }}
                className="rounded-[12px] shadow-[0_4px_10px_rgba(0,0,0,0.2)] p-[24px] flex flex-col gap-[24px] cursor-pointer"
              >
                <div>
                  <h1 className="text-[18px] text-black font-semibold">
                    Эффективность менеджеров
                  </h1>
                </div>
                <div className="flex flex-col gap-[14px]">
                  {/* 1 */}
                  <div className="flex items-center justify-between gap-[10px]">
                    <p className="text-[16px] text-grey01 font-semibold">
                      Менеджер 1
                    </p>
                    <div className="flex items-center gap-[14px] w-full max-w-[400px]">
                      <div className="relative w-full h-[19px] rounded-[4px] bg-[#3B82F6]/20 overflow-hidden">
                        <div
                          className="absolute top-0 left-0 h-full bg-[#3B82F6] rounded-[4px]"
                          style={{ width: "35%" }}
                        ></div>
                      </div>
                      <span className="text-[14px] font-semibold text-[#3B82F6]">
                        35%
                      </span>
                    </div>
                  </div>

                  {/* 2 */}
                  <div className="flex items-center justify-between gap-[10px]">
                    <p className="text-[16px] text-grey01 font-semibold">
                      Менеджер 2
                    </p>
                    <div className="flex items-center gap-[14px] w-full max-w-[400px]">
                      <div className="relative w-full h-[19px] rounded-[4px] bg-[#3B82F6]/20 overflow-hidden">
                        <div
                          className="absolute top-0 left-0 h-full bg-[#3B82F6] rounded-[4px]"
                          style={{ width: "28%" }}
                        ></div>
                      </div>
                      <span className="text-[14px] font-semibold text-[#3B82F6]">
                        28%
                      </span>
                    </div>
                  </div>

                  {/* 3 */}
                  <div className="flex items-center justify-between gap-[10px]">
                    <p className="text-[16px] text-grey01 font-semibold">
                      Менеджер 3
                    </p>
                    <div className="flex items-center gap-[14px] w-full max-w-[400px]">
                      <div className="relative w-full h-[19px] rounded-[4px] bg-[#3B82F6]/20 overflow-hidden">
                        <div
                          className="absolute top-0 left-0 h-full bg-[#3B82F6] rounded-[4px]"
                          style={{ width: "22%" }}
                        ></div>
                      </div>
                      <span className="text-[14px] font-semibold text-[#3B82F6]">
                        22%
                      </span>
                    </div>
                  </div>

                  {/* 4 */}
                  <div className="flex items-center justify-between gap-[10px]">
                    <p className="text-[16px] text-grey01 font-semibold">
                      Прочие
                    </p>
                    <div className="flex items-center gap-[14px] w-full max-w-[400px]">
                      <div className="relative w-full h-[19px] rounded-[4px] bg-[#9DA1AA]/20 overflow-hidden">
                        <div
                          className="absolute top-0 left-0 h-full bg-[#9DA1AA] rounded-[4px]"
                          style={{ width: "15%" }}
                        ></div>
                      </div>
                      <span className="text-[14px] font-semibold text-[#9DA1AA]">
                        15%
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* left */}
        <div className="flex flex-col gap-[32px]">
          {/* top */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.25,
              ease: "easeOut",
            }}
            className="flex flex-col shadow-[0_4px_10px_rgba(0,0,0,0.2)] rounded-[12px] p-[24px] gap-[24px]"
          >
            <h1 className="text-[18px] text-blue02 font-semibold">
              Быстрые действия
            </h1>
            <div className="flex flex-col gap-[16px]">
              <button className="bg-blue01 py-[12px] rounded-[8px] text-[16px] text-white font-medium px-[27px] whitespace-nowrap w-full">
                Новая верификация
              </button>
              <button className="bg-blue01/20 py-[12px] rounded-[8px] text-[16px] text-blue01 font-medium px-[27px] whitespace-nowrap w-full">
                Начать обработку
              </button>
              <button className="bg-blue01/20 py-[12px] rounded-[8px] text-[16px] text-blue01 font-medium px-[27px] whitespace-nowrap w-full">
                Проверить кошелек
              </button>
            </div>
          </motion.div>

          {/* bott */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.5,
              ease: "easeOut",
            }}
            className="flex flex-col shadow-[0_4px_10px_rgba(0,0,0,0.2)] rounded-[12px] p-[24px] pb-[47px] gap-[24px]"
          >
            <h1 className="text-[18px] text-blue02 font-semibold">
              Уведомления
            </h1>
            <div className="flex flex-col gap-[8px]">
              {notifyItems.map((notifyItem, index) => (
                <div key={index} className="flex flex-col gap-[8px]">
                  <div className="flex items-center justify-center gap-[12px]">
                    <img src={icon} alt="" />
                    <h1 className="text-[14px] text-grey03 font-medium ">
                      {notifyItem.startText}{" "}
                      <span className="text-[14px] text-grey03 font-bold">
                        {notifyItem.dopText}
                      </span>{" "}
                      {notifyItem.endText}
                    </h1>
                  </div>
                  <div
                    className={clsx(
                      "w-full h-[1px] bg-black/10",
                      index === 5 ? "hidden" : ""
                    )}
                  />
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
