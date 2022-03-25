import React, { useState } from "react";
import "./App.css";
const DragAndDrop = () => {
  const [draggable, setdraggable] = useState([
    {
      src: "https://images.unsplash.com/photo-1530517903273-3d60130ce0de?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=686&q=80",
      name: "Lotus",
    },
    {
      src: "https://images.unsplash.com/photo-1597826368522-9f4cb5a6ba48?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1978&q=80",
      name: "Rose",
    },
    {
      src: "https://images.unsplash.com/photo-1503652601-557d07733ddc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHJvc2VzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      name: "BasketOfRoses",
    },
    {
      src: "https://images.unsplash.com/photo-1594797075457-5a7c3d28a648?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=689&q=80",
      name: "Sunflowdiver",
    },
    {
        src: "https://images.unsplash.com/photo-1623171404570-1d196759fe20?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8amFzbWluZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
        name:"Jasmine",
    },
    {
        src:"https://images.unsplash.com/photo-1613899697749-0a46140e1166?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8bWFyaWdvbGR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
        name:"Marigold"
    }
  ]);
  const [droppable, setdroppable] = useState([]);

  const onDragStart = (e, id) => {
    e.dataTransfer.setData("id", id);

    console.log("dragStart:", id);
  };

  const onDragOver = (e) => {
    e.preventDefault();
    console.log("DragOver");
  };

  const onDrop = (e) => {
    e.preventDefault();
    let id = e.dataTransfer.getData("id");
    let currentData = draggable.find((item) => item.name == id);
    let filteredArr = [...draggable].filter((item) => item.name != id);

    let newArr = [...droppable].concat(currentData);

    console.log(currentData, filteredArr, newArr);
    setdraggable(filteredArr);
    setdroppable(newArr);
    console.log("Drop", id);
  };

  return (
    <div>
      <h1>Drag and Drop</h1>
      <div className="container">
        <div className="left-container">
          <h2>Images</h2>
          <div id="dragLocation">
            {draggable.map((index) => (
              <img
                src={index.src}
                key={index.src}
                alt="Image"
                draggable="true"
                onDragStart={(e) => onDragStart(e, index.name)}
              />
            ))}
          </div>
        </div>

        <div
          id="dropLocation"
          className="right-container"
          onDragOver={(e) => {
            onDragOver(e);
          }}
          onDrop={(e) => {
            onDrop(e, "dropLocation");
          }}
        >
          <h2>Drag the Images Here</h2>
          {droppable.map((index) => (
            <img
              src={index.src}
              key={index.src}
              alt="Image"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DragAndDrop;