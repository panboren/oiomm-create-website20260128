/*
* @Author: panboren
* @Date: 2024/11/12$
* @LastModifiedBy: Administrator$
* @QQ: 3248874747
*/

export let options = [
  {
    label: '线性渐变',
    value: 'linear-gradient'
  },
  {
    label: '径向渐变',
    value: 'radial-gradient'
  }
]
export let isTrue = (val)=>{
  if(val || val === 0 || val === '0') {
    return true
  }else{
    return false
  }
}

export let computedStyle = (data)=>{
  try {
    let str = ''
    if(data.list?.length === 1) {
      return data.list[0].color
    }
    data?.list?.forEach((item,index) => {
      let { percentage,color } = item || {}
      if(isTrue(percentage) && color) {
        str += `${item.color} ${parseFloat(item.percentage)}%`
        if(index !== data?.list?.length - 1) {
          str += ','
        }
      }
    })
    if(str) {
      if(data?.linearValue === 'linear-gradient') {
        return `${data?.linearValue}(${data?.sliderValue}deg,${str})`
      }
      return `${data?.linearValue}(${str})`
    }
    return str
  }catch (e) {
    return ''
  }
}

export let  getAngle = (gradientStr)=> {
  // 正则表达式用于匹配 linear-gradient 中的角度值
  const angleRegex = /linear-gradient\s*\(\s*([+-]?\d*\.?\d+)deg\s*,/i
  const match = gradientStr.match(angleRegex)

  if (match) {
    // 返回匹配到的角度值
    return match[1]
  } else {
    // 如果没有匹配到角度值，则返回 null
    return null
  }
}
export let getGradientString = (gradientStr)=>{
  const regex = /rgba\(\s*(\d+),\s*(\d+),\s*(\d+),\s*(\d+(?:\.\d+)?)\s*\)\s*(\d+%)/
  const stopPoints = gradientStr.split(/,(?=\s*rgba\()/).slice(1) // 去掉第一个空字符串元素（由于字符串开头有逗号）

  const result = stopPoints.map(stopPoint => {
    const match = stopPoint.match(regex)
    if (match) {
      const color = `rgba(${match[1]}, ${match[2]}, ${match[3]}, ${match[4]})`
      const percentage = parseFloat(match[5])
      return {
        color: color,
        percentage: percentage
      }
    } else {
      // 如果没有匹配到，则返回null（或者你可以抛出一个错误）
      return null
    }
  }).filter(item => item !== null) // 去掉null值
  return {
    result
  }
}









