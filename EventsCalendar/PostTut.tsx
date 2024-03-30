import TutCalendar from './TutCalendar'
import { addDays, subDays } from "date-fns"


const PostTut = () => {
    return (
        <div className="">
            <TutCalendar
                events={[
                    { date: subDays(new Date(), 6), title: "Post Video" },
                    { date: subDays(new Date(), 1), title: "Edit Video" },
                    { date: subDays(new Date(), 3), title: "Code" }
                ]}

            />
        </div>
    )
}