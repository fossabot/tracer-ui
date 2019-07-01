// Copyright 2019 Blockchain Technology Partners
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
// ------------------------------------------------------------------------------

import React from 'react'
import { connect } from 'react-redux'

import selectors from 'store/selectors'
import snackbarActions from 'store/modules/snackbar'

import SnackbarWrapper from 'pages/SnackbarWrapper'

@connect(
  state => ({
    open: selectors.snackbar.open(state),
    text: selectors.snackbar.text(state),
    type: selectors.snackbar.type(state),
  }),
  {
    onClose: snackbarActions.onClose,
  },
)
class SnackbarWrapperContainer extends React.Component {

  render() {
    return (
      <SnackbarWrapper {...this.props} />
    )
  }
}

export default SnackbarWrapperContainer