import { useState, useEffect } from "react";

const classes = [
  {
    name: "Kelas SI",
    students: [
      { id: 1, name: "Andi", img: "/pp1.jpeg" },
      { id: 2, name: "Budi", img: "/pp2.jpeg" },
      { id: 3, name: "Citra", img: "/pp3.jpeg" },
      { id: 4, name: "Dian", img: "/pp4.jpeg" },
      { id: 5, name: "Eka", img: "/pp5.jpeg" },
    ],
  },
  {
    name: "Kelas KA",
    students: [
      { id: 6, name: "Fajar", img: "/pp5.jpeg" },
      { id: 7, name: "Gita", img: "/pp3.jpeg" },
      { id: 8, name: "Hadi", img: "/pp2.jpeg" },
      { id: 9, name: "Indah", img: "/pp1.jpeg" },
      { id: 10, name: "Joko", img: "/pp4.jpeg" },
    ],
  },
  {
    name: "Kelas BD",
    students: [
      { id: 11, name: "Kiki", img: "/pp1.jpeg" },
      { id: 12, name: "Lina", img: "/pp3.jpeg" },
      { id: 13, name: "Miko", img: "/pp5.jpeg" },
      { id: 14, name: "Nia", img: "/pp4.jpeg" },
      { id: 15, name: "Omar", img: "/pp2.jpeg" },
    ],
  },
];

export default function SkripsiOnline() {
  return (
    <div className="min-h-screen p-6 bg-gray-100">
      {/* Navbar */}
      <nav className="fixed top-0 w-full bg-blue-600 text-white p-4 text-center text-lg font-bold z-50">
        Classmate
      </nav>

      <div className="max-w-5xl mx-auto mt-24 space-y-8">
        {classes.map((classItem, index) => (
          <div key={index} className="bg-white shadow-md rounded-lg p-4">
            <h2 className="text-xl font-bold text-center mb-4">{classItem.name}</h2>
            <div className="flex justify-center gap-4 flex-wrap">
              {classItem.students.map((student) => (
                <div key={student.id} className="text-center">
                  <img
                    src={student.img}
                    alt={student.name}
                    className="w-20 h-20 rounded-full object-cover border-2 border-gray-300"
                  />
                  <p className="mt-2 text-sm font-semibold">{student.name}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
