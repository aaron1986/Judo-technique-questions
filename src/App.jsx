import './App.css'
import { useState, useEffect } from "react";
import { songs } from "./Components/Songs";

function App() {
  const [currentSong, setCurrentSong] = useState(null);
  const [answered, setAnswered] = useState(false);
  const [result, setResult] = useState(null);
  const [score, setScore] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [gameWon, setGameWon] = useState(false);

  useEffect(() => {
    pickRandomSong();
  }, []);

  const pickRandomSong = () => {
    let randomSong;
    do {
      randomSong = songs[Math.floor(Math.random() * songs.length)];
    } while (randomSong?.id === currentSong?.id);

    setCurrentSong(randomSong);
    setAnswered(false);
    setResult(null);
    setSelectedIndex(null);
  };

  const handleGuess = (isCorrect, index) => {
    if (answered || gameWon) return;

    setAnswered(true);
    setSelectedIndex(index);

    if (isCorrect) {
      setScore((prev) => {
        const newScore = prev + 1;

        if (newScore === 15) {
          setGameWon(true);
        }

        return newScore;
      });

      setResult("Correct Answer!");
    } else {
      setScore(0); 
      setResult("Wrong Answer! Reset.");
    }
  };

  if (gameWon) {
    return (
      <div className="app">
        <h1>YOU WIN!</h1>
        <h2>15 techniques in a row!</h2>

        <button
          onClick={() => {
            setScore(0);
            setGameWon(false);
            pickRandomSong();
          }}
        >
          Play Again
        </button>
      </div>
    );
  }

  if (!currentSong) return null;

  return (
    <div className="app">
      <h1>Guess the Judo Technique Questions</h1>

      <h2>Streak: {score} / 15</h2>

      <audio key={currentSong.audio} controls autoPlay>
        <source src={currentSong.audio} type="audio/mpeg" />
      </audio>

      <div className="image-grid">
        {currentSong.options.map((option, index) => {
          let className = "option";

          if (answered) {
            if (option.isCorrect) className += " correct";
            else if (index === selectedIndex) className += " wrong";
          }

          return (
            <img
              key={index}
              src={option.img}
              alt="guess option"
              className={className}
              onClick={() =>
                handleGuess(option.isCorrect, index)
              }
            />
          );
        })}
      </div>

      {result && <h2>{result}</h2>}

      {answered && !gameWon && (
        <button onClick={pickRandomSong}>
          Next Technique
        </button>
      )}
    </div>
  );
}

export default App;