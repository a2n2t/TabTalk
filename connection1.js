// Initiator

/*
//template for specifying a STUN server
const iceConfiguration = { }
iceConfiguration.iceServers = [];
//turn server
iceConfiguration.iceServers.push({
               urls: 'turn:my-turn-server.mycompany.com:19403',
               username: 'optional-username',
               credentials: 'auth-token'
           })
//stun  server
iceConfiguration.iceServers.push({
               urls: 'stun:stun1.l.google.com:19302'
           })
const localConnection = new RTCPeerConnection(iceConfiguration)
*/

const iceConfiguration = { }
iceConfiguration.iceServers = [{urls: 'stun:stun1.l.google.com:19302'}];

// step 1
const localConnection = new RTCPeerConnection(iceConfiguration)
const dataConnection = localConnection.createDataChannel('channel')

// when receiving a message
dataConnection.onmessage = msg => {
  console.log(`Msg: ${msg.data}`)
}

dataConnection.onopen = _ => {
  console.log(`Connection opened`)
}

// reprinting ServiceDescriptionProtocol. Will be called multiple times until done with ICE candidate
localConnection.onicecandidate = event => {
  // push candidate objects to DB and try from 1st
  console.log(`New ICE candidate! Reprinting SDP. ${JSON.stringify(localConnection.localDescription)}`)
}

// setting offer (SDP) as local session description
localConnection.createOffer().then(offer => localConnection.setLocalDescription(offer))
.then(_ => console.log('set succesfully'))


// step 3

const answer // object from connection2

localConnection.setRemoteDescription(answer)

// dataConnection.send('hey this my message')

// localConnection.addTrack for audio
