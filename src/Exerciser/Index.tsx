import { Link } from 'react-router-dom';

export const Index = () => {
    return (
        <>
            <header></header>
            <main>
                <aside>
                    <ul>
                        <li>
                            <Link to="/exerciser/workouts"></Link>
                        </li>
                        <li>
                            <Link to="/exerciser/workouts"></Link>
                        </li>
                    </ul>
                </aside>
                <div>
                    <label htmlFor="workout">Select your workout</label>
                    <select id="workout">
                        <option value="">Selecione</option>
                    </select>
                    <time>00:00:00</time>
                    <button>Iniciar</button>
                </div>
            </main>
        </>
    );
};
