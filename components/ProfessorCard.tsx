'use client';

import { Professor } from '@/lib/professors';

interface ProfessorCardProps {
  professor: Professor;
}

export default function ProfessorCard({ professor }: ProfessorCardProps) {
  return (
    <div className="bg-white border border-[#e0e0e0] rounded-xl p-6 hover:shadow-2xl hover:border-[#2d6be4] transition-all group">
      {/* Name & Role */}
      <h3 className="text-xl font-bold font-syne text-[#1a1a1a] mb-1">
        {professor.name}
      </h3>
      <p className="text-sm text-[#2d6be4] font-dm-sans font-medium mb-2">
        {professor.role}
      </p>
      <p className="text-sm text-[#666666] font-dm-sans mb-4">
        {professor.dept}
      </p>

      {/* Bio */}
      <p className="text-sm text-[#666666] font-dm-sans leading-relaxed mb-4 line-clamp-3">
        {professor.bio}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-4">
        {professor.tags.slice(0, 3).map((tag, idx) => (
          <span
            key={idx}
            className="text-xs bg-[#f5f3ee] text-[#2d6be4] px-3 py-1 rounded-full font-dm-sans"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Contact Buttons */}
      <div className="flex gap-2">
        {professor.email && professor.email.trim().length > 0 ? (
          <a
            href={`https://mail.google.com/mail/?view=cm&fs=1&to=${professor.email}`}
            className="flex-1 bg-[#2d6be4] hover:bg-blue-700 text-white text-sm py-2 rounded-lg transition text-center font-dm-sans font-medium"
          >
            Email
          </a>
        ) : (
          <div className="flex-1 bg-gray-300 text-gray-600 text-sm py-2 rounded-lg text-center font-dm-sans font-medium">
            No Email
          </div>
        )}
        
        {professor.phone && professor.phone.trim().length > 0 ? (
          <a
            href={`tel:${encodeURIComponent(professor.phone.trim())}`}
            className="flex-1 border border-[#2d6be4] text-[#2d6be4] hover:bg-blue-50 text-sm py-2 rounded-lg transition text-center font-dm-sans font-medium"
          >
            Call
          </a>
        ) : (
          <div className="flex-1 border border-gray-300 text-gray-600 text-sm py-2 rounded-lg text-center font-dm-sans font-medium">
            No Phone
          </div>
        )}
      </div>
    </div>
  );
}