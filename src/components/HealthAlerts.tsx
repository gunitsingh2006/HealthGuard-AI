import React, { useState, useEffect } from 'react';
import { Wind, Thermometer, Droplets, AlertTriangle } from 'lucide-react';

const HealthAlerts = () => {
  const [aqi, setAqi] = useState(75);
  const [temperature, setTemperature] = useState(28);
  const [humidity, setHumidity] = useState(65);
  const [alerts, setAlerts] = useState([
    {
      id: 1,
      type: 'warning',
      title: 'High Pollen Count',
      description: 'Increased risk for allergy sufferers. Consider wearing a mask outdoors.',
    },
    {
      id: 2,
      type: 'danger',
      title: 'Heat Wave Alert',
      description: 'Extreme temperatures expected. Stay hydrated and avoid outdoor activities.',
    }
  ]);

  // Simulate real-time updates
  useEffect(() => {
    const interval = setInterval(() => {
      setAqi(prev => prev + Math.floor(Math.random() * 5) - 2);
      setTemperature(prev => prev + Math.floor(Math.random() * 2) - 1);
      setHumidity(prev => prev + Math.floor(Math.random() * 3) - 1);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const getAqiColor = (value: number) => {
    if (value <= 50) return 'text-green-500';
    if (value <= 100) return 'text-yellow-500';
    return 'text-red-500';
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="grid md:grid-cols-3 gap-6">
      <a href="https://www.airnow.gov/aqi/aqi-basics/" target="_blank" rel="noopener noreferrer">
        <div className="card">
          <div className="flex items-center space-x-3 mb-4">
            <Wind className="h-6 w-6 text-blue-500" />
            <h3 className="text-xl font-semibold">Air Quality</h3>
          </div>
          <p className={`text-4xl font-bold ${getAqiColor(aqi)}`}>{aqi}</p>
          <p className="text-gray-600 dark:text-gray-300">AQI</p>
        </div>
      </a>

        <a href="https://www.accuweather.com/en/in/india-weather" target="_blank" rel="noopener noreferrer">
  <div className="card cursor-pointer">
    <div className="flex items-center space-x-3 mb-4">
      <Thermometer className="h-6 w-6 text-red-500" />
      <h3 className="text-xl font-semibold">Temperature</h3>
    </div>
    <p className="text-4xl font-bold">{temperature}°C</p>
    <p className="text-gray-600 dark:text-gray-300">Current</p>
  </div>
</a>

        <a href="https://zoom.earth/maps/humidity/" target='_blank' rel='noopener nonreferrer'>
        <div className="card">
          <div className="flex items-center space-x-3 mb-4">
            <Droplets className="h-6 w-6 text-blue-500" />
            <h3 className="text-xl font-semibold">Humidity</h3>
          </div>
          <p className="text-4xl font-bold">{humidity}%</p>
          <p className="text-gray-600 dark:text-gray-300">Relative</p>
        </div></a>
      </div>

      <div className="card">
        <div className="flex items-center space-x-3 mb-6">
          <AlertTriangle className="h-6 w-6 text-yellow-500" />
          <h3 className="text-xl font-semibold">Health Alerts</h3>
        </div>
        <div className="space-y-4">
          {alerts.map(alert => (
            <div
              key={alert.id}
              className={`p-4 rounded-lg ${
                alert.type === 'danger' 
                  ? 'bg-red-100 dark:bg-red-900/20 border-l-4 border-red-500' 
                  : 'bg-yellow-100 dark:bg-yellow-900/20 border-l-4 border-yellow-500'
              }`}
            >
              <h4 className="font-semibold mb-2">{alert.title}</h4>
              <p className="text-gray-700 dark:text-gray-300">{alert.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HealthAlerts;