import React from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Components
import DashBoard from './view/DashBoard/';
import HomeView from './view/HomeView/index';
import TableComponent from './view/TableView';
import LayoutsView from './view/LayoutsView';
import MasonryView from './view/MasonryView';
import FooterView from './view/FooterView';

import { ContainerHomeView } from './styled';

const AppRouter = () => {
  return (
    <Router>
      <React.Fragment>
        {/* <NavBarView /> */}

        <DashBoard />
        <ContainerHomeView id="main">
          <Switch>
            <Route path="/" exact component={HomeView} />
            <Route path="/table" component={TableComponent} />
            <Route path="/layouts" component={LayoutsView} />
            <Route path="/masonry" component={MasonryView} />
          </Switch>
          <FooterView />
        </ContainerHomeView>
      </React.Fragment>
    </Router>
  )
}

export default AppRouter
