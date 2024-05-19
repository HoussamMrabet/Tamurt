const FirstAbout = () => {
    return (
        <>
        <div className="mx-12 my-8">
                <h1 className="text-6xl font-bold"> BIOMIMICRY </h1>
            <div className="my-8"> 
                <p className="font-medium text-lg">Lorem ipsum</p>
                <p className="font-medium text-lg ">Arcu Purus Ultrices Nibh Est Nunc Mattis Senectus Vitae.</p>
            </div>
        </div>
        <div className="mx-12 my-8 grid grid-cols-2 gap-4">
            <img className="float-left  h-[500px] w-full object-cover object-center" src="../../public/imgAbout/1.jpeg" alt="Pattern 1" />
            <img className=" float-right h-[600px] w-full object-cover object-center" src="../../public/imgAbout/2.jpeg" alt="Pattern 2" />
            <h2 className=" text-5xl font-bold relative top-[-70px]">Patterns</h2>
</div>
        <div className="grid grid-cols-2 gap-4 mx-12 relative top-[-70px] ">
            <div>
                <p className=" font-medium text-lg ">Lorem ipsum dolor sit</p> 
                <p  className=" font-medium text-lg">amet consectetur adipisicing elit. Laborum? amet consectetur adipisicing elit. Laborum?</p>
            </div>
            <div> 
                <img src="../../public/imgAbout/7.jpeg" alt="" className=" float-right h-[300px] w-[400px] object-cover object-center"/>
            </div>
        </div>
        <div className="flex justify-between mx-12 relative top-[-50px] space-x-10">
            <div> 
                <img src="../../public/imgAbout/8.jpeg" alt="" className=" float-left h-[600px] w-[1200px] object-cover object-center"/>
            </div>
            <div>
                <h1 className=" text-5xl font-bold  ">Materials</h1> 
                <p  className=" font-medium text-lg">amet consectetur adipisicing elit. Laborum? amet consectetur adipisicing elit. Laborum?</p>
            </div>
        </div>
        <div className="mx-12 top-[-40px] flex justify-between relative">
            <img className="float-left  h-[400px] w-[300px] object-cover object-center" src="../../public/imgAbout/1.jpeg" alt="Pattern 1" />
            <img className="float-right h-[400px] w-[600px] object-cover object-center" src="../../public/imgAbout/2.jpeg" alt="Pattern 2" />
        </div>
        <div className="grid grid-cols-2 gap-4 mx-12 top-[-30px] relative">
            <div>
                <h1 className=" text-5xl font-bold ">Intellect</h1> 
                <p  className=" font-medium text-lg">amet consectetur adipisicing elit. Laborum? amet consectetur adipisicing elit. Laborum?</p>
            </div>
            <div> 
                <img src="../../public/imgAbout/8.jpeg" alt="" className=" float-right h-[400px] w-[900px] object-cover object-center"/>
            </div>
        </div>
        <div className="mx-12 top-[-10px] flex justify-between relative">
            <img className=" h-[500px] w-[850px] object-cover object-center" src="../../public/imgAbout/1.jpeg" alt="Pattern 1" />
            <img src="../../public/imgAbout/7.jpeg" alt="" className=" float-right h-[350px] w-[500px] object-cover object-center "/>
        </div>
  
        
       
        </>
    );
    };

    export default FirstAbout;