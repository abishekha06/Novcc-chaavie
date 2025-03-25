"use client";

import React from 'react'; // Import React
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  FaBook,
  FaBox,
  FaTruckLoading,
  FaShip,
  FaFileAlt,
  FaFileInvoiceDollar,
  FaList,
  FaClipboardList,
} from 'react-icons/fa';

const ProgressButton = () => {
  const pathname = usePathname();
  const buttonNames = [
    { name: "Booking", path: "/export-task-management/booking", icon: <FaBook /> },
    { name: "Container Allotment", path: "/export-task-management/container-allotment", icon: <FaBox /> },
    { name: "Stuffing", path: "/export-task-management/stuffing", icon: <FaTruckLoading /> },
    { name: "Port IN", path: "/export-task-management/port-in", icon: <FaShip /> },
    { name: "Bill of Lading", path: "/export-task-management/bill-of-lading", icon: <FaFileAlt /> },
    { name: "Export Invoice", path: "/export-task-management/export-invoice", icon: <FaFileInvoiceDollar /> },
    { name: "Load List", path: "/export-task-management/load-list", icon: <FaList /> },
    { name: "TDR", path: "/export-task-management/tdr", icon: <FaClipboardList /> },
  ];

  return (
    <div className="w-full h-14 flex border-2 border-blue-400 rounded-full p-1">
      {buttonNames.map((button, index) => {
        const isActive = pathname === button.path;
        return (
          <Link
            key={index}
            href={button.path}
            className={`flex-1 text-xs px-2  font-normal transition duration-500 ease-in-out border-r border-white last:border-r-0 rounded-full cursor-pointer flex items-center justify-center gap-2 ${
              isActive
                ? 'bg-blue-500 text-white'
                : 'bg-white text-black hover:bg-blue-500/20'
            }`}
          >
            <div className='flex items-center justify-center gap-2'>
            <div>
            {React.cloneElement(button.icon, {
              className: `${
                isActive ? 'text-white' : 'text-gray-400'
              }`,
            })}
            </div>
              <h1 className='whitespace-nowrap'>{button.name}</h1>
            </div>



          </Link>
        );
      })}
    </div>
  );
};

export default ProgressButton;