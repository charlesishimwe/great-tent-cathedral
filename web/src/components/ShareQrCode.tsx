
"use client";

import { useEffect, useRef, useState } from "react";
import { QRCodeCanvas } from "qrcode.react";

export default function ShareQrCode() {
  const [url, setUrl] = useState("");
  const qrRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setUrl(window.location.href);
  }, []);

  function downloadQR() {
    const canvas = qrRef.current?.querySelector("canvas");

    if (!canvas) return;

    const link = document.createElement("a");
    link.href = canvas.toDataURL("image/png");
    link.download = "great-tent-cathedral-qr.png";
    link.click();
  }

  return (
    <section className="px-6 py-16 text-center">
      <h2 className="text-3xl font-bold text-white">
        Share This Page
      </h2>

      <p className="mx-auto mt-4 max-w-xl text-[#243B2A]">
        Share the Great Tent Cathedral with your community.
      </p>

      <div className="mx-auto mt-8 flex max-w-xs flex-col items-center rounded-2xl bg-[#F7F6F0] p-8 shadow-lg">

        <div
          ref={qrRef}
          className="rounded-xl bg-white p-3"
        >
          {url && (
            <QRCodeCanvas
              value={url}
              size={200}
              level="H"
              includeMargin={true}
              bgColor="#FFFFFF"
              fgColor="#243B2A"
            />
          )}
        </div>

        <p className="mt-5 font-semibold text-[#243B2A]">
          Scan to open this page
        </p>

        <button
          type="button"
          onClick={downloadQR}
          disabled={!url}
          className="mt-5 rounded-full bg-[#243B2A] px-6 py-3 text-sm font-semibold text-white hover:bg-[#314E38] disabled:opacity-50"
        >
          Download QR Code
        </button>

      </div>
    </section>
  );
}

