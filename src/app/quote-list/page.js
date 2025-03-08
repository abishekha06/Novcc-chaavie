"use client";
import { useState } from 'react';
import Layout from '../../components/layout';
import Modal from '../../components/modal';
import { TiFilter } from "react-icons/ti";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { RiArrowGoBackFill } from "react-icons/ri";
import InputField from '../../components/input-field';


export default function quotelist() {
  const dummyData = [
    { id: 1, quotationId: "Q12345", quoteDate: "2023-10-01", customerName: "John Doe", shippingLine: "Maersk", loadPort: "Port A", dischargePort: "Port B" },
    { id: 2, quotationId: "Q67890", quoteDate: "2023-10-02", customerName: "Jane Smith", shippingLine: "COSCO", loadPort: "Port C", dischargePort: "Port D" },
    { id: 3, quotationId: "Q54321", quoteDate: "2023-10-03", customerName: "Alice Johnson", shippingLine: "Hapag-Lloyd", loadPort: "Port E", dischargePort: "Port F" },
    { id: 4, quotationId: "Q98765", quoteDate: "2023-10-04", customerName: "Bob Brown", shippingLine: "MSC", loadPort: "Port G", dischargePort: "Port H" },
    { id: 5, quotationId: "Q11223", quoteDate: "2023-10-05", customerName: "Charlie Davis", shippingLine: "Evergreen", loadPort: "Port I", dischargePort: "Port J" },
    { id: 6, quotationId: "Q44556", quoteDate: "2023-10-06", customerName: "Eve White", shippingLine: "ONE", loadPort: "Port K", dischargePort: "Port L" },
    { id: 7, quotationId: "Q77889", quoteDate: "2023-10-07", customerName: "Frank Green", shippingLine: "ZIM", loadPort: "Port M", dischargePort: "Port N" },
    { id: 8, quotationId: "Q99001", quoteDate: "2023-10-08", customerName: "Grace Black", shippingLine: "HMM", loadPort: "Port O", dischargePort: "Port P" },
    { id: 9, quotationId: "Q22334", quoteDate: "2023-10-09", customerName: "Henry Wilson", shippingLine: "Yang Ming", loadPort: "Port Q", dischargePort: "Port R" },
    { id: 10, quotationId: "Q55667", quoteDate: "2023-10-10", customerName: "Ivy Taylor", shippingLine: "OOCL", loadPort: "Port S", dischargePort: "Port T" },
    { id: 11, quotationId: "Q88990", quoteDate: "2023-10-11", customerName: "Jack Harris", shippingLine: "NYK Line", loadPort: "Port U", dischargePort: "Port V" },
    { id: 12, quotationId: "Q33445", quoteDate: "2023-10-12", customerName: "Karen Lee", shippingLine: "K Line", loadPort: "Port W", dischargePort: "Port X" },
    { id: 13, quotationId: "Q66778", quoteDate: "2023-10-13", customerName: "Leo Clark", shippingLine: "CMA CGM", loadPort: "Port Y", dischargePort: "Port Z" },
    { id: 14, quotationId: "Q99112", quoteDate: "2023-10-14", customerName: "Mia Lewis", shippingLine: "APL", loadPort: "Port AA", dischargePort: "Port BB" },
    { id: 15, quotationId: "Q22334", quoteDate: "2023-10-15", customerName: "Noah Walker", shippingLine: "PIL", loadPort: "Port CC", dischargePort: "Port DD" },
    { id: 16, quotationId: "Q55667", quoteDate: "2023-10-16", customerName: "Olivia Hall", shippingLine: "Wan Hai", loadPort: "Port EE", dischargePort: "Port FF" },
    { id: 17, quotationId: "Q88990", quoteDate: "2023-10-17", customerName: "Peter Allen", shippingLine: "Hyundai Merchant Marine", loadPort: "Port GG", dischargePort: "Port HH" },
    { id: 18, quotationId: "Q11223", quoteDate: "2023-10-18", customerName: "Quinn Young", shippingLine: "SITC", loadPort: "Port II", dischargePort: "Port JJ" },
    { id: 19, quotationId: "Q44556", quoteDate: "2023-10-19", customerName: "Ryan King", shippingLine: "TS Lines", loadPort: "Port KK", dischargePort: "Port LL" },
    { id: 20, quotationId: "Q77889", quoteDate: "2023-10-20", customerName: "Sara Scott", shippingLine: "X-Press Feeders", loadPort: "Port MM", dischargePort: "Port NN" },
  ];

  const modalData = [
    { label: "Quotation ID", value: "Q12345" },
    { label: "Quote Date", value: "2023-10-01" },
    { label: "Customer Name", value: "John Doe" },
    { label: "Shipping Line", value: "Maersk" },
    { label: "Load Port", value: "Port A" },
    { label: "Discharge Port", value: "Port B" },
    { label: "Discharge Port", value: "Port B" },
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
          <h1 className="text-xl font-semibold border-l-pink-800 border-l-8 pl-2.5">Quote List</h1>
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

        <div className="overflow-hidden overflow-y-auto h-auto scroll-smooth scrollbar-thin scrollbar-thumb-blue-500 scrollbar-track-gray-200 custom-scrollbar">
          <table className="min-w-full border-collapse border border-gray-200">
            <thead>
              <tr className="bg-gray-100 border-b border-gray-200">
                <th className="px-4 py-2 text-left text-sm font-semibold text-gray-800">Quotation ID</th>
                <th className="px-4 py-2 text-left text-sm font-semibold text-gray-800">Quote Date</th>
                <th className="px-4 py-2 text-left text-sm font-semibold text-gray-800">Customer Name</th>
                <th className="px-4 py-2 text-left text-sm font-semibold text-gray-800">Shipping Line</th>
                <th className="px-4 py-2 text-left text-sm font-semibold text-gray-800">Load Port</th>
                <th className="px-4 py-2 text-left text-sm font-semibold text-gray-800">Discharge Port</th>
                <th className="px-4 py-2 text-left text-sm font-semibold text-gray-800">Action</th>
              </tr>
            </thead>
            <tbody>
              {dummyData.map((item) => (
                <tr key={item.id} className="hover:bg-gray-50 even:bg-gray-50">
                  <td className="px-4 py-2 text-sm text-gray-700 border-t border-gray-200">{item.quotationId}</td>
                  <td className="px-4 py-2 text-sm text-gray-700 border-t border-gray-200">{item.quoteDate}</td>
                  <td className="px-4 py-2 text-sm text-gray-700 border-t border-gray-200">{item.customerName}</td>
                  <td className="px-4 py-2 text-sm text-gray-700 border-t border-gray-200">{item.shippingLine}</td>
                  <td className="px-4 py-2 text-sm text-gray-700 border-t border-gray-200">{item.loadPort}</td>
                  <td className="px-4 py-2 text-sm text-gray-700 border-t border-gray-200">{item.dischargePort}</td>
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
        </div>

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
      </div>
    </Layout>
  );
}