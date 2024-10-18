import { useState } from "react";

const About = () => {
  const [toggleList, setToggleList] = useState("tab1");
  const activeList = (value) => (value === toggleList ? "active" : "");
  return (
    <section id="about">
      <div className="container">
        <div className="roww">
          {/* Main Title */}
          <div className="resumo_fn_main_title">
            <h3 className="subtitle">About Us</h3>
            <h3 className="title">The Company</h3>
            <p className="desc">
              {`We are a research group working to better the state of project ecosystems across all domains. Write us to learn about the current itineraries of review.`}
            </p>
          </div>
          {/* /Main Title */}
          {/* About Information */}
          <div className="resumo_fn_about_info">
            <div className="about_right">
              {/* Download CV Button */}
              <div className="resumo_fn_cv_btn">
              </div>
              {/* /Download CV Button */}
            </div>
          </div>
          {/* /About Information */}
          {/* Tabs Shortcode */}
          {/* /Tabs Shortcode */}
        </div>
      </div>
    </section>
  );
};

export default About;
