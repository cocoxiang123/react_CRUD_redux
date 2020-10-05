import React, { useState, useEffect } from 'react'
import TransationForm from './TransactionForm'

function TransactionList() {
    const [list, setList] = useState([])
    useEffect(() => {
        setList(returnList);
    }, [])

    const returnList = () => {
        if (localStorage.getItem('transactions') === null) {
            return JSON.parse(localStorage.setItem('transactions', JSON.stringify([])))
        }
        return JSON.parse(localStorage.getItem('transactions'))
    }

    const onAddData = (data) => {
        const tempList = returnList();
        tempList.push(data);
        localStorage.setItem('transactions', JSON.stringify(tempList));
        setList(tempList);
    }

    return (
        <div>
            <TransationForm onAddData={onAddData} />
            <hr />
            <table>
                <tbody>
                    <tr>
                        <th>Acc No.</th>
                        <th>IFSC</th>
                        <th>Name</th>
                        <th>Amount</th>
                    </tr>
                    {list.map((item, index) => {
                        return <tr key={index}>
                            <td>{item.accountNo}</td>
                            <td>{item.iFSC}</td>
                            <td>{item.bName}</td>
                            <td>{item.amount}</td>
                        </tr>
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default TransactionList
