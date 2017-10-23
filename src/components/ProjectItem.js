import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ProjectItem extends Component {

    deleteProject(id){
        this.props.onDelete(id);
    }
  render() {
    return (
      <li className="Project">
        <strong> {this.props.project.title} </strong>: <span className="category"> {this.props.project.category} </span><a href="#" className="link" onClick={this.deleteProject.bind(this, this.props.project.id)}>X </a>
      </li>
    );
  }
}

ProjectItem.propTypes = {
  project: PropTypes.object,
  onDelete: PropTypes.func
}

export default ProjectItem;
