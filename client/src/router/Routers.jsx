import { Route, Routes } from 'react-router-dom';
import Login from '../pages/Login';
import Chats from '../pages/Chats';
import Contacts from '../pages/Contacts';
import Messages from '../pages/Messages';
import ProtectedRoutes from './ProtectedRoutes';
import Register from '../pages/Register';


const Routers = () => {
    return (
        <div>
            <Routes>
                {/* <Route path='/login' element={<PublicRoutes />}> */}
                <Route path='/login' element={<Login />} />
                <Route path='/register' element={<Register />} />
                {/* </Route> */}

                <Route path='/' element={<ProtectedRoutes />}>
                    <Route path='contact' element={<Contacts />} />
                    <Route path='chats' element={<Chats />} />
                    <Route path='messages' element={<Messages />} />
                </Route>
            </Routes>
        </div>
    )
}

export default Routers;