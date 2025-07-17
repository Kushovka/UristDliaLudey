import clsx from "clsx";

import { navItems, navItems_faq } from "../constants";


const Navigation = () => {

  return (
    <nav className="fixed md:flex hidden w-[225px] shadow-[4px_0_10px_rgba(0,0,0,0.1)] h-screen">
      <div className="flex flex-col items-center justify-between h-full py-[24px] px-[36px] gap-[35px]">
        <div className="flex flex-col gap-[35px]">
          <h1 className="text-[26px] font-medium text-blue01 text-center cursor-pointer">
            Sky
            <span className="text-[26px] font-semibold text-grey01">Net</span>
          </h1>
          <div className="flex flex-col gap-[30px]">
            {navItems.map((item, index) => (
              <div
                key={index}
                className={clsx(
                  "flex items-center gap-[12px]",
                  index === 0 ? "border-r-[4px] border-blue01" : ""
                )}
              >
                <img src={item.imgPath} alt="icon" className="cursor-pointer" />

                <h1
                  className={clsx(
                    "text-[16px] font-semibold cursor-pointer",
                    index === 0 ? "text-blue02" : "text-grey01"
                  )}
                >
                  {item.name}
                </h1>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-[30px]">
          {navItems_faq.map((item_faq, index) => (
            <div key={index} className="flex items-center gap-[12px]">
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
    </nav>
  );
};

export default Navigation;
