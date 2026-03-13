import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-8 text-blue-600">
          Premier League Prediction League
        </h1>
        <p className="text-lg text-center mb-8 text-gray-700">
          Make predictions for upcoming Premier League matches!
          <br />
          Score 1 point for each correct prediction, or 100 points if you get them all wrong.
        </p>
        <div className="text-center space-y-4">
          <Link
            href="/predictions"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Make Predictions
          </Link>
          <br />
          <Link
            href="/results"
            className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors"
          >
            View Results
          </Link>
        </div>
      </div>
    </main>
  );
}