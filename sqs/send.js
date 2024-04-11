import { SQSClient, SendMessageCommand } from "@aws-sdk/client-sqs";

const sqsClient = new SQSClient({ region: "us-east-1" }); 

export const handler = async (event) => {
    try {
        const msg = "Hello lambda"
        const params = {
            QueueUrl: "https://sqs.us-east-1.amazonaws.com/767398077324/gage-net1500-queue", 
            MessageBody: msg,
        };

        await sqsClient.send(new SendMessageCommand(params));
        console.log("Message sent successfully!" )
        console.log( msg)

        return {
            statusCode: 200,
            body: "Message sent successfully!",
        };
    } catch (error) {
        console.error("Error sending message:", error);
        return {
            statusCode: 500,
            body: "Error sending message to SQS.",
        };
    }
};