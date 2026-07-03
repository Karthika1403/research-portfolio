import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="max-w-7xl mx-auto px-8 py-28">

      <p className="text-blue-600 font-semibold tracking-wide uppercase">
        AI Research Portfolio
      </p>

      <h1 className="mt-6 text-6xl font-bold tracking-tight text-gray-900">
        Karthika S
      </h1>

      <h2 className="mt-5 text-2xl text-gray-600 font-medium">
        Machine Learning • Medical AI • Computer Vision
      </h2>

      <p className="mt-8 max-w-3xl text-lg leading-8 text-gray-600">
        I develop lightweight multimodal artificial intelligence systems for
        healthcare applications with a focus on Medical Visual Question
        Answering, trustworthy AI, efficient deep learning, and deployment on
        resource-constrained devices.
      </p>

      <div className="mt-10 flex gap-5">

        <Link
          to="/research/crmm-r"
          className="px-7 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          View Research
        </Link>

        <Link
          to="/resume"
          className="px-7 py-3 border border-gray-300 rounded-lg hover:bg-gray-100 transition"
        >
          Resume
        </Link>

      </div>

    </section>
  );
}