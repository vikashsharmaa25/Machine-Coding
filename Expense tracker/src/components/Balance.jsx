import { Input } from "antd";
import React, { useState } from "react";
import { MdDelete } from "react-icons/md";

function Balance() {
  const [transactions, setTransactions] = useState([]);
  const [transactionName, setTransactionName] = useState("");
  const [transactionAmount, setTransactionAmount] = useState(0);
  const [balance, setBalance] = useState(0);

  const handleTransactionNameChange = (e) => {
    setTransactionName(e.target.value);
  };

  const handleTransactionAmountChange = (e) => {
    setTransactionAmount(e.target.value);
  };

  const addTransaction = (e) => {
    e.preventDefault();
    const newTransaction = {
      name: transactionName,
      amount: parseFloat(transactionAmount),
    };
    setTransactions([...transactions, newTransaction]);
    setBalance(balance + parseFloat(transactionAmount));
    setTransactionName("");
    setTransactionAmount(0);
  };

  const deleteTransaction = (index) => {
    const updatedTransactions = [...transactions];
    const deletedAmount = updatedTransactions[index].amount;
    updatedTransactions.splice(index, 1);
    setTransactions(updatedTransactions);
    setBalance(balance - deletedAmount);
  };

  return (
    <>
      <div className="flex flex-col  items-center">
        <h1 className="text-3xl text-blue-500 font-medium uppercase tracking-wider my-10">
          EXPENSE TRACKER
        </h1>
        <div className="flex justify-center  gap-20 w-full">
          <div className="flex flex-col w-[30%]">
            <h1 className="text-xl">Balance: ₹ {balance.toFixed(2)}</h1>
            <div className="flex justify-between p-10">
              <div>
                <h1>Income</h1>
                {/* Display income transactions */}
              </div>
              <div>
                <h1>Expense</h1>
                {/* Display expense transactions */}
              </div>
            </div>
            <hr className="my-4" />
            <div>
              <h1 className="text-xl mb-5">New Transaction</h1>
              <form onSubmit={addTransaction}>
                <div>
                  <label htmlFor="transactionName">Enter Expense</label>
                  <Input
                    type="text"
                    className="p-1"
                    value={transactionName}
                    onChange={handleTransactionNameChange}
                  />
                </div>
                <div className="mt-4">
                  <label htmlFor="transactionAmount">Enter Amount</label>
                  <Input
                    type="text"
                    className="p-1"
                    value={transactionAmount}
                    onChange={handleTransactionAmountChange}
                  />
                </div>
                <div>
                  <button
                    type="submit"
                    className="uppercase px-4 py-1 bg-indigo-800 mt-4"
                  >
                    Add Transaction
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="w-[30%]">
            <h1 className="text-xl">Transaction history</h1>
            <div className="mt-2">
              {/* Display transaction history */}
              {transactions.map((transaction, index) => (
                <div
                  key={index}
                  className={`bg-${
                    transaction.amount >= 0 ? "green" : "red"
                  }-700 p-2 flex justify-between items-center my-2`}
                >
                  <span
                    className="text-gray-700 font-semibold"
                    onClick={() => deleteTransaction(index)}
                  >
                    <MdDelete />
                  </span>
                  <h1 className="font-semibold">{transaction.name}</h1>
                  <h1 className="font-semibold">{transaction.amount}</h1>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Balance;
