function changeColor(sourceColor, targetColor, selectorsArr, startPosition) {
  const perChange = (window.pageYOffset - startPosition) / 960;
  const currentColor = { red: 0, green: 0, blue: 0 };

  for (let key in currentColor) {
    currentColor[key] =
      sourceColor[key] > targetColor[key]
        ? Math.round(sourceColor[key] - (sourceColor[key] - targetColor[key]) * perChange)
        : Math.round(sourceColor[key] + (targetColor[key] - sourceColor[key]) * perChange);
  }

  for (let i = 0; i < selectorsArr.length; i++) {
    const el = document.querySelector(selectorsArr[i].selector);
    el.style[selectorsArr[i].property] = `rgb(${currentColor.red}, ${currentColor.green}, ${currentColor.blue})`;
  }
}
