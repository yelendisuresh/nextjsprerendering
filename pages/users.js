import React from "react";

const users = ({ users }) => {
  return (
    <div>
      <h1> List of Users</h1>
      {users.map(user => {
        return <p key={user.id}>{user.name}</p>;
      })}
    </div>
  );
};

export default users;

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();
  console.log(data);
  return {
    props: {
      users: data,
    },
  };
}
