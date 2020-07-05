import React from 'react';
import { Link, BrowserRouter as Router } from 'react-router-dom';

class Column extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    const myHeaders = new Headers({
      'Content-Type': 'application/json',
      Accept: 'application/json',
    });
    const url = 'http://localhost:9000/data';
    return fetch(url, {
      headers: myHeaders,
    })
      .then((response) => response.json())
      .then((response) => {
        this.setState({ data: response });
      })
      .catch((error) => console.log(error));
  }

  render() {
    return (
      <Router>
        {this.state.data.map((data) => {
          return (
            <div className="col-6 col-md" key={data.column}>
              <h5>{data.heading}</h5>
              <ul className="list-unstyled text-small">
                {data.items.map((item) => {
                  return (
                    <li key={item.id}>
                      <Link className="text-muted" to={item.uri}>
                        {item.text}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </Router>
    );
  }
}

export default Column;
