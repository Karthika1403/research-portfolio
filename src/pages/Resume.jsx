export default function Resume() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-20">

      <h1 className="text-4xl font-bold">
        Resume
      </h1>

      <a
        href="/resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block mt-8 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
      >
        Download Resume
      </a>

    </div>
  );
}