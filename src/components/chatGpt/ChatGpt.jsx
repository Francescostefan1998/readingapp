//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
import { useState } from "react";
const ChatGpt = () => {
  const [response, setResponse] = useState(null);
  async function callOpenAIChatAPI() {
    const OPENAI_API_KEY =
      "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"; // replace with your OpenAI API key

    try {
      const response = await fetch(
        "https://api.openai.com/v1/chat/completions",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${OPENAI_API_KEY}`,
          },
          body: JSON.stringify({
            model: "gpt-3.5-turbo",
            messages: [{ role: "user", content: "how are you today?" }],
            temperature: 0.7,
          }),
        }
      );

      const data = await response.json();
      console.log(data.choices[0].message.content);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div>
      <div>{response && response}</div>
      <div onClick={() => callOpenAIChatAPI()}>hello</div>
    </div>
  );
};

export default ChatGpt;
