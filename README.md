# webrtc-garbage-collector
Force webrtc garbage collector to avoid hard limit 500 `RTCPeerConnection` on chromium

## Install

```
npm install webrtc-garbage-collector
```

## Usage
NPM:
```javascript
import {webrtcgarbagecollector} from 'webrtc-garbage-collector'
webrtcgarbagecollector()
```
CDN:
```javascript
import {webrtcgarbagecollector} from 'https://cdn.jsdelivr.net/npm/webrtc-garbage-collector@0.0.1/index.min.js'
webrtcgarbagecollector()
```

## Reference

- [https://issues.chromium.org/issues/41378764](https://issues.chromium.org/issues/41378764)
