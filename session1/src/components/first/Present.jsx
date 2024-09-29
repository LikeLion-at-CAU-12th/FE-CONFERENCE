import React from "react";
import styled from "styled-components";

const Present = ({ users }) => {
  return (
    <List>
      {users.map((user) => (
        <ListItem key={user.id}>{user.name}</ListItem>
      ))}
    </List>
  );
};

export default Present;

const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 20px auto;
  max-width: 300px;
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
`;

const ListItem = styled.li`
  padding: 10px;
  background-color: #f9f9f9;
  border-bottom: 1px solid #ddd;
  transition: background-color 0.3s;

  &:last-child {
    border-bottom: none;
  }

  &:hover {
    background-color: #f0f0f0;
  }
`;
