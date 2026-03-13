'use client';

import { useState } from 'react';
import Link from 'next/link';
import { fixtures, Fixture } from '../lib/fixtures';

type Prediction = 'home' | 'draw' | 'away';

export default function Predictions() {
  const [predictions, setPredictions] = useState<Record<number, Prediction>>({});

  const handlePrediction = (fixtureId: number, prediction: Prediction) => {
    setPredictions(prev => ({
      ...prev,
      [fixtureId]: prediction
    }));
  };

  const allPredicted = fixtures.every(fixture => predictions[fixture.id]);

  return (
    <main className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <div className="mb-6">
          <Link
            href="/"
            className="text-blue-600 hover:text-blue-800 font-medium"
          >
            ← Back to Home
          </Link>
        </div>

        <h1 className="text-3xl font-bold mb-8 text-center text-blue-600">
          Gameweek 28 Predictions
        </h1>

        <div className="space-y-6">
          {fixtures.map((fixture) => (
            <div key={fixture.id} className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="text-lg font-semibold">
                  {fixture.homeTeam} vs {fixture.awayTeam}
                </div>
                <div className="text-sm text-gray-600">
                  {fixture.date} at {fixture.time}
                </div>
              </div>

              <div className="flex space-x-4">
                <button
                  onClick={() => handlePrediction(fixture.id, 'home')}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                    predictions[fixture.id] === 'home'
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  {fixture.homeTeam} Win
                </button>
                <button
                  onClick={() => handlePrediction(fixture.id, 'draw')}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                    predictions[fixture.id] === 'draw'
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  Draw
                </button>
                <button
                  onClick={() => handlePrediction(fixture.id, 'away')}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                    predictions[fixture.id] === 'away'
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  {fixture.awayTeam} Win
                </button>
              </div>
            </div>
          ))}
        </div>

        {allPredicted && (
          <div className="mt-8 text-center">
            <button
              className="bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition-colors font-medium"
              onClick={() => alert('Predictions submitted! (Mock submission)')}
            >
              Submit Predictions
            </button>
          </div>
        )}

        {!allPredicted && (
          <div className="mt-8 text-center text-gray-600">
            Please make predictions for all matches before submitting.
          </div>
        )}
      </div>
    </main>
  );
}