"use client";

import React, { useState } from 'react';
import InputField from "../../../components/input-field";
import Layout from "../../../components/layout";
import Progress from "../components/progress";
import ProgressButton from "../components/progress-buttons";
import { GoPlus } from "react-icons/go";
import { MdOutlineFileDownload } from "react-icons/md";




const exportinvoice = () => {
  const data = [
    { fechExchangeRate: "Currency", addExchangeRate: "84.5" },
    { fechExchangeRate: "Exchange Rate", addExchangeRate: "84.5" },
    { fechExchangeRate: "Date", addExchangeRate: "84.5" },
  ];

  const tableData = [
    { id: 1, chargeHead: "Material Cost", quantity: 10, rate: 1000, amount: 10000 },
    { id: 2, chargeHead: "Labor Cost", quantity: 5, rate: 500, amount: 2500 },
    { id: 3, chargeHead: "Labor Cost", quantity: 5, rate: 500, amount: 2500 },
  ];

  const [activePage, setActivePage] = useState('proforma');

  return (
    <Layout>
      <div className='flex flex-col p-6 border-1 border-gray-200 h-full bg-white rounded-2xl shadow-xl '>
        <div className='min-h-32 flex flex-col justify-between'>
          <Progress/>
          <ProgressButton />
        </div>

        <div className="flex justify-end pb-2 pt-4">
        <button
          className={`px-6 h-8 text-xs ml-3 rounded-es-lg rounded-se-lg transition-all duration-200 cursor-pointer w-40 ${
            activePage === 'proforma'
              ? 'bg-blue-500 text-white hover:bg-blue-600'
              : 'bg-gray-200 text-gray-800 hover:bg-blue-200'
          }`}
          onClick={() => setActivePage('proforma')}
        >
          Proforma Invoice
        </button>
        <button
          className={`px-6 h-8 text-xs ml-3 rounded-es-lg rounded-se-lg transition-all duration-200 cursor-pointer w-40 ${
            activePage === 'final'
              ? 'bg-blue-500 text-white hover:bg-blue-600'
              : 'bg-gray-200 text-gray-800 hover:bg-blue-200'
          }`}
          onClick={() => setActivePage('final')}
        >
          Final Invoice
        </button>
        <button
          className={`px-6 h-8 text-xs ml-3 rounded-es-lg rounded-se-lg transition-all duration-200 cursor-pointer w-40 ${
            activePage === 'final'
              ? 'bg-blue-500 text-white hover:bg-blue-600'
              : 'bg-gray-200 text-gray-800 hover:bg-blue-200'
          }`}
          onClick={() => setActivePage('final')}
        >
          Additional Invoice
        </button>
      </div>

        <div className="h-full p-2 overflow-y-scroll custom-scrollbar">




      {activePage === 'proforma' && (
        <div className="">

          <div className="">
            <InputField label="Customer Name" id="customerName" placeholder="Lorem" />
          </div>

          <div className="grid grid-cols-2 mt-4 gap-12">
            <div>
              <InputField label="Bill of Lading" id="croNumber" placeholder="Lorem" />
              <InputField label="Dated" id="validity" placeholder="Lorem" />
            </div>

            <div>
              <InputField label="Load Port" id="validity2" placeholder="Lorem" />
              <InputField label="Discharge Port" id="cargoType" placeholder="Lorem" />
            </div>
          </div>

          <div className="relative p-[1px] rounded-lg mt-6 bg-gradient-to-r from-pink-400 to-blue-400">
          <div className="bg-white rounded-lg p-6 pt-3">
  <table className="w-full border-collapse">
    <thead>
      <tr>
        <th className="w-1/2 p-3 border-b border-gray-200 text-left text-xs font-semibold">Fech Exchange Rate</th>
        <th className="w-1/2 p-3 border-b border-gray-200 text-center text-xs font-semibold">Add Exchange Rate</th>
      </tr>
    </thead>
    <tbody>
      {data.map((row, index) => (
        <tr key={index} className="hover:bg-gray-50">
          <td className="w-1/2 p-3 border-b border-gray-200 text-left text-xs">{row.fechExchangeRate}</td>
          <td className="w-1/2 px-4 text-sm text-gray-700 border-b border-gray-200 text-center">
            <input
              type="text"
              className="w-full px-2 py-2 border border-white focus:outline-none focus:ring-2 focus:ring-blue-500 text-center"
              placeholder="Type here"
            />
          </td>
        </tr>
      ))}
    </tbody>
  </table>
</div>
          </div>

          <div className="flex justify-end mt-4">
            <button className="bg-blue-500 text-white px-4 h-8 text-xs ml-3 rounded-md hover:bg-blue-600 transition-all duration-200 cursor-pointer flex justify-center items-center gap-3">
              <GoPlus /> Add New
            </button>
          </div>

          <div className="relative p-[1px] rounded-lg mt-6 bg-gradient-to-r from-pink-400 to-blue-400">
  <div className="rounded-md bg-white p-2  pb-4">
  <div className="">
  <table className="min-w-full bg-white">
    <thead>
      <tr>
        <th className="px-4 py-2 text-sm font-semibold text-gray-700 border-b border-gray-200">SrNo</th>
        <th className="px-4 py-2 text-sm font-semibold text-gray-700 border-b border-gray-200">Charge Head</th>
        <th className="px-4 py-2 text-sm font-semibold text-gray-700 border-b border-gray-200">Quantity</th>
        <th className="px-4 py-2 text-sm font-semibold text-gray-700 border-b border-gray-200">Rate</th>
        <th className="px-4 py-2 text-sm font-semibold text-gray-700 border-b border-gray-200">Amount</th>
        <th className="px-4 py-2 text-sm font-semibold text-gray-700 border-b border-gray-200">Action</th>
      </tr>
    </thead>
    <tbody>
      {tableData.map((item, index) => (
        <tr key={item.id} className="hover:bg-gray-50">
          <td className="px-4 text-sm text-gray-700 border-b border-gray-200 text-center">{index + 1}</td>
          <td className="px-4 text-sm text-gray-700 border-b border-gray-200 text-center">
            <input
              type="text"
              className="w-full px-2 py-2 border border-white focus:outline-none focus:ring-2 focus:ring-blue-500 text-center"
              placeholder="Type here"
            />
          </td>
          <td className="px-4 text-sm text-gray-700 border-b border-gray-200 text-center">
            <input
              type="number"
              className="w-full px-2 py-2 border border-white focus:outline-none focus:ring-2 focus:ring-blue-500 text-center"
              placeholder="Type here"
            />
          </td>
          <td className="px-4 text-sm text-gray-700 border-b border-gray-200 text-center">
            <input
              type="number"
              className="w-full px-2 py-2 border border-white focus:outline-none focus:ring-2 focus:ring-blue-500 text-center"
              placeholder="Type here"
            />
          </td>
          <td className="px-4 text-sm text-gray-700 border-b border-gray-200 text-center">
            <input
              type="number"
              className="w-full px-2 py-2 border border-white focus:outline-none focus:ring-2 focus:ring-blue-500 text-center"
              placeholder="Type here"
            />
          </td>
          <td className="px-4 text-sm text-gray-700 border-b border-gray-200 text-center">
            <button className='bg-blue-500 text-xs rounded-md py-2 px-4 text-white'>Update</button>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
</div>
  </div>
</div>


          <div className="flex justify-between mt-4">

            <div className='flex gap-2'>

              <button className='text-xs px-6 h-8 rounded-md text-white bg-blue-500 hover:bg-blue-600  transition-all duration-200 cursor-pointer flex items-center justify-center gap-2'>Download Freight <MdOutlineFileDownload /></button>
              <button className='text-xs px-6 h-8 rounded-md text-white bg-amber-600 hover:bg-amber-700  transition-all duration-200 cursor-pointer flex items-center justify-center gap-2'>Download THC<MdOutlineFileDownload /></button>

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
      )}

      {activePage === 'final' && (
       
       <div className="">
       <div className="">
<InputField label="Customer Name" id="customerName" placeholder="Lorem" />
</div>

<div className="grid grid-cols-2 mt-4 gap-12">
<div>
  <InputField label="Bill of Lading" id="croNumber" placeholder="Lorem" />
  <InputField label="Dated" id="validity" placeholder="Lorem" />
</div>

<div>
  <InputField label="Load Port" id="validity2" placeholder="Lorem" />
  <InputField label="Discharge Port" id="cargoType" placeholder="Lorem" />
</div>
</div>

<div className="relative p-[1px] rounded-lg mt-6 bg-gradient-to-r from-pink-400 to-blue-400">
<div className="bg-white rounded-lg p-6 pt-3">
<table className="w-full border-collapse">
<thead>
<tr>
<th className="w-1/2 p-3 border-b border-gray-200 text-left text-xs font-semibold">Fech Exchange Rate</th>
<th className="w-1/2 p-3 border-b border-gray-200 text-center text-xs font-semibold">Add Exchange Rate</th>
</tr>
</thead>
<tbody>
{data.map((row, index) => (
<tr key={index} className="hover:bg-gray-50">
<td className="w-1/2 p-3 border-b border-gray-200 text-left text-xs">{row.fechExchangeRate}</td>
<td className="w-1/2 px-4 text-sm text-gray-700 border-b border-gray-200 text-center">
<input
  type="text"
  className="w-full px-2 py-2 border border-white focus:outline-none focus:ring-2 focus:ring-blue-500 text-center"
  placeholder="Type here"
/>
</td>
</tr>
))}
</tbody>
</table>
</div>
</div>

<div className="flex justify-end mt-4">
<button className="bg-blue-500 text-white px-4 h-8 text-xs ml-3 rounded-md hover:bg-blue-600 transition-all duration-200 cursor-pointer flex justify-center items-center gap-3">
  <GoPlus /> Add New
</button>
</div>

<div className="relative p-[1px] rounded-lg mt-6 bg-gradient-to-r from-pink-400 to-blue-400">
<div className="rounded-md bg-white p-2  pb-4">
<div className="">
<table className="min-w-full bg-white">
<thead>
<tr>
<th className="px-4 py-2 text-sm font-semibold text-gray-700 border-b border-gray-200">SrNo</th>
<th className="px-4 py-2 text-sm font-semibold text-gray-700 border-b border-gray-200">Charge Head</th>
<th className="px-4 py-2 text-sm font-semibold text-gray-700 border-b border-gray-200">Quantity</th>
<th className="px-4 py-2 text-sm font-semibold text-gray-700 border-b border-gray-200">Rate</th>
<th className="px-4 py-2 text-sm font-semibold text-gray-700 border-b border-gray-200">Amount</th>
<th className="px-4 py-2 text-sm font-semibold text-gray-700 border-b border-gray-200">Action</th>
</tr>
</thead>
<tbody>
{tableData.map((item, index) => (
<tr key={item.id} className="hover:bg-gray-50">
<td className="px-4 text-sm text-gray-700 border-b border-gray-200 text-center">{index + 1}</td>
<td className="px-4 text-sm text-gray-700 border-b border-gray-200 text-center">
<input
  type="text"
  className="w-full px-2 py-2 border border-white focus:outline-none focus:ring-2 focus:ring-blue-500 text-center"
  placeholder="Type here"
/>
</td>
<td className="px-4 text-sm text-gray-700 border-b border-gray-200 text-center">
<input
  type="number"
  className="w-full px-2 py-2 border border-white focus:outline-none focus:ring-2 focus:ring-blue-500 text-center"
  placeholder="Type here"
/>
</td>
<td className="px-4 text-sm text-gray-700 border-b border-gray-200 text-center">
<input
  type="number"
  className="w-full px-2 py-2 border border-white focus:outline-none focus:ring-2 focus:ring-blue-500 text-center"
  placeholder="Type here"
/>
</td>
<td className="px-4 text-sm text-gray-700 border-b border-gray-200 text-center">
<input
  type="number"
  className="w-full px-2 py-2 border border-white focus:outline-none focus:ring-2 focus:ring-blue-500 text-center"
  placeholder="Type here"
/>
</td>
<td className="px-4 text-sm text-gray-700 border-b border-gray-200 text-center">
<button className='bg-blue-500 text-xs rounded-md py-2 px-4 text-white'>Update</button>
</td>
</tr>
))}
</tbody>
</table>
</div>
</div>
</div>


<div className="flex justify-between mt-4">

<div className='flex gap-2'>

  <button className='text-xs px-6 h-8 rounded-md text-white bg-blue-500 hover:bg-blue-600  transition-all duration-200 cursor-pointer flex items-center justify-center gap-2'>Download Freight <MdOutlineFileDownload /></button>
  <button className='text-xs px-6 h-8 rounded-md text-white bg-amber-600 hover:bg-amber-700  transition-all duration-200 cursor-pointer flex items-center justify-center gap-2'>Download THC<MdOutlineFileDownload /></button>

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

      )}



        </div>
      </div>
    </Layout>
  );
};

export default exportinvoice;