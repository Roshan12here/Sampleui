import type { NextPage } from "next";

export type ImageBannerType = {
  className?: string;
};

const ImageBanner: NextPage<ImageBannerType> = ({ className = "" }) => {
  return (
    <div
      className={`flex flex-row items-start justify-start py-0 pl-2 pr-0 box-border max-w-full text-left text-lgi-9 text-seagreen font-inter ${className}`}
    >
      <div className="w-[1754px] flex flex-col items-end justify-start py-0 pl-0 pr-[107px] box-border gap-[54px] max-w-full">
        <div className="mr-[-133.6px] flex flex-row items-start justify-start gap-[45px] max-w-[109%] shrink-0 mq1825:flex-wrap">
          <div className="w-80 flex flex-col items-start justify-start gap-8">
            <div className="self-stretch rounded-11xl bg-gainsboro-200 flex flex-row items-start justify-start">
              <div className="self-stretch w-80 relative rounded-11xl bg-gainsboro-200 hidden" />
              <img
                className="h-80 flex-1 relative max-w-full overflow-hidden object-cover z-[1]"
                loading="lazy"
                alt=""
                src="/clip@2x.png"
              />
            </div>
            <div className="w-[154.2px] flex flex-col items-start justify-start gap-[12.4px]">
              <div className="self-stretch flex flex-row items-start justify-start py-0 pl-0.5 pr-0">
                <div className="flex-1 flex flex-row items-start justify-start gap-[9.1px]">
                  <div className="flex-1 flex flex-col items-start justify-start pt-[2.7px] px-0 pb-0">
                    <div className="self-stretch flex flex-row items-start justify-start gap-1">
                      <div className="h-[19.3px] w-[19.3px] relative rounded-tl-8xs rounded-tr-none rounded-br-none rounded-bl-8xs bg-seagreen" />
                      <div className="h-[19.3px] w-[19.3px] relative rounded-tl-8xs rounded-tr-none rounded-br-none rounded-bl-8xs bg-seagreen" />
                      <div className="h-[19.3px] w-[19.3px] relative rounded-tl-8xs rounded-tr-none rounded-br-none rounded-bl-8xs bg-seagreen" />
                      <div className="h-[19.3px] w-[19.3px] relative rounded-tl-8xs rounded-tr-none rounded-br-none rounded-bl-8xs bg-seagreen" />
                      <div className="h-[19.3px] w-[19.3px] relative rounded-tl-8xs rounded-tr-none rounded-br-none rounded-bl-8xs bg-seagreen" />
                    </div>
                  </div>
                  <div className="relative leading-[24px] inline-block min-w-[30px]">
                    4.5
                  </div>
                </div>
              </div>
              <h3 className="m-0 relative text-5xl leading-[29px] font-normal font-[inherit] text-black mq450:text-lgi mq450:leading-[23px]">
                Hunza Valley
              </h3>
            </div>
          </div>
          <img
            className="self-stretch w-80 relative max-h-full object-cover min-h-[419px]"
            loading="lazy"
            alt=""
            src="/section@2x.png"
          />
          <img
            className="self-stretch w-[1050px] relative max-h-full object-cover min-h-[419px] max-w-full"
            loading="lazy"
            alt=""
            src="/section-copy-3@2x.png"
          />
        </div>
        <div className="w-[1030.2px] flex flex-row flex-wrap items-start justify-between max-w-full gap-5 text-right text-base text-gray-100">
          <div className="w-[359.5px] flex flex-col items-start justify-start pt-[17.8px] px-0 pb-0 box-border max-w-full">
            <div className="self-stretch flex flex-row items-start justify-between gap-5 mq450:flex-wrap">
              <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
                <div className="flex flex-row items-start justify-start relative">
                  <div className="h-[55px] w-[198px] absolute !m-[0] right-[-54.8px] bottom-[-15.2px] rounded-8xs bg-white border-gainsboro-100 border-[1px] border-solid box-border z-[0]" />
                  <div className="relative leading-[28px] inline-block min-w-[93px] z-[1]">
                    Find a Place
                  </div>
                </div>
              </div>
              <div className="flex flex-row items-start justify-start relative text-white">
                <div className="h-[55px] w-[197px] absolute !m-[0] right-[-45.3px] bottom-[-17.2px] rounded-8xs bg-seagreen border-gainsboro-100 border-[1px] border-solid box-border z-[0]" />
                <div className="relative leading-[28px] inline-block min-w-[111px] z-[1]">
                  List your Place
                </div>
              </div>
            </div>
          </div>
          <img
            className="h-[68.5px] w-[190.5px] relative"
            loading="lazy"
            alt=""
            src="/arrows.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default ImageBanner;
