import React, { Component } from 'react'

//import section components
import Intro from "../components/IntroSection"
import Projects from '../components/Projects'
import SideFooter from '../components/Side-Footer'


export default class MiddleSection extends Component {
    render() {
        return (
            <>
                <div id="home" >
                    <Intro />
                </div>
                <div id="about" >
                    <Projects />
                </div>
                <div id="contact" >
                    <SideFooter />
                </div>

            </>
        )
    }
}