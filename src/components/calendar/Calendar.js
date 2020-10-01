import React, {Component, useEffect, useState} from 'react';

import {Calendar, momentLocalizer} from 'react-big-calendar';
import moment from 'moment';
import withDragAndDrop from 'react-big-calendar/lib/addons/dragAndDrop';
import 'react-big-calendar/lib/addons/dragAndDrop/styles.css';
import 'react-big-calendar/lib/css/react-big-calendar.css';

import AddEventModal from './AddEventModal';

const localizer = momentLocalizer(moment);
const DnDCalendar = withDragAndDrop(Calendar);

function MyCalendar({events, updateEvent, addEvent}) {
    // const events = props.events;
    // const [addModalOpen, setAddModalOpen] = useState({show: false});

    const onEventResize = (data) => {
        console.log(data)
        const {start, end} = data;
        const event = {...data.event, start:start, end:end};
        console.log(event)
        updateEvent(event);

        // setEvents((state) => {
        //     state.events[0].start = start;
        //     state.events[0].end = end;
        //     return { events: state.events };
        // });
    };

    const onEventDrop = (data) => {
        console.log(data);
    };

    const onSelectSlot = ({start, end}) => {
        // console.log(data);
        const name = window.prompt("event name?");
        addEvent({start:start, end:end, title:name});

        // setAddModalOpen({start: start, end: end, show: true});
    };
    // const handleClose = () => setAddModalOpen({show: false});
    const onView = (e) => console.log(e);
    return (
        <div className="MyCalendar">
            {/*<AddEventModal show={addModalOpen} handleClose={handleClose}/>*/}
            <DnDCalendar
                defaultDate={moment().toDate()}
                defaultView="month"
                events={events}
                localizer={localizer}
                onEventDrop={onEventDrop}
                onEventResize={onEventResize}
                selectable={true}
                onSelectSlot={onSelectSlot}
                resizable
                style={{height: '100vh'}}

            />
        </div>
    );
}

export default MyCalendar;
