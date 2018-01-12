import React from 'react';
import PropTypes from 'prop-types';

const styles = {
  clear: { clear: "both", paddingTop: "1em" },
  divider: {
    overflow: "hidden",
    whiteSpace: "nowrap",
    position: "relative",
    fontSize: "12px"
  },
  hr: {
    display: "inline-block",
    width: "100%",
    verticalAlign: "text-bottom",
    borderColor: "#fcb816",
    borderStyle: "dashed"
  },
  type: {
    position: "absolute",
    left: "20px",
    background: "#fff",
    padding: "0 4px",
    color: "#fcb816"
  },
  date: {
    position: "absolute",
    right: "20px",
    background: "#fff",
    padding: "0 4px",
    color: "#fcb816"
  }
}

export default class PrayerUpdate extends React.Component {

  render() {
    return (
      <div style={styles.clear}>
        <div style={styles.divider}>
          <hr style={styles.hr} />
          <span style={styles.type}>{this.props.update.type}</span>
          <span style={styles.date}>
            {moment(this.props.update.createdAt).fromNow()}
          </span>
        </div>
        <p>{this.props.update.content}</p>
      </div>
    );
  }
}

PrayerUpdate.propTypes = {
  update: PropTypes.shape({
    type: PropTypes.string,
    createdAt: PropTypes.date,
    content: PropTypes.string
  }).isRequired
}
