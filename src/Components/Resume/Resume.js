import React from 'react';
import MiniNavBar from '../MiniNavBar/MiniNavBar';
import './Resume.css';
import resume2 from '../../pdf/resume.pdf';
import PDFViewer from 'pdf-viewer-reactjs'

function Resume({ option }) {
    return (
        <div>
            <MiniNavBar opt={option}/>
            <PDFViewer
                document={{
                    url: 'https://arxiv.org/pdf/quant-ph/0410100.pdf',
                }}
            />
            
        </div>
    );
}

export default Resume;