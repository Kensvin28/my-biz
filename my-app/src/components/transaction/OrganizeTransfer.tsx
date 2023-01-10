import React, {useState} from 'react';
import Header from "../Header";
// @ts-ignore
// import { Draggable, Droppable } from 'react-drag-and-drop';

function OrganizeTransfer() {
    const [dragItem, setDragItem]: any = useState();
    const [list, setList] = useState([
        "The Call Of Ktulu",
        "For Whom The Bell Tolls",
        "The Day That Never Comes",
        "The Memory Remains",
        "Confusion",
        "Moth Into Flame",
        "The Outlaw Torn",
        "No Leaf Clover",
        "Halo on Fire",
    ]);
    const handleDragStart = (index: number) => {
        setDragItem(index);
    };

    const handleDragEnter = (e: any, index: number) => {
        e.target.style.backgroundColor = "#336699";
        const newList = [...list];
        const item = newList[dragItem];
        newList.splice(dragItem, 1);
        newList.splice(index, 0, item);
        setDragItem(index);
        setList(newList);
    };

    const handleDragLeave = (e: React.DragEvent<HTMLLIElement>) => {
        const element = e.target as HTMLLIElement;
        element.style.backgroundColor = "white";
    };

    const handleDrop = (e: React.DragEvent<HTMLLIElement>) => {
        const element = e.target as HTMLLIElement;
        element.style.backgroundColor = "white";
    };


    return (
        <div>
            <Header/>
            <ul className="dnd">
                {list &&
                    list.map((item, index) => (
                        <li
                            draggable
                            key={index}
                            onDragStart={() => handleDragStart(index)}
                            onDragEnter={(e) => handleDragEnter(e, index)}
                            onDragLeave={(e) => handleDragLeave(e)}
                            onDrop={(e) => handleDrop(e)}
                            onDragOver={(e) => e.preventDefault()}
                        >
                            {item}
                        </li>
                    ))}
            </ul>
        </div>
    );
}

export default OrganizeTransfer;