"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  FaHome,
  FaList,
  FaTasks,
  FaClipboardList,
  FaBox,
  FaFileInvoiceDollar,
} from 'react-icons/fa';

const Sidebar = () => {
  const pathname = usePathname();

  return (
    <div className="w-64 bg-blue-950 text-white p-4">
      <h1 className="text-lg font-medium mb-6 bg-white/10 p-2 rounded-md">Export</h1>
      <nav>
        <ul>
          <li className="mb-3">
            <Link
              href="/"
              className={`flex items-center gap-2 hover:text-gray-400 text-xs ${
                pathname === '/' ? 'text-pink-500' : 'text-white'
              }`}
            >
              <FaHome className={pathname === '/' ? 'text-pink-500' : 'text-white'} />
              Home
            </Link>
          </li>

          <li className="mb-3">
            <Link
              href="/quote-list"
              className={`flex items-center gap-2 hover:text-gray-400 text-xs ${
                pathname === '/quote-list' ? 'text-pink-500' : 'text-white'
              }`}
            >
              <FaList className={pathname === '/quote-list' ? 'text-pink-500' : 'text-white'} />
              Quote List
            </Link>
          </li>

          <li className="mb-3">
            <Link
              href="/export-task-management"
              className={`flex items-center gap-2 hover:text-gray-400 text-xs ${
                pathname === '/export-task-management' ? 'text-pink-500' : 'text-white'
              }`}
            >
              <FaTasks className={pathname === '/export-task-management' ? 'text-pink-500' : 'text-white'} />
              Export Task Management
            </Link>
          </li>

          <li className="mb-3">
            <Link
              href="/cro-list"
              className={`flex items-center gap-2 hover:text-gray-400 text-xs ${
                pathname === '/cro-list' ? 'text-pink-500' : 'text-white'
              }`}
            >
              <FaClipboardList className={pathname === '/cro-list' ? 'text-pink-500' : 'text-white'} />
              CRO List
            </Link>
          </li>

          <li className="mb-3">
            <Link
              href="/container-allotment-list"
              className={`flex items-center gap-2 hover:text-gray-400 text-xs ${
                pathname === '/container-allotment-list' ? 'text-pink-500' : 'text-white'
              }`}
            >
              <FaBox className={pathname === '/container-allotment-list' ? 'text-pink-500' : 'text-white'} />
              Container Allotment List
            </Link>
          </li>

          <li className="mb-3">
            <Link
              href="/export-advance-lists"
              className={`flex items-center gap-2 hover:text-gray-400 text-xs ${
                pathname === '/export-advance-list' ? 'text-pink-500' : 'text-white'
              }`}
            >
              <FaFileInvoiceDollar className={pathname === '/export-advance-list' ? 'text-pink-500' : 'text-white'} />
              Export Advance List
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;