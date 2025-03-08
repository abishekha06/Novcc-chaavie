import InputField from "../../../components/input-field";
import Layout from "../../../components/layout";
import Progress from "../../cro-list/components/progress";
import ProgressButton from "../../cro-list/components/progress-buttons";


const stuffing = () => {
  return (
    <Layout>
      <div className='flex flex-col p-6 border-1 border-gray-200 h-full bg-white rounded-2xl shadow-xl'>
        <div className='h-32 flex flex-col justify-between'>
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

          <div className="flex justify-end mt-4">
            <button className="bg-blue-500 text-white px-6 h-10 text-sm ml-3 rounded-es-lg rounded-se-lg hover:bg-blue-600 transition-all duration-200 cursor-pointer">
              Allot Container
            </button>
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

export default stuffing;