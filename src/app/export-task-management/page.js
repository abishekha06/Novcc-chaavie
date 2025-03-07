"use client";
import { useState } from 'react';
import Layout from "../../components/layout";
import Modal from "../../components/modal";
import Link from 'next/link';
import { TiFilter } from "react-icons/ti";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { RiArrowGoBackFill } from "react-icons/ri";
import { MdModeEdit } from "react-icons/md";
import { CgEyeAlt } from "react-icons/cg";
import { MdAssignmentAdd } from "react-icons/md";

const exporttaskmanagement = () => {

  const dummyData = [
    {
      id: 1,
      taskId: "T12345",
      bookingId: "BK54321",
      quotationId: "Q12345",
      croNumber: "CRO67890",
      status: "Active",
    },
    {
      id: 2,
      taskId: "T67890",
      bookingId: "BK12345",
      quotationId: "Q67890",
      croNumber: "CRO54321",
      status: "Inactive",
    },
    {
      id: 3,
      taskId: "T54321",
      bookingId: "BK67890",
      quotationId: "Q54321",
      croNumber: "CRO12345",
      status: "Pending",
    },
  ];

  const [isModalOpen, setIsModalOpen] = useState(false);
  
          const openModal = () => setIsModalOpen(true);
          const closeModal = () => setIsModalOpen(false);

          const [isModalOpen2, setIsModalOpen2] = useState(false);

          const openModal2 = () => setIsModalOpen2(true);
          const closeModal2 = () => setIsModalOpen2(false);

          const [isModalOpen3, setIsModalOpen3] = useState(false);

          const openModal3 = () => setIsModalOpen3(true);
          const closeModal3 = () => setIsModalOpen3(false);

          const [isModalOpen4, setIsModalOpen4] = useState(false);

          const openModal4 = () => setIsModalOpen4(true);
          const closeModal4 = () => setIsModalOpen4(false);



  

    return (
      <Layout>
      <div className='p-6 border-1 border-gray-200 h-full bg-white rounded-2xl shadow-xl'>
    
    <div className='h-fit flex flex-col justify-between'>
      <h1 className="text-xl font-semibold border-l-pink-800 border-l-8 pl-2.5">Export Task Management</h1>
      
      
            <div className='flex items-end flex-col'>
            <button onClick={openModal}  className='bg-gray-100 hover:bg-gray-200 rounded-sm p-2 px-4 text-sm cursor-pointer w-fit flex items-center justify-center gap-2'><h1>Filter </h1><TiFilter /> </button>
            
            <div className='flex gap-0.5 my-2'>
              <button className='h-6 bg-gray-200 w-6 flex items-center justify-center hover:bg-gray-300 text-xs'><IoIosArrowBack /></button>
              <button className='h-6 bg-gray-200 w-6 flex items-center justify-center hover:bg-gray-300 text-xs'>1</button>
              <button className='h-6 bg-gray-200 w-6 flex items-center justify-center hover:bg-gray-300 text-xs'>2</button>
              <button className='h-6 bg-gray-200 w-6 flex items-center justify-center hover:bg-gray-300 text-xs'>3</button>
              <button className='h-6 bg-gray-200 w-6 flex items-center justify-center hover:bg-gray-300 text-xs'>4</button>
              <button className='h-6 bg-gray-200 w-6 flex items-center justify-center hover:bg-gray-300 text-xs'>5</button>
              <button className='h-6 bg-gray-200 w-6 flex items-center justify-center hover:bg-gray-300 text-xs'><IoIosArrowForward /></button>
            </div>
            </div>

    
    
    
    </div>


     <Modal isOpen={isModalOpen} onClose={closeModal} >
        <div className='h-full w-full relative'>

<div className='absolute top-32 right-14'>

<div className='flex justify-end'>  <button onClick={closeModal}  className='bg-white h-10 w-10 rounded-full cursor-pointer flex justify-center items-center'><RiArrowGoBackFill /></button></div>

<div className='bg-white rounded-xl my-4 p-4 grid grid-cols-3 lg:grid-cols-6 gap-2 '>

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
    <button className='bg-white text-sm px-4 py-2 rounded-se-lg rounded-es-lg mr-2 hover:bg-gray-200 transition-colors duration-200 flex-1 text-center max-w-[120px] cursor-pointer'>
        Reset
    </button>
    <button className='bg-blue-500 text-white text-sm px-4 py-2 rounded-se-lg rounded-es-lg hover:bg-blue-600 transition-colors duration-200 flex-1 text-center max-w-[120px] cursor-pointer'>
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
          Booking ID
        </th>
        <th className="px-4 py-2 text-left text-sm font-semibold text-gray-800">
          Quotation ID
        </th>
        <th className="px-4 py-2 text-left text-sm font-semibold text-gray-800">
          CRO Number
        </th>
        <th className="px-4 py-2 text-left text-sm font-semibold text-gray-800">
          Status
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
            {item.bookingId}
          </td>
          <td className="px-4 py-2 text-sm text-gray-700 border-t border-gray-200">
            {item.quotationId}
          </td>
          <td className="px-4 py-2 text-sm text-gray-700 border-t border-gray-200">
            {item.croNumber}
          </td>
          <td className="px-4 py-2 text-sm text-gray-700 border-t border-gray-200">
            <button
              className="text-green-600 hover:text-green-800 duration-200 cursor-pointer"
              onClick={() => alert(`Status: ${item.status}`)}
            >
              {item.status}
            </button>
          </td>
          <td className="px-4 py-2 text-sm text-gray-700 border-t border-gray-200 flex space-x-2 justify-end">
            <button
              className="text-gray-800 px-2 rounded-sm hover:text-blue-800 duration-200 cursor-pointer bg-blue-500/10"
              onClick={openModal2}
            >
              <CgEyeAlt />
            </button>
            <Link
    href="/export-task-management/export-task"
     className="text-gray-800 bg-blue-500/10 px-2 rounded-sm hover:text-blue-800 duration-200 cursor-pointer flex items-center justify-center"
  >
    <MdModeEdit />
  </Link>
            <button
              className="text-gray-800 bg-blue-500/10 px-2 rounded-sm hover:text-blue-800 duration-200 cursor-pointer"
              onClick={openModal3}
            >
              <MdAssignmentAdd />
            </button>



            <Link
              className="bg-green-500/10 text-green-600 px-3 py-1 rounded-sm hover:bg-green-600/20 duration-200 cursor-pointer"
              href="/export-task-management/export-cro"
            >
              Generate CRO
            </Link>



            <button
              className="bg-green-500/10 text-green-600 px-3 py-1 rounded-sm hover:bg-green-600/20 duration-200 cursor-pointer"
              onClick={openModal4}
            >
              Approve Mail
            </button>
          </td>
        </tr>
      ))}
    </tbody>
  </table>

  <Modal isOpen={isModalOpen2} onClose={closeModal2}>
    <div className="h-full w-full relative">
      <div className="absolute inset-0 flex items-center justify-center flex-col">
        <div className="w-[54rem]">
          <div className="flex w-full justify-end mb-4">
            <button
              onClick={closeModal2}
              className="bg-white h-10 w-10 rounded-full cursor-pointer flex items-center justify-center"><RiArrowGoBackFill />
            </button>
          </div>

          <div className="bg-white p-6 rounded-md flex flex-col gap-2">
            <div className="grid grid-cols-2 gap-4">
              <div className="border p-2 border-gray-300">
                <h1 className="text-sm font-bold text-neutral-700">Quotation ID</h1>
                <h1 className="text-sm mt-1 text-neutral-700">Q12345</h1>
              </div>
              <div className="border p-2 border-gray-300">
                <h1 className="text-sm font-bold text-neutral-700">Quotation ID</h1>
                <h1 className="text-sm mt-1 text-neutral-700">Q12345</h1>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="border p-2 border-gray-300">
                <h1 className="text-sm font-bold text-neutral-700">Quotation ID</h1>
                <h1 className="text-sm mt-1 text-neutral-700">Q12345</h1>
              </div>
              <div className="border p-2 border-gray-300">
                <h1 className="text-sm font-bold text-neutral-700">Quotation ID</h1>
                <h1 className="text-sm mt-1 text-neutral-700">Q12345</h1>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="border p-2 border-gray-300">
                <h1 className="text-sm font-bold text-neutral-700">Quotation ID</h1>
                <h1 className="text-sm mt-1 text-neutral-700">Q12345</h1>
              </div>
              <div className="border p-2 border-gray-300">
                <h1 className="text-sm font-bold text-neutral-700">Quotation ID</h1>
                <h1 className="text-sm mt-1 text-neutral-700">Q12345</h1>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="border p-2 border-gray-300">
                <h1 className="text-sm font-bold text-neutral-700">Quotation ID</h1>
                <h1 className="text-sm mt-1 text-neutral-700">Q12345</h1>
              </div>
              <div className="border p-2 border-gray-300">
                <h1 className="text-sm font-bold text-neutral-700">Quotation ID</h1>
                <h1 className="text-sm mt-1 text-neutral-700">Q12345</h1>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="border p-2 border-gray-300">
                <h1 className="text-sm font-bold text-neutral-700">Quotation ID</h1>
                <h1 className="text-sm mt-1 text-neutral-700">Q12345</h1>
              </div>
              <div className="border p-2 border-gray-300">
                <h1 className="text-sm font-bold text-neutral-700">Quotation ID</h1>
                <h1 className="text-sm mt-1 text-neutral-700">Q12345</h1>
              </div>
            </div>

            
          </div>
        </div>
      </div>
    </div>
  </Modal>

  <Modal isOpen={isModalOpen3} onClose={closeModal3}>
  <div className="h-full w-full relative">
      <div className="absolute inset-0 flex items-center justify-center flex-col">
        <div className="w-[34rem]">
          <div className="flex w-full justify-end mb-4">
            <button
              onClick={closeModal3}
              className="bg-white h-10 w-10 rounded-full cursor-pointer flex items-center justify-center"><RiArrowGoBackFill />
            </button>
          </div>

          <div className="bg-white p-6 rounded-md flex flex-col gap-2">

          <h1 className='font-semibold'>Assign To</h1>  

          <div>
                <input
                  type="text"
                  id="name"
                  maxLength={50}
                  className="duration-500 bg-gray-50 rounded-sm border focus:ring-1 border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full h-11 p-2.5 outline-none"
                  placeholder="Enter test name"
                 
                  required
                />
              
              </div>




          
           
         
          <div className="flex w-full justify-end">
            <button
              onClick={closeModal4}
              className="text-white py-2 px-4 bg-blue-600 rounded-full cursor-pointer"
            >
              Approve
            </button>
          </div>

           </div>
        </div>
      </div>
    </div>
  </Modal>

  <Modal isOpen={isModalOpen4} onClose={closeModal4}>
  <div className="h-full w-full relative">
      <div className="absolute inset-0 flex items-center justify-center flex-col">
        <div className="w-[34rem]">
          <div className="flex w-full justify-end mb-4">
            <button
              onClick={closeModal4}
              className="bg-white h-10 w-10 rounded-full cursor-pointer flex items-center justify-center"><RiArrowGoBackFill />
            </button>
          </div>

          <div className="bg-white p-6 rounded-md flex flex-col gap-2">

          <h1 className='font-semibold'>Approve Mail</h1>  

          <div>
                <label
                  for="first_name"
                  className="block mb-2 text-sm font-semibold text-gray-800"
                >
                  From
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
                  To
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
                  Mail
                </label>
                <textarea
                  type="text"
                  id="name"
                  maxLength={50}
                  className="duration-500 h-34 bg-gray-50 rounded-sm border focus:ring-1 border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full  p-2.5 outline-none"
                  placeholder="Enter test name"
                 
                  required
                />
              
              </div>
          
           
         
          <div className="flex w-full justify-end">
            <button
              onClick={closeModal4}
              className="text-white py-2 px-4 bg-blue-600 rounded-full cursor-pointer"
            >
              Approve
            </button>
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
  
  export default exporttaskmanagement;