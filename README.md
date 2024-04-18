# Usage

## Setup

```bash
npm i
npg i -g http-server
```

## Build component

```bash
cd projects/my-button-wc
ng build my-button-wc --source-map --output-hashing none
```

## Serve component

```bash
cd dist/my-button-wc
http-server -p 8000 --cors
```

## Serve host

```bash
http-server -p 8001
```

## View
[See it running](http://localhost:8001/demo.html)
