function checkSpam(str) {
    let doLowStr = str.toLowerCase()
    if (doLowStr.includes("1xbet") || doLowStr.includes("xxx")) {
      return true
    } else {
      return false
    }
  }
