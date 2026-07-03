import "./ResultsDashboard.css";

export default function ResultsDashboard() {

    return (

        <section className="dashboard">

            <h2>Experimental Results</h2>

            <div className="dashboard-grid">

                <div className="dashboard-card">

                    <span>Baseline Accuracy</span>

                    <h3>28.20%</h3>

                </div>

                <div className="dashboard-card">

                    <span>CRMM-R Accuracy</span>

                    <h3>35.81%</h3>

                </div>

                <div className="dashboard-card">

                    <span>Accuracy Gain</span>

                    <h3 className="blue">+7.61%</h3>

                </div>

                <div className="dashboard-card">

                    <span>Expected Calibration Error</span>

                    <h3>0.0437</h3>

                </div>

                <div className="dashboard-card">

                    <span>Model Size</span>

                    <h3>5.23 MB</h3>

                </div>

                <div className="dashboard-card">

                    <span>Quantized Model</span>

                    <h3>0.90 MB</h3>

                </div>

            </div>

        </section>

    );

}