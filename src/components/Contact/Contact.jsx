import React from 'react';
import Breadcrumb from '../../common/Breadcrumb/Breadcrumb';

const Contact = () => {
  return (
    <section className="contact">
      <Breadcrumb
        name="Contact Us"
        title="Get Helps & Friendly Support"
        cover="assets/images/pricing.jpg"
      />
      <div className="contact__content pt-80 pb-80">
        <div className="container">
          <form action="">
            <h4>Fillup The Form</h4>
            <div>
              <input type="text" name="email" id="" placeholder="Name" />
              <input type="email" name="email" id="" placeholder="Email" />
            </div>
            <input type="text" name="subject" id="" placeholder="Subject" />
            <textarea name="" id="" cols="30" rows="10"></textarea>
            <button className="btn2">Submit Request</button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact