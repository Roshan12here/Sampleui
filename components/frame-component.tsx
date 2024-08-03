import type { NextPage } from "next";

export type FrameComponentType = {
  className?: string;
};

const FrameComponent: NextPage<FrameComponentType> = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch flex flex-col items-start justify-start gap-[31.7px] max-w-full text-center text-base text-gray-300 font-inter gap-4 ${className}`}
    >
      <img
        className="self-stretch relative max-w-full overflow-hidden max-h-full z-[1]"
        alt=""
        src="/line.svg"
      />
      <div className="self-stretch flex flex-row items-start justify-start py-0 pl-[60px] pr-[63px] box-border max-w-full mq1350:pl-[30px] mq1350:pr-[31px] mq1350:box-border">
        <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-5 mq925:flex-wrap">
          <div className="relative leading-[20.01px] z-[1]">
            © 2024 Rehbark.pk, All Rights Reserved
          </div>
          <div className="flex flex-row items-start justify-center gap-[93px] max-w-full text-gray-200 mq925:flex-wrap gap-[46px]">
            <a className="[text-decoration:none] relative leading-[20.01px] text-[inherit] z-[1]">{`Terms & Conditions`}</a>
            <a className="[text-decoration:none] relative leading-[20.01px] text-[inherit] inline-block min-w-[106px] z-[1]">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent;
