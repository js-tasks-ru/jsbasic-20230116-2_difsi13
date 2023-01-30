function getMinMax(str) {
  let nums = str.split(" ").map((str) => Number(str)).filter((str) => isFinite(str))

  return {
    min: Math.min.apply(null, nums),
    max: Math.max.apply(null, nums)
  }
}
