import { chatIcons_1, chatIcons_2, chatItems } from "../constants";

const Chat = () => {
  return (
    <section className="fixed top-0 right-0 max-w-[64px] h-screen bg-gray-100 shadow-[-4px_0_10px_rgba(0,0,0,0.1)]">
      <div className="flex flex-col items-center justify-between h-full py-[24px] px-[12px]">
        <div className="flex flex-col gap-[16px]">
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
    </section>
  );
};

export default Chat;
