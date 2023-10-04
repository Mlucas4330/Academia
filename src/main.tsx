import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Signin } from './Instructor/Auth/Signin.tsx';
import { Index as IndexExerciser } from './Exerciser/Index.tsx';
import { Index as IndexInstructor } from './Instructor/Index.tsx';
import { CreateWorkout } from './Instructor/Workout/CreateWorkout.tsx';

interface User {
    admin: boolean;
}
const user: User = {
    admin: false
};

const isUserLoggedIn = () => user;

const router = createBrowserRouter([
    {
        path: '/',
        element: isUserLoggedIn() ? <App /> : <Signin />
    },
    {
        path: '/instructor',
        element: <IndexInstructor />
    },
    {
        path: '/instructor/create-workout',
        element: <CreateWorkout />
    },
    {
        path: '/exerciser',
        element: <IndexExerciser />,
    }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
