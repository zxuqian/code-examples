const container = document.getElementById("container");
// const videos = document.querySelector(".videos");
const peerVideo = document.getElementById("peerVideo");
const myVideo = document.getElementById("myVideo");

const idText = document.getElementById("idText");

const joinBtn = document.getElementById("joinBtn");
const peerIdInput = document.getElementById("peerIdInput");

// const cameraId =
//   "4460208fe26e75b4b6cb2efc69612761dc2e1148500dd35d9472172551c19447";

const cameraId =
  "982947417cf490bae44ffb6a837bddcb813704ee491dd85d9149c45389f5521b";

const peer = new Peer({
  host: "localhost",
  port: "3000",
  path: "/video",
});

peer.on("open", (id) => {
  idText.textContent = "我的 id 是：" + id;
});

navigator.mediaDevices
  .getUserMedia({
    video: {
      deviceId: {
        exact: cameraId,
      },
    },
    audio: true,
  })
  .then((stream) => {
    myVideo.srcObject = stream;
  })
  .catch((error) => {
    console.log(error);
  });

// 应答呼叫
peer.on("call", (call) => {
  navigator.mediaDevices
    .getUserMedia({
      video: {
        deviceId: {
          exact: cameraId,
        },
      },
      audio: true,
    })
    .then((stream) => {
      call.answer(stream);
      call.on("stream", (stream) => {
        peerVideo.srcObject = stream;
      });
      // call.on("close", () => {
      //   console.log(32423423);
      // });
    })
    .catch((error) => {
      console.log(error);
    });
});

// 发起呼叫
joinBtn.addEventListener("click", () => {
  const peerId = peerIdInput.value;
  console.log("正在连接：" + peerId);

  navigator.mediaDevices
    .getUserMedia({
      video: {
        deviceId: {
          exact: cameraId,
        },
      },
      audio: true,
    })
    .then((stream) => {
      const call = peer.call(peerId, stream);
      call.on("stream", (stream) => {
        peerVideo.srcObject = stream;
      });
    });
});
