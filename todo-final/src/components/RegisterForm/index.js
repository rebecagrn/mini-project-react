import React, { Component, Fragment } from 'react'
import { withRouter } from "react-router"

import './register-form.css'

class RegisterForm extends Component {
	constructor(props){
		super(props)
		this.state = {
			content  : ''
		}
	}
	handleChange = (e) => {
		this.setState ({
			content : e.target.value
		})
	}
	add = () => {
		if(this.state.content.length){
			const newTodo = {
				'content': this.state.content
			}
			this.props.addTodo(newTodo)
			this.props.history.push('/')
		}
	}
	cancel = () => {
		this.props.history.push("/")
	}
	handleKeyPress = (e) => {
		if (e.key === 'Enter') {
			e.preventDefault()
			this.add()
		}
	}
	render() {
		return <Fragment>
				<section id="register-form" className="first-session">
					<div className="container">
						<h1 className="center">
							Adicionar Nova Tarefa
						</h1>
						<form>
							<div className="input-field">
								<label htmlFor="todo">
									Nova tarefa
								</label>
								<input id="todo" type="text" className="validate" required="required" onChange={this.handleChange} onKeyPress={this.handleKeyPress} />
								<span className="helper-text" data-error="Você precisa digitar um valor" data-success="Oks! Tudo certo!">
									Digite a descrição de uma nova tarefa.
								</span>
								<div className="center">
									<a id="add" onClick={this.add} className="waves-effect waves-light btn indigo darken-3 spacer-right">
										<i className="material-icons left">
											check
										</i>
										Adicionar
									</a>
									<a id="cancel" onClick={this.cancel} className="waves-effect waves-light btn indigo">
										<i className="material-icons left">
											clear
										</i>
										Cancelar
									</a>
								</div>
							</div>
						</form>
					</div>
				</section>
			</Fragment>;
	}
}

export default withRouter(RegisterForm)