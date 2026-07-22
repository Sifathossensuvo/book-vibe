import React from 'react';
// আপনি যদি React Router ব্যবহার করেন তবে: import { Link } from 'react-router-dom';
import { Link } from 'react-router-dom';
// আপনি যদি Next.js ব্যবহার করেন তবে: import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-5 bg-gray-50">
      {/* SVG Illustration Container */}
      <div className="w-full max-w-[400px] sm:max-w-[500px] animate-float-scene flex justify-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 500 500"
          className="w-[280px]"
        >
          {/* Shelf 1 */}
          <g className="shelf">
            <path
              d="M60.2 311.4c1 0 39.3 19.3 39.3 19.3h372.1l-30-31.7z"
              className="opacity-[0.12] fill-white"
            />
            <path
              d="M439.7 311.4H60.1a4 4 0 0 1-4-4V301a4 4 0 0 1 4-4h379.6a4 4 0 0 1 4 4v6.4a4 4 0 0 1-4 4"
              fill="#cc755a"
            />
            <path
              d="M60.2 297a4 4 0 0 0-4 3.8 4 4 0 0 0 4 3.8h379.4a4 4 0 0 0 4-3.8 4 4 0 0 0-4-3.8z"
              fill="#d7ac71"
            />
            <path
              d="M63.3 301.8h372.1c1.5 0 1.5-2.3 0-2.3H63.3c-1.5 0-1.5 2.3 0 2.3"
              fill="#e5d2a7"
            />
          </g>

          {/* Shelf 2 */}
          <g className="shelf">
            <path
              d="M57.3 394.9c1.1 0 39.3 19.2 39.3 19.2h372.2l-30-31.7z"
              className="opacity-[0.12] fill-white"
            />
            <path
              d="M439.7 394H60.1a4 4 0 0 1-4-4v-6.4a4 4 0 0 1 4-4h379.6a4 4 0 0 1 4 4v6.4a4 4 0 0 1-4 4"
              fill="#cc755a"
            />
            <path
              d="M60.2 379.6a4 4 0 0 0-4 3.8 4 4 0 0 0 4 3.8h379.4a4 4 0 0 0 4-3.8 4 4 0 0 0-4-3.8z"
              fill="#d7ac71"
            />
            <path
              d="M63.3 384.4h372.1c1.5 0 1.5-2.3 0-2.3H63.3c-1.5 0-1.5 2.3 0 2.3"
              fill="#e5d2a7"
            />
          </g>

          {/* Cat Elements */}
          <g id="cat">
            <g id="cat-tail" className="animate-tail-swing">
              <path
                d="M351.5 272.5s11.5-5.4 17.7-6.8l-6.2 6.1s23.2 13 32.7 1.4 8.2-44.2-15.6-66c-23.9-21.7-38.1-11.5-53.1-36.7l9.5 4s-21-14.2 4.8-40 47-13.6 47-13.6s31.2 8.8 31.2 33.3c0 0-38.8-8.2-47.6 7.5s13 23.8 13 23.8l-4.8-10.2s29.9 27.8 33.3 48.3 6.8 61.2-19 66.6c-26 5.4-32-13.6-45.6-10.2s2.7-7.5 2.7-7.5"
                fill="#52395b"
              />
              <path
                d="M419.5 154.2c0-24.5-31.3-33.3-31.3-33.3s-18-10.5-41.2 8.4c7-2.9 18.9-7.1 31.7-4l-9.2 6.4s12-3.4 16.3-1a43 43 0 0 1 14.3 15s-40.1-7.2-41.5 20.7c-1.3 28 25.5 23.1 38.1 43.2 12.6 20 16.3 39.1 15 49.7-1.4 10.5-8.2 23-18.7 25.5-10.6 2.3-36.8-1-32-7.2q2.3-2.8 5.1-4.2l-3-1.6 6-6c-6 1.3-17.6 6.7-17.6 6.7s-16.3 11-2.7 7.5c13.6-3.4 19.7 15.6 45.5 10.2s22.5-46.2 19-66.6c-3.3-20.4-33.3-48.3-33.3-48.3l4.8 10.2s-21.8-8.2-13-23.8c9-15.7 47.7-7.5 47.7-7.5"
                className="opacity-[0.29] fill-white"
              />
              <path
                d="m388.2 120.9s-21-12.3-47 13.6c-25.8 25.8-4.7 40-4.7 40l-9.5-4c14.2 24 27.8 16 49.6 33.7q-.5-4.3-2-8.4Q385 202 391.5 212q-1-9.3-4-18l7.7 4.2a22 22 0 0 1-2-9.2c-7-8-13.1-13.7-13.1-13.7l4.7 10.2s-21.8-8.2-13-23.8c9-15.7 47.7-7.5 47.7-7.5 0-24.5-31.3-33.3-31.3-33.3"
                fill="#eeddc6"
              />
            </g>

            <path
              id="cat-hand"
              className="animate-hand-swing"
              d="M199 217.7s-12.3 14.3-21.8 4.8-.7-42.2-21-52.4c-20.5-10.2-33.4 13-26 16.4 7.6 3.4 12.3-.7 12.3-.7s-.7 10.9 10.2 6.8 8.9 0 8.9 0a91 91 0 0 0 2 22.4c1.3 5.8 3.1 11.6 6.3 16.7a26 26 0 0 0 5.6 6.3c2.9 2.3 5.7 2.2 8.8 3.7q-1.4 1.4-3 2c7.7 1.5 15.5-2.1 22.6-5.7 5.1-2.5 9-6 11.4-11.4 2.7-6.1-6.8-18.4-16.3-8.9"
              fill="#52395b"
            />
            
            <path
              d="M250.7 94.5s4.8-18.6 3.5-26.8l4 4.8-2-22s39.9 33.7 22 61.1c-17.8 27.5-27.5-17.1-27.5-17.1"
              fill="#52395b"
            />
            <path
              d="M193 99s.5-17.4-2.4-24.4l4.6 3.4-6.4-19S231 80.4 221 108.4c-10 28-27.8-9.5-27.8-9.5"
              fill="#52395b"
            />
            <path
              d="m246 104.5-4.1-4.8c1.3 8.2-3.5 26.8-3.5 26.8s2.6 11.9 7.5 19.6c3.2-.2 6.8-2.7 10.9-9 12-18.4-2-39.7-12.6-51.6z"
              fill="#000000"
            />
            <path
              d="M346.7 231l6.1 7.5s-4.7-21-21-27.9-44.2-10.8-60.6-44.2c0 0 14.3-5.4 20.4-11.5l6.8-1.4-6-4 13.5-1.4-16.3-11h8.8s-15.6-14.9-17-21c-1.3-6.1-2-19-10.2-21.8 0 0-34-14.3-71.4-2l-8.8 2 5.4 3.4s-5.4 21.1-25.8 34l4.7.7s-7.4 5.5-11.5 7.5l10.9 4.8-5.5 2.7s19 12.9 25.9 17 13.6 6.8 15.6 6.8c1.5 0-8.2 13.5-16.1 22.1 3.3.1 6.7 2.3 6.7 6.6q.4 12.4 5.8 23.8 3.8.5 5.5 4.6c2.1 6 6 11 10.3 15.5 7 3.4 11 5.6 11 5.6s-3.5 8.8 4.7 18.4 25.8 21.7 25.8 21.7-32.6-12.9-38.7 6.8l123.7.7s13-34.7-2.7-66"
              fill="#52395b"
            />
          </g>

          {/* 404 Text Elements */}
          <g className="error-text">
            <text
              x="250"
              y="440"
              textAnchor="middle"
              className="text-[20px] fill-[#52395b] font-extrabold animate-glitch"
            >
              Page Not Found
            </text>
            <text
              x="250"
              y="420"
              textAnchor="middle"
              className="text-[48px] font-extrabold animate-pulse-404 animate-glitch"
            >
              404
            </text>
          </g>
        </svg>
      </div>

      {/* Action Button */}
      <a
        href="/"
        className="group relative z-10 -mt-[30px] sm:mt-[-30px] flex items-center justify-center gap-[12px] px-7 sm:px-8 py-3.5 sm:py-4 bg-gradient-to-r from-[#52395b] to-[#733b59] text-white rounded-full font-bold text-base sm:text-lg cursor-pointer transition-all duration-300 ease-in-out shadow-[0_6px_20px_rgba(115,59,89,0.3)] hover:shadow-[0_10px_25px_rgba(115,59,89,0.4)] hover:-translate-y-1 hover:from-[#5a4065] hover:to-[#8a4a6c] active:-translate-y-0.5 overflow-hidden no-underline"
      >
        {/* Shimmer effect */}
        <span className="absolute top-0 -left-full w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-all duration-500 ease-in-out group-hover:left-full -z-1" />
        
        {/* Home Icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          className="fill-white transition-transform duration-300 ease-in-out group-hover:-translate-x-1"
        >
          <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
        </svg>
        
        Back to Home
      </a>
    </div>
  );
}