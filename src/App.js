import React, { useEffect, useRef } from "react";
import "./styles.css";

function Detail(props) {
  return (
    <g>
      <text id="_100_HR" class="txt-rate" transform="translate(13.047 403.361)">
        <tspan x="0" y="0">
          ${props.rate}/{props.rate_div}
        </tspan>
      </text>
      <text
        id="_146"
        data-name="146"
        class="txt-rate"
        transform="translate(13.047 618.361)"
      >
        <tspan id="available-spaces" x="0" y="0">
          {props.availableSpace}
        </tspan>
        <tspan class="txt-avail" x="200" y="0">
          AVAIL
        </tspan>
      </text>
    </g>
  );
}

function State(props) {
  let state;
  switch (props.status) {
    case "OPEN":
      state = (
        <text id="status" class="txt-open" transform="translate(9.558 205.24)">
          <tspan x="0" y="0">
            OPEN
          </tspan>
        </text>
      );
      break;
    case "RESERVED":
      state = (
        <g>
          <text
            id="RESERVED"
            class="txt-reserved"
            transform="translate(15 172)"
          >
            <tspan x="0" y="0">
              RESERVED
            </tspan>
          </text>
          <text
            id="ONLY"
            class="txt-reserved"
            transform="translate(19.547 339.651)"
          >
            <tspan x="0" y="0">
              ONLY
            </tspan>
          </text>
        </g>
      );
      break;
    default:
      state = (
        <text id="status" class="txt-closed" transform="translate(15 172)">
          <tspan x="0" y="0">
            CLOSED
          </tspan>
        </text>
      );
      break;
  }
  return state;
}

export default function App() {
  let status = "OPEN";
  let availableSpace = 20;
  //let availableSpaceFill = availableSpace.toString().padStart(4, "0");
  let ratePeriod = "HR";
  let rate = 50;

  if (availableSpace === 0) {
    status = "FULL";
  }

  let detailBlock =
    status === "OPEN" ? (
      <Detail
        rate={rate}
        rate_div={ratePeriod}
        availableSpace={availableSpace}
      />
    ) : (
      ""
    );

  const svgRef = useRef(null);
  useEffect(() => {
    if (svgRef.current) {
      console.log(svgRef.current);
      const svgDocument = svgRef.current.ownerDocument;
      const availableSapcesContainer = document.createElementNS(
        svgDocument,
        "g"
      );
      const root = svgDocument.getElementById("svgLayout");
      root.appendChild(availableSapcesContainer);
    }
  }, [availableSpace, svgRef]);

  return (
    <svg
      id="svgLayout"
      ref={svgRef}
      width="100%"
      height="100%"
      viewBox="0 0 990 660"
    >
      <rect class="bg" width="990" height="660" />
      <State status={status} />
      {detailBlock}
    </svg>
  );
}
