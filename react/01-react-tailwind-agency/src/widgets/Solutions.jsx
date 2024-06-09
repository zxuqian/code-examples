import React from "react";
import SectionHeading from "./SectionHeading";
import Image1 from "../assets/pexels-photo-8348457.jpg";

function Solutions() {
  return (
    <div>
      <SectionHeading
        title="解决方案"
        subTitle="解决方案解决方案解决方案解决方案解决方案解决方案解决方案解决方案"
      />
      <div className="grid lg:grid-cols-2 mt-20 gap-20">
        <div>
          <h3 className="mt-7 text-[32px] font-fold">强有力的工具</h3>
          <p className="mt-4 mb-8 text-gray-500">
            强有力的工具强有力的工具强有力的工具强有力的工具强有力的工具强有力的工具强有力的工具强有力的工具强有力的工具
          </p>
          <ul className="grid gap-3">
            {[1, 2, 3].map((v) => (
              <li
                className={`p-5 justify-between rounded border border-zinc-100 ${
                  v === 1 && "bg-zinc-100"
                }`}
                key={v}
              >
                <p className="text-lg font-bold">构建简单的生态系统</p>
                <div className="flex justify-between relative">
                  <p className="text-lg leading-7 mt-1">
                    构建简单的生态系统构建简单的生态系统构建简单的生态系统构建简单的生态系统构建简单的生态系统构建简单的生态系统构建简单的生态系统构建简单的生态系统
                  </p>
                  <svg
                    width="38"
                    height="38"
                    viewBox="0 0 38 38"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="shrink-0 ml-8 relative -top-2"
                  >
                    <g filter="url(#filter0_d_0_125)">
                      <rect
                        x="3"
                        y="2"
                        width="32"
                        height="32"
                        rx="16"
                        fill="white"
                      />
                    </g>
                    <path
                      d="M24.953 16.2892C24.8715 16.1119 24.6942 15.9983 24.499 15.9982H19.14L19.984 12.6192C20.0391 12.3947 19.9332 12.1618 19.7278 12.0557C19.5224 11.9497 19.2711 11.9983 19.12 12.1732L13.12 19.1732C12.9933 19.3214 12.9643 19.5298 13.0457 19.7069C13.1271 19.8841 13.304 19.9978 13.499 19.9982H18.858L18.014 23.3772C17.9581 23.6021 18.0641 23.836 18.27 23.9422C18.3407 23.9792 18.4193 23.9985 18.499 23.9982C18.6448 23.9979 18.7833 23.934 18.878 23.8232L24.878 16.8232C25.0051 16.6751 25.0344 16.4666 24.953 16.2892Z"
                      fill="#191919"
                    />
                    <defs>
                      <filter
                        id="filter0_d_0_125"
                        x="0"
                        y="0"
                        width="38"
                        height="38"
                        filterUnits="userSpaceOnUse"
                        color-interpolation-filters="sRGB"
                      >
                        <feFlood
                          flood-opacity="0"
                          result="BackgroundImageFix"
                        />
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
                          result="effect1_dropShadow_0_125"
                        />
                        <feBlend
                          mode="normal"
                          in="SourceGraphic"
                          in2="effect1_dropShadow_0_125"
                          result="shape"
                        />
                      </filter>
                    </defs>
                  </svg>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <img src={Image1} alt="" />
      </div>
    </div>
  );
}

export default Solutions;
