import React, { Component } from "react";
class DragAndDrop extends Component {
  state = {
    drag: false,
  };
  dropRef = React.createRef();
  handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    //  this.setState({ drag: false });
  };
  handleDragIn = (e) => {
    e.preventDefault();
    e.stopPropagation();
    this.dragCounter++;
    if (e.dataTransfer.items && e.dataTransfer.items.length > 0) {
      this.setState({ drag: true });
    }
  };
  handleDragOut = (e) => {
    e.preventDefault();
    e.stopPropagation();
    this.dragCounter--;
    if (this.dragCounter === 0) {
      this.setState({ drag: false });
    }
  };
  handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    this.setState({ drag: false });
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      this.props.handleDrop(e.dataTransfer.files);
      e.dataTransfer.clearData();
      this.dragCounter = 0;
    }
  };
  componentDidMount() {
    let div = this.dropRef.current;
    div.addEventListener("dragenter", this.handleDragIn);
    div.addEventListener("dragleave", this.handleDragOut);
    div.addEventListener("dragover", this.handleDrag);
    div.addEventListener("drop", this.handleDrop);
  }
  componentWillUnmount() {
    let div = this.dropRef.current;
    div.removeEventListener("dragenter", this.handleDragIn);
    div.removeEventListener("dragleave", this.handleDragOut);
    div.removeEventListener("dragover", this.handleDrag);
    div.removeEventListener("drop", this.handleDrop);
  }
  render() {
    return (
      <div
        style={{
          display: "inline-block",
          position: "relative",
          // textAlign: "center",
          margin: "1.5rem auto",
          marginBottom: "0px",
        }}
        ref={this.dropRef}
      >
        {this.state.drag && (
          <div
            style={{
              border: "solid black 2px",
              height: "45vw",
              width: "40vw",
              backgroundColor: " #336699",
              color: "white",
              position: "absolute",
              top: 0,
              bottom: 0,
              left: 0,
              right: 0,
              zIndex: 9999,
            }}
          >
            <div
              style={{
                position: "absolute",
                top: "50%",
                right: 0,
                left: 0,
                textAlign: "center",
                color: "black",
                fontSize: "2vw",
                fontWeight: "bolder",
              }}
            >
              <div>DROP HERE :)</div>
            </div>
          </div>
        )}

        {/* {!this.state.drag && (
         
            <div
              style={{
                // border: "dashed grey 4px",
                backgroundColor: "white",
                height: "500px",
                width: "500px",
                position: "absolute",
                
                textAlign: "center",
                zIndex: 9999,
              }}
            ></div>
         
        )} */}

        {this.props.children}
      </div>
    );
  }
}
export default DragAndDrop;
