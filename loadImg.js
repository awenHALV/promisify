/**
 * 加载图片
 * @param {*} src 图片路径
 * @param {*} callback 图片加载完成之后，返回函数
 */
!(w => {
  function loadImg(src, callback) {
    const image = document.createElement('img');
    image.src = src;
    image.style = 'width: 200px;height: 200px';
    image.alt = "默认图片";
    image.onload = () => callback(null, image);
    image.onerror = () => callback(new Error('加载异常'));
    document.body.appendChild(image);
  }
  w.loadImg = loadImg;
})(window);
