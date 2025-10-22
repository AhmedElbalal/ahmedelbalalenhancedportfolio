interface ContactFormData {
    name: string;
    email: string;
    subject: string;
    message: string;
}

class ApiService {
    private baseURL = import.meta.env.VITE_API_URL || 'https://api.yourportfolio.com';

    async submitContactForm(data: ContactFormData): Promise<{ success: boolean; message: string }> {
        try {
            const response = await fetch(`${this.baseURL}/contact`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            if (!response.ok) {
                throw new Error('Failed to submit form');
            }

            return await response.json();
        } catch (error) {
            throw new Error('Network error. Please try again.');
        }
    }

    async trackAnalytics(event: string, data: Record<string, any>): Promise<void> {
        await fetch(`${this.baseURL}/analytics`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ event, data, timestamp: new Date().toISOString() }),
        });
    }
}

export const apiService = new ApiService();