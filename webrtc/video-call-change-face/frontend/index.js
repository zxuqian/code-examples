const myVideo = document.getElementById("myVideo");
const idText = document.getElementById("idText");
const joinBtn = document.getElementById("joinBtn");
const peerVideo = document.getElementById("peerVideo");

const cameraId =
  "4460208fe26e75b4b6cb2efc69612761dc2e1148500dd35d9472172551c19447";

const mediaConstrains = {
  video: {
    deviceId: {
      exact: cameraId,
    },
  },
  audio: true,
};

navigator.mediaDevices.getUserMedia(mediaConstrains).then((stream) => {
  myVideo.srcObject = stream;
});

const peer = new Peer({
  host: "localhost",
  port: "3000",
  path: "/video",
});

peer.on("open", (id) => {
  idText.textContent = "我的 id 是：" + id;
});

// 发起呼叫
joinBtn.addEventListener("click", () => {
  const peerId = peerIdInput.value;
  console.log("正在连接：" + peerId);

  navigator.mediaDevices.getUserMedia(mediaConstrains).then((stream) => {
    const call = peer.call(peerId, stream);
    call.on("stream", showVideo);
  });
});

function showVideo(stream) {
  myVideo.classList.add("rightTop");
  peerVideo.srcObject = stream;
  peerVideo.style.display = "block";
}

peer.on("call", (call) => {
  navigator.mediaDevices.getUserMedia(mediaConstrains).then((stream) => {
    call.answer(stream);
    call.on("stream", showVideo);
  });
});
