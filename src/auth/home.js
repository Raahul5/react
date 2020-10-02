import React from 'react';
 

const Home = (props) => {
    return (
         <div>
            Home
            <button onClick = { () => {
                props.history.push('/login');
                localStorage.clear();
            }} className="btn btn-primary">Logout</button>
         </div>
    )

}

export default Home;