import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Send, Loader2, CheckCircle } from 'lucide-react';
import { apiService } from '../services/api';
import { Button } from './ui/Button';
import './Contact.css';

interface ContactForm {
    name: string;
    email: string;
    subject: string;
    message: string;
}

export const Contact: React.FC = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

    const { register, handleSubmit, formState: { errors }, reset } = useForm<ContactForm>();

    const onSubmit = async (data: ContactForm) => {
        setIsSubmitting(true);
        setSubmitStatus('idle');

        try {
            await apiService.submitContactForm(data);
            setSubmitStatus('success');
            reset();
            await apiService.trackAnalytics('contact_form_submitted', {
                formData: data
            });
        } catch (error) {
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="contact" className="contact">
            <div className="container">
                <h2 className="section-title">Get In Touch</h2>

                <div className="contact-grid">
                    <div className="contact-info">
                        <h3>Let's Build Something Amazing</h3>
                        <p>I'm always interested in new opportunities and challenges.</p>

                        <div className="contact-methods">
                            <div className="contact-method">
                                <i className="fas fa-envelope"></i>
                                <span>ahmedelbalal7@gmail.com</span>
                            </div>
                            <div className="contact-method">
                                <i className="fas fa-phone"></i>
                                <span>+14387965224</span>
                            </div>
                            <div className="contact-method">
                                <i className="fas fa-map-marker-alt"></i>
                                <span>Montreal</span>
                            </div>
                        </div>
                    </div>

                    <form onSubmit={handleSubmit(onSubmit)} className="contact-form">
                        <div className="form-group">
                            <input
                                type="text"
                                placeholder="Your Name"
                                {...register('name', { required: 'Name is required' })}
                                className={errors.name ? 'error' : ''}
                            />
                            {errors.name && <span className="error-message">{errors.name.message}</span>}
                        </div>

                        <div className="form-group">
                            <input
                                type="email"
                                placeholder="Your Email"
                                {...register('email', {
                                    required: 'Email is required',
                                    pattern: {
                                        value: /^\S+@\S+$/i,
                                        message: 'Invalid email address'
                                    }
                                })}
                                className={errors.email ? 'error' : ''}
                            />
                            {errors.email && <span className="error-message">{errors.email.message}</span>}
                        </div>

                        <div className="form-group">
                            <input
                                type="text"
                                placeholder="Subject"
                                {...register('subject', { required: 'Subject is required' })}
                                className={errors.subject ? 'error' : ''}
                            />
                            {errors.subject && <span className="error-message">{errors.subject.message}</span>}
                        </div>

                        <div className="form-group">
                            <textarea
                                placeholder="Your Message"
                                rows={5}
                                {...register('message', {
                                    required: 'Message is required',
                                    minLength: {
                                        value: 10,
                                        message: 'Message must be at least 10 characters'
                                    }
                                })}
                                className={errors.message ? 'error' : ''}
                            />
                            {errors.message && <span className="error-message">{errors.message.message}</span>}
                        </div>

                        <button
                            type="submit"
                            className="btn btn-primary"
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? (
                                <>
                                    <Loader2 size={16} className="spinner" />
                                    Sending...
                                </>
                            ) : submitStatus === 'success' ? (
                                <>
                                    <CheckCircle size={16} />
                                    Message Sent!
                                </>
                            ) : (
                                <>
                                    <Send size={16} />
                                    Send Message
                                </>
                            )}
                        </button>

                        {submitStatus === 'error' && (
                            <div className="form-error">
                                Failed to send message. Please try again or email me directly.
                            </div>
                        )}
                    </form>
                </div>
            </div>
        </section>
    );
};