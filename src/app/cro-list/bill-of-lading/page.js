"use client";

import React, { useState } from 'react';
import InputField from "../../../components/input-field";
import Layout from "../../../components/layout";
import Progress from "../../cro-list/components/progress";
import ProgressButton from "../../cro-list/components/progress-buttons";
import { GoPlus } from "react-icons/go";
import { RiArrowGoBackFill } from "react-icons/ri";
import Modal from '../../../components/modal';

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
        <div className='h-32 flex flex-col justify-between'>
          <Progress />
          <ProgressButton />
        </div>

        <div className="h-full p-2 overflow-y-scroll custom-scrollbar pt-6">
          <div className="flex justify-end mt-4">
            <button
              className={`px-6 h-8 text-xs ml-3 rounded-es-lg rounded-se-lg transition-all duration-200 cursor-pointer w-24 ${
                activePage2 === 'draft'
                  ? 'bg-blue-500 text-white hover:bg-blue-600'
                  : 'bg-gray-200 text-gray-800 hover:bg-blue-200'
              }`}
              onClick={() => setActivePage2('draft')}
            >
              Draft
            </button>
            <button
              className={`px-6 h-8 text-xs ml-3 rounded-es-lg rounded-se-lg transition-all duration-200 cursor-pointer w-24 ${
                activePage2 === 'final'
                  ? 'bg-blue-500 text-white hover:bg-blue-600'
                  : 'bg-gray-200 text-gray-800 hover:bg-blue-200'
              }`}
              onClick={() => setActivePage2('final')}
            >
              Final
            </button>
            <button
              className={`px-6 h-8 text-xs ml-3 rounded-es-lg rounded-se-lg transition-all duration-200 cursor-pointer w-24 ${
                activePage2 === 'print'
                  ? 'bg-blue-500 text-white hover:bg-blue-600'
                  : 'bg-gray-200 text-gray-800 hover:bg-blue-200'
              }`}
              onClick={() => setActivePage2('print')}
            >
              Print
            </button>
          </div>

          {activePage2 === 'draft' && (
            <div className="mt-4">
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
                    className={`px-6 h-8 text-xs transition-all duration-200 cursor-pointer w-48 ${
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
                    className={`px-6 h-8 text-xs transition-all duration-200 cursor-pointer w-48 ${
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
                    <h2>Bill of Lading Details Page</h2>
                  </div>
                )}
              </div>

              <div className="flex justify-end mt-4">
                <button className="bg-blue-500 text-white px-6 h-8 text-xs ml-3 rounded-es-lg rounded-se-lg hover:bg-blue-600 transition-all duration-200 cursor-pointer w-24">
                  Save
                </button>
                <button className="bg-white border-2 border-gray-300 text-gray-900 hover:bg-gray-100 hover:border-gray-400 px-6 h-8 text-xs ml-3 rounded-es-lg rounded-se-lg  transition-all duration-200 cursor-pointer w-24">
                  Submit
                </button>
              </div>
            </div>
          )}

          {activePage2 === 'final' && (
            <div className="mt-4">
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
                    className={`px-6 h-8 text-xs transition-all duration-200 cursor-pointer w-48 ${
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
                    className={`px-6 h-8 text-xs transition-all duration-200 cursor-pointer w-48 ${
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
                              {containerData.map((item, index) => (
                                <tr key={item.id} className="hover:bg-gray-50">
                                  <td className="px-4 text-sm text-gray-700 border-b border-gray-200 text-center">{index + 1}</td>
                                  <td className="px-4 text-sm text-gray-700 border-b border-gray-200 text-center">
                                    <input
                                      type="checkbox"
                                      className="form-checkbox h-4 w-4 text-blue-600"
                                      defaultChecked={item.selected}
                                    />
                                  </td>
                                  <td className="px-4 text-sm text-gray-700 border-b border-gray-200 text-center">
                                    <input
                                      type="text"
                                      className="w-full px-2 py-2 border border-white focus:outline-none focus:ring-2 focus:ring-blue-500 text-center"
                                      defaultValue={item.containerNo}
                                    />
                                  </td>
                                  <td className="px-4 text-sm text-gray-700 border-b border-gray-200 text-center">
                                    <input
                                      type="text"
                                      className="w-full px-2 py-2 border border-white focus:outline-none focus:ring-2 focus:ring-blue-500 text-center"
                                      defaultValue={item.sizeType}
                                    />
                                  </td>
                                  <td className="px-4 text-sm text-gray-700 border-b border-gray-200 text-center">
                                    <input
                                      type="text"
                                      className="w-full px-2 py-2 border border-white focus:outline-none focus:ring-2 focus:ring-blue-500 text-center"
                                      defaultValue={item.sealNo}
                                    />
                                  </td>
                                  <td className="px-4 text-sm text-gray-700 border-b border-gray-200 text-center">
                                    <input
                                      type="text"
                                      className="w-full px-2 py-2 border border-white focus:outline-none focus:ring-2 focus:ring-blue-500 text-center"
                                      defaultValue={item.package}
                                    />
                                  </td>
                                  <td className="px-4 text-sm text-gray-700 border-b border-gray-200 text-center">
                                    <input
                                      type="number"
                                      className="w-full px-2 py-2 border border-white focus:outline-none focus:ring-2 focus:ring-blue-500 text-center"
                                      defaultValue={item.grossWeight}
                                    />
                                  </td>
                                  <td className="px-4 text-sm text-gray-700 border-b border-gray-200 text-center">
                                    <input
                                      type="number"
                                      className="w-full px-2 py-2 border border-white focus:outline-none focus:ring-2 focus:ring-blue-500 text-center"
                                      defaultValue={item.netWeight}
                                    />
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
                    <h2>Cargo Details Page</h2>
                  </div>
                )}

                {activePage === 'billOfLading' && (
                  <div>
                    <h2>Bill of Lading Details Page</h2>
                  </div>
                )}
              </div>

              <div className="flex justify-end mt-4">
                <button className="bg-blue-500 text-white px-6 h-8 text-xs ml-3 rounded-es-lg rounded-se-lg hover:bg-blue-600 transition-all duration-200 cursor-pointer w-24">
                  Save
                </button>
                <button className="bg-white border-2 border-gray-300 text-gray-900 hover:bg-gray-100 hover:border-gray-400 px-6 h-8 text-xs ml-3 rounded-es-lg rounded-se-lg  transition-all duration-200 cursor-pointer w-24">
                  Submit
                </button>
              </div>
            </div>
          )}

          {activePage2 === 'print' && (
            <div>
              <div className="flex mb-6">
                <button
                  className={`px-6 h-8 text-xs transition-all duration-200 cursor-pointer w-40 ${
                    activePage3 === 'pending'
                      ? 'bg-blue-500 text-white hover:bg-blue-600'
                      : 'bg-gray-200 text-gray-800 hover:bg-blue-200'
                  }`}
                  onClick={() => setActivePage3('pending')}
                >
                  Pending to Print
                </button>
                <button
                  className={`px-6 h-8 text-xs transition-all duration-200 cursor-pointer w-40 ${
                    activePage3 === 'printed'
                      ? 'bg-blue-500 text-white hover:bg-blue-600'
                      : 'bg-gray-200 text-gray-800 hover:bg-blue-200'
                  }`}
                  onClick={() => setActivePage3('printed')}
                >
                  Printed
                </button>
              </div>

              {activePage3 === 'pending' && (
                <div className="mt-7">
                  <table className="min-w-full bg-white border border-gray-200">
                    <thead>
                      <tr>
                        <th className="px-4 py-2 text-sm font-semibold text-gray-700 border-b border-gray-200">Bill of Lading</th>
                        <th className="px-4 py-2 text-sm font-semibold text-gray-700 border-b border-gray-200">Load Port</th>
                        <th className="px-4 py-2 text-sm font-semibold text-gray-700 border-b border-gray-200">Discharge Port</th>
                        <th className="px-4 py-2 text-sm font-semibold text-gray-700 border-b border-gray-200">Customer Name</th>
                      </tr>
                    </thead>
                    <tbody>
                      {tableData.map((row) => (
                        <tr key={row.id} className="hover:bg-gray-50">
                          <td className="px-4 py-2 text-sm text-gray-700 border-b border-gray-200 text-center">
                            <button
                              className="text-blue-500 hover:text-blue-700 focus:outline-none"
                              onClick={() => setIsModalOpen(true)}
                            >
                              {row.billOfLading}
                            </button>
                          </td>
                          <td className="px-4 py-2 text-sm text-gray-700 border-b border-gray-200 text-center">
                            {row.loadPort}
                          </td>
                          <td className="px-4 py-2 text-sm text-gray-700 border-b border-gray-200 text-center">
                            {row.dischargePort}
                          </td>
                          <td className="px-4 py-2 text-sm text-gray-700 border-b border-gray-200 text-center">
                            {row.customerName}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>

<Modal isOpen={isModalOpen} onClose={closeModal}>

<div className='h-full w-full relative'>
<div className='absolute inset-0 flex justify-center pt-10 '>

<div className='flex pr-4'>
      <button onClick={closeModal} className='bg-white h-10 w-10 rounded-full cursor-pointer flex items-center justify-center'>
        <RiArrowGoBackFill />
      </button>
    </div>

  <div className='h-[90%] w-[30rem]  bg-white overflow-hidden '>
     <div className='h-full flex items-center justify-center'>
      <img
        src="https://images.unsplash.com/photo-1531973576160-7125cd663d86?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
        alt="Bill of Lading"
        className='max-w-full max-h-full'
      />
    </div>


  </div>
</div>
</div>

</Modal>

              
                </div>
              )}

              {activePage3 === 'printed' && (
                <div className="mt-7">
                  <table className="min-w-full bg-white border border-gray-200">
                    <thead>
                      <tr>
                        <th className="px-4 py-2 text-sm font-semibold text-gray-700 border-b border-gray-200">Bill of Lading</th>
                        <th className="px-4 py-2 text-sm font-semibold text-gray-700 border-b border-gray-200">Date</th>
                        <th className="px-4 py-2 text-sm font-semibold text-gray-700 border-b border-gray-200">Load Port</th>
                        <th className="px-4 py-2 text-sm font-semibold text-gray-700 border-b border-gray-200">Discharge Port</th>
                        <th className="px-4 py-2 text-sm font-semibold text-gray-700 border-b border-gray-200">Customer Name</th>
                      </tr>
                    </thead>
                    <tbody>
                      {tableData.map((row) => (
                        <tr key={row.id} className="hover:bg-gray-50">
                          <td className="px-4 py-2 text-sm text-gray-700 border-b border-gray-200 text-center">
                            <button
                              className="text-blue-500 hover:text-blue-700 focus:outline-none"
                              onClick={() => setIsModalOpen(true)}
                            >
                              {row.billOfLading}
                            </button>
                          </td>
                          <td className="px-4 py-2 text-sm text-gray-700 border-b border-gray-200 text-center">
                            {row.date}
                          </td>
                          <td className="px-4 py-2 text-sm text-gray-700 border-b border-gray-200 text-center">
                            {row.loadPort}
                          </td>
                          <td className="px-4 py-2 text-sm text-gray-700 border-b border-gray-200 text-center">
                            {row.dischargePort}
                          </td>
                          <td className="px-4 py-2 text-sm text-gray-700 border-b border-gray-200 text-center">
                            {row.customerName}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>

                  <Modal isOpen={isModalOpen} onClose={closeModal}>

<div className='h-full w-full relative'>
<div className='absolute inset-0 flex justify-center pt-10 '>

<div className='flex pr-4'>
      <button onClick={closeModal} className='bg-white h-10 w-10 rounded-full cursor-pointer flex items-center justify-center'>
        <RiArrowGoBackFill />
      </button>
    </div>

  <div className='h-[90%] w-[30rem]  bg-white overflow-hidden '>
     <div className='h-full flex items-center justify-center'>
      <img
        src="https://images.unsplash.com/photo-1531973576160-7125cd663d86?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
        alt="Bill of Lading"
        className='max-w-full max-h-full'
      />
    </div>


  </div>
</div>
</div>

</Modal>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default billoflading;