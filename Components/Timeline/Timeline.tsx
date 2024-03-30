import './Timeline.css';
import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import DeleteEvent from './Delete/DeleteEvent'
import axios from 'axios';

interface Event {
    id: number;
    event_id: number,
    event_title: string;
    venue: string;
    host_title: string;
    f_name: string;
    surname: string;
    event_date: string;
    description: string;
    icon?: string; // Assuming icon is optional
    buttonText?: string; // Assuming buttonText is optional
}

const getUser = localStorage.getItem("userData")
const user = parseInt(getUser)
const Timeline = () => {
    const { id } = useParams();
    const baseURL = `http://127.0.0.1:8000/specific_user_events/${user}`;

    const [events, setEvents] = useState<Event[]>([]);



    useEffect(() => {
        fetch(baseURL)
            .then((res) => res.json())
            .then((data: Event[]) => setEvents(data))
            .catch((error) => console.error("Error fetching data:", error));
    }, []);

    // console.log(events)

    const handleDeleteEvent = (id: number) => {
        console.log(id)
        const conf = window.confirm(`Confirm deletion of event ${id}`)
        if (conf) {
            axios.delete(`http://127.0.0.1:8000/delete_event/${id}`)
                .then(res => alert('Event Deleted Successfully'))
                .catch(err => console.error("There was an error", err))
        }


    }

    let wedIconStyles = { background: "#06D6A0" };
    let birthIconStyles = { background: "#f9c74f" };

    return (
        <>
            <div className="timeline">
                <Link className="timeline-link" to='/addEvent'> Register An Event</Link>
                <div className="scheduled-events">
                    {/* layout="1-column-right" */}
                    <VerticalTimeline lineColor='orangered'>
                        {events ? (events.map((element) => {
                            let isWedIcon = element.icon === "wed";
                            return (
                                <div className="timeline-container">
                                    <VerticalTimelineElement
                                        key={element.id}
                                        date={element.event_date}
                                        dateClassName="date"
                                        // icon={<DeleteIcon />}
                                        iconStyle={isWedIcon ? wedIconStyles : birthIconStyles}
                                        icon={isWedIcon ? <DeleteIcon /> : <birthIcon />}
                                    >
                                        <h3 className="vertical-timeline-element-title">
                                            {element.event_title}
                                        </h3>
                                        <h5 className="vertical-timeline-element-subtitle">
                                            Venue: {element.venue}
                                        </h5>
                                        <h5 className="vertical-timeline-element-subtitle">
                                            Hosted By: {element.host_title} {element.f_name}  {element.surname}
                                        </h5>
                                        <p id="description">{element.description}</p>
                                        <div className="timeline-links">
                                            <Link to="/invite" className='timeline-link'>Invite Members</Link>
                                            <button onClick={e => handleDeleteEvent(element.event_id)} className='timeline-link'>Delete Event</button>

                                        </div>

                                    </VerticalTimelineElement>
                                </div>
                            );
                        })) : (
                            <div>No content available</div>
                        )}
                    </VerticalTimeline>

                    {/* <Link className="timeline-link" target="_blank" to='127.0.0.1:8000/download_events_report1/'>Events Report</Link> */}
                    <Link className="timeline-link" target="_blank" to='http://127.0.0.1:8000/download_events_report1/'>Events Report</Link>

                </div>
            </div>
        </>
    );
}

export default Timeline;
