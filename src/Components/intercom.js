import React, {Component} from 'react';
import Intercom from 'react-intercom';

class intercom extends Component {
  render() {
    const appUser = {
      id: '1',
      email: 'hz20@sp1.com',
      name: 'sp1'
    }

    const user = {
      user_id: appUser.id,
      email: appUser.email,
      name: appUser.name
    };

    return (
      <div>
        {/* <Intercom appID="n9lcb4ld" { ...user } /> */}
      </div>
    );
  }
}

export default intercom;
