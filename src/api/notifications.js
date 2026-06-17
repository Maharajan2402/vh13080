import { Log } from "../utils/logger";
const API_URL =
    "http://4.224.186.213/evaluation-service/notifications";

const TOKEN =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiJtYWhhcmFqYW4wMjIwMDVAZ21haWwuY29tIiwiZXhwIjoxNzgxNjgwOTk4LCJpYXQiOjE3ODE2ODAwOTgsImlzcyI6IkFmZm9yZCBNZWRpY2FsIFRlY2hub2xvZ2llcyBQcml2YXRlIExpbWl0ZWQiLCJqdGkiOiI5MjI2MjlkZC0xMGQ0LTQyN2ItYWM1NC0yZmU5NWU1Y2MzMTciLCJsb2NhbGUiOiJlbi1JTiIsIm5hbWUiOiJtYWhhIHJhamFuIiwic3ViIjoiZTc4ZTE2YWUtNTI4Ny00M2EzLTk1NTYtY2VjNzM3ODdhZDU3In0sImVtYWlsIjoibWFoYXJhamFuMDIyMDA1QGdtYWlsLmNvbSIsIm5hbWUiOiJtYWhhIHJhamFuIiwicm9sbE5vIjoiaDEzMDgiLCJhY2Nlc3NDb2RlIjoianVGcGh2IiwiY2xpZW50SUQiOiJlNzhlMTZhZS01Mjg3LTQzYTMtOTU1Ni1jZWM3Mzc4N2FkNTciLCJjbGllbnRTZWNyZXQiOiJVeEVUY0t5RG5DdlhGTlBRIn0.gKNVR2Mtp0Yt-BGr9WHEti-Natfl4vX8LYSVdkdNesY";

export async function fetchNotifications(
    page = 1,
    limit = 10,
    notificationType = ""
) {
    const url =
        `${API_URL}?page=${page}&limit=${limit}` +
        (notificationType
            ? `&notification_type=${notificationType}`
            : "");

    await Log(
        "frontend",
        "info",
        "api",
        "Fetching notifications"
    );

    const response = await fetch(url, {
        method: "GET",
        headers: {
            Authorization: `Bearer ${TOKEN}`,
            "Content-Type": "application/json",
        },
    });

    if (!response.ok) {
        await Log(
            "frontend",
            "error",
            "api",
            "Failed to fetch notifications"
        );

        throw new Error("Failed to fetch notifications");
    }

    return response.json();
}