import React, { Component } from 'react';

class ExtensionOrLife extends Component {
  render() {
    const installed = document.documentElement.getAttribute('offliner-installed');

    if (installed) {
      return null
    }

    return (
      <div>
        WTF where's my extension??
      </div>
    );
  }
}

export default ExtensionOrLife;
