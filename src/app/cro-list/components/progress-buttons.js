"use client"; // Mark this component as a Client Component

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const ProgressButton = () => {
  const pathname = usePathname();
  const buttonNames = [
    { name: "Booking", path: "/cro-list/booking" },
    { name: "Container Allotment", path: "/cro-list/container-allotment" },
    { name: "Stuffing", path: "/cro-list/stuffing" },
    { name: "Port IN", path: "/cro-list/port-in" },
    { name: "Bill of Lading", path: "/cro-list/bill-of-lading" },
    { name: "Export Invoice", path: "/cro-list/export-invoice" },
    { name: "Load List", path: "/cro-list/load-list" },
    { name: "TDR", path: "/cro-list/tdr" }
  ];

  return (
    <div className="w-full h-14 flex border-2 border-blue-500 rounded-full p-1">
      {buttonNames.map((button, index) => {
        const isActive = pathname === button.path;
        return (
          <Link
            key={index}
            href={button.path}
            className={`flex-1 text-xs px-2 text-center font-normal transition duration-500 ease-in-out border-r border-white last:border-r-0 rounded-full cursor-pointer flex items-center justify-center ${
              isActive
                ? 'bg-blue-500 text-white'
                : 'bg-white text-black hover:bg-blue-500/20'
            }`}
          >
            {button.name}
          </Link>
        );
      })}
    </div>
  );
};

export default ProgressButton;