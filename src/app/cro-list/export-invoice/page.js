"use client";


import Layout from "../../../components/layout";
import Progress from "../../cro-list/components/progress";
import ProgressButton from "../../cro-list/components/progress-buttons";
import { GoPlus } from "react-icons/go";

const exportinvoice = () => {
    const data = [
        { fechExchangeRate: "Exchange Rate", addExchangeRate: "84.5" },
        { fechExchangeRate: "Date", addExchangeRate:"84.5" },
      ];


  return (
    <Layout>


      <div className='flex flex-col p-6 border-1 border-gray-200 h-full bg-white rounded-2xl shadow-xl '>
       
     
      <div className='h-32 flex flex-col justify-between'>
     
      <Progress/>
      <ProgressButton />

      </div>

      <div className="h-full p-2 overflow-y-scroll custom-scrollbar pt-6">

      <div className="flex justify-end mt-4">
<button className="bg-blue-500 text-white px-6 h-8 text-xs ml-3 rounded-es-lg rounded-se-lg hover:bg-blue-600 transition-all duration-200 cursor-pointer w-40">
Profoma Invoice
</button>
<button className="bg-blue-500 text-white px-6 h-8 text-xs ml-3 rounded-es-lg rounded-se-lg hover:bg-blue-600 transition-all duration-200 cursor-pointer w-40">
Final Invoice
</button>
</div>

      <div className="">
  
  <div>
    <label
      for="first_name"
      className="block mb-2 text-sm font-semibold text-gray-800"
    >
      Customer Name
    </label>
    <input
      type="text"
      id="name"
      maxLength={50}
      className="duration-500 bg-gray-50 rounded-sm border focus:ring-1 border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full h-11 p-2.5 outline-none"
      placeholder="Lorem"
     
      required
    />
  
  </div>



  <div className="grid grid-cols-2 mt-4 gap-12">

  <div>

  <div>
    <label
      for="first_name"
      className="block mb-2 text-sm font-semibold text-gray-800 mt-4"
    >
      CRO Number
    </label>
    <input
      type="text"
      id="name"
      maxLength={50}
      className="duration-500 bg-gray-50 rounded-sm border focus:ring-1 border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full h-11 p-2.5 outline-none"
      placeholder="Lorem"
     
      required
    />
  
  </div>
  <div>
    <label
      for="first_name"
      className="block mb-2 text-sm font-semibold text-gray-800 mt-4"
    >
     Validity
    </label>
    <input
      type="text"
      id="name"
      maxLength={50}
      className="duration-500 bg-gray-50 rounded-sm border focus:ring-1 border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full h-11 p-2.5 outline-none"
      placeholder="Lorem"
     
      required
    />
  
  </div>





  </div>

  <div>


  <div>
    <label
      for="first_name"
      className="block mb-2 text-sm font-semibold text-gray-800 mt-4"
    >
     Validity
    </label>
    <input
      type="text"
      id="name"
      maxLength={50}
      className="duration-500 bg-gray-50 rounded-sm border focus:ring-1 border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full h-11 p-2.5 outline-none"
      placeholder="Lorem"
     
      required
    />
  
  </div>

  <div>
    <label
      for="first_name"
      className="block mb-2 text-sm font-semibold text-gray-800 mt-4"
    >
     Cargo Type
    </label>
    <input
      type="text"
      id="name"
      maxLength={50}
      className="duration-500 bg-gray-50 rounded-sm border focus:ring-1 border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full h-11 p-2.5 outline-none"
      placeholder="Lorem"
     
      required
    />
  
  </div>
</div>


  </div>

  <div className="relative p-[1px] rounded-lg mt-6 bg-gradient-to-r from-pink-400 to-blue-400">
  <div className="bg-white rounded-lg pb-6 pt-3">

  <table className="w-full border-collapse">
  <thead>
    <tr>
      <th className="p-3 border-b border-gray-200 text-center text-xs font-semibold">Fech Exchange Rate</th>
      <th className="p-3 border-b border-gray-200 text-center text-xs font-semibold">Add Exchange Rate</th>
    </tr>
  </thead>
  <tbody>
    {data.map((row, index) => (
      <tr key={index} className="hover:bg-gray-50">
        <td className="p-3 border-b border-gray-200 text-center text-xs">{row.fechExchangeRate}</td>
        <td className="p-3 border-b border-gray-200 text-center text-xs">{row.addExchangeRate}</td>
      </tr>
    ))}
  </tbody>
</table>
</div>
</div>



  <div className="flex justify-end mt-4">
<button className="bg-blue-500 text-white px-4 h-8 text-xs ml-3 rounded-md hover:bg-blue-600 transition-all duration-200 cursor-pointer flex justify-center items-center gap-3">
<GoPlus /> Allot Container
</button>
</div>



<div>
    Aswanth
</div>






<div className="flex justify-end mt-4">
<button className="bg-blue-500 text-white px-6 h-8 text-xs ml-3 rounded-es-lg rounded-se-lg hover:bg-blue-600 transition-all duration-200 cursor-pointer w-24">
Save
</button>
<button className="bg-white border-2 border-gray-300 text-gray-900 hover:bg-gray-100 hover:border-gray-400 px-6 h-8 text-xs ml-3 rounded-es-lg rounded-se-lg  transition-all duration-200 cursor-pointer w-24">
Submit
</button>
</div>


      </div>

      </div>
      </div>
    </Layout>
  );
};

export default exportinvoice;