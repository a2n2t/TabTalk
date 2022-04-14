// Initiator

// step 1
const localConnection = new RTCPeerConnection()
const dataConnection = localConnection.createDataChannel('channel')

dataConnection.onmessage = msg => {
  console.log(`Msg from connection1: ${msg.data}`)
}

dataConnection.onopen = opnconnection => {
  console.log(`Cnection opened: ${opnconnection}`)
}

localConnection.onicecandidate = event => {
  // push candidate objects to DB and try from 1st
  console.log(`New ICE candidate! Reprinting SDP. ${JSON.stringify(localConnection.localDescription)}`)
}

localConnection.createOffer().then(offer => localConnection.setLocalDescription(offer))
.then(_ => console.log('set succesfully'))


// step 3

const answer // object from connection2

localConnection.setRemoteDescription(answer)

// dataConnection.send('hey this my message')

// localConnection.addTrack for audio
