"use client";

import { useState } from 'react';
import Layout from "../../../components/layout";
import Progress from "../components/progress";
import ProgressButton from "../components/progress-buttons";
import InputField from '../../../components/input-field';


const loadlist = () => {
  const [data, setData] = useState([
    {
      srNo: 1,
      containerNo: 'ABC123',
      size: '20ft',
      loadPort: 'Port A',
      dischargePort: 'Port B',
      croNumber: 'CRO123',
      vesselSailed: false,
    },
    {
      srNo: 2,
      containerNo: 'XYZ456',
      size: '40ft',
      loadPort: 'Port C',
      dischargePort: 'Port D',
      croNumber: 'CRO456',
      vesselSailed: true,
    },
    {
      srNo: 3,
      containerNo: 'DEF789',
      size: '20ft',
      loadPort: 'Port E',
      dischargePort: 'Port F',
      croNumber: 'CRO789',
      vesselSailed: false,
    },
  ]);

  const handleCheckboxChange = (index) => {
    const newData = [...data];
    newData[index].vesselSailed = !newData[index].vesselSailed;
    setData(newData);
  };

  const [activeList, setActiveList] = useState('preLoad');

  return (
    <Layout>
      <div className='flex flex-col p-6 border-1 border-gray-200 h-full bg-white rounded-2xl shadow-xl '>
        <div className='h-32 flex flex-col justify-between'>
          <Progress/>
          <ProgressButton />
        </div>

        <div className="h-full p-2 overflow-y-scroll custom-scrollbar pt-6">


 <div className="flex mb-6">
        <button
          className={`px-6 h-8 text-xs transition-all duration-200 cursor-pointer w-40 ${
            activeList === 'preLoad'
              ? 'bg-blue-500 text-white hover:bg-blue-600'
              : 'bg-gray-200 text-gray-800 hover:bg-blue-200'
          }`}
          onClick={() => setActiveList('preLoad')}
        >
          Pre-Load List
        </button>
        <button
          className={`px-6 h-8 text-xs transition-all duration-200 cursor-pointer w-40 ${
            activeList === 'finalLoad'
              ? 'bg-blue-500 text-white hover:bg-blue-600'
              : 'bg-gray-200 text-gray-800 hover:bg-blue-200'
          }`}
          onClick={() => setActiveList('finalLoad')}
        >
          Final Load List
        </button>
      </div>


      {activeList === 'preLoad' && (
        <div>
                    <div className="">
            <InputField label="Customer Name" id="customerName" placeholder="Lorem" />
          </div>

          <div className="grid grid-cols-2 mt-4 gap-12">
            <div>
              <InputField label="CRO Number" id="croNumber" placeholder="Lorem" />
              <InputField label="Validity" id="validity" placeholder="Lorem" />
            </div>

            <div>
              <InputField label="Validity" id="validity2" placeholder="Lorem" />
              <InputField label="Cargo Type" id="cargoType" placeholder="Lorem" />
            </div>
          </div>

          <div className="relative p-[1px] rounded-lg mt-6 bg-gradient-to-r from-pink-400 to-blue-400">
            <div className="bg-white rounded-lg p-4">
              <table className="w-full border-collapse">
                <thead>
                  <tr>
                    <th className="p-3 border-b border-gray-200 text-center text-xs font-semibold">Sr No</th>
                    <th className="p-3 border-b border-gray-200 text-center text-xs font-semibold">Container No</th>
                    <th className="p-3 border-b border-gray-200 text-center text-xs font-semibold">Size</th>
                    <th className="p-3 border-b border-gray-200 text-center text-xs font-semibold">Load Port</th>
                    <th className="p-3 border-b border-gray-200 text-center text-xs font-semibold">Discharge Port</th>
                    <th className="p-3 border-b border-gray-200 text-center text-xs font-semibold">CRO Number</th>
                    <th className="p-3 border-b border-gray-200 text-center text-xs font-semibold">Plan On This Vessel</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((row, index) => (
                    <tr key={row.srNo} className="hover:bg-gray-50">
                      <td className="p-3 border-b border-gray-200 text-center text-xs">{row.srNo}</td>
                      <td className="p-3 border-b border-gray-200 text-center text-xs">{row.containerNo}</td>
                      <td className="p-3 border-b border-gray-200 text-center text-xs">{row.size}</td>
                      <td className="p-3 border-b border-gray-200 text-center text-xs">{row.loadPort}</td>
                      <td className="p-3 border-b border-gray-200 text-center text-xs">{row.dischargePort}</td>
                      <td className="p-3 border-b border-gray-200 text-center text-xs">{row.croNumber}</td>
                      <td className="p-3 border-b border-gray-200 text-center text-xs">
                        <input
                          type="checkbox"
                          checked={row.vesselSailed}
                          onChange={() => handleCheckboxChange(index)}
                          className="form-checkbox h-4 w-4 text-blue-600"
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
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

      {activeList === 'finalLoad' && (
        <div>
                    <div className="">
            <InputField label="Customer Name" id="customerName" placeholder="Lorem" />
          </div>

          <div className="grid grid-cols-2 mt-4 gap-12">
            <div>
              <InputField label="CRO Number" id="croNumber" placeholder="Lorem" />
              <InputField label="Validity" id="validity" placeholder="Lorem" />
            </div>

            <div>
              <InputField label="Validity" id="validity2" placeholder="Lorem" />
              <InputField label="Cargo Type" id="cargoType" placeholder="Lorem" />
            </div>
          </div>

          <div className="relative p-[1px] rounded-lg mt-6 bg-gradient-to-r from-pink-400 to-blue-400">
            <div className="bg-white rounded-lg p-4">
              <table className="w-full border-collapse">
                <thead>
                  <tr>
                    <th className="p-3 border-b border-gray-200 text-center text-xs font-semibold">Sr No</th>
                    <th className="p-3 border-b border-gray-200 text-center text-xs font-semibold">Container No</th>
                    <th className="p-3 border-b border-gray-200 text-center text-xs font-semibold">Size</th>
                    <th className="p-3 border-b border-gray-200 text-center text-xs font-semibold">Load Port</th>
                    <th className="p-3 border-b border-gray-200 text-center text-xs font-semibold">Discharge Port</th>
                    <th className="p-3 border-b border-gray-200 text-center text-xs font-semibold">CRO Number</th>
                    <th className="p-3 border-b border-gray-200 text-center text-xs font-semibold">Loaded Onboard</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((row, index) => (
                    <tr key={row.srNo} className="hover:bg-gray-50">
                      <td className="p-3 border-b border-gray-200 text-center text-xs">{row.srNo}</td>
                      <td className="p-3 border-b border-gray-200 text-center text-xs">{row.containerNo}</td>
                      <td className="p-3 border-b border-gray-200 text-center text-xs">{row.size}</td>
                      <td className="p-3 border-b border-gray-200 text-center text-xs">{row.loadPort}</td>
                      <td className="p-3 border-b border-gray-200 text-center text-xs">{row.dischargePort}</td>
                      <td className="p-3 border-b border-gray-200 text-center text-xs">{row.croNumber}</td>
                      <td className="p-3 border-b border-gray-200 text-center text-xs">
                        <input
                          type="checkbox"
                          checked={row.vesselSailed}
                          onChange={() => handleCheckboxChange(index)}
                          className="form-checkbox h-4 w-4 text-blue-600"
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
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







        </div>
      </div>
    </Layout>
  );
};

export default loadlist;