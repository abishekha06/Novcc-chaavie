"use client";

import React, { useState } from 'react';
import InputField from "../../../components/input-field";
import Layout from "../../../components/layout";
import Progress from "../components/progress";
import ProgressButton from "../components/progress-buttons";
import { GoPlus } from "react-icons/go";
import { RiArrowGoBackFill } from "react-icons/ri";
import Modal from '../../../components/modal';
import { MdOutlineFileDownload } from 'react-icons/md';

const billoflading = () => {

  const descriptionData = [
    { label: "Total number of bags", placeholder: "Enter value" },
    { label: "Brand", placeholder: "Enter value" },
    { label: "Packing", placeholder: "Enter value" },
    { label: "Total", placeholder: "Enter value" },
    { label: "Invoice No", placeholder: "Enter value" },
    { label: "Invoice Date", placeholder: "Enter value" },
    { label: "SB No", placeholder: "Enter value" },
    { label: "Date", placeholder: "Enter value" },
    { label: "HSN CODE", placeholder: "Enter value" },
    { label: "Total Net Wt", placeholder: "Enter value" },
    { label: "Total Gross Wt", placeholder: "Enter value" },
  ];
  
  const data = [
    { fechExchangeRate: "Exchange Rate", addExchangeRate: "84.5" },
    { fechExchangeRate: "Date", addExchangeRate: "84.5" },
  ];

  const [rows, setRows] = useState([
    { id: 1, selected: false, containerNo: "", sizeType: "", sealNo: "", package: "", grossWeight: "", netWeight: "" },
    { id: 2, selected: false, containerNo: "", sizeType: "", sealNo: "", package: "", grossWeight: "", netWeight: "" },
    { id: 3, selected: false, containerNo: "", sizeType: "", sealNo: "", package: "", grossWeight: "", netWeight: "" },
  ]);

  const containerData = [
    {
      id: 1,
      selected: false,
      containerNo: "ABC123",
      sizeType: "20FT",
      sealNo: "XYZ456",
      package: "10",
      grossWeight: "2000",
      netWeight: "1800",
    },
    {
      id: 2,
      selected: true,
      containerNo: "DEF456",
      sizeType: "40FT",
      sealNo: "LMN789",
      package: "15",
      grossWeight: "4000",
      netWeight: "3800",
    },
    {
      id: 3,
      selected: false,
      containerNo: "GHI789",
      sizeType: "20FT",
      sealNo: "OPQ012",
      package: "20",
      grossWeight: "2500",
      netWeight: "2300",
    },
  ];

  const [isModalOpen, setIsModalOpen] = useState(false);

  const tableData = [
    {
      id: 1,
      billOfLading: "BL12345",
      date: "4/12/9439",
      loadPort: "Port A",
      dischargePort: "Port B",
      customerName: "Customer 1",
    },
    {
      id: 2,
      billOfLading: "BL67890",
      loadPort: "Port C",
      dischargePort: "Port D",
      customerName: "Customer 2",
    },
    {
      id: 3,
      billOfLading: "BL54321",
      loadPort: "Port E",
      dischargePort: "Port F",
      customerName: "Customer 3",
    },
  ];

  const [activePage, setActivePage] = useState('container');
  const [activePage2, setActivePage2] = useState('draft');
  const [activePage3, setActivePage3] = useState('pending');

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <Layout>
      <div className='flex flex-col p-6 border-1 border-gray-200 h-full bg-white rounded-2xl shadow-xl '>
       
       
        <div className='min-h-32 flex flex-col justify-between'>
          <Progress />
          <ProgressButton />
        </div>

        <div className='flex justify-end py-4 h-fit p-2'><button className='bg-blue-500 text-white text-xs py-2 px-4 rounded-md'>Print</button></div>

        <div className="flex-1 p-2 overflow-y-scroll custom-scrollbar2">

        <div className="relative p-[1px] rounded-lg bg-gradient-to-r from-pink-400 to-blue-400">
                      <div className="rounded-md bg-white p-2 pb-4">
                        <div className="">
                          <table className="min-w-full bg-white">
                            <thead>
                              <tr>
                                <th className="px-4 py-2 text-sm font-semibold text-gray-700 border-b border-gray-200">Sr No</th>
                                <th className="px-4 py-2 text-sm font-semibold text-gray-700 border-b border-gray-200">Select</th>
                                <th className="px-4 py-2 text-sm font-semibold text-gray-700 border-b border-gray-200">Container No</th>
                                <th className="px-4 py-2 text-sm font-semibold text-gray-700 border-b border-gray-200">Size/Type</th>
                                <th className="px-4 py-2 text-sm font-semibold text-gray-700 border-b border-gray-200">Seal No</th>
                                <th className="px-4 py-2 text-sm font-semibold text-gray-700 border-b border-gray-200">Package</th>
                                <th className="px-4 py-2 text-sm font-semibold text-gray-700 border-b border-gray-200">Gross Weight (KGS)</th>
                                <th className="px-4 py-2 text-sm font-semibold text-gray-700 border-b border-gray-200">Net Weight (KGS)</th>
                              </tr>
                            </thead>
                            <tbody>
                              {rows.map((row, index) => (
                                <tr key={row.id} className="hover:bg-gray-50">
                                  <td className="px-4 text-sm text-gray-700 border-b border-gray-200 text-center">{index + 1}</td>
                                  <td className="px-4 text-sm text-gray-700 border-b border-gray-200 text-center">
                                    <input
                                      type="checkbox"
                                      className="form-checkbox h-4 w-4 text-blue-600"
                                      checked={row.selected}
                                      onChange={(e) => {
                                        const updatedRows = rows.map((r) =>
                                          r.id === row.id ? { ...r, selected: e.target.checked } : r
                                        );
                                        setRows(updatedRows);
                                      }}
                                    />
                                  </td>
                                  <td className="px-4 text-sm text-gray-700 border-b border-gray-200 text-center">
                                    <input
                                      type="text"
                                      className="w-full px-2 py-2 border border-white focus:outline-none focus:ring-2 focus:ring-blue-500 text-center"
                                      placeholder="Type Here"
                                      value={row.containerNo}
                                      onChange={(e) => {
                                        const updatedRows = rows.map((r) =>
                                          r.id === row.id ? { ...r, containerNo: e.target.value } : r
                                        );
                                        setRows(updatedRows);
                                      }}
                                    />
                                  </td>
                                  <td className="px-4 text-sm text-gray-700 border-b border-gray-200 text-center">
                                    <input
                                      type="text"
                                      className="w-full px-2 py-2 border border-white focus:outline-none focus:ring-2 focus:ring-blue-500 text-center"
                                      placeholder="Type Here"
                                      value={row.sizeType}
                                      onChange={(e) => {
                                        const updatedRows = rows.map((r) =>
                                          r.id === row.id ? { ...r, sizeType: e.target.value } : r
                                        );
                                        setRows(updatedRows);
                                      }}
                                    />
                                  </td>
                                  <td className="px-4 text-sm text-gray-700 border-b border-gray-200 text-center">
                                    <input
                                      type="text"
                                      className="w-full px-2 py-2 border border-white focus:outline-none focus:ring-2 focus:ring-blue-500 text-center"
                                      placeholder="Type Here"
                                      value={row.sealNo}
                                      onChange={(e) => {
                                        const updatedRows = rows.map((r) =>
                                          r.id === row.id ? { ...r, sealNo: e.target.value } : r
                                        );
                                        setRows(updatedRows);
                                      }}
                                    />
                                  </td>
                                  <td className="px-4 text-sm text-gray-700 border-b border-gray-200 text-center">
                                    <input
                                      type="text"
                                      className="w-full px-2 py-2 border border-white focus:outline-none focus:ring-2 focus:ring-blue-500 text-center"
                                      placeholder="Type Here"
                                      value={row.package}
                                      onChange={(e) => {
                                        const updatedRows = rows.map((r) =>
                                          r.id === row.id ? { ...r, package: e.target.value } : r
                                        );
                                        setRows(updatedRows);
                                      }}
                                    />
                                  </td>
                                  <td className="px-4 text-sm text-gray-700 border-b border-gray-200 text-center">
                                    <input
                                      type="number"
                                      className="w-full px-2 py-2 border border-white focus:outline-none focus:ring-2 focus:ring-blue-500 text-center"
                                      placeholder="Type Here"
                                      value={row.grossWeight}
                                      onChange={(e) => {
                                        const updatedRows = rows.map((r) =>
                                          r.id === row.id ? { ...r, grossWeight: e.target.value } : r
                                        );
                                        setRows(updatedRows);
                                      }}
                                    />
                                  </td>
                                  <td className="px-4 text-sm text-gray-700 border-b border-gray-200 text-center">
                                    <input
                                      type="number"
                                      className="w-full px-2 py-2 border border-white focus:outline-none focus:ring-2 focus:ring-blue-500 text-center"
                                      placeholder="Type Here"
                                      value={row.netWeight}
                                      onChange={(e) => {
                                        const updatedRows = rows.map((r) =>
                                          r.id === row.id ? { ...r, netWeight: e.target.value } : r
                                        );
                                        setRows(updatedRows);
                                      }}
                                    />
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </div>
        </div>

 <div className='flex justify-end py-4 h-fit'><button className='bg-blue-500 text-white text-xs py-2 px-4 rounded-md'>Generate BL</button></div>


 <div class="flex gap-2">
   
    <button class="w-40 h-12 text-white bg-blue-500  font-semibold text-center inline-block relative -skew-x-12 transition-all duration-300 cursor-pointer  hover:opacity-90 hover:scale-105">
      <span class="skew-x-12 block leading-[3rem]">BL 1</span>
    </button>
    
   
    <button class="w-40 h-12 text-gray-700 bg-gray-200  font-semibold text-center inline-block relative -skew-x-12 transition-all duration-300 cursor-pointer  hover:opacity-90 hover:scale-105">
      <span class="skew-x-12 block leading-[3rem]">BL 2</span>
    </button>
  </div>

  <div className='flex justify-between'>

  <div class="flex gap-2 mt-4">
   
   <button class="w-24 h-6 text-xs text-white bg-blue-500  font-medium text-center inline-block relative -skew-x-12 transition-all duration-300 cursor-pointer  hover:opacity-90 hover:scale-105">
     <span class="skew-x-12 block leading-[1.5rem]">Draft</span>
   </button>
   
  
   <button class="w-24 h-6 text-xs text-gray-700 bg-gray-200  font-medium text-center inline-block relative -skew-x-12 transition-all duration-300 cursor-pointer  hover:opacity-90 hover:scale-105">
     <span class="skew-x-12 block leading-[1.5rem]">Final</span>
   </button>
 </div>

 <div>
 <button className='bg-blue-500 text-white text-xs py-2 px-4 rounded-md'>Uploading Shipping Bill</button>
 </div>


 </div> 

       
            <div className="">
              <div className="">
                <InputField label="Customer Name" id="customerName" placeholder="Lorem" />
              </div>

              <div className="grid grid-cols-2 mt-4 gap-12">
                <div>
                  <InputField label="CRO Number" id="croNumber" placeholder="Lorem" />
                  <InputField label="Validity" id="validity" placeholder="Lorem" />
                  <InputField label="Discharge Port" id="dischargePort" placeholder="Lorem" />
                </div>

                <div>
                  <InputField label="Validity" id="validity2" placeholder="Lorem" />
                  <InputField label="Cargo Type" id="cargoType" placeholder="Lorem" />
                </div>
              </div>

              <div className="mt-7">
                <div className="flex mb-6 gap-0.5">
                  <button
                    className={`px-6 h-8 text-xs transition-all duration-200 cursor-pointer w-48  rounded-s-full ${
                      activePage === 'container'
                        ? 'bg-blue-500 text-white hover:bg-blue-600'
                        : 'bg-gray-200 text-gray-800 hover:bg-blue-200'
                    }`}
                    onClick={() => setActivePage('container')}
                  >
                    Container Details
                  </button>
                  <button
                    className={`px-6 h-8 text-xs transition-all duration-200 cursor-pointer w-48 ${
                      activePage === 'cargo'
                        ? 'bg-blue-500 text-white hover:bg-blue-600'
                        : 'bg-gray-200 text-gray-800 hover:bg-blue-200'
                    }`}
                    onClick={() => setActivePage('cargo')}
                  >
                    Cargo Details
                  </button>
                  <button
                    className={`px-6 h-8 text-xs transition-all duration-200 cursor-pointer w-48 rounded-e-full ${
                      activePage === 'billOfLading'
                        ? 'bg-blue-500 text-white hover:bg-blue-600'
                        : 'bg-gray-200 text-gray-800 hover:bg-blue-200'
                    }`}
                    onClick={() => setActivePage('billOfLading')}
                  >
                    Bill of Lading Details
                  </button>
                </div>

                {activePage === 'container' && (
                  <div>
                    <div className="relative p-[1px] rounded-lg mt-6 bg-gradient-to-r from-pink-400 to-blue-400">
                      <div className="rounded-md bg-white p-2 pb-4">
                        <div className="">
                          <table className="min-w-full bg-white">
                            <thead>
                              <tr>
                                <th className="px-4 py-2 text-sm font-semibold text-gray-700 border-b border-gray-200">Sr No</th>
                                <th className="px-4 py-2 text-sm font-semibold text-gray-700 border-b border-gray-200">Container No</th>
                                <th className="px-4 py-2 text-sm font-semibold text-gray-700 border-b border-gray-200">Size/Type</th>
                                <th className="px-4 py-2 text-sm font-semibold text-gray-700 border-b border-gray-200">Seal No</th>
                                <th className="px-4 py-2 text-sm font-semibold text-gray-700 border-b border-gray-200">Package</th>
                                <th className="px-4 py-2 text-sm font-semibold text-gray-700 border-b border-gray-200">Gross Weight (KGS)</th>
                                <th className="px-4 py-2 text-sm font-semibold text-gray-700 border-b border-gray-200">Net Weight (KGS)</th>
                                <th className="px-4 py-2 text-sm font-semibold text-gray-700 border-b border-gray-200">Action</th>
                              </tr>
                            </thead>
                            <tbody>
                              {rows.map((row, index) => (
                                <tr key={row.id} className="hover:bg-gray-50">
                                  <td className="px-4 text-sm text-gray-700 border-b border-gray-200 text-center">{index + 1}</td>
                                  <td className="px-4 text-sm text-gray-700 border-b border-gray-200 text-center">
                                    <input
                                      type="text"
                                      className="w-full px-2 py-2 border border-white focus:outline-none focus:ring-2 focus:ring-blue-500 text-center"
                                      placeholder="Type Here"
                                      value={row.containerNo}
                                      onChange={(e) => {
                                        const updatedRows = rows.map((r) =>
                                          r.id === row.id ? { ...r, containerNo: e.target.value } : r
                                        );
                                        setRows(updatedRows);
                                      }}
                                    />
                                  </td>
                                  <td className="px-4 text-sm text-gray-700 border-b border-gray-200 text-center">
                                    <input
                                      type="text"
                                      className="w-full px-2 py-2 border border-white focus:outline-none focus:ring-2 focus:ring-blue-500 text-center"
                                      placeholder="Type Here"
                                      value={row.sizeType}
                                      onChange={(e) => {
                                        const updatedRows = rows.map((r) =>
                                          r.id === row.id ? { ...r, sizeType: e.target.value } : r
                                        );
                                        setRows(updatedRows);
                                      }}
                                    />
                                  </td>
                                  <td className="px-4 text-sm text-gray-700 border-b border-gray-200 text-center">
                                    <input
                                      type="text"
                                      className="w-full px-2 py-2 border border-white focus:outline-none focus:ring-2 focus:ring-blue-500 text-center"
                                      placeholder="Type Here"
                                      value={row.sealNo}
                                      onChange={(e) => {
                                        const updatedRows = rows.map((r) =>
                                          r.id === row.id ? { ...r, sealNo: e.target.value } : r
                                        );
                                        setRows(updatedRows);
                                      }}
                                    />
                                  </td>
                                  <td className="px-4 text-sm text-gray-700 border-b border-gray-200 text-center">
                                    <input
                                      type="text"
                                      className="w-full px-2 py-2 border border-white focus:outline-none focus:ring-2 focus:ring-blue-500 text-center"
                                      placeholder="Type Here"
                                      value={row.package}
                                      onChange={(e) => {
                                        const updatedRows = rows.map((r) =>
                                          r.id === row.id ? { ...r, package: e.target.value } : r
                                        );
                                        setRows(updatedRows);
                                      }}
                                    />
                                  </td>
                                  <td className="px-4 text-sm text-gray-700 border-b border-gray-200 text-center">
                                    <input
                                      type="number"
                                      className="w-full px-2 py-2 border border-white focus:outline-none focus:ring-2 focus:ring-blue-500 text-center"
                                      placeholder="Type Here"
                                      value={row.grossWeight}
                                      onChange={(e) => {
                                        const updatedRows = rows.map((r) =>
                                          r.id === row.id ? { ...r, grossWeight: e.target.value } : r
                                        );
                                        setRows(updatedRows);
                                      }}
                                    />
                                  </td>
                                  <td className="px-4 text-sm text-gray-700 border-b border-gray-200 text-center h-12">
                                    <input
                                      type="number"
                                      className="w-full px-2 py-2 border border-white focus:outline-none focus:ring-2 focus:ring-blue-500 text-center"
                                      placeholder="Type Here"
                                      value={row.netWeight}
                                      onChange={(e) => {
                                        const updatedRows = rows.map((r) =>
                                          r.id === row.id ? { ...r, netWeight: e.target.value } : r
                                        );
                                        setRows(updatedRows);
                                      }}
                                    />
                                  </td>

                                  <td className="px-4 text-sm text-gray-700 border-b border-gray-200 text-center flex gap-2 h-12 items-center justify-center">
                                         <button  className='bg-blue-300 text-blue-700 rounded-md h-8 px-4 text-xs hover:opacity-85 cursor-pointer'>Edit</button>
                                         <button  className='bg-red-200 text-red-700 rounded-md h-8 px-4 text-xs hover:opacity-85 cursor-pointer'>Delete</button>
                                  </td>

                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {activePage === 'cargo' && (
                  <div>
    <div className="mt-7">
      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr>
            <th className="px-4 py-2 text-sm font-semibold text-gray-700 border-b border-gray-200">Description of Goods</th>
            <th className="px-4 py-2 text-sm font-semibold text-gray-700 border-b border-gray-200">Other Details</th>
          </tr>
        </thead>
        <tbody>
          {/* Map through the data to generate rows */}
          {descriptionData.map((item, index) => (
            <tr key={index} className="hover:bg-gray-50">
              <td className="text-sm text-gray-700 border border-gray-300">
                <div className="grid grid-cols-2 gap-4 items-center">
                  <div className="text-right">{item.label}</div>
                  <div>
                    <input
                      type="text"
                      className="w-full px-2 h-12 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder={item.placeholder}
                    />
                  </div>
                </div>
              </td>
              {/* Render the textarea only for the first row */}
              {index === 0 && (
                <td className="text-sm text-gray-700 border border-gray-300" rowSpan={descriptionData.length}>
                  <textarea
                    className="w-full p-2 h-[33rem] border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter other details"
                  />
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
                  </div>
                )}

                {activePage === 'billOfLading' && (
                  <div>


<div>
  <table className="w-full border-collapse">
    <colgroup>
      <col className="w-1/3" />
      <col className="w-1/3" />
      <col className="w-1/3" />
    </colgroup>
    
    <thead>
      <tr className="bg-gray-100">
        <th className="border border-gray-300 p-2 text-left font-semibold text-base">Shipper</th>
        <th className="border border-gray-300 p-2 text-left font-semibold text-base">Consignee</th>
        <th className="border border-gray-300 p-2 text-left font-semibold text-base">Notify</th>
      </tr>
    </thead>
    
    <tbody>
      <tr>
        <td className="border border-gray-300 p-0">
          <textarea
            placeholder="Type here"
            className="w-full p-2 border-0 h-48 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none"
          />
        </td>
        <td className="border border-gray-300 p-0">
          <textarea
            placeholder="Type here"
            className="w-full p-2 border-0 h-48 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none"
          />
        </td>
        <td className="border border-gray-300 p-0">
          <textarea
            placeholder="Type here"
            className="w-full p-2 border-0 h-48 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none"
          />
        </td>
      </tr>

      <tr>
        <td className="border border-gray-300 p-2">
          <div className="font-medium">Marks</div>
        </td>
        <td className="border border-gray-300 p-2"></td>
        <td className="border border-gray-300 p-2">
          <table className="w-full">
            <tr>
              <td className="text-center">Gross Weight</td>
              <td className="text-center">Net Weight</td>
            </tr>
          </table>
        </td>
      </tr>

      <tr>
        <td className="border border-gray-300 p-0 h-36"></td>
        <td className="border border-gray-300 p-0 h-36">
          <table className="w-full h-full">
            <tr className="h-1/3">
              <td className=" p-2">Freight Terms</td>
              <td className="border-l border-gray-300 p-0">
                <input 
                  type="text" 
                  className="w-full h-full p-2 border-0 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" 
                />
              </td>
            </tr>
            <tr className="h-1/3">
              <td className="border-t border-gray-300 p-2">Free Days</td>
              <td className="border-t border-l  border-gray-300 p-0">
                <input 
                  type="text" 
                  className="w-full h-full p-2 border-0 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" 
                />
              </td>
            </tr>
            <tr className="h-1/3">
              <td colSpan={2} className="border-t border-gray-300"></td>
            </tr>
          </table>
        </td>
        <td className="border border-gray-300 p-0 h-36">
          <table className="w-full h-full">
            <tr className="h-1/3">
              <td className="border-b border-gray-300 p-0">
                <input 
                  type="text" 
                  className="w-full h-full p-2 border-0 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-center" 
                />
              </td>
              <td className="border-b border-l border-gray-300 p-0">
                <input 
                  type="text" 
                  className="w-full h-full p-2 border-0 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-center" 
                />
              </td>
            </tr>
            <tr className="h-1/3">
              <td className="border-b border-gray-300 p-0">
                <input 
                  type="text" 
                  className="w-full h-full p-2 border-0 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-center" 
                />
              </td>
              <td className="border-b border-l border-gray-300 p-0">
                <input 
                  type="text" 
                  className="w-full h-full p-2 border-0 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-center" 
                />
              </td>
            </tr>
            <tr className="h-1/3">
              <td className="p-2 text-center">Total Packages</td>
              <td className="border-l border-gray-300 p-0">
                <input 
                  type="text" 
                  className="w-full h-full p-2 border-0 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-center" 
                />
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </tbody>
  </table>
</div>








                    
                  </div>
                )}
              </div>

             <div className="flex justify-between mt-4">
             
             <div className='flex gap-2'>
             
               <button className='text-xs px-6 h-8 rounded-md text-white bg-blue-500 hover:bg-blue-600  transition-all duration-200 cursor-pointer flex items-center justify-center gap-2'>Draft BL <MdOutlineFileDownload /></button>
              
             
             </div>
             
             <div>
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


      </div>
    </Layout>
  );
};

export default billoflading;