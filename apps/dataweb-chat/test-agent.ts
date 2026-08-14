import { AgentsClient } from "@azure/ai-agents";
import { DefaultAzureCredential, ClientSecretCredential } from "@azure/identity";

const ENDPOINT      = process.env.AZURE_AI_PROJECT_ENDPOINT;
const TENANT_ID     = process.env.AZURE_TENANT_ID;
const CLIENT_ID     = process.env.AZURE_CLIENT_ID;
const CLIENT_SECRET = process.env.AZURE_CLIENT_SECRET;

async function main() {
  console.log("ENDPOINT:", ENDPOINT);
  console.log("TENANT_ID:", TENANT_ID ? "SET" : "UNSET");
  
  let credential;
  if (TENANT_ID && CLIENT_ID && CLIENT_SECRET) {
    console.log("Using ClientSecretCredential");
    credential = new ClientSecretCredential(TENANT_ID, CLIENT_ID, CLIENT_SECRET);
  } else {
    console.log("Using DefaultAzureCredential");
    credential = new DefaultAzureCredential();
  }
  
  const client = new AgentsClient(ENDPOINT || "", credential);
  
  console.log("client keys:", Object.keys(client));
  if (client.threads) {
    console.log("client.threads exists. keys:", Object.keys(client.threads));
  } else {
    console.log("client.threads is undefined!");
  }
  
  try {
    const thread = await client.threads.create();
    console.log("Thread created:", thread.id);
  } catch (err: any) {
    console.error("Error creating thread:", err.message, err.stack);
  }
}

main().catch(console.error);
