import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";

class DataAnalyst extends Component {
  render() {
    if (this.props.resumeBasicInfo) {
      var sectionName = this.props.resumeBasicInfo.section_name.dataAnalyst;
    }

    return (
      <section id="dataAnalyst">
        <Container>
          <div className="col-md-12 mx-auto">
            <div className="col-md-12">
              <h1 className="section-title" style={{ color: "black" }}>
                <span className="text-black" style={{ textAlign: "center" }}>
                  {sectionName}
                </span>
              </h1>
            </div>
          </div>
          <div className="col-md-12 text-center">
            <Row>
              <Col md={12} className="dashboards-container">
                <h2>Power BI Dashboards</h2>
                <p>
                  Below are some of the Power BI dashboards I've created using open-source data.
                  These visualizations demonstrate my skills in data analysis, data transformation,
                  and creating insightful business intelligence reports.
                </p>
              </Col>
            </Row>
            <Row className="mt-4">
              <Col md={12} className="dashboard-item">
                <div className="dashboard-card">
                  <h3>Tauseef's Personal Dashboard</h3>
                  <div className="dashboard-placeholder">
                    <div className="dashboard-auth-notice">
                      <p><strong>Note:</strong> This dashboard requires Power BI authentication. If you cannot view the interactive dashboard below, please refer to the static image version.</p>
                    </div>
                    <iframe 
                      title="Tauseef" 
                      width="100%" 
                      height="541.25" 
                      src="https://app.powerbi.com/reportEmbed?reportId=b4cc61c8-fe4d-40f5-8c1d-de832430b0d4&autoAuth=true&ctid=b2818521-f5cf-4e3b-bcc1-4ed693673d16&actionBarEnabled=true" 
                      frameBorder="0" 
                      allowFullScreen={true}>
                    </iframe>
                    <div className="dashboard-fallback">
                      <h4>Static Version (No Authentication Required)</h4>
                      <img 
                        src="images/powerbi/tauseef_dashboard.png" 
                        alt="Tauseef's Personal Dashboard - Static Version" 
                        className="img-fluid dashboard-image"
                      />
                      <p className="dashboard-fallback-note">
                        <em>This is a static representation of the interactive dashboard. For the full interactive experience, please log in to Power BI.</em>
                      </p>
                    </div>
                  </div>
                  <p>
                    This is a real Power BI dashboard I've personally created, showcasing my actual work in data visualization and analysis.
                    The dashboard demonstrates advanced Power BI techniques and real-world business intelligence applications.
                  </p>
                </div>
              </Col>
            </Row>
            <Row className="mt-4">
              <Col md={6} className="dashboard-item">
                <div className="dashboard-card">
                  <h3>Sales Performance Dashboard</h3>
                  <div className="dashboard-placeholder">
                    <img 
                      src="images/powerbi/sales_dashboard.svg" 
                      alt="Sales Performance Dashboard" 
                      className="img-fluid dashboard-image"
                    />
                  </div>
                  <p>
                    This dashboard analyzes sales data across different regions, products, and time periods.
                    It includes key performance indicators, trend analysis, and forecasting components.
                  </p>
                </div>
              </Col>
              <Col md={6} className="dashboard-item">
                <div className="dashboard-card">
                  <h3>Customer Insights Dashboard</h3>
                  <div className="dashboard-placeholder">
                    <img 
                      src="images/powerbi/customer_insights.svg" 
                      alt="Customer Insights Dashboard" 
                      className="img-fluid dashboard-image"
                    />
                  </div>
                  <p>
                    This dashboard provides insights into customer behavior, segmentation, and lifetime value.
                    It helps identify key customer segments and opportunities for growth.
                  </p>
                </div>
              </Col>
            </Row>
            <Row className="mt-4">
              <Col md={12}>
                <div className="dashboard-info">
                  <h3>About These Dashboards</h3>
                  <p>
                    These dashboards were created using Power BI Desktop and published to Power BI Service.
                    The data used is from open-source datasets that have been cleaned and transformed using
                    Power Query. The visualizations are interactive and allow for filtering and drilling down
                    into specific data points.
                  </p>
                  <p>
                    Skills demonstrated include: data modeling, DAX formulas, custom visualizations,
                    and report design best practices.
                  </p>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </section>
    );
  }
}

export default DataAnalyst;