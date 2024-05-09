
import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Notification() {

  const show = () =>
    toast.info("Here is a list of Matches!");

  const notify = () =>
    toast.success("Selected!");


  const provide = () =>
    toast.warning("Are you sure!");
  return (
    <div>
      <button onClick={show}>List of Matches!</button>
      <button onClick={notify}>Select!</button>
      <button onClick={provide}>Choice!</button>

      <ToastContainer position='top-center'
        pauseOnHover="FALSE"
        pauseOnFocusLoss="FALSE"
        draggable="true"
      />
    </div>
  )
}

export default Notification;
