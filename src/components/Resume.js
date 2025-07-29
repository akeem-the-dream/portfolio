import React from 'react';
import resume from '../assets/docs/resume.pdf';
import { Tooltip } from 'react-tooltip';

export default function Resume() {
  return (
    <div className="download">
      <a data-tooltip-id="resume" data-tooltip-content="Click to Download my Resume!" href={resume} target="blank" download>
        <button>
          <span>Download Resume</span>
        </button>
      </a>
      <Tooltip id="resume" />
    </div>
  );
}
