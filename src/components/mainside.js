
import { MdOutlineSettings } from "react-icons/md";
import SvgExport from '../components/icons/Export';
import SvgJodac from '../components/icons/Jodac';

const Mainside = () => {
    return (
      <div className="bg-gray-800 h-full min-w-[60px] max-w-[60px]  flex flex-col justify-between items-center">

      <div className="w-full justify-between items-center flex flex-col gap-4">
        <div className="bg-white h-16 w-full flex items-center justify-center rounded-b-md">
           <SvgJodac />
        </div>
             
              <div className="h-10 w-10 rounded-full bg-pink-800 flex items-center justify-center"><SvgExport /></div>
      </div>

        <div className="justify-between items-center flex flex-col">

          <button className="text-white text-2xl cursor-pointer"><MdOutlineSettings /></button>
          <div className="py-4"><img className="h-10 w-10 object-cover rounded-full" src="https://images.unsplash.com/photo-1554151228-14d9def656e4?q=80&w=1972&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" /></div>


        </div>
       
      </div>
    );
  };
  
  export default Mainside;
