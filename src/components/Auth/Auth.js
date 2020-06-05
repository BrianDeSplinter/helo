import React, {Component} from 'react'
import axios from 'axios'

export default class Auth extends Component {
    
    constructor(){
        super()
        this.state= {
            username: '',
            password: ''
        }
    }

    changeHandler = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    register = (e) => {
        e.preventDefault()
        const {username, password} = this.state
        axios.post('/auth/register', {username, password})
        .then(res => {
            this.props.loginUser(res.data)
            this.props.history.push('/dashboard')
        }).catch(err => {
            alert(err.response.data)
        })
    }

    login = (e) => {
        e.preventDefault()
        const {username, password} = this.state
        axios.post('/auth/login', {username, password})
        .then(res => {
            this.props.loginUser(res.data)
            this.props.history.push('/dashboard')
        }).catch(err => {
            alert('Could not log in')
        })
    }

    render(){
        const {username, password} = this.state
        return(
            <div>
                <h3>This is Auth</h3>
                <form>
                    <input
                        type='text'
                        placeholder='Username'
                        name='username'
                        value={username}
                        onChange={e => this.changeHandler(e)}/>
                    <input
                    type='password'
                    placeholder='Password'
                    name='password'
                    value={password}
                    onChange={e => this.changeHandler(e)}/>
                    <input
                        type='submit'
                        value='Register'/>
                    <input
                        type='submit'
                        value='Login'/>
                </form>
            </div>
        )
    }
}