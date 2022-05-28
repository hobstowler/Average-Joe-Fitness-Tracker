import { useState } from 'react'
import {FaWrench} from 'react-icons/fa'

function ExerciseEditCell({id, editExercise}) {
    const editId = () => {
        editExercise(id)
    }

    return (
        <td>
            <FaWrench onClick={editId} />
        </td>
    )
}

export default ExerciseEditCell;