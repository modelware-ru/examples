import {hot} from 'react-hot-loader/root';
import * as React from 'react';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    NavLink,
    Redirect,
    useRouteMatch,
    useParams,
} from "react-router-dom";

class App extends React.Component<any, any> {

    state: any = {}

    constructor(props: any) {
        super(props);
    }

    public render() {
        return (
            <Router>
                <div>
                    <nav>
                        <ul>
                            <li>
                                <Link to="/">Home</Link>
                                <NavLink to="/" exact={true} activeClassName='hurray'>Home</NavLink>
                            </li>
                            <li>
                                <Link to="/about">About</Link>
                                <NavLink to="/about" activeClassName='hurray'>About</NavLink>
                            </li>
                            <li>
                                <Link to="/users">Users</Link>
                            </li>
                            <li>
                                <Link to="/topics">Topics</Link>
                            </li>
                        </ul>
                    </nav>
                    <Switch>
                        <Route path="/" exact={true}>
                            <Home/>
                        </Route>
                        <Route path="/about">
                            <About/>
                        </Route>
                        <Route path="/users">
                            <Users/>
                        </Route>
                        <Route path="/topics">
                            <Topics/>
                        </Route>
                        <Route component={NotFound}/>
                    </Switch>
                </div>
            </Router>
        );
    }
}

function Home() {
    return <h2>Home</h2>;
}

function About() {
    return <h2>About</h2>;
}

function Users() {
    return <h2>Users</h2>;
}

function Topics() {
    let match = useRouteMatch();

    return (
        <div>
            <h2>Topics</h2>

            <ul>
                <li>
                    <Link to={`${match.url}/components`}>Components</Link>
                </li>
                <li>
                    <Link to={`${match.url}/props-v-state`}>
                        Props v. State
                    </Link>
                </li>
                <li>
                    <Link to={`${match.url}/1`}>
                        1
                    </Link>
                </li>
            </ul>

            {/* The Topics page has its own <Switch> with more routes
          that build on the /topics URL path. You can think of the
          2nd <Route> here as an "index" page for all topics, or
          the page that is shown when no topic is selected */}
            <Switch>
                <Route path={`${match.path}/:topicId`}>
                    <Topic/>
                </Route>
                <Route path={match.path}>
                    <h3>Please select a topic.</h3>
                </Route>
            </Switch>
        </div>
    );
}

function Topic() {
    let {topicId}: any = useParams();
    return <h3>Requested topic ID: {topicId}</h3>;
}

function Status({code, children}:any) {
    return (
        <Route
            render={({staticContext}:any) => {
                if (staticContext) staticContext.status = code;
                return children;
            }}
        />
    );
}

function NotFound() {
    return (
        <Status code={404}>
            <div>
                <h1>Sorry, can’t find that.</h1>
            </div>
        </Status>
    );
}

export default hot(App);
