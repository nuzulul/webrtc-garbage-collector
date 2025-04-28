/*
 * based on https://stackoverflow.com/a/66546935
 */
 
export function webrtcgarbagecollector(){
	var i = 1;

	function peer() {
	  var peer = new RTCPeerConnection();
	  setTimeout(() => {
		peer.close();
		peer = null;
	  }, 10);
	  //console.log(i++);
	  i++
	  if (!(i % 20)) {
		// try to invoke GC on each 20ish iteration
		queueMicrotask(() => { 
		  let img = document.createElement("img");
		  img.src = window.URL.createObjectURL(new Blob([new ArrayBuffer(5e+7)])); // 50Mo or less or more depending as you wish to force/invoke GC cycle run
		  img.onerror = function() {
			window.URL.revokeObjectURL(this.src);
			img = null
		  }
		})
	  }
	}

	setInterval(peer, 20);
}