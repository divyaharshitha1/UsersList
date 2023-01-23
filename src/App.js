import { Component } from "react";
import "./App.css";

class App extends Component {
  state = { usersList: [] };

  componentDidMount() {
    this.fetchData();
  }

  fetchData = async () => {
    const apiUrl = "https://jsonplaceholder.typicode.com/users";
    const options = {
      method: "GET",
    };
    const response = await fetch(apiUrl, options);
    const data = await response.json();
    console.log(data);

    this.setState({ usersList: data });
  };

  render() {
    const { usersList } = this.state;
    return (
      <div className="app-container">
        <h1 className="app-heading">Fetch Data from an API in React</h1>
        <ul>
          {usersList.map((eachList) => (
            <ol key={eachList.id}>
              User_name: {eachList.username}
              Full_Name: {eachList.name}
              User_Email: {eachList.email}
              Address: {eachList.address.street},{eachList.address.suite},
              {eachList.address.city},{eachList.address.zipcode}, Geo:{" "}
              {eachList.address.geo.lat},{eachList.address.geo.lng}
              Mobile_No: {eachList.phone}
              Website: {eachList.website}
              Company: {eachList.company.name},{eachList.company.catchPhrase},
              {eachList.company.bs}
            </ol>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
