import React from 'react'
import {BsFillFileCheckFill} from 'react-icons/bs'
import {FiLogOut} from 'react-icons/fi'
import {CgProfile} from 'react-icons/cg'
import { VscFeedback } from "react-icons/vsc";
import {MdOutlineHealthAndSafety} from 'react-icons/md'
import { MdChat } from "react-icons/md";
import {BsFillTelephoneFill} from 'react-icons/bs'
import {TbCheckupList} from 'react-icons/tb'
import { FaSearch } from "react-icons/fa";



export default function Dashboard() {
  return (
    <div className='px-16 py-8 overflow-hidden h-screen'>
      <div className='flex'>
        <div className='font-semibold text-black-300'>
          <div>Welcome back,</div>
          <div className='text-4xl'>Sagar Rana</div>
        </div>
        <div className='ml-auto flex items-center'>
          
          <button className={`flex items-center gap-2 bg-red-500 text-lg hover:bg-red-700 text-white font-bold py-4 px-11 ml-4 rounded-lg`}>
            <FiLogOut/> <div>Logout</div>
          </button>
        </div>
      </div>
      <div className='h-screen flex pt-8'>
      <div className='grid grid-cols-3 grid-rows-3 gap-4 w-full h-5/6'>
      <div className='col-span-2 row-span-1 rounded-2xl overflow-hidden cursor-pointer' style={{backgroundImage:"url('/teacher.jpg')", backgroundSize: "cover", backgroundPosition: "center", height: "100%"}}>
        <div className='bg-red-400 min-w-max min-h-full bg-opacity-30 text-black font-bold text-4xl flex items-center justify-center'>
                <TbCheckupList/>Your Teachers
            </div>
        </div>

        <div className='col-span-1 row-span-2 rounded-2xl overflow-hidden cursor-pointer' style={{backgroundImage:"url('/map.png')", backgroundSize: "cover", backgroundPosition: "center", height: "100%"}} onClick={() => {window.location.href='/explore'}}>
        <div className='bg-blue-600 min-w-max min-h-full bg-opacity-30 text-black font-semibold text-4xl flex items-center justify-center'>
        {/* <Link href="/dash/docfinder"> <MdOutlineHealthAndSafety/>Health Centres Nearby
      </Link> */}
      <FaSearch />
Search for Teachers
            </div>
        </div>
        <div className='col-span-1 row-span-1 bg-green-500 rounded-2xl flex items-center justify-center text-black font-semibold text-4xl'>
            <CgProfile/>Your Profile
        </div>
        <div className='col-span-1 row-span-1 overflow-hidden rounded-2xl ' style={{backgroundImage:"url('/contact.jpg')", backgroundSize: "cover", backgroundPosition: "center", height: "100%"}}>
            <div className='bg-yellow-400 min-w-max min-h-full bg-opacity-30 text-black font-bold text-4xl flex items-center justify-center'>
            <BsFillTelephoneFill/>Contact Us
            </div>
        </div>
        <div className='col-span-2 row-span-1 bg-orange-500 rounded-2xl flex items-center justify-center text-black font-semibold text-4xl'>
        <VscFeedback />
 Teacher Feedback
        </div>
        <div className='col-span-1 row-span-1 rounded-2xl bg-orange-300 flex items-center justify-center text-black font-semibold text-4xl'>
            <MdChat/>Chat
        </div> 
      </div>
    </div>
    </div>
  );
}