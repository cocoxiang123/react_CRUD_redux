import React, { useState } from 'react'

function TransactionForm({ onAddData }) {
    const [data, setData] = useState({ accountNo: "", iFSC: "", bName: "", amount: "" })
    const onHandleChange = e => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    }
    const onHandleSubmit = e => {
        e.preventDefault();
        onAddData(data);

    }
    return (
        <form onSubmit={onHandleSubmit} autoComplete="off">
            <label>Account No. </label><br />
            <input name="accountNo" placeholder="A/C No." value={data.accountNo} onChange={onHandleChange} />
            <br />
            <label>IFSC </label><br />
            <input name="iFSC" placeholder="IFSC code" value={data.iFSC} onChange={onHandleChange} />
            <br />
            <label>Name </label><br />
            <input name="bName" placeholder="A/C Holder Name" value={data.bName} onChange={onHandleChange} />
            <br />
            <label>Amount </label><br />
            <input name="amount" placeholder="Amount" value={data.amount} onChange={onHandleChange} />
            <br />
            <button>Submit</button>
        </form>
    )
}

export default TransactionForm
