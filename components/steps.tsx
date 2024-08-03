import type { NextPage } from "next";
import StepRow from "./step-row";

export type StepsType = {
  className?: string;
};

const Steps: NextPage<StepsType> = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch flex flex-row items-start justify-between max-w-full gap-5 text-left text-lgi-6 text-gray-500 font-inter mq1350:flex-wrap mq1350:justify-center ${className}`}
    >
      <div className="w-[326px] flex flex-col items-start justify-start gap-[21.5px] max-w-full">
        <div className="self-stretch flex flex-row items-start justify-start py-0 px-px box-border max-w-full">
          <div className="flex-1 flex flex-row items-start justify-between shrink-0 max-w-full gap-5 mq450:flex-wrap">
            <img
              className="h-12 w-[54px] relative object-cover z-[2]"
              alt=""
              src="/nounjoin1632603@2x.png"
            />
            <div className="flex flex-col items-start justify-start pt-[10.2px] px-0 pb-0">
              <div className="relative leading-[24px] inline-block min-w-[70px] z-[2]">
                Step 01
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start relative max-w-full text-9xl text-black">
          <div className="w-[502px] !m-[0] absolute right-[-123px] bottom-[-166.5px] flex flex-row items-start justify-start pt-0 px-0 pb-[0.1px] box-border z-[1]">
            <div className="h-[409.8px] flex-1 relative max-w-full">
              <textarea
                className="[border:none] bg-white h-[298.9px] w-[431px] [outline:none] absolute top-[0px] left-[0px] shadow-[13.2px_12.3px_13.5px_rgba(0,_0,_0,_0.07)] rounded-mini"
                rows={15}
                cols={22}
              />
              <img
                className="absolute top-[135px] left-[227.2px] w-[274.8px] h-[274.8px] z-[1]"
                alt=""
                src="/clip-2.svg"
              />
            </div>
          </div>
          <h2 className="m-0 h-[112.9px] flex-1 relative text-inherit leading-[33.6px] font-normal font-[inherit] inline-block shrink-0 max-w-full z-[2] mq450:text-3xl mq450:leading-[27px]">
            Search any place and business in Pakistan
          </h2>
        </div>
      </div>
      <StepRow
        step02="Step 02"
        clip="/clip-3.svg"
        findWhatOthersAreSayingAb="Find what others are saying about them"
      />
      <StepRow
        step02="Step 03"
        clip="/clip-3.svg"
        findWhatOthersAreSayingAb="Give your feedback to help others"
      />
    </div>
  );
};

export default Steps;
