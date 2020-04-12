import React from "react";
import "./styles.css";

export default function App() {
  let state = "OPEN";
  let fill = "#00984a";
  let availableSpace = 0;

  let stateSpan;
  switch (state) {
    case "OPEN":
      stateSpan = (
        <text
          id="status"
          class="txt-open"
          transform="translate(533.653 345.484)"
        >
          <tspan x="0" y="0">
            OPEN
          </tspan>
        </text>
      );
      break;
    case "RESERVED":
      break;
    default:
      stateSpan = (
        <text id="status" class="txt-red" transform="translate(15 172)">
          <tspan x="0" y="0">
            CLOSED
          </tspan>
        </text>
      );
      break;
  }
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
    <svg width="100%" height="100%" viewBox="0 0 990 660">
      <g id="XPS100_2x6-open" class="cls-1">
        <rect class="cls-6" width="990" height="660" />
        <g
          id="Group_8"
          data-name="Group 8"
          transform="translate(-524.095 -140.244)"
        >
          <rect
            id="Rectangle_235"
            data-name="Rectangle 235"
            class="bg"
            width="990.193"
            height="659.688"
            transform="translate(1514.289 799.933) rotate(-180)"
          />
          {stateSpan}
          <text
            id="_100_HR"
            data-name="$100/HR"
            class="txt-rate"
            transform="translate(537.143 543.605)"
          >
            <tspan x="0" y="0">
              ${rate}/{rate_div}
            </tspan>
          </text>
          <text
            id="_146"
            data-name="146"
            class="txt-rate"
            transform="translate(537.143 758.605)"
          >
            <tspan x="0" y="0">
              {availableSpace}
            </tspan>
          </text>
        </g>
        <text id="AVAIL" class="txt-avail" transform="translate(495 618)">
          <tspan x="-162.498" y="0">
            AVAIL
          </tspan>
        </text>
      </g>
    </svg>
  );
}
