import { useState, useEffect } from 'react';

const PRESETS = [30, 60, 90, 120];

function RestTimer() {
  const [initialSeconds, setInitialSeconds] = useState(60);
  const [secondsLeft, setSecondsLeft] = useState(60);
  const [isRunning, setIsRunning] = useState(false);

  // useEffect를 활용한 1초 단위 카운트다운 및 언마운트/정지 시 타이머 정리(cleanup)
  useEffect(() => {
    if (!isRunning) return;

    const timerId = setInterval(() => {
      setSecondsLeft((prev) => {
        if (prev <= 1) {
          setIsRunning(false);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timerId);
  }, [isRunning]);

  const handleSelectPreset = (sec) => {
    setIsRunning(false);
    setInitialSeconds(sec);
    setSecondsLeft(sec);
  };

  const handleReset = () => {
    setIsRunning(false);
    setSecondsLeft(initialSeconds);
  };

  // MM:SS 포맷 변환
  const minutes = String(Math.floor(secondsLeft / 60)).padStart(2, '0');
  const seconds = String(secondsLeft % 60).padStart(2, '0');

  return (
    <div className="timer-box">
      <div className="timer-header">
        <span className="timer-title">세트 간 휴식 타이머</span>
        <div className="timer-presets">
          {PRESETS.map((sec) => (
            <button
              key={sec}
              type="button"
              className={`preset-btn ${initialSeconds === sec ? 'active' : ''}`}
              onClick={() => handleSelectPreset(sec)}
            >
              {sec}초
            </button>
          ))}
        </div>
      </div>

      <div className="timer-body">
        <div className={`timer-display ${secondsLeft === 0 ? 'finished' : ''}`}>
          {minutes}:{seconds}
        </div>
        <div className="timer-controls">
          <button
            type="button"
            className="btn-timer-start"
            onClick={() => setIsRunning((prev) => !prev)}
            disabled={secondsLeft === 0}
          >
            {isRunning ? '일시정지' : '시작'}
          </button>
          <button type="button" className="btn-timer-reset" onClick={handleReset}>
            초기화
          </button>
        </div>
      </div>
    </div>
  );
}

export default RestTimer;