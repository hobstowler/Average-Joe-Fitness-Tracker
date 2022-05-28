import ExerciseRow from "./ExerciseRow"

function ExerciseTable({exercises, deleteExercise, editExercise}) {

    return (
        <div>
            <table cellSpacing='0'>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Reps</th>
                        <th>Weight</th>
                        <th>Unit</th>
                        <th>Date</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {exercises.map((exercise, i) => <ExerciseRow exercise={exercise} key={i} deleteExercise={deleteExercise} editExercise={editExercise} />)}
                </tbody>
            </table>
        </div>
    )
}

export default ExerciseTable