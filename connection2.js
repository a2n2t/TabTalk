// Receiver

const offer // object from localConnection.onicecandidate from connection1

const remoteConnection = new RTCPeerConnection()

remoteConnection.onicecandidate = event => {
  console.log(`New ICE candidate! Reprinting SDP. ${JSON.stringify(remoteConnection.localDescription)}`)
}

remoteConnection.ondatachannel = chnl => {
  remoteConnection.dataChannel = chnl.channel
  remoteConnection.dataChannel.onmessage = msg => {
    console.log('New message from client 1 ' + msg.data)
  }
  remoteConnection.dataChannel.onopen = connection => {
    console.log('Connection opened')
  }
}

remoteConnection.setRemoteDescription(offer).then(_ => console.log('Offer sent!'))

remoteConnection.createAnswer().then(_ => remoteConnection.setLocalDescription(_)).then(_ => console.log('Answer created!'))


// getting answer from receiver
