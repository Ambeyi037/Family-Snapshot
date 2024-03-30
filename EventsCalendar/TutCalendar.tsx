import { eachDayOfInterval, endOfMonth, endOfToday, format, getDay, isSameDay, isToday, startOfMonth } from 'date-fns'
import { useMemo } from 'react';
// import React from 'react'

const WEEKDAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

interface Event {
    date: Date;
    title: string
}

const EventCalendarProps{
    events: Event[]
}
function TutCalendar({ events }: EventCalendarProps) {


    const currentDate = new Date()
    const firstDayOfMonth = startOfMonth(currentDate)
    const lastDayOfMonth = endOfMonth(currentDate)


    const daysInMonth = eachDayOfInterval({
        start: firstDayOfMonth,
        end: lastDayOfMonth
    })

    const startingDayIndex = getDay(firstDayOfMonth)
    const eventsByDate = useMemo(() => {
        return events.reduce((acc: { [key: string]: Event[] }, event) => {
            const dateKey = format(event.date, 'yyyy-MM-dd');
            if (!acc[dateKey]) {
                acc[dateKey] = []
            }
            acc[dateKey].push(event);
            return acc;
        }, {});
    }, [events]);


    return (
        <>
            <div className='container mx-auto p-4'>
                <div className="mb-4">
                    <h2 className="text-center">
                        {format(currentDate, "MMMM yyyy")}
                    </h2>
                </div>

                <div className="grid grid-cols-7 gap-2">
                    {WEEKDAYS.map(day => {
                        return <div key={day} className='font-bold text-center'>{day}</div>
                    })}
                    {/* 13 */}
                    {Array.from({ length: startingDayIndex }).map(_, index)=>{
                        return <div key={`empty${index}`} className='border rounded-md p-2 text-center' />;
                    }}
                    {daysInMonth.map((day, index) => {
                        const dateKey = format(day, "yyy-MM-dd");
                        const todaysEvents = eventsByDate[dateKey] || [];

                        return (
                            <div key={index} className={clsx('border rounded-md p-2 text-center', {
                                "bg-gray-200": isToday(day),
                                "text-gray-900": isToday(day)
                            })}>
                                {format(day, 'd')}
                                {todaysEvents.map(event)=>{
                                    return {<div key={event.title} className='bg-green-500 rounded-md text-gray-900'>{event.title}</div>}
                                }}
                                {
                                    events.filter((event) => isSameDay(event.date, day))
                                        .map((event) => {
                                            return <div key={event.title} className="">{event.title}</div>
                                        })
                                }
                            </div>)
                    })}

                </div>
            </div>
        </>

    )
}

export default TutCalendar