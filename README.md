# pup-recorder-mcp(1)

## NAME

pup-recorder-mcp - MCP server that exposes pup(1) over stdio

## SYNOPSIS

```
npx --yes pup-recorder-mcp
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

Returns `{ mp4?, webm?, mov?, cover, width, height, fps, duration }`.

## ENVIRONMENT

```
PUP_LOG_LEVEL        0=error 1=warn 2=info 3=debug, default 2
PUP_USE_INNER_PROXY  1=on, default 0
FFMPEG_BIN           default "ffmpeg"
```

## SEE ALSO

pup-recorder(1), pup(7)

## AUTHOR

qq1909698494@gmail.com
