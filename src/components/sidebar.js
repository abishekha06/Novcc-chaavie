"use client";
import Link from "next/link";
import SvgTdr from "../components/icons/Tdr";
import SvgCro from "../components/icons/Cro";
import SvgInventory from "../components/icons/Inventory";
import SvgExportTask from "../components/icons/ExportTask";
import SvgContainer from "../components/icons/Container";
import { usePathname } from "next/navigation";
import { IoIosArrowDown } from "react-icons/io";
import SvgExport from "../components/icons/Export";
import SvgImportmenu from "../components/icons/Importmenu";

import { FaHome } from "react-icons/fa";
import SvgImporticon from "../components/icons/Importicon";

const Sidebar = () => {
  const pathname = usePathname();

  return (
    <div className="min-w-64 max-w-64 bg-blue-950 text-white p-4">
      <div className="bg-white/10 mb-6  flex justify-between items-center px-4 py-2 rounded-md">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 bg-white border-2 border-pink-500 rounded flex items-center justify-center">
            <SvgImporticon className="w-5 h-5 text-pink-500" fill="#EC4899" />
          </div>
          <h1 className="text-lg font-medium rounded-md">Export</h1>
        </div>

        <div>
          <IoIosArrowDown />
        </div>
      </div>

      <nav>
        <ul>
          <li className="mb-2">
            <Link
              href="/cro-list"
              className={`flex items-center gap-2 hover:text-gray-400 text-xs ${
                pathname === "/cro-list" ? "text-pink-500" : "text-white"
              }`}
            >
              <div className="flex items-center justify-center h-7 w-7">
                <SvgImportmenu
                  active={pathname === "/cro-list"}
                  className="w-4 h-4"
                />
              </div>
              <h1>CRO List</h1>
            </Link>
          </li>

          <li className="mb-2">
            <Link
              href="/cro-list"
              className={`flex items-center gap-2 hover:text-gray-400 text-xs ${
                pathname === "/cro-list" ? "text-pink-500" : "text-white"
              }`}
            >
              <div className="flex items-center justify-center h-7 w-7">
                <SvgCro active={pathname === "/cro-list"} className="w-4 h-4" />
              </div>
              <h1>CRO List</h1>
            </Link>
          </li>

          <li className="mb-2">
            <Link
              href="/export-task-management"
              className={`flex items-center gap-2 hover:text-gray-400 text-xs ${
                pathname === "/export-task-management"
                  ? "text-pink-500"
                  : "text-white"
              }`}
            >
              <div className="flex items-center justify-center h-7 w-7">
                <SvgExportTask className="" />
              </div>
              <h1>Export Task Management</h1>
            </Link>
          </li>

          <li className="mb-2">
            <Link
              href="/container-allotment-list"
              className={`flex items-center gap-2 hover:text-gray-400 text-xs ${
                pathname === "/container-allotment-list"
                  ? "text-pink-500"
                  : "text-white"
              }`}
            >
              <div className="flex items-center justify-center h-7 w-7">
                <SvgContainer className="" />
              </div>
              <h1>Container Allotment List</h1>
            </Link>
          </li>

          <li className="mb-2">
            <Link
              href="/export-advance-list"
              className={`flex items-center gap-2 hover:text-gray-400 text-xs ${
                pathname === "/export-advance-list"
                  ? "text-pink-500"
                  : "text-white"
              }`}
            >
              <div className="flex items-center justify-center h-7 w-7">
                <SvgInventory
                  active={pathname === "/export-advance-list"}
                  className=""
                />
              </div>
              <h1>Export Advance List</h1>
            </Link>
          </li>

          <li className="mb-2">
            <Link
              href="/tdr-list"
              className={`flex items-center gap-2 hover:text-gray-400 text-xs ${
                pathname === "/tdr-list" ? "text-pink-500" : "text-white"
              }`}
            >
              <div className="flex items-center justify-center h-7 w-7">
                <SvgTdr active={pathname === "/tdr-list"} className="" />
              </div>
              <h1>TDR List</h1>
            </Link>
          </li>

          <li className="mb-2">
            <Link
              href="/inventory-list"
              className={`flex items-center gap-2 hover:text-gray-400 text-xs ${
                pathname === "/inventory-list" ? "text-pink-500" : "text-white"
              }`}
            >
              <div className="flex items-center justify-center h-7 w-7">
                <SvgInventory
                  active={pathname === "/inventory-list"}
                  className=""
                />
              </div>
              <h1>Inventory</h1>
            </Link>
          </li>

          {/* <li className="mb-2">
            <Link
              href="/"
              className={`flex items-center gap-2 hover:text-gray-400 text-xs ${
                pathname === "/" ? "text-pink-500" : "text-white"
              }`}
            >
              <div className="flex items-center justify-center h-7 w-7">
                <FaHome
                  className={` ${
                    pathname === "/" ? "text-pink-500" : "text-white"
                  }`}
                />
              </div>
              <h1>Home</h1>
            </Link>
          </li> */}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
