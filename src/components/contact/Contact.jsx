import React, {useState} from 'react';
import {Container} from "../container/Container.jsx";
import './Contact.css'; // Importation du fichier CSS

export function ContactForm() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        company: '',
        subject: '',
        message: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        alert('Votre message a été envoyé !');
        setFormData({
            firstName: '',
            lastName: '',
            email: '',
            company: '',
            subject: '',
            message: '',
        });
    };

    return (
        <Container title="Contactez-moi" containerId="contact" >
            <form onSubmit={handleSubmit} className="contact-form">
                <div className="nameAndSurnameInput">
                    <div className="form-field">
                        <label htmlFor="firstName" className="form-label">Prénom</label>
                        <input
                            type="text"
                            id="firstName"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                            className="form-input"
                            required
                        />
                    </div>
                    <div className="form-field">
                        <label htmlFor="lastName" className="form-label">Nom</label>
                        <input
                            type="text"
                            id="lastName"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                            className="form-input"
                            required
                        />
                    </div>
                </div>

                <div className="form-field">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="form-input"
                        required
                    />
                </div>
                <div className="form-field">
                    <label htmlFor="company" className="form-label">Compagnie</label>
                    <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="form-input"
                    />
                </div>
                <div className="form-field">
                    <label htmlFor="subject" className="form-label">Sujet</label>
                    <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="form-input"
                    />
                </div>
                <div className="form-field">
                    <label htmlFor="message" className="form-label">Message</label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        className="form-textarea"
                        required
                    ></textarea>
                </div>
                <button type="submit" className="form-button">Envoyer</button>
            </form>
        </Container>
    );
}

export default ContactForm;
