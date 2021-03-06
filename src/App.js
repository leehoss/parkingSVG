import React, { useEffect, useRef } from "react";
import "./styles.css";

/*
CHANGE var availableSpace 
OR change Status 
*/

function Slot2(props) {
  return (
    <g id="no-event-parking">
      <rect
        className="fill-red"
        width="1056"
        height="178"
        transform="translate(0 1307)"
      />
      <text
        id="message-2"
        text-anchor="middle"
        transform="translate(528 1430.7)"
      >
        <tspan class="txt-message txt-bold" x="0" y="0">
          {props.slot}
        </tspan>
      </text>
    </g>
  );
}

function Detail(props) {
  let ratesArray = props.ratesArray;
  let rate2 = "";
  let translateX =
    ratesArray.length > 1 ? props.canvasWidth / 4 : props.canvasWidth / 2;

  let rate1TX = `translate(${translateX} 1024)`;
  let rate2TX = `translate(${translateX * 3} 1024)`;

  let rate1 = (
    <g transform={rate1TX}>
      {" "}
      <text data-name="$20/HR" className="txt-rate" textAnchor="middle">
        <tspan x="0" y="0">
          ${ratesArray[0].rate}/{ratesArray[0].ratePeriod}
        </tspan>
      </text>
      <text
        data-name="W/ VALIDATION"
        className="txt-rate-message"
        textAnchor="middle"
        transform="translate(0 78)"
      >
        <tspan x="0" y="0">
          {ratesArray[0].text}
        </tspan>
      </text>
    </g>
  );
  console.log(ratesArray.length);
  if (ratesArray.length > 1) {
    rate2 = (
      <g transform={rate2TX}>
        <text data-name="$50/HR" className="txt-rate" textAnchor="middle">
          <tspan x="0" y="0">
            ${ratesArray[1].rate}/{ratesArray[1].ratePeriod}
          </tspan>
        </text>
        <text
          data-name="W/O VALIDATION"
          className="txt-rate-message"
          textAnchor="middle"
          transform="translate(0 78)"
        >
          <tspan x="0" y="0">
            {ratesArray[1].text}
          </tspan>
        </text>
      </g>
    );
  }

  return (
    <g>
      <g id="rates">
        {rate1}
        {rate2}
      </g>

      <text
        id="available-spaces"
        textAnchor="middle"
        transform="translate(516 1239.7)"
      >
        <tspan className="txt-spaces">{props.availableSpace}</tspan>
        <tspan>&nbsp;&nbsp;&nbsp;&nbsp;</tspan>
        <tspan className="txt-spaces-message">
          {props.availableSpaceMessage}
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
        <g id="icon-open">
          <path
            id="Path_66571"
            className="icon-parking"
            d="M528.5,43.4C388.7,43.4,274.9,157.2,274.9,297S388.7,550.6,528.5,550.6,782.1,436.8,782.1,297,668.4,43.4,528.5,43.4"
          />
          <path
            id="Path_66573"
            className="icon-parking-p"
            d="M418,128H551.7q29.4,0,52.6,8.2t39.3,23.1a101.2,101.2,0,0,1,24.8,35.8q8.6,20.8,8.6,46v.9q0,28.5-10.3,50a102.1,102.1,0,0,1-28.3,36,122.7,122.7,0,0,1-42.1,21.7,178.4,178.4,0,0,1-51.7,7.2H490v98.2H418ZM547,293q27.1,0,42.1-14.3t15-35.3v-.9q0-24.3-15.7-36.9T545.6,193H490V293Z"
          />
          <g id="message">
            <text
              className="txt-message"
              textAnchor="middle"
              transform="translate(528 665.4)"
            >
              <tspan x="0" y="0">
                RETAURANT,
              </tspan>
            </text>
            <text
              className="txt-message"
              textAnchor="middle"
              transform="translate(528 772.6)"
            >
              <tspan x="0" y="0">
                RETAIL &amp; MOVIE
              </tspan>
            </text>
            <text
              className="txt-message"
              textAnchor="middle"
              transform="translate(528 879.8)"
            >
              <tspan x="0" y="0">
                HOUSE PARKING
              </tspan>
            </text>
          </g>
        </g>
      );
      break;
    default:
      state = (
        <g id="icon-closed" transform="translate(0 4)">
          <path
            className="icon-parking"
            d="M283.9,304c0-137.4,110.3-248.7,246.4-248.7S776.6,166.7,776.6,304,666.3,552.8,530.3,552.8,283.9,441.4,283.9,304"
          />
          <path d="M419.3,139.7H551.2q29.1,0,51.9,8.1t38.7,23a100.9,100.9,0,0,1,24.4,35.6q8.5,20.7,8.5,45.9v.9q0,28.4-10.1,49.8a101.5,101.5,0,0,1-27.9,35.9,120.6,120.6,0,0,1-41.5,21.7,174.5,174.5,0,0,1-51,7.2h-54v97.8h-71ZM546.6,304q26.7,0,41.5-14.2t14.8-35.2v-.9q0-24.2-15.5-36.8t-42.2-12.6H490.4V304Z" />
          <path
            className="icon-parking-x"
            d="M530.5,44C389.3,44,274.4,160,274.4,302.6S389.3,561.3,530.5,561.3s256.2-116,256.2-258.6S671.8,44,530.5,44m0,489.4c-126,0-228.6-103.5-228.6-230.8a230.9,230.9,0,0,1,62.5-158.1L676.7,479.9a226.2,226.2,0,0,1-146.2,53.6m166.1-72.7L384.4,125.4A226.2,226.2,0,0,1,530.5,71.8c126.1,0,228.6,103.5,228.6,230.8a230.9,230.9,0,0,1-62.5,158.1"
          />
          <g id="message">
            <text
              id="PARKING"
              className="txt-message"
              textAnchor="middle"
              transform="translate(528 685.4)"
            >
              <tspan class="cls-3" x="0" y="0">
                PARKING
              </tspan>
            </text>
            <text
              id="FULL"
              className="txt-message"
              textAnchor="middle"
              transform="translate(528 793)"
            >
              <tspan x="0" y="0">
                FULL
              </tspan>
            </text>
          </g>
        </g>
      );
      break;
  }
  return state;
}

