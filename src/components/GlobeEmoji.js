import React from 'react';

function GlobeEmoji({ size = 48, color = '#000' }) {
  const circleSize = size + 20; // Increase to add space for the border

  return (
    <div
      style={{
        width: `${circleSize}px`,
        height: `${circleSize}px`,
        borderRadius: '50%',
        backgroundColor: 'rgba(255, 255, 255, 1)', // 50% transparency

        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '0 0px 10px rgba(255, 0, 0, 0.8)', 
        margin: '10px', 
      }}
    >
      <svg
        id="Earth_3_48"
        width={size}
        height={size}
        viewBox="0 0 48 48"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        {/* Emoji Content */}
        <rect width="48" height="48" fill="none" opacity="0" />
        <g transform="matrix(1.83 0 0 1.83 24 24)">
          <g>
            <g transform="matrix(1 0 0 1 0 -0.01)">
              <path
                style={{
                  stroke: color,
                  strokeWidth: 1,
                  fill: 'none',
                  fillRule: 'nonzero',
                  opacity: 1,
                }}
                transform="translate(-12, -11.99)"
                d="M 23.5 11.941 C 23.50159171275929 15.001067986395222 22.28751074509358 17.93643581479595 20.124841139186827 20.10135585733736 C 17.96217153328007 22.266275899878778 15.028067986825537 23.483409114749293 11.967999999999995 23.485 C 5.5683437791916655 23.37871878301182 0.45027103197042884 18.134345496248937 0.5 11.734000000000004 C 0.5051194264893625 5.620583625950753 5.392985355083605 0.6310074476838068 11.504999999999992 0.4999999999999982 C 11.671000000000001 0.493 11.837000000000002 0.49 12.005 0.49 C 15.0510703214105 0.4734773803410443 17.9777943624284 1.6731983022407564 20.135849317586874 3.822992759963217 C 22.29390427274535 5.972787217685678 23.504840583977767 8.89488871367361 23.5 11.941 Z"
                strokeLinecap="round"
              />
            </g>
            <g transform="matrix(1 0 0 1 -2.74 -0.01)">
              <path
                style={{
                  stroke: color,
                  strokeWidth: 1,
                  fill: 'none',
                  fillRule: 'nonzero',
                  opacity: 1,
                }}
                transform="translate(-9.26, -11.99)"
                d="M 11.505 0.5 C 5.505000000000001 7 5.505000000000001 15.48 11.505 23.48"
                strokeLinecap="round"
              />
            </g>
            <g transform="matrix(1 0 0 1 2.76 -0.01)">
              <path
                style={{
                  stroke: color,
                  strokeWidth: 1,
                  fill: 'none',
                  fillRule: 'nonzero',
                  opacity: 1,
                }}
                transform="translate(-14.76, -11.99)"
                d="M 12.505 0.5 C 18.505000000000003 7 18.505000000000003 15.477 12.505 23.477"
                strokeLinecap="round"
              />
            </g>
            <g transform="matrix(1 0 0 1 -0.05 -6.52)">
              <path
                style={{
                  stroke: color,
                  strokeWidth: 1,
                  fill: 'none',
                  fillRule: 'nonzero',
                  opacity: 1,
                }}
                transform="translate(-11.95, -5.48)"
                d="M 2.386 5.484 L 21.52 5.484"
                strokeLinecap="round"
              />
            </g>
            <g transform="matrix(1 0 0 1 0 -0.52)">
              <path
                style={{
                  stroke: color,
                  strokeWidth: 1,
                  fill: 'none',
                  fillRule: 'nonzero',
                  opacity: 1,
                }}
                transform="translate(-12, -11.48)"
                d="M 0.503 11.484 L 23.5 11.484"
                strokeLinecap="round"
              />
            </g>
            <g transform="matrix(1 0 0 1 0.04 5.48)">
              <path
                style={{
                  stroke: color,
                  strokeWidth: 1,
                  fill: 'none',
                  fillRule: 'nonzero',
                  opacity: 1,
                }}
                transform="translate(-12.04, -17.48)"
                d="M 1.985 17.484 L 22.085 17.484"
                strokeLinecap="round"
              />
            </g>
          </g>
        </g>
      </svg>
    </div>
  );
}

export default GlobeEmoji;
