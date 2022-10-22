import React, { useEffect, useState } from 'react'
import Sidebar from '../../components/Sidebar/sidebar'
import { Spinner,Button,Form } from 'react-bootstrap';
import './viewUser.css'
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from '../../actions/user';
import { useNavigate } from 'react-router-dom'
import { BiSearchAlt } from "react-icons/bi"
import InputGroup from 'react-bootstrap/InputGroup';

const Displayusers = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [filter, setFilter] = useState([])
    const [data, setData] = useState([]);
    useEffect(() => {
        dispatch(fetchUsers(setData,setFilter));

    }, []);
    const users = useSelector((state) => state.user);

    const handleReset = ()=>{
        setFilter(users)
    }

    const requestSearch = (searchedVal) => {
        const filteredRows = data.filter((row) => {
            return row.username.toString().toLowerCase().includes(searchedVal.toString().toLowerCase());
        });
        if (searchedVal.length < 1) {
            setFilter(data)
        }
        else {
            setFilter(filteredRows)
        }
    };

    console.log(users)

    console.log(filter)


    return (
        <>
            <Sidebar />
            {!filter.length ? <Spinner animation="grow" /> : (
                <div className='container-home'>
                    <input placeholder = "Search Here" className="mt-3 me-2 search-input" onChange={(e) => requestSearch(e.target.value)} />
                        <Button style = {{color: "white", background:"dodgerblue"}} onClick = {handleReset}>ALL</Button>
                    <div>
                        <div className='home-container mt-4'>

                            <div className='main-card-home'>
                                <table className='table-design' >
                                    <thead>
                                        <tr className="table-head">
                                            <th className='table-design'>Username</th>
                                            <th className='table-design'>Email</th>
                                            <th className='table-design'>Phonenumber</th>
                                            <th className='table-design'>Age</th>

                                        </tr>
                                    </thead>
                                    {filter.map((users) => (
                                        <tbody key={users._id}>
                                            <tr className='table-row'>
                                                <td className='table-design'>{users.username}</td>
                                                <td className='table-design'>{users.email}</td>
                                                <td className='table-design'>{users.phonenumber}</td>
                                                <td className='table-design'>{users.age}</td>
                                            </tr>

                                        </tbody>
                                    ))}

                                </table>
                            </div>

                        </div>
                    </div>
                </div>


            )}
        </>
    )
}

export default Displayusers