import Layout from "../../../components/layout";
import InputField from "../../../components/input-field"; 

const exporcro = () => {
  const tableData = [
    { id: 1, name: "THC", unit: "1 Per Unit", value: 200 },
    { id: 2, name: "MUC", unit: "2 Per Unit", value: 200 },
    { id: 3, name: "Seal Charge", unit: "3 Per Unit", value: 200 },
    { id: 4, name: "Admin Charge", unit: "4 Per Unit", value: 200 },
    { id: 5, name: "Documentation Charge", unit: "5 Per Unit", value: 200 },
  ];

  return (
    <Layout>
      <div className='p-6 border-1 border-gray-200 h-full bg-white rounded-2xl shadow-xl '>
        <div className='h-fit mb-6 px-2'>
          <h1 className="text-xl font-semibold border-l-pink-800 border-l-8 pl-2.5">Export Container Release Order (CRO)</h1>
        </div>

        <div className="overflow-hidden overflow-y-auto h-auto scroll-smooth scrollbar-thin scrollbar-thumb-blue-500 scrollbar-track-gray-200 custom-scrollbar px-2">
          <InputField label="Customer Name" id="customerName" placeholder="Lorem" />

          <div className="grid grid-cols-2 mt-4 gap-12">
            <div>
              <InputField label="Task ID" id="taskId" placeholder="Lorem" />
              <InputField label="CRO Number" id="croNumber" placeholder="Lorem" />
              <InputField label="Quotation ID" id="quotationId" placeholder="Lorem" />
              <InputField label="Land Port" id="landPort" placeholder="Lorem" />
              <InputField label="Routing" id="routing" placeholder="Lorem" />
              <InputField label="Cargo Details" id="cargoDetails" placeholder="Lorem" />
              <InputField label="ETA Load Port" id="etaLoadPort" placeholder="Lorem" />
              <InputField label="Cut off Load Port" id="cutOffLoadPort" placeholder="Lorem" />
              <InputField label="Por/Terminal" id="porTerminal" placeholder="Lorem" />
              <InputField label="Depot/Release Location" id="depotReleaseLocation" placeholder="Lorem" />
              <InputField label="No of Container" id="noOfContainer" placeholder="Lorem" />
              <InputField label="Type of Container" id="typeOfContainer" placeholder="Lorem" />
              <InputField label="Cargo Type" id="cargoType" placeholder="Lorem" />
              <InputField label="Ocean Freight" id="oceanFreight" placeholder="Lorem" />
            </div>

            <div>
              <InputField label="CRO Date" id="croDate" placeholder="Lorem" />
              <InputField label="Booking ID" id="bookingId" placeholder="Lorem" />
              <InputField label="Shipping Line" id="shippingLine" placeholder="Lorem" />
              <InputField label="Discharge Port" id="dischargePort" placeholder="Lorem" />
              <InputField label="Transshipment Port" id="transshipmentPort" placeholder="Lorem" />
              <InputField label="Vessel Details" id="vesselDetails" placeholder="Lorem" />
              <InputField label="ETD Load Port" id="etdLoadPort" placeholder="Lorem" />
              <InputField label="Gate Opening" id="gateOpening" placeholder="Lorem" />
              <InputField label="Stuffing Location" id="stuffingLocation" placeholder="Lorem" />
              <InputField label="Validity" id="validity" placeholder="Lorem" />

              <div className="p-6 border-1 rounded-md border-blue-300 mt-6">
                <h1 className="font-semibold">Fetch Local Charge</h1>
                <div className="mt-6">
                  <table className="min-w-full bg-white border border-gray-200">
                    <thead>
                      <tr>
                        <th className="px-4 py-2 text-sm font-semibold text-gray-700 border-b border-gray-200"></th>
                        <th className="px-4 py-2 text-sm font-semibold border-b border-gray-200 text-blue-500">Unit Test</th>
                        <th className="px-4 py-2 text-sm font-semibold border-b border-gray-200 text-blue-500">INR 100000</th>
                      </tr>
                    </thead>
                    <tbody>
                      {tableData.map((item) => (
                        <tr key={item.id} className="hover:bg-gray-50">
                          <td className="px-4 py-2 text-sm text-gray-700 border-b border-gray-200 text-center">{item.name}</td>
                          <td className="px-4 py-2 text-sm text-gray-700 border-b border-gray-200 text-center">{item.unit}</td>
                          <td className="px-4 py-2 text-sm text-gray-700 border-b border-gray-200 text-center">{item.value}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="flex justify-end mt-4">
                <button className="bg-blue-500 text-white px-6 h-10 text-sm ml-3 rounded-es-lg rounded-se-lg hover:bg-blue-600 transition-all duration-200 cursor-pointer">
                  Allot Container
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default exporcro;