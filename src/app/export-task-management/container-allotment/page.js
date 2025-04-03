"use client";

import { useState } from "react";
import { FaSync, FaTimesCircle } from "react-icons/fa";
import InputField from "../../../components/input-field";
import Layout from "../../../components/layout";
import Progress from "../components/progress";
import ProgressButton from "../components/progress-buttons";
import { GoPlus } from "react-icons/go";

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
    remarks:"Morning",
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
    remarks:"Morning duisudsudusdsidusudsudisudisudisudusdis udsuid syudysyuds hsdhsuudusyd hshdusd",
    validity: "30 days",
  },
];

const ContainerAllotment = () => {
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

  const handleContainerChange = (index, value) => {
    const newData = [...data];
    newData[index].containerNo = value;
    setData(newData);
  };

  return (
    <Layout>
      <div className="flex flex-col p-6 border-1 border-gray-200 h-full bg-white rounded-2xl shadow-xl max-w-full">
        <div className="h-32 flex flex-col justify-between">
          <Progress />
          <ProgressButton />
        </div>

        <div className="h-full p-2  custom-scrollbar pt-6 max-w-full">
          <div>
            <InputField label="Customer Name" id="customerName" placeholder="Lorem" />
          </div>

          <div className="grid grid-cols-2 mt-4 gap-12 max-w-full">
            <div>
              <InputField label="CRO Number" id="croNumber" placeholder="Lorem" />
              <InputField label="Validity" id="validity" placeholder="Lorem" />
              <InputField label="Discharge Port" id="dischargePort" placeholder="Lorem" />
            </div>

            <div>
              <InputField label="Validity" id="validity2" placeholder="Lorem" />
              <InputField label="Cargo Type" id="cargoType" placeholder="Lorem" />
              <InputField label="Ocean Freight" id="oceanFreight" placeholder="Lorem" />
            </div>
          </div>

            <div className="flex justify-end mt-4 max-w-full">
                      <button className="bg-blue-500 text-white px-4 h-8 text-xs ml-3 rounded-md hover:bg-blue-600 transition-all duration-200 cursor-pointer flex justify-center items-center gap-3">
                        <GoPlus /> Add New
                      </button>
            </div>

            <div className="overflow-y-auto flex min-w-full">
  <div className="p-[1px] rounded-lg mt-6 bg-gradient-to-r from-pink-400 to-blue-400">
    <div className="bg-white rounded-lg p-4 w-fit">
      <table className="border-collapse">
        <thead>
          <tr>
            <th className="p-3 border-b border-gray-200 text-center text-xs font-semibold min-w-6 align-text-top">Sr No</th>
            <th className="p-3 border-b border-gray-200 text-center text-xs font-semibold min-w-32 align-middle">Container No</th>
            <th className="p-3 border-b border-gray-200 text-center text-xs font-semibold min-w-20 align-middle">Size</th>
            <th className="p-3 border-b border-gray-200 text-center text-xs font-semibold min-w-24 align-middle">Allotment</th>
            <th className="p-3 border-b border-gray-200 text-center text-xs font-semibold min-w-32 align-middle">Shipping Line</th>
            <th className="p-3 border-b border-gray-200 text-center text-xs font-semibold min-w-32 align-middle">Allotment Date</th>
            <th className="p-3 border-b border-gray-200 text-center text-xs font-semibold min-w-32 align-middle">CRO Number</th>
            <th className="p-3 border-b border-gray-200 text-center text-xs font-semibold min-w-32 align-middle">Dated</th>
            <th className="p-3 border-b border-gray-200 text-center text-xs font-semibold min-w-32 align-middle">Validity</th>
            <th className="p-3 border-b border-gray-200 text-left text-xs font-semibold max-w-96 align-middle">Remarks</th>
            <th className="p-3 border-b border-gray-200 text-center text-xs font-semibold min-w-24 align-middle">Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={row.srNo} className="hover:bg-gray-50">
              <td className="p-3 border-b border-gray-200 text-center text-xs w-16 align-text-top">{row.srNo}</td>
              <td className="p-3 border-b border-gray-200 text-center text-xs align-text-top">
                <select 
                  value={row.containerNo}
                  onChange={(e) => handleContainerChange(index, e.target.value)}
                  className="w-40 text-xs  rounded px-2 py-1"
                >
                  <option value="">Select Container</option>
                  <option value="MSKU1234567">MSKU1234567</option>
                  <option value="TGHU7654321">TGHU7654321</option>
                  <option value="CAIU9876543">CAIU9876543</option>
                  <option value="APZU4567890">APZU4567890</option>
                  <option value="BMOU3456789">BMOU3456789</option>
                  <option value="SEGU2345678">SEGU2345678</option>
                  <option value="FSCU8765432">FSCU8765432</option>
                  <option value="TCNU6543210">TCNU6543210</option>
                  <option value="PONU9871234">PONU9871234</option>
                  <option value="UETU4561237">UETU4561237</option>
                  <option value="HJCU7894561">HJCU7894561</option>
                  <option value="KKFU1237894">KKFU1237894</option>
                  <option value="OOCU4567891">OOCU4567891</option>
                  <option value="MSCU9876542">MSCU9876542</option>
                  <option value="HLCU3216549">HLCU3216549</option>
                  <option value="CMA1234567U">CMA1234567U</option>
                  <option value="MAEU7654321">MAEU7654321</option>
                  <option value="ONEU9876543">ONEU9876543</option>
                  <option value="YMLU4567890">YMLU4567890</option>
                  <option value="EITU3456789">EITU3456789</option>
                </select>
              </td>
              <td className="p-3 border-b border-gray-200 text-center text-xs w-20 align-text-top">{row.size}</td>
              <td className="p-3 border-b border-gray-200 text-center text-xs w-24 align-text-top">
                <input
                  type="checkbox"
                  checked={row.allotment}
                  onChange={() => handleAllotmentChange(index)}
                  className="form-checkbox h-4 w-4 text-blue-600 align-text-top"
                />
              </td>
              <td className="p-3 border-b border-gray-200 text-center text-xs w-32 align-text-top">{row.shippingLine}</td>
              <td className="p-3 border-b border-gray-200 text-center text-xs w-32 align-text-top">{row.allotmentDate}</td>
              <td className="p-3 border-b border-gray-200 text-center text-xs w-32 align-text-top">{row.croNumber}</td>
              <td className="p-3 border-b border-gray-200 text-center text-xs w-32 align-text-top">{row.dated}</td>
              <td className="p-3 border-b border-gray-200 text-center text-xs w-32 align-text-top">{row.validity}</td>
              <td className="p-3 border-b border-gray-200 text-left text-xs max-w-64 align-text-top">{row.remarks}</td>
              <td className="p-3 border-b border-gray-200 text-center text-xs w-24 align-text-top">
                <div className="flex justify-center space-x-2 items-center">
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
</div>


          <div className="flex justify-end mt-4">
            <button className="bg-blue-500 text-white px-6 h-8 text-xs ml-3 rounded-es-lg rounded-se-lg hover:bg-blue-600 transition-all duration-200 cursor-pointer w-24">
              Save
            </button>
            <button className="bg-white border-2 border-gray-300 text-gray-900 hover:bg-gray-100 hover:border-gray-400 px-6 h-8 text-xs ml-3 rounded-es-lg rounded-se-lg transition-all duration-200 cursor-pointer w-24">
              Submit
            </button>
          </div>




        </div>



      </div>
    </Layout>
  );
};

export default ContainerAllotment;