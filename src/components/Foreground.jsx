import React from "react";

const Foreground = () => {
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
        {/* Foreground: sedikit lebih terang dari background */}
        <linearGradient id="gradient2" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="#6b3a8f" />
          <stop offset="55%" stopColor="#3a235f" />
          <stop offset="100%" stopColor="#0b1020" />
        </linearGradient>
      </defs>

      <path
        d="M0 504L18.8 536C37.7 568 75.3 632 113 654C150.7 676 188.3 656 226 682.2C263.7 708.3 301.3 780.7 339 795.5C376.7 810.3 414.3 767.7 452 740.5C489.7 713.3 527.3 701.7 565 688.8C602.7 676 640.3 662 678 678C715.7 694 753.3 740 791 718.2C828.7 696.3 866.3 606.7 903.8 560.5C941.3 514.3 978.7 511.7 1016.2 553C1053.7 594.3 1091.3 679.7 1129 705.5C1166.7 731.3 1204.3 697.7 1242 711.5C1279.7 725.3 1317.3 786.7 1355 774.3C1392.7 762 1430.3 676 1468 653.5C1505.7 631 1543.3 672 1581 680.5C1618.7 689 1656.3 665 1694 621.3C1731.7 577.7 1769.3 514.3 1807 495.5C1844.7 476.7 1882.3 502.3 1901.2 515.2L1920 528L1920 1081L0 1081Z"
        fill="url(#gradient2)"
      />
    </svg>
  );
};

export default Foreground;
