# webrtc-garbage-collector
Force webrtc garbage collector to avoid hard limit 500 `RTCPeerConnection` on chromium

## Install

```
npm install webrtc-garbage-collector
```

## Usage

```javascript
import {webrtcgarbagecollector} from 'webrtc-garbage-collector'
webrtcgarbagecollector()
```

## Reference

- [https://issues.chromium.org/issues/41378764](https://issues.chromium.org/issues/41378764)
