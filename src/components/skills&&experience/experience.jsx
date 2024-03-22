import { motion } from "framer-motion";
import { ExpCircle } from "../../assets/Icons";
import Resume from "../../utils/Ummkhalad.pdf";

const Experience = () => {
  const handleDownload = () => {
    const downloadLink = document.createElement("a");
    downloadLink.href = { Resume };
    downloadLink.download = "hello  ";
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };

  return (
    <>
      <div className={`flex flex-col ml-3 lg:items-end`}>
        <div className="font-pop">
          <h2
            className={`h-full flex items-center ml-0 lg:ml-20 font-clashbold text-white text-[20px] font-semibold lg:text- lg:text-[50px] lg:leading-[49.2px]`}
          >
            Experience <small className={`animate-bounce`}>🚀</small>
          </h2>
          <p
            className={`font-medium text-[#FFFFFF99] text-[15px] leading-[22.5px] text-left lg:text-[20px] lg:leading-[30px]]`}
          >
            Some list of my experience over the year..
          </p>
        </div>
        <div className="flex flex-row relative z-[10000000000]  lg:justify-between mt-[30px]">
          <div className="w-0.5 h-[740px] bg-[#1ED7601A]"></div>
          <div className={`flex flex-col space-y-[60px]`}>
            <div className="flex gap-[28px] lg:gap-[48px]">
              <div className="relative">
                <span className="absolute -top-1 -translate-x-[55%] lg:translate-x-[-50%]">
                  <ExpCircle />
                </span>
              </div>

              <div>
                <h3 className="font-semibold text-white lg:text-[20px] lg:leading-[30px]  ">
                  Web Developer Intructor <span>-</span> &nbsp;
                  <span className="italic text-[#FFFFFF99]">2020- 2021</span>
                </h3>
                <p
                  className={`text-[#1ED760] font-semibold md:mt-[10px] text-[18px] leading-[27px]`}
                >
                  ICMY-WEB DEVELOPMENT
                </p>
                <h5
                  className={`text-[#FFFFFF99] font-medium mt-[20px] max-w-[300px] md:max-w-md lg:mt-[19px] lg:max-w-[651px] lg:text-[18px] lg:leading-[27px]`}
                >
                  I worked with my team to make a beautiful and responsive
                  website. I also teach web development to students.
                </h5>
              </div>
            </div>
            <div className="flex gap-[28px] lg:gap-[48px]">
              <div className="relative">
                <span className="absolute -top-1 -translate-x-[55%] lg:translate-x-[-50%]">
                  <ExpCircle />
                </span>
              </div>

              <div>
                <h3 className="font-semibold text-white lg:text-[20px] lg:leading-[30px]  ">
                  Frontend Engineer <span>-</span>&nbsp;
                  <span className="italic text-[#FFFFFF99]">
                    contract-October 2023
                  </span>
                </h3>
                <p
                  className={`text-[#1ED760] font-semibold md:mt-[10px] text-[18px] leading-[27px]`}
                >
                  Redge
                </p>
                <h5
                  className={`text-[#FFFFFF99] font-medium mt-[20px] max-w-[300px] md:max-w-md lg:mt-[19px] lg:max-w-[651px] lg:text-[18px] lg:leading-[27px]`}
                >
                  worked has a contract frontend developer ,built the user
                  interface and integrate API of a loan app
                </h5>
              </div>
            </div>
          

            <motion.div
              className="max-w-[200px] mx-auto md:mx-0"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.9 }}
            >
              <a
                href={Resume}
                onClick={handleDownload}
                className="flex justify-center lg:flex lg:justify-start"
                download="Ummkhalad.pdf"
                rel="noopener noreferrer"
              >
                <span className="cursor-pointer bg-gradient-to-r max-w-[197px] lg:max-w-[252px] to-[#D9D9D9] from-[#D9D9D900] py-0.5 pr-0.5">
                  <p className="bg-[#061417] px-[17px] py-[18px] font-medium text-[18px] font-clash">
                    Download Resume
                  </p>
                </span>
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Experience;
