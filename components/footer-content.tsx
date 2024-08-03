import type { NextPage } from "next";

export type FooterContentType = {
  className?: string;
};

const FooterContent: NextPage<FooterContentType> = ({ className = "" }) => {
  return (
    <div
      className={`w-[1555px] flex flex-row items-start justify-start py-0 px-[62px] box-border max-w-full text-left text-base text-darkgray-200 font-inter mq1350:pl-[31px] mq1350:pr-[31px] mq1350:box-border ${className}`}
    >
      <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-5 mq1350:flex-wrap">
        <div className="w-[480px] flex flex-col items-start justify-start pt-[6.8px] px-0 pb-0 box-border max-w-full">
          <div className="self-stretch flex flex-col items-start justify-start gap-[25.3px]">
            <div className="flex flex-row items-start justify-start py-0 px-[3px]">
              <img
                className="h-[59px] w-[257px] relative object-cover z-[1]"
                loading="lazy"
                alt=""
                src="/rehbarlogolw1@2x.png"
              />
            </div>
            <div className="self-stretch flex flex-col items-start justify-start">
              <div className="self-stretch h-[43.6px] relative leading-[26px] inline-block shrink-0 z-[2]">
                Get Socials with us
              </div>
              <div className="flex flex-row items-start justify-start py-0 px-[3px] mt-[-0.9px]">
                <div className="flex flex-row items-start justify-start py-0 px-0 z-[1]">
                  <input className="m-0 h-[26px] w-[164px]" type="checkbox" />
                  <img
                    className="self-stretch w-[210px] relative max-h-full min-h-[26px] z-[1] ml-[-164px]"
                    alt=""
                    src="/color-overlay-1.svg"
                  />
                  <input
                    className="m-0 h-[26px] w-[210px] ml-[-164px]"
                    type="checkbox"
                  />
                  <input
                    className="m-0 h-[26px] w-[210px] ml-[-164px]"
                    type="checkbox"
                  />
                  <input
                    className="m-0 h-[26px] w-[210px] ml-[-164px]"
                    type="checkbox"
                  />
                  <input
                    className="m-0 h-[26px] w-[26px] relative min-h-[26px] ml-[-164px]"
                    type="checkbox"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[455px] flex flex-row items-start justify-start gap-[201px] max-w-full text-smi mq925:flex-wrap gap-[100px]">
          <div className="flex flex-col items-start justify-start gap-[26.2px]">
            <div className="relative leading-[22px] inline-block min-w-[98px] z-[1]">
              OUR COMPANY
            </div>
            <div className="relative text-base leading-[44px] text-white z-[1]">
              <p className="m-0">About us</p>
              <p className="m-0">Careers</p>
              <p className="m-0">Contact us</p>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start gap-[26.2px]">
            <a className="[text-decoration:none] relative leading-[22px] text-[inherit] inline-block min-w-[79px] z-[1]">
              RESOURCES
            </a>
            <div className="h-[133px] relative text-base leading-[44px] text-white inline-block z-[1]">
              <p className="m-0">Add a Listing</p>
              <p className="m-0">{`Articles & Resources`}</p>
              <p className="m-0">Account Login</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterContent;
