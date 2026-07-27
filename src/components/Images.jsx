import { useEffect, useRef } from "react";
import { useTheme } from '../context/ThemeContext';
import studentTaskList from "../assets/screenshots/student-task-list-1.png";
import reactStudentList from "../assets/screenshots/student-task-react.png";
import vanta from "../assets/screenshots/vanta-1.png";
import shop from "../assets/screenshots/jadeys-1.png";
import { FaCss3, FaHtml5, FaJava, FaGit } from "react-icons/fa";
import { VscCode } from 'react-icons/vsc';
import { IoLogoJavascript } from "react-icons/io";
import { RiTailwindCssFill } from "react-icons/ri";
import { GrMysql } from "react-icons/gr";


export function Images({ setProjectNumber }) {
  const { theme } = useTheme();
  // const images = [
  //   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQG6IHwMzND7z8Ztasmil8U0hFJxlrnKenEcJECDzcLrTvm6EWXTWKwxAA&s=10",
  //   "https://www.k12digest.com/wp-content/uploads/2024/03/1-3.jpg",
  //   "https://www.k12digest.com/wp-content/uploads/2024/03/1-3.jpg",
  // ];

  const images = [{
    id: 0,
    title: 'Student Task List in React.js',
    path: reactStudentList,
    subtitle: 'Web Development',
    videoUrl: 'www.youtube.com/watch?v=FJYt50AA5oo',
    status: 'On going',
    tools: [{
      html: <FaHtml5 color="#E34F26" />,
      css: <RiTailwindCssFill color='#22D3EE' />,
      js: <IoLogoJavascript color='#F7DF1E' />,
      editor: <VscCode color='#0065A9' />,
      git: <FaGit color='#E34F26' />
    }]
  }, {
    id: 1,
    title: 'Vanta',
    path: vanta,
    subtitle: 'E-Commerce Website',
    status: 'Paused',
    tools: [{
      html: <FaHtml5 color="#E34F26" />,
      css: <RiTailwindCssFill color='#22D3EE' />,
      js: <IoLogoJavascript color='#F7DF1E' />
    }]
  }, {
    id: 2,
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
    id: 3,
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

  function handleClick(url) {

  }

  return (
    <>
      {images.map((image, index) => (
        <div key={image.id} className={`border-dashed border border-gray-400 rounded-md shadow-md tracking-tighter`}>
          {image.videoUrl ?
            <a href="https://student-task-list.vercel.app/" target="_blank" className="hover:cursor-pointer" >
              <img className="object-fill p-5 "
                data-index={index}
                src={image.path}
                ref={(el) => (imgRefs.current[index] = el)}
              />
            </a>

            : <div className="" >
              <img className="object-fill p-5 "
                data-index={index}
                src={image.path}
                ref={(el) => (imgRefs.current[index] = el)}
              />
            </div>
          }


          <div className={`flex gap-2 justify-between p-2 font-roboto-condensed font-semibold border-dashed border-gray-400 border-b border-t`}>
            <p>{image.title} - {image.subtitle}</p>
            <p>{image.status}</p>
          </div>
          <div className="flex items-center justify-between p-2">
            <a href={`http://${image.videoUrl}`} className={`${image.videoUrl ? "block" : "hidden"} text-sm font-normal`}>Development Video</a>
            {image.tools.map((tool, idx) => (
              <div key={idx} className=" flex gap-1 items-center"
              >

                <p>{tool.html} </p>
                <p>{tool.css}</p>
                <p>{tool.js}</p>
                <p>{tool.editor}</p>
                <p>{tool.git}</p>
              </div>
            ))}
          </div>
        </div>

      ))}
    </>
  );
}