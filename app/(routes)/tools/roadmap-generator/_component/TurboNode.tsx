// TurboNode.tsx
import { Handle, Position } from '@xyflow/react';
import React from 'react';

function TurboNode({ data }: any) {
  return (
    <div className="rounded-xl border-2 border-gray-700 bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-200 w-64 sm:w-72 group hover:border-amber-500 relative z-10">
      {' '}
      {/* Responsive width */}
      <div className="p-3 sm:p-4">
        {' '}
        {/* Responsive padding */}
        <h3 className="font-bold text-base sm:text-lg text-white mb-2 sm:mb-3 group-hover:text-amber-400 transition-colors">
          {' '}
          {/* Responsive text size, margin */}
          {data.title}
        </h3>
        <p className="text-xs sm:text-sm text-gray-300 mb-3 sm:mb-4 line-clamp-3 leading-relaxed">
          {' '}
          {/* Responsive text size, margin */}
          {data.description}
        </p>
        {data?.link && (
          <a
            className="inline-flex items-center text-amber-400 hover:text-amber-500 font-medium text-xs sm:text-sm border border-amber-400 hover:border-amber-500 bg-gray-900 hover:bg-gray-700 px-2 py-1.5 sm:px-3 sm:py-2 rounded-lg transition-all duration-200 relative z-20" // Responsive padding, text size
            href={data.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn More
            <svg
              className="ml-1 w-3 h-3 sm:w-4 sm:h-4" // Responsive icon size
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
          </a>
        )}
        <Handle
          type="target"
          position={Position.Top}
          className="!bg-amber-500 !border-2 !border-gray-900 !w-3 !h-3"
        />
        <Handle
          type="source"
          position={Position.Bottom}
          className="!bg-amber-500 !border-2 !border-gray-900 !w-3 !h-3"
        />
      </div>
    </div>
  );
}

export default TurboNode;
