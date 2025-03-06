import Sidebar from './sidebar';

const Layout = ({ children }) => {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 p-8 bg-gray-100">
        {children}
      </div>
    </div>
  );
};

export default Layout;