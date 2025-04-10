import * as React from "react";
import { useState } from "react"; 

const SvgFile = ({ isActive = false, className = "", ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={19}
    height={18}
    fill="none"
    className={`${isActive ? 'fill-blue-600' : 'fill-gray-400'} ${className}`}
    {...props}
  >
    <path d="M18.64 1.722C18.64.772 17.858 0 16.894 0H1.748C.784 0 0 .772 0 1.722v10.334c0 .95.784 1.722 1.748 1.722h6.99a.58.58 0 0 0 .582-.574.582.582 0 0 0-.583-.574h-6.99a.58.58 0 0 1-.582-.574V5.74h16.31v.574a.582.582 0 0 0 1.165 0zM17.477 2.87H1.166V1.722c0-.316.26-.574.582-.574h15.145a.58.58 0 0 1 .583.574z" />
    <path d="M14.145 10.465a.51.51 0 0 0 .567-.03l1.658-1.216a.63.63 0 0 0 .246-.506.63.63 0 0 0-.246-.505l-.52-.382-1.138-.834a.51.51 0 0 0-.567-.03.62.62 0 0 0-.292.536v.656c-1.871.297-3.316 2.124-3.316 4.206 0 .336.247.608.553.608.305 0 .552-.272.552-.608 0-1.421.945-2.694 2.21-2.977v.546c0 .224.113.43.293.536M12.418 16.107l1.769 1.216a.58.58 0 0 0 .605.03.61.61 0 0 0 .311-.536v-.656c1.996-.297 3.537-2.067 3.537-4.207a.6.6 0 0 0-.59-.607.6.6 0 0 0-.589.607c0 1.468-1.014 2.696-2.358 2.978v-.546a.61.61 0 0 0-.31-.536.57.57 0 0 0-.606.03l-1.768 1.216a.61.61 0 0 0-.263.506c0 .203.099.393.262.505" />
  </svg>
);

const FileButton = () => {
  const [isActive, setIsActive] = useState(false); 

  return (
    <button 
      className="rounded-md"
      onClick={() => setIsActive(!isActive)}
    >
      <SvgFile isActive={isActive} className="h-5 w-5" />
    </button>
  );
};

export default FileButton;