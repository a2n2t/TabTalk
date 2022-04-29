// Receiver

// step 2
const offer // object from localConnection.onicecandidate from connection1

const remoteConnection = new RTCPeerConnection()

remoteConnection.onicecandidate = event => {
  // push candidate objects to DB and try from 1st
  console.log(`New ICE candidate! Reprinting SDP. ${JSON.stringify(remoteConnection.localDescription)}`)
}

remoteConnection.ondatachannel = chnl => {
  // saving datachannel connection
  remoteConnection.dataChannel = chnl.channel

  remoteConnection.dataChannel.onmessage = msg => {
    console.log('New message from client 1 ' + msg.data)
  }
  remoteConnection.dataChannel.onopen = connection => {
    console.log('Connection opened')
  }
}

remoteConnection.setRemoteDescription(offer).then(_ => console.log('Offer sent!'))

remoteConnection.createAnswer().then(answer => remoteConnection.setLocalDescription(answer)).then(_ => console.log('Answer created!'))


// step 4

remoteConnection.dataChannel.send('hello from connection 2')
