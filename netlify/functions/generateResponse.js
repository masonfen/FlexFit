const fetch = require("node-fetch");

exports.handler = async (event) => {
    const { prompt } = JSON.parse(event.body);

    try {
        const response = await fetch("https://api.openai.com/v1/chat/completions", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
            },
            body: JSON.stringify({
                model: "gpt-4",
                messages: [{ role: "user", content: prompt }],
                max_tokens: 2000,
                temperature: 1,
            }),
        });

        const data = await response.json();

        return {
            statusCode: 200,
            body: JSON.stringify({ response: data.choices[0].message.content }),
        };
    } catch (error) {
        console.error("Error communicating with OpenAI API:", error.message);
        return {
            statusCode: 500,
            body: JSON.stringify({ error: "Failed to generate a response." }),
        };
    }
};
