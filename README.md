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
source          string    required   file://, http(s)://, or data: URI
width           number    1920
height          number    1080
fps             number    30
duration        number    5          seconds
outFiles        string[]  ["out/html.mp4", "out/html.webm"]
                                     extension (.mp4/.webm) selects encoder
withAudio       boolean   false      capture and encode audio
deterministic   boolean   false      render by frame rather than recording
useInnerProxy   boolean   false      bilibili inner proxy for resource access
disableGpu      boolean   false      slower, more stable
disableHwCodec  boolean   false      force software x265 over NVENC/VideoToolbox
windowTolerant  boolean   false      fall back to dom-ready if warmup times out
windowTimeout   number    10         window load timeout, seconds
screenshots     number[]  []         second marks to dump frames as PNG
```

Returns `{ options, written, outFiles, blank, jank, screenshots }`.
`blank` is the blank-frame ratio and `jank` the frame-drop score; both are
0 = perfect, 1 = worst. `jank` is always 0 in deterministic mode.

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
