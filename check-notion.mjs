import { Client } from "@notionhq/client";

const NOTION_API_KEY = process.env.NOTION_API_KEY;
const NOTION_DATABASE_ID = process.env.NOTION_DATABASE_ID;
const STATUS_PROPERTY_ID = process.env.NOTION_STATUS_PROPERTY_ID;

if (!NOTION_API_KEY || !NOTION_DATABASE_ID) {
  console.error("Missing NOTION_API_KEY or NOTION_DATABASE_ID environment variables.");
  process.exit(1);
}

const notion = new Client({ auth: NOTION_API_KEY });

try {
  const database = await notion.databases.retrieve({ database_id: NOTION_DATABASE_ID });
  const entries = Object.entries(database.properties ?? {});
  console.log("Properties:");
  for (const [key, value] of entries) {
    console.log(` • ${key} (type: ${value.type}, id: ${value.id})`);
  }
  const statusByName = database.properties?.Status;
  console.log("Status by name:", {
    present: !!statusByName,
    id: statusByName?.id,
    type: statusByName?.type,
  });
  if (STATUS_PROPERTY_ID) {
    const match = entries.find(([, value]) => value.id === STATUS_PROPERTY_ID);
    console.log("Status by configured ID:", {
      present: !!match,
      key: match?.[0],
      type: match?.[1].type,
    });
  }
} catch (error) {
  console.error("Check script failed:", error);
  process.exit(1);
}
