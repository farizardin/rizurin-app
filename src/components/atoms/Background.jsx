import React from "react";

const Background = () => {
  return (
    <svg
      id="visual"
      viewBox="0 0 1920 1080"
      width="1920"
      height="1080"
      version="1.1"
      preserveAspectRatio="none"
    >
      <defs>
        {/* Gradient senada magenta → cyan gelap */}
        <linearGradient id="gradient" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="#2a0f3a" />
          <stop offset="50%" stopColor="#140a2e" />
          <stop offset="100%" stopColor="#020617" />
        </linearGradient>
      </defs>

      <path
        d="M0 706L17.8 663C35.7 620 71.3 534 106.8 477C142.3 420 177.7 392 213.2 364.2C248.7 336.3 284.3 308.7 320 332.5C355.7 356.3 391.3 431.7 426.8 431.7C462.3 431.7 497.7 356.3 533.2 390.8C568.7 425.3 604.3 569.7 640 583.8C675.7 598 711.3 482 746.8 494.5C782.3 507 817.7 648 853.2 697.2C888.7 746.3 924.3 703.7 960 617.7C995.7 531.7 1031.3 402.3 1066.8 341.3C1102.3 280.3 1137.7 287.7 1173.2 327.3C1208.7 367 1244.3 439 1280 460.3C1315.7 481.7 1351.3 452.3 1386.8 469.2C1422.3 486 1457.7 549 1493.2 552.3C1528.7 555.7 1564.3 499.3 1600 451.2C1635.7 403 1671.3 363 1706.8 361.8C1742.3 360.7 1777.7 398.3 1813.2 458.3C1848.7 518.3 1884.3 600.7 1902.2 641.8L1920 683L1920 1081L0 1081Z"
        fill="url(#gradient)"
      />
    </svg>
  );
};

export default Background;
