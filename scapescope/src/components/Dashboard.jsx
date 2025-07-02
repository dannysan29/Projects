import React, { useEffect, useState } from 'react';
import './Dashboard.css';

export default function Dashboard() {
    const [issData, setIssData] = useState(null);
    const [solarData, setSolarData] = useState(null);
    const [moonPhase, setMoonPhase] = useState(null);
    const [isOpen, setIsOpen] = useState(true);
    const [errors, setErrors] = useState({});

    // Fetch ISS location
    useEffect(() => {
        const fetchISSData = async () => {
            try {
                const response = await fetch('http://api.open-notify.org/iss-now.json');
                if (!response.ok) throw new Error('ISS API unavailable');
                const data = await response.json();
                setIssData(data);
                setErrors(prev => ({ ...prev, iss: null }));
            } catch (error) {
                console.error('Error fetching ISS data:', error);
                setErrors(prev => ({ ...prev, iss: 'ISS data unavailable' }));
            }
        };

        fetchISSData();
        const interval = setInterval(fetchISSData, 30000); // Update every 30 seconds
        return () => clearInterval(interval);
    }, []);

    // Use mock solar data (NASA API requires special access)
    useEffect(() => {
        const generateSolarData = () => {
            const mockEvents = [
                { activityID: 'Solar Flare M2.1', beginTime: new Date().toISOString() },
                { activityID: 'Coronal Mass Ejection', beginTime: new Date(Date.now() - 86400000).toISOString() },
                { activityID: 'Solar Wind Enhancement', beginTime: new Date(Date.now() - 172800000).toISOString() }
            ];
            setSolarData(mockEvents);
            setErrors(prev => ({ ...prev, solar: 'Sample data' }));
        };

        generateSolarData();
        const interval = setInterval(generateSolarData, 300000); // Update every 5 minutes
        return () => clearInterval(interval);
    }, []);

    // Calculate moon phase
    useEffect(() => {
        const calculateMoonPhase = () => {
            const date = new Date();
            const year = date.getFullYear();
            const month = date.getMonth() + 1;
            const day = date.getDate();
            
            // Simple moon phase calculation
            const phase = ((year * 12.3685) + month + day) % 29.530588853;
            
            let phaseName = '';
            let phaseIcon = '';
            
            if (phase < 1.84566) {
                phaseName = 'New Moon';
                phaseIcon = '🌑';
            } else if (phase < 5.53699) {
                phaseName = 'Waxing Crescent';
                phaseIcon = '🌒';
            } else if (phase < 9.22831) {
                phaseName = 'First Quarter';
                phaseIcon = '🌓';
            } else if (phase < 12.91963) {
                phaseName = 'Waxing Gibbous';
                phaseIcon = '🌔';
            } else if (phase < 16.61096) {
                phaseName = 'Full Moon';
                phaseIcon = '🌕';
            } else if (phase < 20.30228) {
                phaseName = 'Waning Gibbous';
                phaseIcon = '🌖';
            } else if (phase < 23.99361) {
                phaseName = 'Last Quarter';
                phaseIcon = '🌗';
            } else if (phase < 27.68493) {
                phaseName = 'Waning Crescent';
                phaseIcon = '🌘';
            } else {
                phaseName = 'New Moon';
                phaseIcon = '🌑';
            }
            
            setMoonPhase({ name: phaseName, icon: phaseIcon, phase: Math.round(phase) });
        };

        calculateMoonPhase();
        const interval = setInterval(calculateMoonPhase, 3600000); // Update every hour
        return () => clearInterval(interval);
    }, []);

    const getISSLocation = () => {
        if (errors.iss) return errors.iss;
        if (!issData) return 'Loading...';
        const { latitude, longitude } = issData.iss_position;
        return `${parseFloat(latitude).toFixed(2)}°, ${parseFloat(longitude).toFixed(2)}°`;
    };

    const getSolarStatus = () => {
        if (errors.solar) return errors.solar;
        if (!solarData) return 'Loading...';
        return `${solarData.length} recent events`;
    };

    return (
        <div className="dashboard-container">
            <button onClick={() => setIsOpen(!isOpen)} className="toggle-dashboard">
                🛰️ Space Dashboard {isOpen ? '🔻' : '🔺'}
            </button>

            {isOpen && (
                <div className="dashboard-content">
                    <div className="dashboard-grid">
                        {/* ISS Location */}
                        <div className="dashboard-card">
                            <h3>🛰️ ISS Location</h3>
                            <p className="dashboard-value">{getISSLocation()}</p>
                            <p className="dashboard-label">Live coordinates</p>
                        </div>

                        {/* Moon Phase */}
                        <div className="dashboard-card">
                            <h3>{moonPhase?.icon || '🌙'} Moon Phase</h3>
                            <p className="dashboard-value">{moonPhase?.name || 'Loading...'}</p>
                            <p className="dashboard-label">Day {moonPhase?.phase || 0} of lunar cycle</p>
                        </div>

                        {/* Solar Activity */}
                        <div className="dashboard-card">
                            <h3>☀️ Solar Activity</h3>
                            <p className="dashboard-value">{getSolarStatus()}</p>
                            <p className="dashboard-label">Space weather monitoring</p>
                        </div>

                        {/* Current Time */}
                        <div className="dashboard-card">
                            <h3>🕐 Space Time</h3>
                            <p className="dashboard-value">
                                {new Date().toLocaleTimeString('en-US', { 
                                    timeZone: 'UTC',
                                    hour12: false 
                                })} UTC
                            </p>
                            <p className="dashboard-label">Universal Coordinated Time</p>
                        </div>
                    </div>

                    {/* Solar Events List */}
                    {solarData && solarData.length > 0 && (
                        <div className="solar-events">
                            <h4>Recent Solar Events</h4>
                            <div className="events-list">
                                {solarData.map((event, index) => (
                                    <div key={index} className="event-item">
                                        <span className="event-type">{event.activityID}</span>
                                        <span className="event-date">
                                            {new Date(event.beginTime).toLocaleDateString()}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}
