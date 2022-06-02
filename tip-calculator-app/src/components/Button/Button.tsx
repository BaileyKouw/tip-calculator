import React from 'react';
import './Button.css';

interface Props {
    children: React.ReactNode;  
    buttonStyle: string;
    buttonWidth: string;
    buttonClicked: string;
    buttonDisabled: boolean;
    onClick: ()=>void; 
}

const Button: React.FC<Props> = ({children, buttonStyle, buttonWidth, buttonClicked, buttonDisabled, onClick}) => {
  // array of possible button styles and widths -- can be expanded if new buttons are needed
  // changing react button styles dynamically help from : https://www.youtube.com/watch?v=JfNjGLGaxR4&list=WL&index=328&ab_channel=Skillthrive
  const BUTTON_STYLES = [
    "btn-tips",
    "btn-custom-tips",
    "btn-reset",
  ]

  const BUTTON_WIDTH = [
    "btn-tips-width",
    "btn-reset-width"
  ]

  // check button style and width, if it does not exist in the list, default to the "standard" button
  const checkStyle = BUTTON_STYLES.includes(buttonStyle) ? buttonStyle : BUTTON_STYLES[0];
  const checkWidth = BUTTON_WIDTH.includes(buttonWidth) ? buttonWidth : BUTTON_WIDTH[0];

  // mark button as active class if the buttonClicked prop is "on"
  const checkClicked = buttonClicked === 'on' ? 'btn-active' : 'btn';

  return( 
    <button id= {checkStyle} className={`${checkStyle} ${checkWidth} ${checkClicked}`} onClick={onClick} disabled={buttonDisabled} >
      {children}
    </button>
  );
}

export default Button;