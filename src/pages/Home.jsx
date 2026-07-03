import "../Home.css";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      {/* HERO */}

      <section className="hero">
        <div className="container">

          <p className="tag">
            AI RESEARCH PORTFOLIO
          </p>

          <h1>Karthika S</h1>

          <h2>
            Machine Learning · Medical AI · Computer Vision
          </h2>

          <p className="description">
            Developing lightweight multimodal artificial intelligence systems
            for healthcare applications with a focus on Medical Visual Question
            Answering, Edge AI, Trustworthy AI, and efficient deployment under
            resource constraints.
          </p>

          <div className="buttons">

            <Link to="/research/crmm-r">
              <button className="primary">
                View Research
              </button>
            </Link>

            <Link to="/resume">
              <button className="secondary">
                Resume
              </button>
            </Link>

          </div>

        </div>
      </section>

      {/* PROJECTS */}

      <section className="projects">

        <div className="container">

          <h2>Research Projects</h2>

          <div className="project-grid">

            {/* ================= PROJECT 1 ================= */}

            <div className="card">

              <span className="status">
                Completed
              </span>

              <h3>CRMM-R</h3>

              <p>
                On-Device Multimodal Health Reasoning Under Resource
                Constraints.
              </p>

              <div className="metrics">

                <div>
                  <h4>35.81%</h4>
                  <span>Accuracy</span>
                </div>

                <div>
                  <h4>0.0437</h4>
                  <span>ECE</span>
                </div>

              </div>

              <Link to="/research/crmm-r">
                Read Research →
              </Link>

            </div>

            {/* ================= PROJECT 2 ================= */}

            <div className="card">

              <span className="status">
                Completed
              </span>

              <h3>
                Probing Failure Modes of Machine Unlearning
              </h3>

              <p>
                A controlled benchmark for evaluating selective forgetting
                in language models using synthetic knowledge, targeted
                unlearning and multi-probe evaluation.
              </p>

              <div className="tags">

                <span>LLMs</span>

                <span>Machine Unlearning</span>

                <span>Trustworthy AI</span>

              </div>

              <Link to="/research2">
                Read Research →
              </Link>

            </div>

            {/* ================= PROJECT 3 ================= */}

            <div className="card">

              <span className="status">
                Coming Soon
              </span>

              <h3>
                Research Project 03
              </h3>

              <p>
                Future research project will appear here.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* ABOUT */}

      <section className="about">

        <div className="container">

          <h2>About</h2>

          <p>
            My research interests include multimodal learning,
            medical artificial intelligence,
            computer vision,
            trustworthy AI,
            Edge AI,
            machine unlearning,
            and efficient deep learning.
            I focus on designing computationally efficient
            models capable of reliable reasoning under
            limited computational resources.
          </p>

        </div>

      </section>

    </>
  );
}