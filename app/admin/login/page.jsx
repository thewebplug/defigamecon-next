import {
    Table,
    TableBody,
    TableContainer,
    TableHead,
    TableRow,
    TableCell,
  } from "@mui/material";
  import { Link } from "react-router-dom";
import Sidebar from "../../components/admin/Sidebar";
import { useEffect } from "react";
import { useState } from "react";  
import { useSelector } from "react-redux";
import { deleteGame, getAllGames } from "../@/app/apis";
import { useRouter } from "next/navigation";



  const AdminGames = () => {
    const auth = useSelector((state) => state.auth);

    const router = useRouter();
    const [games, setGames] = useState([])

    const handleGetGames = async () => {
        const response = await getAllGames(auth?.token);
        console.log('getAllGames', response);
        if(response?.status === 200) {
          setGames(response?.data);
        }
    }


    useEffect(() => {
        handleGetGames();
    }, [])

      const handleGameDelete = async (id) => {
          const response = await deleteGame(auth?.token, id);
          if(response?.status === 200) {
            alert(response?.data?.message)
            handleGetGames();
          }else{
            alert('Something went wrong please try again')
          }
      }
    
    return (
      <div className="admin-events">
        <Sidebar />
        <div className="main">
          <div className="title">Games</div>
          <Link to="/admin/create-game">
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
          Add game
        </button>
        </Link>
          <TableContainer className="student_table">
            <Table>
              <TableHead className="student_table-head">
                <TableRow className="student_table-head">
                  <TableCell className="table_row">S/N</TableCell>
                  <TableCell className="table_row">Title</TableCell>
                  <TableCell className="table_row">Creator</TableCell>
                  <TableCell className="table_row">Category</TableCell>
                  <TableCell className="table_row">Update</TableCell>
                  <TableCell className="table_row">Delete</TableCell>
                </TableRow>
              </TableHead>
              <TableBody className="table_body">
                {games?.map((item, index) => <TableRow key={item?._id}>
                  <TableCell className="table_row">{index + 1}</TableCell>
                  <TableCell className="table_row">{item?.title}</TableCell>
                  <TableCell className="table_row">{item?.creator}</TableCell>
                  <TableCell className="table_row">{item?.category}</TableCell>
                 <TableCell className="table_row active"><Link 
                 href={`/admin/edit-game/${item?._id}`}
                 >Update Event</Link></TableCell>
                 <TableCell className="table_row active"><a 
                 onClick={() => handleGameDelete(item?._id)}
                 >Delete Game</a></TableCell>
                </TableRow>)}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>
    );
  };
  
  export default AdminGames;
  