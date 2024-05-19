function Images() {
    return (
      <>
  
       <div className="grid grid-cols-3 gap-4 mx-12 my-8">
          <div className=" h-[550px]"> <img src="../../public/imgAbout/7.jpeg" alt="" className=" h-full w-full object-cover object-center"/></div>
          <div><p className=" font-medium text-lg ">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum?</p> </div>
          <div className=" h-[200px] hover:h-[550px] transition-all"> <img src="../../public/imgAbout/8.jpeg" alt="" className=" h-full w-full object-cover object-center"/></div>
        </div>
      </>
    );
  }
  
  export default Images;