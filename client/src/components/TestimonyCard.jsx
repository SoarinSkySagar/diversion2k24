import React from "react";

export default function TestimonyCard() {
  const imageSrc= 'https://img.freepik.com/free-vector/maths-online-course-economics-university-department-internet-classes-accounting-lessons-bookkeeping-mathematics-textbooks-digital-archive_335657-3270.jpg?w=740&t=st=1707027241~exp=1707027841~hmac=63f0532be3508b10b8fb2e2514390795a83b1a3cd96642a659b5408625ee0163';
  const title= 'pqr';
  const content= 'idk';
  const author= 'abc';
  return (
    <div className="max-w-md py-4 px-8 m-4 h-[272px] bg-white rounded-xl border border-black">
      <div className="flex flex-row justify-between items-center">
        <img
          src={imageSrc}
          alt={author}
          className="w-20 h-20 object-cover rounded-full"
        />
        <h2 className="text-gray-800 h-20 w-64 flex items-center text-2xl">
          {title}
        </h2>
      </div>
      <div>
        <p className="mt-8 h-[96px] text-gray-600">{content}</p>
      </div>
      <div className="flex justify-end">
        <a href="#" className="text-xl font-medium text-indigo-500">
          {author}
        </a>
      </div>
    </div>
  );
}
