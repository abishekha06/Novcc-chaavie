import Layout from "../../../components/layout";
import Progress from "../../cro-list/components/progress";
import ProgressButton from "../../cro-list/components/progress-buttons";



const booking = () => {

  const tableData = [
    { id: 1, name: "THC", unit: "1 Per Unit", value: 200 },
    { id: 2, name: "MUC", unit: "2 Per Unit", value: 200 },
    { id: 3, name: "Seal Charge", unit: "3 Per Unit", value: 200 },
    { id: 4, name: "Admin Charge", unit: "4 Per Unit", value: 200 },
    { id: 5, name: "Documentation Charge", unit: "5 Per Unit", value: 200 },
  ];

  return (
    <Layout>


      <div className='flex flex-col p-6 border-1 border-gray-200 h-full bg-white rounded-2xl shadow-xl '>
       
     
      <div className='h-32 flex flex-col justify-between'>
     
      <Progress/>
      <ProgressButton />

      </div>

      <div className="h-full p-2 overflow-y-scroll custom-scrollbar pt-6">
  

      
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
      Task ID 
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
     Quotation ID
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
     Land Port
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
     Routing
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
     Cargo Details
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
     ETA Load Port
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
     Cut off Load Port
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
     Por/Terminal
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
     Depot/Release Location
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
     No of Container
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
     Type of Container
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
      CRO Date
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
      Booking ID
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
      Shipping Line
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
      Discharge Port
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
      Transshipment Port
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
      Vessel Details
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
     ETD Load Port
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
     Gate Opening
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
     Stuffing Location
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

  <div>
    <label
      for="first_name"
      className="block mb-2 text-sm font-semibold text-gray-800 mt-4"
    >
     Ocean Freight
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


  <div className="p-6 border-1 rounded-md border-blue-300 mt-6 ">
   <h1 className="font-semibold">Fetch Local Charge</h1> 

   <div className="mt-6">
<table className="min-w-full bg-white border border-gray-200">
<thead>
<tr className="">
<th className="px-4 py-2  text-sm font-semibold text-gray-700 border-b border-gray-200"></th>
<th className="px-4 py-2  text-sm font-semibold border-b border-gray-200  text-blue-500">
  Unit Test
</th>
<th className="px-4 py-2 text-sm font-semibold border-b border-gray-200 text-blue-500">
  INR 100000
</th>
</tr>
</thead>
<tbody>
{tableData.map((item) => (
<tr key={item.id} className="hover:bg-gray-50">
  <td className="px-4 py-2 text-sm text-gray-700 border-b border-gray-200 text-center">
    {item.name}
  </td>
  <td className="px-4 py-2 text-sm text-gray-700 border-b border-gray-200 text-center">
    {item.unit}
  </td>
  <td className="px-4 py-2 text-sm text-gray-700 border-b border-gray-200 text-center">
    {item.value}
  </td>
</tr>
))}
</tbody>
</table>
</div>



  </div>

  <div className="flex justify-end mt-4">




<button className="bg-blue-500 text-white px-6 h-10 text-sm ml-3 rounded-es-lg rounded-se-lg hover:bg-blue-600 transition-all duration-200 cursor-pointer">
Allot Container
</button>
</div>



  </div>


  </div>


</div>


         
     

      </div>

    
    </div>
    
    
    
    
    
    </Layout>
  );
};

export default booking;