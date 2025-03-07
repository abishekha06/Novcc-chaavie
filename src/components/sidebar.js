"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Sidebar = () => {
  const pathname = usePathname(); 

  return (
    <div className="w-64 bg-blue-950 text-white p-4">
      <h1 className="text-lg font-medium mb-6 bg-white/10 p-2 rounded-md">Export</h1>
      <nav>
        <ul>
          <li className="mb-3 text-sm">
            <Link
              href="/"
              className={`hover:text-gray-400 ${pathname === '/' ? 'text-pink-500' : ''}`}
            >
              Home
            </Link>
          </li>

          <li className="mb-3 text-sm">
            <Link
              href="/quote-list"
              className={`hover:text-gray-400 ${pathname === '/quote-list' ? 'text-pink-500' : ''}`}
            >
              Quote List
            </Link>
          </li>

          <li className="mb-3 text-sm">
            <Link
              href="/export-task-management"
              className={`hover:text-gray-400 ${pathname === '/export-task-management' ? 'text-pink-500' : ''}`}
            >
              Export Task Management
            </Link>
          </li>

          <li className="mb-3 text-sm">
            <Link
              href="/cro-list"
              className={`hover:text-gray-400 ${pathname === '/cro-list' ? 'text-pink-500' : ''}`}
            >
              CRO List
            </Link>
          </li>

          <li className="mb-3 text-sm">
            <Link
              href="/container-allotment-list"
              className={`hover:text-gray-400 ${pathname === '/container-allotment-list' ? 'text-pink-500' : ''}`}
            >
              Container Allotment List
            </Link>
          </li>

          <li className="mb-3 text-sm">
            <Link
              href="/export-advance-list"
              className={`hover:text-gray-400 ${pathname === '/export-advance-list' ? 'text-pink-500' : ''}`}
            >
              Export Advance List
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;