import React from "react";

export default function Footer() {
  return (
    <footer className="w-full py-8 text-center border-t border-gray-900 mt-auto">
      <div className="text-gray-600 font-mono text-xs space-y-2">
        <p>© {new Date().getFullYear()} Rahul N R.</p>
        <div className="opacity-70 hover:opacity-100 transition-opacity duration-300">
          <p className="font-bold tracking-widest text-gray-500">
            POWERED BY R.U.T.T.S.S.U. CORE v1.0
          </p>
          <p className="text-[10px] tracking-wide text-gray-700">
            (Rapid Unified Technology Transfer & Secure System Unit)
          </p>
        </div>
      </div>
    </footer>
  );
}