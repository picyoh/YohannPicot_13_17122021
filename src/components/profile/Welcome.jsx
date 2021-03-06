import React, { useState } from 'react'

import { useSelector } from 'react-redux'

import { editNewName } from '../../services/dataManager'
import { store, setLoading } from '../../services/store';

function Welcome() {

    const [editing, setEditing] = useState();
    const nameSelector = useSelector((state) => state.name);
    const name = nameSelector.firstName + " " + nameSelector.lastName;

    const sendNewName = (e) => {
        store.dispatch(setLoading(true));
        const newfirstName = document.querySelector("#firstName").value;
        const newlastName = document.querySelector("#lastName").value;
        editNewName(newfirstName, newlastName);
        setEditing(false);
    }

    return (
        <div className='header'>
            <h1>Welcome back
                <br />
                {name}
            </h1>
            {(editing) ? (
                <div className='edit-name'>
                    <div className='edit-wrapper'>
                        <input type="text" id="firstName" name="firstName" placeholder={nameSelector.firstName} />
                        <input type="text" id="lastName" name="lastName" placeholder={nameSelector.lastName} />
                    </div>
                    <div className='edit-wrapper'>
                    <button className='edit-button' onClick={() => sendNewName()}>Send Name</button>
                    <button className='edit-button' onClick={() => setEditing(false)}>Cancel</button>
                    </div>
                </div>
            ) : (
                <button className='edit-button' onClick={() => setEditing(true)}>Edit Name</button>
            )
            }
        </div>
    )
}

export default Welcome