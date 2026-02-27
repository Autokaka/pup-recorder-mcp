# pup-recorder-mcp(1)

## NAME

pup-recorder-mcp - MCP server for pup(1)

## SYNOPSIS

```
pup-mcp-server
```

## DESCRIPTION

Exposes pup(1) as an MCP tool over stdio transport.

## CONFIGURATION

```json
{
  "mcpServers": {
    "pup-recorder": {
      "command": "npx",
      "args": ["--yes", "pup-recorder-mcp"]
    }
  }
}
```

## TOOL

```
name              pup-recorder
source            string   file://, http(s)://, or data: URI (required)
duration          number   seconds, default 5
width             number   default 1920
height            number   default 1080
fps               number   default 30
withAlphaChannel  boolean  default false
outDir            string   default "out"
useInnerProxy     boolean  default false
```

Returns JSON: `{ mp4?, webm?, mov?, cover, width, height, fps, duration }`.

## API

```typescript
import {
  MCP_TOOL_DESC,
  MCP_TOOL_NAME,
  MCP_TOOL_TITLE,
  mcpAddPup,
  PupMCPSchema,
  startMCPServer,
} from "pup-recorder-mcp";
```

## SEE ALSO

pup(1), pup-recorder-opencode(7)

## AUTHOR

qq1909698494@gmail.com
