import type { NextPage } from "next";
import { Button } from "@mui/material";

export type RectangleComponentType = {
  className?: string;
};

const RectangleComponent: NextPage<RectangleComponentType> = ({
  className = "",
}) => {
  return (
    <section
      className={`w-full !m-[0] absolute right-[0px] bottom-[3407.9px] left-[0px] bg-black flex flex-row items-start justify-between pt-[136px] pb-[107.4px] pl-40 pr-[155px] box-border max-w-full gap-5 text-left text-base text-gold font-inter mq925:pl-10 mq925:pr-[38px] mq925:box-border mq1350:flex-wrap mq1350:pl-20 mq1350:pr-[77px] mq1350:box-border ${className}`}
    >
      <div className="h-[796.9px] w-[1920px] relative bg-black hidden max-w-full" />
      <div className="w-[467.7px] flex flex-col items-start justify-start pt-[57.2px] px-0 pb-0 box-border max-w-full">
        <div className="self-stretch flex flex-col items-start justify-start gap-[1.2px] max-w-full">
          <div className="w-[370px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
            <div className="w-[118px] flex flex-row items-start justify-start relative">
              <img
                className="h-[131px] w-[131px] absolute !m-[0] top-[-105.4px] left-[-121px] object-cover z-[0]"
                alt=""
                src="/logo-04@2x.png"
              />
              <div className="h-[69.3px] flex-1 relative leading-[19.2px] inline-block shrink-0 z-[1]">
                by Rehbar.pk
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[15.4px] shrink-0 max-w-full text-23xl text-white font-poppins">
            <h1 className="m-0 w-[434px] relative text-inherit leading-[50.39px] font-bold font-[inherit] inline-block shrink-0 max-w-full z-[1] mq925:text-15xl mq925:leading-[40px] mq450:text-6xl mq450:leading-[30px]">
              <p className="m-0">Your dream itinerary, crafted with you</p>
            </h1>
            <div className="self-stretch h-[158.9px] relative text-base leading-[19.2px] font-inter text-gray-400 inline-block shrink-0 z-[2]">
              <p className="m-0">
                Awaragardi by Rehbar offer customize packages for honeymoon,
                family and corporate trips anywhere in Pakistan.
              </p>
              <p className="m-0">&nbsp;</p>
              <p className="m-0">
                If you need help plan your unforgettable tour. Awaragardi will
                craft a custom itinerary based on the requirements.
              </p>
            </div>
          </div>
          <Button
            className="w-[201px] h-[74px] shrink-0 z-[1]"
            disableElevation
            variant="contained"
            sx={{
              textTransform: "none",
              color: "#000",
              fontSize: "24",
              background: "#fff",
              borderRadius: "13px",
              "&:hover": { background: "#fff" },
              width: 201,
              height: 74,
            }}
          >
            Book Now
          </Button>
        </div>
      </div>
      <div className="w-[434px] flex flex-col items-start justify-start gap-[29.5px] max-w-full text-5xl text-white">
        <div className="self-stretch flex flex-row items-start justify-start gap-[39px] mq450:flex-wrap gap-[19px]">
          <div className="h-[75px] w-[75px] relative rounded-[50%] bg-gold z-[1]" />
          <div className="flex-1 flex flex-col items-start justify-start pt-[2.4px] px-0 pb-0 box-border min-w-[208px]">
            <div className="self-stretch flex flex-col items-start justify-start gap-[14.8px]">
              <h3 className="m-0 relative text-inherit leading-[29px] font-normal font-[inherit] z-[1] mq450:text-lgi mq450:leading-[23px]">
                Honeymoon Trips
              </h3>
              <div className="self-stretch h-[80.3px] relative text-base leading-[19.2px] text-gray-400 inline-block shrink-0 z-[1]">
                <p className="m-0">
                  New couple? Get your one in a lifetime memorable trip.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-[62px] gap-[31px]">
          <img
            className="self-stretch relative max-w-full overflow-hidden max-h-full z-[1]"
            alt=""
            src="/line-2.svg"
          />
          <div className="self-stretch flex flex-col items-start justify-start gap-[40.4px] gap-5">
            <div className="self-stretch flex flex-row items-start justify-start gap-[39px] mq450:flex-wrap gap-[19px]">
              <div className="w-[75px] flex flex-row items-start justify-start">
                <div className="h-[75px] flex-1 relative">
                  <div className="absolute top-[0px] left-[0px] rounded-[50%] bg-gold w-full h-full z-[1]" />
                  <img
                    className="absolute top-[15.8px] left-[16px] w-11 h-11 object-cover z-[2]"
                    alt=""
                    src="/nountrip6604167@2x.png"
                  />
                </div>
              </div>
              <div className="flex-1 flex flex-col items-start justify-start pt-[2.4px] px-0 pb-0 box-border min-w-[208px]">
                <div className="self-stretch flex flex-col items-start justify-start gap-[14.8px]">
                  <h3 className="m-0 relative text-inherit leading-[29px] font-normal font-[inherit] z-[1] mq450:text-lgi mq450:leading-[23px]">
                    Family Trips
                  </h3>
                  <div className="self-stretch h-[68.3px] relative text-base leading-[19.2px] text-gray-400 inline-block shrink-0 z-[1]">
                    <p className="m-0">
                      Whole Family Trip? Tell us when and where? Rest is up to
                      us.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-[62px] gap-[31px]">
              <img
                className="self-stretch relative max-w-full overflow-hidden max-h-full z-[1]"
                alt=""
                src="/line-3.svg"
              />
              <div className="self-stretch flex flex-row items-start justify-start gap-[39px] mq450:flex-wrap gap-[19px]">
                <div className="h-[75px] w-[75px] relative rounded-[50%] bg-gold z-[2]" />
                <div className="flex-1 flex flex-col items-start justify-start pt-[2.4px] px-0 pb-0 box-border min-w-[208px]">
                  <div className="self-stretch flex flex-col items-start justify-start gap-[14.9px]">
                    <h3 className="m-0 relative text-inherit leading-[29px] font-normal font-[inherit] z-[2] mq450:text-lgi mq450:leading-[23px]">
                      Corporate Trips
                    </h3>
                    <div className="self-stretch h-[68.3px] relative text-base leading-[19.2px] text-gray-400 inline-block shrink-0 z-[1]">
                      <p className="m-0">
                        Planning a trip with colleague? Let’s plan some
                        Awaragardi
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RectangleComponent;
