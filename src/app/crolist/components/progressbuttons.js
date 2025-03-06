const ProgressButton = () => {
    return (
        <div className="w-full h-14 flex  border-2 rounded-full p-1">
        {[...Array(8)].map((_, index) => (
          <button
            key={index}
            className="flex-1  bg-blue-500 text-white font-semibold hover:bg-blue-600 transition duration-300 ease-in-out border-r border-white last:border-r-0 rounded-full cursor-pointer"
          >
            Button {index + 1}
          </button>
        ))}
      </div>
    );
};

export default ProgressButton;