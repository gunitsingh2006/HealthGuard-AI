import React from 'react';
import { AlertCircle, Heart, Thermometer, Ban as Bandage } from 'lucide-react';

const EmergencyGuide = () => {
  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="card">
        <div className="flex items-center space-x-3 mb-6">
          <AlertCircle className="h-8 w-8 text-red-500" />
          <h2 className="text-2xl font-bold">Emergency Guide</h2>
        </div>

        <div className="space-y-6">
          <div className="p-4 bg-red-50 dark:bg-red-900/30 rounded-lg border border-red-200 dark:border-red-800">
            <div className="flex items-center space-x-2 text-red-600 dark:text-red-400 mb-2">
              <Heart className="h-5 w-5" />
              <h3 className="font-semibold">Heart Attack</h3>
            </div>
            <ol className="list-decimal list-inside space-y-2">
              <li>Call emergency services immediately (112)</li>
              <li>Help the person sit down and stay calm</li>
              <li>Loosen any tight clothing</li>
              <li>If prescribed, assist with taking aspirin</li>
              <li>Be prepared to perform CPR if necessary</li>
            </ol>
          </div>

          <div className="p-4 bg-yellow-50 dark:bg-yellow-900/30 rounded-lg border border-yellow-200 dark:border-yellow-800">
            <div className="flex items-center space-x-2 text-yellow-600 dark:text-yellow-400 mb-2">
              <Thermometer className="h-5 w-5" />
              <h3 className="font-semibold">Heat Stroke</h3>
            </div>
            <ol className="list-decimal list-inside space-y-2">
              <li>Move to a cool, shaded area</li>
              <li>Remove excess clothing</li>
              <li>Apply cool water to skin</li>
              <li>Place ice packs on neck, armpits, groin</li>
              <li>Seek immediate medical attention</li>
            </ol>
          </div>

          <div className="p-4 bg-blue-50 dark:bg-blue-900/30 rounded-lg border border-blue-200 dark:border-blue-800">
            <div className="flex items-center space-x-2 text-blue-600 dark:text-blue-400 mb-2">
              <Bandage className="h-5 w-5" />
              <h3 className="font-semibold">Severe Bleeding</h3>
            </div>
            <ol className="list-decimal list-inside space-y-2">
              <li>Apply direct pressure with clean cloth</li>
              <li>Keep the injured area elevated</li>
              <li>Do not remove cloth if soaked</li>
              <li>Add more layers if needed</li>
              <li>Call emergency services if bleeding persists</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmergencyGuide;