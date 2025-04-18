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
import SvgContainer from './icons/Container';
import SvgBooking from './icons/Booking';
import SvgStuffing from './icons/Stuffing';
import SvgPort from './icons/Port';
import SvgBill from './icons/Bill';
import SvgInvo from './icons/Invo';

const ProgressButton = () => {
  const pathname = usePathname();
  const buttonNames = [
    { name: "Booking", path: "/export-task-management/booking", icon: <SvgBooking /> },
    { name: "Container Allotment", path: "/export-task-management/container-allotment", icon: <SvgContainer /> },
    { name: "Stuffing", path: "/export-task-management/stuffing", icon: <SvgStuffing /> },
    { name: "Port IN", path: "/export-task-management/port-in", icon: <SvgPort /> },
    { name: "Bill of Lading", path: "/export-task-management/bill-of-lading", icon: <SvgBill /> },
    { name: "Export Invoice", path: "/export-task-management/export-invoice", icon: <SvgInvo /> },
    { name: "Load List", path: "/export-task-management/load-list", icon: <FaList /> },
    { name: "TDR", path: "/export-task-management/tdr", icon: <FaClipboardList /> },
  ];

  return (
    <div className="w-full flex border-2 border-blue-400 rounded-full p-1">
      {buttonNames.map((button, index) => {
        const isActive = pathname === button.path;
        return (
          <Link
            key={index}
            href={button.path}
            className={`flex-1 text-xs p-2    font-normal transition duration-500 ease-in-out border-r border-white last:border-r-0 rounded-full cursor-pointer flex items-center justify-between gap-2 ${
              isActive
                ? 'bg-blue-500 text-white'
                : 'bg-white text-black hover:bg-blue-500/20'
            }`}
          >
            <div className='flex items-center justify-center gap-2'>


            <div className={`h-8 w-8 rounded-full flex items-center justify-center ${isActive ? 'bg-white' : ''}`}>
  {React.cloneElement(button.icon, {
    className: `${isActive ? 'text-blue-500' : 'text-blue-500'}`
  })}
</div>


              <h1 className='whitespace-nowrap text-xs'>{button.name}</h1>


            </div>



          </Link>
        );
      })}
    </div>
  );
};

export default ProgressButton;