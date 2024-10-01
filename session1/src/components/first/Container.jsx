import React, { useEffect, useState } from "react";
import Present from "./Present";

const Container = () => {
   const [users, setUsers] = useState([]);

   useEffect(() => {
      const fetchUsers = async () => {
         const mockData = [
         { id: 1, name: "John Doe" },
         { id: 2, name: "Jane Doe" },
         { id: 3, name: "James Smith" },
         { id: 4, name: "Jenny Smith" },
         { id: 5, name: "John Smith" }
      ];
      setUsers(mockData);
   }
   fetchUsers();
   }, []);

   return <Present users={users} />;
};

export default Container;
