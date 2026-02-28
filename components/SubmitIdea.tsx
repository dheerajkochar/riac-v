'use client';

import { useState } from 'react';
import { fieldsData } from '@/lib/fields';
import { professorsData } from '@/lib/professors';
import ProfessorCard from './ProfessorCard';

export default function SubmitIdea() {
  const [formData, setFormData] = useState({
    studentName: '',
    ideaDescription: '',
  });
  const [selectedFields, setSelectedFields] = useState<string[]>([]);
  const [matchedProfessors, setMatchedProfessors] = useState<any[]>([]);
  const [showMatched, setShowMatched] = useState(false);

  const toggleField = (fieldId: string) => {
    setSelectedFields(prev =>
      prev.includes(fieldId)
        ? prev.filter(f => f !== fieldId)
        : [...prev, fieldId]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (selectedFields.length === 0) {
      alert('Please select at least one field of interest');
      return;
    }

    // Filter professors that match selected fields
    const matched = professorsData.filter(prof =>
      prof.fields.some(field => selectedFields.includes(field))
    );

    setMatchedProfessors(matched);
    setShowMatched(true);
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <section id="submit-form" className="bg-[#f5f3ee] py-20 px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold font-syne text-[#1a1a1a] text-center mb-12">
          Submit Your Idea
        </h2>

        <form onSubmit={handleSubmit} className="bg-white p-8 rounded-xl shadow-md space-y-6">
          {/* Name Input */}
          <div>
            <label className="block text-sm font-medium font-syne text-[#1a1a1a] mb-2">
              Your Name
            </label>
            <input
              type="text"
              name="studentName"
              value={formData.studentName}
              onChange={handleInputChange}
              placeholder="Enter your full name"
              className="w-full px-4 py-3 border border-[#e0e0e0] rounded-lg focus:outline-none focus:border-[#2d6be4] font-dm-sans"
              required
            />
          </div>

          {/* Idea Description */}
          <div>
            <label className="block text-sm font-medium font-syne text-[#1a1a1a] mb-2">
              Your Idea
            </label>
            <textarea
              name="ideaDescription"
              value={formData.ideaDescription}
              onChange={handleInputChange}
              placeholder="Describe your startup or research idea in detail..."
              rows={5}
              className="w-full px-4 py-3 border border-[#e0e0e0] rounded-lg focus:outline-none focus:border-[#2d6be4] font-dm-sans resize-none"
              required
            />
          </div>

          {/* Fields Selection */}
          <div>
            <label className="block text-sm font-medium font-syne text-[#1a1a1a] mb-4">
              Fields of Interest (Select at least one)
            </label>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {fieldsData.map(field => (
                <button
                  key={field.id}
                  type="button"
                  onClick={() => toggleField(field.id)}
                  className={`px-4 py-2 rounded-full font-dm-sans text-sm font-medium transition ${
                    selectedFields.includes(field.id)
                      ? 'bg-[#2d6be4] text-white'
                      : 'bg-[#f5f3ee] text-[#1a1a1a] border border-[#e0e0e0] hover:border-[#2d6be4]'
                  }`}
                >
                  {field.label}
                </button>
              ))}
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-[#2d6be4] hover:bg-blue-700 text-white py-3 rounded-lg transition font-dm-sans font-medium text-lg"
          >
            Find Matching Professors
          </button>
        </form>

        {/* Matched Professors Section */}
        {showMatched && (
          <div className="mt-12">
            <h3 className="text-2xl font-bold font-syne text-[#1a1a1a] mb-8">
              Professors Matching Your Interests ({matchedProfessors.length})
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {matchedProfessors.map(prof => (
                <ProfessorCard key={prof.id} professor={prof} />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
