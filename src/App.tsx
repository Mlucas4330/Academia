import { Link } from 'react-router-dom';

function App() {
    return (
        <>
            <header>
                <nav>
                    <Link to="/exerciser">Exerciser</Link>
                    <Link to="/instructor">Instrutor</Link>
                </nav>
            </header>
            <main>
                <div>
                    <Link to="/exerciser/signup">I'am an Instructor</Link>
                    <Link to="/instructor/signup">I'am an Exerciser</Link>
                </div>
            </main>
        </>
    );
}

export default App;
