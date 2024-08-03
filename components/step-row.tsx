import type { NextPage } from "next";

export type StepRowType = {
  className?: string;
  step02?: string;
  clip?: string;
  findWhatOthersAreSayingAb?: string;
};

const StepRow: NextPage<StepRowType> = ({
  className = "",
  step02,
  clip,
  findWhatOthersAreSayingAb,
}) => {
  return (
    <div
      className={`w-[327.9px] flex flex-col items-start justify-start gap-[21.5px] max-w-full text-left text-lgi-6 text-gray-500 font-inter ${className}`}
    >
      <div className="self-stretch flex flex-row items-start justify-start py-0 pl-px pr-0 box-border max-w-full">
        <div className="flex-1 flex flex-row items-start justify-between shrink-0 max-w-full gap-5 mq450:flex-wrap">
          <img
            className="h-12 w-[54px] relative object-cover z-[2]"
            alt=""
            src="/nounjoin1632603-1@2x.png"
          />
          <div className="flex flex-col items-start justify-start pt-[10.2px] px-0 pb-0">
            <div className="relative leading-[24px] inline-block min-w-[73px]">
              {step02}
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-start relative max-w-full text-9xl text-black">
        <div className="h-[410px] w-[502px] absolute !m-[0] right-[-123px] bottom-[-166.6px] z-[0]">
          <textarea
            className="[border:none] bg-white h-[299px] w-[431px] [outline:none] absolute top-[0px] left-[0px] shadow-[13.2px_12.3px_13.5px_rgba(0,_0,_0,_0.07)] rounded-mini"
            rows={15}
            cols={22}
          />
          <img
            className="absolute top-[135.1px] left-[227.2px] w-[274.8px] h-[274.9px]"
            alt=""
            src={clip}
          />
        </div>
        <h2 className="m-0 h-[112.9px] flex-1 relative text-inherit leading-[33.6px] font-normal font-[inherit] inline-block shrink-0 max-w-full z-[1] mq450:text-3xl mq450:leading-[27px]">
          {findWhatOthersAreSayingAb}
        </h2>
      </div>
    </div>
  );
};

export default StepRow;
