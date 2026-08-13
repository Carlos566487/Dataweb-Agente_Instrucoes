import { AgentsClient } from "@azure/ai-agents";
import { AzureKeyCredential } from "@azure/core-auth";

const endpoint = "https://test.com";
const apiKey = "dummy-key";

// By passing credentials.apiKeyHeaderName, we might satisfy @azure-rest/core-client getClient!
const client = new AgentsClient(endpoint, new AzureKeyCredential(apiKey) as any, {
  credentials: { apiKeyHeaderName: "api-key" } as any
});

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
