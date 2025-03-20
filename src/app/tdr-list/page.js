"use client";
import { useState, useRef, useEffect } from "react";
import Layout from "../../components/layout";
import Modal from "../../components/modal";
import { TiFilter } from "react-icons/ti";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { RiArrowGoBackFill } from "react-icons/ri";
import InputField from "../../components/input-field";
import { MdOutlineFileDownload } from "react-icons/md";
import { IoSearch } from "react-icons/io5";

const TDRList = () => {
  const dummyData = [
    {
      id: 1,
      containerNo: "ABC123",
      size: "20ft",
      type: "Dry",
      wtInMts: "25.5",
      vgmWt: "26.0",
      podCode: "POD1",
    },
    {
      id: 2,
      containerNo: "DEF456",
      size: "40ft",
      type: "Reefer",
      wtInMts: "30.0",
      vgmWt: "30.5",
      podCode: "POD2",
    },
    {
      id: 3,
      containerNo: "GHI789",
      size: "20ft",
      type: "Tank",
      wtInMts: "22.0",
      vgmWt: "22.5",
      podCode: "POD3",
    },
  ];

  const modalData = [
    { label: "Container No", value: "ABC123" },
    { label: "Size", value: "20ft" },
    { label: "Type", value: "Dry" },
    { label: "WT in MTS", value: "25.5" },
    { label: "VGM WT", value: "26.0" },
    { label: "POD Code", value: "POD1" },
  ];

  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const [isViewModalOpen, setIsViewModalOpen] = useState(false);
  const openViewModal = () => setIsViewModalOpen(true);
  const closeViewModal = () => setIsViewModalOpen(false);

  const [isDropdown1Open, setIsDropdown1Open] = useState(false);
  const [isDropdown2Open, setIsDropdown2Open] = useState(false);
  const [selectedItem1, setSelectedItem1] = useState("Button 1");
  const [selectedItem2, setSelectedItem2] = useState("Button 2");

  const dropdown1Ref = useRef(null);
  const dropdown2Ref = useRef(null);

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

  const toggleDropdown1 = () => setIsDropdown1Open(!isDropdown1Open);
  const toggleDropdown2 = () => setIsDropdown2Open(!isDropdown2Open);

  const handleSelectItem1 = (item) => {
    setSelectedItem1(item);
    setIsDropdown1Open(false);
  };

  const handleSelectItem2 = (item) => {
    setSelectedItem2(item);
    setIsDropdown2Open(false);
  };

  return (
    <Layout>
      <div className="p-6 border-1 border-gray-200 h-full bg-white rounded-2xl shadow-xl flex flex-col">
      
        <div className="h-fit flex flex-col justify-between">
          <h1 className="text-xl font-semibold border-l-pink-800 border-l-8 pl-2.5">
            TDR List
          </h1>
          <div className="flex items-end flex-col">
            <div className="flex items-center justify-between w-full mt-4">
              <div className="flex gap-2">
                <div className="relative" ref={dropdown1Ref}>
                  <button
                    onClick={toggleDropdown1}
                    className="bg-gray-100 hover:bg-gray-200 border border-gray-300 rounded-sm p-2 px-4 text-sm cursor-pointer w-fit flex items-center gap-1"
                  >
                    {selectedItem1}
                    <svg
                      className={`w-4 h-4 transition-transform ${isDropdown1Open ? "rotate-180" : ""}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
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

                <div className="relative" ref={dropdown2Ref}>
                  <button
                    onClick={toggleDropdown2}
                    className="bg-gray-100 hover:bg-gray-200 border border-gray-300 rounded-sm p-2 px-4 text-sm cursor-pointer w-fit flex items-center gap-1"
                  >
                    {selectedItem2}
                    <svg
                      className={`w-4 h-4 transition-transform ${isDropdown2Open ? "rotate-180" : ""}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
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

                <button className="bg-blue-500/10 text-blue-600 hover:bg-blue-600/20 rounded-sm p-2 px-4 text-sm cursor-pointer w-fit flex items-center justify-center gap-2">
                  <h1>Search</h1>
                  <IoSearch />
                </button>
              </div>

              <div className="flex gap-3">
                <button
                  onClick={openModal}
                  className="bg-gray-100 hover:bg-gray-200 rounded-sm p-2 px-4 text-sm cursor-pointer w-fit flex items-center justify-center gap-2"
                >
                  <h1>Filter</h1>
                  <TiFilter />
                </button>
              </div>
            </div>

            {/* Pagination */}
            <div className="flex gap-0.5 my-2">
              <button className="h-6 bg-gray-200 w-6 flex items-center justify-center hover:bg-gray-300 text-xs">
                <IoIosArrowBack />
              </button>
              <button className="h-6 bg-gray-200 w-6 flex items-center justify-center hover:bg-gray-300 text-xs">
                1
              </button>
              <button className="h-6 bg-gray-200 w-6 flex items-center justify-center hover:bg-gray-300 text-xs">
                2
              </button>
              <button className="h-6 bg-gray-200 w-6 flex items-center justify-center hover:bg-gray-300 text-xs">
                3
              </button>
              <button className="h-6 bg-gray-200 w-6 flex items-center justify-center hover:bg-gray-300 text-xs">
                4
              </button>
              <button className="h-6 bg-gray-200 w-6 flex items-center justify-center hover:bg-gray-300 text-xs">
                5
              </button>
              <button className="h-6 bg-gray-200 w-6 flex items-center justify-center hover:bg-gray-300 text-xs">
                <IoIosArrowForward />
              </button>
            </div>
          </div>
        </div>

   
        <div className="flex-1 overflow-y-auto custom-scrollbar2">
          <table className="min-w-full border-collapse border border-gray-200">
            <thead>
              <tr className="bg-gray-100 border-b border-gray-200">
                <th className="px-4 py-2 text-center text-sm font-semibold text-gray-800">Container No</th>
                <th className="px-4 py-2 text-center text-sm font-semibold text-gray-800">Size</th>
                <th className="px-4 py-2 text-center text-sm font-semibold text-gray-800">Type</th>
                <th className="px-4 py-2 text-center text-sm font-semibold text-gray-800">WT in MTS</th>
                <th className="px-4 py-2 text-center text-sm font-semibold text-gray-800">VGM WT</th>
                <th className="px-4 py-2 text-center text-sm font-semibold text-gray-800">POD Code</th>
                <th className="px-4 py-2 text-center text-sm font-semibold text-gray-800">Action</th>
              </tr>
            </thead>
            <tbody>
              {dummyData.map((item) => (
                <tr key={item.id} className="hover:bg-gray-50 even:bg-gray-50">
                  <td className="px-4 py-2 text-sm text-gray-700 border-t border-gray-200 text-center">{item.containerNo}</td>
                  <td className="px-4 py-2 text-sm text-gray-700 border-t border-gray-200 text-center">{item.size}</td>
                  <td className="px-4 py-2 text-sm text-gray-700 border-t border-gray-200 text-center">{item.type}</td>
                  <td className="px-4 py-2 text-sm text-gray-700 border-t border-gray-200 text-center">{item.wtInMts}</td>
                  <td className="px-4 py-2 text-sm text-gray-700 border-t border-gray-200 text-center">{item.vgmWt}</td>
                  <td className="px-4 py-2 text-sm text-gray-700 border-t border-gray-200 text-center">{item.podCode}</td>
                  <td className="px-4 py-2 text-sm text-gray-700 border-t border-gray-200 text-center">
                    <button
                      className="bg-blue-500/10 text-blue-600 px-3 py-1 rounded-sm hover:bg-blue-600/20 duration-200 cursor-pointer"
                      onClick={openViewModal}
                    >
                      View
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      
        <div className="flex justify-end mt-4">
          <button className="bg-blue-500/10 text-blue-600 py-2 rounded-sm hover:bg-blue-600/20 p-2 px-4 text-sm cursor-pointer w-fit flex items-center justify-center gap-2">
            <h1>Download</h1>
            <MdOutlineFileDownload />
          </button>
        </div>

  
        <Modal isOpen={isModalOpen} onClose={closeModal}>
          <div className="h-full w-full relative">
            <div className="absolute top-32 right-14">
              <div className="flex justify-end">
                <button onClick={closeModal} className="bg-white h-10 w-10 rounded-full cursor-pointer flex justify-center items-center">
                  <RiArrowGoBackFill />
                </button>
              </div>
              <div className="bg-white rounded-xl my-4 p-4 grid grid-cols-3 lg:grid-cols-6 gap-2">
                <InputField label="Test Name" id="testName1" placeholder="Enter test name" />
                <InputField label="Test Name" id="testName2" placeholder="Enter test name" />
                <InputField label="Test Name" id="testName3" placeholder="Enter test name" />
                <InputField label="Test Name" id="testName4" placeholder="Enter test name" />
                <InputField label="Test Name" id="testName5" placeholder="Enter test name" />
                <InputField label="Test Name" id="testName6" placeholder="Enter test name" />
              </div>
              <div className="flex justify-end">
                <button className="bg-white text-sm px-4 py-2 rounded-se-lg rounded-es-lg mr-2 hover:bg-gray-200 transition-colors duration-200 flex-1 text-center max-w-[120px] cursor-pointer">
                  Reset
                </button>
                <button className="bg-blue-500 text-white text-sm px-4 py-2 rounded-se-lg rounded-es-lg hover:bg-blue-600 transition-colors duration-200 flex-1 text-center max-w-[120px] cursor-pointer">
                  Search
                </button>
              </div>
            </div>
          </div>
        </Modal>

        <Modal isOpen={isViewModalOpen} onClose={closeViewModal}>
          <div className="h-full w-full relative">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-[54rem]">
                <div className="flex w-full justify-end mb-4">
                  <button onClick={closeViewModal} className="bg-white h-10 w-10 rounded-full cursor-pointer flex items-center justify-center">
                    <RiArrowGoBackFill />
                  </button>
                </div>
                <div className="bg-white p-6 rounded-md flex flex-col gap-2">
                  <div className="grid grid-cols-2 gap-4">
                    {modalData.map((item, index) => (
                      <div key={index} className="border p-2 border-gray-300">
                        <h1 className="text-sm font-bold text-neutral-700">{item.label}</h1>
                        <h1 className="text-sm mt-1 text-neutral-700">{item.value}</h1>
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
};

export default TDRList;