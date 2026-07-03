export default function StatsCard({ title, value }) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-md transition">

      <p className="text-sm uppercase tracking-wide text-gray-500">
        {title}
      </p>

      <h3 className="mt-3 text-3xl font-bold text-gray-900">
        {value}
      </h3>

    </div>
  );
}