import React, { useState } from "react";
import SubjectSelect from "../components/SubjectSelect";

export default function TeacherDetails() {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [selectedQualification, setselectedQualification] = useState("");

  const handleQualification = (event) => {
    setselectedQualification(event.target.value);
  };

  return (
    <section>
      <h1 className="text-3xl text-center my-6 font-bold">Student Details</h1>
      <form className="flex flex-col gap-4 justify-center flex-wrap max-w-md m-auto px-6 py-12">
        <h1 className=" font-semibold text-white text-lg">Username</h1>
        <input
          type="text"
          id="name"
          value={name}
          // disabled={!changeDetail}
          // onChange={onChange}
          placeholder="Username"
          className="w-full px-4 py-2 text-xl text-black bg-white rounded-xl border-none transition ease-in-out"
        />
        <h1 className=" font-semibold text-white text-lg">Phone Number</h1>
        <input
          placeholder="Number"
          value={number}
          required
          min={1000000000}
          max={10000000000}
          // onChange={(e) => setNumber(e.target.value)}
          type="number"
          className="w-full mb-4 px-4 py-2 text-xl text-gray-600 bg-white rounded-xl border transition ease-in-out"
        />
        <h1 className=" font-semibold text-white text-lg">Location</h1>
        <input
          type="text"
          id="name"
          // value={name}
          // disabled={!changeDetail}
          // onChange={onChange}
          placeholder="Location"
          className="w-full px-4 py-2 text-xl text-black bg-white rounded-xl border-none transition ease-in-out"
        />
        <h1 className=" font-semibold text-white text-lg">Standard</h1>
        <select
          id="dropdown"
          value={selectedQualification}
          onChange={handleQualification}
          className="w-full px-4 py-2 text-xl text-black bg-white rounded-xl border-none transition ease-in-out"
        >
          <option value="">Choose an option</option>
          <option value="option1">Class 8</option>
          <option value="option1">Class 9</option>
          <option value="option1">Class 10</option>
          <option value="option1">Class 11</option>
          <option value="option1">Class 12</option>
        </select>
        {/* <h1 className=" font-semibold text-white text-lg">Class Subject</h1>
        <SubjectSelect/> */}
        <button
          type="submit"
          className="w-full px-4 py-2 text-xl text-white bg-black rounded-xl border-none shadow-lg hover:text-black hover:bg-white transition duration-200 ease-in-out"
        >
          SUBMIT
        </button>
      </form>
    </section>
  );
}