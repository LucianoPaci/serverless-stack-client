import React, { Component, Fragment } from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import { Link, withRouter } from 'react-router-dom'
import { Navbar, Nav, NavItem } from 'react-bootstrap'
import { Auth } from 'aws-amplify'
import Routes from './Routes'
import './App.css'

class App extends Component {
	constructor(props) {
		super(props)

		this.state = {
			isAuthenticated: false,
			isAuthenticating: true
		}
	}

	async componentDidMount() {
		try {
			await Auth.currentSession()
			this.userHasAuthenticated(true)
		} catch (e) {
			if (e !== 'No current user') {
				alert(e)
			}
		}

		this.setState({
			isAuthenticating: false
		})
	}

	handleLogout = async (event) => {
		await Auth.signOut()
		this.userHasAuthenticated(false)
		this.props.history.push('/login')
	}

	userHasAuthenticated = (authenticated) => {
		this.setState({
			isAuthenticated: authenticated
		})
	}
	render() {
		const childProps = {
			isAuthenticated: this.state.isAuthenticated,
			userHasAuthenticated: this.userHasAuthenticated
		}
		return (
			!this.state.isAuthenticating && (
				<div className="App container">
					<Navbar fluid collapseOnSelect>
						<Navbar.Header>
							<Navbar.Brand>
								<Link to="/">Scratch</Link>
							</Navbar.Brand>
							<Navbar.Toggle />
						</Navbar.Header>
						<Navbar.Collapse>
							<Nav pullRight>
								{this.state.isAuthenticated ?
									<Fragment>
										<LinkContainer to='/settings'>
											<NavItem>Settings</NavItem>
										</LinkContainer>
										<NavItem onClick={this.handleLogout}>Logout</NavItem>
									</Fragment> :
									<Fragment>
										<LinkContainer to="/signup">
											<NavItem href="/signup">Signup</NavItem>
										</LinkContainer>
										<LinkContainer to="/login">
											<NavItem href="/login">Login</NavItem>
										</LinkContainer>
									</Fragment>
								}
							</Nav>
						</Navbar.Collapse>
					</Navbar>
					<Routes childProps={childProps} />
				</div>
			)
		)
	}
}

export default withRouter(App)
