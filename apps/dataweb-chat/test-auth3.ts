import { AgentsClient } from "@azure/ai-agents";

const endpoint = "https://test.com";
const apiKey = "real-api-key";

// Use a dummy TokenCredential to bypass constructor checks
const dummyCredential = {
  getToken: async () => ({ token: "dummy", expiresOnTimestamp: Date.now() + 3600000 })
};

const client = new AgentsClient(endpoint, dummyCredential);

// Inject api-key manually
client.pipeline.addPolicy({
  name: "InjectApiKey",
  sendRequest: (req, next) => {
    req.headers.set("api-key", apiKey);
    req.headers.delete("Authorization"); // Remove the dummy Bearer token
    return next(req);
  }
}, { phase: "Sign" });

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
