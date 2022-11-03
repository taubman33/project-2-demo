import { Route, Routes} from 'react-router-dom'
import Home from './Home'
import Starships from './Starships'

export default function Main () {
    return (
        <div>
    <Routes>
    <Route path="/" element={<Home/>}/>
     <Route path="/starships" element={<Starships/>}/>
    </Routes>
        </div>
    )
}