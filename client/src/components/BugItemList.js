import React from "react";
import uuid from "uuid";
import { connect } from "react-redux";
import { getBugList } from "../actions/bugActions";
import PropTypes from "prop-types";

import {
  ListGroup,
  ListGroupItem,
  ListGroupItemHeading,
  ListGroupItemText
} from "reactstrap";

class BugItemList extends React.Component {
  static propTypes = {
    getBugList: PropTypes.func.isRequired,
    bug: PropTypes.object.isRequired
  };

  componentDidMount() {
    this.props.getBugList();
  }
  render() {
    const { bugs } = this.props.bug;
    return (
      <ListGroup>
        {bugs.map(
          ({
            id,
            feature,
            description,
            modifiedDate,
            status,
            priority,
            submittedBy,
            submittedDate
          }) => (
            <ListGroupItem>
              <ListGroupItemHeading>
                <span>Feature:</span> {feature}
              </ListGroupItemHeading>
              <ListGroupItemText>
                <span>description: {description}</span>
                <div>
                  <span>Last Modified:</span>
                  <span>{modifiedDate}</span>
                </div>
                <div>
                  <span>Priority:</span>
                  <span>{priority}</span>
                </div>
                <div>
                  <span>Staus:</span>
                  <span>{status}</span>
                </div>
                <div>
                  <span>Submited By:</span>
                  <span>{submittedBy}</span>
                </div>
                <div>
                  <span>Submited Date</span>
                  <span>{submittedDate}</span>
                </div>
              </ListGroupItemText>
            </ListGroupItem>
          )
        )}
      </ListGroup>
    );
  }
}

const mapStateToProps = state => ({
  bug: state.item
});
export default connect(
  mapStateToProps,
  { getBugList }
)(BugItemList);
