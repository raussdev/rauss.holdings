import { useState } from "react";
const Contact = () => {
  const [form, setForm] = useState({ email: "", name: "", phone: "", msg: "" });
  const [active, setActive] = useState(null);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const onChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const { email, name, phone, msg } = form;
  const onSubmit = (e) => {
    e.preventDefault();
    if (email && name && phone && msg) {
      setSuccess(true);
      setTimeout(() => {
        setForm({ email: "", name: "", phone: "", msg: "" });
        setSuccess(false);
      }, 2000);
    } else {
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 2000);
    }
  };
  return (
    <section id="contact">
      <div className="container">
        <div className="roww resumo_fn_contact">
          {/* /Contact Form */}
          {/* Contact Info */}
          <div className="resumo_fn_contact_info">
            <p>Address</p>
            <h3>RAUSS HOLDINGS LLC<br />1309 Coffeen Ave<br />STE 1200<br />Sheridan, WY 82801</h3>
            <p>Phone</p>
            <h3>
              <a href="tel:+1-307-302-0387">+1-307-387-3374</a>
            </h3>
            <p>Fax</p>
            <h3>
              <a href="fax:+1-307-655-1706">+1-307-655-1706</a>
            </h3>
            <p>
              <a className="fn__link" href="mailto:inquiries@rauss.holdings">
                inquiries@rauss.holdings
              </a>
            </p>
          </div>
          {/* /Contact Info */}
        </div>
      </div>
    </section>
  );
};

export default Contact;
