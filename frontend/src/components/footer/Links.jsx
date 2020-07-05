import React from 'react';
import { Link, BrowserRouter as Router } from 'react-router-dom';
import axios from 'axios';

class Links extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    const URL = 'http://localhost:9000/data';
    axios({
      method: 'GET',
      url: URL,
      responseType: 'json',
    })
      .then((response) => {
        console.log(response);
        this.setState({ data: response.data });
      })
      .catch((error) => console.log(error));
  }

  render() {
    return (
      <>
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
      </>
    );
  }
}

export default Links;
