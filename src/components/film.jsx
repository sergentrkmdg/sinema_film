import React from 'react'
import filmData from '../filmData';     
import {CgMathMinus,CgMathPlus} from "react-icons/cg";

function Film({film}) {

  return (
    
      <div className="group relative overflow-hidden basis-1/3 md:basis-1/4 lg:basis-1/3 "> 
           { /*  <!--Image--> */}
            <img src={film.image} className="group-hover:scale-110 group-hover:opacity-50 duration-500" />
            { /*  <!--Image Detail Container--> */}
            <div className="absolute  bottom-1">
            <h3 className="text-gega-grey px-3 group-hover:text-gega-melon group-hover:mb-2 duration-500">{film.name}</h3>
            <p className="text-xs opacity-0 px-3 group-hover:opacity-100 group-hover:mb-10 duration-500 text-gega-grey">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione, exercitationem?</p>  
            { /*  <!--Icons Container--> */}
            <div className="absolute flex space-x-8 text-gega-grey opacity-0 px-3 -bottom-2 group-hover:bottom-12 group-hover:opacity-100 duration-500" >   
              <a className="hover:text-gega-red" href="#"><i className="fa-solid fa-play"></i></a>
              <a className="hover:text-gega-red" href="#"><i className="fa-solid fa-arrow-right"></i></a>           
            </div>
             <div className='relative w-8/10 '>
               <button className='relative w-full p-2 bg-red-600 text-gega-grey border border-gega-red rounded-full '>
                Sepete Ekle
               </button>
               <div className='relative flex space-x-5 items-center '>
                <CgMathMinus size={25} className='cursor-pointer border rounded-full p-1 ' />
                <span className='text-2xl'>0</span>
                <CgMathPlus size={25} className='cursor-pointer border rounded-full p-1 '/>
               </div> 
              </div>        
            </div>
         </div>         
  
  )
}

export default Film