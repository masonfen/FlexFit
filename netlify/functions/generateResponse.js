const fetch = require("node-fetch");

exports.handler = async (event) => {
  // Log the event and key presence (not the actual key!)
  console.log("[generateResponse] Event received");
  console.log("[generateResponse] Key present?", !!process.env.OPENAI_API_KEY);
  console.log("[generateResponse] Event body:", event.body);

  let prompt;

  // Parse the request body
  try {
    const parsedBody = JSON.parse(event.body);
    prompt = parsedBody.prompt;
  } catch (error) {
    console.error("[generateResponse] Error parsing event.body:", error);
    return {
      statusCode: 400,
      body: JSON.stringify({ error: "Invalid request body" }),
    };
  }

  // Check if the prompt is missing or empty
  if (!prompt || prompt.trim() === "") {
    console.error("[generateResponse] Missing or empty prompt");
    return {
      statusCode: 400,
      body: JSON.stringify({ error: "Prompt is required" }),
    };
  }

  // Attempt to call the OpenAI API
  try {
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",                // Or "gpt-3.5-turbo" if needed
        messages: [{ role: "user", content: prompt }],
        max_tokens: 1400,
        temperature: 1.1,
      }),
    });

    const data = await response.json();
    console.log("[generateResponse] OpenAI API response:", data);

    // If OpenAI returned an explicit error object
    if (data.error) {
      console.error("[generateResponse] OpenAI API error:", data.error);
      return {
        statusCode: 500,
        body: JSON.stringify({
          error: data.error.message || "OpenAI API returned an error",
        }),
      };
    }

    // If no choices array or it's empty, treat it as invalid
    if (!data.choices || data.choices.length === 0) {
      console.error("[generateResponse] Invalid response from OpenAI API:", data);
      return {
        statusCode: 500,
        body: JSON.stringify({ error: "Invalid response from OpenAI API" }),
      };
    }

    // Success: return the content from the first choice
    return {
      statusCode: 200,
      body: JSON.stringify({ response: data.choices[0].message.content }),
    };
  } catch (error) {
    console.error("[generateResponse] Error in generateResponse function:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Internal Server Error" }),
    };
  }
};
