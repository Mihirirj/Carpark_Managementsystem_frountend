import TopTitleBar from "../../../TopTitleBar";
import QRCode from "react-qr-code";

export default function ScanQRCode() {
    return (
        <div>
            <TopTitleBar title="Scan QR Code"/>
            <div className="flex flex-col p-5 bg-white rounded-xl mx-5 items-center py-10">
                <div className="rounded-lg">
                    <QRCode
                        size={256}
                        value={"https://www.google.com"}
                        viewBox={`0 0 256 256`}
                    />
                </div>
                <div className="mt-10 flex justify-center items-center">
                    <h3 className="font-bold text-lg">Scan me for the enter and exit</h3>
                </div>
            </div>
        </div>
    );
}