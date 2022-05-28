import { FaTrash } from 'react-icons/fa'

function ExerciseDeleteCell({id, deleteExercise}) {
    const deleteId = () => {
        deleteExercise(id)
    }

    return (
        <td>
            <FaTrash onClick={deleteId} />
        </td>
    )
}

export default ExerciseDeleteCell;