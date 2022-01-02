import  TwilioClient from "twilio";

const twilioClient = TwilioClient(process.env.TWILIO_SID, process.env.TWILIO_TOKEN)

const sendSMS = (to: string, body: string) => {
    return twilioClient.messages.create({
        from: process.env.TWILIO_PHONE,
        to,
        body
    })
}

export const sendVerificationSMS = (to: string, key: string) => {
    sendSMS(to, `Your Verification key is ${key}`)
}