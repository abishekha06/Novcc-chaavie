"use client";
import { useState } from 'react';
import Layout from "../../components/layout";
import Modal from "../../components/modal";
import 'remixicon/fonts/remixicon.css'

const crolist = () => {

  const dummyData = [
    {
      id: 1,
      taskId: "T12345",
      billOfLading: "BOL12345",
      croNumber: "CRO67890",
      bookingId: "BK54321",
      quotationId: "Q12345",
    },
    {
      id: 2,
      taskId: "T67890",
      billOfLading: "BOL67890",
      croNumber: "CRO54321",
      bookingId: "BK12345",
      quotationId: "Q67890",
    },
    {
      id: 3,
      taskId: "T54321",
      billOfLading: "BOL54321",
      croNumber: "CRO12345",
      bookingId: "BK67890",
      quotationId: "Q54321",
    },
  ];

  const [isModalOpen, setIsModalOpen] = useState(false);
  
          const openModal = () => setIsModalOpen(true);
          const closeModal = () => setIsModalOpen(false);

          const [isModalOpen2, setIsModalOpen2] = useState(false);

          const openModal2 = () => setIsModalOpen2(true);
          const closeModal2 = () => setIsModalOpen2(false);
  

    return (
      <Layout>
      <div className='p-6 border-1 border-gray-200 h-full bg-white rounded-2xl shadow-xl'>
    
    <div className='h-fit flex flex-col justify-between'>
      <h1 className="text-xl font-semibold border-l-pink-800 border-l-8 pl-2.5">CRO List</h1>
      <div className='flex items-end flex-col'>
      <button onClick={openModal}  className='bg-gray-100 hover:bg-gray-200 rounded-sm p-2 px-4 text-sm cursor-pointer w-fit'>Fillter <i className="ri-equalizer-3-line"></i> </button>
      
      <div className='flex gap-0.5 my-2'>
        <button className='h-6 bg-gray-200 w-6 flex items-center justify-center hover:bg-gray-300 text-xs'><i className="ri-arrow-left-s-line"></i></button>
        <button className='h-6 bg-gray-200 w-6 flex items-center justify-center hover:bg-gray-300 text-xs'>1</button>
        <button className='h-6 bg-gray-200 w-6 flex items-center justify-center hover:bg-gray-300 text-xs'>2</button>
        <button className='h-6 bg-gray-200 w-6 flex items-center justify-center hover:bg-gray-300 text-xs'>3</button>
        <button className='h-6 bg-gray-200 w-6 flex items-center justify-center hover:bg-gray-300 text-xs'><i className="ri-arrow-right-s-line"></i></button>
      </div>
      </div>
    </div>


     <Modal isOpen={isModalOpen} onClose={closeModal} >
        <div className='h-full w-full relative'>

<div className='absolute top-32 right-14'>

<div className='flex justify-end'>  <button onClick={closeModal}  className='bg-white h-10 w-10 rounded-full cursor-pointer'><i className="ri-arrow-go-back-line"></i></button></div>

<div className='bg-white rounded-xl my-4 p-4 flex gap-2'>
<div>
                <label
                  for="first_name"
                  className="block mb-2 text-sm font-semibold text-gray-800"
                >
                  Test Name
                </label>
                <input
                  type="text"
                  id="name"
                  maxLength={50}
                  className="duration-500 bg-gray-50 rounded-sm border focus:ring-1 border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full h-11 p-2.5 outline-none"
                  placeholder="Enter test name"
                 
                  required
                />
              
              </div>
              <div>
                <label
                  for="first_name"
                  className="block mb-2 text-sm font-semibold text-gray-800"
                >
                  Test Name
                </label>
                <input
                  type="text"
                  id="name"
                  maxLength={50}
                  className="duration-500 bg-gray-50 rounded-sm border focus:ring-1 border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full h-11 p-2.5 outline-none"
                  placeholder="Enter test name"
                 
                  required
                />
              
              </div>
<div>
                <label
                  for="first_name"
                  className="block mb-2 text-sm font-semibold text-gray-800"
                >
                  Test Name
                </label>
                <input
                  type="text"
                  id="name"
                  maxLength={50}
                  className="duration-500 bg-gray-50 rounded-sm border focus:ring-1 border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full h-11 p-2.5 outline-none"
                  placeholder="Enter test name"
                 
                  required
                />
              
              </div>

              <div>
                <label
                  for="first_name"
                  className="block mb-2 text-sm font-semibold text-gray-800"
                >
                  Test Name
                </label>
                <input
                  type="text"
                  id="name"
                  maxLength={50}
                  className="duration-500 bg-gray-50 rounded-sm border focus:ring-1 border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full h-11 p-2.5 outline-none"
                  placeholder="Enter test name"
                 
                  required
                />
              
              </div>
              <div>
                <label
                  for="first_name"
                  className="block mb-2 text-sm font-semibold text-gray-800"
                >
                  Test Name
                </label>
                <input
                  type="text"
                  id="name"
                  maxLength={50}
                  className="duration-500 bg-gray-50 rounded-sm border focus:ring-1 border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full h-11 p-2.5 outline-none"
                  placeholder="Enter test name"
                 
                  required
                />
              
              </div>
              <div>
                <label
                  for="first_name"
                  className="block mb-2 text-sm font-semibold text-gray-800"
                >
                  Test Name
                </label>
                <input
                  type="text"
                  id="name"
                  maxLength={50}
                  className="duration-500 bg-gray-50 rounded-sm border focus:ring-1 border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full h-11 p-2.5 outline-none"
                  placeholder="Enter test name"
                 
                  required
                />
              
              </div>
</div>





<div className='flex justify-end'>
    <button className='bg-white text-sm px-4 py-2 rounded-full mr-2 hover:bg-gray-200 transition-colors duration-200 flex-1 text-center max-w-[120px] cursor-pointer'>
        Cancel
    </button>
    <button className='bg-blue-600 text-white text-sm px-4 py-2 rounded-full hover:bg-blue-700 transition-colors duration-200 flex-1 text-center max-w-[120px] cursor-pointer'>
        Search
    </button>
</div>

</div>

</div >
</Modal> 

      
   
   
    
        <div className="overflow-hidden overflow-y-auto h-auto scroll-smooth scrollbar-thin scrollbar-thumb-blue-500 scrollbar-track-gray-200 custom-scrollbar">
        <table className="min-w-full border-collapse border border-gray-200">
    <thead>
      <tr className="bg-gray-100 border-b border-gray-200">
        <th className="px-4 py-2 text-left text-sm font-semibold text-gray-800">
          Task ID
        </th>
        <th className="px-4 py-2 text-left text-sm font-semibold text-gray-800">
          Bill of Lading
        </th>
        <th className="px-4 py-2 text-left text-sm font-semibold text-gray-800">
          CRO Number
        </th>
        <th className="px-4 py-2 text-left text-sm font-semibold text-gray-800">
          Booking ID
        </th>
        <th className="px-4 py-2 text-left text-sm font-semibold text-gray-800">
          Quotation ID
        </th>
        <th className="px-4 py-2 text-sm font-semibold text-gray-800">
          Action
        </th>
      </tr>
    </thead>
    <tbody>
      {dummyData.map((item) => (
        <tr key={item.id} className="hover:bg-gray-50 even:bg-gray-50">
          <td className="px-4 py-2 text-sm text-gray-700 border-t border-gray-200">
            {item.taskId}
          </td>
          <td className="px-4 py-2 text-sm text-gray-700 border-t border-gray-200">
            <button
              className="text-blue-600 hover:text-blue-800 duration-200 cursor-pointer"
              onClick={() => alert(`Viewing Bill of Lading: ${item.billOfLading}`)}
            >
              {item.billOfLading}
            </button>
          </td>
          <td className="px-4 py-2 text-sm text-gray-700 border-t border-gray-200">
            {item.croNumber}
          </td>
          <td className="px-4 py-2 text-sm text-gray-700 border-t border-gray-200">
            {item.bookingId}
          </td>
          <td className="px-4 py-2 text-sm text-gray-700 border-t border-gray-200">
            {item.quotationId}
          </td>
          <td className="px-4 py-2 text-sm text-gray-700 border-t border-gray-200 flex space-x-2 justify-end">
            <button
              className="bg-blue-500/10 text-blue-600 px-3 py-1 rounded-sm hover:bg-blue-600/20 duration-200 cursor-pointer"
              onClick={() => alert(`Viewing CRO: ${item.croNumber}`)}
            >
              View CRO
            </button>
            <button
              className="bg-green-500/10 text-green-600 px-3 py-1 rounded-sm hover:bg-green-600/20 duration-200 cursor-pointer"
              onClick={() => alert(`Viewing Bookings: ${item.bookingId}`)}
            >
              View Bookings
            </button>
            <button
              className="bg-purple-500/10 text-purple-600 px-3 py-1 rounded-sm hover:bg-purple-600/20 duration-200 cursor-pointer"
              onClick={() => alert(`Approving Bookings: ${item.bookingId}`)}
            >
              Approve Bookings
            </button>
          </td>
        </tr>
      ))}
    </tbody>
  </table>

          <Modal isOpen={isModalOpen2} onClose={closeModal2}>
          <div className='h-full w-full relative'>

          <div className='absolute inset-0 flex items-center justify-center flex-col'>
<div className=' w-[54rem]'>
          <div className='flex w-full justify-end mb-4'>  <button onClick={closeModal2}  className='bg-white h-10 w-10 rounded-full cursor-pointer'><i className="ri-arrow-go-back-line"></i></button></div>

          <div className='bg-white p-6 rounded-md flex flex-col gap-2'>



          <div className='grid grid-cols-2 gap-4'> 

              <div className='border p-2 border-gray-300'>
                    <h1 className='text-sm font-bold text-neutral-700'>Quotation ID</h1>
                    <h1 className='text-sm mt-1 text-neutral-700'>Q12345</h1>
             </div>

             <div className='border p-2 border-gray-300'>
                    <h1 className='text-sm font-bold text-neutral-700'>Quotation ID</h1>
                    <h1 className='text-sm mt-1 text-neutral-700'>Q12345</h1>
             </div>

         </div>

         <div className='grid grid-cols-2 gap-4'> 

<div className='border p-2 border-gray-300'>
      <h1 className='text-sm font-bold text-neutral-700'>Quotation ID</h1>
      <h1 className='text-sm mt-1 text-neutral-700'>Q12345</h1>
</div>

<div className='border p-2 border-gray-300'>
      <h1 className='text-sm font-bold text-neutral-700'>Quotation ID</h1>
      <h1 className='text-sm mt-1 text-neutral-700'>Q12345</h1>
</div>

</div>

<div className='grid grid-cols-2 gap-4'> 

<div className='border p-2 border-gray-300'>
      <h1 className='text-sm font-bold text-neutral-700'>Quotation ID</h1>
      <h1 className='text-sm mt-1 text-neutral-700'>Q12345</h1>
</div>

<div className='border p-2 border-gray-300'>
      <h1 className='text-sm font-bold text-neutral-700'>Quotation ID</h1>
      <h1 className='text-sm mt-1 text-neutral-700'>Q12345</h1>
</div>

</div>

<div className='grid grid-cols-2 gap-4'> 

<div className='border p-2 border-gray-300'>
      <h1 className='text-sm font-bold text-neutral-700'>Quotation ID</h1>
      <h1 className='text-sm mt-1 text-neutral-700'>Q12345</h1>
</div>

<div className='border p-2 border-gray-300'>
      <h1 className='text-sm font-bold text-neutral-700'>Quotation ID</h1>
      <h1 className='text-sm mt-1 text-neutral-700'>Q12345</h1>
</div>

</div>

<div className='grid grid-cols-2 gap-4'> 

<div className='border p-2 border-gray-300'>
      <h1 className='text-sm font-bold text-neutral-700'>Quotation ID</h1>
      <h1 className='text-sm mt-1 text-neutral-700'>Q12345</h1>
</div>

<div className='border p-2 border-gray-300'>
      <h1 className='text-sm font-bold text-neutral-700'>Quotation ID</h1>
      <h1 className='text-sm mt-1 text-neutral-700'>Q12345</h1>
</div>

</div>
<div className='grid grid-cols-2 gap-4'> 

<div className='border p-2 border-gray-300'>
      <h1 className='text-sm font-bold text-neutral-700'>Quotation ID</h1>
      <h1 className='text-sm mt-1 text-neutral-700'>Q12345</h1>
</div>

<div className='border p-2 border-gray-300'>
      <h1 className='text-sm font-bold text-neutral-700'>Quotation ID</h1>
      <h1 className='text-sm mt-1 text-neutral-700'>Q12345</h1>
</div>

</div>



 








          </div>

          </div>

       
         </div>
                </div>
          </Modal>

        </div>

    
    </div>

      <div>



      </div>
      
     
    </Layout>
    );
  };
  
  export default crolist;