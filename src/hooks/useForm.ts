import { useState } from 'react';

interface FormState {
    isLoading: boolean;
    error: string | null;
    success: boolean;
}

interface FormData {
    name: string;
    email: string;
    company: string;
    subject: string;
    message: string;
}

export const useForm = () => {
    const [state, setState] = useState<FormState>({
        isLoading: false,
        error: null,
        success: false
    });

    const validateForm = (data: FormData): boolean => {
        if (!data.name.trim()) {
            setState(prev => ({ ...prev, error: 'Name is required' }));
            return false;
        }

        if (!data.email.trim()) {
            setState(prev => ({ ...prev, error: 'Email is required' }));
            return false;
        }

        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
            setState(prev => ({ ...prev, error: 'Please enter a valid email address' }));
            return false;
        }

        if (!data.message.trim() || data.message.length < 10) {
            setState(prev => ({ ...prev, error: 'Message must be at least 10 characters' }));
            return false;
        }

        return true;
    };

    const submitForm = async (formData: FormData): Promise<void> => {
        setState({ isLoading: true, error: null, success: false });

        if (!validateForm(formData)) {
            setState(prev => ({ ...prev, isLoading: false }));
            return;
        }

        try {
            // Simulate API call - replace with actual service like Formspree or Netlify Forms
            await new Promise((resolve, reject) => {
                setTimeout(() => {
                    // Simulate 90% success rate for realism
                    Math.random() > 0.1 ? resolve(true) : reject(new Error('Network error - please try again later'));
                }, 1500);
            });

            setState({ isLoading: false, error: null, success: true });
        } catch (error) {
            setState({
                isLoading: false,
                error: error instanceof Error ? error.message : 'Failed to send message',
                success: false
            });
        }
    };

    const resetForm = () => {
        setState({ isLoading: false, error: null, success: false });
    };

    return {
        ...state,
        submitForm,
        resetForm
    };
};