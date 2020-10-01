import React, {Component, useEffect, useState} from 'react';
// import { ApolloClient, InMemoryCache} from "@apollo/client";
import {withAuthenticator, AmplifySignOut} from '@aws-amplify/ui-react';
import {Auth} from 'aws-amplify';
import {API, graphqlOperation} from 'aws-amplify';
import * as queries from "./graphql/queries";
import * as mutations from "./graphql/mutations";
import * as subscriptions from "./graphql/subscriptions"

import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import MyCalendar from "./components/calendar/Calendar";


const App = () => {
    const [events, setEvents] = useState([]);

    const fetchEvents = async () => {
        const {data} = await API.graphql(graphqlOperation( queries.listEvents));
        setEvents(data.listEvents.items || [])
    }
    const addEvent = async (input) => {
        console.log("trying to mutate");
        const {data} = await API.graphql(graphqlOperation(mutations.createEvent, {input:input}));
        console.log(data);
        setEvents(events.concat(data.createEvent));
        console.log(events);
        console.log(events.concat(data))
        return data;
    }
    const updateEvent = async (event) => {
        const {data} = await API.graphql(graphqlOperation(mutations.updateEvent, {input:event}));
        console.log(`${data}`)
        console.log(`${data.id}`)
        setEvents(events.map(e => (e.id === data.updateEvent.id) ? data : e));
    }
    useEffect(() => {
        fetchEvents();
    }, []);



    return (
        <div className="App">
            <AmplifySignOut/>
            <MyCalendar events={events} addEvent={addEvent} updateEvent={updateEvent} />
        </div>
    );
}


export default withAuthenticator(App);
