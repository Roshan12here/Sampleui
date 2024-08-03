import type { NextPage } from "next";

export type CategoriesContainerType = {
  className?: string;
};

const CategoriesContainer: NextPage<CategoriesContainerType> = ({
  className = "",
}) => {
  return (
    <div
      className={`self-stretch flex flex-row items-start justify-end max-w-full text-left text-lgi-6 text-gray-500 font-inter ${className}`}
    >
      <div className="w-[1711.3px] flex flex-row items-start justify-start gap-[56.7px] max-w-full gap-7 mq1825:flex-wrap">
        <div className="w-[516.8px] flex flex-row items-start justify-between min-h-[25px] shrink-0 max-w-full gap-5 mq450:flex-wrap">
          <div className="w-[138.6px] flex flex-col items-start justify-start py-0 pl-0 pr-5 box-border">
            <div className="relative leading-[24px] inline-block min-w-[111px] z-[2]">
              Restaurants
            </div>
          </div>
          <div className="relative leading-[24px] inline-block min-w-[60px] z-[2]">
            Hotels
          </div>
          <div className="w-[143px] relative leading-[24px] inline-block z-[2]">
            Shopping Malls
          </div>
        </div>
        <div className="w-[1167.8px] flex flex-col items-start justify-start gap-[71.8px] min-w-[1167.8px] shrink-0 max-w-full gap-[18px] gap-9 mq1350:min-w-full mq1825:flex-1">
          <div className="self-stretch flex flex-row items-start justify-start py-0 pl-[26px] pr-0 box-border max-w-full">
            <div className="flex-1 flex flex-col items-start justify-start py-0 pl-0 pr-px box-border gap-[62px] max-w-full gap-[15px] gap-[31px] mq1825:flex-1">
              <div className="w-[728.8px] flex flex-row items-start justify-between py-0 pl-0 pr-5 box-border gap-5 max-w-full mq925:flex-wrap">
                <div className="relative leading-[24px] inline-block min-w-[83px] z-[2]">
                  Marquee
                </div>
                <div className="flex flex-col items-start justify-start py-0 pl-0 pr-0.5">
                  <div className="relative leading-[24px] z-[2]">
                    Home Services
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start py-0 pl-0 pr-2.5">
                  <div className="relative leading-[24px] inline-block min-w-[83px] z-[2]">
                    Boutique
                  </div>
                </div>
                <div className="relative leading-[24px] inline-block min-w-[123px] z-[2]">
                  Beauty Salon
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-end max-w-full">
                <img
                  className="w-[1053px] relative max-h-full object-cover max-w-full z-[1]"
                  loading="lazy"
                  alt=""
                  src="/section-copy-4@2x.png"
                />
              </div>
            </div>
          </div>
          <div className="w-[379.5px] flex flex-row items-start justify-between py-0 pl-0 pr-5 box-border max-w-full gap-5 text-right text-base text-gray-100 mq450:flex-wrap">
            <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
              <div className="relative leading-[28px] inline-block min-w-[93px] z-[2]">
                Find a Place
              </div>
            </div>
            <div className="relative leading-[28px] text-white inline-block min-w-[111px] z-[2]">
              List your Place
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoriesContainer;
