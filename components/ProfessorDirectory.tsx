'use client';

import { useState, useMemo } from 'react';
import { professorsData } from '@/lib/professors';
import { fieldsData, getFieldLabel } from '@/lib/fields';
import ProfessorCard from './ProfessorCard';

export default function ProfessorDirectory() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedField, setSelectedField] = useState<string>('all');
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  const filteredProfessors = useMemo(() => {
    let results = professorsData;

    // Filter by search query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      results = results.filter(prof =>
        prof.name.toLowerCase().includes(query) ||
        prof.dept.toLowerCase().includes(query) ||
        prof.bio.toLowerCase().includes(query) ||
        prof.tags.some(tag => tag.toLowerCase().includes(query))
      );
    }

    // Filter by field
    if (selectedField !== 'all') {
      results = results.filter(prof =>
        prof.fields.includes(selectedField)
      );
    }

    return results;
  }, [searchQuery, selectedField]);

  const uniqueFields = ['all', ...fieldsData.map(f => f.id)];

  const shouldShowFilters = !isSearchFocused && !searchQuery.trim();

  return (
    <section id="professor-directory" className="bg-white py-20 px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold font-syne text-[#1a1a1a] text-center mb-12">
          Browse All Professors
        </h2>

        {/* Search Bar */}
        <div className="relative mb-8">
          <input
            type="text"
            placeholder="Search by name, department, or field..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setIsSearchFocused(true)}
            onBlur={() => setIsSearchFocused(false)}
            className="w-full px-6 py-4 border-2 border-[#e0e0e0] rounded-lg focus:outline-none focus:border-[#2d6be4] font-dm-sans"
          />
          <span className="absolute right-4 top-4 text-2xl">🔍</span>
        </div>

        {/* Filter Chips */}
        {shouldShowFilters && (
          <div className="flex flex-wrap gap-3 mb-8">
            {uniqueFields.map(field => (
              <button
                key={field}
                onClick={() => setSelectedField(field)}
                className={`px-4 py-2 rounded-full font-dm-sans font-medium transition ${
                  selectedField === field
                    ? 'bg-[#2d6be4] text-white'
                    : 'bg-[#f5f3ee] text-[#1a1a1a] border border-[#e0e0e0] hover:border-[#2d6be4]'
                }`}
              >
                {field === 'all' ? 'All Fields' : getFieldLabel(field)}
              </button>
            ))}
          </div>
        )}

        {/* Professors Grid */}
        {filteredProfessors.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProfessors.map(prof => (
              <ProfessorCard key={prof.id} professor={prof} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-[#666666] font-dm-sans text-lg">
              No professors found matching your criteria.
            </p>
          </div>
        )}

        <p className="text-center text-[#666666] font-dm-sans mt-8">
          Showing {filteredProfessors.length} of {professorsData.length} professors
        </p>
      </div>
    </section>
  );
}
