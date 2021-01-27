import React from 'react';
import { useAuth } from '../../../library/auth';
import dayjs from 'dayjs';

const Message = (props) => {
  const { text, uid, photoURL, createdAt } = props.message;
  const auth = useAuth();
  const messageClass = uid === auth.user?.uid ? 'sent' : 'received';

  return (
    <>
      <div className='timestamp'>
        <p>{dayjs.unix(createdAt?.seconds).format('MMM DD YYYY hh:mma')}</p>
      </div>

      <div className={`message ${messageClass}`}>
        <img
          src={
            photoURL ||
            `https://ui-avatars.com/api/?background=random&name=${auth.user?.displayName}`
          }
          alt='Profile Avatar'
        />
        <div>
          <p>{text}</p>
        </div>
      </div>
    </>
  );
};

export default Message;
