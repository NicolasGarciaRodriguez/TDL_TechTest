import React from 'react';
import Image from 'next/image';
import './Unauthenticated.styles.scss';

const UnauthenticatedPage = () => {
  return (
    <div className='container'>
      {/* <Image
        src="../../assets/images/auth_gif.gif"
        alt="Access Denied"
        width={400}
        height={300}
      /> */}
      <h1 className='title'>Not here!</h1>
      <p className='message'>You need to be logged in to access this page.</p>
    </div>
  )
}

export default UnauthenticatedPage