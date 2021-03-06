import React, {Component} from 'react';
import Aux from '../Auxiliary/Auxiliary';
import Intro from '../../components/Intro/Intro';
import NavigationTabs from '../../components/Navigation/NavigationTabs/NavigationTabs';
import Details from '../../container/Details/Details';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';
import Message from '../../components/Message/Message';
import Backdrop from '../../components/Backdrop/Backdrop';

class Layout extends Component {
  state = {
    selected: 'about me',
    showSideDrawer: false,
    showMessage: true
  }

  selectTabHandler = (tab) => {
    console.log(tab);
    this.setState({selected: tab});
    this.setState({showSideDrawer: false});
    window.scrollTo(0,0);
  }
  
  openSideDrawerHandler = () => {
    this.setState({showSideDrawer: true});
  }
  
  closeSideDrawerHandler = () => {
    this.setState({showSideDrawer: false});
  }

  closeMessageHandler = () => {
    this.setState({showMessage: false});
  }

  render() {
    const tabList = {
      'about me': false,
      'projects': false,
      'education': false,
      'skills': false,
      'experiences': false
    }

    //for styling purposes, pass property of viewing tab
    for (let key in tabList) {
      if (key !== this.state.selected) {
        tabList[key] = false;
      }
      else {
        tabList[key] = true;
      }
    }

    let message = <div style={{display: 'flex', justifyContent: 'center'}}>
      <Message show={this.state.showMessage} closeMessage={this.closeMessageHandler}/>
    </div>;
    if (this.state.showMessage === false) {
      message = null;
    }

    return (
      <Aux>
        <Backdrop show={this.state.showMessage} backdropClicked={this.closeMessageHandler}/>
        {message}
        <Intro/>
        <NavigationTabs
          drawerToggleClicked={this.openSideDrawerHandler}
          tabClicked={this.selectTabHandler}
          viewing={tabList}
        />
        <SideDrawer
          open={this.state.showSideDrawer}
          closed={this.closeSideDrawerHandler}
          tabClicked={this.selectTabHandler}
          viewing={tabList}
        />
        <Details
          tab={this.state.selected}
        />
      </Aux>
    );
  }
}

export default Layout;