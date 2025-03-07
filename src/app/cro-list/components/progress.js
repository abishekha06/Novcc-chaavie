const Progress = () => {
  const stepNames = [
    "Booking",
    "Container Allotment",
    "Stuffing",
    "Port IN",
    "Bill of Lading",
    "Export Invoice",
    "Load List",
    "TDR"
  ];

  return (
    <div className="h-14 flex items-center w-full">
      <div className="h-0.5 flex items-center w-full relative">
        <div className="bg-amber-950/15 h-0.5 flex items-center w-[87.5%] absolute"></div>
        <div className="bg-blue-600 h-0.5 flex items-center w-[28.4%] absolute"></div>

        <div className="w-full flex z-50">
          {stepNames.map((name, index) => (
            <div
              key={index}
              className="flex-1 flex items-center gap-1 border-r border-white last:border-r-0"
            >
              <div className="h-4 w-4 border-2 border-white bg-blue-600 rounded-full"></div>
              <div className="bg-white px-2 text-xs whitespace-nowrap overflow-hidden text-ellipsis">{name}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Progress;