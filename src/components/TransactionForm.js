import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../actions/transactionAction'

function TransactionForm({ list, currentIndex, insertTransaction, updateTransaction }) {
    const [data, setData] = useState({ accountNo: "", iFSC: "", bName: "", amount: "" })

    useEffect(() => {
        setData(currentEditObj())
    }, [currentIndex])

    const currentEditObj = () => {
        if (currentIndex === -1)
            return { accountNo: "", iFSC: "", bName: "", amount: "" }
        else
            return list[currentIndex];
    }

    const onHandleChange = e => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    }

    const onHandleSubmit = e => {
        e.preventDefault();
        if (currentIndex === -1)
            insertTransaction(data);
        else
            updateTransaction(data);
        setData({ accountNo: "", iFSC: "", bName: "", amount: "" })

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

const mapStateToProps = state => {
    return {
        list: state.list,
        currentIndex: state.currentIndex
    }
}
const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        insertTransaction: actions.Insert,
        updateTransaction: actions.Update
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(TransactionForm)
