import Header from "../components/Header"
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom"
import { useState } from 'react';
import UnitSelect from "../components/UnitSelector";
import Navigation from "../components/Navigation";

export const CreateExercisePage = () => {
    const [name, setName] = useState("")
    const [reps, setReps] = useState(0)
    const [weight, setWeight] = useState(0)
    const [unit, setUnit] = useState("lbs")
    const [date, setDate] = useState("")
    const navigate = useNavigate()
    const [subText, setSubText] = useState('')

    const submitChanges = (e) => {
        e.preventDefault()
        fetch(`/exercises/`, {
            method: "POST",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                name: name,
                reps: reps,
                weight: weight,
                unit: unit,
                date: date,
            })
        })
        .then(response => {
            if (response.status === 201) {
                setSubText('Successfully created! \n Redirecting...')
                setTimeout(() => {
                    navigateHome()
                }, 3000)
            } else {
                setSubText("Create Unsuccessful. \n Redirecting...")
                setTimeout(() => {
                    navigateHome()
                }, 3000)
            }
        })
        .catch(error => console.log(error))
    }

    const navigateHome = () => {
        navigate('/')
    }
    
    return (
        <div>
            <div className='body'>
                <h1>Create a New Exercise:</h1>
                <p>Here's something I'd never thought of before.
                    Truly, you're a genius for coming up with this new routine.
                    Really, we're all very impressed by this exercise you're creating here.
                    Let's give it up for this dude over here creating {name ? name : "...something"}.
                    </p>
                <form onSubmit={submitChanges}>
                    <div>Name: <input type='text' value={name} onChange={(e) => setName(e.target.value)} /></div>
                    <div>Reps: <input type='number' value={reps} onChange={(e) => setReps(parseInt(e.target.value))} /></div>
                    <div>Weight: <input type='number' value={weight} onChange={(e) => setWeight(parseInt(e.target.value))} /></div>
                    <UnitSelect unit={unit} setUnit={setUnit} />
                    <div>Date: <input type='text' value={date} onChange={(e) => setDate(e.target.value)} /></div>
                    <div class='submitContainer'>
                        <div id="submitText">{subText}</div>
                        <div><button type="submit">Save</button></div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default CreateExercisePage