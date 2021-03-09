import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import { routes } from "routes/routes";
import { theme } from "theme/mainTheme";
import store from "store/store";
import Main from "views/Main";
import Cart from "views/Cart";
import MakeOrder from "views/MakeOrder";
import GlobalStyle from "theme/GlobalStyle";
import MainTempalte from "templates/MainTemplate";
const Root = () => {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <MainTempalte>
            <Switch>
              <Route
                exact
                path={routes.home}
                render={() => <Redirect to={routes.main} />}
              />
              <Route path={routes.main} component={Main} />
              <Route path={routes.cart} component={Cart} />
              <Route path={routes.makeOrder} component={MakeOrder} />
            </Switch>
          </MainTempalte>
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  );
};

export default Root;
