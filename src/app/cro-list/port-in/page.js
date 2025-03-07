import Layout from "../../../components/layout";
import Progress from "../../cro-list/components/progress";
import ProgressButton from "../../cro-list/components/progress-buttons";


const portin = () => {
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


  <div >
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

export default portin;