import type { NextPage } from "next";
import { Button } from "@mui/material";
import CardGrid from "./card-grid";

export type BusinessPromptType = {
  className?: string;
};

const BusinessPrompt: NextPage<BusinessPromptType> = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-center pt-0 pb-[51.8px] pl-6 pr-5 box-border max-w-full text-left text-23xl text-white font-poppins mq925:pb-[22px] mq925:box-border mq1350:pb-[34px] mq1350:box-border ${className}`}
    >
      <div className="w-[1605.9px] flex flex-col items-end justify-start  max-w-full  gap-[19px]">
        <div className="flex flex-col items-start justify-start gap-[16.9px] max-w-full">
          <div className="flex flex-col items-start justify-start gap-[6.6px]">
            <div className="flex flex-row items-start justify-start relative">
              <h1 className="m-0 relative text-inherit leading-[51px] font-bold font-[inherit] z-[1] mq925:text-15xl mq925:leading-[40px] mq450:text-6xl mq450:leading-[30px]">
                Have a Business or Discovered a New Place?
              </h1>
              <div className="h-[650px] w-[2017px] absolute !m-[0] top-[-347.2px] left-[-914.9px]">
                <img
                  className="absolute top-[25px] left-[0px] w-[2716.3px] h-[625px]"
                  alt=""
                  src="/background.svg"
                />
                <img
                  className="absolute top-[196.2px] left-[281.6px] w-[471.2px] h-[434.3px] z-[1]"
                  loading="lazy"
                  alt=""
                  src="/pictures.svg"
                />
                <img
                  className="absolute top-[0px] left-[967px] w-10 h-10 object-cover z-[1]"
                  loading="lazy"
                  alt=""
                  src="/asset-1@2x.png"
                />
                <img
                  className="absolute top-[0px] left-[1037px] w-10 h-10 object-cover z-[1]"
                  loading="lazy"
                  alt=""
                  src="/asset-2@2x.png"
                />
                <img
                  className="absolute top-[0px] left-[897px] w-10 h-10 object-cover z-[1]"
                  loading="lazy"
                  alt=""
                  src="/asset-3@2x.png"
                />
                <img
                  className="absolute top-[0px] left-[1107px] w-10 h-10 object-cover z-[1]"
                  loading="lazy"
                  alt=""
                  src="/asset-4@2x.png"
                />
                <img
                  className="absolute top-[0px] left-[1177px] w-10 h-10 object-cover z-[1]"
                  loading="lazy"
                  alt=""
                  src="/asset-5@2x.png"
                />
              </div>
            </div>
            <div className="flex flex-row items-start justify-start text-3xl-2 font-inter">
              <div className="relative leading-[26.67px] z-[1] mq450:text-lg mq450:leading-[21px]">
                <p className="m-0">Make Your Mark on Rehbar.pk</p>
              </div>
            </div>
          </div>
          <div className="w-[199.2px] flex flex-row items-start justify-start py-0 px-0.5 box-border">
            <Button
              className="h-[55px] flex-1 z-[1]"
              disableElevation
              variant="contained"
              sx={{
                textTransform: "none",
                color: "#fff",
                fontSize: "16",
                background: "#000",
                borderRadius: "5px",
                "&:hover": { background: "#000" },
                height: 55,
              }}
            >
              Add your Listing
            </Button>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-end py-0 pl-0 pr-1 box-border max-w-full text-5xl text-darkgray-100 font-inter">
          <div className="flex-1 flex flex-row items-end justify-start  max-w-full  mq1350:flex-wrap gap-5">
            <div className="flex-1 flex flex-col items-start justify-end pt-0 px-0 pb-0.5 box-border min-w-[526px] max-w-full mq925:min-w-full">
              <div className="self-stretch flex flex-col items-start justify-start  max-w-full 
              gap-[31px] ">
                <div className="self-stretch flex flex-col items-start justify-start gap-[11px] max-w-full">
                  <div className="w-[205px] flex flex-col items-start justify-start pt-0 px-0 pb-[8.2px] box-border gap-[4.6px]">
                    <h3 className="m-0 relative text-inherit leading-[29px] font-normal font-[inherit] mq450:text-lgi mq450:leading-[23px]">{`Stories & Articles`}</h3>
                    <div className="self-stretch flex flex-row items-start justify-start py-0 pl-0.5 pr-0">
                      <div className="h-px flex-1 relative bg-darkgray-100" />
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-start justify-start py-0 pl-px pr-0 box-border max-w-full text-23xl text-black font-poppins">
                    <h1 className="m-0 flex-1 relative text-inherit leading-[80px] font-bold font-[inherit] inline-block max-w-full mq925:text-15xl mq925:leading-[63px] mq450:text-6xl mq450:leading-[48px]">
                      Explore People’s Stories
                    </h1>
                  </div>
                  <div className="w-[716px] flex flex-row items-start justify-start py-0 px-px box-border max-w-full text-base text-gray-400">
                    <div className="h-[69.3px] flex-1 relative leading-[19.2px] inline-block max-w-full">
                      <p className="m-0">
                        Stories never die. Everyone has a story to share. Every
                        trip create a unique story. Let the world know what you
                        got.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="w-[724px] flex flex-row items-start justify-start py-0 px-px box-border max-w-full text-gray-400">
                  <div className="flex-1 flex flex-col items-start justify-start gap-[15.8px] max-w-full">
                    <CardGrid />
                    <CardGrid />
                    <CardGrid />
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[713px] flex flex-col items-start justify-start  min-w-[713px] max-w-full text-gray-400 gap-[34px] mq925:min-w-full mq1350:flex-1 gap-[17px]">
              <div className="self-stretch h-[677px] relative rounded-12xl bg-gainsboro-200">
                <div className="absolute top-[0px] left-[0px] rounded-12xl bg-gainsboro-200 w-full h-full hidden" />
              </div>
              <div className="self-stretch flex flex-col items-start justify-start gap-[16.1px]">
                <h3 className="m-0 relative text-inherit leading-[29px] font-normal font-[inherit] mq450:text-lgi mq450:leading-[23px]">
                  News Study Reveals
                </h3>
                <h1 className="m-0 self-stretch h-[138.7px] relative text-13xl leading-[38.4px] font-normal font-[inherit] text-black inline-block shrink-0 mq925:text-7xl mq925:leading-[31px] mq450:text-lgi mq450:leading-[23px]">
                  Among our top 1% of places, stays, eats, and
                  experiences—decided by you.
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessPrompt;
