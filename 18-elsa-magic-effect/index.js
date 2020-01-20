// 获取canvs
const canvas = document.getElementById("canvas");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// 创建proton实例
const proton = new Proton();

// 创建主魔法线条
const emitter1 = createEmitter();
// 存活时间2秒
emitter1.totalTime = 2;

// 添加到proton中
proton.addEmitter(emitter1);

//创建canvas renderer
const renderer = new Proton.CanvasRenderer(canvas);
// 添加renderer
proton.addRenderer(renderer);

// 初始化主魔法线的变动函数
let changeEmitter1 = changePosition(emitter1, Math.PI / 3.4);

// 第二条魔法线出现的标志
let flag = true;
// 第三条魔法线出现的标志
let flag2 = true;

// 第二条魔法线
let emitter2 = null;
// 第三条魔法线
let emitter3 = null;
// 第二条魔法线变动函数
let changeEmitter2 = null;
// 第三条魔法线的变动函数
let changeEmitter3 = null;

// let theta = 0;
// let a = 1000;

// 初始化画布绘画循环
function draw() {
  window.requestAnimationFrame(draw);

  // 发动第一条魔法线
  changeEmitter1.moveClockWise();

  // 在第一条魔法线发动的0.35秒后发动第二条
  if (emitter1.emitTime > 0.35 && flag) {
    emitter2 = createEmitter();
    emitter2.totalTime = 0.3;
    changeEmitter2 = changePosition(
      emitter2,
      changeEmitter1.get().theta,
      0,
      emitter1.p.x,
      emitter1.p.y
    );
    proton.addEmitter(emitter2);
    flag = false;
  }

  // 如果第二条魔法线已经初始化完成
  if (emitter2 && changeEmitter2) {
    changeEmitter2.moveStyle1();
  }

  // 在第一条魔法线发动的0.8秒后发动第三条
  if (emitter1.emitTime > 0.8 && flag2) {
    emitter3 = createEmitter();
    emitter3.totalTime = 1.2;
    changeEmitter3 = changePosition(
      emitter3,
      -1.2,
      0,
      emitter1.p.x,
      emitter1.p.y
    );
    proton.addEmitter(emitter3);
    flag2 = false;
  }

  // 如果第三条魔法线已经初始化完成
  if (emitter3 && changeEmitter3) {
    changeEmitter3.moveStyle2();
  }

  // theta += 0.1;
  // a -= 1;

  // emitter.p.x = (a * Math.cos(theta)) / theta + canvas.width / 2;
  // emitter.p.y = (a * Math.sin(theta)) / theta + canvas.height / 2;

  proton.update();
}

draw();

/**
 * 定义魔法线变化函数
 * @param {*} emitter
 * @param {*} theta 角度
 * @param {*} a y轴变化参数
 * @param {*} x 起始x坐标
 * @param {*} y 起始y坐标
 */
function changePosition(emitter, theta = Math.PI / 2, a = 600, x, y) {
  return {
    // 第一条魔法线变化样式
    moveClockWise: () => {
      theta += 0.1;
      theta *= 1.001;
      a -= 4;
      emitter.p.x = (a * Math.cos(theta)) / theta + canvas.width / 2;
      emitter.p.y = (a * Math.sin(theta)) / theta + canvas.height / 2;
    },
    // 第二条魔法线变化样式
    moveStyle1: () => {
      theta -= 0.05;
      a -= 20;
      emitter.p.x = -(a * Math.cos(theta)) / theta + x;
      emitter.p.y = (a * Math.sin(theta)) / theta + y;
    },
    // 第三条魔法线变化样式
    moveStyle2: () => {
      theta -= 0.03;

      a -= 20;
      emitter.p.x = -(a * Math.cos(theta)) / theta + x;
      emitter.p.y = (a * Math.sin(theta)) / theta + y;
    },

    // 获取当前魔法线的角度和y轴变化参数，用于确定后边出现的魔法线的位置
    get: () => {
      return { theta, a };
    }
  };
}

/**
 * 创建emitter
 */
function createEmitter() {
  const emitter = new Proton.Emitter();
  // 每多少秒发射几颗粒子，particle
  emitter.rate = new Proton.Rate(new Proton.Span(2, 8), 0.01);

  // emitter.addInitialize(new Proton.Position(new Proton.CircleZone(0, 0, 1, 1)));
  // 质量
  emitter.addInitialize(new Proton.Mass(1));
  // 半径
  emitter.addInitialize(new Proton.Radius(1, 3));
  // 生命
  emitter.addInitialize(new Proton.Life(2));
  // 速度
  emitter.addInitialize(
    new Proton.Velocity(
      new Proton.Span(-0.2, 0.2),
      new Proton.Span(0, 180),
      "polar"
    )
  );

  // 每个particle的颜色行为
  emitter.addBehaviour(new Proton.Color("#ffffff"));
  // 透明度从1到0 变化
  emitter.addBehaviour(new Proton.Alpha(1, 0));
  // 大小从0.6倍到0.4倍
  emitter.addBehaviour(new Proton.Scale(0.6, 0.4));

  // 起始位置
  emitter.p.x = canvas.width / 2;
  emitter.p.y = canvas.height / 2;

  // 发射
  emitter.emit();
  return emitter;
}
