import { useEffect, useRef } from "react";
import studentTaskList from "../assets/screenshots/student-task-list-1.png";
import vanta from "../assets/screenshots/vanta-1.png";
import shop from "../assets/screenshots/jadeys-1.png";


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
    status: 'In Progress'
  }, {
    id: 1,
    title: 'Student Task List',
    path: studentTaskList,
    subtitle: 'Web Development',
    status: 'Finished'
  }, {
    id: 2,
    title: 'Point of Sales and Reservation System',
    path: shop,
    subtitle: 'C# Windows Application Form',
    status: 'Finished'
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
        <div key={image.id} className="border border-dashed border-gray-300">
          <div className="border-b border-dashed border-gray-300">
            <img className="object-fill p-5 "
              data-index={index}
              src={image.path}
              ref={(el) => (imgRefs.current[index] = el)}
            />
          </div>
          <div className="flex gap-2 justify-between p-2 font-roboto-condensed font-semibold text-gray-500">
            <p>{image.title} - {image.subtitle}</p>
            <p>{image.status}</p>
          </div>
        </div>

      ))}
    </>
  );
}