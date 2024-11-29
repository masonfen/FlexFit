import React, { useState } from "react";
import "./MultiStepForm.css";

const MultiStepForm = ({
  selectedGender,
  setSelectedGender,
  selectedFocus,
  setSelectedFocus,
  selectedWeight,
  setWeight,
  feet,
  setFeet,
  inch,
  setInch,
  selectedEquipment,
  setEquipment,
  selectedDays, // New state variable for selected days
  setSelectedDays, // Function to update selected days
  handleSubmit, // Receive handleSubmit as a prop
}) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [equipmentInput, setEquipmentInput] = useState("");

  const handleAddEquipment = () => {
    if (equipmentInput.trim() !== "") {
      setEquipment([...selectedEquipment, equipmentInput.trim()]);
      setEquipmentInput("");
    }
  };

  const handleEditEquipment = (index, value) => {
    const updatedEquipment = [...selectedEquipment];
    updatedEquipment[index] = value;
    setEquipment(updatedEquipment);
  };

  const handleDeleteEquipment = (index) => {
    const updatedEquipment = [...selectedEquipment];
    updatedEquipment.splice(index, 1);
    setEquipment(updatedEquipment);
  };

  // Days of the week array
  const daysOfWeek = [
    { short: 'S', full: 'Sunday' },
    { short: 'M', full: 'Monday' },
    { short: 'T', full: 'Tuesday' },
    { short: 'W', full: 'Wednesday' },
    { short: 'T', full: 'Thursday' },
    { short: 'F', full: 'Friday' },
    { short: 'S', full: 'Saturday' },
  ];

  const toggleDaySelection = (day) => {
    if (selectedDays.includes(day)) {
      setSelectedDays(selectedDays.filter((d) => d !== day));
    } else {
      setSelectedDays([...selectedDays, day]);
    }
  };

  const steps = [
    {
      id: 1,
      title: "Select Gender",
      content: (
        <div>
          <button
            className={`step-button ${
              selectedGender === "Male" ? "active" : ""
            }`}
            onClick={() => setSelectedGender("Male")}
          >
            Male
          </button>
          <button
            className={`step-button ${
              selectedGender === "Female" ? "active" : ""
            }`}
            onClick={() => setSelectedGender("Female")}
          >
            Female
          </button>
          <button
            className={`step-button ${
              selectedGender === "Other" ? "active" : ""
            }`}
            onClick={() => setSelectedGender("Other")}
          >
            Other
          </button>
        </div>
      ),
    },
    {
      id: 2,
      title: "Select Focus",
      content: (
        <div>
          <button
            className={`step-button ${
              selectedFocus === "Build Muscle" ? "active" : ""
            }`}
            onClick={() => setSelectedFocus("Build Muscle")}
          >
            Build Muscle
          </button>
          <button
            className={`step-button ${
              selectedFocus === "Strength" ? "active" : ""
            }`}
            onClick={() => setSelectedFocus("Strength")}
          >
            Strength
          </button>
          <button
            className={`step-button ${
              selectedFocus === "Fat Loss" ? "active" : ""
            }`}
            onClick={() => setSelectedFocus("Fat Loss")}
          >
            Fat Loss
          </button>
          <button
            className={`step-button ${
              selectedFocus === "Overall Health" ? "active" : ""
            }`}
            onClick={() => setSelectedFocus("Overall Health")}
          >
            Overall Health
          </button>
        </div>
      ),
    },
    {
      id: 3,
      title: "Enter Weight and Height",
      content: (
        <div>
          <input
            type="number"
            placeholder="Weight (lbs)"
            className="input-field"
            value={selectedWeight}
            onChange={(e) => setWeight(e.target.value)}
          />
          <input
            type="number"
            placeholder="Height (feet)"
            className="input-field"
            value={feet}
            onChange={(e) => setFeet(e.target.value)}
          />
          <input
            type="number"
            placeholder="Height (inches)"
            className="input-field"
            value={inch}
            onChange={(e) => setInch(e.target.value)}
          />
        </div>
      ),
    },
    {
      id: 4,
      title: "Select Workout Days",
      content: (
        <div className="days-of-week-container">
          {daysOfWeek.map((day, index) => (
            <div
              key={index}
              className={`day-circle ${
                selectedDays.includes(day.full) ? "selected" : ""
              }`}
              onClick={() => toggleDaySelection(day.full)}
            >
              {day.short}
            </div>
          ))}
        </div>
      ),
    },
    {
      id: 5,
      title: "Add Equipment",
      content: (
        <div>
          <div className="equipment-input-container">
            <input
              type="text"
              placeholder="Enter equipment"
              className="input-field"
              value={equipmentInput}
              onChange={(e) => setEquipmentInput(e.target.value)}
            />
            <button className="add-button" onClick={handleAddEquipment}>
              +
            </button>
          </div>
          <ul className="equipment-list">
            {selectedEquipment.map((item, index) => (
              <li key={index} className="equipment-item">
                <input
                  type="text"
                  value={item}
                  onChange={(e) => handleEditEquipment(index, e.target.value)}
                  className="input-field equipment-input"
                />
                <button
                  onClick={() => handleDeleteEquipment(index)}
                  className="delete-button"
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        </div>
      ),
    },
  ];

  const handleNext = () => {
    if (currentStep < steps.length - 1) setCurrentStep((prev) => prev + 1);
  };

  const handleBack = () => {
    if (currentStep > 0) setCurrentStep((prev) => prev - 1);
  };

  const progressPercentage = ((currentStep + 1) / steps.length) * 100;

  return (
    <div className="multi-step-form">
      {/* Progress Bar */}
      <div className="progress-bar">
        <div
          className="progress"
          style={{ width: `${progressPercentage}%` }}
        ></div>
      </div>

      <h2>{steps[currentStep].title}</h2>
      <div className="step-content">{steps[currentStep].content}</div>
      <div className="navigation-buttons">
        {currentStep > 0 && (
          <button className="step-button" onClick={handleBack}>
            Back
          </button>
        )}
        {currentStep < steps.length - 1 ? (
          <button className="step-button" onClick={handleNext}>
            Continue
          </button>
        ) : (
          <button
            className="step-button"
            onClick={handleSubmit} // Call handleSubmit when clicked
          >
            Submit
          </button>
        )}
      </div>
    </div>
  );
};

export default MultiStepForm;


