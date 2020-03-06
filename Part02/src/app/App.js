import React, { useState, useEffect } from "react";
import "./App.scss";

import logo from "./assets/images/react.png";

import { getUsers } from "./services/UserService";

import { AppBar, Toolbar } from "@material-ui/core";

import {
  UsersTable,
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

      <AppBar className={"navbar"}>
        <Toolbar>
          <img src={logo} width={50} className="logo" />

          <div className="divider">&nbsp;</div>

          <ButtonSwitch />
          <SearchInput />

          <div className="grow"></div>

          <Button icon="tune" onClick={() => setDrawerIsOpen(true)} />
          <Button
            icon="person"
            bgColor="#D83367"
            color="white"
            text="INCLUIR USUÁRIO"
          />

          <div className="divider">&nbsp;</div>

          <IconButton icon="home" />
          <IconButton icon="settings" />
          <IconButton icon="power_settings_news" />
        </Toolbar>
      </AppBar>

      <div className={"content"}>
        <UsersTable users={users} isLoading={isLoading} />
      </div>

      <Footer />
    </div>
  );
};

export default App;
