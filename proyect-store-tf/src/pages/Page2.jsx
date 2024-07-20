import React from 'react';
import { Link } from 'react-router-dom';


function Page2() {
    return (
        <div>
            <h1>holaa soy la pag 2</h1>
            <Link to="/">
            ir a mi inicio
            </Link>
        </div>
    );
}

export default Page2;