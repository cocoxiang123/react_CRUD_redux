import React, { useState, useEffect } from 'react'
import TransationForm from './TransactionForm'


function TransactionList() {
    const [list, setList] = useState([])
    const [currentIndex, setCurrentIndex] = useState(-1);

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
        if (currentIndex === -1) {
            tempList.push(data);
        }
        else {
            tempList[currentIndex] = data;
        }
        localStorage.setItem('transactions', JSON.stringify(tempList));
        setList(tempList);
        setCurrentIndex(-1);
    }

    const onhandleEdit = (index) => {
        setCurrentIndex(index);
    }
    const onhandleDelete = (index) => {
        const tempList = returnList();
        tempList.splice(index, 1);
        localStorage.setItem('transactions', JSON.stringify(tempList));
        setList(tempList);
    }

    return (
        <div>
            <TransationForm onAddData={onAddData} list={list} currentIndex={currentIndex} />
            <hr />
            <table>
                <tbody>
                    <tr>
                        <th>Acc No.</th>
                        <th>IFSC</th>
                        <th>Name</th>
                        <th>Amount</th>
                        <th></th>
                    </tr>
                    {list.map((item, index) => {
                        return <tr key={index}>
                            <td>{item.accountNo}</td>
                            <td>{item.iFSC}</td>
                            <td>{item.bName}</td>
                            <td>{item.amount}</td>
                            <td><i className="fas fa-edit" onClick={() => onhandleEdit(index)}></i>
                                <i class="fas fa-trash-alt" onClick={() => onhandleDelete(index)}></i></td>

                        </tr>
                    })}
                </tbody>
            </table>
        </div >
    )
}

export default TransactionList
