import React, {Component} from 'react'
import {connect} from 'react-redux'
import axios from 'axios'

class Dashboard extends Component {
    constructor() {
        super()
        this.state = {
            userInput: '',
            isChecked: true,
            posts: [
                // {
                //     title: 'title 1',
                //     username: 'brian',
                //     profile_pic: 'https://robohash.org/brian.png'
                // },
                // {
                //     title: 'title 2',
                //     username: 'brittney',
                //     profile_pic: 'https://robohash.org/brittney.png'
                // },
                // {
                //     title: 'title 3',
                //     username: 'evan',
                //     profile_pic: 'https://robohash.org/evan.png'
                // }
            ]
        }
    }

    changeHandler(e) {
        this.setState({
            userInput: e.target.value
        })
    }

    submit(e) {
        // if
        // axios.get(`/api/posts/${id}`)
    }

    reset(e) {

    }

    handleCheckbox(e) {
        const cb = document.getElementById('posts')
        if(cb.checked = true){
            this.setState({
                isChecked: true
            }) 
        }else if(cb.checked = false) {
            this.setState({
                isChecked: false
            })
        }
    }



    render(){
        const allPosts = this.state.posts.map(e => (
            <div>
                <h3>{e.title}</h3>
                <h3>{e.username}</h3>
                <img src={e.profile_pic} alt='profile pic'/>
            </div>
        ))
        console.log(this.state)
        return(
            <div>
                <form>
                    <h3>This is Dashboard</h3>
                    <input placeholder='Search By Title'></input>
                    <button type='submit'>Search</button>
                    <button type='reset'>Reset</button>
                    <input 
                        type='checkbox' 
                        id='posts'
                        onClick={e => this.handleCheckbox}/>
                    <label for='posts'>Include My Posts</label>
                </form>
                <div>
                    {allPosts}
                </div>
            </div>
        )
    }
}

const mapStateToProps = reduxState => reduxState

export default connect(mapStateToProps)(Dashboard)