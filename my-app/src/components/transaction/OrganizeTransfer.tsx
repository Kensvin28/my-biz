import React, {useState} from 'react';
import Header from "../Header";
// @ts-ignore
// import { Draggable, Droppable } from 'react-drag-and-drop';

function OrganizeTransfer() {
    const [dragItem, setDragItem]: any = useState();
    const [categoryList, setCategoryList] = useState([
        "Food Supplier",
        "Utensil Supplier",
        "Rent"
    ]);
    const [inputCategory, setInputCategory] = useState('');

    const handleDragStart = (index: number) => {
        setDragItem(index);
    };

    const handleDragEnter = (e: any, index: number) => {
        e.target.style.backgroundColor = "LightGray";
        const newList = [...categoryList];
        const item = newList[dragItem];
        newList.splice(dragItem, 1);
        newList.splice(index, 0, item);
        setDragItem(index);
        setCategoryList(newList);
    };

    const handleDragLeave = (e: React.DragEvent<HTMLLIElement>) => {
        const element = e.target as HTMLLIElement;
        element.style.backgroundColor = "white";
    };

    const handleDrop = (e: React.DragEvent<HTMLLIElement>) => {
        const element = e.target as HTMLLIElement;
        element.style.backgroundColor = "white";
    };


    const handleAddition = (event: { target: { value: React.SetStateAction<string>; }; }) => {
        setInputCategory(event.target.value);
    }

    const addCategory = (inputCategory: any) => {
        setCategoryList((state)=>[
            ...state,
            inputCategory
        ]);
        console.log(categoryList);
    }

    const deleteCategory = (category: string) => {
        const updatedList = categoryList.filter((item) => item !== category);
        setCategoryList(updatedList);
    };
    return (
        <div>
            <Header/>
            <input className="form-control
        inline-block
        w-80
        px-3
        py-1.5
        my-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                   type="text" id="category" name="category"
                   onChange={handleAddition}/>
            <button
                onClick={()=>addCategory(inputCategory)}
                type="submit"
                className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Add Category
            </button>
            <ul className="dnd">
                {categoryList &&
                    categoryList.map((item, index) => (
                        <li
                            draggable
                            className={"p-6 border-gray-400 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none focus:ring-0 active:bg-gray-800"}
                            key={index}
                            onDragStart={() => handleDragStart(index)}
                            onDragEnter={(e) => handleDragEnter(e, index)}
                            onDragLeave={(e) => handleDragLeave(e)}
                            onDrop={(e) => handleDrop(e)}
                            onDragOver={(e) => e.preventDefault()}
                        >
                            <ul className={"flex flex-row justify-between"}>
                                <h5>{item}</h5>
                                <button onClick={()=>deleteCategory(item)}>
                                    <img className="h-6" src={"https://img.icons8.com/windows/512/trash.png"}></img>
                                </button>
                            </ul>
                        </li>
                    ))}
            </ul>
        </div>
    );
}

export default OrganizeTransfer;