/*
* @Author: panboren
* @Date: 2024/11/5$
* @LastModifiedBy: Administrator$
* @QQ: 3248874747
*/
import * as uuid from 'uuid'
import dayjs from 'dayjs'
import {keys, keys2} from '~~/components/customize-dialog/config.js'

export const colors = [
  ' linear-gradient(225deg, rgb(255, 60, 172) 0%, rgb(120, 75, 160) 50%, rgb(43, 134, 197) 100%)',
  ' linear-gradient(225deg, rgb(255, 60, 172) 0%, rgb(120, 75, 160) 50%, rgb(43, 134, 197) 100%)',
  ' linear-gradient(90deg, rgb(254, 225, 64) 0%, rgb(250, 112, 154) 100%)',
  ' linear-gradient(90deg, rgb(254, 225, 64) 0%, rgb(250, 112, 154) 100%)',
  ' linear-gradient(90deg, rgb(250, 217, 97) 0%, rgb(247, 107, 28) 100%)',
  ' linear-gradient(90deg, rgb(250, 217, 97) 0%, rgb(247, 107, 28) 100%)',
  ' linear-gradient(19deg, rgb(250, 172, 168) 0%, rgb(221, 214, 243) 100%)',

  ' linear-gradient(19deg, rgb(250, 172, 168) 0%, rgb(221, 214, 243) 100%)',

  ' linear-gradient(90deg, rgb(116, 235, 213) 0%, rgb(159, 172, 230) 100%)',

  ' linear-gradient(90deg, rgb(116, 235, 213) 0%, rgb(159, 172, 230) 100%)',

  ' linear-gradient(rgb(169, 201, 255) 0%, rgb(255, 187, 236) 100%)',

  ' linear-gradient(rgb(169, 201, 255) 0%, rgb(255, 187, 236) 100%)',

  ' linear-gradient(132deg, rgb(244, 208, 63) 0%, rgb(22, 160, 133) 100%)',

  ' linear-gradient(132deg, rgb(244, 208, 63) 0%, rgb(22, 160, 133) 100%)',

  ' linear-gradient(45deg, rgb(251, 218, 97) 0%, rgb(255, 90, 205) 100%)',

  ' linear-gradient(45deg, rgb(251, 218, 97) 0%, rgb(255, 90, 205) 100%)',

  ' linear-gradient(90deg, rgb(255, 154, 139) 0%, rgb(255, 106, 136) 55%, rgb(255, 153, 172) 100%)',
  ' linear-gradient(90deg, rgb(255, 154, 139) 0%, rgb(255, 106, 136) 55%, rgb(255, 153, 172) 100%)',

  ' linear-gradient(45deg, rgb(250, 139, 255) 0%, rgb(43, 210, 255) 52%, rgb(43, 255, 136) 90%)',

  ' linear-gradient(45deg, rgb(250, 139, 255) 0%, rgb(43, 210, 255) 52%, rgb(43, 255, 136) 90%)',

  ' linear-gradient(19deg, rgb(62, 236, 172) 0%, rgb(238, 116, 225) 100%)',

  ' linear-gradient(19deg, rgb(62, 236, 172) 0%, rgb(238, 116, 225) 100%)',

  ' linear-gradient(19deg, rgb(33, 212, 253) 0%, rgb(183, 33, 255) 100%)',

  ' linear-gradient(147deg, rgb(255, 229, 59) 0%, rgb(255, 37, 37) 74%)',
  ' linear-gradient(19deg, rgb(33, 212, 253) 0%, rgb(183, 33, 255) 100%)',


  ' linear-gradient(147deg, rgb(255, 229, 59) 0%, rgb(255, 37, 37) 74%)',

  ' linear-gradient(rgb(82, 172, 255) 25%, rgb(255, 227, 44) 100%)',

  ' linear-gradient(rgb(82, 172, 255) 25%, rgb(255, 227, 44) 100%)',

  ' linear-gradient(0deg, rgb(8, 174, 234) 0%, rgb(42, 245, 152) 100%)',

  ' linear-gradient(0deg, rgb(8, 174, 234) 0%, rgb(42, 245, 152) 100%)',

  ' linear-gradient(0deg, rgb(255, 222, 233) 0%, rgb(181, 255, 252) 100%)',

  ' linear-gradient(0deg, rgb(255, 222, 233) 0%, rgb(181, 255, 252) 100%)',

  ' linear-gradient(135deg, rgb(139, 198, 236) 0%, rgb(149, 153, 226) 100%)',

  ' linear-gradient(135deg, rgb(139, 198, 236) 0%, rgb(149, 153, 226) 100%)',

  ' linear-gradient(45deg, rgb(133, 255, 189) 0%, rgb(255, 251, 125) 100%)',

  ' linear-gradient(45deg, rgb(133, 255, 189) 0%, rgb(255, 251, 125) 100%)',

  ' linear-gradient(62deg, rgb(251, 171, 126) 0%, rgb(247, 206, 104) 100%)',

  ' linear-gradient(62deg, rgb(251, 171, 126) 0%, rgb(247, 206, 104) 100%)',

  ' linear-gradient(90deg, rgb(0, 219, 222) 0%, rgb(252, 0, 255) 100%)',

  ' linear-gradient(90deg, rgb(0, 219, 222) 0%, rgb(252, 0, 255) 100%)',

  ' linear-gradient(rgb(255, 255, 255) 0%, rgb(98, 132, 255) 50%, rgb(255, 0, 0) 100%)',

  ' linear-gradient(rgb(255, 255, 255) 0%, rgb(98, 132, 255) 50%, rgb(255, 0, 0) 100%)',

  ' linear-gradient(0deg, rgb(217, 175, 217) 0%, rgb(151, 217, 225) 100%)',

  ' linear-gradient(0deg, rgb(217, 175, 217) 0%, rgb(151, 217, 225) 100%)',

  ' linear-gradient(62deg, rgb(142, 197, 252) 0%, rgb(224, 195, 252) 100%)',

  ' linear-gradient(62deg, rgb(142, 197, 252) 0%, rgb(224, 195, 252) 100%)',

  ' linear-gradient(160deg, rgb(0, 147, 233) 0%, rgb(128, 208, 199) 100%)',


  ' linear-gradient(160deg, rgb(0, 147, 233) 0%, rgb(128, 208, 199) 100%)',

  ' linear-gradient(43deg, rgb(65, 88, 208) 0%, rgb(200, 80, 192) 46%, rgb(255, 204, 112) 100%)',

  ' linear-gradient(43deg, rgb(65, 88, 208) 0%, rgb(200, 80, 192) 46%, rgb(255, 204, 112) 100%)'

]

