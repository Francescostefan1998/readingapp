//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
import "./chatGpt.css";
import { FaMicrophone } from "react-icons/fa";
import { useState, useEffect } from "react";

const ChatGpt = () => {
  const [response, setResponse] = useState("");
  const [question, setQuestion] = useState("");
  const [name, setName] = useState("francesco");
  console.log(name);
  const [conversationHistory, setConversationHistory] = useState([]);
  useEffect(() => {}, [name]);
  async function callOpenAIChatAPI(question) {
    findWordInString(question);

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
            temperature: 0.7,
            max_tokens: 1024,
            stop: ["\n\n"],
            messages: [
              ...conversationHistory,
              { role: "user", content: question },
            ],
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
      //utterances.lang = "it-IT"; // Set the language to Italian
      setConversationHistory((prevHistory) => [
        ...prevHistory,
        { role: "user", content: question },
        { role: "assistant", content: data.choices[0].message.content },
      ]);
      speechSynthesis.speak(utterances);
    } catch (error) {
      console.error(error);
    }
  }
  function findWordInString(string) {
    const wordsToCheck = [
      "milena",
      "mirella",
      "mirela",
      "milela",
      "sonia",
      "tommaso",
      "tomaso",
      "paolo",
      "elena",
      "enrico",
      "erricco",
      "erico",
      "errico",
      "gianluca",
      "mario",
      "riccard",
      "gian",
      "Milena",
      "Mirella",
      "Mirela",
      "Milela",
      "Sonia",
      "Tommaso",
      "Tomaso",
      "Paolo",
      "Elena",
      "Enrico",
      "Erricco",
      "Erico",
      "Errico",
      "Gianluca",
      "Mario",
      "Riccard",
      "Gian",
    ];
    for (let i = 0; i < wordsToCheck.length; i++) {
      if (string.includes(wordsToCheck[i])) {
        console.log(wordsToCheck[i]);
        setName(wordsToCheck[i]);
      }
    }
    return null;
  }
  const handleSpeechInput = () => {
    const recognition = new window.webkitSpeechRecognition();
    // recognition.lang = "it-IT"; // Set the language to Italian
    recognition.onresult = (event) => {
      const transcription = event.results[0][0].transcript;
      setQuestion(transcription);
    };
    recognition.onspeechend = () => recognition.stop();

    // Modify this value to adjust the minimum volume threshold
    recognition.volume = 0.5;
    recognition.start();
  };
  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  useEffect(() => {
    if (question) {
      callOpenAIChatAPI(question);
    }
  }, [question]);
  return (
    <div className="cahtgpt2">
      {/*<div onClick={() => callOpenAIChatAPI(question)}>send question</div> */}
      <div>
        {name && (
          <div className="sentence-name">
            {capitalizeFirstLetter(name)} schiaccia il microfono per parlarmi
          </div>
        )}
        <div className="microphone">
          <FaMicrophone onClick={handleSpeechInput} />
        </div>
        {/*  <input
          type="text"
          placeholder="ask me something"
          onChange={(e) => setQuestion(e.target.value)}
  />*/}
      </div>
    </div>
  );
};

export default ChatGpt;
