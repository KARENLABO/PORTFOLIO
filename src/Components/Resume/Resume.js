import React from 'react';
import MiniNavBar from '../MiniNavBar/MinibarwithBoostrap';
import './Resume.css';
import resume from '../../pdf/resume.pdf';
import PDFViewer from '../PDFViewer/PDFViewer'
import PDFJs from '../Backends/PDFJs/PDFJs';

function Resume({ option }) {
    return (
        <div className='OverviewPage2'>
            <MiniNavBar opt={option} />
            <div className='pdf'>
                <PDFViewer
                    backend={PDFJs}
                    src={resume}
                    className='OverviewPage'
                />
            </div>
        </div>
    );
}

export default Resume;