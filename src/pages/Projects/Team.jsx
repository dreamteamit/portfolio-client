import { useEffect, useState } from "react";
import './Team.css';

const Team = () => {
  const [Menu, setMenu] = useState([]);
  const [items, setItems] = useState(Menu);
  const [active, setActive] = useState(false);

  useEffect(() => {
    fetch("Team.json")
      .then((res) => res.json())
      .then((data) => setMenu(data));
  }, []);

  const filterItem = (categItem) => {
    const updateItems = Menu.filter((curElem) => {
      return curElem.category === categItem;
    });

    setItems(updateItems);
    setActive(true);
  };

  return (
    <>
      <div className="container flex flex-col justify-around items-center mt-5">
        <ul className="flex justify-content-center">
          <li className="nav-item md:mr-5">
            <a
              className={active ? "nav-link" : "nav-link active"}
              href="javascrip:0;"
              onClick={() => setItems(Menu)}
            >
              All
            </a>
          </li>

          <li className="nav-item md:mr-5">
            <a
              className={active ? "nav-link" : "nav-link active"}
              href="javascrip:0;"
              onClick={() => filterItem("design")}
            >
              Design
            </a>
          </li>
          <li className="nav-item md:mr-5">
            <a
              className={active ? "nav-link" : "nav-link active"}
              href="javascrip:0;"
              onClick={() => filterItem("marketing")}
            >
              Marketing
            </a>
          </li>
          <li className="nav-item">
            <a
              className={active ? "nav-link" : "nav-link active"}
              href="javascrip:0;"
              onClick={() => filterItem("branding")}
            >
              Branding
            </a>
          </li>
        </ul>
      </div>

      <div className="container-fluid mt-4">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:gap-10">
          {items.map((elem) => {
            const { id, name, image, category } = elem;

            return (
              <div key={id} id={id}>
                <a
                  href=""
                  target="blank"
                  className="rounded bg-gray-200 flex flex-col justify-center items-center md:w-80"
                >
                  <div className="md:w-80 rounded mainImage">
                    <img className="image" src={image} alt={name} />
                  </div>

                  <div className="card-body flex flex-col justify-center items-center">
                    <h5 className="card-title mb-0 text-center font-bold text-2xl mt-5">
                      {name}
                    </h5>

                    <button className="btn  text-white bg-red-500  bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 py-1 px-5 rounded my-10">
                      {category}
                    </button>
                  </div>
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Team;
