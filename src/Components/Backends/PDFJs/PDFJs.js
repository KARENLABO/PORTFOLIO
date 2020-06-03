export default function PDFJs(source, element) {

    const iframe = document.createElement('iframe');
    iframe.src = `/pdfjs/web/viewer.html?file=${source}`;
    iframe.width = '80%';
    iframe.height = '850px';




    element.appendChild(iframe);
}