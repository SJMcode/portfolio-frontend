import React, { useEffect, useState } from 'react';

export default function Footer()
{
    const currentYear = new Date().getFullYear();
    const [viewCount, setViewCount] = useState(null);

    useEffect(() =>
    {
        // Using counterapi.dev to track visits
        fetch('https://api.counterapi.dev/v1/sjmcode-portfolio/visit/up')
            .then(res => res.json())
            .then(data =>
            {
                if (data && data.count)
                {
                    setViewCount(data.count);
                }
            })
            .catch(err => console.error('Error fetching counter:', err));
    }, []);

    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-links">
                    <a href="https://github.com/sjmcode" target="_blank" rel="noopener noreferrer" className="footer-link">GitHub</a>
                    <a href="https://linkedin.com/in/safir-jameel" target="_blank" rel="noopener noreferrer" className="footer-link">LinkedIn</a>
                    <a href="mailto:safir.jameel@gmail.com" className="footer-link">Email</a>
                </div>

                <div className="map-container">
                    <iframe
                        title="My Location"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d32578.41160456185!2d17.994348560027733!3d59.32353073707204!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465f763119640db1%3A0x400f91343710720!2sStockholm%2C%20Sweden!5e0!3m2!1sen!2sse!4v1715012345678!5m2!1sen!2sse"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>

                <div className="footer-credits">
                    &copy; {currentYear} Safir. All rights reserved.
                </div>

                {/* Round Visitor Counter Button */}
                {viewCount !== null && (
                    <div className="visitor-counter">
                        <span className="visitor-label">VIEWS</span>
                        {viewCount.toLocaleString()}
                    </div>
                )}
            </div>
        </footer>
    );
}
