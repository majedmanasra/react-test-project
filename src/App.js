import React, {Component} from 'react';
import {Provider} from "react-redux";
import reducers from "./Reducers";
import {createStore} from "redux";
import AppRouter from "./AppRouter";
import AppWrapper from "./AppWrapper";

class App extends Component {
    render() {
        const store = createStore(reducers);

        return (
            <Provider store={store}>
                <AppWrapper>
                    <AppRouter/>
                </AppWrapper>
            </Provider>
        );
    }
}

export default App;
