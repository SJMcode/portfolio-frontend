const API_BASE = "http://localhost:5016"; 
// Change to https://api.smarteksolutions.se after deployment

export async function getProfile() {
  const res = await fetch(`${API_BASE}/api/profile`);
  return res.json();
}

export async function getExperience() {
  const res = await fetch(`${API_BASE}/api/experience`);
  return res.json();
}

export async function getSkills() {
  const res = await fetch(`${API_BASE}/api/skills`);
  return res.json();
}

export async function getProjects() {
  const res = await fetch(`${API_BASE}/api/projects`);
  return res.json();
}
