import MetricCard from "../components/MetricCard";
import "./Research.css";
import ResultsDashboard from "../components/ResultsDashboard";

export default function CRMMR() {
  return (
    <div>

  {/* ================= HERO ================= */}

<section className="research-hero">

  <div className="container hero-content">

    <p className="project-number">
      Research Project 01
    </p>

    <h1 className="hero-title">
      CRMM-R
    </h1>

    <p className="hero-description">
      On-Device Multimodal Health Reasoning Under Resource Constraints
    </p>

    <p className="hero-description">
      A lightweight multimodal Medical Visual Question Answering framework
      designed for resource-constrained environments. CRMM-R combines a CNN
      image encoder, GRU language encoder, and cross-attention fusion to
      improve reasoning quality while maintaining efficient deployment on
      edge devices.
    </p>

    <div className="tags">

      <span>Medical AI</span>

      <span>Multimodal Learning</span>

      <span>Computer Vision</span>

      <span>Edge AI</span>

    </div>

    


  </div>

</section>

{/* ================= PROJECT OVERVIEW ================= */}

<section className="section">

  <div className="container">

    <div className="section-header">

      <h2>Project Overview</h2>

      <div className="title-line"></div>

    </div>

    <div className="overview-box">

      <p>

        <strong>CRMM-R</strong> is a lightweight multimodal Medical Visual
        Question Answering (Medical VQA) framework designed for deployment in
        resource-constrained environments. Unlike large transformer-based
        architectures that demand significant computational resources,
        CRMM-R combines a compact CNN image encoder, a GRU-based language
        encoder, and a cross-attention fusion module to efficiently integrate
        visual and textual information.

      </p>

      <p>

        The framework is evaluated on the <strong>VQA-RAD</strong> dataset and
        investigates how cross-modal fusion influences reasoning capability,
        calibration reliability, robustness against noisy inputs, and model
        efficiency. The proposed architecture demonstrates that stronger
        multimodal interaction improves reasoning performance while remaining
        suitable for deployment on edge devices.

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

        <h3>🎯 Objective</h3>

        <p>

          Design a lightweight Medical VQA model that improves multimodal
          reasoning while maintaining efficient deployment.

        </p>

      </div>

      <div className="highlight-card">

        <h3>💡 Innovation</h3>

        <p>

          Introduces a cross-attention fusion mechanism that enables deeper
          interaction between image and question representations.

        </p>

      </div>

      <div className="highlight-card">

        <h3>📊 Evaluation</h3>

        <p>

          Performance evaluated using accuracy, Expected Calibration Error,
          robustness analysis, and model compression.

        </p>

      </div>

      <div className="highlight-card">

        <h3>🚀 Deployment</h3>

        <p>

          Dynamic quantization reduces model size to 0.90 MB while preserving
          prediction performance.

        </p>

      </div>

    </div>

  </div>

</section>

{/* ================= METHODOLOGY ================= */}

<section className="section">

  <div className="container">

    <div className="section-header">

      <h2>Methodology Pipeline</h2>

      <div className="title-line"></div>

    </div>

    <p className="section-intro">
      CRMM-R processes medical images and clinical questions through separate
      feature extraction pipelines before integrating both modalities using a
      cross-attention fusion mechanism for answer prediction.
    </p>

    <div className="pipeline-horizontal">

      <div className="pipeline-step">

        <div className="pipeline-icon">🩻</div>

        <h3>Medical Image</h3>

        <p>VQA-RAD image input</p>

      </div>

      <div className="pipeline-arrow">→</div>

      <div className="pipeline-step">

        <div className="pipeline-icon">🧠</div>

        <h3>CNN Encoder</h3>

        <p>Visual feature extraction</p>

      </div>

      <div className="pipeline-arrow">＋</div>

      <div className="pipeline-step">

        <div className="pipeline-icon">❓</div>

        <h3>Question</h3>

        <p>Clinical question input</p>

      </div>

      <div className="pipeline-arrow">→</div>

      <div className="pipeline-step">

        <div className="pipeline-icon">📝</div>

        <h3>GRU Encoder</h3>

        <p>Language representation</p>

      </div>

      <div className="pipeline-arrow">→</div>

      <div className="pipeline-step highlight-step">

        <div className="pipeline-icon">🔷</div>

        <h3>Cross Attention</h3>

        <p>Multimodal fusion</p>

      </div>

      <div className="pipeline-arrow">→</div>

      <div className="pipeline-step">

        <div className="pipeline-icon">✅</div>

        <h3>Classifier</h3>

        <p>Answer prediction</p>

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

      The CRMM-R framework consists of two independent feature extraction
      branches for medical images and clinical questions. Visual and textual
      representations are fused using a lightweight cross-attention mechanism,
      followed by a classifier that predicts the most appropriate medical
      answer. The architecture is specifically designed to achieve high
      reasoning capability while remaining suitable for deployment on
      resource-constrained edge devices.

    </p>

    <div className="architecture-container">

      <div className="architecture-image">

        <img
          src="/images/architecture.png"
          alt="CRMM-R Architecture"
        />

        <p className="figure-caption">

          <strong>Figure 1.</strong> Overall architecture of the proposed
          CRMM-R framework. Medical images are encoded using a lightweight
          CNN while clinical questions are encoded using a GRU network.
          Cross-attention enables interaction between both modalities before
          answer prediction.

        </p>

      </div>

      <div className="architecture-info">

        <div className="info-card">

          <h3>🖼 Visual Encoder</h3>

          <p>
            Lightweight CNN extracts discriminative visual features
            from medical images.
          </p>

        </div>

        <div className="info-card">

          <h3>📝 Question Encoder</h3>

          <p>
            GRU learns sequential contextual representations from
            natural language questions.
          </p>

        </div>

        <div className="info-card">

          <h3>🔷 Cross Attention</h3>

          <p>
            Enables deep interaction between image and language
            representations instead of simple concatenation.
          </p>

        </div>

        <div className="info-card">

          <h3>⚡ Edge Deployment</h3>

          <p>
            Dynamic quantization significantly reduces model size
            while maintaining prediction quality.
          </p>

        </div>

      </div>

    </div>

  </div>

</section>


      {/* RESULTS */}
      <section className="section">

        <div className="container">

          <h2>Results</h2>

          <div className="results-box">

            <div>
              <h3>Baseline</h3>
              <p>28.20%</p>
            </div>

            <div>
              <h3>CRMM-R</h3>
              <p className="good">35.81%</p>
            </div>

            <div>
              <h3>Improvement</h3>
              <p className="good">+7.61%</p>
            </div>

          </div>

        </div>

      </section>

      <ResultsDashboard />

      {/* FAILURE ANALYSIS */}
      <section className="section">

        <div className="container">

          <h2>Failure Analysis</h2>

          <ul>
            <li>Weak visual grounding in ambiguous cases</li>
            <li>Textual bias dominates prediction</li>
            <li>Dataset shortcut learning</li>
            <li>Limited multimodal representation capacity</li>
          </ul>

        </div>

      </section>
      

{/* Resources */}

<section className="section">

  <div className="container">

    <h2>Resources</h2>

    <div className="resource-grid">

      <a
        href="/public/On-Device Multimodal Health Reasoning Under Resource Constraints Using CRMM-R_.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="resource-card"
      >
        <div className="icon">📄</div>

        <h3>Research Report</h3>

        <p>
          Complete technical report in PDF format.
        </p>

      </a>

      <a
        href="https://github.com/Karthika1403/On-Device-Multimodal-Health-Reasoning-Under-Resource-Constraints"
        target="_blank"
        rel="noopener noreferrer"
        className="resource-card"
      >
        <div className="icon">💻</div>

        <h3>GitHub Repository</h3>

        <p>
          Source code and implementation.
        </p>

      </a>

      <a
        href="https://colab.research.google.com/drive/1HuaMN0u6Avn11wxUfYZY9bsw1dteTvZX"
        target="_blank"
        rel="noopener noreferrer"
        className="resource-card"
      >
        <div className="icon">📓</div>

        <h3>Google Colab</h3>

        <p>
          Training and evaluation notebook.
        </p>

      </a>

    </div>

  </div>

</section>

      {/* CONCLUSION */}
      <section className="section">

        <div className="container">

          <h2>Conclusion</h2>

          <p>
            CRMM-R demonstrates that cross-attention significantly improves multimodal reasoning
            in lightweight medical VQA systems while maintaining efficiency and calibration stability.
          </p>

        </div>

      </section>

    </div>
    
    
  );
}