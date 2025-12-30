import { useEffect, useState } from "react";
import { getProfile } from "../api/portfolioapi";
import NeuralBackground from "./NeuralBackground";
export default function Profile() {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    getProfile().then(setProfile);
  }, []);

  if (!profile) return <div className="container py-5">Loading...</div>;

  return (
    <div className="container py-5">
      <div className="row align-items-center">
        <NeuralBackground />
        {/* LEFT SIDE — TEXT */}
        <div className="col-md-6">
          <h1 className="fw-bold" style={{ color: "#277D76" }}>
            {profile.name}
          </h1>
          <h4 className="text-muted mb-3">{profile.title}</h4>
          <p className="mb-1"><strong>Email:</strong> {profile.email}</p>
          {profile.location && (
            <p className="mb-1"><strong>Location:</strong> {profile.location}</p>
          )}
          {profile.phone && (
            <p className="mb-1"><strong>Phone:</strong> {profile.phone}</p>
          )}
        </div>

        {/* RIGHT SIDE — IMAGE */}
        <div className="col-md-6 text-center">
          <img src="https://raw.githubusercontent.com/SJMcode/portfolio-assets/5b2e12a0f9fa26892ca686b56f11e0e90c0078d0/profile_nordic_hackahon.jpg" alt="Safir profile" className="img-fluid rounded shadow" style={{ maxWidth: "280px", borderRadius: "12px" }} />
        </div>

      </div>
    </div>
  );
}
