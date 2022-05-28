import ExerciseDeleteCell from "./ExerciseDeleteCell";
import ExerciseEditCell from "./ExerciseEditCell";

function ExerciseRow({exercise, deleteExercise, editExercise}) {

    return (
        <tr>
            <td>{exercise.name}</td>
            <td>{exercise.reps}</td>
            <td>{exercise.weight}</td>
            <td>{exercise.unit}</td>
            <td>{exercise.date}</td>
            <ExerciseEditCell id={exercise._id} editExercise={editExercise} />
            <ExerciseDeleteCell id={exercise._id} deleteExercise={deleteExercise} />
        </tr>
    )
}

export default ExerciseRow;