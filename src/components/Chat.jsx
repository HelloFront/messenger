import { Button, Container, Grid, TextField } from '@mui/material';
import React, { useContext, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import firebase from 'firebase/compat/app';
import { Context } from '../index';
import Loader from './Loader';

const Chat = () => {
  const { auth, firestore } = useContext(Context);
  const [ user ] = useAuthState(auth);
  const [ inputValue, setInputValue ] = useState('');
  const [ messages, loading ] = useCollectionData(
    firestore.collection('messages').orderBy('createdAt')
  )   

  const sendMessage = async() => {
    console.log(user);
    firestore.collection('messages').add({
      uid: user.uid,
      displayName: user.displayName,
      photoURL: user.photoURL,
      text: inputValue,
      createdAt: firebase.firestore.FieldValue.serverTimestamp()
    })
    setInputValue('')
  }

  if(loading) {
    return <Loader />
  }
  return ( 
      <Container>
         <Grid container
            style={{height: window.innerHeight - 80}}
            justifyContent={"center"}
            alignItems={"center"}
          >
          <div style={{width: '80%', padding: '20px', height: '70vh', border: '1px solid blue', overflowY: 'auto'}}>
            {messages.map(item => 
              <div className='message'
                style={{
                  borderRadius: '3px',
                  margin: '20px',
                  border: item.uid === user.uid ? '1px solid green' : '1px solid red',
                  marginLeft: item.uid === user.uid ? 'auto' : '10px',
                  width: 'fit-content'
                }}
              >
                <div className="top">
                  <img src={item.photoURL} />
                  <h4>{item.displayName}</h4>
                </div>
                <p className="text">{item.text}</p>
              </div>
            )}
          </div>

          <Grid container
              direction={'row'}
              justifyContent={'space-between'}
              style={{width: '80%'}}
            >
              <TextField 
                variant='outlined' 
                style={{width: '70%'}}
                value={ inputValue }
                onChange={(e) => setInputValue(e.target.value)}
              />
              <Button onClick={sendMessage} variant='contained' >Send</Button>
            </Grid>
        </Grid>
      </Container>
    );
}
 
export default Chat;