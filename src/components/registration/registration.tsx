import React, { useState } from 'react';
import './registration.css';
import { IRegistrationProps } from '../../types/IRegistrationProps';
import { Box, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Modal, TextField, Typography } from '@mui/material';
import { IUser } from '../../types/IUser';
import { INotify } from '../../types/INotify';

function Registration(props: IRegistrationProps) {

  const [email, setEmail] = useState(props.user.email);
  const [name, setName] = useState(props.user.name);
  const [surname, setSurname] = useState(props.user.surname);
  const [department, setDepartment] = useState(props.user.department);
  
  const [to, setTo] = useState(props.notify.to);
  const [cc, setCc] = useState(props.notify.to);

  const confirmData = () => {
    const user: IUser = {
      email,
      name,
      surname, 
      department
    }

    const notify: INotify = {
      to, cc, bcc: ""
    }

    
    props.onConfirm(user, notify);
  }
  // const showRegistration = !!props.notify?.cc ||
                            // !!props.notify?.to ||
                            // !!props.user?.email ||
                            // !!props.user?.department ||
                            // !!props.user?.name ||
                            // !!props.user?.surname;
  return (
    <Dialog 
      open={true} >
    <DialogTitle>Register</DialogTitle>
    <DialogContent>
      <DialogContentText>
        Please, insert your personal detail to notify
      </DialogContentText>
      <TextField
        autoFocus
        margin="dense"
        id="email"
        label="Email Address"
        type="email"
        fullWidth
        variant="standard"
        value={email}
        onChange={e => setEmail(e.target.value)}
      />
      <TextField
        autoFocus
        margin="dense"
        id="name"
        label="Name"
        type="text"
        fullWidth
        variant="standard"
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <TextField
        autoFocus
        margin="dense"
        id="surname"
        label="Surname"
        type="text"
        fullWidth
        variant="standard"
        value={surname}
        onChange={e => setSurname(e.target.value)}
      />
      <TextField
        autoFocus
        margin="dense"
        id="team"
        label="Team"
        type="text"
        fullWidth
        variant="standard"
        value={department}
        onChange={e => setDepartment(e.target.value)}
      />
      <TextField
        autoFocus
        margin="dense"
        id="to"
        label="Email of your hr"
        type="text"
        fullWidth
        variant="standard"
        value={to}
        onChange={e => setTo(e.target.value)}
      />
      <TextField
        autoFocus
        margin="dense"
        id="cc"
        label="Email of your manager"
        type="text"
        fullWidth
        variant="standard"
        value={cc}
        onChange={e => setCc(e.target.value)}
      />
    </DialogContent>
    <DialogActions>
      <Button onClick={confirmData}>Confirm</Button>
    </DialogActions>
  </Dialog>    );
}

export default Registration;
