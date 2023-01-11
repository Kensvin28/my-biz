import React, {useState} from 'react';

type Props = {
    showModal: boolean;
    setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
    selectedDestination: (account: string) => void;
}

type Item = {
    name: string,
    account: string,
    category: string
}

function TransferList(props: Props) {
    const state = {...props};
    const [categoryList, setCategoryList] = useState([
        "Food Supplier",
        "Utensil Supplier",
        "Rent",
        "Others"
    ]);
    const list = [
        {name: "Anda", account: 123819128, category: "Food Supplier"},
        {name: "Elu", account: 123819129, category: "Utensil Supplier"},
        {name: "Maneh", account: 123819121, category: "Rent"},
        {name: "Dan", account: 123819122, category: "Others"},
        {name: "Lain", account: 123819123, category: "Others"}
    ];

    //https://stackoverflow.com/a/69749252
    const [inputCategory, setInputCategory] = useState(list);
    const categorizedData = list.reduce((acc: any, current) => {
        const {name, account, category} = current;

        if (!acc[category]) {
            acc[category] = {
                items: [],
            };
        }
        acc[category].items.push({name, account});

        return acc;
    }, {});

    console.log(categorizedData);
    const handleItemClick = (account: string) => {
        state.selectedDestination(account);
        state.setShowModal(false);
    };

    return (
        <div className="flex flex-col p-3 rounded-r-lg shadow-lg max-w-sm w-full mx-auto justify-center">
            {Object.keys(categorizedData).map((key) => (
                <React.Fragment>
                    <div className={"p-2 border-gray-400"}>
                        <b>{`Category: ${key}`}</b>
                    </div>
                    <ul className="dnd">
                        {categorizedData[key].items.map((item: Item, index: number) => (
                            <li
                                className={"p-2 border-gray-400 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none focus:ring-0 active:bg-gray-800"}
                            >
                                <button className="flex justify-between w-full" onClick={() => handleItemClick(item.account)}>
                                    <span>
                                        {`${item.name}`}
                                    </span>
                                    <span>
                                        {`${item.account}`}
                                    </span>
                                </button>
                            </li>
                            ))}
                    </ul>
                </React.Fragment>
            ))}
        </div>
    );
}

export default TransferList;