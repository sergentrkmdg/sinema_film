import React from 'react'

function Post() {
  return (
    
    <div className="py-24 bg-black text-gega-grey">
      {/*<!--Container-->*/} 
      <div className="container px-10 lg:px-0">
       {/* <!--Title-->*/}
        <h2 className="text-gega-red"><a href="#">Popular Posts</a> </h2>
        
        {/*<!--Grid Area-->*/}
        <div className="grid grid-cols-6 gap-10">
         {/*<!--Item 1-->*/} 
          <div className="col-span-6 md:col-span-3 border border-gega-red">
          {/* <!--Item 1 Header -->*/} 
            <div className="border-b border-gega-red p-4 flex items-center justify-between">
              <h3>ACCUSANTIUM DOLOREMQUE LAUDANT...</h3>
              <img src="images/userava1.jpg" alt="" className="rounded-full "/>
            </div>
           {/*<!--Item 1 Para-->*/} 
            <p className="p-4 text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, consequatur
              temporibus dolorem nihil
              excepturi quos. Amet cupiditate aperiam temporibus perferendis?</p>
            {/*<!--Item 1 Footer-->*/}
            <div className="border-t border-gega-red p-4 flex items-center justify-end space-x-4 font-bold font-gemunu text-xs">
              <p>ON DEC 17, 2022</p>
              <div className="flex items-center justify-center space-x-1">
                <i className="fa-regular fa-comment"></i>
                <p>12</p>
                <i className="fa-regular fa-heart"></i>
                <p>09</p>
              </div>
            </div>
          </div>
            {/*<!--Item 2-->*/}
            <div className="col-span-6 md:col-span-3 border border-gega-red">
             {/*<!--Item 2 Header -->*/} 
              <div className="border-b border-gega-red p-4 flex items-center justify-between">
                <h3>ACCUSANTIUM DOLOREMQUE LAUDANT...</h3>
                <img src="images/userava1.jpg" alt="" className="rounded-full "/>
              </div>
             {/*<!--Item 2 Para-->*/} 
              <p className="p-4 text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, consequatur
                temporibus dolorem nihil
                excepturi quos. Amet cupiditate aperiam temporibus perferendis?</p>
              {/*<!--Item 2 Footer-->*/}
              <div className="border-t border-gega-red p-4 flex items-center justify-end space-x-4 font-bold font-gemunu text-xs">
                <p>ON DEC 17, 2022</p>
                <div className="flex items-center justify-center space-x-1">
                  <i className="fa-regular fa-comment"></i>
                  <p>12</p>
                  <i className="fa-regular fa-heart"></i>
                  <p>09</p>
                </div>
              </div>
            </div>
              {/*<!--Item 3-->*/}
          <div className="col-span-6 md:col-span-3 lg:col-span-2 border border-gega-red">
            {/*<!--Item 3 Header -->*/}
            <div className="border-b border-gega-red p-4 flex items-center justify-between">
              <h3>ACCUSANTIUM DOLOREMQUE LAUDANT...</h3>
              <img src="images/userava1.jpg" alt="" className="rounded-full "/>
            </div>
           {/*<!--Item 3 Para-->*/} 
            <p className="p-4 text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, consequatur
              temporibus dolorem nihil
              excepturi quos. Amet cupiditate aperiam temporibus perferendis?</p>
            {/*<!--Item 3 Footer-->*/}
            <div className="border-t border-gega-red p-4 flex items-center justify-end space-x-4 font-bold font-gemunu text-xs">
              <p>ON DEC 17, 2022</p>
              <div className="flex items-center justify-center space-x-1">
                <i className="fa-regular fa-comment"></i>
                <p>12</p>
                <i className="fa-regular fa-heart"></i>
                <p>09</p>
              </div>
            </div>
          </div>
           {/*<!--Item 4-->*/} 
            <div className="col-span-6 md:col-span-3 lg:col-span-2 border border-gega-red">
            {/*<!--Item 4 Header -->*/}  
              <div className="border-b border-gega-red p-4 flex items-center justify-between">
                <h3>ACCUSANTIUM DOLOREMQUE LAUDANT...</h3>
                <img src="images/userava1.jpg" alt="" className="rounded-full "/>
              </div>
             {/*<!--Item 4 Para-->*/} 
              <p className="p-4 text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, consequatur
                temporibus dolorem nihil
                excepturi quos. Amet cupiditate aperiam temporibus perferendis?</p>
             {/* <!--Item 4 Footer-->*/}
              <div className="border-t border-gega-red p-4 flex items-center justify-end space-x-4 font-bold font-gemunu text-xs">
                <p>ON DEC 17, 2022</p>
                <div className="flex items-center justify-center space-x-1">
                  <i className="fa-regular fa-comment"></i>
                  <p>12</p>
                  <i className="fa-regular fa-heart"></i>
                  <p>09</p>
                </div>
              </div>
            </div>
            {/*<!--Item 5-->*/}  
          <div className="hidden lg:block lg:col-span-2 border border-gega-red">
           {/*  <!--Item 5 Header -->*/}
            <div className="border-b border-gega-red p-4 flex items-center justify-between">
              <h3>ACCUSANTIUM DOLOREMQUE LAUDANT...</h3>
              <img src="images/userava1.jpg" alt="" className="rounded-full "/>
            </div>
            {/*<!--Item 5 Para-->*/}
            <p className="p-4 text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, consequatur
              temporibus dolorem nihil
              excepturi quos. Amet cupiditate aperiam temporibus perferendis?</p>
            {/*<!--Item 5 Footer-->*/}
            <div className="border-t border-gega-red p-4 flex items-center justify-end space-x-4 font-bold font-gemunu text-xs">
              <p>ON DEC 17, 2022</p>
              <div className="flex items-center justify-center space-x-1">
                <i className="fa-regular fa-comment"></i>
                <p>12</p>
                <i className="fa-regular fa-heart"></i>
                <p>09</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Post