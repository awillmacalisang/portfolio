"use server"

export async function sendContactForm(prevState: unknown,formData: FormData) {

    formData.append("_wpcf7_unit_tag", "0cb144f");


    try {

        const response = await fetch('http://headless.local/wp-json/contact-form-7/v1/contact-forms/90/feedback', {
            method: 'POST',
            body: formData,
        });

        const data = await response.json();


        console.log("Contact Form Response:", data);
        return data;

    } catch (error) {
        console.error("Error sending contact form:", error);
        return { success: false, message: "There was an error sending your message. Please try again later." };
    }

}