import React from 'react'
import ToDoList from './ToDoList'
import User from './User'

const Home = () => {
    return (
        <main>
            <header>
                <h1>Welcome To Your To Do List Site</h1>
            </header>
            <section>
                <h2>Manage Your To Dos</h2>
                <ToDoList />
            </section>
            <section>
                <h2>Your Account Details</h2>
                <User />
            </section>
        </main>
    );
}

export default Home