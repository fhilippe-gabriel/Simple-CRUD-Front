import React, { Component } from "react";

class Loader extends Component {
  render() {
    return (
      <div className="flex justify-center items-center h-screen p-56">
        <button type="button" class="bg-indigo-500 ..." disabled>
          <svg class="animate-spin h-5 w-5 mr-3 ..." viewBox="0 0 24 24"></svg>
          Loading
        </button>{" "}
      </div>
    );
  }
}

export default Loader;
