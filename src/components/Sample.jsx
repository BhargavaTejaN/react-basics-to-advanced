/* eslint-disable no-unused-vars */

import { useEffect, useState } from "react";

import User from "./User";

const Sample = () => {
  const [posts, setPosts] = useState([]);
  const [users, setUsers] = useState([]);

  const [count, setCount] = useState(0);

  useEffect(() => {
    const getPosts = async () => {
      try {
        const responsePosts = await fetch(
          "https://jsonplaceholder.typicode.com/posts"
        );
        const responseUsers = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        const postData = await responsePosts.json();
        const usersData = await responseUsers.json();
        setPosts(postData);
        setUsers(usersData);
      } catch (error) {
        console.log("Error while fetching API : ", error);
      }
    };

    getPosts();
  }, []);

  const handleCount = () => {
    //console.log("clicked")
    setCount(count + 5);
  };

  const handleClick = (id) => {
    console.log(`clicked user with id ${id}`);
  };

  return (
    <div>
      <h1>GET POST</h1>

      <h2>{count}</h2>

      <button onClick={handleCount}>Click ME</button>

      <ul>
        {users.map((user) => (
          <User key={user.id} details={user} handleClick={handleClick} />
        ))}
      </ul>
    </div>
  );
};

export default Sample;
