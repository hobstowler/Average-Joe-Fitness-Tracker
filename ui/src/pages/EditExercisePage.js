import { useNavigate, useParams } from "react-router-dom"
import { useState, useEffect } from 'react';
import UnitSelect from "../components/unitSelector";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const EditExercisePage = () => {
    let { _id } = useParams()

    const [exercise, setExercise] = useState({})
    const [name, setName] = useState("")
    const [reps, setReps] = useState(0)
    const [weight, setWeight] = useState(0)
    const [unit, setUnit] = useState("")
    const [date, setDate] = useState("")

    const [subText, setSubText] = useState('')
    const navigate = useNavigate()

    useEffect(() => {
        fetch(`/exercises/${_id}`)
        .then(response => response.json())
        .then(json => {
            setExercise(json)
            setName(json.name)
            setReps(json.reps)
            setWeight(json.weight)
            setUnit(json.unit)
            setDate(json.date)
        })
        .catch(error => console.log(error))
    }, [])

    const submitChanges = (e) => {
        e.preventDefault()
        fetch(`/exercises/${_id}`, {
            method: "PUT",
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
            if (response.status === 200) {
                setSubText('Successfully saved.')
                setTimeout(() => {
                    navigateHome()
                }, 5000)
            } else {
                setSubText("Save Unsuccessful.")
                setTimeout(() => {
                    navigateHome()
                }, 5000)
            }
        })
        .catch(error => console.log(error))
    }

    const navigateHome = () => {
        navigate('/')
    }
    
    return (
        <div>
            <Header splashId={'splash3'} />
            <div className='bodyContainer'>
                <div className='body'>
                    <h1>Edit "{name}" Exercise:</h1>
                    <p>Here's your chance to change up your tired old routine a little. 
                        You should treat yourself more often. Maybe get a massage at the mall? 
                        Do you really need to do {reps > 0 ? reps : 0} reps? 
                        Maybe you could do {reps > 1 ? reps - 1 : 'nothing'} just for a little bit and see if you like that better.</p>
                    <div className="edit">
                        <form onSubmit={submitChanges}>
                            <div>
                                Name: <input type='text' value={name} onChange={(e) => setName(e.target.value)} />
                            </div>
                            <div>
                                Reps: <input type='number' value={reps} onChange={(e) => setReps(parseInt(e.target.value))} />
                            </div>
                            <div>
                                Weight: <input type='number' value={weight} onChange={(e) => setWeight(parseInt(e.target.value))} />
                            </div>
                            <UnitSelect unit={unit} setUnit={setUnit} />
                            <div>
                                Date: <input type='text' value={date} onChange={(e) => setDate(e.target.value)} />
                            </div>
                            <div class='submitContainer'>
                                <div id="submitText">{subText}</div>
                                <div><button type="submit">Submit</button></div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default EditExercisePage