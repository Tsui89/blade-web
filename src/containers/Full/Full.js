import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Header from '../../components/Header/';
import Sidebar from '../../components/Sidebar/';
import Breadcrumb from '../../components/Breadcrumb/';
import Aside from '../../components/Aside/';
import Footer from '../../components/Footer/';

import Main from '../../views/Main/Main';
import BladeAPI from '../../views/BladeAPI/BladAPI';
import AMP2Hz from "../../views/Blade/AMP2Hz";
import ACC1p3p from "../../views/Blade/ACC1p3p";

class Full extends Component {

  render() {
    return (
      <div className="app">
        <Header />
        <div className="app-body">
          <Sidebar {...this.props}/>
          <main className="main">
            <Breadcrumb />
            <div className="container-fluid">
              <Switch>
                <Route path="/main" name="main" component={Main}/>
                {/*<Route path="/hosts/:hostId" name="HostDetail" component={HostDetail}/>*/}
                <Route path="/bladeAPI" name="bladeAPI" component={BladeAPI}></Route>
                <Route path="/demo/amp2hz" component={AMP2Hz}/>
                <Route path="/demo/acc1p3p" component={ACC1p3p}/>
                {/*<Route path="/user/edit/:id" component={UserEdit}/>*/}
                <Redirect from="/" to="/main"/>
              </Switch>
            </div>
          </main>
          <Aside />
        </div>
        <Footer />
      </div>
    );
  }
}

export default Full;