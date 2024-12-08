import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { DefaultLayout } from '~/layouts/';
import Dashboard from '~/layouts/components/Dashboard';
import { Users, Movies, Food, Tickets, Rooms, Discounts, Logout, Schedule, Seats } from '~/pages';
import { useContext } from 'react';
import { ThemeContext } from '~/store/context';
import { ProtectedRoute, UnauthenicatedRoute } from '~/routes';

import { Login } from '~/components/Login';
import { Register } from '~/components/Register';
import { useSelector } from 'react-redux';

const App = () => {
    const { theme } = useContext(ThemeContext);
    console.log(
        'store: ',
        useSelector((state) => state.auth)
    );
    return (
        <div className={`${theme.mode} ${theme.theme}`}>
            <BrowserRouter>
                <Routes>
                    <Route element={<ProtectedRoute />}>
                        <Route path="/" element={<DefaultLayout />}>
                            <Route index element={<Dashboard />} />
                            <Route path="/users" element={<Users />} />
                            <Route path="/rooms" element={<Rooms />} />
                            <Route path="/tickets" element={<Tickets />} />
                            <Route path="/movies" element={<Movies />} />
                            <Route path="/food" element={<Food />} />
                            <Route path="/discount" element={<Discounts />} />
                            <Route path="/schedule" element={<Schedule />} />
                            <Route path="/seats" element={<Seats />} />
                        </Route>

                        <Route path="logout" element={<Logout />} />
                    </Route>

                    <Route element={<UnauthenicatedRoute />}>
                        <Route path="/login" element={<Login />} />
                        <Route path="/register" element={<Register />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
};

export default App;
