import { useEffect, useRef } from "react";

import studentTaskList from "../assets/screenshots/student-task-list-1.png";
import vanta from "../assets/screenshots/vanta-1.png";
import shop from "../assets/screenshots/jadeys-1.png";
import { FaCss3, FaHtml5, FaJava } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { RiTailwindCssFill } from "react-icons/ri";
import { GrMysql } from "react-icons/gr";


export function Images({ setProjectNumber }) {
  // const images = [
  //   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQG6IHwMzND7z8Ztasmil8U0hFJxlrnKenEcJECDzcLrTvm6EWXTWKwxAA&s=10",
  //   "https://www.k12digest.com/wp-content/uploads/2024/03/1-3.jpg",
  //   "https://www.k12digest.com/wp-content/uploads/2024/03/1-3.jpg",
  // ];

  const images = [{
    id: 0,
    title: 'Vanta',
    path: vanta,
    subtitle: 'E-Commerce Website',
    status: 'In Progress',
    tools: [{
      html: <FaHtml5 color="#E34F26" />,
      css: <RiTailwindCssFill color='#22D3EE' />,
      js: <IoLogoJavascript color='#F7DF1E' />
    }]
  }, {
    id: 1,
    title: 'Student Task List',
    path: studentTaskList,
    subtitle: 'Web Development',
    status: 'Finished',
    tools: [{
      html: <FaHtml5 color="#E34F26" />,
      css: <FaCss3 color='#2965f1' />,
      js: <IoLogoJavascript color='#F7DF1E' />
    }]
  }, {
    id: 2,
    title: 'Point of Sales and Reservation System',
    path: shop,
    subtitle: 'C# Windows Application Form',
    status: 'Finished',
    tools: [{
      html: <FaJava color='#F89820' />,
      css: <GrMysql color='#00758F' />
    }]
  }
  ]

  const imgRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = entry.target.dataset.index;

            setProjectNumber(
              String(Number(index) + 1).padStart(2, "0")
            );
          }
        });
      },
      {
        threshold: 1,
      }
    );

    imgRefs.current.forEach((img) => {
      if (img) observer.observe(img);
    });

    return () => {
      imgRefs.current.forEach((img) => {
        if (img) observer.unobserve(img);
      });
    };
  }, [setProjectNumber]);

  return (
    <>
      {images.map((image, index) => (
        <div key={image.id} className="border border-dashed border-gray-300 rounded-2xl shadow-md">
          <div className="border-b border-dashed border-gray-300">
            <img className="object-fill p-5 "
              data-index={index}
              src={image.path}
              ref={(el) => (imgRefs.current[index] = el)}
            />
          </div>
          <div className="flex gap-2 justify-between p-2 font-roboto-condensed font-semibold text-gray-500
          border-b border-dashed border-gray-300">
            <p>{image.title} - {image.subtitle}</p>
            <p>{image.status}</p>
          </div>
          <div className="flex items-center self-end sm:self-auto">
            {image.tools.map((tool, idx) => (
              <div key={idx} className="p-2 flex gap-1 items-center"
              >
                {tool.html}
                {tool.css}
                {tool.js}
              </div>
            ))}
          </div>
        </div>

      ))}
    </>
  );
}