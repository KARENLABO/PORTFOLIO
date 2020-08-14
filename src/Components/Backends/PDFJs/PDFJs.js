export default function PDFJs(source, element) {

    const iframe = document.createElement('iframe');
    iframe.src = `/pdfjs/web/viewer.html?file=${source}`;
    iframe.width = '85%';
    iframe.height = '550px';




    element.appendChild(iframe);
}