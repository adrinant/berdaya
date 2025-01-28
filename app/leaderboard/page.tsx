"use client"

import React, { useState } from 'react';
import { ChevronDown, ChevronRight } from 'lucide-react';

// Define prop types for LeaderboardEntry
interface LeaderboardEntryProps {
  rank: number;
  teamName: string;
  institution: string;
  currentScore: number;
  teamMembers: string[];
}

const LeaderboardEntry = ({
  rank,
  teamName,
  institution,
  currentScore,
  teamMembers,
}: LeaderboardEntryProps) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="border-b py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-6">
          <span className="font-bold text-lg w-10 text-center">{rank}</span>
          <div>
            <div className="flex items-center">
              <span className="font-semibold mr-2 text-lg">{teamName}</span>
              {teamMembers.length > 0 && (
                <button
                  onClick={() => setExpanded(!expanded)}
                  className="text-gray-500 hover:text-gray-700 transition-colors"
                >
                  {expanded ? <ChevronDown size={18} /> : <ChevronRight size={18} />}
                </button>
              )}
            </div>
            <span className="text-gray-600 text-sm">{institution}</span>
          </div>
        </div>
        <span className="font-bold text-lg text-blue-800">{currentScore} pts</span>
      </div>
      {expanded && teamMembers.length > 0 && (
        <div className="ml-16 mt-3 text-sm text-gray-700">
          <strong>Team Members:</strong>
          <ul className="list-disc list-inside">
            {teamMembers.map((member, index) => (
              <li key={index}>{member}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

const Leaderboard = () => {
  // Mock data - replace with actual API call
  const leaderboardData = [
    {
      rank: 1,
      teamName: "Wordweavers",
      institution: "Oxford University",
      currentScore: 450,
      teamMembers: ["Alice Smith", "Bob Johnson", "Carol Williams"]
    },
    {
      rank: 2,
      teamName: "Prose Pioneers",
      institution: "Cambridge College",
      currentScore: 425,
      teamMembers: ["David Brown", "Emma Davis"]
    }
  ];

  return (
    <div className="w-full max-w-5xl mx-auto p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Writers Competition Leaderboard</h2>
      {leaderboardData.map((entry) => (
        <LeaderboardEntry 
          key={entry.rank}
          {...entry}
        />
      ))}
    </div>
  );
};

export default Leaderboard;
