import React, { useState, useRef, useEffect } from 'react';
import { useAuth } from '../../../library/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import Message from '../Message';
import firebase from 'firebase/app';

const firestore = firebase.firestore();

const MessageList = () => {
  const dummy = useRef();
  const messagesRef = firestore.collection('messages');
  const query = messagesRef.orderBy('createdAt', 'asc').limit(25);
  const auth = useAuth();
  const [messages] = useCollectionData(query, { idField: 'id' });
  const [formValue, setFormValue] = useState('');

  const sendMessage = async (e) => {
    e.preventDefault();

    const { uid, photoURL } = auth.user;

    await messagesRef.add({
      text: formValue,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      uid,
      photoURL,
    });

    setFormValue('');
  };

  useEffect(() => {
    dummy.current.scrollIntoView({ behavior: 'smooth' });
  }, [messages?.length]);

  return (
    <>
      <main>
        {messages &&
          messages.map((msg) => <Message key={msg.id} message={msg} />)}
        <span ref={dummy}></span>
      </main>

      <form onSubmit={sendMessage}>
        <input
          value={formValue}
          onChange={(e) => setFormValue(e.target.value)}
          placeholder='Enter message...'
        />

        <button type='submit' disabled={!formValue}>
          📩
        </button>
      </form>
    </>
  );
};

export default MessageList;
