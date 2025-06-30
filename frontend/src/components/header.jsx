import { useEffect, useState } from "react";
import axios from "axios";

const Header = () => {
  const [data, setData] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get('https://docker-ci-cd-production.up.railway.app');
        setData(res.data);
      } catch (err) {
        console.error("Lỗi:", err);
      }
    }

    fetchData(); // gọi hàm async bên trong useEffect
  }, []);

  return (
    <div>
      <h1>Header</h1>
        <div dangerouslySetInnerHTML={{__html : data}}/>
    </div>
  );
};

export default Header;
