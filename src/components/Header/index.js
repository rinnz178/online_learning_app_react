import React from "react";
import "./header_style.css";
import ReactDOM from "react-dom";
import Close from "../../assets/icons/close.png";

class index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show_button: true,
    };
  }
  disable_button() {
    this.setState({ show_button: !this.state.show_button });
  }
  render() {
    return (
      <div className="App">
        {this.state.show_button && (
          <div
            className="header flex"
            onClick={(event) => {
              if (event.target.id == "button_div") {
                if (window.confirm("Delete the item?")) {
                  let removeToCollection = this.removeToCollection.bind(
                    this,
                    121
                  );
                  removeToCollection();
                }
              }
            }}
          >
            <span className="long ">
              Are you a university or school looking for an online tutoring
              partnership? <span>Talk to Us</span>
            </span>

            <span className="content" id="close_button">
              <img
                className="close"
                src={Close}
                alt="close icon"
                onClick={() => {
                  this.disable_button();
                }}
              />
            </span>
           
          </div>
          
        )}
      </div>
    );
  }

  removeToCollection(key, e) {
    console.log(key);
  }
}

export default index;
