import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:5000/todos");
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <>
      <h1>Todo List</h1>
      <table>
        <tr>
          <td>ID</td>
          <td>Title</td>
          <td>Description</td>
        </tr>
        {data?.map((item) => (
          <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.title}</td>
            <td>{item.description}</td>
          </tr>
        ))}
      </table>
    </>
  );
}

export default App;
