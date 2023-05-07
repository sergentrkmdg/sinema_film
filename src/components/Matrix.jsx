import React from 'react'

function Matrix() {
  return (
    <div className="bg-gega-white">
      {/*<!--Matris Section Container-->*/}  
      <div className="container flex items-center justify-center relative pl-10 lg:pl-0 ">
        {/*<!--Left Content-->*/} 
        <div className="hidden md:block md:basis-1/3 lg:basis-1/2">
          <img src="./images/matrix.png" alt="" className="lg:absolute lg:bottom-0"/>
        </div>
          {/*<!--Right Content-->*/} 
        <div className="md:basis-2/3 lg:basis-1/2">
          {/*<!--Right Content Container-->*/}  
          <div className="flex flex-col justify-center py-10 w-3/4 md:full">
            <h3 className="tracking-wider text-gega-melon">ACTION, DRAMA, THRILLER</h3>
            <h2 className="mb-2">Matrix Reloaded</h2>
            <p className="text-sm mb-2">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore minus, eos deserunt pariatur excepturi nobis ullam explicabo fuga neque! Reprehenderit.</p>
            <h3 className="tracking-wider text-gega-red">8 wins 34 dominations</h3>
          </div>
        </div>
        {/*<!--Oldie-->*/} 
        <div className="left-10 absolute -top-6 md:-top-12 lg:left-0 w-12 h-12 md:w-24 md:h-24 bg-gega-melon rounded-full text-center flex items-center" >
          <p className="font-gemunu uppercase font-bold text-xs md:text-xl text-gega-red -rotate-45 ">Oldie & Goldie</p>
        </div>
      </div>

    </div>
  )
}

export default Matrix