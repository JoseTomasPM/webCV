"use client"

export default function MissionItem({ title, progress, link }: {
    title: string;
    progress: number;
    link: string;

    
}) {
    return (
        <div className="mb-4">
        <a  href={link} target="_blank" rel="noopener noreferrer" className="pixel-link">
            {title}
        </a>
        <div className="w-full h-5 bg-gray-800 border-2 border-white rounded-sm overflow-hidden shadow-inner">
            <div
            className="h-full animated-progress transition-all duration-500"
            style={{
                width: `${progress}%`,
            }}
            ></div>
        </div>
        <p className="text-xs mt-1 text-right">{progress} %</p>
        </div>
    );
}
