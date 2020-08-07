import React from "react";
import "./App.css";
import Row from "./components/Row";
import request from "./components/request";
import Banner from "./components/Banner";
// import Nav from "./components/Nav";
function App() {
  return (
    <div className="app">
      {/* <Nav /> */}
      <Banner fetchUrl={request.fetchNetflixOriginal} />
      <Row
        title="NETFLIX ORIGINAL"
        fetchUrl={request.fetchNetflixOriginal}
        isLargeRow
      />
      <Row title="TRENDING" fetchUrl={request.fetchTrending} />
      <Row title="TOP RATED" fetchUrl={request.fetchTopRated} />
      <Row title="ACTION MOVIES" fetchUrl={request.fetchActionMovies} />
      <Row title="COMEDY MOVIES" fetchUrl={request.fetchComedyMovies} />
      <Row title="HORROR MOVIES" fetchUrl={request.fetchHorrorMovies} />
      <Row title="ROMANCE MOVIES" fetchUrl={request.fetchRomanceMovies} />
      <Row title="DOCUMENTARIES" fetchUrl={request.fetchDocumentaries} />
    </div>
  );
}
export default App;
