import React, { useState, useEffect } from 'react';

function Contador() {
  const targetDate = new Date('2024-11-11T14:00:00');

  const calculateTimeDifference = () => {
    const now = new Date();
    const difference = now - targetDate;
    const seconds = Math.floor(difference / 1000);
    return seconds;
  };

  const initialSeconds = calculateTimeDifference();

  const [seconds, setSeconds] = useState(initialSeconds);

  useEffect(() => {
    if (localStorage.getItem('seconds') === null) {
      localStorage.setItem('seconds', initialSeconds);
    }
  }, [initialSeconds]);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(calculateTimeDifference());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    localStorage.setItem('seconds', seconds);
  }, [seconds]);

  const convertTime = (seconds) => {
    const years = Math.floor(seconds / (60 * 60 * 24 * 365));
    const months = Math.floor((seconds % (60 * 60 * 24 * 365)) / (60 * 60 * 24 * 30));
    const days = Math.floor((seconds % (60 * 60 * 24 * 30)) / (60 * 60 * 24));
    const hours = Math.floor((seconds % (60 * 60 * 24)) / (60 * 60));
    const minutes = Math.floor((seconds % (60 * 60)) / 60);
    const remainingSeconds = seconds % 60;

    return { years, months, days, hours, minutes, remainingSeconds };
  };

  const formatTimeUnit = (value, singular, plural) => {
    return value === 1 ? `${value} ${singular}` : `${value} ${plural}`;
  };

  const { years, months, days, hours, minutes, remainingSeconds } = convertTime(seconds);

  return (
    <div className="flex justify-center items-center min-h-full">
      <div className="bg-white text-red-900 p-6 rounded-lg shadow-md text-center w-180 h-auto flex flex-col justify-center items-center">
        <h1 className="text-2xl font-bold mb-4">Tempo de namoro</h1>
        <p className="text-lg leading-relaxed">
          {formatTimeUnit(years, 'ano', 'anos')}, {' '}
          {formatTimeUnit(months, 'mês', 'meses')}, {' '}
          {formatTimeUnit(days, 'dia', 'dias')}, {' '}
          {formatTimeUnit(hours, 'hora', 'horas')}, {' '}
          {formatTimeUnit(minutes, 'minuto', 'minutos')}, {' '}
          {formatTimeUnit(remainingSeconds, 'segundo', 'segundos')}
        </p>
      </div>
    </div>
  );
}

export default Contador;
