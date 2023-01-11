import React, {useState} from 'react';
type Props = {
    showModal: boolean;
    setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}
function TransferList(props: Props) {
    const state = {...props};
    const [categoryList, setCategoryList] = useState([
        "Food Supplier",
        "Utensil Supplier",
        "Rent"
    ]);
    const [inputCategory, setInputCategory] = useState('');


    const handleItemClick = () => {
        state.setShowModal(false);
    };
    return (
        <div>
            <ul className="dnd">
                {categoryList &&
                    categoryList.map((item, index) => (
                        <li
                            className={"p-6 border-gray-400 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none focus:ring-0 active:bg-gray-800"}
                            key={index}
                        >
                            <button onClick={handleItemClick}>
                            <ul className={"flex flex-row justify-between"}>
                                <h5>{item}</h5>
                            </ul>
                            </button>
                        </li>
                    ))}
            </ul>
        </div>
    );
}

export default TransferList;