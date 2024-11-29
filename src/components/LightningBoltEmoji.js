import React from 'react';

function LightningBoltEmoji({ size = 48, color = '#000' }) {
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
      id="Lightning_Bolt_32"
      width={size}
      height={size}
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <rect width="32" height="32" fill="none" opacity="0" />
      <g transform="matrix(0.7 0 0 0.7 16 16)">
        <path
          style={{
            stroke: 'none',
            strokeWidth: 1,
            strokeDasharray: 'none',
            strokeLinecap: 'butt',
            strokeDashoffset: 0,
            strokeLinejoin: 'miter',
            strokeMiterlimit: 4,
            fill: color,
            fillRule: 'nonzero',
            opacity: 1,
          }}
          transform="translate(-24, -24)"
          d="M 21.5 4 C 20.952878722854802 4.000029761580213 20.449162405554937 4.297918507858614 20.185547 4.7773438 L 9.1855469 24.777344 C 8.930162034059332 25.242052078661104 8.939078115010638 25.807060506443474 9.208998763038178 26.263479033557374 C 9.478919411065718 26.71989756067127 9.969740610142667 26.99991286471964 10.5 27 L 17.261719 27 L 11.113281 41.929688 C 10.842833405410108 42.59048216390031 11.075592638376303 43.350324172866216 11.669746546712087 43.74626856501426 C 12.263900455047871 44.142212957162315 13.054787268795458 44.064529065907195 13.560547 43.560547 L 38.560547 18.560547 C 38.98929477867838 18.131500780462652 39.117487348562605 17.48648406071186 38.885382335340815 16.926097962509694 C 38.653277322119024 16.365711864307528 38.10655194307977 16.000237838354952 37.5 16 L 31.111328 16 L 36.794922 6.2558594 C 37.06540950137774 5.792024767504732 37.06736910210593 5.218994488036188 36.800060255251545 4.753320744845772 C 36.53275140839716 4.287647001655357 36.036941274769504 4.000349503206563 35.5 4 L 21.5 4 z M 22.386719 7 L 32.888672 7 L 27.205078 16.744141 C 26.93459070438855 17.20797560852001 26.93263121450647 17.7810057400445 27.199940035097434 18.246679354910505 C 27.467248855688403 18.71235296977651 27.963058849651727 18.999650413415786 28.5 19 L 33.878906 19 L 16.742188 36.136719 L 20.886719 26.070312 C 21.076800180743138 25.607720970902395 21.023853347430553 25.080826465191073 20.745531918480808 24.665304507092998 C 20.467210489531062 24.24978254899492 20.000121219296787 24.000285452942435 19.5 24 L 13.037109 24 L 22.386719 7 z"
          strokeLinecap="round"
        />
      </g>
    </svg>
    </div>
  );
}

export default LightningBoltEmoji;