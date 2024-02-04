import React from 'react';
import CustomTabs from './CustomTabs';
export default function Benefits() {
  return (
    <div id="benefits" className="bg-[#ffffff] w-screen pt-24">
      <h1 className="text-3xl pl-8">Benefits</h1>
      <div className="relative inset-0">
        <div className="flex flex-col-reverse gap-4 lg:flex-row flex-wrap items-start max-w-full m-auto py-12">
          <div className="md:w-[67vw] md:mb-6 lg:w-[50vw] mb-12 pr-12 md:pr-0">
            <img src="https://img.freepik.com/free-vector/learning-concept-illustration_114360-6186.jpg?w=740&t=st=1707027413~exp=1707028013~hmac=9629ee739e848bc6a560b27ae81228d37bd1e0a315606b4bee33820be9c5b694" alt="skin" className="sm:pr-8" />
          </div>
          <div className=" w-full m-auto lg:m-0 md:w-[67%] lg:w-[40%] lg:ml-20">
            <CustomTabs />
          </div>
        </div>   
      </div>
    </div>
  );
}