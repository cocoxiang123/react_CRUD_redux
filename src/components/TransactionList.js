import React, { useState } from 'react'
import TransationForm from './TransactionForm'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../actions/transactionAction'

function TransactionList({ list, deleteTransaction, editTransaction }) {

    const onhandleEdit = (index) => {
        editTransaction(index);
    }
    const onhandleDelete = (index) => {
        deleteTransaction(index)
    }
    return (
        <div>
            <TransationForm />
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
                                <i className="fas fa-trash-alt" onClick={() => onhandleDelete(index)}></i></td>

                        </tr>
                    })}
                </tbody>
            </table>
        </div >
    )
}
const mapStateToProps = state => {
    return {
        list: state.list,
    }
}
const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        deleteTransaction: actions.Delete,
        editTransaction: actions.UpdateIndex
    }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(TransactionList)
