import React, { useState, useEffect } from "react";
import Axios from "axios";
import "../css/Home.css";
import NavBar from "../components/NavBar";
import NavWorkersPreview from "../components/NavWorkersPreview";
import NavBarInfo from "../components/NavBarInfo";
import WorkerHighlight from "../components/WorkerHighlight"; // Importa el componente

function HomeClient() {
  const [users, setUsers] = useState([]);
  const [highlightedWorker, setHighlightedWorker] = useState({}); // Datos del trabajador destacado

  useEffect(() => {
    Axios({
      method: "GET",
      baseURL: "http://work.up.railway.app/",
      url: "client/favorite_workers?id=1&limit=3",
    })
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [setUsers]);

  useEffect(() => {
    // Lógica para obtener y establecer el trabajador destacado
    // Supongamos que highlightedWorker se obtiene de alguna manera

    const fetchHighlightedWorker = async () => {
      try {
        const response = await Axios.get('http://api.com/highlighted-worker');
        setHighlightedWorker(response.data);
      } catch (error) {
        console.error('Error fetching highlighted worker:', error);
      }
    };

    fetchHighlightedWorker();
  }, []);

  return (
    <>
      <NavBar />
      <WorkerHighlight worker={highlightedWorker} /> {/* Componente WorkerHighlight */}
      <NavWorkersPreview favoriteWorkers={users} historyWorkers={users} />
      <NavBarInfo />
    </>
  );
}

export default HomeClient;

