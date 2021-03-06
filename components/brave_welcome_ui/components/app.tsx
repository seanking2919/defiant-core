/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

import * as React from 'react'
import { bindActionCreators, Dispatch } from 'redux'
import { connect } from 'react-redux'

// Feature-specific components
import { Page, Panel, SlideContent } from 'dissenter-ui/features/welcome'

// Component groups
import WelcomeBox from './screens/welcomeBox'
import ImportBox from './screens/importBox'
import FooterBox from './screens/footerBox'

// Images
import { Background, BackgroundContainer } from 'dissenter-ui/features/welcome/images'

// Utils
import * as welcomeActions from '../actions/welcome_actions'

// Assets
import '../../fonts/muli.css'
import '../../fonts/poppins.css'
import 'emptykit.css'

interface Props {
  welcomeData: Welcome.State
  actions: any
}

export interface State {
  currentScreen: number
}

const totalScreensSize = 2

export class WelcomePage extends React.Component<Props, State> {
  constructor (props: Props) {
    super(props)
    this.state = {
      currentScreen: 1
    }
  }

  get currentScreen () {
    return this.state.currentScreen
  }

  onClickLetsGo = () => {
    this.setState({ currentScreen: this.state.currentScreen + 1 })
  }

  onClickImport = () => {
    // clicking this button executes functionality and then auto proceed to next screen
    this.props.actions.importNowRequested()
    this.onClickDone()
    //this.setState({ currentScreen: this.state.currentScreen + 1 })
  }

  onClickConfirmDefaultSearchEngine = () => {
    this.props.actions.goToTabRequested('chrome://settings/search', '_blank')
  }

  onClickChooseYourTheme = () => {
    this.props.actions.goToTabRequested('chrome://settings/appearance', '_blank')
    this.onClickDone()
  }

  onClickRewardsGetStarted = () => {
    this.props.actions.goToTabRequested('chrome://rewards', '_blank')
  }

  onClickSlideBullet = (nextScreen: number) => {
    this.setState({ currentScreen: nextScreen })
  }

  onClickNext = () => {
    this.setState({ currentScreen: this.state.currentScreen + 1 })
  }

  onClickDone = () => {
    this.props.actions.goToTabRequested('chrome://newtab', '_self')
  }

  onClickSkip = () => {
    this.props.actions.goToTabRequested('chrome://newtab', '_self')
  }

  render () {
    const { currentScreen } = this.state
    return (
      <>
        <BackgroundContainer>
          <Background position={`-${currentScreen}0%`} style={{ backfaceVisibility: 'hidden' }} />
        </BackgroundContainer>
        <Page id='welcomePage'>
          <Panel>
            <SlideContent>
              <WelcomeBox index={1} currentScreen={this.currentScreen} onClick={this.onClickLetsGo} />
              <ImportBox index={2} currentScreen={this.currentScreen} onClick={this.onClickImport} />
            </SlideContent>
            <FooterBox
              totalScreensSize={totalScreensSize}
              currentScreen={this.currentScreen}
              onClickSkip={this.onClickSkip}
              onClickSlideBullet={this.onClickSlideBullet}
              onClickNext={this.onClickNext}
              onClickDone={this.onClickDone}
            />
          </Panel>
        </Page>
      </>
    )
  }
}

export const mapStateToProps = (state: Welcome.ApplicationState) => ({
  welcomeData: state.welcomeData
})

export const mapDispatchToProps = (dispatch: Dispatch) => ({
  actions: bindActionCreators(welcomeActions, dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WelcomePage)
