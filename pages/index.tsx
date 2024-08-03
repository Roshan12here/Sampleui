import type { NextPage } from "next";
import HomeButton from "../components/home-button";
import DestinationsTitle from "../components/destinations-title";
import ImageBanner from "../components/image-banner";
import CategoriesContainer from "../components/categories-container";
import Testimonials from "../components/testimonials";
import Cities from "../components/cities";
import Steps from "../components/steps";
import RectangleComponent from "../components/rectangle-component";
import FrameComponent1 from "../components/frame-component1";
import Background from "../components/background";
import BusinessPrompt from "../components/business-prompt";
import FooterContent from "../components/footer-content";
import FrameComponent from "../components/frame-component";

const Rehbar: NextPage = () => {
  return (
    <div className="w-full relative bg-white overflow-hidden flex flex-col items-end justify-start pt-24 px-0 pb-0 box-border leading-[normal] tracking-[normal] text-left text-base text-gray-400 font-inter">
      <section className="w-[1868px] flex flex-col items-end justify-start pt-0 pb-[326.7px] pl-5 pr-0 box-border relative gap-[26.4px] min-h-[2072px] max-w-full mq925:pb-[138px] mq925:box-border mq1350:pb-[212px] mq1350:box-border">
        <HomeButton />
        <div className="!m-[0] absolute top-[900.4px] left-[106px] flex flex-col items-start justify-start gap-[60.9px] max-w-full">
          <DestinationsTitle />
          <ImageBanner />
        </div>
      </section>
      <section className="w-[1870px] flex flex-col items-start justify-start pt-0 pb-[72px] pl-5 pr-0 box-border gap-[147.6px] max-w-full gap-[37px] mq925:pb-[31px] mq925:box-border gap-[74px] mq1350:pb-[47px] mq1350:box-border gap-[18px] mq450:pb-5 mq450:box-border">
        <CategoriesContainer />
        <Testimonials />
      </section>
      <section className="self-stretch flex flex-col items-end justify-start pt-0 pb-[997.1px] pl-0 pr-[306px] box-border gap-[66.9px] max-w-full text-left text-4xl-7 text-darkgray-100 font-inter gap-[33px] mq925:pr-[76px] mq925:pb-[274px] mq925:box-border mq1350:pr-[153px] mq1350:pb-[421px] mq1350:box-border gap-[17px] mq450:pr-5 mq450:box-border">
        <Cities />
        <div className="w-[1310.9px] flex flex-col items-start justify-start py-0 pl-5 pr-0 box-border gap-[100px] max-w-full gap-[50px] gap-[25px]">
          <div className="w-[1271.2px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
            <div className="w-[154.9px] flex flex-col items-start justify-start gap-[5.1px]">
              <div className="relative leading-[29px] mq450:text-lgi mq450:leading-[23px]">
                How it Works
              </div>
              <div className="self-stretch flex flex-row items-start justify-start py-0 pl-0.5 pr-0">
                <div className="h-px flex-1 relative bg-darkgray-100" />
              </div>
            </div>
          </div>
          <Steps />
        </div>
      </section>
      <section className="self-stretch flex flex-row items-start justify-center py-0 pl-5 pr-[21px] box-border max-w-full text-left text-4xl-7 text-darkgray-100 font-inter">
        <div className="w-[1157px] flex flex-col items-start justify-start gap-[26.5px] max-w-full">
          <div className="self-stretch flex flex-row items-start justify-center py-0 px-5">
            <div className="w-[159px] flex flex-col items-start justify-start gap-[4.5px]">
              <div className="flex flex-row items-start justify-start py-0 px-px">
                <div className="relative leading-[29px] mq450:text-lgi mq450:leading-[23px]">
                  Testimonials
                </div>
              </div>
              <div className="self-stretch h-px relative bg-darkgray-100" />
            </div>
          </div>
          <h1 className="m-0 self-stretch h-[117.5px] relative text-23xl leading-[50.4px] font-bold font-poppins text-black text-center inline-block shrink-0 z-[1] mq925:text-15xl mq925:leading-[40px] mq450:text-6xl mq450:leading-[30px]">
            Hear What Others Said
          </h1>
        </div>
      </section>
      <section className="w-[1920px] overflow-x-auto flex flex-row items-start justify-start pt-0 pb-[39px] pl-2.5 pr-0 box-border gap-[33.7px] max-w-full gap-[17px]">
        <img
          className="self-stretch w-[531px] relative max-h-full shrink-0 object-cover min-h-[324px] max-w-full"
          loading="lazy"
          alt=""
          src="/3@2x.png"
        />
        <img
          className="self-stretch w-[530px] relative max-h-full shrink-0 object-cover min-h-[324px] max-w-full"
          loading="lazy"
          alt=""
          src="/3-copy@2x.png"
        />
        <img
          className="self-stretch w-[530px] relative max-h-full shrink-0 object-cover min-h-[324px] max-w-full"
          loading="lazy"
          alt=""
          src="/3-copy-2@2x.png"
        />
        <img
          className="self-stretch w-[530px] relative max-h-full shrink-0 object-cover min-h-[324px] max-w-full"
          loading="lazy"
          alt=""
          src="/3-copy-2@2x.png"
        />
      </section>
      <section className="self-stretch flex flex-row items-start justify-end pt-0 pb-[116.8px] pl-0 pr-[9px] box-border max-w-full mq450:pb-[76px] mq450:box-border">
        <div className="w-[2223px] grid flex-row items-start justify-start gap-[33.7px] max-w-[117%] shrink-0 grid-cols-[repeat(4,_minmax(398px,_1fr))] gap-[17px] mq925:grid-cols-[minmax(398px,_1fr)] mq1825:justify-center mq1825:grid-cols-[repeat(2,_minmax(398px,_690px))]">
          <img
            className="relative max-w-full overflow-hidden max-h-full object-cover min-h-[324px] mq925:w-full"
            loading="lazy"
            alt=""
            src="/3-copy-5@2x.png"
          />
          <img
            className="relative max-w-full overflow-hidden max-h-full object-cover min-h-[324px] mq925:w-full"
            loading="lazy"
            alt=""
            src="/3-copy-5@2x.png"
          />
          <img
            className="relative max-w-full overflow-hidden max-h-full object-cover min-h-[324px] mq925:w-full"
            alt=""
            src="/3-copy-3-1@2x.png"
          />
          <img
            className="relative max-w-full overflow-hidden max-h-full object-cover min-h-[324px] mq925:w-full"
            alt=""
            src="/3-copy-3-2@2x.png"
          />
        </div>
      </section>
      <RectangleComponent />
      <img
        className="w-[43px] h-11 absolute !m-[0] right-[530px] bottom-[4009px] object-cover z-[2]"
        alt=""
        src="/nounhoneymoon7043974@2x.png"
      />
      <img
        className="w-11 h-[46px] absolute !m-[0] right-[529px] bottom-[3569px] object-cover z-[8]"
        alt=""
        src="/nounbusinesstrip3309665@2x.png"
      />
      <div className="w-[324px] relative leading-[19.2px] hidden max-w-full z-[9]">
        <p className="m-0">
          Easily add your business or destination with details, photos, and
          descriptions to attract more visitors. Showcase what makes your place
          special.
        </p>
        <p className="m-0">&nbsp;</p>
      </div>
      <div className="w-[324px] relative leading-[19.2px] hidden max-w-full z-[10]">
        <p className="m-0">
          Browse and review listings to share your experiences and find the best
          places around. Help others make informed choices based on your
          insights.
        </p>
        <p className="m-0">&nbsp;</p>
      </div>
      <div className="w-[324px] relative leading-[19.2px] hidden max-w-full z-[11]">
        <p className="m-0">
          Connect with travelers and locals who discover your listing, turning
          their interest into your business's success. Gain new customers
          through Rehbar.pk.
        </p>
        <p className="m-0">&nbsp;</p>
      </div>
      <FrameComponent1 />
      <Background />
      <BusinessPrompt />
      <section className="self-stretch flex flex-col items-start justify-start max-w-full text-left text-6xl text-white font-inter">
        <div className="self-stretch flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
          <div className="w-[906px] rounded-3xl bg-mediumseagreen flex flex-row items-start justify-between pt-[35.2px] pb-[42.8px] pl-24 pr-[107px] box-border gap-5 max-w-full z-[1] mq925:flex-wrap mq925:pl-12 mq925:pr-[53px] mq925:box-border mq450:pl-6 mq450:pr-[26px] mq450:box-border">
            <div className="h-[108px] w-[906px] relative rounded-3xl bg-mediumseagreen hidden max-w-full" />
            <h3 className="m-0 relative text-inherit [text-decoration:underline] leading-[30px] font-normal font-[inherit] z-[1] mq450:text-xl mq450:leading-[24px]">
              Write Your Review
            </h3>
            <h3 className="m-0 relative text-inherit [text-decoration:underline] leading-[30px] font-normal font-[inherit] z-[1] mq450:text-xl mq450:leading-[24px]">
              Add your Listing
            </h3>
          </div>
        </div>
        <footer className="self-stretch bg-gray-600 flex flex-col items-start justify-start pt-[121.2px] px-40 pb-[38.3px] box-border gap-[36.6px] max-w-full mt-[-54px] gap-[18px] mq925:pl-10 mq925:pr-10 mq925:box-border mq1350:pl-20 mq1350:pr-20 mq1350:box-border mq450:pb-[25px] mq450:box-border">
          <div className="w-[1920px] h-[432px] relative bg-gray-600 hidden max-w-full" />
          <FooterContent />
          <FrameComponent />
        </footer>
      </section>
    </div>
  );
};

export default Rehbar;
