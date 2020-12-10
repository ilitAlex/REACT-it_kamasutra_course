import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import {Route} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import Button from "../src/components/Button";
import ProfileContainer from "./components/Profile/ProfileContainer";



const App = () => {

    return (
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Route
                        path='/dialogs'
                        render={() => <DialogsContainer/>
                        }
                    />
                    <Route
                        path='/profile'
                        render={ () => <ProfileContainer/>
                        }
                    />
                    <Route
                        path='/users'
                        render={ () => <UsersContainer/>
                        }
                    />
                    <Route
                        path='/button'
                        render={ () => <Button/>
                        }
                    />
                </div>
            </div>
    )
}

export default App;