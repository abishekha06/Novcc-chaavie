"use client";

import { useState } from "react"; // Import useState
import InputField from "../../../components/input-field";
import Layout from "../../../components/layout";
import Progress from "../components/progress";
import ProgressButton from "../components/progress-buttons";

// Initial data
const initialData = [
  {
    srNo: 1,
    containerNo: "ABC123",
    size: "20ft",
    shippingLine: "Maersk",
    depotOut: true,
    depotOutDate: "2023-10-01",
    croNumber: "CRO12345",
    dated: "2023-09-25",
    validity: "30 days",
  },
  {
    srNo: 2,
    containerNo: "ABC123",
    size: "20ft",
    shippingLine: "Maersk",
    depotOut: false,
    depotOutDate: "2023-10-01",
    croNumber: "CRO12345",
    dated: "2023-09-25",
    validity: "30 days",
  },
];

const Stuffing = () => {
  // State to manage the table data
  const [data, setData] = useState(initialData);

  // Function to handle checkbox change
  const handleDepotOutChange = (index) => {
    const updatedData = [...data]; // Create a copy of the data
    updatedData[index].depotOut = !updatedData[index].depotOut; // Toggle the checkbox state
    setData(updatedData); // Update the state
  };

  return (
    <Layout>
      <div className="flex flex-col p-6 border-1 border-gray-200 h-full bg-white rounded-2xl shadow-xl">
        <div className="h-32 flex flex-col justify-between">
          <Progress />
          <ProgressButton />
        </div>

        <div className="h-full p-2 overflow-y-scroll custom-scrollbar pt-6">
          <div>
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
              <InputField label="Ocean Freight" id="oceanFreight" placeholder="Lorem" />
            </div>
          </div>

          {/* Table */}
          <div className="relative p-[1px] rounded-lg mt-6 bg-gradient-to-r from-pink-400 to-blue-400">
            <div className="bg-white rounded-lg p-4">
              <table className="w-full border-collapse">
                <thead>
                  <tr>
                    <th className="p-3 border-b border-gray-200 text-center text-xs font-semibold">Sr No</th>
                    <th className="p-3 border-b border-gray-200 text-center text-xs font-semibold">Container No</th>
                    <th className="p-3 border-b border-gray-200 text-center text-xs font-semibold">Size</th>
                    <th className="p-3 border-b border-gray-200 text-center text-xs font-semibold">Shipping Line</th>
                    <th className="p-3 border-b border-gray-200 text-center text-xs font-semibold">Depot Out</th>
                    <th className="p-3 border-b border-gray-200 text-center text-xs font-semibold">Depot Out Date</th>
                    <th className="p-3 border-b border-gray-200 text-center text-xs font-semibold">CRO Number</th>
                    <th className="p-3 border-b border-gray-200 text-center text-xs font-semibold">Dated</th>
                    <th className="p-3 border-b border-gray-200 text-center text-xs font-semibold">Validity</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((row, index) => (
                    <tr key={row.srNo} className="hover:bg-gray-50">
                      <td className="p-3 border-b border-gray-200 text-center text-xs">{row.srNo}</td>
                      <td className="p-3 border-b border-gray-200 text-center text-xs">{row.containerNo}</td>
                      <td className="p-3 border-b border-gray-200 text-center text-xs">{row.size}</td>
                      <td className="p-3 border-b border-gray-200 text-center text-xs">{row.shippingLine}</td>
                      <td className="p-3 border-b border-gray-200 text-center text-xs">
                        <input
                          type="checkbox"
                          checked={row.depotOut}
                          onChange={() => handleDepotOutChange(index)}
                          className="form-checkbox h-4 w-4 text-blue-600"
                        />
                      </td>
                      <td className="p-3 border-b border-gray-200 text-center text-xs">{row.depotOutDate}</td>
                      <td className="p-3 border-b border-gray-200 text-center text-xs">{row.croNumber}</td>
                      <td className="p-3 border-b border-gray-200 text-center text-xs">{row.dated}</td>
                      <td className="p-3 border-b border-gray-200 text-center text-xs">{row.validity}</td>
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
            <button className="bg-white border-2 border-gray-300 text-gray-900 hover:bg-gray-100 hover:border-gray-400 px-6 h-8 text-xs ml-3 rounded-es-lg rounded-se-lg transition-all duration-200 cursor-pointer w-24">
              Submit
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Stuffing;