// Frontend: src/components/Checkout.js

import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import img1 from "./assets/1.jpeg"


const App = () => {
  const handleToken = async (token) => {
    
    try {
      const response = await fetch('http://localhost:5000/api/charge', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ token }),
        
      });

      console.log("token is " ,token);
      if (response.ok) {
        console.log('Payment successful!');
      } else {
        console.error('Payment failed!');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <StripeCheckout
    name='checkout'
    description='this is the checkout method'
    token={handleToken}
    
    image={img1}
    billingAddress={true}
    zipCode={true}
      stripeKey="pk_test_51OuJ16KPPHu93816MAXEBoPiw9vOroVoxgVzLWPA3QmXNbwDKKXu8bekFxVMN6zmfFhSVljeRCddyYjouRG7wwgj00Z1Ebw9Oh"
      amount={1000} // Amount in cents
      currency="USD"
      allowRememberMe={true} // Allow Stripe to save card for future transactions
    />
  );
};

export default App;





