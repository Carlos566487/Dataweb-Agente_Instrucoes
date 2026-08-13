import { AgentsClient } from "@azure/ai-agents";
import { AzureKeyCredential } from "@azure/core-auth";

const endpoint = process.env.AZURE_AI_PROJECT_ENDPOINT || "";
const apiKey = process.env.AZURE_AI_API_KEY || "";

const client = new AgentsClient(endpoint, new AzureKeyCredential(apiKey) as any);

client.pipeline.addPolicy({
  name: "LogRequest",
  sendRequest: (req, next) => {
    console.log("HEADERS:", req.headers.toJSON());
    return next(req);
  }
});

async function run() {
  try {
    await client.threads.create();
  } catch (e) {
    console.error(e.message);
  }
}
run();
