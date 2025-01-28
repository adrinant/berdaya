import { BlogPosts } from '@/app/components/posts';

export default function Page() {
  return (
    <section className="text-justify px-4">
      <h1 className="mb-6 text-3xl font-bold tracking-tight">
        Berdaya AI Competition: Shaping the Future with Ethical AI
      </h1>
      <p className="mb-6 leading-relaxed">
        Artificial Intelligence (AI) has the potential to transform the way we tackle global challenges like poverty and inequality. However, this power must be handled responsibly. How can we ensure AI is developed ethically to create a more equitable world?
      </p>
      <h2 className="mb-4 text-xl font-semibold">About the Competition</h2>
      <p className="mb-6 leading-relaxed">
        Join the Berdaya AI Competition: <strong>&quot;The Ethical Implications of AI in Addressing Global Inequality.&quot;</strong> This event invites students, researchers, and AI enthusiasts to explore AI&apos;s ethical dimensions and its role in reducing inequality. Participants will submit essays or research papers that critically examine the opportunities, challenges, and ethical considerations of using AI to address these issues.
      </p>

      <h3 className="mb-2 text-lg font-medium">Competition Topic:</h3>
      <ul className="mb-6 list-disc list-inside leading-relaxed">
        <li>How can AI reduce poverty and inequality?</li>
        <li>What are the ethical risks of deploying AI in underdeveloped regions?</li>
        <li>How can we ensure AI systems are fair, transparent, and accountable?</li>
        <li>What role do governments, organizations, and individuals play in shaping ethical AI?</li>
      </ul>

      <h3 className="mb-2 text-lg font-medium">Prizes:</h3>
      <ul className="mb-6 list-disc list-inside leading-relaxed">
        <li><strong>1st Place:</strong> $1,000 + Feature on Berdaya AI&apos;s platform</li>
        <li><strong>2nd Place:</strong> $500 + Certificate of Achievement</li>
        <li><strong>3rd Place:</strong> $250 + Certificate of Achievement</li>
      </ul>

      <h3 className="mb-2 text-lg font-medium">Submission Guidelines:</h3>
      <ul className="mb-6 list-disc list-inside leading-relaxed">
        <li>Essays or research papers must be 2,000 to 5,000 words.</li>
        <li>Submissions must be original and properly cited.</li>
        <li>Deadline: <strong>January 01, 2025</strong>.</li>
      </ul>

      <h3 className="mb-4 text-lg font-medium">Why Participate?</h3>
      <p className="mb-6 leading-relaxed">
        Showcase your ideas on a global stage, contribute to the conversation on ethical AI, and win cash prizes and recognition. Together, we can shape a future where technology serves humanity ethically and equitably.
      </p>

      <div className="my-6 flex flex-wrap gap-4">
        <a
          href="/register"
          className="bg-gray-700 text-white px-6 py-3 rounded-lg hover:bg-gray-500 transition-all"
        >
          Register Now
        </a>
        <a
          href="#"
          className="bg-gray-400 text-white px-6 py-3 rounded-lg cursor-not-allowed"
          aria-disabled="true"
        >
          Leaderboard (Will be available later)
        </a>
      </div>

      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  );
}
