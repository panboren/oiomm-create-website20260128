/*
* @Author: panboren
* @Date: 2024/11/18$
* @LastModifiedBy: Administrator$
* @QQ: 3248874747
*/
/*
* @Author: panboren
* @Date: 2024/11/18$
* @LastModifiedBy: Administrator$
* @QQ: 3248874747
*/
export const UseLine = ()=>{

  let vLine = ref([])
  let hLine = ref([])
  // 辅助线回调事件
  let getRefLineParams = (params) => {
    let id = 0
    vLine.value = params.vLine?.map(item => {
      item['id'] = ++id
      return item
    })
    hLine.value = params.hLine?.map(item => {
      item['id'] = ++id
      return item
    })
  }


  return {
    hLine,
    vLine,
    getRefLineParams
  }
}