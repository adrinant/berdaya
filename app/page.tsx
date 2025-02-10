import { BlogPosts } from '@/app/components/posts';
import Link from 'next/link';

export default function Page() {
  return (
    <section className="max-w-4xl mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-4">🌟 Berdaya AI Innovation Challenges 🌟</h1>
        <p className="text-lg">
          Unleash your creativity and join Indonesia's brightest minds in AI to tackle real-world challenges in the 
          <span className="italic"> Sustainable Development Goals (<Link href="/blog/SDGs" className="text-blue-600 hover:text-blue-800">SDGs</Link>)</span> !
        </p>
      </div>

      <div className="bg-gray-50 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4">💡 Why Join?</h2>
        <ul className="space-y-4">
          <li className="flex items-start">
            <span className="mr-2">🏆</span>
            <span><strong>Pool Prize:</strong> Win millions of rupiah!</span>
          </li>
          <li className="flex items-start">
            <span className="mr-2">📋</span>
            <span><strong>Feedback:</strong> Get personalized guidance from industry experts.</span>
          </li>
          <li className="flex items-start">
            <span className="mr-2">👩‍💻</span>
            <span><strong>Team Up:</strong> Join with a friend (max. 2 members) — open for SMA/SMK/MA/D1-D4/S1 students.</span>
          </li>
        </ul>
      </div>

      <div className="bg-gray-50 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4">📅 Key Dates</h2>
        <ul className="space-y-4">
          <li className="flex items-start">
            <span className="font-medium mr-2">Registration closes:</span>
            11 February 2025
          </li>
          <li className="flex items-start">
            <span className="font-medium mr-2">Submission:</span>
            Submit a 500-word essay (PDF) and a short demo video by 28 February 2025
          </li>
        </ul>
      </div>

      <div className="bg-yellow-50 rounded-xl p-6 mb-8">
        <p className="text-lg font-medium">⚡ Pro Tip:</p>
        <p>Register now, brainstorm later!</p>
      </div>

      <div className="text-center mb-8">
        <p className="text-lg font-medium">Let's shape the future of AI for <Link href="/blog/SDGs" className="text-blue-600 hover:text-blue-800">SDGs</Link> — one idea at a time! 🌍✨</p>
      </div>

      <div className="flex gap-4 justify-center mb-8">
        <a
          href="/register"
          className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-all font-medium"
        >
          Register Now
        </a>
        <a
          href="#"
          className="bg-gray-300 text-gray-600 px-8 py-3 rounded-lg cursor-not-allowed"
          aria-disabled="true"
        >
          Leaderboard (Coming Soon)
        </a>
      </div>

      <div className="mt-12">
        <BlogPosts />
      </div>
    </section>
  );
}