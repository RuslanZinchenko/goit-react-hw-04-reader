import React, { Component } from 'react';
import PropTypes from 'prop-types';
import queryString from 'query-string';
import Controls from './Controls/Controls';
import Counter from './Counter/Counter';
import Publication from './Publication/Publication';
import publications from '../../server/publications.json';
import styles from './Reader.module.css';

const getItemFromLocation = location =>
  Number(queryString.parse(location.search).item);

export default class Reader extends Component {
  static propTypes = {
    history: PropTypes.oneOfType([PropTypes.array, PropTypes.object])
      .isRequired,
    location: PropTypes.oneOfType([PropTypes.array, PropTypes.object])
      .isRequired,
  };

  componentDidMount() {
    const { location, history } = this.props;
    const item = getItemFromLocation(location);

    if (!item) {
      history.push('/reader?item=1');
    }
  }

  componentDidUpdate() {
    const { location, history } = this.props;
    const item = getItemFromLocation(location);
    if (!item || item > publications.length)
      return history.push('/reader?item=1');

    return null;
  }

  handleIncrement = () => {
    const { location, history } = this.props;
    const currentItem = getItemFromLocation(location);

    history.push({
      ...location,
      search: `?item=${currentItem + 1}`,
    });
  };

  handleDecrement = () => {
    const { location, history } = this.props;
    const currentItem = getItemFromLocation(location);

    history.push({
      ...location,
      search: `?item=${currentItem - 1}`,
    });
  };

  render() {
    const { location } = this.props;
    const item = getItemFromLocation(location);
    const lastIndex = publications.length;
    const currentPublication = publications[item - 1];

    return (
      <div className={styles.reader}>
        <Publication {...currentPublication} />
        <Counter articleNumber={item} articlesLength={lastIndex} />
        <Controls
          onDecrement={this.handleDecrement}
          onIncrement={this.handleIncrement}
          currentPage={item}
          lastPage={lastIndex}
        />
      </div>
    );
  }
}
