const LOG_URL =
  "http://4.224.186.213/evaluation-service/logs";

const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiJtYWhhcmFqYW4wMjIwMDVAZ21haWwuY29tIiwiZXhwIjoxNzgxNjgwOTk4LCJpYXQiOjE3ODE2ODAwOTgsImlzcyI6IkFmZm9yZCBNZWRpY2FsIFRlY2hub2xvZ2llcyBQcml2YXRlIExpbWl0ZWQiLCJqdGkiOiI5MjI2MjlkZC0xMGQ0LTQyN2ItYWM1NC0yZmU5NWU1Y2MzMTciLCJsb2NhbGUiOiJlbi1JTiIsIm5hbWUiOiJtYWhhIHJhamFuIiwic3ViIjoiZTc4ZTE2YWUtNTI4Ny00M2EzLTk1NTYtY2VjNzM3ODdhZDU3In0sImVtYWlsIjoibWFoYXJhamFuMDIyMDA1QGdtYWlsLmNvbSIsIm5hbWUiOiJtYWhhIHJhamFuIiwicm9sbE5vIjoiaDEzMDgiLCJhY2Nlc3NDb2RlIjoianVGcGh2IiwiY2xpZW50SUQiOiJlNzhlMTZhZS01Mjg3LTQzYTMtOTU1Ni1jZWM3Mzc4N2FkNTciLCJjbGllbnRTZWNyZXQiOiJVeEVUY0t5RG5DdlhGTlBRIn0.gKNVR2Mtp0Yt-BGr9WHEti-Natfl4vX8LYSVdkdNesY";

export async function Log(
  stack,
  level,
  packageName,
  message
) {
  try {
    await fetch(LOG_URL, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${TOKEN}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        stack,
        level,
        package: packageName,
        message,
      }),
    });
  } catch (err) {
    console.error("Logging failed", err);
  }
}