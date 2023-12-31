"use client";

import Button from "@/components/form/Button";
import CCIcon from "@/components/icons/CCIcon";
import FlexibleIcon from "@/components/icons/FlexibleIcon";
import ShieldIcon from "@/components/icons/ShieldIcon";
import CryptoConverter from "@/components/modal/CryptoConverter";
import GetWalletModal from "@/components/modal/GetWalletModal";
import { FC } from "react";

interface Props {
  title?: string;
  btnColor?: string;
  btnTitle?: string;
}

const HowItWorks: FC<Props> = ({
  title = "How NFT Works on BillerVest",
  btnTitle = "Get Wallet",
  btnColor = "bg-[#230251]",
}) => {
  return (
    <section className="bg-primary-main resp-padding flex items-center flex-col ">
      <h2 className=" text-[25px] md:text-[50px] mb-[15px] md:mb-[30px] ">
        {title}
      </h2>
      <h3 className="text-blue-text text-center max-w-[950px] leading-[30.47px] font-[400] text-[18px] md:text-[22px] ">
        We have a number of benefits that will improve your NFT wallet and it’s
        management
      </h3>
      <div className="mt-10 md:mt-[60px] grid grid-cols-1 md:grid-cols-3 gap-[35px] md:gap-[50px] ">
        {listArr.map((item, index) => (
          <div
            className="bg-main rounded-[20px] px-[25px] py-[25px] flex items-center flex-col "
            key={`t-${index}`}
          >
            <div className=" ">{item.icon}</div>
            <h4 className="font-work text-[24px] md:text-[36px] font-[400] leading-[42.23px] ">
              {item.title}
            </h4>
            <p className=" mt-[25px] text-center md:mt-[37px] text-blue-text text-[16px] md:text-[18px] leading-[23.46px] font-work ">
              {item.paragraph}
            </p>
          </div>
        ))}
      </div>
      <div className="mt-[60px] ">
        {btnTitle.includes("Get Wallet") ? (
          <CryptoConverter
            triggerChild={
              <Button
                btnText={btnTitle}
                bgColor={btnColor}
                paddingInline="px-[50px]"
              />
            }
          />
        ) : (
          <Button
            btnText={btnTitle}
            bgColor={btnColor}
            paddingInline="px-[50px]"
          />
        )}
      </div>
    </section>
  );
};
export default HowItWorks;

const listArr = [
  {
    icon: <ShieldIcon />,
    title: "Secure Storage",
    paragraph:
      "Zero risk, Zero Chargeback, your NFT is safely stored on your device only, We value your Privacy and we dont keep any of your data",
  },
  {
    icon: <CCIcon />,
    title: "Easy Usage",
    paragraph:
      "100+ fiat options globally: enable purchases via credit/debit card, Apple Pay, SWIFT, SEPA and more.",
  },
  {
    icon: <FlexibleIcon />,
    title: "Flexibility",
    paragraph: "Unrivaled flexibility, dynamic UX, highly customizable UI",
  },
];
