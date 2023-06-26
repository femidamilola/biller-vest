"use client";

import { SvgProps } from "@/types";
import { FC } from "react";



const CubeIcon: FC<SvgProps> = (props) => {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M7.5 7.65625C7.225 7.65625 6.95 7.5875 6.7 7.45625L2.63125 5.2625C2.2625 5.0625 2.03125 4.66875 2.03125 4.23125C2.03125 3.79375 2.2625 3.4 2.63125 3.2L6.7 1.00625C7.2 0.7375 7.8 0.7375 8.29375 1.00625L12.3625 3.2C12.7313 3.4 12.9625 3.79375 12.9625 4.23125C12.9625 4.66875 12.7313 5.0625 12.3625 5.2625L8.29375 7.45625C8.05 7.59375 7.775 7.65625 7.5 7.65625ZM7.5 1.7375C7.38125 1.7375 7.25625 1.76875 7.14375 1.83125L3.08125 4.01875C2.975 4.075 2.96875 4.19375 2.96875 4.23125C2.96875 4.26875 2.975 4.3875 3.08125 4.4375L7.15 6.63125C7.375 6.75 7.63125 6.75 7.85625 6.63125L11.925 4.4375C12.025 4.38125 12.0375 4.2625 12.0375 4.23125C12.0375 4.19375 12.0312 4.075 11.925 4.025L7.85625 1.83125C7.74375 1.76875 7.61875 1.7375 7.5 1.7375Z"
        fill={props.fillColor || "white"}
      />
      <path
        d="M6.1125 14.2C5.9375 14.2 5.75625 14.1563 5.59375 14.075L1.80625 12.1875C1.175 11.8688 0.78125 11.2313 0.78125 10.525V6.95001C0.78125 6.54376 0.9875 6.17501 1.33125 5.96251C1.68125 5.75001 2.1 5.73126 2.4625 5.91251L6.25 7.80001C6.88125 8.11876 7.275 8.75001 7.275 9.46251V13.0375C7.275 13.4438 7.06875 13.8125 6.725 14.025C6.5375 14.1438 6.325 14.2 6.1125 14.2ZM1.94375 6.72501C1.89375 6.72501 1.85 6.74376 1.825 6.75626C1.7875 6.78126 1.71875 6.83751 1.71875 6.95001V10.525C1.71875 10.875 1.9125 11.1938 2.225 11.35L6.00625 13.2438C6.10625 13.2938 6.1875 13.2563 6.225 13.2375C6.2625 13.2125 6.33125 13.1563 6.33125 13.0438V9.46876C6.33125 9.11876 6.1375 8.80001 5.825 8.64376L2.04375 6.75001C2.00625 6.73126 1.975 6.72501 1.94375 6.72501Z"
        fill={props.fillColor || "white"}
      />
      <path
        d="M8.8876 14.2C8.6751 14.2 8.4626 14.1438 8.2751 14.025C7.93135 13.8125 7.7251 13.4438 7.7251 13.0375V9.4625C7.7251 8.75625 8.11885 8.11875 8.7501 7.8L12.5313 5.90625C12.8938 5.725 13.3188 5.74375 13.6626 5.95625C14.0063 6.16875 14.2126 6.5375 14.2126 6.94375V10.5188C14.2126 11.225 13.8188 11.8625 13.1876 12.1813L9.40635 14.075C9.24385 14.1625 9.0626 14.2 8.8876 14.2ZM13.0563 6.725C13.0251 6.725 12.9938 6.73125 12.9563 6.75L9.1751 8.64375C8.8626 8.8 8.66885 9.1125 8.66885 9.46875V13.0438C8.66885 13.1563 8.7376 13.2125 8.7751 13.2375C8.8126 13.2625 8.89385 13.2938 8.99385 13.2438L12.7751 11.35C13.0876 11.1938 13.2813 10.875 13.2813 10.525V6.95C13.2813 6.8375 13.2126 6.78125 13.1751 6.75625C13.1501 6.74375 13.1063 6.725 13.0563 6.725Z"
        fill={props.fillColor || "white"}
      />
    </svg>
  );
};
export default CubeIcon;
