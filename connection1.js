// Initiator

const localConnection = new RTCPeerConnection()
const dataConnection = localConnection.createDataChannel('channel')

dataConnection.onmessage = msg => {
  console.log(`Msg from connection1: ${msg.data}`)
}

dataConnection.onopen = opnconnection => {
  console.log(`Cnection opened: ${opnconnection}`)
}

localConnection.onicecandidate = event => {
  console.log(`New ICE candidate! Reprinting SDP. ${JSON.stringify(localConnection.localDescription)}`)
}

localConnection.createOffer().then(offer => localConnection.setLocalDescription(offer))
.then(_ => console.log('set succesfully'))
