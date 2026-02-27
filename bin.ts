// Created by Autokaka (qq1909698494@gmail.com) on 2026/02/26.

import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { pup, RecordSchema } from "pup-recorder";
import z from "zod";
import pkg from "./package.json";

export const PupMCPSchema = z
  .object({ source: z.string().describe("file://, http(s)://, or data: URI") })
  .extend(RecordSchema.shape);

async function main() {
  const server = new McpServer(pkg);
  server.registerTool(
    "pup-recorder",
    {
      title: "Record Webpage",
      description: "Record a webpage to video",
      inputSchema: PupMCPSchema,
    },
    async (args) => {
      try {
        const result = await pup(args.source, args);
        return {
          content: [{ type: "text", text: JSON.stringify(result, null, 2) }],
        };
      } catch (error) {
        return {
          isError: true,
          content: [
            { type: "text", text: JSON.stringify({ error: String(error) }) },
          ],
        };
      }
    },
  );
  await server.connect(new StdioServerTransport());
}

main();
