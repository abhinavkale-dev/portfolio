"use client";

import React from 'react';
import BookCall from './BookCall';

const Contact = () => {
  return (
    <div className="my-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-[#111111] rounded-lg overflow-hidden">
        {/* Left Side – Text Content */}
        <div className="p-8 flex flex-col justify-center">
          <div className="mb-6">
            <p className="text-[#9CA3AF] text-sm mb-1">Start here</p>
            <h2 className="text-2xl md:text-3xl text-white font-medium mb-2">
              Let&apos;s hop on a quick call and see if we&apos;ve got the&nbsp;
              <span className="italic">right chemistry</span>.
            </h2>
          </div>

          <div className="space-y-8 mt-4">
            <div>
              <p className="text-[#4EA5FF] font-medium mb-2">Want to bounce ideas?</p>
              <p className="text-[#9CA3AF]">
                Let&apos;s jump on a quick call and explore what&apos;s possible.
              </p>
            </div>

            <div>
              <p className="text-[#1ED760] font-medium mb-2">
                Looking to build something bigger?
              </p>
              <p className="text-[#9CA3AF]">
                I can connect you with the right team and resources.
              </p>
            </div>

            <div>
              <p className="text-[#FF7A45] font-medium mb-2">In Nagpur?</p>
              <p className="text-[#9CA3AF]">
                Perfect! Let&apos;s grab a coffee and brainstorm in person.
              </p>
            </div>
          </div>
        </div>

        {/* Right Side – Book Call */}
        <div className="bg-[#1A1A1A] p-8 flex flex-col items-center justify-center">
          <div className="max-w-md mx-auto w-full flex flex-col items-center">
            <div className="flex justify-center mb-8">
              <div className="w-20 h-20 rounded-full bg-[#2A2A2A] p-1.5">
                <div className="w-full h-full rounded-full border-2 border-dashed border-[#64FFDA] p-1 flex items-center justify-center animate-pulse">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#64FFDA"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </div>
              </div>
            </div>

            <div className="text-center mb-6">
              <h3 className="text-xl text-white font-medium mb-3">Ready to chat?</h3>
              <p className="text-[#9CA3AF] mb-6">
                  Schedule a free 30-minute strategy call to refine your idea and initiate our collaboration.
              </p>

              <div className="flex justify-center gap-2 mb-6">
                <span className="inline-flex h-2 w-2 rounded-full bg-[#64FFDA]" />
                <span className="inline-flex h-2 w-2 rounded-full bg-[#4EA5FF]" />
                <span className="inline-flex h-2 w-2 rounded-full bg-[#FF7A45]" />
              </div>
            </div>

            <div className="mx-auto">
              <BookCall />
            </div>

            <div className="mt-8 border-t border-[#2A2A2A] pt-6 w-full">
              <p className="text-center text-[#9CA3AF] text-sm mt-5 italic">
                &quot;Turning your vision into digital reality is just one conversation away&quot;
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
