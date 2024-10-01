import useSpeech from "../hooks/useSpeech";

const Main = () => {
  const {
    text,
    isListening,
    startListening,
    stopListening,
    hasRecognitionSupport,
  } = useSpeech();

  return (
    <div>
      {hasRecognitionSupport ? (
        <div>
          <button onClick={startListening} disabled={isListening}>
            Start Listening
          </button>
          <button onClick={stopListening} disabled={!isListening}>
            Stop Listening
          </button>
          {isListening && <div>Listening...</div>}
          <p>{text}</p>
        </div>
      ) : (
        <div>Browser is not supporting</div>
      )}
    </div>
  );
};

export default Main;
