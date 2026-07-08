import { useEffect, useRef } from "react";

export function Images({ setProjectNumber }) {
  // const images = [
  //   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQG6IHwMzND7z8Ztasmil8U0hFJxlrnKenEcJECDzcLrTvm6EWXTWKwxAA&s=10",
  //   "https://www.k12digest.com/wp-content/uploads/2024/03/1-3.jpg",
  //   "https://www.k12digest.com/wp-content/uploads/2024/03/1-3.jpg",
  // ];

  const images = [{
    id: 0,
    title: 'Vanta',
    path: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQG6IHwMzND7z8Ztasmil8U0hFJxlrnKenEcJECDzcLrTvm6EWXTWKwxAA&s=10"
  }, {
    id: 0,
    title: 'Student Task List',
    path: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQG6IHwMzND7z8Ztasmil8U0hFJxlrnKenEcJECDzcLrTvm6EWXTWKwxAA&s=10"
  }]

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
        threshold: 0.5,
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
        <div key={image.id} className="">
          <img className="min-h-1/2 w-full"
            data-index={index}
            src={image.path}
            ref={(el) => (imgRefs.current[index] = el)}
          />
          <p>{image.title}</p>
        </div>

      ))}
    </>
  );
}