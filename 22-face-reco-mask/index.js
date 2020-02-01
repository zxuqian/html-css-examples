async function faceDetection() {
  // 获取加载实例
  const loading = document.querySelector(".loading");
  loading.style.display = "flex";

  // 加载模型
  // 人脸检测模型
  await faceapi.nets.ssdMobilenetv1.loadFromUri("models");
  // 人脸地标模型
  await faceapi.nets.faceLandmark68Net.loadFromUri("models");
  // 人脸识别模型
  // await faceapi.nets.faceRecognitionNet.loadFromUri("models");

  // 获取图片实例
  const input = document.getElementById("image");

  // 开始人脸识别，先识别脸，只返回一个最接近的人脸数据
  // 再识别眼、嘴、鼻的位置，使用68个点坐标模型
  // 最后获取脸部描述
  const detection = await faceapi.detectSingleFace(input).withFaceLandmarks();
  // .withFaceDescriptors();

  // const canvas = document.getElementById("overlay");
  const displaySize = { width: input.width, height: input.height };
  // faceapi.matchDimensions(canvas, displaySize);
  const resizedDetection = faceapi.resizeResults(detection, displaySize);

  // faceapi.draw.drawDetections(canvas, resizedDetection);
  // faceapi.draw.drawFaceLandmarks(canvas, resizedDetection);

  // const ctx = canvas.getContext("2d");

  // 获取口罩实例
  const mask = document.getElementById("mask");
  // 获取识别的脸部
  const { landmarks } = resizedDetection;
  const { imageWidth, positions } = landmarks;
  // 左耳附近
  const { _x: x, _y: y } = positions[1];
  // 获取鼻子上部到下巴的长度
  const height = Math.sqrt(
    Math.pow(positions[1]._x - positions[8]._x, 2) +
      Math.pow(positions[1]._y - positions[8]._y, 2)
  );
  // console.log(height);

  mask.width = imageWidth;
  mask.height = height * 0.9;
  mask.style.transform = `translate(${x + imageWidth * 0.03}px, ${y -
    height * 0.05}px)`;

  loading.style.display = "none";

  mask.style.opacity = 1;

  // positions.forEach((position, index) => {
  //   const { _x, _y } = position;
  //   ctx.fillStyle = "#ffffff";
  //   ctx.font = "300 6px sans-serif";
  //   ctx.fillText(index, _x, _y);
  // });

  console.log(resizedDetection);

  console.log("done");
}

faceDetection();
