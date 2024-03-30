import React, { useState } from "react";
import { useRouter } from "next/router";
import { AppwriteConfig } from "../../constants/appwrite_config";

interface Event {
    id: string;
    name: string;
    // Add other event properties as needed
}

const DeleteEvent: React.FC<{ event: Event }> = ({ event }) => {
    const appwriteConfig = new AppwriteConfig();
    const router = useRouter();
    const [loading, setLoading] = useState(false);

    const handleDelete = async () => {
        setLoading(true);
        try {
            // Make a request to your backend API to delete the event
            await fetch(`/api/events/${event.id}`, {
                method: "DELETE",
                // Add headers if needed
            });
            // Redirect to a different page after successful deletion
            router.push("/events");
        } catch (error) {
            console.error("Error deleting event:", error);
            setLoading(false);
        }
    };

    return (
        <div>
            <h2>Delete Event</h2>
            <p>Are you sure you want to delete the event "{event.name}"?</p>
            <button onClick={handleDelete} disabled={loading}>
                {loading ? "Deleting..." : "Delete Event"}
            </button>
        </div>
    );
};

export default DeleteEvent;
