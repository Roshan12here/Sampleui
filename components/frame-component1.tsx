import type { NextPage } from "next";
import { Button } from "@mui/material";

export type FrameComponent1Type = {
  className?: string;
};

const FrameComponent1: NextPage<FrameComponent1Type> = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-center pt-0 pb-[212.2px] pl-[21px] pr-5 box-border max-w-full text-left text-5xl text-black font-inter mq925:pb-[138px] mq925:box-border ${className}`}
    >
      <div className="flex flex-col items-end justify-start gap-[115px] max-w-full gap-[29px] gap-[57px]">
        <div className="flex flex-col items-start justify-start gap-[35.2px] max-w-full gap-[18px]">
          <div className="flex flex-row items-start justify-start py-0 px-[35px] box-border max-w-full">
            <h3 className="m-0 relative text-inherit leading-[29px] font-normal font-[inherit] mq450:text-lgi mq450:leading-[23px]">
              Trusted and Loved by Over 50,000+ Travelers, Locals, and Business
              Owners
            </h3>
          </div>
          <div className="flex flex-row items-start justify-center [row-gap:20px] mq1350:flex-wrap">
            <img
              className="h-[102px] w-[102px] relative object-cover min-h-[102px] shrink-0"
              alt=""
              src="/handsomehappybeardedman-copy-3@2x.png"
            />
            <img
              className="h-[102px] w-[101px] relative object-cover min-h-[102px] shrink-0 z-[1] ml-[-23.4px]"
              alt=""
              src="/handsomehappybeardedman-copy-4@2x.png"
            />
            <img
              className="h-[102px] w-[102px] relative object-cover min-h-[102px] shrink-0 z-[2] ml-[-23.4px]"
              alt=""
              src="/handsomehappybeardedman-copy-5@2x.png"
            />
            <img
              className="h-[102px] w-[102px] relative object-cover min-h-[102px] shrink-0 z-[3] ml-[-23.4px]"
              alt=""
              src="/handsomehappybeardedman@2x.png"
            />
            <img
              className="h-[102px] w-[102px] relative object-cover min-h-[102px] shrink-0 z-[4] ml-[-23.4px]"
              alt=""
              src="/handsomehappybeardedman-copy@2x.png"
            />
            <img
              className="h-[102px] w-[101px] relative object-cover min-h-[102px] shrink-0 z-[5] ml-[-23.4px]"
              alt=""
              src="/handsomehappybeardedman-copy-2@2x.png"
            />
            <img
              className="h-[102px] w-[101px] relative object-cover min-h-[102px] shrink-0 z-[6] ml-[-23.4px]"
              alt=""
              src="/handsomehappybeardedman-copy-3-1@2x.png"
            />
            <img
              className="h-[102px] w-[102px] relative object-cover min-h-[102px] shrink-0 z-[7] ml-[-23.4px]"
              alt=""
              src="/handsomehappybeardedman-copy-4-1@2x.png"
            />
            <img
              className="h-[102px] w-[102px] relative object-cover min-h-[102px] shrink-0 z-[8] ml-[-23.4px]"
              alt=""
              src="/handsomehappybeardedman-copy-5-1@2x.png"
            />
            <img
              className="h-[102px] w-[102px] relative object-cover min-h-[102px] shrink-0 z-[9] ml-[-23.4px]"
              alt=""
              src="/handsomehappybeardedman-1@2x.png"
            />
            <img
              className="h-[102px] w-[101px] relative object-cover min-h-[102px] shrink-0 z-[10] ml-[-23.4px]"
              alt=""
              src="/handsomehappybeardedman-copy-1@2x.png"
            />
            <img
              className="h-[102px] w-[102px] relative object-cover min-h-[102px] shrink-0 z-[11] ml-[-23.4px]"
              alt=""
              src="/handsomehappybeardedman-copy-2-1@2x.png"
            />
          </div>
        </div>
        <div className="w-[945px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
          <Button
            className="h-[55px] w-[197px] z-[1]"
            disableElevation
            variant="contained"
            sx={{
              textTransform: "none",
              color: "#fff",
              fontSize: "16",
              background: "#006837",
              borderRadius: "5px",
              "&:hover": { background: "#006837" },
              width: 197,
              height: 55,
            }}
          >
            Write a Review
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent1;
