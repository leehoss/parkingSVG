import React, { useEffect, useRef } from "react";
import "./styles.css";

function Detail(props) {
  return (
    <g>
      <text
        id="_100_HR"
        className="txt-rate"
        transform="translate(13.047 403.361)"
      >
        <tspan x="0" y="0">
          ${props.rate}/{props.rate_div}
        </tspan>
      </text>
      <text
        id="available-spaces"
        data-name="146"
        className="txt-rate"
        transform="translate(13.047 618.361)"
      />
    </g>
  );
}
function State(props) {
  let state;
  switch (props.status) {
    case "OPEN":
      state = (
        <text
          id="status"
          className="txt-open"
          transform="translate(9.558 205.24)"
        >
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
            className="txt-reserved"
            transform="translate(15 172)"
          >
            <tspan x="0" y="0">
              RESERVED
            </tspan>
          </text>
          <text
            id="ONLY"
            className="txt-reserved"
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
        <text id="status" className="txt-closed" transform="translate(15 172)">
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
  let availableSpace = 21;
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
    if (svgRef.current && availableSpace && status === 'OPEN') {
      const svgDocument = svgRef.current.ownerDocument;
      const svgNS = "http://www.w3.org/2000/svg";
      var textElement = svgDocument.getElementById("available-spaces");
      textElement.innerHTML = "";
      let tspanElement = document.createElementNS(svgNS, "tspan"); // Create first tspan element
      let textNode = svgDocument.createTextNode(availableSpace); // Create text in tspan element

      tspanElement.appendChild(textNode);
      tspanElement.setAttributeNS(null, "x", "0");
      tspanElement.setAttributeNS(null, "y", "0"); // Add tspan element to DOM
      textElement.appendChild(tspanElement); // Add text to tspan element

      let tspanAvail = document.createElementNS(svgNS, "tspan");
      let textNodeAvail = svgDocument.createTextNode("AVAIL"); // Create text in tspan element
      tspanAvail.appendChild(textNodeAvail);

      tspanAvail.setAttributeNS(
        null,
        "x",
        tspanElement.getComputedTextLength() + 30
      );
      tspanAvail.setAttributeNS(null, "class", "txt-avail"); // Add tspan element to DOM
      tspanAvail.setAttributeNS(null, "y", "0"); // Add tspan element to DOM
      textElement.appendChild(tspanAvail); // Add text to tspan element
      //NOT SURE THIS IS WORKING ON FIRST LOAD?>
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
      <rect className="bg" width="990" height="660" />
      <State status={status} />
      {detailBlock}
    </svg>
  );
}
