import * as styles from './App.module.css';
import { Container } from "@mui/material";
import { Routes, Route } from "react-router-dom";

import Main from "./components/Main/Main";
import MarsPhotos from "./components/MarsPhotos/MarsPhotos";
import { Layout } from "./components/Layout/Layout";


function App() {
  
  return (
    <div >
      <Container maxWidth="xl" className={styles.App}>
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route index path="/" element={<Main />} />
            <Route path="mars" element={<MarsPhotos />} />
          </Route>
        </Routes>
      </Container>
    </div>
  );
}

export default App;
