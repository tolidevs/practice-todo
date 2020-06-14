import React from 'react'
import { Link } from 'react-router-dom'

const Page404 = () => {

    return (
      <div>
            <h1>404 Page Not Found</h1>
            <Link to="/">Return To Home</Link>
      </div>
    );
}

export default Page404