import type { NextPage } from "next";

export type CardGridType = {
  className?: string;
};

const CardGrid: NextPage<CardGridType> = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch flex flex-row items-end justify-start gap-[50px] max-w-full text-left text-5xl text-gray-400 font-inter mq925:flex-wrap gap-[25px] ${className}`}
    >
      <div className="flex-1 flex flex-col items-start justify-end pt-0 px-0 pb-[24.2px] box-border min-w-[224px] max-w-full">
        <textarea
          className="[border:none] bg-gainsboro-200 h-[184px] w-auto [outline:none] self-stretch relative rounded-3xl"
          rows={9}
          cols={17}
        />
      </div>
      <div className="w-[327px] flex flex-col items-start justify-start gap-[16.1px] min-w-[327px] max-w-full mq925:flex-1">
        <h3 className="m-0 relative text-inherit leading-[29px] font-normal font-[inherit] shrink-0 mq450:text-lgi mq450:leading-[23px]">
          News Study Reveals
        </h3>
        <h1 className="m-0 self-stretch h-[138.7px] relative text-13xl leading-[38.4px] font-normal font-[inherit] text-black inline-block shrink-0 mq925:text-7xl mq925:leading-[31px] mq450:text-lgi mq450:leading-[23px]">
          05 Benefits of solo female travel
        </h1>
      </div>
    </div>
  );
};

export default CardGrid;