export const getId = ()=>{
  let myId = dayjs().format('YYYYMMDDHHmmssSSS')
  let index = Math.floor(Math.random() * 100) // 0-50随机数
  let index2 = Math.floor(Math.random() * 100) // 0-50随机数
  let id = myId + index + index2
  console.log(index)
  return {
    id:id,
    uuid: uuid.v4() + id
  }
}

// 添加单个
export const getItem = (horizontal,templateView)=> {
  let {id,uuid} = getId()
  let index = Math.floor(Math.random() * 51) // 0-50随机数
  let color = colors[index] ?? colors[0]
  let linkName = horizontal ? 'PA' : 'PB'

  return {
    templateView,
    id: id,
    linkName: linkName + id,
    uuid: uuid,
    type: 'panel',
    className: 'panel' + id,
    name: horizontal ? '横屏' : '竖屏',
    horizontal,
    style: {
      backgroundImage: color
    },
    formData: {
      animationKeys: [], // 动画设置
      animationStyle: {}// 滚动动画样式
    },
    level: 2,
    children: []
  }
}
export const  getData = (horizontal = false,templateView)=>{
  let item = getItem(horizontal,templateView)
  let panel = getItem(horizontal,templateView)
  let panel2 = getItem(horizontal,templateView)
  item.pid = 0
  panel.pid = item.id
  panel2.pid = item.id
  panel.parentClassName = item.className
  panel2.parentClassName = item.className
  item.level = 1
  if(horizontal) { // 横向布局
    item.children = [panel,panel2]
  }else{ // 竖向布局
    item.children = [panel]
  }
  return item
}


export let butOption = {
  customizeAnimation:{
    horizontalDisable: true,
    verticalDisable: false
  },
  initHorizontalAnimation:{
    horizontalDisable: false,
    verticalDisable: false
  },
  infinitePanelScrollAnimation:{
    horizontalDisable: true,
    verticalDisable: false
  },
  scalePanelScrollAnimation:{
    horizontalDisable: true,
    verticalDisable: false
  }

}