export default function App() {
  let canvasWidth = 1056;
  let canvasHeight = 1486;
  let viewBox = `0 0 ${canvasWidth} ${canvasHeight}`;
  let slot2 = "NO EVENT PARKING";
  let status = "OPEN";
  let availableSpace = 100;
  let availableSpaceMessage = "SPACES";
  //let availableSpaceFill = availableSpace.toString().padStart(4, "0");

  let ratesArray = [
    {
      rate: 20,
      ratePeriod: "HR",
      text: "W/ VALIDATION"
    },
    { rate: 50, ratePeriod: "HR", text: "W/O VALIDATION" }
  ];

  if (availableSpace === 0) {
    status = "FULL";
  }

  let detailBlock =
    status === "OPEN" ? (
      <Detail
        ratesArray={ratesArray}
        canvasWidth={canvasWidth}
        availableSpace={availableSpace}
        availableSpaceMessage={availableSpaceMessage}
      />
    ) : (
      ""
    );

  let message2 = slot2 !== "" && availableSpace ? <Slot2 slot={slot2} /> : "";
  const svgRef = useRef(null);
  /*
  
  useEffect(() => {
    if (svgRef.current && availableSpace) {
      const svgDocument = svgRef.current.ownerDocument;
      const svgNS = "http://www.w3.org/2000/svg";
      var availableSpacesContainer = svgDocument.getElementById(
        "available-spaces"
      );
      var availableSpacesMessageContainer = svgDocument.getElementById(
        "available-spaces-message"
      );
      availableSpacesContainer.innerHTML = "";
      availableSpacesMessageContainer.innerHTML = "";

      let tspanElement = document.createElementNS(svgNS, "tspan"); // Create first tspan element
      let textNode = svgDocument.createTextNode(availableSpace); // Create text in tspan element

      tspanElement.appendChild(textNode);
      tspanElement.setAttributeNS(null, "x", "0");
      tspanElement.setAttributeNS(null, "y", "0"); // Add tspan element to DOM
      tspanElement.setAttributeNS(null, "class", "txt-spaces");

      let tspanAvail = document.createElementNS(svgNS, "tspan");
      let textNodeAvail = svgDocument.createTextNode(availableSpaceMessage); // Create text in tspan element
      tspanAvail.appendChild(textNodeAvail);
      tspanAvail.setAttributeNS(null, "class", "txt-spaces-message"); // Add tspan element to DOM
      tspanAvail.setAttributeNS(null, "y", "0"); // Add tspan element to DOM

      let tspanAvailablesSpacesMessageWidth = tspanAvail.getComputedTextLength();
      let tspanAvailablesSpacesWidth = tspanElement.getComputedTextLength();
      let wordGap = 30;
      let totalWordWidth =
        tspanAvailablesSpacesMessageWidth +
        tspanAvailablesSpacesWidth +
        wordGap;

      console.log(tspanElement.getComputedTextLength());

      tspanAvail.setAttributeNS(
        null,
        "x",
        tspanElement.getComputedTextLength()
      );

      availableSpacesContainer.appendChild(tspanElement);
      availableSpacesMessageContainer.appendChild(tspanAvail); // Add text to tspan element
      //NOT SURE THIS IS WORKING ON FIRST LOAD?>
    }
  }, [availableSpace, svgRef]);
*/
  return (
    <svg
      id="svgLayout"
      ref={svgRef}
      width="100%"
      height="100%"
      viewBox={viewBox}
    >
      <rect className="bg" width={canvasWidth} height={canvasHeight} />
      <State status={status} />
      {detailBlock}
      {message2}
    </svg>
  );
}
