import Link from 'next/link';

// Mock results data
const mockResults = [
  {
    user: "John Doe",
    score: 3,
    predictions: [
      { match: "Arsenal vs Chelsea", prediction: "Arsenal Win", result: "Correct" },
      { match: "Man City vs Liverpool", prediction: "Man City Win", result: "Correct" },
      { match: "Tottenham vs Man Utd", prediction: "Draw", result: "Wrong" },
      { match: "Newcastle vs Brighton", prediction: "Newcastle Win", result: "Correct" },
      { match: "Aston Villa vs West Ham", prediction: "Aston Villa Win", result: "Correct" }
    ]
  },
  {
    user: "Jane Smith",
    score: 100, // All wrong bonus
    predictions: [
      { match: "Arsenal vs Chelsea", prediction: "Chelsea Win", result: "Wrong" },
      { match: "Man City vs Liverpool", prediction: "Liverpool Win", result: "Wrong" },
      { match: "Tottenham vs Man Utd", prediction: "Man Utd Win", result: "Wrong" },
      { match: "Newcastle vs Brighton", prediction: "Brighton Win", result: "Wrong" },
      { match: "Aston Villa vs West Ham", prediction: "West Ham Win", result: "Wrong" }
    ]
  },
  {
    user: "Bob Wilson",
    score: 2,
    predictions: [
      { match: "Arsenal vs Chelsea", prediction: "Arsenal Win", result: "Correct" },
      { match: "Man City vs Liverpool", prediction: "Draw", result: "Wrong" },
      { match: "Tottenham vs Man Utd", prediction: "Tottenham Win", result: "Wrong" },
      { match: "Newcastle vs Brighton", prediction: "Newcastle Win", result: "Correct" },
      { match: "Aston Villa vs West Ham", prediction: "Draw", result: "Wrong" }
    ]
  }
];

export default function Results() {
  return (
    <main className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="mb-6">
          <Link
            href="/"
            className="text-blue-600 hover:text-blue-800 font-medium"
          >
            ← Back to Home
          </Link>
        </div>

        <h1 className="text-3xl font-bold mb-8 text-center text-blue-600">
          Gameweek 28 Results
        </h1>

        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4">Leaderboard</h2>
          <div className="space-y-2">
            {mockResults
              .sort((a, b) => b.score - a.score)
              .map((result, index) => (
                <div key={result.user} className="flex items-center justify-between p-3 bg-gray-50 rounded">
                  <div className="flex items-center space-x-4">
                    <span className="font-medium text-lg">#{index + 1}</span>
                    <span className="font-medium">{result.user}</span>
                  </div>
                  <span className={`font-bold text-lg ${result.score === 100 ? 'text-green-600' : 'text-blue-600'}`}>
                    {result.score} points
                  </span>
                </div>
              ))}
          </div>
        </div>

        <div className="space-y-6">
          {mockResults.map((result) => (
            <div key={result.user} className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold mb-4">{result.user}'s Predictions</h3>
              <div className="space-y-3">
                {result.predictions.map((pred, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded">
                    <span className="font-medium">{pred.match}</span>
                    <div className="flex items-center space-x-4">
                      <span>{pred.prediction}</span>
                      <span className={`px-2 py-1 rounded text-sm font-medium ${
                        pred.result === 'Correct'
                          ? 'bg-green-100 text-green-800'
                          : 'bg-red-100 text-red-800'
                      }`}>
                        {pred.result}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-4 pt-4 border-t">
                <div className="text-right">
                  <span className="text-lg font-bold">Total: {result.score} points</span>
                  {result.score === 100 && (
                    <span className="ml-2 text-green-600 font-medium">(All Wrong Bonus!)</span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}