import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'

class Nav extends Component {

    render(props){
        const {username, profilePic} = this.props.user
        return(
            <nav>
                <h3>This is Nav</h3>
                <div>
                    <img src={profilePic} alt='Profile Pic'/>
                    <p>{username}</p>
                    <Link to='/dashboard'>Home</Link>
                    <Link to='/new'>New Post</Link>
                    <Link to='/'>Logout</Link>
                </div>
            </nav>
        )
    }
}

const mapStateToProps = reduxState => reduxState



export default connect(mapStateToProps)(Nav)