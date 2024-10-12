// import React, { useCallback, useState } from 'react';
// import { pdfjs, Document, Page } from 'react-pdf';
// import { useResizeObserver } from '@wojtekmaj/react-hooks';
// import { GrNext, GrPrevious } from "react-icons/gr";
// import { BsZoomIn, BsZoomOut  } from "react-icons/bs";
// import '../assets/css/pdf.css';

// pdfjs.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@4.4.168/build/pdf.worker.min.mjs`;

// const options = {
//   cMapUrl: '/cmaps/',
//   standardFontDataUrl: '/standard_fonts/',
// };

// const resizeObserverOptions = {};
// const maxWidth = 800; // Maximum width for the PDF viewer

// export default function PDFViewer() {
//   const [file, setFile] = useState(null);  // For loading a file
//   const [numPages, setNumPages] = useState(null);  // Total number of pages in the PDF
//   const [pageNumber, setPageNumber] = useState(0.3);  // Current page number
//   const [scale, setScale] = useState(1.0);  // Zoom level (1.0 is 100%)
//   const [containerRef, setContainerRef] = useState(null);  // Container reference for resizing
//   const [containerWidth, setContainerWidth] = useState(null);  // Container width for responsive scaling

//   // Handle file upload
//   const onFileChange = (event) => {
//     const file = event.target.files[0];
//     setFile(file);
//     setPageNumber(1); // Reset to page 1 when a new document is loaded
//   };

//   // On PDF load success
//   const onDocumentLoadSuccess = ({ numPages }) => {
//     setNumPages(numPages);
//   };

//   // Handle resizing to make the PDF viewer responsive
//   const onResize = useCallback((entries) => {
//     const [entry] = entries;
//     if (entry) {
//       setContainerWidth(entry.contentRect.width);
//     }
//   }, []);
  
//   useResizeObserver(containerRef, resizeObserverOptions, onResize);

//   // Pagination controls
//   const goToPrevPage = () => {
//     if (pageNumber > 1) setPageNumber(pageNumber - 1);
//   };

//   const goToNextPage = () => {
//     if (pageNumber < numPages) setPageNumber(pageNumber + 1);
//   };

//   // Zoom controls
//   const zoomIn = () => setScale(scale + 0.2);
//   const zoomOut = () => setScale(scale > 0.6 ? scale - 0.2 : scale);

//   return (
//     <div className="Example">
//       <div className="flex items-start justify-start">
//         <div className="flex flex-col w-[50%]">
//         <header>
//             <h1>PDF Viewer</h1>
//         </header>
        
//         <div className="Example__container">
//             <label htmlFor="file">Load from file:</label>
//             <input type="file" accept=".pdf" onChange={onFileChange} />
//         </div>
//         </div>
//         {file && (
//             <div className='relative min-w-[32%] h-[85vh] border border-[#000] bg-white'>
//             <div className="controls absolute top-0 left-[50%] -translate-x-1/2 z-1">
//                 <button onClick={goToPrevPage} disabled={pageNumber <= 1} className='hover:transform hover:scale-[1.1] hover:cursor-pointer hover:text-blue-500'><GrPrevious /></button>
//                 <span className='text-xs font-medium text-[#171717] px-5'><b className='font-extrabold text-blue-500'>{pageNumber}</b> &nbsp;&nbsp;/&nbsp;&nbsp; {numPages}</span>
//                 <button onClick={goToNextPage} disabled={pageNumber >= numPages} className='hover:transform hover:scale-[1.1] hover:cursor-pointer hover:text-blue-500'><GrNext /></button>
//             </div>
//                 <button onClick={zoomOut} className='absolute top-2 left-2 hover:transform hover:scale-[1.1] hover:cursor-pointer hover:text-blue-500' disabled={scale <= 0.6}><BsZoomOut /></button>
//                 <button onClick={zoomIn} className='absolute top-2 right-2 hover:transform hover:scale-[1.1] hover:cursor-pointer hover:text-blue-500'><BsZoomIn /></button>
//             <div className="Example__container__document" ref={setContainerRef}>
//                 <Document
//                 file={file}
//                 onLoadSuccess={onDocumentLoadSuccess}
//                 options={options}
//                 style={{ width: '100%', height: '85%' }}
//                 className="overflow-auto"
//                 >
//                 <Page
//                     pageNumber={pageNumber}
//                     scale={scale}
//                     width={containerWidth ? Math.min(containerWidth, maxWidth) : maxWidth}
//                 />
//                 </Document>
//             </div>
//             </div>
//         )}
//       </div>
//     </div>
//   );
// }
import React, { useCallback, useEffect, useState } from 'react';
import { pdfjs, Document, Page } from 'react-pdf';
import { useResizeObserver } from '@wojtekmaj/react-hooks';
import { GrNext, GrPrevious } from "react-icons/gr";
import { BsZoomIn, BsZoomOut } from "react-icons/bs";
import '../assets/css/pdf.css';

