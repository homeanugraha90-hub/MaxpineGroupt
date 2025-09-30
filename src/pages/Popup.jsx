import React, { useState } from 'react';
import { X, Mail, User, Phone, MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react';

export default function Popup() {
    const [isOpen, setIsOpen] = useState(true);
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
        city: '',
        message: ''
    });
    const [errors, setErrors] = useState({});
    const [status, setStatus] = useState({ type: '', message: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
        // Clear error for this field
        if (errors[name]) {
            setErrors(prev => ({ ...prev, [name]: '' }));
        }
    };

    const validateForm = () => {
        const newErrors = {};

        if (!formData.firstName.trim()) {
            newErrors.firstName = 'First name is required';
        }
        if (!formData.lastName.trim()) {
            newErrors.lastName = 'Last name is required';
        }
        if (!formData.phone.trim()) {
            newErrors.phone = 'Phone is required';
        } else if (!/^\+?[\d\s-]{10,}$/.test(formData.phone)) {
            newErrors.phone = 'Please enter a valid phone number';
        }
        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = 'Please enter a valid email';
        }
        if (!formData.city.trim()) {
            newErrors.city = 'City is required';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async () => {
        if (!validateForm()) {
            return;
        }

        setIsSubmitting(true);
        setStatus({ type: '', message: '' });

        // EmailJS configuration - Replace these with your actual values
        const serviceId = 'YOUR_SERVICE_ID';
        const templateId = 'YOUR_TEMPLATE_ID';
        const publicKey = 'YOUR_PUBLIC_KEY';

        try {
            const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    service_id: serviceId,
                    template_id: templateId,
                    user_id: publicKey,
                    template_params: {
                        from_name: `${formData.firstName} ${formData.lastName}`,
                        first_name: formData.firstName,
                        last_name: formData.lastName,
                        phone: formData.phone,
                        email: formData.email,
                        city: formData.city,
                        message: formData.message || 'No message provided',
                        to_name: 'Maxpine Group',
                    }
                })
            });

            if (response.ok) {
                setStatus({
                    type: 'success',
                    message: 'Thank you! Your message has been sent successfully. We will get back to you soon.'
                });
                handleReset();
                setTimeout(() => {
                    setIsOpen(false);
                }, 3000);
            } else {
                throw new Error('Failed to send message');
            }
        } catch (error) {
            setStatus({
                type: 'error',
                message: 'Oops! Something went wrong. Please try again or contact us directly.'
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleReset = () => {
        setFormData({
            firstName: '',
            lastName: '',
            phone: '',
            email: '',
            city: '',
            message: ''
        });
        setErrors({});
        setStatus({ type: '', message: '' });
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 bg-opacity-50 backdrop-blur-sm">
            <div className="relative w-full max-w-xl bg-white rounded-2xl shadow-2xl max-h-[70vh] overflow-hidden">
                {/* Header */}
                <div className="relative bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 px-6 py-8 text-white">
                    <button
                        onClick={() => setIsOpen(false)}
                        className="absolute top-4 right-4 p-2 hover:bg-[gray] hover:bg-opacity-20 rounded-full transition-all"
                        aria-label="Close"
                    >
                        <X className="w-6 h-6" />
                    </button>

                    <div className="flex items-center gap-4">
                        <div className="bg-[gray] bg-opacity-20 backdrop-blur-sm p-3 rounded-xl">
                            <Mail className="w-8 h-8" />
                        </div>
                        <div>
                            <h2 className="text-3xl font-bold mb-1">Get in Touch</h2>
                            <p className="text-blue-100">We'd love to hear from you. Fill out the form below.</p>
                        </div>
                    </div>
                </div>

                {/* Form Content */}
                <div className="p-6 overflow-y-auto max-h-[calc(90vh-140px)]">
                    {/* Status Messages */}
                    {status.message && (
                        <div className={`mb-6 p-4 rounded-lg flex items-start gap-3 ${status.type === 'success'
                                ? 'bg-green-50 border border-green-200'
                                : 'bg-red-50 border border-red-200'
                            }`}>
                            {status.type === 'success' ? (
                                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                            ) : (
                                <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                            )}
                            <p className={`text-sm ${status.type === 'success' ? 'text-green-800' : 'text-red-800'
                                }`}>
                                {status.message}
                            </p>
                        </div>
                    )}

                    <div className="space-y-2">
                        {/* Name Fields */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">
                                    First Name <span className="text-red-500">*</span>
                                </label>
                                <div className="relative">
                                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                                    <input
                                        type="text"
                                        name="firstName"
                                        value={formData.firstName}
                                        onChange={handleChange}
                                        className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none ${errors.firstName ? 'border-red-500' : 'border-gray-300'
                                            }`}
                                        placeholder="John"
                                    />
                                </div>
                                {errors.firstName && <p className="text-red-500 text-xs mt-1">{errors.firstName}</p>}
                            </div>

                            <div >
                                <label className="block text-sm font-semibold text-gray-700 mb-2">
                                    Last Name <span className="text-red-500">*</span>
                                </label>
                                <div className="relative">
                                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                                    <input
                                        type="text"
                                        name="lastName"
                                        value={formData.lastName}
                                        onChange={handleChange}
                                        className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none ${errors.lastName ? 'border-red-500' : 'border-gray-300'
                                            }`}
                                        placeholder="Doe"
                                    />
                                </div>
                                {errors.lastName && <p className="text-red-500 text-xs mt-1">{errors.lastName}</p>}
                            </div>
                        </div>

                        {/* Phone Field */}
                        <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>


                            <div >
                                <label className="block text-sm font-semibold text-gray-700 mb-2">
                                    Phone <span className="text-red-500">*</span>
                                </label>
                                <div className="relative">
                                    <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                                    <input
                                        type="tel"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none ${errors.phone ? 'border-red-500' : 'border-gray-300'
                                            }`}
                                        placeholder="+91 98765 43210"
                                    />
                                </div>
                                {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                            </div>




                            {/* City Field */}
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">
                                    City <span className="text-red-500">*</span>
                                </label>
                                <div className="relative">
                                    <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                                    <input
                                        type="text"
                                        name="city"
                                        value={formData.city}
                                        onChange={handleChange}
                                        className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none ${errors.city ? 'border-red-500' : 'border-gray-300'
                                            }`}
                                        placeholder="New Delhi"
                                    />
                                </div>
                                {errors.city && <p className="text-red-500 text-xs mt-1">{errors.city}</p>}
                            </div>
                        </div>


                        {/* Email Field */}
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                                Email <span className="text-red-500">*</span>
                            </label>
                            <div className="relative">
                                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none ${errors.email ? 'border-red-500' : 'border-gray-300'
                                        }`}
                                    placeholder="john.doe@example.com"
                                />
                            </div>
                            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                        </div>


                        {/* Message Field */}
                        {/* <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Your Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none resize-none"
                placeholder="Tell us about your requirements..."
              />
            </div> */}

                        {/* Buttons */}
                        <div className="flex flex-col sm:flex-row gap-3 pt-4">
                            <button
                                onClick={handleSubmit}
                                disabled={isSubmitting}
                                className="flex-1 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                            >
                                {isSubmitting ? (
                                    <>
                                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                        Sending...
                                    </>
                                ) : (
                                    <>
                                        <Send className="w-5 h-5" />
                                        Submit
                                    </>
                                )}
                            </button>
                            <button
                                onClick={handleReset}
                                disabled={isSubmitting}
                                className="flex-1 sm:flex-initial bg-gray-100 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                Reset
                            </button>
                        </div>
                    </div>

                    {/* Additional Info */}
                    <div className="mt-6 pt-6 border-t border-gray-200">
                        <p className="text-sm text-gray-500 text-center">
                            By submitting this form, you agree to our{' '}
                            <a href="#" className="text-blue-600 hover:underline">Privacy Policy</a>
                            {' '}and{' '}
                            <a href="#" className="text-blue-600 hover:underline">Terms of Service</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}