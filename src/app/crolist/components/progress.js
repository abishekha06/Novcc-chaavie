const Progress = () => {
    return (

<div className="h-14 border-2 flex items-center w-full">
   
   <div className="bg-amber-950 h-0.5 flex items-center w-full">
        <div className="w-full flex">
        {[...Array(8)].map((_, index) => (
          <div
            key={index}
            className="flex-1 flex items-center gap-1.5 bg-blue-500/15 border-r border-white last:border-r-0"
          >

            <div className="h-4 w-4 bg-amber-600 rounded-full"></div>
            <div>jjdjd</div>
            
          </div>
        ))}
      </div>
   </div>

   </div>


    );
};

export default Progress;