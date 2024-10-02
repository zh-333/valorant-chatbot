import React, { useState, useRef, useEffect } from 'react';
import '../../styles/Chatbot.css';
import getBotResponse from './ChatbotLogic';
import botIcon from '../../assets/images/valoranticon.png';

function Chatbot() {
    const [conversations, setConversations] = useState([]);
    const [userInput, setUserInput] = useState('');
    const [error, setError] = useState(false);
    const [isTyping, setIsTyping] = useState(false);
    const [userName, setUserName] = useState('');
    const [nameInput, setNameInput] = useState(''); // Separate state for holding name input
    const chatBodyRef = useRef(null);

    // Effect for adding an initial greeting message when the component mounts
    useEffect(() => {
        if (conversations.length === 0 && userName) {
            setIsTyping(true);
            setTimeout(() => {
                setIsTyping(false);
                setConversations([
                    { text: `Hello ${userName}! How can I assist you today?`, type: 'bot' }
                ]);
            }, 2000);
        }
    }, [userName]);

    // Voice Input Handler Function
    const handleVoiceInput = () => {
        if (!('webkitSpeechRecognition' in window)) {
            alert('Sorry, your browser does not support speech recognition.');
            return;
        }

        const recognition = new window.webkitSpeechRecognition();
        recognition.lang = 'en-US';
        recognition.interimResults = false;
        recognition.maxAlternatives = 1;

        recognition.start();

        recognition.onresult = (event) => {
            const transcript = event.results[0][0].transcript;
            setUserInput(transcript);
        };

        recognition.onerror = (event) => {
            console.error('Speech recognition error detected: ' + event.error);
        };
    };
    
    // Handle sending a message
    const sendMessage = () => {
        if (userInput.trim() === '') {
            setError(true); 
            setTimeout(() => setError(false), 2000); // Hide after 2 seconds
            return;
        }

        if (userInput.trim().toLowerCase() === 'clear') {
            setConversations([]);
            setUserInput('');
            return;
        }

        const userMessage = { text: userInput, type: 'user' };
        setConversations((prevConversations) => [...prevConversations, userMessage]);

        // Set typing indicator before bot response
        setIsTyping(true);
        const botResponse = getBotResponse(userInput);

        setTimeout(() => {
            setIsTyping(false); // Turn off typing indicator
            setConversations((prevConversations) => [
                ...prevConversations,
                { text: botResponse, type: 'bot' }
            ]);
        }, 2000);

        setUserInput('');
    };

    useEffect(() => {
        if (chatBodyRef.current) {
            chatBodyRef.current.scrollTop = chatBodyRef.current.scrollHeight;
        }
    }, [conversations]);

    return (
        <>
            {!userName ? (
                <div className="name-entry">
                    <input
                        type="text"
                        placeholder="Enter your name..."
                        value={nameInput}
                        onChange={(e) => setNameInput(e.target.value)}
                    />
                    <button onClick={() => nameInput && setUserName(nameInput)}>Start Chat</button>
                </div>
            ) : (
                <div className="chatbot">
                    <div className="chat-header">
                        <div className="chat-title">
                            <img src={botIcon} alt="Bot Icon" className="chat-title-icon" />
                                Valorant Assistant Bot
                        </div>
                    </div>
                    <div className="chat-body" ref={chatBodyRef}>
                        {conversations.length === 0 && !isTyping ? (
                            <div className="placeholder-text">Start a new conversation...</div>
                        ) : (
                            conversations.map((message, index) => (
                                <div key={index} className={`message-container ${message.type}-message-container`}>
                                    {message.type === 'bot' ? (
                                        <>
                                            <div className="bot-icon">
                                                <img src={botIcon} alt="Bot Icon" />
                                            </div>
                                            <div className={`message bot-message`}>{message.text}</div>
                                        </>
                                    ) : (
                                        <>
                                            <div className={`message user-message`}>{message.text}</div>
                                            <div className="user-icon">👤</div>
                                        </>
                                    )}
                                </div>
                            ))
                        )}
                        {isTyping && (
                            <div className="typing-indicator">
                                <div className="bot-icon">
                                    <img src={botIcon} alt="Bot Icon" />
                                </div>
                                <div className="message bot-message">Bot is typing...</div>
                            </div>
                        )}
                    </div>
                    <div className="chat-footer">
                        <input
                            type="text"
                            value={userInput}
                            onChange={(e) => setUserInput(e.target.value)}
                            onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
                            placeholder="Type a message..."
                        />
                        <button onClick={sendMessage}>Send</button>
                        <button onClick={handleVoiceInput} className="voice-input-button">🎤</button>
                    </div>
                    {error && (
                        <div className="error-notification">
                            Please enter a message before sending.
                        </div>
                    )}
                </div>
            )}
        </>
    );
}

export default Chatbot;