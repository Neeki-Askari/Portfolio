export const sendContactForm = async (data: Object) => 
    fetch('/api/contact', {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
    },
}).then((res) => {
    if(!res.ok) throw new Error("Failed to send message");
    return res.json();
}).catch((error) => {
    console.error("Error sending contact form: ", error);
    throw error; // re-throw the error so it can be caught in the calling code
});
