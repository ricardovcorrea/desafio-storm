import React, { useState, useEffect } from "react";
import "./App.scss";

import { getUsers } from "./services/UserService";

import { AppBar, Toolbar, Container } from "@material-ui/core";

import {
  Table,
  Pagination,
  Footer,
  Drawer,
  ButtonSwitch,
  SearchInput,
  Button,
  IconButton
} from "./components";


const App = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [drawerisOpen, setDrawerIsOpen] = useState(false);

  useEffect(() => {
    getUsersList();
  }, []);

  const getUsersList = async () => {
    try {
      setIsLoading(true);

      const getUsersResult = await getUsers();
      setUsers(getUsersResult);

      setIsLoading(false);
    } catch (e) {
      setIsLoading(false);
      alert("Ocorreu um erro inesperado, tente novamente!");
    }
  };

  return (
    <div className="App">
      <Drawer open={drawerisOpen} onClose={() => setDrawerIsOpen(false)} />

      <div className="Navbar">
        <AppBar>
          <Toolbar>
            <div className="logo"></div>
            <div className="divider"></div>
            <ButtonSwitch />
            <SearchInput />
            <Button icon="settings" />
            <Button icon="user" text="INCLUIR USUÁRIO" />
            <div className="divider"></div>
            <IconButton icon="home" />
            <IconButton icon="cog" />
            <IconButton icon="off" />
          </Toolbar>
        </AppBar>
      </div>

      <Container>
        <Table users={users} isLoading={isLoading} />
        <Pagination pages={1} />
      </Container>

      <Footer />
    </div>
  );
};

export default App;
