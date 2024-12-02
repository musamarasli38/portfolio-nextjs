import React from "react";
import { RxGithubLogo, RxLinkedinLogo } from "react-icons/rx";
import { FaBluesky } from "react-icons/fa6";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px] z-[40] ">
      <div className="w-full flex flex-col items-center justify-center m-auto">
        <div className="w-full h-full flex flex-row items-center justify-around flex-wrap">
          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <div className="font-bold text-[16px]">Community</div>
            <Link
              href="https://bsky.app/profile/musamarasli.bsky.social"
              className="flex flex-row items-center my-[15px] cursor-pointer"
            >
              <FaBluesky />{" "}
              <span className="text-[15px] ml-[6px]">BlueSky</span>
            </Link>
            <Link
              href="https://github.com/musamarasli38"
              className="flex flex-row items-center my-[15px] cursor-pointer"
            >
              <RxGithubLogo />
              <span className="text-[15px] ml-[6px]">Github</span>
            </Link>
            <Link
              href="https://www.linkedin.com/in/musamarasli/"
              className="flex flex-row items-center my-[15px] cursor-pointer"
            >
              <RxLinkedinLogo />
              <span className="text-[15px] ml-[6px]">Linkedin</span>
            </Link>
          </div>
          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <div className="font-bold text-[16px]">Placeholder</div>
            <Link
              href="https://bsky.app/profile/musamarasli.bsky.social"
              className="flex flex-row items-center my-[15px] cursor-pointer"
            >
              <FaBluesky />
              <span className="text-[15px] ml-[6px]">Placeholder</span>
            </Link>
            <Link
              href="https://github.com/musamarasli38"
              className="flex flex-row items-center my-[15px] cursor-pointer"
            >
              <RxGithubLogo />
              <span className="text-[15px] ml-[6px]">Placeholder</span>
            </Link>
          </div>
          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <div className="font-bold text-[16px]">About</div>
            <p className="flex flex-row items-center my-[15px] cursor-pointer">
              <span className="text-[15px] ml-[6px]">Placeholder</span>
            </p>
            <p className="flex flex-row items-center my-[15px] cursor-pointer">
              <span className="text-[15px] ml-[6px]">Learning about me</span>
            </p>
            <p className="flex flex-row items-center my-[15px] cursor-pointer">
              <span className="text-[15px] ml-[6px]">
                musa.can.marasli@outlook.com
              </span>
            </p>
          </div>
        </div>

        <div className="mb-[20px] text-[15px] text-center">
          &copy; Musa Marasli 2024. All rights reserved
        </div>
      </div>
    </div>
  );
};

export default Footer;
