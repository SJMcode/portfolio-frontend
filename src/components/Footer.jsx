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
        <footer style={{
            padding: '1.5rem 2rem',
            background: 'rgba(255, 255, 255, 0.05)',
            backdropFilter: 'blur(10px)',
            borderTop: '1px solid rgba(255, 255, 255, 0.1)',
            color: '#fff',
            textAlign: 'center',
            position: 'relative',
            zIndex: 10
        }}>
            <div style={{
                maxWidth: '1200px',
                margin: '0 auto',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '1rem'
            }}>
                <div style={{
                    display: 'flex',
                    gap: '2rem',
                    flexWrap: 'wrap',
                    justifyContent: 'center'
                }}>
                    <a
                        href="https://github.com/sjmcode"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                            color: '#fff',
                            textDecoration: 'none',
                            fontSize: '0.95rem',
                            fontWeight: 500,
                            transition: 'opacity 0.3s',
                            opacity: 0.8
                        }}
                        onMouseEnter={(e) => e.target.style.opacity = '1'}
                        onMouseLeave={(e) => e.target.style.opacity = '0.8'}
                    >
                        GitHub
                    </a>
                    <a
                        href="https://linkedin.com/in/safir-jameel"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                            color: '#fff',
                            textDecoration: 'none',
                            fontSize: '0.95rem',
                            fontWeight: 500,
                            transition: 'opacity 0.3s',
                            opacity: 0.8
                        }}
                        onMouseEnter={(e) => e.target.style.opacity = '1'}
                        onMouseLeave={(e) => e.target.style.opacity = '0.8'}
                    >
                        LinkedIn
                    </a>
                    <a
                        href="mailto:safir.jameel@gmail.com"
                        style={{
                            color: '#fff',
                            textDecoration: 'none',
                            fontSize: '0.95rem',
                            fontWeight: 500,
                            transition: 'opacity 0.3s',
                            opacity: 0.8
                        }}
                        onMouseEnter={(e) => e.target.style.opacity = '1'}
                        onMouseLeave={(e) => e.target.style.opacity = '0.8'}
                    >
                        Email
                    </a>
                </div>

                <div style={{
                    width: '100%',
                    maxWidth: '300px',
                    height: '120px',
                    borderRadius: '8px',
                    overflow: 'hidden',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                    opacity: 0.9
                }}>
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

                <div style={{
                    fontSize: '0.8rem',
                    opacity: 0.4,
                    fontWeight: 400
                }}>
                    &copy; {currentYear} Safir. All rights reserved.
                </div>

                <div style={{
                    fontSize: '0.8rem',
                    opacity: 0.4,
                    fontStyle: 'italic'
                }}>
                    .
                </div>

                {/* Round Visitor Counter Button */}
                {viewCount !== null && (
                    <div style={{
                        position: 'absolute',
                        bottom: '1.5rem',
                        left: '1.5rem',
                        width: '60px',
                        height: '60px',
                        background: 'rgba(39, 125, 118, 0.15)',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        borderRadius: '50%',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        backdropFilter: 'blur(5px)',
                        color: '#fff',
                        fontSize: '0.75rem',
                        fontWeight: 600,
                        boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                        transition: 'transform 0.3s, background 0.3s',
                        cursor: 'default',
                        zIndex: 20
                    }}
                        onMouseEnter={(e) =>
                        {
                            e.currentTarget.style.transform = 'scale(1.05)';
                            e.currentTarget.style.background = 'rgba(39, 125, 118, 0.25)';
                        }}
                        onMouseLeave={(e) =>
                        {
                            e.currentTarget.style.transform = 'scale(1)';
                            e.currentTarget.style.background = 'rgba(39, 125, 118, 0.15)';
                        }}>
                        <span style={{ fontSize: '0.6rem', opacity: 0.7, marginBottom: '2px' }}>VIEWS</span>
                        {viewCount.toLocaleString()}
                    </div>
                )}
            </div>
        </footer>
    );
}
