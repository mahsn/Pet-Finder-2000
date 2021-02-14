import React from 'react';
import Signup from "./SingUp/Signup.js";
import Login from "./Login/Login.js";
import "./SingLogMain.scss";

class SingLogMain extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            isLogged: true
        }
    }

    changeState() {
        const {isLogged} = this.state;
        if(isLogged) {
            this.rightSideCont.classList.remove("right");
            this.rightSideCont.classList.add("left");
        } else {
            this.rightSideCont.classList.remove("left");
            this.rightSideCont.classList.add("right");
        }

        this.setState((prevState) => ({isLogged: !prevState.isLogged}))
    }
    

    render () {
        const {isLogged} = this.state;
        const currentStatus = isLogged ? "Sign In" : "Sign Up";
        const currentActive = isLogged ? "logged" : "signup";
        return (
            <>
                <div className="SingLogMain">
                    <div className="login-container">
                    <div className="base-container" ref={currRef => (this.container === currRef)}>
                        {isLogged && (
                        <Login containerRef={currRef => (this.currentStatus === currRef)} />
                        )}
                        {!isLogged && (
                        <Signup containerRef={currRef => (this.currentStatus ===     currRef)} />
                        )}
                    </div>
                    <RightContainer
                        current={currentStatus}
                        containerRef={currRef => (this.rightSideCont = currRef)}
                        onClick={this.changeState.bind(this)}
                    />
                    </div>
                </div>
            </>
        );
    }
 
}

const RightContainer = props => {
    return (
      <div
        className="right-container"
        ref={props.containerRef}
        onClick={props.onClick}
      >
        <div className="inner-container">
          <div className="text">{props.current}</div>
        </div>
      </div>
    );
  };

export default SingLogMain;