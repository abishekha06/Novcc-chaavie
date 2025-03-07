import Layout from "../../../components/layout";
import Progress from "../../cro-list/components/progress";
import ProgressButton from "../../cro-list/components/progress-buttons";


const ContainerAllotment = () => {
  return (
    <Layout>


      <div className='flex flex-col p-6 border-1 border-gray-200 h-full bg-white rounded-2xl shadow-xl '>
       
     
      <div className='h-32 flex flex-col justify-between'>
     
      <Progress/>
      <ProgressButton />

      </div>

      <div className="h-full p-2 bg-amber-950 overflow-y-scroll custom-scrollbar">
  

      
<div className="bg-amber-800 h-[44rem]">
    Page 2
</div>


         
     

      </div>

    
    </div>
    
    
    
    
    
    </Layout>
  );
};

export default ContainerAllotment;