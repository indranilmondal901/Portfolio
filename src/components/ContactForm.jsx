// ContactForm.jsx

import React from 'react';

const ContactForm = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        
        const formData = {
            name: e.target.name.value,
            email: e.target.email.value,
            subject: e.target.subject.value,
            message: e.target.message.value
        };
        
        // Construct the mailto link
        const mailtoLink = `mailto:indranilmondal901@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(formData.message)}`;

        // Open the user's default email client
        window.location.href = mailtoLink;

        // Optionally, you can log the form data to console
        console.log(formData);

        // Clear form fields after submission (optional)
        e.target.reset();
    };

    const handleWhatsApp = () => {
        // Construct the WhatsApp message link
        const whatsappLink = `https://wa.me/917797238726?text=Hello%20Indranil`;

        // Open WhatsApp in a new tab
        window.open(whatsappLink, '_blank');
    };

    return (
        <div className="container-xxl pb-5" id="contact">
            <div className="container py-5">
                <div className="row g-5 mb-5">
                    <div className="col-lg-6">
                        <h1 className="display-5 mb-0">Let's Work Together</h1>
                    </div>
                    <div className="col-lg-6 text-lg-end">
                        <a className="btn btn-primary py-3 px-5"  onClick={handleWhatsApp}>Say Hello</a>
                    </div>
                </div>
                <div className="row g-5">
                    <div className="col-lg-5 col-md-6">
                        <p className="mb-2">My Address:</p>
                        <h5 className="fw-bold">Kolkata,West Bengal</h5>
                        <hr className="w-100" />
                        <p className="mb-2">Call me:</p>
                        <h5 className="fw-bold">(+91)7797238726</h5>
                        <hr className="w-100" />
                        <p className="mb-2">Mail me:</p>
                        <h5 className="fw-bold">indranilmondal901@gmail.com</h5>
                        <hr className="w-100" />
                        <p className="mb-2">Follow me:</p>
                        <div className="d-flex pt-2">
                            <a className="btn btn-square btn-primary me-2" href="https://www.linkedin.com/in/indranil-mondal-796ba5156/"><i className="fab fa-linkedin-in"></i></a>
                            <a className="btn btn-square btn-primary me-2" href="https://github.com/indranilmondal901?tab=repositories"><i className="fab fa-github"></i></a>
                        </div>
                    </div>
                    <div className="col-lg-7 col-md-6">
                        <form onSubmit={handleSubmit}>
                            <div className="row g-3">
                                <div className="col-md-6">
                                    <div className="form-floating">
                                        <input type="text" className="form-control" id="name" placeholder="Your Name" required />
                                        <label htmlFor="name">Your Name</label>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-floating">
                                        <input type="email" className="form-control" id="email" placeholder="Your Email" required />
                                        <label htmlFor="email">Your Email</label>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="form-floating">
                                        <input type="text" className="form-control" id="subject" placeholder="Subject" required />
                                        <label htmlFor="subject">Subject</label>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="form-floating">
                                        <textarea className="form-control" placeholder="Leave a message here" id="message" style={{ height: "100px" }} required></textarea>
                                        <label htmlFor="message">Message</label>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <button className="btn btn-primary py-3 px-5" type="submit">Send Message</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactForm;
