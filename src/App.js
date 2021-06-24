import React, { useState, useEffect } from "react";
import logo from './logo.svg';
import './App.css';
import styled from "styled-components";
import api from "./utils/api";
import TaskForm from "./containers/TaskForm";

const Container = styled.div`
  display: flex;
  flex-flow: column wrap;
  justify-contents: center;
  align-items: center;
`;

function App() {
  const [gapi, setGapi] = useState();
  const [authButtonShow, setAuthButtonShow] = useState(true);
  const [signOutButtonShow, setSignOutButtonShow] = useState(false);
  const [spreadsheetId, setSpreadsheetId] = useState("");

  const sheetName = "Work";

  function updateSigninStatus(isSignedIn) {
    if (isSignedIn) {
      setAuthButtonShow(false);
      setSignOutButtonShow(true);
      //listMajors();
    } else {
      setAuthButtonShow(true);
      setSignOutButtonShow(false);
    }
  }

  const initClient = () => {
    window.onGoogleScriptLoad = () => { // (Ref. 1)

      const _gapi = window.gapi; // (Ref. 2)
      setGapi(_gapi);

      _gapi.load('client:auth2', () => {
        _gapi.client.init({
          clientId: api.CLIENT_ID,
          discoveryDocs: api.DISCOVERY_DOCS,
          scope: api.SCOPES
        }).then(function () {
          // Listen for sign-in state changes.
          _gapi.auth2.getAuthInstance().isSignedIn.listen(updateSigninStatus);
          // Handle the initial sign-in state.
          updateSigninStatus(_gapi.auth2.getAuthInstance().isSignedIn.get());
        }, function (error) {
          console.log(JSON.stringify(error, null, 2));
        });
      });
    }
  }

  useEffect(() => {
    initClient();
    api.loadGoogleScript();
    setSpreadsheetId(api.SPREADSHEETID);
  }, [api]);

  useEffect(() => {
    console.log("SPREADSHEETID:", spreadsheetId);
  }, [spreadsheetId])

  function handleAuthClick(event) {
    gapi.auth2.getAuthInstance().signIn();
  }

  function handleSignoutClick(event) {
    gapi.auth2.getAuthInstance().signOut();
  }

  const handleCreateSpreadsheet = (e) => {
    api.createSpreadsheet(e, gapi);
  }

  const handleGetSpreadsheet = (e) => {
    api.getSheetsData("Work", gapi);
  }

  const handleAppendToSpreadsheet = (e) => {
    
  }

  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <Container>
        <button name="authButton" onClick={handleAuthClick}>Authorize</button>
        <button name="signOutButton" onClick={handleSignoutClick}>Sign Out</button>
        <button name="createSheetButton" onClick={handleCreateSpreadsheet}>Create Spreadsheet</button>
        <button name="getSheetDataButton" onClick={handleGetSpreadsheet}>Get Spreadsheet</button>
        <TaskForm sheetName={sheetName} gapi={gapi}/>
      </Container>
    </div>
  );
}

export default App;
