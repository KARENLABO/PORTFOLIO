import React from 'react';
import MiniNavBar from '../MiniNavBar/MiniNavBar';
import './Resume.css';
import resume from '../../pdf/resume.pdf';
import PDFViewer from '../PDFViewer/PDFViewer'
import PDFJs from '../Backends/PDFJs/PDFJs';

function Resume({ option }) {
    return (
        <div>
            <MiniNavBar opt={option}/>
            <PDFViewer 
                backend={PDFJs}
                src={resume}
            />
        </div>
    );
}

export default Resume;