pdfjs.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@4.4.168/build/pdf.worker.min.mjs`;

const options = {
  cMapUrl: '/cmaps/',
  standardFontDataUrl: '/standard_fonts/',
};

const resizeObserverOptions = {};
const maxWidth = 800; // Maximum width for the PDF viewer

export default function PDFViewer() {
  const [file, setFile] = useState(null);  // For loading a file
  const [numPages, setNumPages] = useState(null);  // Total number of pages in the PDF
  const [pageNumber, setPageNumber] = useState(1);  // Current page number
  const [scale, setScale] = useState(1.0);  // Zoom level (1.0 is 100%)
  const [containerRef, setContainerRef] = useState(null);  // Container reference for resizing
  const [containerWidth, setContainerWidth] = useState(null);  // Container width for responsive scaling

  // Handle file upload
  const onFileChange = (event) => {
    const file = event.target.files[0];
    setFile(file);
    setPageNumber(1); // Reset to page 1 when a new document is loaded
  };




    // Fetch the PDF file from Django backend
    useEffect(() => {
        const fetchPDF = async () => {
        try {
            const response = await fetch('http://localhost:8000/api/pdf/'); // Adjust the URL based on your backend
            const blob = await response.blob();
            setFile(URL.createObjectURL(blob)); // Create a local URL for the fetched PDF
        } catch (error) {
            console.error("Error fetching the PDF: ", error);
        }
        };

        fetchPDF();
    }, []);


  // On PDF load success
  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  // Handle resizing to make the PDF viewer responsive
  const onResize = useCallback((entries) => {
    const [entry] = entries;
    if (entry) {
      setContainerWidth(entry.contentRect.width);
    }
  }, []);
  
  useResizeObserver(containerRef, resizeObserverOptions, onResize);

  // Pagination controls
  const goToPrevPage = () => {
    if (pageNumber > 1) setPageNumber(pageNumber - 1);
  };

  const goToNextPage = () => {
    if (pageNumber < numPages) setPageNumber(pageNumber + 1);
  };

  // Zoom controls
  const zoomIn = () => setScale(prevScale => prevScale + 0.2);
  const zoomOut = () => setScale(prevScale => (prevScale > 0.6 ? prevScale - 0.2 : prevScale));

  return (
    <div className="Example">
      <div className="flex items-start justify-start">
        <div className="flex flex-col w-[50%]">
          <header>
            <h1>PDF Viewer</h1>
          </header>
          <div className="Example__container">
            <label htmlFor="file">Load from file:</label>
            <input type="file" accept=".pdf" onChange={onFileChange} />
          </div>
        </div>
        {file && (
          <div className='relative min-w-[32%] h-[85vh] border  bg-white'>
            <div className="controls absolute -top-[0.35rem] left-[50%] -translate-x-1/2 z-1">
              <button onClick={goToPrevPage} disabled={pageNumber <= 1} className='hover:transform hover:scale-[1.1] hover:cursor-pointer hover:text-blue-500 p-[0.45rem]'><GrPrevious /></button>
              <span className='text-xs font-medium text-[#171717] px-5'><b className='font-extrabold text-blue-500'>{pageNumber}</b> &nbsp;&nbsp;/&nbsp;&nbsp; {numPages}</span>
              <button onClick={goToNextPage} disabled={pageNumber >= numPages} className='hover:transform hover:scale-[1.1] hover:cursor-pointer hover:text-blue-500 p-[0.45rem]'><GrNext /></button>
            </div>
            <button onClick={zoomOut} className='absolute top-1 left-2 hover:transform hover:scale-[1.1] hover:cursor-pointer hover:text-blue-500 p-[0.45rem]' disabled={scale <= 0.6}><BsZoomOut /></button>
            <button onClick={zoomIn} className='absolute top-1 right-2 hover:transform hover:scale-[1.1] hover:cursor-pointer hover:text-blue-500 p-[0.45rem]'><BsZoomIn /></button>
            <div className="Example__container__document overflow-auto h-[100%]" ref={setContainerRef}>
              <Document
                file={file}
                onLoadSuccess={onDocumentLoadSuccess}
                options={options}
                style={{ width: '100%', height: '100%' }} // Ensure it takes the full height of the container
              >
                <Page
                  pageNumber={pageNumber}
                  scale={scale}
                  width={containerWidth ? Math.min(containerWidth, maxWidth) : maxWidth}
                />
              </Document>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
