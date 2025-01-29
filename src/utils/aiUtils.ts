export const generateAIResponse = async (message: string) => {
  const response = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`
    },
    body: JSON.stringify({
      model: "gpt-4",
      messages: [
        {
          role: "system",
          content: "You are a helpful assistant that provides concise and accurate responses."
        },
        {
          role: "user",
          content: message
        }
      ],
      temperature: 0.7,
      max_tokens: 150
    })
  });

  if (!response.ok) {
    throw new Error('Failed to generate AI response');
  }

  const data = await response.json();
  return data.choices[0].message.content;
};