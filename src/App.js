import React  from 'react';
import Cont from './inSide/content';
import './css/App.css'
import Links from './inSide/links';
import Headers from './inSide/header';
function App() {
    return(
        <div className='app-wrap'>
            <Headers/>
            <Links/>
            <Cont/>
        </div>
    )
}

export default App;
