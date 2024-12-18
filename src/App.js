import React, { useState, useEffect } from 'react';
import './App.css';

// COMPONENTS 
import Button from './components/Button';
import TitleDesc from './components/TitleDesc';
import FlexFit_Title from './components/FlexFit_Title';
import SmallTitleInstructions from './components/SmallTitleInstructions';
import SmallTitle from './components/SmallTitle';
import apiKey from './components/apiKey';
import BetterDesc from './components/BetterDesc';
import MultiStepForm from './components/MultiStepForm';
import FAQ from './components/FAQ';
import ContactModal from './components/ContactModal';
// CHATGPT import
import { OpenAI } from 'openai';

// Emoji imports
import LightningBoltEmoji from './components/LightningBoltEmoji';
import MuscleEmoji from './components/MuscleEmoji';
import GlobeEmoji from './components/GlobeEmoji';
// Animation import
import 'animate.css';

function App() {
  // GPT-4 interaction state management --> prompt and response
  const [prompt, setPrompt] = useState('');
  const [response, setResponse] = useState('');
  // ****State Management**** --> set new variables that store their data
  const [selectedGender, setSelectedGender] = useState(null);
  const [selectedFocus, setSelectedFocus] = useState(null);
  const [selectedWeight, setWeight] = useState('');
  const [feet, setFeet] = useState('');
  const [inch, setInch] = useState('');
  const [selectedEquipment, setEquipment] = useState([]); 
  const [selectedDays, setSelectedDays] = useState([]); 

  // State for contact modal
  const [showContactModal, setShowContactModal] = useState(false);

  // Initialize OpenAI client using API key
  const openai = new OpenAI({
    apiKey: apiKey, 
    dangerouslyAllowBrowser: true, 
  });

  // Function to generate a response from GPT-4
  const generateResponse = async () => {
    try {
      const result = await openai.chat.completions.create({
        model: 'gpt-4', 
        messages: [{ role: 'user', content: prompt }],
        max_tokens: 2000, 
        temperature: 1, 
      });

      setResponse(result.choices[0].message.content); 
    } catch (error) {
      console.error('Error generating response:', error);
      setResponse('An error occurred while generating the response.');
    }
  };

  const handleSubmit = () => {
    const equipmentList = selectedEquipment.join(', ');
    const daysList = selectedDays.join(', ');
    const generatedPrompt =  `
    Create a detailed workout program for someone who is a ${selectedGender}, focusing on ${selectedFocus}.
    They weigh ${selectedWeight} lbs, and their height is ${feet} feet ${inch} inches.
    They want to work out on the following days: ${daysList}, make sure to include every day selected, and in order.
    The program should specifically utilize the following equipment and nothing else: ${equipmentList}, make sure to be as creative as possible

    Please format the workout plan neatly with the following guidelines:
    - Use headings (e.g., <h3>) to highlight each day of the week.
    - Use <strong> tags to bold equipment names.
    - Use unordered lists (<ul>) and list items (<li>) for exercises and steps.

    Provide the workout plan in a clear and organized manner, ensuring that it is easy to follow and understand.
  `;
    console.log('Generated prompt:', generatedPrompt);
    setPrompt(generatedPrompt);
  };

  // useEffect to trigger response generation when prompt is successfully updated
  useEffect(() => {
    if (prompt) {
      generateResponse();
    } // eslint-disable-next-line
  }, [prompt]);

  return (
    <div className="App">

      {/* Title */}
      <div className="parallax-container">
        <div className="title-background"> 
          <div className="navbar-container">
            <Button label="Home" onClick={() => ('home')} />
            <Button label="About" onClick={() => ('about')} />
            {/* Show the modal when "Contact" is clicked */}
            <Button label="Contact" onClick={() => setShowContactModal(true)} />
          </div>

          <div className="desc-container"> 
            <TitleDesc />
          </div>

          <div className="title-container">  
            <FlexFit_Title />
  
            {/* Scroll Indicator */}
            <div className="scroll-indicator" onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}>
              ↓
            </div>
          </div>

          <div className="smalltitle-container">
            <SmallTitle />
          </div>
        </div>
      </div>

      <section id="aboutSection">
        <div className="betterdesc-container">
          <BetterDesc />
          <div></div>

          <div className="emoji-container">
            <div className="emoji-item">
              <MuscleEmoji size={48} color="#fc030b" />
              <h1 className="big-text">Simple and Effortless</h1>
              <p className="small-text">Enjoy a user-friendly platform that makes setting up and following your fitness plan simple and stress-free.</p>
            </div>
            <div className="emoji-item">
              <LightningBoltEmoji size={48} color="#fc030b" borderColor="#ffffff" />
              <h1 className="big-text">AI-Powered Customization</h1>
              <p className="small-text">FlexFit's smart AI designs workouts tailored to your goals, fitness level, and available equipment for optimal results.</p>
            </div>
            <div className="emoji-item">
              <GlobeEmoji size={48} color="#fc030b" borderColor="#ffffff" />
              <h1 className="big-text">Workout Anywhere, anytime</h1>
              <p className="small-text">Access fully customizable workouts that fit your schedule and environment, whether at home, the gym, or on the go.</p>
            </div>
          </div>
        </div>
        
        <div className="smalltitle-instructions-container">
          <SmallTitleInstructions />
          <FAQ />
        </div>
      </section>

      {/* Conditional rendering of the contact modal */}
      {showContactModal && (
        <ContactModal onClose={() => setShowContactModal(false)} />
      )}
      
      {/* Multi-Step Form */}
      <MultiStepForm
        selectedGender={selectedGender}
        setSelectedGender={setSelectedGender}
        selectedFocus={selectedFocus}
        setSelectedFocus={setSelectedFocus}
        selectedWeight={selectedWeight}
        setWeight={setWeight}
        feet={feet}
        setFeet={setFeet}
        inch={inch}
        setInch={setInch}
        selectedEquipment={selectedEquipment}
        setEquipment={setEquipment}
        selectedDays={selectedDays}
        setSelectedDays={setSelectedDays}
        handleSubmit={handleSubmit}
      />

      {/* Display Generated Response */}
      <div className="response-box">
        <div dangerouslySetInnerHTML={{ __html: response }} />
      </div>

    </div>
  );
}

export default App;
