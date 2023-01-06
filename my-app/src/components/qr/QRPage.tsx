import React, {ReactInstance, useRef} from 'react';
import ReactToPrint, { useReactToPrint } from 'react-to-print';
import Header from "../Header";

function QrPage() {
    // const componentRef = useRef(null);
    // const handlePrint = useReactToPrint({
    //     content: () => componentRef.current,
    // });
//TODO: make page responsive after printing, because replacing innerHTML removes the functionality
    function printQR() {
        const qr = document.getElementById("qr");
        let printContents = "";
        if(qr!==null){
            printContents = qr.innerHTML;
        }
        const originalContents = document.body.innerHTML;
        document.body.innerHTML = printContents;
        window.print();
        document.body.innerHTML = originalContents;
    }

    return (
        <div>
            <Header/>
            <div className="flex flex-col p-6 rounded-r-lg shadow-lg max-w-sm w-full mx-auto justify-center">
                <p className={"font-bold text-center"}>
                    Show your QR to receive payment
                </p>
                <div id="qr" className={"mx-auto justify-center"} >
                    <img id="x" src={process.env.PUBLIC_URL + "/qrcode.png"} className={"object-none object-center"}/>
                </div>
                <p className={"font-bold text-center"}>
                    Alun Noodle
                </p>
            </div>
            <div className={"flex justify-center my-4"}>
            {/*<ReactToPrint*/}
            {/*    trigger={() => <button type={"button"} className={"px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"}>*/}
            {/*        Print QR*/}
            {/*    </button>}*/}
            {/*    content={() => componentRef}*/}
            {/*/>*/}

            <button type={"button"} onClick={printQR} className={"px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"}>
                Print QR
            </button>
            </div>
        </div>
    );
}

export default QrPage;