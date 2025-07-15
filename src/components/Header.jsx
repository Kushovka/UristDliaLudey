import { CiSearch } from "react-icons/ci";
import { IoIosArrowDown } from "react-icons/io";

import icon1 from "/images/headerItems/icon1.svg";
import img1 from "/images/headerItems/img1.png";

const Header = () => {
  return (
    <section>
      <div className="flex items-center justify-between pl-[256px] pr-[104px] py-[28px]">
        <div className="relative w-full max-w-[180px]">
          <input
            type="text"
            placeholder="Поиск..."
            className="relative text-[14px] font-normal text-black placeholder:text-[14px] placeholder:font-normal placeholder:text-grey01/50 p-[10px] rounded-[12px] shadow-md"
          />

          <CiSearch className="absolute top-1/2 -translate-y-1/2 right-2 size-[20px] text-grey01/50" />
        </div>
        <div className="flex items-center gap-[10px] ">
          <img src={icon1} alt="icon" className="cursor-pointer" />
          <img
            src={img1}
            className="rounded-[12px] overflow-hidden cursor-pointer"
            alt="img"
          />
          <div className="flex items-center justify-center gap-[5px] group">
            <h1 className="text-[14px] font-medium text-blue02 cursor-pointer">
              Иванов Иван
            </h1>
            <IoIosArrowDown className="size-[18px] text-grey01 group-hover:text-blue02 transition-colors duration-300 cursor-pointer" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
