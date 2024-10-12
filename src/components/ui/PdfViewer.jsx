import pdfFile from '../../assets/pdf/Manzar_Imam_Resume.pdf';

const PdfViewer = () => {
    return (
        <div className='min-h-full w-full'>
            <iframe 
                src={pdfFile} 
                width="100%" 
                height="600px" 
                title="PDF Viewer"
            />
        </div>
    );
};

export default PdfViewer;
