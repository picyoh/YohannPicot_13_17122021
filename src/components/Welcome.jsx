import React, { useState } from 'react'

import { useSelector } from 'react-redux'

import { editNewName } from '../services/dataManager'
import { store, setLoading } from '../services/store';

function Welcome() {

    const [editing, setEditing] = useState();
    const nameSelector = useSelector((state) => state.name);
    const name = nameSelector.firstname + " " + nameSelector.lastname;

    const sendNewName = (e) => {
        store.dispatch(setLoading(true));
        const newFirstname = e.target[0].value;
        const newLastname = e.target[1].value;
        console.log(newFirstname, newLastname)
        editNewName(newFirstname, newLastname);
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
                        <input type="text" id="firstname" name="firstname" placeholder="Tony"/>
                        <input type="text" id="lastname" name="lastname" placeholder='Jarvis'/>
                    </div>
                    <div className='edit-wrapper'>
                    <button className='edit-button' onClick={() => setEditing(true)}>Send Name</button>
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