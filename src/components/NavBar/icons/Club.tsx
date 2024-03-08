import React from "react";
import { cn } from "@/lib/utils";

const Club = ({ className }: { className: string }) => {
  return (
    <svg
      width={17}
      height={17}
      viewBox="0 0 117 116"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn(`duration-150 group-hover:text-yellow-500`, className)}
    >
      <path
        d="M58.4948 0C63.3557 0.000246559 68.1193 1.35158 72.2447 3.9006C76.3701 6.44963 79.6922 10.0943 81.8338 14.4208C83.9754 18.7473 84.8508 23.5824 84.3606 28.3773C83.8704 33.1723 82.0342 37.7349 79.0605 41.5473C83.3875 39.3295 88.2559 38.3615 93.1109 38.7535C97.9658 39.1456 102.612 40.8819 106.52 43.7647C110.428 46.6475 113.441 50.5607 115.215 55.0585C116.988 59.5563 117.452 64.4577 116.553 69.2042C115.654 73.9506 113.428 78.3512 110.129 81.9045C106.83 85.4577 102.591 88.0206 97.8945 89.3012C93.1979 90.5818 88.2329 90.5286 83.5653 89.1475C78.8977 87.7665 74.7152 85.1132 71.4946 81.49V90.2222L76.4255 109.778C77.2219 112.936 74.8343 116 71.5773 116H45.4123C42.1552 116 39.7677 112.936 40.564 109.778L45.4949 90.2222L45.5014 81.49C42.2803 85.1121 38.0977 87.7643 33.4303 89.1444C28.7629 90.5245 23.7983 90.577 19.1022 89.2959C14.4062 88.0148 10.1675 85.4517 6.86917 81.8985C3.57082 78.3454 1.34544 73.9451 0.446587 69.199C-0.452261 64.453 0.0115689 59.552 1.78523 55.0546C3.55889 50.5572 6.57105 46.6441 10.4785 43.7613C14.386 40.8786 19.0316 39.1419 23.886 38.7493C28.7405 38.3568 33.6085 39.324 37.9355 41.5409C34.9641 37.7288 33.1296 33.1674 32.6401 28.3741C32.1507 23.5808 33.0259 18.7474 35.1665 14.4222C37.3071 10.0971 40.6274 6.45324 44.7508 3.90406C48.8741 1.35487 53.6355 0.00238162 58.4948 0Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default Club;
