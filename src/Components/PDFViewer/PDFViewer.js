import React, { Component } from 'react';

export default class PDFViewer extends Component {
    constructor({ backend, src }) {
        super({ backend, src });
        this.viewerRef = React.createRef();
        this.backend = backend;
        this.src = src;
    }

    componentDidMount() {
        this.backend(this.src, this.viewerRef.current);

    }

    render() {
        return (
            <div ref={this.viewerRef} id='viewer'></div>
        )
    }

}