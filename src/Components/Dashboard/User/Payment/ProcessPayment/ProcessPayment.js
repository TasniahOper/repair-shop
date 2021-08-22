import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import DemoPayment from '../DemoPayment/DemoPayment';

const stripePromise = loadStripe('pk_test_51JLahOCdA8BR3LaM0iGmlpwiyE7eu7rqpXngU7bmelZmPnxRERUHtwkjU9tIcvTEvKyPQVkdvcUwOQIFGrEn7MAL004Kxz13W2');

const ProcessPayment = ({handlePaymentSuccess}) => {
    return (
        <Elements stripe={stripePromise}>
            
            <DemoPayment handlePaymentSuccess={handlePaymentSuccess}></DemoPayment>
    </Elements>
    );
};

export default ProcessPayment;