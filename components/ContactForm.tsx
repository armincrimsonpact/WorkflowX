'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import { Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  company: string;
  phone: string;
  interest: string;
  message: string;
}

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [submitMessage, setSubmitMessage] = useState('');

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Simulate API call (replace with actual endpoint)
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Simulate success/failure (90% success rate)
      if (Math.random() > 0.1) {
        setSubmitStatus('success');
        setSubmitMessage('Thank you! Your message has been sent successfully. We\'ll get back to you within 24 hours.');
        reset();
      } else {
        throw new Error('Submission failed');
      }
    } catch (error) {
      setSubmitStatus('error');
      setSubmitMessage('Sorry, there was an error sending your message. Please try again or email us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="glass p-8 rounded-2xl">
      <h3 className="text-2xl font-bold mb-6 text-white">Send us a Message</h3>
      
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-2 text-white">
              Full Name *
            </label>
            <input
              {...register('name', { required: 'Name is required' })}
              type="text"
              id="name"
              className="form-input"
              placeholder="Enter your full name"
            />
            {errors.name && (
              <p className="text-error text-sm mt-1">{errors.name.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-2 text-white">
              Email Address *
            </label>
            <input
              {...register('email', { 
                required: 'Email is required',
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: 'Please enter a valid email address'
                }
              })}
              type="email"
              id="email"
              className="form-input"
              placeholder="Enter your email address"
            />
            {errors.email && (
              <p className="text-error text-sm mt-1">{errors.email.message}</p>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="company" className="block text-sm font-medium mb-2 text-white">
              Company
            </label>
            <input
              {...register('company')}
              type="text"
              id="company"
              className="form-input"
              placeholder="Enter your company name"
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium mb-2 text-white">
              Phone Number
            </label>
            <input
              {...register('phone')}
              type="tel"
              id="phone"
              className="form-input"
              placeholder="Enter your phone number"
            />
          </div>
        </div>

        <div>
          <label htmlFor="interest" className="block text-sm font-medium mb-2 text-white">
            I'm interested in *
          </label>
          <select
            {...register('interest', { required: 'Please select your interest' })}
            id="interest"
            className="form-input"
          >
            <option value="">Select your interest</option>
            <option value="free-trial">Starting a free trial</option>
            <option value="demo">Scheduling a demo</option>
            <option value="enterprise">Enterprise solutions</option>
            <option value="partnership">Partnership opportunities</option>
            <option value="support">Technical support</option>
            <option value="other">Other inquiries</option>
          </select>
          {errors.interest && (
            <p className="text-error text-sm mt-1">{errors.interest.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium mb-2 text-white">
            Message *
          </label>
          <textarea
            {...register('message', { required: 'Message is required' })}
            id="message"
            className="form-textarea"
            placeholder="Tell us about your automation needs or ask any questions..."
            rows={5}
          />
          {errors.message && (
            <p className="text-error text-sm mt-1">{errors.message.message}</p>
          )}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="form-submit flex items-center justify-center gap-2"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              Sending...
            </>
          ) : (
            <>
              <Send className="w-5 h-5" />
              Send Message
            </>
          )}
        </button>

        {/* Status Message */}
        {submitStatus !== 'idle' && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className={`p-4 rounded-xl flex items-center gap-3 ${
              submitStatus === 'success' 
                ? 'bg-success/10 border border-success text-success' 
                : 'bg-error/10 border border-error text-error'
            }`}
          >
            {submitStatus === 'success' ? (
              <CheckCircle className="w-5 h-5" />
            ) : (
              <AlertCircle className="w-5 h-5" />
            )}
            <span className="text-sm font-medium">{submitMessage}</span>
          </motion.div>
        )}
      </form>
    </div>
  );
} 