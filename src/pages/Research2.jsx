import "./Research.css";

export default function Research2() {
  return (
    <div>

      {/* ================= HERO ================= */}

      <section className="research-hero">

        <div className="container hero-content">

          <p className="project-number">
            Research Project 02
          </p>

          <h1 className="hero-title">
            Probing Failure Modes of Machine Unlearning
          </h1>

          <h2 className="hero-subtitle">
            A Controlled Benchmark for Evaluating Selective Forgetting in Language Models
          </h2>

          <p className="hero-description">

            This research investigates why existing machine unlearning
            evaluations often fail to detect selective forgetting in language
            models. A controlled benchmark was developed using synthetic
            knowledge and DistilGPT-2 to evaluate memorization, targeted
            unlearning, recoverability, and benchmark sensitivity through
            multiple probing strategies.

          </p>

          <div className="tags">

            <span>Machine Unlearning</span>

            <span>Large Language Models</span>

            <span>Trustworthy AI</span>

            <span>Natural Language Processing</span>

          </div>

          <div className="hero-buttons">

            <a
              href="/machine-unlearning-report.pdf"
              className="primary-btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              📄 Research Report
            </a>

            <a
              href="#"
              className="secondary-btn"
            >
              💻 GitHub
            </a>

            <a
              href="#"
              className="secondary-btn"
            >
              📓 Colab
            </a>

          </div>

        </div>

      </section>

      {/* ================= OVERVIEW ================= */}

      <section className="section">

        <div className="container">

          <div className="section-header">

            <h2>Project Overview</h2>

            <div className="title-line"></div>

          </div>

          <div className="overview-box">

            <p>

              Machine unlearning enables trained language models to selectively
              forget sensitive or outdated information without complete
              retraining. Although many forgetting algorithms have been
              proposed, evaluating whether knowledge has actually been removed
              remains a significant research challenge.

            </p>

            <p>

              This work proposes a reproducible benchmark that explicitly
              separates target facts from retained knowledge using synthetic
              datasets. The benchmark measures memorization before unlearning
              and evaluates recoverability using multiple probing strategies,
              providing a more reliable assessment of selective forgetting.

            </p>

          </div>

        </div>

      </section>

      {/* ================= RESEARCH HIGHLIGHTS ================= */}

      <section className="section">

        <div className="container">

          <div className="section-header">

            <h2>Research Highlights</h2>

            <div className="title-line"></div>

          </div>

          <div className="highlight-grid">

            <div className="highlight-card">

              <h3>Controlled Benchmark</h3>

              <p>

                Designed a synthetic benchmark with explicit separation
                between target and retain knowledge.

              </p>

            </div>

            <div className="highlight-card">

              <h3>Multi-Probe Evaluation</h3>

              <p>

                Evaluated forgetting using direct, paraphrased,
                indirect, fill-in-the-blank and short-answer prompts.

              </p>

            </div>

            <div className="highlight-card">

              <h3>Reliable Verification</h3>

              <p>

                Introduced controlled memorization before unlearning
                to accurately measure recoverability.

              </p>

            </div>

            <div className="highlight-card">

              <h3>Research Contribution</h3>

              <p>

                Demonstrated that benchmark quality is as important
                as the forgetting algorithm itself.

              </p>

            </div>

          </div>

        </div>

      </section>

      {/* ================= MOTIVATION ================= */}

      <section className="section">

        <div className="container">

          <div className="section-header">

            <h2>Research Motivation</h2>

            <div className="title-line"></div>

          </div>

          <div className="overview-box">

            <p>

              Recent regulations such as GDPR require machine learning
              systems to remove user-specific information upon request.
              Existing machine unlearning techniques attempt to satisfy this
              requirement, but their evaluation often relies on weak
              benchmarks that cannot distinguish between genuine forgetting
              and prompt sensitivity.

            </p>

            <p>

              This research investigates how benchmark design influences
              experimental conclusions and proposes a reproducible evaluation
              framework capable of measuring selective forgetting under
              controlled conditions.

            </p>

          </div>

        </div>
          </section>
          {/* ================= METHODOLOGY ================= */}

<section className="section">

  <div className="container">

    <div className="section-header">

      <h2>Experimental Pipeline</h2>

      <div className="title-line"></div>

    </div>

    <p className="section-intro">

      The proposed benchmark follows a controlled experimental workflow.
      Synthetic facts are first created and memorized by the language model.
      After targeted unlearning, multiple probing strategies are used to
      evaluate whether forgotten knowledge can still be recovered.

    </p>

    <div className="pipeline-horizontal">

      <div className="pipeline-step">

        <div className="pipeline-icon">📚</div>

        <h3>Synthetic Dataset</h3>

        <p>Generate target and retain facts</p>

      </div>

      <div className="pipeline-arrow">→</div>

      <div className="pipeline-step">

        <div className="pipeline-icon">🤖</div>

        <h3>DistilGPT-2</h3>

        <p>Controlled memorization</p>

      </div>

      <div className="pipeline-arrow">→</div>

      <div className="pipeline-step">

        <div className="pipeline-icon">🗑️</div>

        <h3>Machine Unlearning</h3>

        <p>Remove target knowledge</p>

      </div>

      <div className="pipeline-arrow">→</div>

      <div className="pipeline-step highlight-step">

        <div className="pipeline-icon">🔍</div>

        <h3>Multi-Probe Testing</h3>

        <p>Evaluate recoverability</p>

      </div>

      <div className="pipeline-arrow">→</div>

      <div className="pipeline-step">

        <div className="pipeline-icon">📊</div>

        <h3>Analysis</h3>

        <p>Compare benchmark sensitivity</p>

      </div>

    </div>

  </div>

</section>
{/* ================= SYSTEM ARCHITECTURE ================= */}

<section className="section">

  <div className="container">

    <div className="section-header">

      <h2>System Architecture</h2>

      <div className="title-line"></div>

    </div>

    <p className="section-intro">

      The proposed benchmark consists of six major stages. Synthetic knowledge
      is generated and memorized by DistilGPT-2 before applying targeted
      machine unlearning. Multiple probing strategies are then used to
      evaluate whether forgotten information can still be recovered,
      enabling a more reliable assessment of selective forgetting.

    </p>

    <div className="architecture-container">

      <div className="architecture-image">

        <img
          src="/images/unlearning_architecture..png"
          alt="Machine Unlearning Architecture"
        />

        <p className="figure-caption">

          <strong>Figure 1.</strong> Overall experimental pipeline of the
          proposed machine unlearning benchmark. Synthetic facts are learned
          by DistilGPT-2, selectively removed through targeted unlearning,
          and evaluated using multiple probing strategies to measure
          recoverability and benchmark sensitivity.

        </p>

      </div>

      <div className="architecture-info">

        <div className="info-card">

          <h3>📚 Synthetic Knowledge</h3>

          <p>

            Artificial facts provide complete control over memorization,
            target removal, and retained information.

          </p>

        </div>

        <div className="info-card">

          <h3>🤖 DistilGPT-2</h3>

          <p>

            Lightweight language model used for controlled memorization
            experiments.

          </p>

        </div>

        <div className="info-card">

          <h3>🗑️ Targeted Unlearning</h3>

          <p>

            Removes selected knowledge while preserving unrelated
            information inside the model.

          </p>

        </div>

        <div className="info-card">

          <h3>🔍 Multi-Probe Evaluation</h3>

          <p>

            Five complementary probing strategies measure recoverability
            after machine unlearning.

          </p>

        </div>

        <div className="info-card">

          <h3>📈 Benchmark Analysis</h3>

          <p>

            Recovery scores reveal whether existing benchmarks are capable
            of detecting selective forgetting.

          </p>

        </div>

      </div>

    </div>

  </div>

</section>
{/* ================= EXPERIMENTAL SETUP ================= */}

<section className="section">

  <div className="container">

    <div className="section-header">

      <h2>Experimental Setup</h2>

      <div className="title-line"></div>

    </div>

    <p className="section-intro">

      Experiments were conducted under a controlled environment to evaluate
      memorization, selective forgetting, recoverability, and benchmark
      sensitivity. A lightweight language model was trained on synthetic
      knowledge before applying targeted machine unlearning.

    </p>

    <div className="experiment-table">

      <table>

        <tbody>

          <tr>
            <td><strong>Language Model</strong></td>
            <td>DistilGPT-2</td>
          </tr>

          <tr>
            <td><strong>Framework</strong></td>
            <td>PyTorch + Hugging Face Transformers</td>
          </tr>

          <tr>
            <td><strong>Dataset</strong></td>
            <td>Synthetic Knowledge Benchmark</td>
          </tr>

          <tr>
            <td><strong>Training Strategy</strong></td>
            <td>Controlled Memorization</td>
          </tr>

          <tr>
            <td><strong>Unlearning Method</strong></td>
            <td>Targeted Forgetting</td>
          </tr>

          <tr>
            <td><strong>Probe Types</strong></td>
            <td>5 Evaluation Strategies</td>
          </tr>

          <tr>
            <td><strong>Evaluation</strong></td>
            <td>Recovery Analysis & Benchmark Sensitivity</td>
          </tr>

          <tr>
            <td><strong>Programming Language</strong></td>
            <td>Python</td>
          </tr>

          <tr>
            <td><strong>Libraries</strong></td>
            <td>Transformers, PyTorch, Pandas, Matplotlib</td>
          </tr>

        </tbody>

      </table>

    </div>

  </div>

</section>
{/* ================= RESULTS ================= */}

<section className="section">

  <div className="container">

    <div className="section-header">

      <h2>Experimental Results</h2>

      <div className="title-line"></div>

    </div>

    <p className="section-intro">

      The proposed benchmark successfully revealed weaknesses in conventional
      machine unlearning evaluation protocols. Controlled memorization,
      targeted forgetting, and diverse probing strategies enabled a more
      reliable assessment of recoverability than traditional direct-question
      evaluation alone.

    </p>

    <div className="results-grid">

      <div className="result-card">

        <h3>Controlled Memorization</h3>

        <div className="result-value">✓ Successful</div>

        <p>

          The language model consistently memorized the synthetic knowledge
          before applying unlearning.

        </p>

      </div>

      <div className="result-card">

        <h3>Selective Forgetting</h3>

        <div className="result-value">✓ Achieved</div>

        <p>

          Target facts became substantially harder to recover after
          unlearning while retained knowledge remained available.

        </p>

      </div>

      <div className="result-card">

        <h3>Benchmark Sensitivity</h3>

        <div className="result-value">↑ Improved</div>

        <p>

          Multiple probing strategies exposed residual memorization that
          single direct prompts failed to detect.

        </p>

      </div>

      <div className="result-card">

        <h3>Main Finding</h3>

        <div className="result-value">Benchmark Matters</div>

        <p>

          Evaluation quality depends strongly on benchmark design rather
          than only the machine unlearning algorithm.

        </p>

      </div>

    </div>

  </div>

</section>
{/* ================= FAILURE ANALYSIS ================= */}

<section className="section">

  <div className="container">

    <div className="section-header">

      <h2>Failure Analysis</h2>

      <div className="title-line"></div>

    </div>

    <p className="section-intro">

      Although machine unlearning methods can successfully remove memorized
      information, existing evaluation protocols often fail to verify whether
      forgetting has genuinely occurred. Our experiments identify several
      benchmark limitations that motivate the proposed evaluation framework.

    </p>

    <div className="failure-grid">

      <div className="failure-card">

        <div className="failure-icon">⚠️</div>

        <h3>Weak Pilot Benchmark</h3>

        <p>

          Initial benchmark design lacked sufficient sensitivity to detect
          selective forgetting, leading to misleading conclusions about
          unlearning effectiveness.

        </p>

      </div>

      <div className="failure-card">

        <div className="failure-icon">❓</div>

        <h3>Limited Prompt Diversity</h3>

        <p>

          Direct question answering alone was insufficient because language
          models could fail one prompt while still recalling the same
          knowledge through alternative formulations.

        </p>

      </div>

      <div className="failure-card">

        <div className="failure-icon">🧠</div>

        <h3>Residual Memorization</h3>

        <p>

          Some forgotten information remained recoverable through
          paraphrased and indirect prompts, demonstrating incomplete
          knowledge removal.

        </p>

      </div>

      <div className="failure-card">

        <div className="failure-icon">💡</div>

        <h3>Research Insight</h3>

        <p>

          The primary limitation was not the unlearning algorithm itself,
          but the inability of existing benchmarks to reliably measure
          recoverability after forgetting.

        </p>

      </div>

    </div>

  </div>

</section>
             
{/* ================= RESOURCES ================= */}

<section className="section">

  <div className="container">

    <div className="section-header">

      <h2>Resources</h2>

      <div className="title-line"></div>

    </div>

    <div className="resource-grid">

      {/* REPORT */}

      <a
        href="/Probing Failure Modes of Machine Unlearning in Language Models.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="resource-card"
      >

        <div className="icon">📄</div>

        <h3>Research Report</h3>

        <p>
          Complete technical report describing the benchmark,
          experiments and evaluation.
        </p>

      </a>

      {/* GITHUB */}

      <a
        href="https://github.com/Karthika1403/Probing-Failure-Modes-of-Machine-Unlearning-in-Language-Models"
        target="_blank"
        rel="noopener noreferrer"
        className="resource-card"
      >

        <div className="icon">💻</div>

        <h3>GitHub Repository</h3>

        <p>

          Complete implementation including dataset generation,
          memorization, unlearning and evaluation.

        </p>

      </a>

      {/* COLAB */}

      <a
        href="https://colab.research.google.com/drive/1DnetgxzGS4om1su53U5_0JpoJ6XrI-DN"
        target="_blank"
        rel="noopener noreferrer"
        className="resource-card"
      >

        <div className="icon">📓</div>

        <h3>Google Colab</h3>

        <p>

          Interactive notebook containing the complete
          experimental workflow.

        </p>

      </a>

    </div>

  </div>

</section>
    {/* ================= CONCLUSION ================= */}

<section className="section">

  <div className="container">

    <div className="section-header">

      <h2>Conclusion</h2>

      <div className="title-line"></div>

    </div>

    <div className="overview-box">

      <p>

        This research demonstrates that reliable evaluation of machine
        unlearning depends not only on the forgetting algorithm but also on
        the quality of the benchmark itself. By introducing controlled
        memorization, targeted forgetting, and diverse probing strategies,
        the proposed framework provides a reproducible methodology for
        evaluating selective forgetting in language models.

      </p>

      <p>

        The study further shows that benchmark sensitivity plays a critical
        role in exposing residual memorization, emphasizing the importance of
        robust evaluation protocols for future trustworthy AI research.

      </p>

    </div>

  </div>

</section>

</div>

);
}