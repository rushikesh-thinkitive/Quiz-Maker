import React from 'react';
import './css/takequizbutton.css';
import { Tooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css';

const Button = ({
  name = 'button',
  value = 'Click Me',
  onClick = () => {},
  className = 'primary',
  disabled = false,
  ariaLabel = 'button',
  tooltip = 'Take Quiz',
}) => {
  return (
    <>
      <input
        type="button"
        name={name}
        value={value}
        onClick={onClick}
        className={`custom-button ${className}`}
        disabled={disabled}
        aria-label={ariaLabel}
        data-tooltip-id="button-tooltip"
        data-tooltip-content={tooltip}
      />
      <Tooltip id="button-tooltip" place="top" effect="solid" />
    </>
  );
};

export default Button;
