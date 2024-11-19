"use client";

import { useEffect, useState } from "react";

interface UserData {
  id: string;
  email: string;
  name: string;
}

const Profile = () => {
  const [data, setData] = useState<UserData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    // Call API
    fetch("http://localhost:8080/auth/me")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data: UserData) => {
        setData(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  if (!data) {
    return <p>No data available.</p>;
  }

  return (
    <div>
      <h1>User Information</h1>
      <p>
        <strong>ID:</strong> {data.id}
      </p>
      <p>
        <strong>Email:</strong> {data.email}
      </p>
      <p>
        <strong>Name:</strong> {data.name}
      </p>
    </div>
  );
};

export default Profile;
