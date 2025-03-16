"use client";
import { useState } from 'react';
import Layout from "../../components/layout";
import Modal from "../../components/modal";
import Link from 'next/link';
import { TiFilter } from "react-icons/ti";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { RiArrowGoBackFill } from "react-icons/ri";
import InputField from '../../components/input-field';
import { GoPlus } from "react-icons/go";
import { FaSync, FaTimesCircle } from "react-icons/fa";

const ContainerAllotmentList = () => {
  const dummyData = [
    {
      id: 1,
      taskId: "T12345",
      selectBooking: "BK12345",
      shippingLine: "Maersk",
      allotmentDate: "2023-10-01",
      croNumber: "CRO67890",
      date: "2023-10-01",
    },
    {
      id: 2,
      taskId: "T67890",
      selectBooking: "BK67890",
      shippingLine: "COSCO",
      allotmentDate: "2023-10-02",
      croNumber: "CRO54321",
      date: "2023-10-02",
    },
    {
      id: 3,
      taskId: "T54321",
      selectBooking: "BK54321",
      shippingLine: "Hapag-Lloyd",
      allotmentDate: "2023-10-03",
      croNumber: "CRO12345",
      date: "2023-10-03",
    },
  ];

  const modalData = [
    { label: "Task ID", value: "T12345" },
    { label: "Select Booking", value: "BK12345" },
    { label: "Shipping Line", value: "Maersk" },
    { label: "Allotment Date", value: "2023-10-01" },
    { label: "CRO Number", value: "CRO67890" },
    { label: "Date", value: "2023-10-01" },
  ];


  const initialData = [
    {
      srNo: 1,
      containerNo: "ABC123",
      size: "20ft",
      allotment: true,
      shippingLine: "Maersk",
      allotmentDate: "2023-10-01",
      croNumber: "CRO12345",
      dated: "2023-09-25",
      validity: "30 days",
    },
    {
      srNo: 2,
      containerNo: "XYZ456",
      size: "40ft",
      allotment: false,
      shippingLine: "COSCO",
      allotmentDate: "2023-10-05",
      croNumber: "CRO67890",
      dated: "2023-09-30",
      validity: "45 days",
    },
  ];


   const [data, setData] = useState(initialData);
  
    const handleAllotmentChange = (index) => {
      const updatedData = [...data];
      updatedData[index].allotment = !updatedData[index].allotment;
      setData(updatedData);
    };
  
    const handleRemove = (index) => {
      const updatedData = data.filter((row, i) => i !== index);
      setData(updatedData);
    };
  


  

  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const [isModalOpen2, setIsModalOpen2] = useState(false);
  const openModal2 = () => setIsModalOpen2(true);
  const closeModal2 = () => setIsModalOpen2(false);

  const [isModalOpen3, setIsModalOpen3] = useState(false);
  const openModal3 = () => setIsModalOpen3(true);
  const closeModal3 = () => setIsModalOpen3(false);

  return (
    <Layout>
      <div className='p-6 border-1 border-gray-200 h-full bg-white rounded-2xl shadow-xl'>
        <div className='h-fit flex flex-col justify-between'>
          <h1 className="text-xl font-semibold border-l-pink-800 border-l-8 pl-2.5">Container Allotment List</h1>
          <div className='flex items-end flex-col'>
            <button onClick={openModal} className='bg-gray-100 hover:bg-gray-200 rounded-sm p-2 px-4 text-sm cursor-pointer w-fit flex items-center justify-center gap-2'>
              <h1>Filter</h1><TiFilter />
            </button>
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

        {/* Filter Modal */}
        <Modal isOpen={isModalOpen} onClose={closeModal}>
          <div className='h-full w-full relative'>
            <div className='absolute top-32 right-14'>
              <div className='flex justify-end'>
                <button onClick={closeModal} className='bg-white h-10 w-10 rounded-full cursor-pointer flex justify-center items-center'>
                  <RiArrowGoBackFill />
                </button>
              </div>
              <div className='bg-white rounded-xl my-4 p-4 grid grid-cols-3 lg:grid-cols-6 gap-2'>
                <InputField label="Test Name" id="testName1" placeholder="Enter test name" />
                <InputField label="Test Name" id="testName2" placeholder="Enter test name" />
                <InputField label="Test Name" id="testName3" placeholder="Enter test name" />
                <InputField label="Test Name" id="testName4" placeholder="Enter test name" />
                <InputField label="Test Name" id="testName5" placeholder="Enter test name" />
                <InputField label="Test Name" id="testName6" placeholder="Enter test name" />
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
          </div>
        </Modal>

        {/* Table */}
        <div className="overflow-hidden overflow-y-auto h-auto scroll-smooth scrollbar-thin scrollbar-thumb-blue-500 scrollbar-track-gray-200 custom-scrollbar">
          <table className="min-w-full border-collapse border border-gray-200">
            <thead>
              <tr className="bg-gray-100 border-b border-gray-200">
                <th className="px-4 py-2 text-left text-sm font-semibold text-gray-800">Task ID</th>
                <th className="px-4 py-2 text-left text-sm font-semibold text-gray-800">Select Booking</th>
                <th className="px-4 py-2 text-left text-sm font-semibold text-gray-800">Shipping Line</th>
                <th className="px-4 py-2 text-left text-sm font-semibold text-gray-800">Allotment Date</th>
                <th className="px-4 py-2 text-left text-sm font-semibold text-gray-800">CRO Number</th>
                <th className="px-4 py-2 text-left text-sm font-semibold text-gray-800">Date</th>
                <th className="px-4 py-2 text-sm font-semibold text-gray-800">Action</th>
              </tr>
            </thead>
            <tbody>
              {dummyData.map((item) => (
                <tr key={item.id} className="hover:bg-gray-50 even:bg-gray-50">
                  <td className="px-4 py-2 text-sm text-gray-700 border-t border-gray-200">{item.taskId}</td>
                  <td className="px-4 py-2 text-sm text-gray-700 border-t border-gray-200">{item.selectBooking}</td>
                  <td className="px-4 py-2 text-sm text-gray-700 border-t border-gray-200">{item.shippingLine}</td>
                  <td className="px-4 py-2 text-sm text-gray-700 border-t border-gray-200">{item.allotmentDate}</td>
                  <td className="px-4 py-2 text-sm text-gray-700 border-t border-gray-200">{item.croNumber}</td>
                  <td className="px-4 py-2 text-sm text-gray-700 border-t border-gray-200">{item.date}</td>
                  <td className="px-4 py-2 text-sm text-gray-700 border-t border-gray-200 flex space-x-2 justify-end">
                    <button
                      className="bg-blue-500/10 text-blue-600 px-3 py-1 rounded-sm hover:bg-blue-600/20 duration-200 cursor-pointer"
                      onClick={openModal2}
                    >
                      View
                    </button>
                    <button
                      className="bg-green-500/10 text-green-600 px-3 py-1 rounded-sm hover:bg-green-600/20 duration-200 cursor-pointer"
                      onClick={openModal3}
                    >
                      Edit
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* View Modal (Modal 2) */}
        <Modal isOpen={isModalOpen2} onClose={closeModal2}>
          <div className='h-full w-full relative'>
            <div className='absolute inset-0 flex items-center justify-center'>
              <div className='w-[54rem]'>
                <div className='flex w-full justify-end mb-4'>
                  <button onClick={closeModal2} className='bg-white h-10 w-10 rounded-full cursor-pointer flex items-center justify-center'>
                    <RiArrowGoBackFill />
                  </button>
                </div>
                <div className='bg-white p-6 rounded-md flex flex-col gap-2'>
                  <div className='grid grid-cols-2 gap-4'>
                    {modalData.map((item, index) => (
                      <div key={index} className='border p-2 border-gray-300'>
                        <h1 className='text-sm font-bold text-neutral-700'>{item.label}</h1>
                        <h1 className='text-sm mt-1 text-neutral-700'>{item.value}</h1>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Modal>

        {/* Edit Modal (Modal 3) */}
        <Modal isOpen={isModalOpen3} onClose={closeModal3}>
          <div className='h-full w-full relative'>
            <div className='absolute inset-0 flex items-center justify-center'>
              <div className='w-[60rem]'>
                <div className='flex w-full justify-end mb-4'>
                  <button onClick={closeModal3} className='bg-white h-10 w-10 rounded-full cursor-pointer flex items-center justify-center'>
                    <RiArrowGoBackFill />
                  </button>
                </div>


                <div className='bg-white p-6 rounded-md flex flex-col gap-4 h-[30rem]  overflow-auto custom-scrollbar2'>
                  <h1 className="text-xl font-semibold">Container Allotment</h1>
                    <InputField label="Task ID" id="taskId" placeholder="Enter Task ID" />
                  <div className='grid grid-cols-2 gap-4'>
                    <InputField label="Task ID" id="taskId" placeholder="Enter Task ID" />
                    <InputField label="Select Booking" id="selectBooking" placeholder="Enter Select Booking" />
                    <InputField label="Shipping Line" id="shippingLine" placeholder="Enter Shipping Line" />
                    <InputField label="Allotment Date" id="allotmentDate" placeholder="Enter Allotment Date" />
                    <InputField label="CRO Number" id="croNumber" placeholder="Enter CRO Number" />
                    <InputField label="Date" id="date" placeholder="Enter Date" />
                  </div>

  <div className="flex justify-end mt-4">
                      <button className="bg-blue-500 text-white px-4 h-8 text-xs ml-3 rounded-md hover:bg-blue-600 transition-all duration-200 cursor-pointer flex justify-center items-center gap-3">
                        <GoPlus /> Add New
                      </button>
                    </div>


                        <div className="relative p-[1px] rounded-lg mt-6 bg-gradient-to-r from-pink-400 to-blue-400">
                                <div className="bg-white rounded-lg p-4">
                                  <table className="w-full border-collapse">
                                    <thead>
                                      <tr>
                                        <th className="p-3 border-b border-gray-200 text-center text-xs font-semibold">Sr No</th>
                                        <th className="p-3 border-b border-gray-200 text-center text-xs font-semibold">Container No</th>
                                        <th className="p-3 border-b border-gray-200 text-center text-xs font-semibold">Size</th>
                                        <th className="p-3 border-b border-gray-200 text-center text-xs font-semibold">Allotment</th>
                                        <th className="p-3 border-b border-gray-200 text-center text-xs font-semibold">Shipping Line</th>
                                        <th className="p-3 border-b border-gray-200 text-center text-xs font-semibold">Allotment Date</th>
                                        <th className="p-3 border-b border-gray-200 text-center text-xs font-semibold">CRO Number</th>
                                        <th className="p-3 border-b border-gray-200 text-center text-xs font-semibold">Dated</th>
                                        <th className="p-3 border-b border-gray-200 text-center text-xs font-semibold">Validity</th>
                                        <th className="p-3 border-b border-gray-200 text-center text-xs font-semibold">Action</th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      {data.map((row, index) => (
                                        <tr key={row.srNo} className="hover:bg-gray-50">
                                          <td className="p-3 border-b border-gray-200 text-center text-xs">{row.srNo}</td>
                                          <td className="p-3 border-b border-gray-200 text-center text-xs">{row.containerNo}</td>
                                          <td className="p-3 border-b border-gray-200 text-center text-xs">{row.size}</td>
                                          <td className="p-3 border-b border-gray-200 text-center text-xs">
                                            <input
                                              type="checkbox"
                                              checked={row.allotment}
                                              onChange={() => handleAllotmentChange(index)}
                                              className="form-checkbox h-4 w-4 text-blue-600"
                                            />
                                          </td>
                                          <td className="p-3 border-b border-gray-200 text-center text-xs">{row.shippingLine}</td>
                                          <td className="p-3 border-b border-gray-200 text-center text-xs">{row.allotmentDate}</td>
                                          <td className="p-3 border-b border-gray-200 text-center text-xs">{row.croNumber}</td>
                                          <td className="p-3 border-b border-gray-200 text-center text-xs">{row.dated}</td>
                                          <td className="p-3 border-b border-gray-200 text-center text-xs">{row.validity}</td>
                                          <td className="p-3 border-b border-gray-200 text-center text-xs">
                                            <div className="flex justify-center space-x-2">
                                              <button className="text-blue-500 hover:text-blue-600">
                                                <FaSync className="h-4 w-4" />
                                              </button>
                                              <button
                                                className="text-red-500 hover:text-red-600"
                                                onClick={() => handleRemove(index)}
                                              >
                                                <FaTimesCircle className="h-4 w-4" />
                                              </button>
                                            </div>
                                          </td>
                                        </tr>
                                      ))}
                                    </tbody>
                                  </table>
                                </div>
                              </div>



                  <div className='flex justify-end gap-2'>
                    <button
                      className='bg-white border border-gray-300 text-sm px-4 py-2 rounded-se-lg rounded-es-lg hover:bg-gray-200 transition-colors duration-200 flex-1 text-center max-w-[120px] cursor-pointer'
                      onClick={closeModal3}
                    >
                      Cancel
                    </button>
                    <button
                      className='bg-blue-500 text-white text-sm px-4 py-2 rounded-se-lg rounded-es-lg hover:bg-blue-600 transition-colors duration-200 flex-1 text-center max-w-[120px] cursor-pointer'
                    >
                      Save
                    </button>
                  </div>



                </div>
              </div>
            </div>
          </div>
        </Modal>
      </div>
    </Layout>
  );
};

export default ContainerAllotmentList;