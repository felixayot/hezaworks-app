/* eslint-disable */
// @ts-nocheck

// Admin
import { Link } from 'react-router-dom';
// import Users from './Users';
import useAuth from '../hooks/useAuth';

function AdminHome() {
    const { auth } = useAuth();
    return (
        <>
        <section>
        <h3>Hello, <span color='green'>{auth.username}.</span> Welcome back!<br />
        You are viewing an Admin-Only Page</h3>
        <br />
        <div className='flexGrow'>
        <Link to="/">Home</Link>
        </div>
        </section>
        <br />
        </>
    );
    }

export default AdminHome;
