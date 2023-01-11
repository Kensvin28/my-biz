import React from 'react';
import Header from '../Header';

function TransactionHistory() {
    return (
        <div>
            <Header/>
            <div className="block p-8 rounded-lg shadow-lg bg-white w-3/4 max-w-lg mx-auto">
                <div className="w-6/7 sm:p-2 m-4 lg:p-4 m-4 bg-white shadow-md">
                    <div className="flex justify-between">
                        <span className="text-xl font-semibold">Transaction History</span>
                    </div>
                </div>

                <table className="table-auto border-separate border-spacing-x-7" id="transaction_history_table">
                    <thead className="text-center" id="transaction_history_table_head">
                        <tr>
                        <th className="w-1/6">ID</th>
                        <th className="w-1/4">Date</th>
                        <th className="w-1/4">Amount</th>
                        <th className="w-1/3">Recipient</th>
                        </tr>
                    </thead>

                    <tbody className="text-center" id="transaction_history_table_body">
                        <tr>
                        <td id="history_data_id">00001</td>
                        <td id="history_data_date">11/01/2023</td>
                        <td className="text-red-600" id="history_data_amount">-RM 570.00</td>
                        <td id="history_data_recipient">Alun Company</td>
                        </tr>

                        <tr>
                        <td id="history_data_id">00002</td>
                        <td id="history_data_date">08/01/2023</td>
                        <td id="history_data_amount" className="text-green-600">RM 800.00</td>
                        <td id="history_data_recipient">Asun Company</td>
                        </tr>

                        <tr>
                        <td id="history_data_id">00001</td>
                        <td id="history_data_date">05/01/2023</td>
                        <td id="history_data_amount" className="text-red-600">-RM 340.00</td>
                        <td id="history_data_recipient">Awen Company</td>
                        </tr>
                    </tbody>
                    </table>
            </div>
        </div>
    );
}

export default TransactionHistory;