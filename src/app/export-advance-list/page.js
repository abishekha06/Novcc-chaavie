"use client";
import { useState, useRef, useEffect } from "react";
import Layout from "../../components/layout";
import Modal from "../../components/modal";
import { TiFilter } from "react-icons/ti";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { RiArrowGoBackFill } from "react-icons/ri";
import InputField from '../../components/input-field';
import { MdOutlineFileDownload } from "react-icons/md";
import { IoSearch} from "react-icons/io5";

const ExportAdvanceList = () => {
  const dummyData = [
    {
      id: 1,
      taskId: "T12345",
      importExport: "Import",
      line: "Maersk",
      date: "2023-10-01",
      vesselName: "Vessel A",
    },
    {
      id: 2,
      taskId: "T67890",
      importExport: "Export",
      line: "COSCO",
      date: "2023-10-02",
      vesselName: "Vessel B",
    },
    {
      id: 3,
      taskId: "T54321",
      importExport: "Import",
      line: "Hapag-Lloyd",
      date: "2023-10-03",
      vesselName: "Vessel C",
    },
    {
      id: 3,
      taskId: "T54321",
      importExport: "Import",
      line: "Hapag-Lloyd",
      date: "2023-10-03",
      vesselName: "Vessel C",
    },
    {
      id: 3,
      taskId: "T54321",
      importExport: "Import",
      line: "Hapag-Lloyd",
      date: "2023-10-03",
      vesselName: "Vessel C",
    },
    {
      id: 3,
      taskId: "T54321",
      importExport: "Import",
      line: "Hapag-Lloyd",
      date: "2023-10-03",
      vesselName: "Vessel C",
    },

    {
      id: 3,
      taskId: "T54321",
      importExport: "Import",
      line: "Hapag-Lloyd",
      date: "2023-10-03",
      vesselName: "Vessel C",
    },

    {
      id: 3,
      taskId: "T54321",
      importExport: "Import",
      line: "Hapag-Lloyd",
      date: "2023-10-03",
      vesselName: "Vessel C",
    },
    {
      id: 3,
      taskId: "T54321",
      importExport: "Import",
      line: "Hapag-Lloyd",
      date: "2023-10-03",
      vesselName: "Vessel C",
    },
    {
      id: 3,
      taskId: "T54321",
      importExport: "Import",
      line: "Hapag-Lloyd",
      date: "2023-10-03",
      vesselName: "Vessel C",
    },
    {
      id: 3,
      taskId: "T54321",
      importExport: "Import",
      line: "Hapag-Lloyd",
      date: "2023-10-03",
      vesselName: "Vessel C",
    },
    {
      id: 3,
      taskId: "T54321",
      importExport: "Import",
      line: "Hapag-Lloyd",
      date: "2023-10-03",
      vesselName: "Vessel C",
    },
  ];

  const modalData = [
    { label: "Task ID", value: "T12345" },
    { label: "Import/Export", value: "Import" },
    { label: "Line", value: "Maersk" },
    { label: "Date", value: "2023-10-01" },
    { label: "Vessel Name", value: "Vessel A" },
  ];

  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const [isModalOpen2, setIsModalOpen2] = useState(false);
  const openModal2 = () => setIsModalOpen2(true);
  const closeModal2 = () => setIsModalOpen2(false);

  const [isModalOpen3, setIsModalOpen3] = useState(false);
  const openModal3 = () => setIsModalOpen3(true);
  const closeModal3 = () => setIsModalOpen3(false);

  const [isModalOpen4, setIsModalOpen4] = useState(false);
  const openModal4 = () => setIsModalOpen4(true);
  const closeModal4 = () => setIsModalOpen4(false);

    // Dropdown states
    const [isDropdown1Open, setIsDropdown1Open] = useState(false);
    const [isDropdown2Open, setIsDropdown2Open] = useState(false);
    const [selectedItem1, setSelectedItem1] = useState("Button 1"); // Track selected item for Dropdown 1
    const [selectedItem2, setSelectedItem2] = useState("Button 2"); // Track selected item for Dropdown 2
  
    // Ref for dropdowns to detect clicks outside
    const dropdown1Ref = useRef(null);
    const dropdown2Ref = useRef(null);
  
    // Close dropdown when clicking outside
    useEffect(() => {
      const handleClickOutside = (event) => {
        if (dropdown1Ref.current && !dropdown1Ref.current.contains(event.target)) {
          setIsDropdown1Open(false);
        }
        if (dropdown2Ref.current && !dropdown2Ref.current.contains(event.target)) {
          setIsDropdown2Open(false);
        }
      };
  
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, []);
  
    // Toggle dropdown visibility
    const toggleDropdown1 = () => setIsDropdown1Open(!isDropdown1Open);
    const toggleDropdown2 = () => setIsDropdown2Open(!isDropdown2Open);
  
    // Handle item selection for Dropdown 1
    const handleSelectItem1 = (item) => {
      setSelectedItem1(item);
      setIsDropdown1Open(false);
    };
  
    // Handle item selection for Dropdown 2
    const handleSelectItem2 = (item) => {
      setSelectedItem2(item);
      setIsDropdown2Open(false);
    };

  return (
    <Layout>
      <div className='p-6 border-1 border-gray-200 h-full bg-white rounded-2xl shadow-xl'>
        <div className='h-fit flex flex-col justify-between'>
          <h1 className="text-xl font-semibold border-l-pink-800 border-l-8 pl-2.5">Export Advance List</h1>
          <div className='flex items-end flex-col'>

            <div className='flex items-center justify-between w-full mt-4'>

            <div className="flex gap-2">
                {/* Dropdown Button 1 */}
                <div className="relative" ref={dropdown1Ref}>
                  <button
                    onClick={toggleDropdown1}
                    className="bg-gray-100 hover:bg-gray-200 border border-gray-300 rounded-sm p-2 px-4 text-sm cursor-pointer w-fit flex items-center gap-1"
                  >
                    {selectedItem1}
                    <svg
                      className={`w-4 h-4 transition-transform ${
                        isDropdown1Open ? "rotate-180" : ""
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                  {/* Dropdown Menu 1 */}
                  {isDropdown1Open && (
                    <div className="absolute mt-2 w-48 bg-white border border-gray-200 rounded-sm shadow-lg z-10">
                      <ul>
                        {["Option 1", "Option 2", "Option 3"].map((item) => (
                          <li key={item}>
                            <button
                              onClick={() => handleSelectItem1(item)}
                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                            >
                              {item}
                            </button>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                {/* Dropdown Button 2 */}
                <div className="relative" ref={dropdown2Ref}>
                  <button
                    onClick={toggleDropdown2}
                    className="bg-gray-100 hover:bg-gray-200 border border-gray-300 rounded-sm p-2 px-4 text-sm cursor-pointer w-fit flex items-center gap-1"
                  >
                    {selectedItem2}
                    <svg
                      className={`w-4 h-4 transition-transform ${
                        isDropdown2Open ? "rotate-180" : ""
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                  {/* Dropdown Menu 2 */}
                  {isDropdown2Open && (
                    <div className="absolute mt-2 w-48 bg-white border border-gray-200 rounded-sm shadow-lg z-10">
                      <ul>
                        {["Option A", "Option B", "Option C"].map((item) => (
                          <li key={item}>
                            <button
                              onClick={() => handleSelectItem2(item)}
                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                            >
                              {item}
                            </button>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
                <button className='bg-blue-500/10 text-blue-600 hover:bg-blue-600/20 rounded-sm p-2 px-4 text-sm cursor-pointer w-fit flex items-center justify-center gap-2'>
              <h1>Search</h1><IoSearch />
            </button>

                <button  className='bg-green-700 hover:bg-green-800 text-white  rounded-sm p-2 px-4 text-sm cursor-pointer w-fit flex items-center justify-center gap-2'>
              <h1>Generate EAL</h1>
            </button>

            <button onClick={openModal3}  className='bg-blue-600 hover:bg-blue-700 text-white rounded-sm p-2 px-4 text-sm cursor-pointer w-fit flex items-center justify-center gap-2'>
              <h1>Export tally sheet</h1>
            </button>

            <Modal isOpen={isModalOpen3} onClose={closeModal3}>
          <div className='h-full w-full relative'>
            <div className='absolute inset-0 flex items-center justify-center'>
              <div className='w-fit'>
                <div className='flex w-full justify-end mb-4'>
                  <button onClick={closeModal3} className='bg-white h-10 w-10 rounded-full cursor-pointer flex items-center justify-center'>
                    <RiArrowGoBackFill />
                  </button>
                </div>
                <div className='bg-white p-16 rounded-md flex items-center justify-center flex-col'>
                  <h1 className="text-xl font-semibold mb-4">Please Upload Your Tally Sheet</h1>
                  <button className='bg-blue-600 hover:bg-blue-700 text-white rounded-sm p-2 px-4 text-sm cursor-pointer w-fit flex items-center justify-center gap-2'>
              <h1>Upload tally sheet</h1>
                 </button>
                </div>
              </div>
            </div>
          </div>
        </Modal>



              </div>

        


              <div className='flex gap-3'>
                        <button className='bg-blue-500/10 text-blue-600 py-1 rounded-sm hover:bg-blue-600/20 p-2 px-4 text-sm cursor-pointer w-fit flex items-center justify-center gap-2'>
                          <h1>Download</h1><MdOutlineFileDownload />
                        </button>
                        <button onClick={openModal} className='bg-gray-100 hover:bg-gray-200 rounded-sm p-2 px-4 text-sm cursor-pointer w-fit flex items-center justify-center gap-2'>
                          <h1>Filter</h1><TiFilter />
                        </button>
                   </div>

            
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

        {/* Table */}
        <div className="overflow-hidden overflow-y-auto h-auto scroll-smooth scrollbar-thin scrollbar-thumb-blue-500 scrollbar-track-gray-200 custom-scrollbar">
          <table className="min-w-full border-collapse border border-gray-200">
            <thead>
              <tr className="bg-gray-100 border-b border-gray-200">
                <th className="px-4 py-2 text-left text-sm font-semibold text-gray-800">Vessel/Visit</th>
                <th className="px-4 py-2 text-left text-sm font-semibold text-gray-800">Container No</th>
                <th className="px-4 py-2 text-left text-sm font-semibold text-gray-800">Opr</th>
                <th className="px-4 py-2 text-left text-sm font-semibold text-gray-800">Shipping Status Code</th>
                <th className="px-4 py-2 text-left text-sm font-semibold text-gray-800">Eqp Type</th>
                <th className="px-4 py-2 text-left text-sm font-semibold text-gray-800">Load Status</th>
                <th className="px-4 py-2 text-left text-sm font-semibold text-gray-800">Pod</th>
                <th className="px-4 py-2 text-sm font-semibold text-gray-800">Action</th>
              </tr>
            </thead>
            <tbody>
              {dummyData.map((item) => (
                <tr key={item.id} className="hover:bg-gray-50 even:bg-gray-50">
                  <td className="px-4 py-2 text-sm text-gray-700 border-t border-gray-200">{item.vesselName}</td>
                  <td className="px-4 py-2 text-sm text-gray-700 border-t border-gray-200">Container {item.id}</td>
                  <td className="px-4 py-2 text-sm text-gray-700 border-t border-gray-200">Opr {item.id}</td>
                  <td className="px-4 py-2 text-sm text-gray-700 border-t border-gray-200">Status {item.id}</td>
                  <td className="px-4 py-2 text-sm text-gray-700 border-t border-gray-200">Type {item.id}</td>
                  <td className="px-4 py-2 text-sm text-gray-700 border-t border-gray-200">Load {item.id}</td>
                  <td className="px-4 py-2 text-sm text-gray-700 border-t border-gray-200">Pod {item.id}</td>
                  <td className="px-4 py-2 text-sm text-gray-700 border-t border-gray-200 flex space-x-2 justify-end">
                    <button
                      className="bg-blue-500/10 text-blue-600 px-3 py-1 rounded-sm hover:bg-blue-600/20 duration-200 cursor-pointer"
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

        {/* View Modal (Modal 2) */}
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


 

        {/* Approve Email Modal (Modal 4) */}
        <Modal isOpen={isModalOpen4} onClose={closeModal4}>
          <div className='h-full w-full relative'>
            <div className='absolute inset-0 flex items-center justify-center'>
              <div className='w-[54rem]'>
                <div className='flex w-full justify-end mb-4'>
                  <button onClick={closeModal4} className='bg-white h-10 w-10 rounded-full cursor-pointer flex items-center justify-center'>
                    <RiArrowGoBackFill />
                  </button>
                </div>
                <div className='bg-white p-6 rounded-md flex flex-col gap-4'>
                  <h1 className="text-xl font-semibold">Approve Email</h1>
                  <div className='grid grid-cols-2 gap-4'>
                    <InputField label="From" id="from" placeholder="Enter From"/>
                    <InputField label="To" id="to" placeholder="Enter To" />
                  </div>
                  <textarea
                    className="w-full p-2 border border-gray-300 rounded-sm focus:ring-1 focus:ring-blue-500 focus:border-blue-500 outline-none"
                    rows={4}
                    placeholder="Enter your message"
                  />
                  <div className='flex justify-end'>
                    <button className='bg-blue-500 text-white text-sm px-4 py-2 rounded-se-lg rounded-es-lg hover:bg-blue-600 transition-colors duration-200 flex-1 text-center max-w-[120px] cursor-pointer'>
                      Approve
                    </button>
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

export default ExportAdvanceList;