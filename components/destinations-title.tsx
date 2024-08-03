import type { NextPage } from "next";

export type DestinationsTitleType = {
  className?: string;
};

const DestinationsTitle: NextPage<DestinationsTitleType> = ({
  className = "",
}) => {
  return (
    <div
      className={`w-[1539px] flex flex-col items-start justify-start py-0 pl-0 pr-5 box-border gap-[28.2px] max-w-full text-left text-5xl text-darkgray-100 font-inter ${className}`}
    >
      <div className="w-[152px] flex flex-col items-start justify-start gap-[4.6px]">
        <h3 className="m-0 relative text-inherit leading-[29px] font-normal font-[inherit] mq450:text-lgi mq450:leading-[23px]">
          Destinations
        </h3>
        <div className="self-stretch flex flex-row items-start justify-start py-0 pl-0.5 pr-0">
          <div className="h-px flex-1 relative bg-darkgray-100" />
        </div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-start py-0 pl-0.5 pr-0 box-border max-w-full text-18xl text-black font-poppins">
        <div className="flex-1 flex flex-col items-start justify-start gap-[10.7px] max-w-full">
          <div className="self-stretch flex flex-row items-start justify-start gap-[65px] max-w-full mq1350:flex-wrap">
            <h1 className="m-0 h-[143.9px] w-[652px] relative text-inherit leading-[44.4px] font-bold font-[inherit] inline-block shrink-0 min-w-[652px] max-w-full z-[2] mq925:text-11xl mq925:leading-[36px] mq925:min-w-full mq1350:flex-1 mq450:text-3xl mq450:leading-[27px]">
              <p className="m-0">{`Explore Top Places `}</p>
              <p className="m-0">on Rehbar</p>
            </h1>
            <div className="flex-1 flex flex-col items-start justify-start pt-[27px] px-0 pb-0 box-border min-w-[520px] max-w-full text-base text-gray-400 font-inter mq925:min-w-full">
              <div className="self-stretch h-[93.3px] relative leading-[19.2px] inline-block shrink-0">
                If you want to visit a place but don’t know if it worth
                traveling, we have listed all the best traveling spots in
                Pakistan. You can look at what others are saying and plan
                accordingly.
              </div>
            </div>
          </div>
          <div className="w-[1308.6px] flex flex-row items-start justify-start py-0 px-[42px] box-border max-w-full text-lgi-6 text-gray-500 font-inter">
            <div className="flex-1 flex flex-row items-start justify-between py-0 pl-0 pr-px box-border max-w-full gap-5 mq1350:flex-wrap">
              <div className="flex flex-col items-start justify-start pt-[1.3px] pb-0 pl-0 pr-[7px]">
                <div className="flex flex-row items-start justify-start relative">
                  <div className="h-[42.5px] w-[195.3px] absolute !m-[0] top-[-9.3px] right-[-42.6px] shadow-[1.5px_2.6px_1.5px_rgba(0,_0,_0,_0.13)] rounded-[21.25px] bg-white z-[0]" />
                  <div className="relative leading-[24px] inline-block min-w-[115px] z-[1]">
                    Picnic Spots
                  </div>
                </div>
              </div>
              <div className="flex flex-row items-start justify-start relative">
                <div className="h-[43px] w-[124px] absolute !m-[0] right-[-37.1px] bottom-[-10.8px] shadow-[1.5px_2.6px_1.5px_rgba(0,_0,_0,_0.13)] rounded-2xl-5 bg-white z-[0]" />
                <div className="relative leading-[24px] inline-block min-w-[54px] z-[1]">
                  Areas
                </div>
              </div>
              <div className="flex flex-row items-start justify-start relative">
                <div className="h-[43px] w-[175px] absolute !m-[0] right-[-41.5px] bottom-[-10.8px] shadow-[1.5px_2.6px_1.5px_rgba(0,_0,_0,_0.13)] rounded-2xl-5 bg-white z-[0]" />
                <div className="relative leading-[24px] inline-block min-w-[102px] z-[1]">
                  Attractions
                </div>
              </div>
              <div className="flex flex-col items-start justify-start py-0 pl-0 pr-2.5">
                <div className="flex flex-row items-start justify-start relative">
                  <div className="h-[43px] w-[229px] absolute !m-[0] right-[-36.2px] bottom-[-11.2px] shadow-[1.5px_2.6px_1.5px_rgba(0,_0,_0,_0.13)] rounded-2xl-5 bg-white z-[0]" />
                  <div className="relative leading-[24px] z-[1]">
                    Housing Societies
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-start justify-start pt-[1.3px] pb-0 pl-0 pr-[7px]">
                <div className="flex flex-row items-start justify-start relative">
                  <div className="h-[43px] w-[138px] absolute !m-[0] right-[-43.4px] bottom-[-9.9px] shadow-[1.5px_2.6px_1.5px_rgba(0,_0,_0,_0.13)] rounded-2xl-5 bg-white z-[0]" />
                  <div className="relative leading-[24px] inline-block min-w-[53px] z-[1]">
                    Parks
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-start justify-start pt-[1.3px] pb-0 pl-0 pr-[18px]">
                <div className="flex flex-row items-start justify-start relative">
                  <div className="h-[43px] w-[165px] absolute !m-[0] right-[-40.4px] bottom-[-9.9px] shadow-[1.5px_2.6px_1.5px_rgba(0,_0,_0,_0.13)] rounded-2xl-5 bg-white z-[0]" />
                  <div className="relative leading-[24px] inline-block min-w-[93px] z-[1]">
                    Waterfalls
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-start justify-start pt-[1.3px] px-0 pb-0">
                <div className="flex flex-row items-start justify-start relative">
                  <div className="h-[43px] w-[165px] absolute !m-[0] right-[-49.4px] bottom-[-9.9px] shadow-[1.5px_2.6px_1.5px_rgba(0,_0,_0,_0.13)] rounded-2xl-5 bg-white z-[0]" />
                  <div className="relative leading-[24px] inline-block min-w-[70px] z-[1]">
                    Shrines
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DestinationsTitle;
