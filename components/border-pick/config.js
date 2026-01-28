/*
* @Author: panboren
* @Date: 2024/11/12$
* @LastModifiedBy: Administrator$
* @QQ: 3248874747
*/
export let getBorderStyle = (data = {})=>{
  if(data.borderStyle && data.borderWidth  && data.borderColor) {
    return `${data.borderWidth}px ${data.borderStyle} ${data.borderColor}`
  }
}