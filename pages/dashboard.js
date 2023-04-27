import { useState, useEffect } from "react";

function Dashboard() {
  const [isLoading, setIsLoading] = useState(true);
  const [dashboardData, setDashboardData] = useState(null);
  async function fetchDashboardData() {
    const res = await fetch("http://localhost:4000/dashboard");
    const data = await res.json();
    setDashboardData(data);
    setIsLoading(false);
  }
  useEffect(() => {
    fetchDashboardData();
  }, []);

  if (isLoading) {
    return <h2> Loading ...</h2>;
  }
  return (
    <div>
      <h2> Dashboard</h2>
      <h2> Posts {dashboardData.posts}</h2>
      <h2> Likes {dashboardData.likes}</h2>
      <h2> followers {dashboardData.followers}</h2>

      <h2>following{dashboardData.following}</h2>
    </div>
  );
}

export default Dashboard;
