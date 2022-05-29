import React from 'react';
import { Link } from 'react-router-dom';
import ExerciseTable from '../components/ExerciseTable';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import {FaPlus} from 'react-icons/fa'
import Footer from '../components/Footer';
import Navigation from "../components/Navigation";

function HomePage() {
    const [exercises, setExercises] = useState([]);
    const navigate = useNavigate()

    useEffect(() => {
        getExercises()
    }, [])

    const getExercises = () => {
        fetch('/exercises', {
            method: "GET",
            headers: {'Content-Type': 'application/json'}
        })
        .then(response => response.json())
        .then(json => setExercises(json))
        .catch(error => console.log(error))
    }

    const deleteExercise = (id) => {
        fetch(`/exercises/${id}`, {
            method: "DELETE",
            headers: {'Content-Type': 'application/json'}
        })
        .then(response => {
            if (response.status === 204) {
                console.log('deleted!')
                getExercises()
            }
            else {
                console.log('bad response from server.')
            }
        })
        .catch(error => console.log(error))
    }

    const editExercise = (id) => {
        navigate(`/edit-exercise/${id}`)
    }

    return (
        <div>
            <div className='body'>
                <h1>Main Page</h1>
                <p>See all of your exercises on this page. Edit or delete them using the controls on the right side.</p>
                <ExerciseTable exercises={exercises} deleteExercise={deleteExercise} editExercise={editExercise} />
                <div className='createBottom'>
                    <Link to='/create-exercise'><FaPlus /> Add Exercise</Link>
                </div>
            </div>
        </div>
    )
}

export default HomePage;