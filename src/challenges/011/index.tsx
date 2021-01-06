import React, { ReactElement } from 'react';
import './011.css';

const CloseButton: React.FC = (): ReactElement => {
	return <button className='close-button'> x </button>;
};

interface image {
  src: string,
  alt: string
}

const CardImage: React.FC<image> = ({ src, alt}): ReactElement => {
	return (
		<figure>
			<img src={src} alt={alt} />
		</figure>
	);
};

interface messageInfo {
  title: string,
  subInfo: string
}

const MessageInfo: React.FC<messageInfo> = ({ title, subInfo }): ReactElement => {
	return (
		<React.Fragment>
			<h2>{title}</h2>
			<small>{subInfo}</small>
		</React.Fragment>
	);
};

interface button{
  message: string
}

const SubmitButton: React.FC<button> = ({ message }): ReactElement => {

  return(
    <button>{message}</button>
  )
}

const FlashMessage: React.FC = (): ReactElement => {
	return (
    <div className="container">
      <CloseButton />
      <CardImage src='nop' alt='some' />
      <MessageInfo title='TITLE' subInfo='SUBINFO' />
      <SubmitButton message='Done'/>
    </div>
  );
};
export default FlashMessage;

//https://dribbble.com/shots/14165370-Daily-UI-flash-message
