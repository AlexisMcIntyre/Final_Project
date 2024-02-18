import React, {useState} from "react";


const House = (props) => {
    const {form, updateForm} = props; //house is all data passed in for house, updateHouse is the method being passed in (called from child class component)

    const deleteLineItem = (lineitemId) => {  //going to filter out room for deletion by matching the id & removing room fom array (using filter method)
        const updatedForm = { //assigning a new variable the value of the new object
            ...form, //spread the house that is passed in, which will use all the data from the house object EXCEPT the data we are changing below --the rooms
            lineitems: form.lineitem.filter((x) => x._id !== lineitemId)  //rooms will be updated to a different value (which is basically the same value MINUS the id of the room being deleted)
    };
    updateForm(updatedForm); //doing to pass updated house into the update house method that was passed down (will call the put method on the houses API, thus it will call the HTTP request to update)
}



// this could also be written like this because it is one line and will automatically be returned: const addNewRoom = (room) => updateHouse({...house, rooms: [...house.rooms, room]});

const rooms = () => (  //rooms (the collection of rooms) will create an instance of each room as an li
    <ul> 
        {house.rooms.map((room, index) => (
        <li key={index}>
            <label> {`$(room.name} Area: ${room.area}`}</label>
            <button onClick={(e) => deleteRoom(room._id)}>Delete</button>
            </li>
        ))}
    </ul>
);
        }

export const UserInputForm = (props) => {
    const [name, setName] = useState('');  //these are the hooks
    const [budget, setBudget] = useState(undefined);

    const addNewBudget = (budget) => {
        return updateForm ({...form, lineitem: [...form.lineitems, lineitem]}) //when updating props or state you should add a new object or array value, you don't modify an existing one, so here we are using the old array (using spread) and adding a new value to it to create a new array
     };

    const handleBudgetInput = (e) => {  //this is user validation stuff to make sure the user has entered a number
        const int = parseInt(e.target.value, 10); //10 means round to the 10th
        setBudget(int >= 0? int: ''); //no negative numbers
    }

    const onSubmit = (e) => { //what happens when the form is submitted
        e.preventDefault();
        if (name && budget) {  //make sure user entered values for both
            props.addNewBudget({name,budget}); //new object passed in
            setName(''); //resetting name and back to a blank string
            setBudget('');
        } else {
            console.log('invalid input');
        }
    };

    return (
        <div>
            <h4>Travel Wishlist</h4>
            <form onSubmit={onSubmit}>
                <input
                    type='text'
                    placeholder='Where?'
                    onChange={(e) => setName(e.target.value)} //when the text in input changes we are calling setName method an setting it to target value, and the name value in the state /updates changes with it
                    value={name}
                    />
                <input
                    type='text'
                    placeholder='Budget?'
                    onChange={handleBudgetInput}
                    value={budget} //this is tying the state variable onto the input value, onChange always updates the state value and the state value updates the value in the input
                    //the above "inputs" show 2 different ways to to the onChange, either inline like the first, or defined above and called in later {handleAreaInput}
                   />
                <button type='submit'>Add Wish!</button> 
            </form>
        </div>
    )
}