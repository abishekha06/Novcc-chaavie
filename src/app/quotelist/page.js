"use client";

import { useState } from 'react';
import Layout from '../../components/layout';
import 'remixicon/fonts/remixicon.css'
import Modal from '../../components/modal';

export default function quotelist() {
   
        // Dummy data
        const dummyData = [
          {
            id: 1,
            quotationId: "Q12345",
            quoteDate: "2023-10-01",
            customerName: "John Doe",
            shippingLine: "Maersk",
            loadPort: "Port A",
            dischargePort: "Port B",
          },
          {
            id: 2,
            quotationId: "Q67890",
            quoteDate: "2023-10-02",
            customerName: "Jane Smith",
            shippingLine: "COSCO",
            loadPort: "Port C",
            dischargePort: "Port D",
          },
          {
            id: 3,
            quotationId: "Q54321",
            quoteDate: "2023-10-03",
            customerName: "Alice Johnson",
            shippingLine: "Hapag-Lloyd",
            loadPort: "Port E",
            dischargePort: "Port F",
          },
          {
            id: 1,
            quotationId: "Q12345",
            quoteDate: "2023-10-01",
            customerName: "John Doe",
            shippingLine: "Maersk",
            loadPort: "Port A",
            dischargePort: "Port B",
          },
          {
            id: 2,
            quotationId: "Q67890",
            quoteDate: "2023-10-02",
            customerName: "Jane Smith",
            shippingLine: "COSCO",
            loadPort: "Port C",
            dischargePort: "Port D",
          },
          {
            id: 3,
            quotationId: "Q54321",
            quoteDate: "2023-10-03",
            customerName: "Alice Johnson",
            shippingLine: "Hapag-Lloyd",
            loadPort: "Port E",
            dischargePort: "Port F",
          },
          {
            id: 1,
            quotationId: "Q12345",
            quoteDate: "2023-10-01",
            customerName: "John Doe",
            shippingLine: "Maersk",
            loadPort: "Port A",
            dischargePort: "Port B",
          },
          {
            id: 2,
            quotationId: "Q67890",
            quoteDate: "2023-10-02",
            customerName: "Jane Smith",
            shippingLine: "COSCO",
            loadPort: "Port C",
            dischargePort: "Port D",
          },
          {
            id: 3,
            quotationId: "Q54321",
            quoteDate: "2023-10-03",
            customerName: "Alice Johnson",
            shippingLine: "Hapag-Lloyd",
            loadPort: "Port E",
            dischargePort: "Port F",
          },
          {
            id: 1,
            quotationId: "Q12345",
            quoteDate: "2023-10-01",
            customerName: "John Doe",
            shippingLine: "Maersk",
            loadPort: "Port A",
            dischargePort: "Port B",
          },
          {
            id: 2,
            quotationId: "Q67890",
            quoteDate: "2023-10-02",
            customerName: "Jane Smith",
            shippingLine: "COSCO",
            loadPort: "Port C",
            dischargePort: "Port D",
          },
          {
            id: 3,
            quotationId: "Q54321",
            quoteDate: "2023-10-03",
            customerName: "Alice Johnson",
            shippingLine: "Hapag-Lloyd",
            loadPort: "Port E",
            dischargePort: "Port F",
          },
          {
            id: 2,
            quotationId: "Q67890",
            quoteDate: "2023-10-02",
            customerName: "Jane Smith",
            shippingLine: "COSCO",
            loadPort: "Port C",
            dischargePort: "Port D",
          },
          {
            id: 3,
            quotationId: "Q54321",
            quoteDate: "2023-10-03",
            customerName: "Alice Johnson",
            shippingLine: "Hapag-Lloyd",
            loadPort: "Port E",
            dischargePort: "Port F",
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
    
    <div className='h-2/12'>
      <h1 className="text-xl font-semibold border-l-amber-900 border-l-8 pl-2.5">Quote List</h1>
      <div className='flex justify-end'><button onClick={openModal}  className='bg-gray-100 hover:bg-gray-200 rounded-sm p-2 px-4 text-sm cursor-pointer'>Fillter <i className="ri-equalizer-3-line"></i> </button></div>
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

      
   
   
    
        <div className="overflow-hidden overflow-y-auto h-10/12 scroll-smooth scrollbar-thin scrollbar-thumb-blue-500 scrollbar-track-gray-200">
          <table className="min-w-full border-collapse border border-gray-200 ">
            <thead>
              <tr className="bg-gray-100 border-b border-gray-200">
                <th className="px-4 py-2 text-left text-sm font-semibold text-gray-800">
                  Quotation ID
                </th>
                <th className="px-4 py-2 text-left text-sm font-semibold text-gray-800">
                  Quote Date
                </th>
                <th className="px-4 py-2 text-left text-sm font-semibold text-gray-800">
                  Customer Name
                </th>
                <th className="px-4 py-2 text-left text-sm font-semibold text-gray-800">
                  Shipping Line
                </th>
                <th className="px-4 py-2 text-left text-sm font-semibold text-gray-800">
                  Load Port
                </th>
                <th className="px-4 py-2 text-left text-sm font-semibold text-gray-800">
                  Discharge Port
                </th>
                <th className="px-4 py-2 text-left text-sm font-semibold text-gray-800">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {dummyData.map((item) => (
                <tr
                  key={item.id}
                  className="hover:bg-gray-50 even:bg-gray-50"
                >
                  <td className="px-4 py-2 text-sm text-gray-700 border-t border-gray-200">
                    {item.quotationId}
                  </td>
                  <td className="px-4 py-2 text-sm text-gray-700 border-t border-gray-200">
                    {item.quoteDate}
                  </td>
                  <td className="px-4 py-2 text-sm text-gray-700 border-t border-gray-200">
                    {item.customerName}
                  </td>
                  <td className="px-4 py-2 text-sm text-gray-700 border-t border-gray-200">
                    {item.shippingLine}
                  </td>
                  <td className="px-4 py-2 text-sm text-gray-700 border-t border-gray-200">
                    {item.loadPort}
                  </td>
                  <td className="px-4 py-2 text-sm text-gray-700 border-t border-gray-200">
                    {item.dischargePort}
                  </td>
                  <td className="px-4 py-2 text-sm text-gray-700 border-t border-gray-200">
                    <button
                      className="bg-blue-500/10 text-blue-600 px-3 py-1 rounded-sm hover:bg-blue-600/20 duration-500 cursor-pointer"
                    
                      onClick={openModal2}
                    >
                      View
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <Modal isOpen={isModalOpen2} onClose={closeModal2}>
          <div className='h-full w-full relative'>

          <div className='absolute inset-0 flex items-center justify-center flex-col'>
<div className=' w-[34rem]'>
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
}