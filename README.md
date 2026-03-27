# pup-recorder-mcp(1)

## NAME

pup-recorder-mcp - MCP server for pup-recorder

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
source          string   required
width           number   default: 1920
height          number   default: 1080
fps             number   default: 30
duration        number   default: 5
outFile         string   default: output.mp4
withAudio       boolean  default: false
deterministic   boolean  default: false
useInnerProxy   boolean  default: false
```

Returns `{ options, written, jank, outFile, audio? }`.

## ENVIRONMENT

```
PUP_LOG_LEVEL        0-3
PUP_USE_INNER_PROXY  1=on
PUP_DISABLE_GPU      1=on
PUP_DETERMINISTIC    1=on
```

## SEE ALSO

pup-recorder(1), pup(7)

## AUTHOR

qq1909698494@gmail.com
