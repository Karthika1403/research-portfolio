import { Link } from "react-router-dom";

export default function ProjectCard({
  title,
  description,
  accuracy,
  status,
  link,
}) {
  return (
    <div className="border border-gray-200 rounded-2xl p-8 hover:shadow-xl transition duration-300">

      <h2 className="text-3xl font-bold">
        {title}
      </h2>

      <p className="mt-4 text-gray-600 leading-7">
        {description}
      </p>

      {accuracy && (
        <div className="mt-8 flex gap-6">

          <div>
            <p className="text-gray-500 text-sm">
              Accuracy
            </p>

            <p className="text-2xl font-bold">
              {accuracy}
            </p>
          </div>

          <div>
            <p className="text-gray-500 text-sm">
              Status
            </p>

            <p className="text-2xl font-bold text-green-600">
              {status}
            </p>
          </div>

        </div>
      )}

      {link ? (
        <Link
          to={link}
          className="inline-block mt-10 text-blue-600 font-semibold hover:underline"
        >
          Read Research →
        </Link>
      ) : (
        <p className="mt-10 text-gray-500">
          Coming Soon
        </p>
      )}
    </div>
  );
}