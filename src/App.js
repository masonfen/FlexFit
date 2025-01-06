import React, { useState, useEffect } from 'react';
import './App.css';

// COMPONENTS 
import Button from './components/Button';
import TitleDesc from './components/TitleDesc';
import FlexFit_Title from './components/FlexFit_Title';
import SmallTitleInstructions from './components/SmallTitleInstructions';
import SmallTitle from './components/SmallTitle';
import BetterDesc from './components/BetterDesc';
import MultiStepForm from './components/MultiStepForm';
import FAQ from './components/FAQ';
import ContactModal from './components/ContactModal';

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

  // Function to generate a response from GPT-4 via Netlify Function
  const generateResponse = async () => {
    try {
      const result = await fetch('/.netlify/functions/generateResponse', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ prompt }),
      });

      const data = await result.json();
      setResponse(data.response);
    } catch (error) {
      console.error('Error generating response:', error);
      setResponse('An error occurred while generating the response.');
    }
  };

  const handleSubmit = () => {
    const equipmentList = selectedEquipment.join(', ');
    const daysList = selectedDays.join(', ');
    const generatedPrompt = `
    You are FlexFit's AI Fitness Coach, dedicated to creating personalized workout programs tailored to each individual's needs and goals.

Client Details:

Gender: ${selectedGender}
Height: ${feet} feet ${inch} inches
Weight: ${selectedWeight} lbs
Focus Area: ${selectedFocus}
Workout Schedule: The client wishes to work out on the following days: ${daysList}.

Available Equipment: The client has access to the following equipment: ${equipmentList}.

Program Requirements:

Warm-Up and Cool-Down: Each workout day should begin with a warm-up routine and end with a cool-down routine.
Equipment Utilization: Utilize only the specified equipment, ensuring creativity and uniqueness for each piece.
Day Order: Arrange the workout days in the standard weekly order: Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday.
The workout plan must include all of the equpiment selected by the client, get creative with the workouts. Any item, pet, or thing, has to be used in the workout plan somehow to affectively hit a muscle group.
Formatting Guidelines:

Use <h3> tags to highlight each day of the week, and put the targeted muscle group for that day next to it. Ex. Day - (Muscle group).
Bold equipment names using <strong> tags.
List exercises and steps using <li> tags.
Number each workout for the day instead of using bullet points.
Workout Plan Structure:

Introduction:

Briefly summarize the client's profile (gender, height, weight, focus area).
Daily Workouts:

For each selected day, provide a structured workout plan targeting a certain muscle group including warm-up, main exercises, and cool-down.
Example Format:

<h3>Monday</h3> Chest and Triceps
<ol>
  <li><strong>Treadmill:</strong> 10-minute light jog (Warm-Up)</li>
  <li><strong>Dumbbells:</strong> 3 sets of 12 bicep curls</li>
  <li><strong>Resistance Bands:</strong> 3 sets of 15 squats</li>
  <li><strong>Yoga Mat:</strong> 5-minute stretching (Cool-Down)</li>
</ol>
Final Output: Generate the complete workout plan following the above structure and formatting. Ensure the plan is clear, organized, and easy to follow.`;
    
    console.log('Generated prompt:', generatedPrompt);
    setPrompt(generatedPrompt);
  };

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
            <Button 
            label="About" 
            onClick={() => {
              const aboutSection = document.getElementById('aboutSection');
              if (aboutSection) {
                aboutSection.scrollIntoView({ behavior: 'smooth' });
              }
            }} 
          />
            {/* Show the modal when "Contact" is clicked */}
            <Button label="Contact" onClick={() => setShowContactModal(true)} />
          </div>

          <div className="desc-container"> 
            <TitleDesc />
          </div>

          <div className="title-container"> 
          {/* eslint-disable-next-line react/jsx-pascal-case */}
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
