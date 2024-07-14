import { useState } from "react";
import img1 from "../src/assets/img1.avif";
import img2 from "../src/assets/img2.avif";
import img3 from "../src/assets/img3.avif";
import img4 from "../src/assets/img4.avif";
import img5 from "../src/assets/img5.avif";
import { flushSync } from "react-dom";

const peoples = [
  {
    id: "kmlemlk",
    name: "Leslie Alexander",
    email: "leslie.alexander@example.com",
    img: img1,
    role: "Co-Founder / CEO",
    heading: "Expert in Customer Relations",
    info: "Leslie Alexander is a seasoned Customer Relations Manager at ExampleCorp, bringing over a decade of experience in managing client relationships and enhancing customer satisfaction.",
  },
  {
    id: "kdndno3i",
    name: "Michael Foster",
    email: "michael.foster@example.com",
    img: img2,
    role: "Co-Founder / CTO",
    heading: "Leading Technical Excellence",
    info: "Michael Foster is the Lead Software Engineer at TechSolutions, with a strong background in developing cutting-edge software solutions.",
  },
  {
    id: "oppkeo",
    name: "Dries Vincent",
    email: "dries.vincent@example.com",
    img: img3,
    role: "Business Relations",
    heading: "Design Visionary",
    info: "Dries Vincent is the Director of Product Design at CreativeWorks, where he leads a talented team in crafting intuitive and aesthetically pleasing user experiences.",
  },
  {
    id: "klepokp2",
    name: "Lindsay Walton",
    email: "lindsay.walton@example.com",
    img: img4,
    role: "Front-end Developer",
    heading: "Marketing Innovator",
    info: "Lindsay Walton is the Marketing Director at BrightIdeas, bringing a fresh and innovative approach to the company's marketing strategies",
  },
  {
    id: "kdnnkdkd",
    name: "Tom cook",
    email: "leslie.alexander@example.com",
    img: img5,
    role: "Director of Product",
    heading: "Driving Innovation Forward",
    info: "Tim Cook is the Chief Executive Officer of Apple Inc., succeeding Steve Jobs in 2011. He has been with Apple since 1998, initially overseeing worldwide operations",
  },
];

function App() {
  const [selectedPerson, setPerson] = useState(null);
  const [isInfoCard, setIsInfoCard] = useState(false);

  function makeTransition(transition) {
    if (document.startViewTransition) {
      document.startViewTransition(() => {
        flushSync(() => {
          transition();
        });
      });
    } else {
      transition();
    }
  }

  const handleCardClose = () => {
    makeTransition(() => {
      setPerson(null);
      setIsInfoCard(false);
    });
  };

  const handlePersonSelect = (id) => {
    const person = peoples.find((person) => person.id === id);
    makeTransition(() => {
      if (person) {
        setPerson(person);
        setIsInfoCard(true);
      }
    });
  };

  return (
    <div className="h-screen w-full grid place-items-center ">
      <ul className="max-w-[800px] divide-y w-full mx-auto ">
        {peoples.map((person, i) => {
          return (
            <>
              {selectedPerson?.id !== person.id && (
                <li
                  key={i}
                  onClick={() => handlePersonSelect(person.id)}
                  style={{ viewTransitionName: `person-${person.id}` }}
                  className="group   flex items-center py-4 px-3 first:rounded-xl last:rounded-xl hover:bg-gray-50 transition-all duration-500 cursor-pointer"
                >
                  <div
                    style={{ viewTransitionName: `img-${person.id}` }}
                    className="size-[3rem] rounded-full overflow-hidden"
                  >
                    <img
                      src={person.img}
                      alt=""
                      className=" rounded-full scale-110 group-hover:scale-100 transition-all duration-300 w-full h-full"
                    />
                  </div>
                  <div className="ml-3">
                    <h1 className="font-medium  text-sm">{person.name}</h1>
                    <p className="text-sm text-gray-400 mt-1.5">
                      {person.email}
                    </p>
                  </div>
                  <div className="ml-auto">
                    <h1 className="text-sm">{person.role}</h1>
                    <p className="text-sm text-gray-400 mt-1.5">
                      Last seen 3h ago
                    </p>
                  </div>
                </li>
              )}
            </>
          );
        })}
      </ul>
      {isInfoCard && (
        <div
          onClick={handleCardClose}
          className="fixed top-0 left-0 h-screen z-30 w-full  bg-white/30 backdrop-blur-[1px] "
        />
      )}
      {isInfoCard && (
        <div
          style={{ viewTransitionName: `person-${selectedPerson.id}` }}
          className={`item fixed shadow-xl rounded-lg z-50  w-[28rem] bg-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-4`}
        >
          <h1 className="font-medium text-center">{selectedPerson?.heading}</h1>
          <p className="text-center mt-6 text-lg text-gray-500 italic">
            {` "${selectedPerson?.info}"`}
          </p>
          <div className="flex items-center mt-8 gap-x-3 justify-center">
            <div
              style={{ viewTransitionName: `img-${selectedPerson.id}` }}
              className="size-[3rem] rounded-full"
            >
              <img
                src={selectedPerson?.img}
                alt=""
                className="w-full h-full rounded-full object-cover"
              />
            </div>
            <div>
              <h1 className="font-medium text-sm">{selectedPerson?.name}</h1>
              <p className="text-gray-500 text-sm">{selectedPerson?.role}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
