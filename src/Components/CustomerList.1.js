import { Component } from "react";
import Customer from "./Customer";

export class CustomerList extends Component {
  onDelete = (id) => {
    // console.log("customer list", id);
    this.props.onDelete(id);
  };
  onEdit = (data) => {
    // console.log("customer list", id);
    this.props.onEdit(data);
  };
  render() {
    const customers = this.props.customers;
    return (
      <div className="mx-auto px-4 max-w-screen-xl">
        <tbody>
          {customers.map((customer) => {
            return (
              <Customer
                customer={customer}
                key={customer.id}
                onDelete={this.onDelete}
                onEdit={this.onEdit}
              />
            );
          })}
        </tbody>
      </div>
    );
  }
}
