import React from 'react';

class ChuckNorrisJoke extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categoria: '',
      frase: ''
    };
  }

  componentDidMount() {
    fetch('https://api.chucknorris.io/jokes/random?category=animal')
      .then(response => response.json())
      .then(data => {
        this.setState({
          categoria: data.categories,
          frase: data.value
        });
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }

  render() {
    const { categoria, frase } = this.state;

    return (
      <div>
        <h2>Categoría: {categoria}</h2>
        <p>Frase: {frase}</p>
      </div>
    );
  }
}

export default ChuckNorrisJoke;