import Link from 'next/link';

const Sidebar = () => {
  return (
    <div className="w-64 bg-blue-950 text-white p-4">


      <h1 className="text-2xl font-bold mb-6">Dashboard</h1>
      <nav>
        <ul>


          <li className="mb-3  text-sm">
            <Link href="/" className="hover:text-gray-400">
              Home
            </Link>
          </li>


          


          <li className="mb-3 text-sm">
            <Link href="/quotelist" className="hover:text-gray-400">
              Quote List
            </Link>
          </li>


          <li className="mb-3 text-sm">
            <Link href="/exporttaskmanagement" className="hover:text-gray-400">
              Export Task Management
            </Link>
          </li>

          <li className="mb-3  text-sm">
            <Link href="/crolist" className="hover:text-gray-400">
              CRO List
            </Link>
          </li>

          <li className="mb-3  text-sm">
            <Link href="/containerallotmentlist" className="hover:text-gray-400">
              Container Allotment List
            </Link>
          </li>

          <li className="mb-3  text-sm">
            <Link href="/exportadvancelist" className="hover:text-gray-400">
              Export Advance List
            </Link>
          </li>


        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;