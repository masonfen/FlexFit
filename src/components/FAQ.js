import React, { useState } from 'react';
import './FAQ.css'; 

const faqs = [
  {
    question: "How does this program make my workouts?",
    answer: "FlexFit utilizes GPT-4 in order to take in variables and produce unique, personalized fitness programs tailored towards every user!"
  },
  {
    question: "What if I don't have workout equipment?",
    answer: "That's why FlexFit is here! Our program can take even the most basic objects and create a unique workout that will guarantee a sweat! For example, try adding your dog, a cup of coffee, and a bag of skittles to the equipment ;)"
  },
  {
    question: "How does FlexFit keep track of my progress?",
    answer: "As of right now, there is no way for FlexFit to track your current progress. If this project gets enough attention and support then keep on the lookout for another update!"
  },
  {
    question: "What if I'm really lazy about planning my workouts?",
    answer: "No worries! In our Multi-step form, you will be prompted to select days of the week when you can/want to workout. After that, you will be given different workouts for each selected day of the week."
  },
  {
    question: "Will this program help experienced lifters?",
    answer: "The short-answer is no. With a lack of machine learning, statistics, and study cases, the AI in charge of creating these workouts (as of right now) does not know how to structure a workout for experienced lifters. These workouts are meant for people starting, or getting back into fitness and want to find a way to have a fun workout."
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faq-container" style={{ maxWidth: '600px', margin: '0 auto', padding: '40px' }}>
      <h2 style={{ textAlign: 'center' }}>FAQ</h2>
      <p style={{ textAlign: 'center', marginBottom: '30px' }}>Find answers to common questions about FlexFit</p>
      {faqs.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div key={index} className="faq-item" style={{ marginBottom: '10px', border: '1px solid #ddd', borderRadius: '5px' }}>
            <div
              className="faq-question"
              onClick={() => toggleFAQ(index)}
              style={{ 
                cursor: 'pointer', 
                padding: '15px', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'space-between',
                background: '#f9f9f9'
              }}
            >
              <span>{item.question}</span>
              <span style={{ fontWeight: 'bold', fontSize: '1.2em' }}>{isOpen ? '−' : '+'}</span>
            </div>
            {isOpen && (
              <div className="faq-answer" style={{ padding: '15px', background: '#fff' }}>
                {item.answer}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};


export default FAQ;

