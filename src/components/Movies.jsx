import React from 'react'
import {CgMathMinus,CgMathPlus} from "react-icons/cg";
import filmData from '../filmData';
import Film from './film';

const Movies = () => {

  return (
      
    <div className="py-24 bg-black">
   { /*  <!--Movies Content--> */}
    <div className="container flex flex-col lg:flex-row lg:space-x-16 space-y-8 lg:space-y-0">
    { /*   <!--Left Content--> */}
      <div className="basis-2/3 ">
      { /*  <!--Titles--> */}
        <div className="flex space-x-2 divide-x divide-gega-red divide-opacity-50 mb-8 pl-10 lg:pl-0"> 
          <h2 className="text-gega-red"><a href="#"> Latest</a></h2>
          <h2 className="text-gega-grey pl-2 hover:text-gega-red duration-500"><a href="#"> Popular</a></h2>
          <h2 className="text-gega-grey pl-2 hover:text-gega-red duration-500"><a href="#"> Best</a></h2>
        </div> 
        { /*  <!--Images Container--> */}
        <div className="flex flex-wrap">
        { /* <!--Image 1--> */}
         
        
          {
            filmData.map((film)=>(
              <Film key={film.id} film={film} />
            ))
          }
          
         
          </div>  
      </div>
      { /*   <!--Right Content-->*/}
      <div className="basis-1/3 pl-10 lg:pl-0">
      { /*   <!--Title--> */}
        <h2 className="text-gega-grey mb-8">Hot News</h2>
        { /*   <!--News Container--> */} 
        <div className="flex flex-row lg:flex-col lg:h-full lg:pb-16 justify-start lg:justify-between flex-wrap lg:flex-nowrap space-y-4 "> 
        { /*  <!--Item--> */}
          <div className="flex items-center group basis-3/4 md:basis-1/2">
          { /* <!--News Image Container--> */}
             <div className="basis-1/3 h-full">
                <img src="images/new1.jpg" className="h-full w-full object-cover" alt=""/>
             </div>
             { /* <!--Item Detail--> */}
             <div className="pl-8 basis-2/3 text-gega-grey group-hover:text-gega-melon group-hover:cursor-pointer duration-500">
              <p className="text-sm "> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores, praesentium?</p>
              <p className="text-xs tracking-tighter mt-2 font-bold font-gemunu">ON NOW 01 2022 </p>
           </div> 
          </div>  
          <div className="flex items-center group basis-3/4 md:basis-1/2">
          { /*  <!--News Image Container--> */}
             <div className="basis-1/3 h-full">
                <img src="images/new2.jpg" className="h-full w-full object-cover" alt=""/>
             </div>
             { /*  <!--Item Detail--> */}
             <div className="pl-8 basis-2/3 text-gega-grey group-hover:text-gega-melon group-hover:cursor-pointer duration-500">
              <p className="text-sm "> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores, praesentium?</p>
              <p className="text-xs tracking-tighter mt-2 font-bold font-gemunu">ON NOW 01 2022 </p>
           </div> 
          </div>  
          <div className="flex items-center group basis-3/4 md:basis-1/2">
          { /* <!--News Image Container-->*/}
             <div className="basis-1/3 h-full">
                <img src="images/new3.jpg" className="h-full w-full object-cover" alt=""/>
             </div>
             { /* <!--Item Detail-->*/}
             <div className="pl-8 basis-2/3 text-gega-grey group-hover:text-gega-melon group-hover:cursor-pointer duration-500">
              <p className="text-sm "> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores, praesentium?</p>
              <p className="text-xs tracking-tighter mt-2 font-bold font-gemunu">ON NOW 01 2022 </p>
           </div> 
          </div>  
          <div className="flex items-center group basis-3/4 md:basis-1/2">
           { /* <!--News Image Container--> */}
             <div className="basis-1/3 h-full">
                <img src="images/new4.jpg" className="h-full w-full object-cover" alt=""/>
             </div>
             {/*Item Detail*/}
             <div className="pl-8 basis-2/3 text-gega-grey group-hover:text-gega-melon group-hover:cursor-pointer duration-500">
              <p className="text-sm "> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores, praesentium?</p>
              <p className="text-xs tracking-tighter mt-2 font-bold font-gemunu">ON NOW 01 2022 </p>
           </div> 
          </div>  
          <div className="flex items-center group basis-3/4 md:basis-1/2 md:hidden lg:flex">
             { /*--News Image Container--*/}
             <div className="basis-1/3 h-full">
                <img src="images/new5.jpg" className="h-full w-full object-cover" alt=""/>
             </div>
              {/*Item Detail*/}
             <div className="pl-8 basis-2/3 text-gega-grey group-hover:text-gega-melon group-hover:cursor-pointer duration-500">
              <p className="text-sm "> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores, praesentium?</p>
              <p className="text-xs tracking-tighter mt-2 font-bold font-gemunu">ON NOW 01 2022 </p>
           </div> 
          </div>  
        </div>
      </div>
    </div>
    </div>
  )
}

export default Movies