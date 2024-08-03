import type { NextPage } from "next";

export type CitiesType = {
  className?: string;
};

const Cities: NextPage<CitiesType> = ({ className = "" }) => {
  return (
    <div
      className={`mr-[-307.1px] w-[1921px] h-[598px] relative bg-whitesmoke-200 max-w-[120%] shrink-0 text-left text-base text-gray-400 font-inter mq1350:h-auto mq1350:min-h-[598] ${className}`}
    >
      <div className="absolute top-[0px] left-[0px] bg-whitesmoke-200 w-full h-full hidden" />
      <div className="absolute top-[187.7px] left-[201px] w-[1485px] flex flex-row items-start justify-between gap-5 max-w-full mq1350:flex-wrap">
        <div className="h-[373.1px] w-[216.8px] relative leading-[22px] inline-block shrink-0 z-[1]">
          <p className="m-0">Karachi</p>
          <p className="m-0">Lahore</p>
          <p className="m-0">Faisalabad</p>
          <p className="m-0">Rawapindi</p>
          <p className="m-0">GujranwalaPeshawar</p>
          <p className="m-0">Multan</p>
          <p className="m-0">Hyderabad</p>
          <p className="m-0">Islamabad</p>
          <p className="m-0">Quetta</p>
          <p className="m-0">Bahawalpur</p>
          <p className="m-0">Sargodha</p>
          <p className="m-0">Sialkot</p>
          <p className="m-0">Sukkur</p>
          <p className="m-0">Larkana</p>
          <p className="m-0">Rahim Yar Khan</p>
        </div>
        <div className="h-[384.5px] w-[216.8px] relative leading-[22px] inline-block shrink-0 z-[1]">
          <p className="m-0">Sheikhupura</p>
          <p className="m-0">Jhang</p>
          <p className="m-0">Dera Ghazi Khan</p>
          <p className="m-0">Gujrat</p>
          <p className="m-0">Sahiwal</p>
          <p className="m-0">Wah Cantt</p>
          <p className="m-0">Mardan</p>
          <p className="m-0">Kasur</p>
          <p className="m-0">Okara</p>
          <p className="m-0">Swat</p>
          <p className="m-0">Nawabshah</p>
          <p className="m-0">Chiniot</p>
          <p className="m-0">Kotri</p>
          <p className="m-0">Kāmoke</p>
          <p className="m-0">Hafizabad</p>
          <p className="m-0">Sadiqabad</p>
        </div>
        <div className="h-[384.5px] w-[216.8px] relative leading-[22px] inline-block shrink-0 z-[1]">
          <p className="m-0">Mirpur Khas</p>
          <p className="m-0">Burewala</p>
          <p className="m-0">Kohat</p>
          <p className="m-0">Khanewal</p>
          <p className="m-0">Dera Ismail Khan</p>
          <p className="m-0">Muzaffargarh</p>
          <p className="m-0">Abbottabad</p>
          <p className="m-0">Mandi Bahauddin</p>
          <p className="m-0">Shikarpur</p>
          <p className="m-0">Jacobabad</p>
          <p className="m-0">Jhelum</p>
          <p className="m-0">Khanpur</p>
          <p className="m-0">Khairpur</p>
          <p className="m-0">Khuzdar</p>
          <p className="m-0">Pakpattan</p>
          <p className="m-0">Hub</p>
        </div>
        <div className="h-[384.5px] w-[216.8px] relative leading-[22px] inline-block shrink-0 z-[1]">
          <p className="m-0">Daska</p>
          <p className="m-0">Gojra</p>
          <p className="m-0">Dadu</p>
          <p className="m-0">Muridke</p>
          <p className="m-0">Bahawalnagar</p>
          <p className="m-0">Samundri</p>
          <p className="m-0">Tando Allahyar</p>
          <p className="m-0">Jaranwala</p>
          <p className="m-0">Chishtian</p>
          <p className="m-0">Muzaffarabad</p>
          <p className="m-0">Attock</p>
          <p className="m-0">Vehari</p>
          <p className="m-0">Kot Abdul Malik</p>
          <p className="m-0">Chakwal</p>
          <p className="m-0">Kamalia</p>
          <p className="m-0">Kot Addu</p>
        </div>
        <div className="h-[384.5px] w-[216.8px] relative leading-[22px] inline-block shrink-0 z-[1]">
          <p className="m-0">Wazirabad</p>
          <p className="m-0">Mansehra</p>
          <p className="m-0">Layyah</p>
          <p className="m-0">Mirpur</p>
          <p className="m-0">Swabi</p>
          <p className="m-0">Chaman</p>
          <p className="m-0">Taxila</p>
          <p className="m-0">Nowshera</p>
          <p className="m-0">Khushab</p>
          <p className="m-0">Mianwali</p>
          <p className="m-0">Lodhran</p>
          <p className="m-0">Hasilpur</p>
          <p className="m-0">Charsadda</p>
          <p className="m-0">Bhakkar</p>
          <p className="m-0">Sambrial</p>
          <p className="m-0">Narowal</p>
        </div>
      </div>
      <div className="absolute top-[44.8px] left-[199.2px] w-[68.6px] flex flex-col items-start justify-start gap-[5.2px] text-5xl text-darkgray-100">
        <h3 className="m-0 relative text-inherit leading-[29px] font-normal font-[inherit] inline-block min-w-[65px] mq450:text-lgi mq450:leading-[23px]">
          Cities
        </h3>
        <div className="self-stretch flex flex-row items-start justify-start py-0 pl-px pr-0">
          <div className="h-px flex-1 relative bg-darkgray-100" />
        </div>
      </div>
      <h1 className="m-0 absolute top-[108.6px] left-[201.2px] text-18xl leading-[44.4px] font-bold font-poppins text-black inline-block w-[1007.3px] h-[108.2px] mq925:text-11xl mq925:leading-[36px] mq450:text-3xl mq450:leading-[27px]">
        <p className="m-0">{`Search Top Destinations & Businesses in Your City`}</p>
      </h1>
    </div>
  );
};

export default Cities;
