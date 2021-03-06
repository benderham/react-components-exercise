var React = require('react');
var StatTitle = require('./StatTitle.jsx');
var StatValue = require('./StatValue.jsx');

var StatItem = React.createClass({ 
  render: function() {
    return (
      <div key={this.props.key} className="col-xs-4">
        <StatValue text={this.props.value} />
        <StatTitle text={this.props.title} />
      </div>
    );
  }
});

module.exports = StatItem;