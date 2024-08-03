import type { NextPage } from "next";
import { Button } from "@mui/material";

export type TestimonialsType = {
  className?: string;
};

const Testimonials: NextPage<TestimonialsType> = ({ className = "" }) => {
  return (
    <div
      className={`w-[1729.2px] flex flex-row items-start justify-start py-0 pl-0 pr-5 box-border gap-[158.9px] max-w-full text-left text-base text-darkgray-400 font-inter gap-10 gap-[79px] mq1825:flex-wrap gap-5 ${className}`}
    >
      <div className="flex-1 flex flex-col items-start justify-start pt-[7.6px] px-0 pb-0 box-border min-w-[610px] max-w-full mq925:min-w-full">
        <div className="self-stretch flex flex-col items-start justify-start pt-[61px] pb-[31px] pl-28 pr-[23px] box-border relative gap-[367px] max-w-full gap-[92px] mq925:pl-7 mq925:pt-10 mq925:pb-5 mq925:box-border gap-[183px] mq1350:pl-14 mq1350:box-border">
          <div className="self-stretch flex flex-row items-start justify-end max-w-full">
            <div className="w-[349px] shadow-[13.2px_12.3px_13.5px_rgba(0,_0,_0,_0.07)] rounded-mini bg-white flex flex-col items-start justify-start pt-[21.6px] pb-[23px] pl-[107px] pr-5 box-border gap-[6.4px] max-w-full z-[2] mq450:pl-5 mq450:box-border">
              <div className="w-[349px] h-[114px] relative shadow-[13.2px_12.3px_13.5px_rgba(0,_0,_0,_0.07)] rounded-mini bg-white hidden max-w-full" />
              <div className="h-[39px] relative leading-[19.2px] inline-block z-[3]">
                <p className="m-0">{`Delicious food & excellent `}</p>
                <p className="m-0">service! Highly recommend.</p>
              </div>
              <div className="flex flex-row items-start justify-start gap-[7.2px] text-lgi-9 text-darkgray-100">
                <div className="flex flex-col items-start justify-start pt-[2.7px] px-0 pb-0">
                  <div className="flex flex-row items-start justify-start gap-1">
                    <div className="h-[19.3px] w-[19.3px] relative rounded-tl-8xs rounded-tr-none rounded-br-none rounded-bl-8xs bg-seagreen z-[3]" />
                    <div className="h-[19.3px] w-[19.3px] relative rounded-tl-8xs rounded-tr-none rounded-br-none rounded-bl-8xs bg-seagreen z-[3]" />
                    <div className="h-[19.3px] w-[19.3px] relative rounded-tl-8xs rounded-tr-none rounded-br-none rounded-bl-8xs bg-seagreen z-[3]" />
                    <div className="h-[19.3px] w-[19.3px] relative rounded-tl-8xs rounded-tr-none rounded-br-none rounded-bl-8xs bg-seagreen z-[3]" />
                    <div className="h-[19.3px] w-[19.3px] relative rounded-tl-8xs rounded-tr-none rounded-br-none rounded-bl-8xs bg-seagreen z-[3]" />
                  </div>
                </div>
                <div className="relative leading-[24px] inline-block min-w-[30px] z-[3]">
                  4.5
                </div>
              </div>
            </div>
          </div>
          <div className="w-full h-full absolute !m-[0] top-[0px] bottom-[0px] left-[0px]">
            <div className="absolute top-[0px] left-[0px] rounded-12xl bg-gainsboro-200 w-[628px] h-[514px]">
              <div className="absolute top-[0px] left-[0px] rounded-12xl bg-gainsboro-200 w-full h-full hidden" />
            </div>
            <div className="absolute top-[241px] left-[350px] w-[589px] h-[484px] z-[1]">
              <div className="absolute top-[0px] left-[0px] rounded-14xl bg-whitesmoke-100 w-full h-full" />
              <div className="absolute top-[9px] left-[9px] rounded-12xl bg-gainsboro-200 w-full h-full z-[1]">
                <div className="absolute top-[0px] left-[0px] rounded-12xl bg-gainsboro-200 w-full h-full hidden" />
              </div>
            </div>
            <div className="absolute top-[79px] left-[557px] w-32 h-[85px] z-[4]">
              <div className="absolute top-[4px] left-[29px] rounded-[50%] bg-darkgray-300 w-[70px] h-[70px]" />
              <img
                className="absolute top-[0px] left-[0px] w-full h-full object-cover"
                alt=""
                src="/clip-1@2x.png"
              />
            </div>
          </div>
          <div className="shadow-[13.2px_12.3px_13.5px_rgba(0,_0,_0,_0.07)] rounded-mini bg-white border-darkgray-100 border-[1px] border-solid box-border flex flex-col items-start justify-start pt-[15px] px-[50px] pb-[25px] gap-[16.3px] max-w-full z-[2] text-black mq450:pl-5 mq450:pr-5 mq450:box-border">
            <div className="w-[336px] h-[153px] relative shadow-[13.2px_12.3px_13.5px_rgba(0,_0,_0,_0.07)] rounded-mini bg-white border-darkgray-100 border-[1px] border-solid box-border hidden max-w-full" />
            <h3 className="m-0 relative text-5xl leading-[29px] font-normal font-[inherit] z-[1] mq450:text-lgi mq450:leading-[23px]">
              Hunza Valley
            </h3>
            <div className="flex flex-row items-start justify-start py-0 pl-1 pr-[11px] text-darkgray-400">
              <div className="flex flex-row items-start justify-start gap-[16.2px]">
                <img
                  className="h-[27.5px] w-[16.5px] relative z-[1]"
                  loading="lazy"
                  alt=""
                  src="/distance.svg"
                />
                <div className="flex flex-col items-start justify-start pt-[3.8px] px-0 pb-0">
                  <div className="relative leading-[20px] z-[1]">
                    Gilgit-Baltistan, Pakistan
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[109px] flex flex-row items-end justify-start gap-[10.7px] text-blueviolet">
              <div className="h-5 flex-1 relative">
                <div className="absolute top-[0px] left-[0px] leading-[20px] inline-block min-w-[81px] w-full h-full z-[1]">
                  View More
                </div>
                <img
                  className="absolute top-[3.7px] left-[0.3px] w-[82px] h-[12.5px] z-[2]"
                  loading="lazy"
                  alt=""
                  src="/color-overlay.svg"
                />
              </div>
              <div className="flex flex-col items-start justify-end pt-0 px-0 pb-[1.6px]">
                <img
                  className="w-4 h-4 relative z-[1]"
                  loading="lazy"
                  alt=""
                  src="/arrow-forward.svg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[611.2px] flex flex-col items-start justify-start gap-[24.3px] min-w-[611.2px] max-w-full text-5xl text-darkgray-100 mq925:min-w-full mq1825:flex-1">
        <div className="self-stretch flex flex-col items-start justify-start gap-[27.3px] max-w-full">
          <div className="w-[162.9px] flex flex-col items-start justify-start gap-[5.6px]">
            <h3 className="m-0 relative text-inherit leading-[29px] font-normal font-[inherit] mq450:text-lgi mq450:leading-[23px]">
              Who We Are?
            </h3>
            <div className="self-stretch h-px relative bg-darkgray-100" />
          </div>
          <h1 className="m-0 self-stretch relative text-18xl leading-[44.4px] font-bold font-poppins text-black z-[3] mq925:text-11xl mq925:leading-[36px] mq450:text-3xl mq450:leading-[27px]">
            <p className="m-0">Helping You Find . Book . Review</p>
            <p className="m-0">Any Location or Business in Pakistan</p>
          </h1>
          <div className="w-[592px] h-[221.3px] relative text-base leading-[19.2px] text-gray-400 inline-block shrink-0 max-w-full z-[1]">
            <p className="m-0">
              Rehbar number 1 goal is to save the time of every Pakistani. Now
              when you can’t decide “Kahan chalen?” and “kon sa business acha
              hai?” You only need to visit Rehbar and see what others have said.
            </p>
            <p className="m-0">&nbsp;</p>
            <p className="m-0">
              Compare and find your available options. We have 15,000+ listed
              businesses and 10,000+ top spots with 1M+ reviews.
            </p>
            <p className="m-0">&nbsp;</p>
            <p className="m-0">
              Over 1.5 million people use Rehbar to find the best places to go,
              eat, drink and shop. and share what they love about them with
              others.
            </p>
          </div>
        </div>
        <div className="w-[594.1px] flex flex-col items-start justify-start gap-[47.3px] max-w-full text-4xl-9 text-black gap-6">
          <div className="self-stretch h-[2.5px] relative border-black border-t-[2.5px] border-solid box-border opacity-[0.35]" />
          <div className="self-stretch flex flex-row items-end justify-between gap-5 mq925:flex-wrap">
            <Button
              className="h-[53.4px] w-[136px]"
              disableElevation
              variant="text"
              sx={{
                textTransform: "none",
                color: "#fff",
                fontSize: "16",
                borderRadius: "0px 0px 0px 0px",
                width: 136,
                height: 53.4,
              }}
            >
              Learn More
            </Button>
            <div className="flex flex-row items-start justify-start gap-[50px] gap-[25px]">
              <img
                className="h-[63.9px] w-[175px] relative"
                loading="lazy"
                alt=""
                src="/image-costumer.svg"
              />
              <div className="flex flex-col items-start justify-start pt-[4.4px] px-0 pb-0">
                <div className="flex flex-col items-start justify-start gap-[5.2px]">
                  <div className="relative leading-[29px] inline-block min-w-[74px] mq450:text-lgi mq450:leading-[23px]">
                    230K+
                  </div>
                  <div className="relative text-base leading-[20px] text-seagreen inline-block min-w-[83px]">
                    Customers
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

export default Testimonials;
