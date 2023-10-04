import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

export const CreateWorkout = () => {
    type Exercise = {
        exercise_name: string;
        weight: number;
        muscle_group: string;
        sets: number;
        repetitions: number;
        resting_time: Date;
    };

    type Workout = {
        name: string;
        goal: string;
        week_day: string;
    };

    const [exercises, setExercises] = useState<Exercise[]>([]);

    const { register: exercise, handleSubmit: handleSubmitEx } = useForm<Exercise>();
    const { register: workout, handleSubmit: handleSubmitWo } = useForm<Workout>();

    const onSubmitExercise: SubmitHandler<Exercise> = data => {
        setExercises(prevExercise => [...prevExercise, data]);
    };

    const onSubmitWorkout: SubmitHandler<Workout> = async data => {
        try {
            const payload = {
                name: data.name,
                goal: data.goal,
                week_day: data.week_day,
                exercises: exercises
            };
            const rawResponse = await fetch('', {
                method: 'POST',
                body: JSON.stringify(payload)
            });
            const response = await rawResponse.json();
        } catch (e) {
            console.log(e);
        }
    };

    return (
        <>
            <form onSubmit={handleSubmitWo(onSubmitWorkout)}>
                <input {...workout('name')} type="text" id="name" />
                <input {...workout('goal')} type="text" id="goal" />
                <select {...workout('week_day')} id="week_day">
                    <option value="">Selecione</option>
                    <option value="monday">Segunda-Feira</option>
                    <option value="tuesday">Terça-Feira</option>
                    <option value="wednesday">Quarta-Feira</option>
                    <option value="thursday">Quinta-Feira</option>
                    <option value="friday">Sexta-feira</option>
                    <option value="saturday">Sábado</option>
                    <option value="sunday">Domingo</option>
                </select>
            </form>
            <form onSubmit={handleSubmitEx(onSubmitExercise)}>
                <input {...exercise('exercise_name')} type="text" id="exercise_name" />
                <select {...exercise('muscle_group')} id="muscle_group">
                    <option value="">Selecione</option>
                    <option value="core">Core</option>
                    <option value="core">Leg</option>
                </select>
                <input {...exercise('weight')} type="number" id="weight" />
                <input {...exercise('sets')} type="number" id="sets" />
                <input {...exercise('repetitions')} type="number" id="repetitions" />
                <input {...exercise('resting_time')} type="time" id="resting_time" />
                <input type="submit" value="Add" />
            </form>
            <h2>Exercises</h2>
            <table>
                <thead>
                    <tr>
                        <th>Exercise</th>
                        <th>Muscle Group</th>
                        <th>Weight</th>
                        <th>Set</th>
                        <th>Repetition</th>
                        <th>Resting Time</th>
                    </tr>
                </thead>
                <tbody>
                    {exercises?.map((exercise, i) => (
                        <tr key={i}>
                            <td>{exercise.exercise_name}</td>
                            <td>{exercise.muscle_group}</td>
                            <td>{exercise.weight.toString()}</td>
                            <td>{exercise.sets.toString()}</td>
                            <td>{exercise.repetitions.toString()}</td>
                            <td>{exercise.resting_time.toString()}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div>
                <button>Save</button>
                <button>Cancelar</button>
            </div>
        </>
    );
};
