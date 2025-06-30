import { useEffect, useState } from "react";
import fetchAPI from '../FetchAPI/fetchAPI'

const Users = () => {
  const [data, setData] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetchAPI()
        setData(res);
      } catch (err) {
        console.error("Lỗi:", err);
      }
    }

    fetchData(); // gọi hàm async bên trong useEffect
  }, []);

  return (
    <div>
      <h1>User</h1>
        <div dangerouslySetInnerHTML={{__html : data}}/>
    </div>
  );
};

export default Users;
