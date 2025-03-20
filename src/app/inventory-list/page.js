"use client";
import { useState } from 'react';
import Layout from "../../components/layout";
import Modal from "../../components/modal";
import { TiFilter } from "react-icons/ti";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { RiArrowGoBackFill } from "react-icons/ri";
import InputField from '../../components/input-field';
import { MdOutlineFileDownload } from "react-icons/md";

const InventoryList = () => {
  // Dummy data for the table
  const dummyData = [
    {
      id: 1,
      containerNo: "ABC123",
      size: "20ft",
      type: "Dry",
      importBLNumber: "BL12345",
      polCode: "POL1",
      pod: "POD1",
      finalPod: "Final POD1",
    },
    {
      id: 2,
      containerNo: "DEF456",
      size: "40ft",
      type: "Reefer",
      importBLNumber: "BL67890",
      polCode: "POL2",
      pod: "POD2",
      finalPod: "Final POD2",
    },
    {
      id: 3,
      containerNo: "GHI789",
      size: "20ft",
      type: "Tank",
      importBLNumber: "BL54321",
      polCode: "POL3",
      pod: "POD3",
      finalPod: "Final POD3",
    },
  ];

  // Modal data for the "View" modal
  const modalData = [
    { label: "Container No", value: "ABC123" },
    { label: "Size", value: "20ft" },
    { label: "Type", value: "Dry" },
    { label: "Import B/L Number", value: "BL12345" },
    { label: "POL Code", value: "POL1" },
    { label: "POD", value: "POD1" },
    { label: "Final POD", value: "Final POD1" },
    { label: "Type", value: "Dry" },
    { label: "Import B/L Number", value: "BL12345" },
    { label: "POL Code", value: "POL1" },
    { label: "POD", value: "POD1" },
    { label: "Final POD", value: "Final POD1" },
    { label: "POD", value: "POD1" },
    { label: "Final POD", value: "Final POD1" },
  ];

  // State for Filter Modal
  const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);
  const openFilterModal = () => setIsFilterModalOpen(true);
  const closeFilterModal = () => setIsFilterModalOpen(false);

  // State for View Modal
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);
  const openViewModal = () => setIsViewModalOpen(true);
  const closeViewModal = () => setIsViewModalOpen(false);

  return (
    <Layout>
      <div className='p-6 border-1 border-gray-200 h-full bg-white rounded-2xl shadow-xl'>
        <div className='h-fit flex flex-col justify-between'>
          <h1 className="text-xl font-semibold border-l-pink-800 border-l-8 pl-2.5">Inventory List</h1>
          <div className='flex items-end flex-col'>
           

            <div className='flex gap-3'>
            <button className='bg-blue-500/10 text-blue-600 py-1 rounded-sm hover:bg-blue-600/20 p-2 px-4 text-sm cursor-pointer w-fit flex items-center justify-center gap-2'>
              <h1>Inventory Report</h1><MdOutlineFileDownload />
            </button>
            <button onClick={openFilterModal} className='bg-gray-100 hover:bg-gray-200 rounded-sm p-2 px-4 text-sm cursor-pointer w-fit flex items-center justify-center gap-2'>
              <h1>Filter</h1><TiFilter />
            </button>
            </div>

            
        


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
        <Modal isOpen={isFilterModalOpen} onClose={closeFilterModal}>
          <div className='h-full w-full relative'>
            <div className='absolute top-32 right-14'>
              <div className='flex justify-end'>
                <button onClick={closeFilterModal} className='bg-white h-10 w-10 rounded-full cursor-pointer flex justify-center items-center'>
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
                <th className="px-4 py-2 text-left text-sm font-semibold text-gray-800">Container No</th>
                <th className="px-4 py-2 text-left text-sm font-semibold text-gray-800">Size</th>
                <th className="px-4 py-2 text-left text-sm font-semibold text-gray-800">Type</th>
                <th className="px-4 py-2 text-left text-sm font-semibold text-gray-800">Import B/L Number</th>
                <th className="px-4 py-2 text-left text-sm font-semibold text-gray-800">POL Code</th>
                <th className="px-4 py-2 text-left text-sm font-semibold text-gray-800">POD</th>
                <th className="px-4 py-2 text-left text-sm font-semibold text-gray-800">Final POD</th>
                <th className="px-4 py-2 text-sm font-semibold text-gray-800">Action</th>
              </tr>
            </thead>
            <tbody>
              {dummyData.map((item) => (
                <tr key={item.id} className="hover:bg-gray-50 even:bg-gray-50">
                  <td className="px-4 py-2 text-sm text-gray-700 border-t border-gray-200">{item.containerNo}</td>
                  <td className="px-4 py-2 text-sm text-gray-700 border-t border-gray-200">{item.size}</td>
                  <td className="px-4 py-2 text-sm text-gray-700 border-t border-gray-200">{item.type}</td>
                  <td className="px-4 py-2 text-sm text-gray-700 border-t border-gray-200">{item.importBLNumber}</td>
                  <td className="px-4 py-2 text-sm text-gray-700 border-t border-gray-200">{item.polCode}</td>
                  <td className="px-4 py-2 text-sm text-gray-700 border-t border-gray-200">{item.pod}</td>
                  <td className="px-4 py-2 text-sm text-gray-700 border-t border-gray-200">{item.finalPod}</td>
                  <td className="px-4 py-2 text-sm text-gray-700 border-t border-gray-200 flex space-x-2 justify-end">
                    <button
                      className="bg-blue-500/10 text-blue-600 px-3 py-1 rounded-sm hover:bg-blue-600/20 duration-200 cursor-pointer"
                      onClick={openViewModal}
                    >
                      View
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* View Modal */}
        <Modal isOpen={isViewModalOpen} onClose={closeViewModal}>
          <div className='h-full w-full relative'>
            <div className='absolute inset-0 flex items-center justify-center'>
              <div className='w-[54rem]'>
                <div className='flex w-full justify-end mb-4'>
                  <button onClick={closeViewModal} className='bg-white h-10 w-10 rounded-full cursor-pointer flex items-center justify-center'>
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
      </div>
    </Layout>
  );
};

export default InventoryList;