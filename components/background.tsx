import type { NextPage } from "next";

export type BackgroundType = {
  className?: string;
};

const Background: NextPage<BackgroundType> = ({ className = "" }) => {
  return (
    <section
      className={`w-full !m-[0] absolute top-[1905px] right-[0px] left-[0px] bg-whitesmoke-200 flex flex-col items-start justify-start pt-[44.4px] pb-[60.5px] pl-[158px] pr-[108px] box-border gap-[2.8px] max-w-full text-left text-5xl text-darkgray-100 font-inter mq925:pl-[39px] mq925:pr-[27px] mq925:box-border mq1350:pl-[79px] mq1350:pr-[54px] mq1350:box-border ${className}`}
    >
      <div className="w-[1920px] h-[947px] relative bg-whitesmoke-200 hidden max-w-full" />
      <div className="w-[1520px] flex flex-col items-start justify-start gap-[28.2px] max-w-full">
        <div className="w-[135px] flex flex-col items-start justify-start gap-[5.6px]">
          <h3 className="m-0 relative text-inherit leading-[29px] font-normal font-[inherit] inline-block min-w-[129px] mq450:text-lgi mq450:leading-[23px]">
            Businesses
          </h3>
          <div className="self-stretch flex flex-row items-start justify-start py-0 pl-0.5 pr-0">
            <div className="h-px flex-1 relative bg-darkgray-100" />
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start py-0 pl-0.5 pr-0 box-border max-w-full">
          <header className="flex-1 flex flex-row items-start justify-start gap-[66px] max-w-full text-left text-18xl text-black font-poppins gap-[33px] mq1825:flex-wrap gap-4">
            <h1 className="m-0 h-36 w-[652px] relative text-inherit leading-[44.39px] font-bold font-[inherit] inline-block shrink-0 min-w-[652px] max-w-full z-[2] mq925:text-11xl mq925:leading-[36px] mq1350:min-w-full mq1825:flex-1 mq450:text-3xl mq450:leading-[27px]">
              <p className="m-0">{`Explore Best Businesses `}</p>
              <p className="m-0">on Rehbar</p>
            </h1>
            <div className="flex-1 flex flex-col items-start justify-start pt-[29px] px-0 pb-0 box-border min-w-[520px] max-w-full shrink-0 text-base text-gray-400 font-inter mq925:min-w-full">
              <div className="self-stretch h-[93.3px] relative leading-[19.2px] inline-block shrink-0">
                <p className="m-0">
                  Finding a reliable business is hard. Rehbar makes it simple.
                  Search any business in Pakistan, see reviews, and decide
                  confidently. Also, add your business to attract more
                  customers.
                </p>
              </div>
            </div>
          </header>
        </div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-start py-0 pl-[7px] pr-0 box-border max-w-full text-lgi-9 text-seagreen">
        <div className="flex-1 flex flex-row flex-wrap items-start justify-start gap-[19px] max-w-full">
          <div className="flex-1 flex flex-col items-end justify-start gap-[57.7px] min-w-[497px] max-w-full mq925:min-w-full gap-[29px]">
            <div className="self-stretch flex flex-row items-start justify-end py-0 pl-0 pr-px box-border max-w-full">
              <div className="flex-1 flex flex-col items-start justify-start gap-[52px] max-w-full gap-[26px]">
                <div className="self-stretch flex flex-row items-start justify-start gap-5 mq925:flex-wrap">
                  <div className="h-[43px] flex-1 relative shadow-[1.5px_2.6px_1.5px_rgba(0,_0,_0,_0.13)] rounded-2xl-5 bg-white min-w-[136px] z-[1]" />
                  <div className="h-[43px] w-36 relative shadow-[1.5px_2.6px_1.5px_rgba(0,_0,_0,_0.13)] rounded-2xl-5 bg-white z-[1]" />
                  <div className="h-[43px] flex-1 relative shadow-[1.5px_2.6px_1.5px_rgba(0,_0,_0,_0.13)] rounded-2xl-5 bg-white min-w-[131px] z-[1]" />
                  <div className="h-[43px] w-[150px] relative shadow-[1.5px_2.6px_1.5px_rgba(0,_0,_0,_0.13)] rounded-2xl-5 bg-white z-[1]" />
                </div>
                <div className="w-[686.3px] flex flex-row items-start justify-start gap-[45px] max-w-full mq925:flex-wrap gap-[22px]">
                  <div className="flex-1 flex flex-col items-start justify-start gap-[31px] min-w-[208px] max-w-full gap-[15px]">
                    <div className="self-stretch rounded-11xl bg-gainsboro-200 flex flex-row items-start justify-start pt-[0.1px] px-0 pb-0 shrink-0 z-[1]">
                      <div className="self-stretch w-80 relative rounded-11xl bg-gainsboro-200 hidden" />
                      <img
                        className="h-80 flex-1 relative max-w-full overflow-hidden object-cover z-[1]"
                        alt=""
                        src="/clip-5@2x.png"
                      />
                    </div>
                    <div className="flex flex-col items-start justify-start gap-[13.3px] shrink-0">
                      <div className="flex flex-row items-start justify-start gap-[9.1px]">
                        <div className="flex flex-col items-start justify-start pt-[2.7px] px-0 pb-0">
                          <div className="flex flex-row items-start justify-start gap-1">
                            <div className="h-[19.3px] w-[19.3px] relative rounded-tl-8xs rounded-tr-none rounded-br-none rounded-bl-8xs bg-seagreen z-[1]" />
                            <div className="h-[19.3px] w-[19.3px] relative rounded-tl-8xs rounded-tr-none rounded-br-none rounded-bl-8xs bg-seagreen z-[1]" />
                            <div className="h-[19.3px] w-[19.3px] relative rounded-tl-8xs rounded-tr-none rounded-br-none rounded-bl-8xs bg-seagreen z-[1]" />
                            <div className="h-[19.3px] w-[19.3px] relative rounded-tl-8xs rounded-tr-none rounded-br-none rounded-bl-8xs bg-seagreen z-[1]" />
                            <div className="h-[19.3px] w-[19.3px] relative rounded-tl-8xs rounded-tr-none rounded-br-none rounded-bl-8xs bg-seagreen z-[1]" />
                          </div>
                        </div>
                        <div className="relative leading-[24px] inline-block min-w-[30px] z-[1]">
                          4.5
                        </div>
                      </div>
                      <h3 className="m-0 relative text-5xl leading-[29px] font-semibold font-poppins text-black z-[1] mq450:text-lgi mq450:leading-[23px]">
                        Fresh Ice Cream
                      </h3>
                    </div>
                  </div>
                  <img
                    className="h-[414px] flex-1 relative max-w-full overflow-hidden object-cover min-w-[209px] z-[1]"
                    alt=""
                    src="/section-1@2x.png"
                  />
                </div>
              </div>
            </div>
            <div className="w-[198px] h-[55px] relative rounded-8xs bg-white border-gainsboro-100 border-[1px] border-solid box-border z-[1]" />
          </div>
          <div className="w-[386px] flex flex-col items-start justify-start gap-[528px] max-w-full gap-[264px]">
            <div className="self-stretch flex flex-row items-start justify-start gap-5 mq450:flex-wrap">
              <div className="h-[43px] flex-1 relative shadow-[1.5px_2.6px_1.5px_rgba(0,_0,_0,_0.13)] rounded-2xl-5 bg-white min-w-[137px] z-[1]" />
              <div className="h-[43px] w-[155px] relative shadow-[1.5px_2.6px_1.5px_rgba(0,_0,_0,_0.13)] rounded-2xl-5 bg-white z-[1]" />
            </div>
            <div className="w-[279px] h-[55px] flex flex-row items-start justify-start py-0 px-[41px] box-border">
              <div className="self-stretch flex-1 relative rounded-8xs bg-seagreen border-gainsboro-100 border-[1px] border-solid z-[1]" />
            </div>
          </div>
          <div className="w-[247.5px] flex flex-col items-start justify-start py-0 pl-0 pr-9 box-border">
            <div className="self-stretch h-[43px] relative shadow-[1.5px_2.6px_1.5px_rgba(0,_0,_0,_0.13)] rounded-2xl-5 bg-white z-[1]" />
          </div>
          <div className="h-[631.5px] w-[190.5px] flex flex-col items-start justify-start pt-[563px] px-0 pb-0 box-border">
            <img
              className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full z-[1]"
              loading="lazy"
              alt=""
              src="/arrows-button.svg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Background;
