import React from 'react'
import { Link } from 'react-router-dom'

const GetinTouch = () => {
  return (
  <>
  <div className='bg-[#F4F4F4]'>
    {/* PURPLE CTA STRIP */}
        <div className="bg-[#3C2B98] rounded-t-[48px] rounded-b-none px-6 sm:px-10 py-10 sm:py-12 text-center">
          
          <h3 className="text-white text-[30px] sm:text-[26px] md:text-[36px] font-medium leading-snug">
            Start your{" "}
            <span className="text-[#F3D32C] font-bold">
              Dream Project Today.
            </span>
          </h3>

          <p className="mt-3 text-[12px] sm:text-[14px] text-white/90 max-w-[600px] mx-auto leading-relaxed">
            Partner with Apex Constructions for world-class results.
          </p>

        <Link to="/contact">
         <button
            className="
                mt-5 inline-flex items-center justify-center px-7 py-2.5 
                rounded-t-[10px] rounded-b-none
                bg-[#F3D32C] text-[#3C2B98] text-[14px] font-semibold 
                hover:bg-[#FFE45B] transition
            "
            >
            Get in Touch
         </button>
         </Link>


        </div>
   </div>
  </>
  )
}

export default GetinTouch