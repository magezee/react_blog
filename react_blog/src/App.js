// /App.js
import React,{Component} from 'react'

import {TopPart, LeftPart, MiddlePart ,RightPart} from './components'

import './App.less'

export default class App extends Component {
    
    render() {
        return (
            <div className='main-show'>

                <header className='top-part' >
                    <TopPart />
                </header>

                <div className='content'>
                    <aside className='left-part'>
                        <LeftPart/>
                    </aside>
                    
                    <main className='middle-part'>
                        <MiddlePart/>
                    </main>
                    
                    <aside className='right-part'>
                        <RightPart/>
                    </aside>               
                </div>
            </div>
        )
    }
}