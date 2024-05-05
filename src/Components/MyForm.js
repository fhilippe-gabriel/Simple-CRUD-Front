import {
  eventWrapper,
  isEditable,
} from "@testing-library/user-event/dist/utils";
import React, { Component } from "react";
class Myform extends Component {
  state = {
    form: { first_name: "", last_name: "", email: "", isEdit: false },
    btnName: "Save",
    btnClass:
      "flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600",
  };

  isEmpy(obj) {
    return Object.entries(obj).length === 0 && obj.constructor === Object;
  }

  componentDidUpdate(prevProps) {
    if (prevProps !== this.props && !this.isEmpy(this.props.customer)) {
      this.setState({
        form: { ...this.props.customer, isEdit: true },
        btnName: "Update",
        btnClass:
          "flex w-full justify-center rounded-md bg-yellow-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-yellow-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-600",
      });
      // console.log("update");
    }
  }

  handleCahnge = (event) => {
    const { name, value } = event.target;
    let form = this.state.form;
    form[name] = value;
    this.setState({ form });
  };
  onFormSubmit = (event) => {
    event.preventDefault();

    if (this.formValidation()) {
      // console.log("Pronto para criar");
      //send data
      this.props.onFormSubmit(this.state.form);
    }
    // this.clearFormFields();
  };

  formValidation = () => {
    //Valida o First_Name
    if (document.getElementsByName("first_name")[0].value === "") {
      alert("Enter First_name");
      return false;
    }
    //Valida o Last_Name
    if (document.getElementsByName("last_name")[0].value === "") {
      alert("Enter last_name");
      return false;
    }
    if (document.getElementsByName("email")[0].value === "") {
      alert("Enter email");
      return false;
    }
    return true;
  };

  // clearFormFields = () => {
  //   this.setState({
  //     form: { first_name: "", last_name: "", email: "", isEdit: false },
  //   });

  //   this.setState({
  //     btnName: "Save",
  //     btnClass:
  //       "flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600",
  //   });
  //   document.querySelector(".form").reset();
  // };
  render() {
    return (
      <>
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form className="space-y-6" action="#" method="POST">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  First Name{" "}
                </label>
                <div className="mt-2">
                  <input
                    id="name"
                    name="first_name"
                    type="text"
                    autoComplete="name"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    onChange={this.handleCahnge}
                    value={this.state.form.first_name}
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Last Name{" "}
                </label>
                <div className="mt-2">
                  <input
                    id="name"
                    name="last_name"
                    type="text"
                    autoComplete="name"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    onChange={this.handleCahnge}
                    value={this.state.form.last_name}
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    onChange={this.handleCahnge}
                    value={this.state.form.email}
                  />
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className={this.state.btnClass}
                  onClick={this.onFormSubmit}
                >
                  {this.state.btnName}
                </button>
              </div>
            </form>
          </div>
        </div>
      </>
    );
  }
}
export default Myform;
