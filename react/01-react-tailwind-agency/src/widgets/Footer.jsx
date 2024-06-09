import React from "react";
import Logo from "../logo.svg";

function Footer() {
  return (
    <footer className="grid gap-8 md:gap-0 text-gray-500 md:w-4/5 mx-auto mt-32 md:grid-cols-5">
      <div>
        <img src={Logo} alt="" className="w-8 h-8" />
        <p>
          <a href="#">协议</a>.<a href="#">隐私</a>
        </p>
      </div>
      {[1, 2, 3].map((v) => (
        <nav key={v} className="grid gap-2">
          <p className="text-lg text-black">产品介绍</p>
          <a href="">产品介绍1</a>
          <a href="">产品介绍2</a>
          <a href="">产品介绍3</a>
          <a href="">产品介绍4</a>
          <a href="">产品介绍5</a>
        </nav>
      ))}
      <nav className="grid gap-2 content-start">
        <p className="text-base text-black">注册</p>
        <p>注册注册注册注册注册注册注册注册注册注册</p>
        <input
          type="text"
          name=""
          id=""
          className="py-2 px-3 border"
          placeholder="您的邮箱"
        />
      </nav>
      <div className="col-span-full mt-12 border-t py-9 flex flex-col gap-4 justify-between md:flex-row">
        <p>
          由{" "}
          <a href="https://cruip.com/" className="text-blue-500">
            Cruip
          </a>{" "}
          提供设计. All rights reserved.
        </p>
        <p className="flex gap-4">
          <a href="">
            <svg
              width="38"
              height="35"
              viewBox="0 0 38 35"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g filter="url(#filter0_d_0_428)">
                <rect x="3" y="2" width="32" height="32" rx="16" fill="white" />
              </g>
              <path
                d="M27 13.5C26.4 13.8 25.8 13.9 25.1 14C25.8 13.6 26.3 13 26.5 12.2C25.9 12.6 25.2 12.8 24.4 13C23.8 12.4 22.9 12 22 12C20.3 12 18.8 13.5 18.8 15.3C18.8 15.6 18.8 15.8 18.9 16C16.2 15.9 13.7 14.6 12.1 12.6C11.8 13.1 11.7 13.6 11.7 14.3C11.7 15.4 12.3 16.4 13.2 17C12.7 17 12.2 16.8 11.7 16.6C11.7 18.2 12.8 19.5 14.3 19.8C14 19.9 13.7 19.9 13.4 19.9C13.2 19.9 13 19.9 12.8 19.8C13.2 21.1 14.4 22.1 15.9 22.1C14.8 23 13.4 23.5 11.8 23.5C11.5 23.5 11.3 23.5 11 23.5C12.5 24.4 14.2 25 16 25C22 25 25.3 20 25.3 15.7C25.3 15.6 25.3 15.4 25.3 15.3C26 14.8 26.6 14.2 27 13.5Z"
                fill="#666666"
              />
              <defs>
                <filter
                  id="filter0_d_0_428"
                  x="0"
                  y="0"
                  width="38"
                  height="38"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dy="1" />
                  <feGaussianBlur stdDeviation="1.5" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0.0980392 0 0 0 0 0.0980392 0 0 0 0 0.0980392 0 0 0 0.16 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_0_428"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_0_428"
                    result="shape"
                  />
                </filter>
              </defs>
            </svg>
          </a>
          <a href="">
            <svg
              width="38"
              height="34"
              viewBox="0 0 38 34"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g filter="url(#filter0_d_0_431)">
                <rect x="3" y="2" width="32" height="32" rx="16" fill="white" />
              </g>
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M19 10.2C14.6 10.2 11 13.8 11 18.2C11 21.7 13.3 24.7 16.5 25.8C16.9 25.9 17 25.6 17 25.4C17 25.2 17 24.7 17 24C14.8 24.5 14.3 23 14.3 23C13.9 22.1 13.4 21.8 13.4 21.8C12.7 21.3 13.5 21.3 13.5 21.3C14.3 21.4 14.7 22.1 14.7 22.1C15.4 23.4 16.6 23 17 22.8C17.1 22.3 17.3 21.9 17.5 21.7C15.7 21.5 13.9 20.8 13.9 17.7C13.9 16.8 14.2 16.1 14.7 15.6C14.6 15.4 14.3 14.6 14.8 13.5C14.8 13.5 15.5 13.3 17 14.3C17.6 14.1 18.3 14 19 14C19.7 14 20.4 14.1 21 14.3C22.5 13.3 23.2 13.5 23.2 13.5C23.6 14.6 23.4 15.4 23.3 15.6C23.8 16.2 24.1 16.9 24.1 17.7C24.1 20.8 22.2 21.4 20.4 21.6C20.7 22 21 22.5 21 23.2C21 24.3 21 25.1 21 25.4C21 25.6 21.1 25.9 21.6 25.8C24.8 24.7 27.1 21.7 27.1 18.2C27 13.8 23.4 10.2 19 10.2Z"
                fill="#666666"
              />
              <defs>
                <filter
                  id="filter0_d_0_431"
                  x="0"
                  y="0"
                  width="38"
                  height="38"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dy="1" />
                  <feGaussianBlur stdDeviation="1.5" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0.0980392 0 0 0 0 0.0980392 0 0 0 0 0.0980392 0 0 0 0.16 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_0_431"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_0_431"
                    result="shape"
                  />
                </filter>
              </defs>
            </svg>
          </a>
          <a href="">
            <svg
              width="35"
              height="34"
              viewBox="0 0 35 34"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g filter="url(#filter0_d_0_434)">
                <rect x="3" y="2" width="32" height="32" rx="16" fill="white" />
              </g>
              <path
                d="M25.9683 12.276C25.9427 12.1558 25.8538 12.0589 25.7363 12.023C25.526 11.9811 25.3084 11.9966 25.1063 12.068C25.1063 12.068 11.0873 17.106 10.2863 17.664C10.1143 17.785 10.0563 17.854 10.0273 17.936C9.88925 18.336 10.3203 18.509 10.3203 18.509L13.9333 19.686C13.9943 19.697 14.057 19.6932 14.1163 19.675C14.9383 19.156 22.3863 14.453 22.8163 14.295C22.8843 14.275 22.9343 14.295 22.9163 14.344C22.7443 14.944 16.3103 20.663 16.2753 20.698C16.2406 20.727 16.2223 20.771 16.2263 20.816L15.8893 24.344C15.8893 24.344 15.7473 25.444 16.8453 24.344C17.6243 23.565 18.3723 22.919 18.7453 22.606C19.9873 23.464 21.3243 24.412 21.9013 24.906C22.0965 25.0962 22.3609 25.1984 22.6333 25.189C22.973 25.147 23.2516 24.8995 23.3333 24.567C23.3333 24.567 25.8943 14.292 25.9793 12.909C25.9873 12.774 26.0003 12.692 26.0003 12.592C26.0039 12.4857 25.9931 12.3794 25.9683 12.276Z"
                fill="#666666"
              />
              <defs>
                <filter
                  id="filter0_d_0_434"
                  x="0"
                  y="0"
                  width="38"
                  height="38"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dy="1" />
                  <feGaussianBlur stdDeviation="1.5" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0.0980392 0 0 0 0 0.0980392 0 0 0 0 0.0980392 0 0 0 0.16 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_0_434"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_0_434"
                    result="shape"
                  />
                </filter>
              </defs>
            </svg>
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
