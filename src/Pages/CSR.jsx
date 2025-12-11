import React from 'react'
import CSRHero from '../components/sections/CSR/CSRHero'
import AboutCSR from '../components/sections/CSR/AboutCSR'
import Philosophy from '../components/sections/CSR/Philosophy'
import Listing from '../components/sections/CSR/Listing'
import ManagingDirectorSection from '../components/sections/CSR/ManagingDirectorSection'
import GetinTouch from '../components/sections/CSR/GetinTouch'

const CSR = () => {
  return (
   <>
   <CSRHero/>
   <AboutCSR/>
   <Philosophy/>
   <Listing/>
   <ManagingDirectorSection/>
   <GetinTouch/>
   </>
  )
}

export default CSR