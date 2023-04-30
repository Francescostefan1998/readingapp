//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
import { useState, useEffect } from "react";
const ChatGpt = () => {
  const [response, setResponse] = useState("");
  const [question, setQuestion] = useState("");
  const [conversationHistory, setConversationHistory] = useState("");

  async function callOpenAIChatAPI(question) {
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
            prompt: {
              text: conversationHistory,
              isPrefix: true,
            },
            temperature: 0.7,

            max_tokens: 1024,
            stop: ["\n"],
            messages: [{ role: "user", content: question }],
          }),
        }
      );

      const data = await response.json();
      console.log(data.choices[0].message.content);
      setResponse(data.choices[0].message.content);
      const speechSynthesis = window.speechSynthesis;
      const utterances = new SpeechSynthesisUtterance(
        data.choices[0].message.content
      );

      speechSynthesis.speak(utterances);
    } catch (error) {
      console.error(error);
    }
  }
  const handleSpeechInput = () => {
    const recognition = new window.webkitSpeechRecognition();
    recognition.onresult = (event) => {
      const transcription = event.results[0][0].transcript;
      setQuestion(transcription);
    };
    recognition.onspeechend = () => recognition.stop();

    // Modify this value to adjust the minimum volume threshold
    recognition.volume = 0.5;
    recognition.start();
  };
  useEffect(() => {
    if (question) {
      callOpenAIChatAPI(question, conversationHistory).then((newResponse) => {
        setConversationHistory(
          (prevHistory) => prevHistory + "\n" + question + "\n" + newResponse
        );
      });
    }
  }, [question]);
  return (
    <div>
      <div onClick={() => callOpenAIChatAPI(question)}>send question</div>
      <div>
        <button onClick={handleSpeechInput}>spaek to me</button>
        <input
          type="text"
          placeholder="ask me something"
          onChange={(e) => setQuestion(e.target.value)}
        />
      </div>
      <div>{response && response}</div>
    </div>
  );
};

export default ChatGpt;
