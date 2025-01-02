"use client"
import {
    Table,
    TableBody,
    TableContainer,
    TableHead,
    TableRow,
    TableCell,
  } from "@mui/material";
  import Link from "next/link";
import Sidebar from "../../components/admin/Sidebar";
import { useEffect } from "react";
// import { deletePoem, getAllPoems } from "@/app/apis";
import { useState } from "react";  
import { useSelector } from "react-redux";
import { deleteEvent, getAllEvents } from "@/app/apis";



  const AdminEvents = () => {
    const auth = useSelector((state) => state.auth);


    const [events, setEvents] = useState([])

    const handleGetEvents = async () => {
        const response = await getAllEvents(auth?.token);
        if(response?.length > 0) {
          setEvents(response);
        }
    }


    useEffect(() => {
        handleGetEvents();
    }, [])

    const handleEventDelete = async (id) => {
      const response = await deleteEvent(auth?.token, id);
      if(response?.status === 200) {
        alert(response?.data?.message)
        handleGetEvents();
      }else{
        alert('Something went wrong please try again')
      }
  }

    
    return (
      <div className="admin-events">
        <Sidebar />
        <div className="main">
          <div className="title">Events</div>
          <Link prefetch={true} href="/admin/create-event">
        <button className="register">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            stroke="#000000"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <path
                d="M6 12H18M12 6V18"
                stroke="#fff"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>{" "}
            </g>
          </svg>
          Create event
        </button>
        </Link>
          <TableContainer className="student_table">
            <Table>
              <TableHead className="student_table-head">
                <TableRow className="student_table-head">
                  <TableCell className="table_row">S/N</TableCell>
                  <TableCell className="table_row">Title</TableCell>
                  <TableCell className="table_row">Description</TableCell>
                  <TableCell className="table_row">Categories</TableCell>
                  <TableCell className="table_row">Update</TableCell>
                  <TableCell className="table_row">Delete</TableCell>
                </TableRow>
              </TableHead>
              <TableBody className="table_body">
                {events?.map((item, index) => 
                <TableRow key={item?._id}>
                  <TableCell className="table_row">{index + 1}</TableCell>
                  <TableCell className="table_row">{item?.title}</TableCell>
                  <TableCell className="table_row">{item?.description}</TableCell>
                  <TableCell className="table_row">{item?.categories?.map(category => `${category}, `)}</TableCell>
                 <TableCell className="table_row active"><Link prefetch={true} 
                 href={`/admin/edit-event/${item?._id}`}
                 >Update event</Link></TableCell>
                 <TableCell className="table_row active"><a 
                 onClick={() => handleEventDelete(item?._id)}
                 >Delete Event</a></TableCell>
                </TableRow>)}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>
    );
  };
  
  export default AdminEvents;
  