import React from "react";
import "./styles.css";

export default function App() {
  let state = "OPEN";
  let fill = "#00984a";
  let availableSpace = 20;

  if (availableSpace <= 20) {
    fill = "#FDA936";
  }
  if (availableSpace === 0) {
    state = "CLOSED";
    fill = "#DE2145";
  }

  let availableSpaceFill = availableSpace.toString().padStart(4, "0");
  let rate_div = "HR";
  let rate = 50;

  return (
    <svg width="990" height="660" viewBox="0 0 990 660">
      <defs>
        <clipPath id="clip-Web_1920_1">
          <rect width="990" height="660" />
        </clipPath>
      </defs>
      <g
        id="Web_1920_1"
        data-name="Web 1920 – 1"
        clip-path="url(#clip-Web_1920_1)"
      >
        <rect width="990" height="660" fill="#fff" />
        <g id="content_v3.2" transform="translate(0 4)">
          <rect
            id="Rectangle_220"
            data-name="Rectangle 220"
            width="993"
            height="660"
            transform="translate(0 -4)"
          />
          <path
            id="Path_288"
            data-name="Path 288"
            d="M64.982,604.174c-16.48-2.1-31.836-9.474-44.732-20.865L32.4,564.141c10.809,9.694,21.046,16,33.361,18.11V540.97c-27.642-8.007-40.548-19.6-40.548-43.2v-.419c0-22.752,16.118-38.126,39.795-40.233V444.91H81.5v12.639c13.83,1.906,25.192,7.378,35.62,16l-10.6,19.807c-8.34-6.948-16.881-11.39-25.735-13.478v40.033c28.8,8.007,41.119,20.865,41.119,43.4v.429c0,22.952-16.3,38.355-40.357,40.672v20.826H64.982Zm.753-125.817c-11.924,1.049-18.177,8.207-18.177,17.481v.419c0,8.645,3.584,14.3,18.177,19.168Zm33.732,86.795v-.419c0-9.274-3.984-14.965-18.758-19.8v38.126c11.943-1.048,18.758-7.806,18.758-17.919"
            transform="translate(-0.948 -14.107)"
            fill="#fff"
          />
          <path
            id="Path_294"
            data-name="Path 294"
            d="M719.926,399.5H688.471l-4.442,12.162H667.54l27.27-70.534h18.825l27.175,70.534H724.415Zm-27.489-13.011h23.372L704.2,354.15Z"
            transform="translate(-31.265 -9.246)"
            fill="#fff"
          />
          <path
            id="Path_295"
            data-name="Path 295"
            d="M738.17,341.15H755.3l19.559,54.225,19.464-54.225H811.44l-27.165,70.515H765.449Z"
            transform="translate(-34.573 -9.247)"
            fill="#fff"
          />
          <path
            id="Path_296"
            data-name="Path 296"
            d="M861.316,399.5H829.862l-4.442,12.162H808.93L836.2,341.13h18.825L882.2,411.664H865.805Zm-27.489-13.011H857.2L845.57,354.15Z"
            transform="translate(-37.888 -9.246)"
            fill="#fff"
          />
          <rect
            id="Rectangle_227"
            data-name="Rectangle 227"
            width="15.022"
            height="70.515"
            transform="translate(850.841 331.903)"
            fill="#fff"
          />
          <path
            id="Path_297"
            data-name="Path 297"
            d="M923.05,341.15h15.012v57.3h29.824v13.211H923.05Z"
            transform="translate(-43.233 -9.247)"
            fill="#fff"
          />
          <text
            id="OPEN"
            transform="translate(21 193)"
            fill={fill}
            font-size="246"
            font-weight="700"
            letter-spacing="-0.05em"
          >
            <tspan x="0" y="0" style={{ fontFamily: "Gotham A" }}>
              {state}
            </tspan>
          </text>
          <text
            id="_50_HR"
            data-name="50/HR"
            transform="translate(125 607)"
            fill="#fff"
            font-size="246"
            font-weight="700"
            letter-spacing="-0.05em"
          >
            <tspan x="0" y="0" style={{ fontFamily: "Gotham A" }}>
              {rate}/{rate_div}
            </tspan>
          </text>
          <text
            id="_0123"
            text-anchor="end"
            data-name="0123"
            transform="translate(600 391)"
            fill="#fff"
            font-size="235"
            font-family="AndaleMono, Andale Mono"
            letter-spacing="-0.1em"
            opacity="0.228"
          >
            <tspan x="0" y="0">
              {availableSpaceFill}
            </tspan>
          </text>
          <text
            id="_123"
            text-anchor="end"
            data-name="123"
            transform="translate(600 391)"
            fill="#fff"
            font-size="235"
            font-family="AndaleMono, Andale Mono"
            letter-spacing="-0.1em"
          >
            <tspan x="0" y="0">
              {availableSpace}
            </tspan>
          </text>
        </g>
      </g>
    </svg>
  );
}
