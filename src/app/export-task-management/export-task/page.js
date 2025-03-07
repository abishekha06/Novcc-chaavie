import Layout from "../../../components/layout";


const exporttask = () => {
  return (
    <Layout>


      <div className='p-6 border-1 border-gray-200 h-full bg-white rounded-2xl shadow-xl '>
    
     
      <div className='h-fit mb-6 px-2'>
      <h1 className="text-xl font-semibold border-l-pink-800 border-l-8 pl-2.5">Export Task</h1>

      </div>

      <div className="overflow-hidden overflow-y-auto h-auto scroll-smooth scrollbar-thin scrollbar-thumb-blue-500 scrollbar-track-gray-200 custom-scrollbar px-2">
  
              <div>
                <label
                  for="first_name"
                  className="block mb-2 text-sm font-semibold text-gray-800"
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

              <div className="grid grid-cols-2 mt-4 gap-12">

              <div>

              <div>
                <label
                  for="first_name"
                  className="block mb-2 text-sm font-semibold text-gray-800"
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
                  CRO No
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




              <div className="">
  <label htmlFor="checklist" className="block mb-2 text-sm font-semibold text-gray-800 mt-6">
    Check List
  </label>

  <div className="space-y-2">
  
    <div className="flex items-center">
      <input
        type="checkbox"
        id="kyc_verified"
        className="w-4 h-4 border-gray-300 rounded focus:ring-green-600"
        style={{ accentColor: "#15803d" }}
      />
      <label htmlFor="kyc_verified" className="ml-2 text-sm text-gray-700">
        Custom KYC Verified
      </label>
    </div>

    <div className="flex items-center">
      <input
        type="checkbox"
        id="vessel_finalized"
        className="w-4 h-4 border-gray-300 rounded focus:ring-green-600"
        style={{ accentColor: "#15803d" }} 
      />
      <label htmlFor="vessel_finalized" className="ml-2 text-sm text-gray-700">
        Vessel and Schedule Finalized
      </label>
    </div>

    
    <div className="flex items-center">
      <input
        type="checkbox"
        id="documentation_available"
        className="w-4 h-4 border-gray-300 rounded focus:ring-green-600"
        style={{ accentColor: "#15803d" }} 
      />
      <label htmlFor="documentation_available" className="ml-2 text-sm text-gray-700">
        Required Documentation Available
      </label>
    </div>
  </div>


  <div className="flex justify-end mt-4">
    <button className="bg-white text-xs border-2 border-gray-300 text-gray-900 px-6 h-8 rounded-es-lg rounded-se-lg hover:bg-gray-100 hover:border-gray-400 transition-all duration-200 cursor-pointer">
      Verify
    </button>
  </div>
</div>

              <div>
                <label
                  for="first_name"
                  className="block mb-2 text-sm font-semibold text-gray-800 mt-4"
                >
                 B/L issue Flag
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
                 Updated Date
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
                 Invoice Generated Flag
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
                  className="block mb-2 text-sm font-semibold text-gray-800"
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
                  Discription
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
                  Assigned To
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
                  Status
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
                  Payment Flag
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
                  Payment Receive Date
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

  <button className="bg-white border-2 border-gray-300 text-gray-900 px-6 h-10 text-sm rounded-es-lg rounded-se-lg hover:bg-gray-100 hover:border-gray-400 transition-all duration-200 cursor-pointer">
    Reset
  </button>


  <button className="bg-blue-500 text-white px-6 h-10 text-sm ml-3 rounded-es-lg rounded-se-lg hover:bg-blue-600 transition-all duration-200 cursor-pointer">
    Save
  </button>
</div>



              </div>


              </div>
     

      </div>

    
    </div>
    
    
    
    
    
    </Layout>
  );
};

export default exporttask;