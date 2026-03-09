# pup-recorder-mcp(1)

## NAME

pup-recorder-mcp - MCP server wrapping pup(1)

## SYNOPSIS

```
npx --yes pup-recorder-mcp
```

## CONFIGURATION

```json
{
  "mcpServers": {
    "pup-recorder": { "command": "npx", "args": ["--yes", "pup-recorder-mcp"] }
  }
}
```

## TOOL

**pup-recorder**

```
source            string   required
width             number   default 1920
height            number   default 1080
fps               number   default 30
duration          number   default 5
outDir            string   default "out"
withAlphaChannel  boolean  default false
withAudio         boolean  default false
useInnerProxy     boolean  default false
```

Returns `{ options, files: { mp4?, webm?, mov?, cover } }`.

## ENVIRONMENT

```
PUP_LOG_LEVEL        0-3, default 2
PUP_USE_INNER_PROXY  1=on
PUP_FFMPEG_PATH      default "ffmpeg"
PUP_DISABLE_GPU      1=on
```

## SEE ALSO

pup-recorder(1), pup(7)

## AUTHOR

qq1909698494@gmail.com
