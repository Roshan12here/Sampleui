import type { NextPage } from "next";
import {
  TextField,
  InputAdornment,
  Icon,
  IconButton,
  Button,
} from "@mui/material";

export type HomeButtonType = {
  className?: string;
};

const HomeButton: NextPage<HomeButtonType> = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch flex flex-row items-start justify-start max-w-full text-center text-29xl text-white font-poppins ${className}`}
    >
      <div className="w-[1795.2px] flex flex-col items-end justify-start py-0 pl-0 pr-5 box-border gap-[49px] max-w-full gap-6">
        <header className="self-stretch flex flex-row items-start justify-between py-0 pl-0 pr-1 box-border max-w-full gap-5 text-left text-mid text-black font-inter">
          <div className="w-[216.6px] flex flex-col items-start justify-start pt-2.5 pb-0 pl-0 pr-6 box-border">
            <img
              className="self-stretch h-11 relative max-w-full overflow-hidden shrink-0 object-cover"
              loading="lazy"
              alt=""
              src="/rehbar-logo@2x.png"
            />
          </div>
          <TextField
            className="[border:none] bg-[transparent] h-[55px] w-[430px] font-inter text-base text-gray-100 max-w-full"
            placeholder="Search Destinations or Businesses"
            variant="outlined"
            InputProps={{
              startAdornment: (
                <img width="23px" height="23px" src="/search-icon.png" />
              ),
            }}
            sx={{
              "& fieldset": { borderColor: "#e4e4e7" },
              "& .MuiInputBase-root": {
                height: "55px",
                backgroundColor: "#fff",
                paddingLeft: "19px",
                borderRadius: "5px",
              },
              "& .MuiInputBase-input": {
                paddingLeft: "20.1px",
                color: "#919191",
              },
              width: "430px",
            }}
          />
          <div className="flex flex-col items-start justify-start pt-[17.1px] px-0 pb-0">
            <a className="[text-decoration:none] relative leading-[21px] text-[inherit] inline-block min-w-[48px]">
              Home
            </a>
          </div>
          <div className="flex flex-col items-start justify-start pt-[17.1px] px-0 pb-0">
            <a className="[text-decoration:none] relative leading-[21px] text-[inherit] inline-block min-w-[73px]">
              Business
            </a>
          </div>
          <div className="flex flex-col items-start justify-start pt-[17.1px] pb-0 pl-0 pr-1.5">
            <a className="[text-decoration:none] relative leading-[21px] text-[inherit] inline-block min-w-[100px]">
              Destinations
            </a>
          </div>
          <div className="flex flex-col items-start justify-start pt-[17.1px] pb-0 pl-0 pr-2">
            <a className="[text-decoration:none] relative leading-[21px] text-[inherit] inline-block min-w-[119px] whitespace-nowrap">
              Write a Review
            </a>
          </div>
          <div className="w-[281.2px] flex flex-row items-start justify-start gap-[8.2px]">
            <Button
              className="h-[55px] flex-[0.3723]"
              disableElevation
              variant="contained"
              sx={{
                textTransform: "none",
                color: "#919191",
                fontSize: "16",
                background: "#fff",
                border: "#e4e4e7 solid 1px",
                borderRadius: "5px",
                "&:hover": { background: "#fff" },
                height: 55,
              }}
            >
              Sign in
            </Button>
            <div className="flex-1 flex flex-col items-start justify-start pt-[2.5px] px-0 pb-0">
              <Button
                className="self-stretch h-[50px]"
                disableElevation
                variant="contained"
                sx={{
                  textTransform: "none",
                  color: "#fff",
                  fontSize: "16",
                  background: "#006837",
                  borderRadius: "5px",
                  "&:hover": { background: "#006837" },
                  height: 50,
                }}
              >
                Add Listing
              </Button>
            </div>
          </div>
        </header>
        <div className="rounded-39xl bg-black flex flex-col items-end justify-start pt-[193.2px] pb-[69.7px] pl-[428px] pr-[466px] box-border gap-[163.4px] max-w-full gap-[41px] mq925:pt-[126px] mq925:pb-[45px] mq925:pl-[107px] mq925:pr-[116px] mq925:box-border gap-[82px] mq1350:pl-[214px] mq1350:pr-[233px] mq1350:box-border gap-5 mq450:pt-[82px] mq450:px-5 mq450:pb-[29px] mq450:box-border">
          <div className="w-[1775px] h-[770px] relative rounded-39xl bg-black hidden max-w-full" />
          <div className="flex flex-col items-end justify-start gap-5 max-w-full">
            <h1 className="m-0 relative text-inherit leading-[52px] font-[inherit] mq925:text-19xl mq925:leading-[42px] mq450:text-10xl mq450:leading-[31px]">
              <p className="m-0">
                <span>{`We Help People Discover Best `}</span>
                <b className="font-poppins">Places</b>
              </p>
              <p className="m-0">
                <span className="font-poppins">{`and `}</span>
                <b className="font-poppins">Businesses</b>
                <span> in Pakistan</span>
              </p>
            </h1>
            <div className="w-[840.2px] flex flex-row items-start justify-end py-0 px-[57px] box-border max-w-full text-xl font-inter mq925:pl-7 mq925:pr-7 mq925:box-border">
              <div className="flex-1 flex flex-col items-start justify-start gap-[30.8px] max-w-full gap-[15px]">
                <div className="w-[698.1px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
                  <div className="relative leading-[52px] mq450:text-base mq450:leading-[42px]">
                    Search any spot or business and see what others say
                  </div>
                </div>
                <div className="self-stretch h-[67.7px] shadow-[0px_4px_15px_rgba(0,_0,_0,_0.05)] rounded-8xs bg-white flex flex-row items-start justify-between pt-[0.1px] pb-0 pl-9 pr-0 box-border max-w-full gap-5 text-left text-base-4 text-darkgray-400">
                  <div className="self-stretch w-[725px] relative shadow-[0px_4px_15px_rgba(0,_0,_0,_0.05)] rounded-8xs bg-white hidden max-w-full" />
                  <div className="w-[304.5px] flex flex-col items-start justify-start pt-[19.3px] px-0 pb-0 box-border">
                    <div className="self-stretch h-[48.3px] relative leading-[27.7px] inline-block shrink-0">
                      Search Destinations or Businesses
                    </div>
                  </div>
                  <button className="cursor-pointer [border:none] p-0 bg-[transparent] h-[86.4px] w-[145.2px] relative">
                    <div className="absolute top-[0px] left-[0px] rounded-8xs bg-seagreen w-[145.2px] h-[66.8px]" />
                    <a className="[text-decoration:none] absolute w-[calc(100%_-_11.7px)] top-[19.2px] left-[5.8px] text-xl-1 leading-[24.17px] font-inter text-white text-center inline-block h-[67.2px] z-[1] mq450:text-base mq450:leading-[19px]">
                      Search
                    </a>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[835.8px] flex flex-row items-start justify-center max-w-full text-left text-16xl text-silver">
            <div className="w-[451.6px] flex flex-col items-start justify-start gap-[7.2px] max-w-full">
              <div className="self-stretch flex flex-row items-start justify-start py-0 pl-[9px] pr-0 box-border max-w-full">
                <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-5 mq450:flex-wrap">
                  <div className="flex flex-col items-start justify-start py-0 pl-0 pr-[17px]">
                    <b className="relative leading-[42px] inline-block min-w-[80px] mq925:text-9xl mq925:leading-[34px] mq450:text-2xl mq450:leading-[25px]">
                      15k+
                    </b>
                  </div>
                  <b className="relative leading-[42px] inline-block min-w-[80px] mq925:text-9xl mq925:leading-[34px] mq450:text-2xl mq450:leading-[25px]">
                    10k+
                  </b>
                  <b className="relative leading-[42px] inline-block min-w-[73px] mq925:text-9xl mq925:leading-[34px] mq450:text-2xl mq450:leading-[25px]">
                    1m+
                  </b>
                </div>
              </div>
              <div className="w-[441px] flex flex-row items-start justify-between gap-5 max-w-full text-base font-inter mq450:flex-wrap">
                <div className="flex flex-col items-start justify-start py-0 pl-0 pr-1">
                  <div className="relative leading-[20px] inline-block min-w-[86px]">
                    Businesses
                  </div>
                </div>
                <div className="relative leading-[20px] inline-block min-w-[95px]">
                  Destinations
                </div>
                <div className="relative leading-[20px] inline-block min-w-[63px]">
                  Reviews
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeButton;
