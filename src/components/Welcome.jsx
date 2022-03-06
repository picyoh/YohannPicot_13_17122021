import React, { useState } from 'react'

import { useSelector } from 'react-redux'

import { editNewName } from '../services/dataManager'
import { store, setLoading } from '../services/store';

function Welcome() {

    const [editing, setEditing] = useState();
    const nameSelector = useSelector((state) => state.name);
    const name = nameSelector.firstname + " " + nameSelector.lastname;

    const sendNewName = (e) => {
        store.dispatch(setLoading());
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
                <div className='editName'>
                    <button className='edit-button' onClick={() => setEditing(false)}>Cancel</button>
                    <form onSubmit={sendNewName}>
                        <div className='input-wrapper'>
                            <label htmlFor='firstname'>Firstname</label>
                            <input type="text" id="firstname" name="firstname" required />
                        </div>
                        <div className='input-wrapper'>
                            <label htmlFor='lastname'>Lastname</label>
                            <input type="text" id="lastname" name="lastname" required />
                        </div>
                        <button className='edit-button'>Send Name</button>
                    </form>
                </div>
            ) : (
                <button className='edit-button' onClick={() => setEditing(true)}>Edit Name</button>
            )
            }
        </div>
    )
}

export default Welcome