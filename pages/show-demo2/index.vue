<template>
  <animation-layer v-if="pageList && pageList.length>0" :pageList="pageList" :disable="false"></animation-layer>
  <empty-template v-else></empty-template>
</template>
<script setup lang="ts">

definePageMeta({
  layout: false
})
import AnimationLayer from '~~/components/animation-layer/animation-layer.vue'


let listData =  {
  'name': '首页',
  'templateView': 'customizeAnimation',
  'projectName': '1',
  'list': [
    {
      'templateView': 'customizeAnimation',
      'id': '20260129100343652813',
      'linkName': 'PB20260129100343652813',
      'uuid': '811692f2-93fd-4321-861e-37011c019b1020260129100343652813',
      'type': 'panel',
      'className': 'panel20260129100343652813',
      'name': '竖屏',
      'horizontal': false,
      'style': {'backgroundImage': ' linear-gradient(132deg, rgb(244, 208, 63) 0%, rgb(22, 160, 133) 100%)'},
      'formData': {
        'animationKeys': ['duration', 'ease', 'xPercent', 'yPercent', 'background', 'rotate', 'scale', 'skew'],
        'animationStyle': {'xPercent': 100}
      },
      'level': 1,
      'children': [{
        'templateView': 'customizeAnimation',
        'id': '202601291003436533236',
        'linkName': 'PB202601291003436533236',
        'uuid': '82ecfe9d-542c-4fda-a684-bd535bcd5cf5202601291003436533236',
        'type': 'panel',
        'className': 'panel202601291003436533236',
        'name': '竖屏',
        'horizontal': false,
        'style': {'backgroundImage': ' linear-gradient(19deg, rgb(62, 236, 172) 0%, rgb(238, 116, 225) 100%)'},
        'formData': {'animationKeys': [], 'animationStyle': {}},
        'level': 2,
        'children': [{
          'type': 'animation',
          'uuid': 'a1b2c3d4-5e6f-7a8b-9c0d-1e2f3a4b5c6d20260129101200000001',
          'level': 3,
          'name': '渐变光环',
          'id': '20260129101200000001',
          'linkName': 'AN20260129101200000001',
          'dialogVisible': false,
          'animationVisible': false,
          'className': 'animation20260129101200000001',
          'animationRef': null,
          'formData': {
            'type': 'img',
            'content': '',
            'imgUrl': '',
            'imgUrlName': '',
            'swiperOptions': {
              'imgList': [{'imgUrl': '', 'animationType': 'Swipe'}],
              'autoplay': true,
              'delay': 2000,
              'infinite': true,
              'controls': true,
              'pagination': true,
              'fluxIndex': true
            },
            'keys': ['w', 'h', 'x', 'y', 'background', 'rotate', 'scaleX', 'scaleY', 'skewX', 'skewY', 'color', 'fontSize', 'fontWeight', 'textShadow', 'borderRadius', 'boxShadow'],
            'style': {'x': 150, 'y': 150, 'w': 180, 'h': 180, 'background': 'radial-gradient(circle, rgba(244, 208, 63, 0.9) 0%, rgba(251, 191, 36, 0.6) 50%, rgba(22, 160, 133, 0.3) 100%)', 'borderRadius': '50%', 'boxShadow': '0 0 40px rgba(244, 208, 63, 0.6)'},
            'runKeys': ['w', 'h', 'x', 'y', 'background', 'rotate', 'scaleX', 'scaleY', 'skewX', 'skewY', 'color', 'fontSize', 'fontWeight', 'textShadow', 'opacity'],
            'runStyle': {},
            'hoverClass': [],
            'hoverKeys': [],
            'hoverStyle': {'duration': 0.5, 'scaleX': 1.25, 'scaleY': 1.25, 'boxShadow': '0 0 60px rgba(244, 208, 63, 0.9)'},
            'animation': [{
              'animationKeys': ['duration', 'w', 'h', 'x', 'y', 'background', 'rotate', 'scaleX', 'scaleY', 'skewX', 'skewY', 'color', 'fontSize', 'fontWeight', 'textShadow', 'repeat', 'delay', 'yoyo', 'toKey', 'ease', 'opacity'],
              'animationStyle': {'duration': 2, 'scaleX': 0, 'scaleY': 0, 'opacity': 0, 'rotate': 180, 'toKey': 'from', 'ease': 'elastic.out(1, 0.5)', 'delay': 0.3}
            }],
            'animationTab': 1,
            'animationType': 'scroll'
          },
          'pid': '202601291003436533236',
          'horizontal': false
        },
        {
          'type': 'animation',
          'uuid': 'b2c3d4e5-6f7a-8b9c-0d1e-2f3a4b5c6d7e20260129101200000002',
          'level': 3,
          'name': '流动波浪',
          'id': '20260129101200000002',
          'linkName': 'AN20260129101200000002',
          'dialogVisible': false,
          'animationVisible': false,
          'className': 'animation20260129101200000002',
          'animationRef': null,
          'formData': {
            'type': 'img',
            'content': '',
            'imgUrl': '',
            'imgUrlName': '',
            'swiperOptions': {
              'imgList': [{'imgUrl': '', 'animationType': 'Swipe'}],
              'autoplay': true,
              'delay': 2000,
              'infinite': true,
              'controls': true,
              'pagination': true,
              'fluxIndex': true
            },
            'keys': ['w', 'h', 'x', 'y', 'background', 'rotate', 'scaleX', 'scaleY', 'skewX', 'skewY', 'color', 'fontSize', 'fontWeight', 'textShadow', 'borderRadius', 'boxShadow'],
            'style': {'x': 450, 'y': 200, 'w': 250, 'h': 150, 'background': 'linear-gradient(90deg, rgba(62, 236, 172, 0.7) 0%, rgba(238, 116, 225, 0.7) 50%, rgba(62, 236, 172, 0.7) 100%)', 'borderRadius': '20px', 'border': '3px solid rgba(62, 236, 172, 0.5)', 'boxShadow': '0 20px 50px rgba(62, 236, 172, 0.4)'},
            'runKeys': ['w', 'h', 'x', 'y', 'background', 'rotate', 'scaleX', 'scaleY', 'skewX', 'skewY', 'color', 'fontSize', 'fontWeight', 'textShadow', 'opacity'],
            'runStyle': {},
            'hoverClass': [],
            'hoverKeys': [],
            'hoverStyle': {'duration': 0.4, 'scaleX': 1.08, 'scaleY': 1.08, 'boxShadow': '0 30px 70px rgba(62, 236, 172, 0.6)'},
            'animation': [{
              'animationKeys': ['duration', 'w', 'h', 'x', 'y', 'background', 'rotate', 'scaleX', 'scaleY', 'skewX', 'skewY', 'color', 'fontSize', 'fontWeight', 'textShadow', 'repeat', 'delay', 'yoyo', 'toKey', 'ease', 'opacity'],
              'animationStyle': {'duration': 1.8, 'x': -150, 'opacity': 0, 'toKey': 'from', 'ease': 'power4.out', 'delay': 0.5}
            }],
            'animationTab': 1,
            'animationType': 'scroll'
          },
          'pid': '202601291003436533236',
          'horizontal': false
        },
        {
          'type': 'animation',
          'uuid': 'c3d4e5f6-7a8b-9c0d-1e2f-3a4b5c6d7e8f20260129101200000003',
          'level': 3,
          'name': '弹性圆形',
          'id': '20260129101200000003',
          'linkName': 'AN20260129101200000003',
          'dialogVisible': false,
          'animationVisible': false,
          'className': 'animation20260129101200000003',
          'animationRef': null,
          'formData': {
            'type': 'img',
            'content': '',
            'imgUrl': '',
            'imgUrlName': '',
            'swiperOptions': {
              'imgList': [{'imgUrl': '', 'animationType': 'Swipe'}],
              'autoplay': true,
              'delay': 2000,
              'infinite': true,
              'controls': true,
              'pagination': true,
              'fluxIndex': true
            },
            'keys': ['w', 'h', 'x', 'y', 'background', 'rotate', 'scaleX', 'scaleY', 'skewX', 'skewY', 'color', 'fontSize', 'fontWeight', 'textShadow', 'borderRadius', 'boxShadow'],
            'style': {'x': 750, 'y': 120, 'w': 140, 'h': 140, 'background': 'radial-gradient(circle at 30% 30%, rgba(238, 116, 225, 0.9) 0%, rgba(217, 70, 239, 0.6) 100%)', 'borderRadius': '50%', 'boxShadow': '0 15px 40px rgba(238, 116, 225, 0.5)'},
            'runKeys': ['w', 'h', 'x', 'y', 'background', 'rotate', 'scaleX', 'scaleY', 'skewX', 'skewY', 'color', 'fontSize', 'fontWeight', 'textShadow', 'opacity'],
            'runStyle': {},
            'hoverClass': [],
            'hoverKeys': [],
            'hoverStyle': {'duration': 0.6, 'scaleX': 1.3, 'scaleY': 1.3, 'boxShadow': '0 25px 60px rgba(238, 116, 225, 0.8)'},
            'animation': [{
              'animationKeys': ['duration', 'w', 'h', 'x', 'y', 'background', 'rotate', 'scaleX', 'scaleY', 'skewX', 'skewY', 'color', 'fontSize', 'fontWeight', 'textShadow', 'repeat', 'delay', 'yoyo', 'toKey', 'ease', 'opacity'],
              'animationStyle': {'duration': 1.5, 'scaleX': 0, 'scaleY': 0, 'opacity': 0, 'toKey': 'from', 'ease': 'back.out(2.5)', 'delay': 0.7}
            }],
            'animationTab': 1,
            'animationType': 'scroll'
          },
          'pid': '202601291003436533236',
          'horizontal': false
        },
        {
          'type': 'animation',
          'uuid': 'd4e5f6a7-8b9c-0d1e-2f3a-4b5c6d7e8f9a20260129101200000004',
          'level': 3,
          'name': '旋转方块',
          'id': '20260129101200000004',
          'linkName': 'AN20260129101200000004',
          'dialogVisible': false,
          'animationVisible': false,
          'className': 'animation20260129101200000004',
          'animationRef': null,
          'formData': {
            'type': 'img',
            'content': '',
            'imgUrl': '',
            'imgUrlName': '',
            'swiperOptions': {
              'imgList': [{'imgUrl': '', 'animationType': 'Swipe'}],
              'autoplay': true,
              'delay': 2000,
              'infinite': true,
              'controls': true,
              'pagination': true,
              'fluxIndex': true
            },
            'keys': ['w', 'h', 'x', 'y', 'background', 'rotate', 'scaleX', 'scaleY', 'skewX', 'skewY', 'color', 'fontSize', 'fontWeight', 'textShadow', 'borderRadius', 'boxShadow'],
            'style': {'x': 150, 'y': 400, 'w': 120, 'h': 120, 'background': 'linear-gradient(135deg, rgba(34, 211, 238, 0.8) 0%, rgba(6, 182, 212, 0.7) 100%)', 'borderRadius': '16px', 'boxShadow': '0 15px 35px rgba(6, 182, 212, 0.5)'},
            'runKeys': ['w', 'h', 'x', 'y', 'background', 'rotate', 'scaleX', 'scaleY', 'skewX', 'skewY', 'color', 'fontSize', 'fontWeight', 'textShadow', 'opacity'],
            'runStyle': {},
            'hoverClass': [],
            'hoverKeys': [],
            'hoverStyle': {'duration': 0.5, 'rotate': 45, 'scaleX': 1.15, 'scaleY': 1.15, 'boxShadow': '0 25px 55px rgba(6, 182, 212, 0.7)'},
            'animation': [{
              'animationKeys': ['duration', 'w', 'h', 'x', 'y', 'background', 'rotate', 'scaleX', 'scaleY', 'skewX', 'skewY', 'color', 'fontSize', 'fontWeight', 'textShadow', 'repeat', 'delay', 'yoyo', 'toKey', 'ease', 'opacity'],
              'animationStyle': {'duration': 1.6, 'rotate': -180, 'scaleX': 0, 'scaleY': 0, 'opacity': 0, 'y': 80, 'toKey': 'from', 'ease': 'power4.out', 'delay': 0.9}
            }],
            'animationTab': 1,
            'animationType': 'scroll'
          },
          'pid': '202601291003436533236',
          'horizontal': false
        },
        {
          'type': 'animation',
          'uuid': 'e5f6a7b8-9c0d-1e2f-3a4b-5c6d7e8f9a0b20260129101200000005',
          'level': 3,
          'name': '光芒四射',
          'id': '20260129101200000005',
          'linkName': 'AN20260129101200000005',
          'dialogVisible': false,
          'animationVisible': false,
          'className': 'animation20260129101200000005',
          'animationRef': null,
          'formData': {
            'type': 'img',
            'content': '',
            'imgUrl': '',
            'imgUrlName': '',
            'swiperOptions': {
              'imgList': [{'imgUrl': '', 'animationType': 'Swipe'}],
              'autoplay': true,
              'delay': 2000,
              'infinite': true,
              'controls': true,
              'pagination': true,
              'fluxIndex': true
            },
            'keys': ['w', 'h', 'x', 'y', 'background', 'rotate', 'scaleX', 'scaleY', 'skewX', 'skewY', 'color', 'fontSize', 'fontWeight', 'textShadow', 'borderRadius', 'boxShadow', 'clipPath'],
            'style': {'x': 500, 'y': 450, 'w': 110, 'h': 110, 'background': 'radial-gradient(circle at center, rgba(255, 255, 255, 1) 0%, rgba(251, 191, 36, 0.9) 50%, rgba(245, 158, 11, 0.7) 100%)', 'borderRadius': '50%', 'clipPath': 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)', 'boxShadow': '0 0 50px rgba(251, 191, 36, 0.8), 0 0 100px rgba(245, 158, 11, 0.5)'},
            'runKeys': ['w', 'h', 'x', 'y', 'background', 'rotate', 'scaleX', 'scaleY', 'skewX', 'skewY', 'color', 'fontSize', 'fontWeight', 'textShadow', 'opacity'],
            'runStyle': {},
            'hoverClass': [],
            'hoverKeys': [],
            'hoverStyle': {'duration': 0.4, 'scaleX': 1.2, 'scaleY': 1.2, 'boxShadow': '0 0 80px rgba(251, 191, 36, 1), 0 0 150px rgba(245, 158, 11, 0.7)'},
            'animation': [{
              'animationKeys': ['duration', 'w', 'h', 'x', 'y', 'background', 'rotate', 'scaleX', 'scaleY', 'skewX', 'skewY', 'color', 'fontSize', 'fontWeight', 'textShadow', 'repeat', 'delay', 'yoyo', 'toKey', 'ease', 'opacity'],
              'animationStyle': {'duration': 2, 'scaleX': 0, 'scaleY': 0, 'opacity': 0, 'rotate': 360, 'toKey': 'from', 'ease': 'elastic.out(1, 0.4)', 'delay': 0.4}
            }],
            'animationTab': 1,
            'animationType': 'scroll'
          },
          'pid': '202601291003436533236',
          'horizontal': false
        }],
        'pid': '20260129100343652813',
        'parentClassName': 'panel20260129100343652813'
      }],
      'pid': 0
    }, {
      'templateView': 'customizeAnimation',
      'id': '202601291003439407274',
      'linkName': 'PB202601291003439407274',
      'uuid': '873c5e45-4130-4cc2-89cb-fea4f50ea3d4202601291003439407274',
      'type': 'panel',
      'className': 'panel202601291003439407274',
      'name': '竖屏',
      'horizontal': false,
      'style': {'backgroundImage': ' linear-gradient(160deg, rgb(0, 147, 233) 0%, rgb(128, 208, 199) 100%)'},
      'formData': {
        'animationKeys': ['duration', 'ease', 'xPercent', 'yPercent', 'background', 'rotate', 'scale', 'skew'],
        'animationStyle': {'xPercent': 100}
      },
      'level': 1,
      'children': [{
        'templateView': 'customizeAnimation',
        'id': '202601291003439411382',
        'linkName': 'PB202601291003439411382',
        'uuid': '578edafb-1ad5-46bc-a1c4-e4e10f2c868c202601291003439411382',
        'type': 'panel',
        'className': 'panel202601291003439411382',
        'name': '竖屏',
        'horizontal': false,
        'style': {'backgroundImage': ' linear-gradient(90deg, rgb(254, 225, 64) 0%, rgb(250, 112, 154) 100%)'},
        'formData': {'animationKeys': [], 'animationStyle': {}},
        'level': 2,
        'children': [{
          'type': 'animation',
          'uuid': '6d4826f3-42f3-4276-8678-1b93b905960a202601291003548068524',
          'level': 3,
          'name': '模块',
          'id': '202601291003548068524',
          'linkName': 'AN202601291003548068524',
          'dialogVisible': false,
          'animationVisible': false,
          'className': 'animation202601291003548068524',
          'animationRef': null,
          'formData': {
            'type': 'img',
            'content': '',
            'imgUrl': '',
            'imgUrlName': '',
            'swiperOptions': {
              'imgList': [{'imgUrl': '', 'animationType': 'Swipe'}],
              'autoplay': true,
              'delay': 2000,
              'infinite': true,
              'controls': true,
              'pagination': true,
              'fluxIndex': true
            },
            'keys': ['w', 'h', 'x', 'y', 'background', 'rotate', 'scaleX', 'scaleY', 'skewX', 'skewY', 'color', 'fontSize', 'fontWeight', 'textShadow'],
            'style': {'x': 601, 'y': 499, 'w': 200, 'h': 200},
            'runKeys': ['w', 'h', 'x', 'y', 'background', 'rotate', 'scaleX', 'scaleY', 'skewX', 'skewY', 'color', 'fontSize', 'fontWeight', 'textShadow'],
            'runStyle': {'x': 601, 'y': 499, 'w': 200, 'h': 200},
            'hoverClass': [],
            'hoverKeys': [],
            'hoverStyle': {},
            'animation': [{
              'animationKeys': ['duration', 'w', 'h', 'x', 'y', 'background', 'rotate', 'scaleX', 'scaleY', 'skewX', 'skewY', 'color', 'fontSize', 'fontWeight', 'textShadow', 'repeat', 'delay', 'yoyo', 'toKey', 'ease'],
              'animationStyle': {'w': 233, 'h': 4454, 'x': 445, 'y': 44, 'rotate': 44}
            }],
            'animationTab': 1,
            'animationType': 'scroll'
          },
          'pid': '202601291003439411382',
          'horizontal': false
        }],
        'pid': '202601291003439407274',
        'parentClassName': 'panel202601291003439407274'
      }],
      'pid': 0
    }, {
      'templateView': 'customizeAnimation',
      'id': '202601291003441486289',
      'linkName': 'PB202601291003441486289',
      'uuid': '54ea574e-a396-4e9a-a767-a69fdcec59b0202601291003441486289',
      'type': 'panel',
      'className': 'panel202601291003441486289',
      'name': '竖屏',
      'horizontal': false,
      'style': {'backgroundImage': ' linear-gradient(90deg, rgb(116, 235, 213) 0%, rgb(159, 172, 230) 100%)'},
      'formData': {
        'animationKeys': ['duration', 'ease', 'xPercent', 'yPercent', 'background', 'rotate', 'scale', 'skew'],
        'animationStyle': {'xPercent': 100}
      },
      'level': 1,
      'children': [{
        'templateView': 'customizeAnimation',
        'id': '20260129100344148352',
        'linkName': 'PB20260129100344148352',
        'uuid': '91e82af2-70c1-409e-871e-a0ceddd3ab3620260129100344148352',
        'type': 'panel',
        'className': 'panel20260129100344148352',
        'name': '竖屏',
        'horizontal': false,
        'style': {'backgroundImage': ' linear-gradient(160deg, rgb(0, 147, 233) 0%, rgb(128, 208, 199) 100%)'},
        'formData': {'animationKeys': [], 'animationStyle': {}},
        'level': 2,
        'children': [{
          'type': 'animation',
          'uuid': 'fd145e64-9fa9-4e54-9d9f-ed6f66457320202601291004118224950',
          'level': 3,
          'name': '模块',
          'id': '202601291004118224950',
          'linkName': 'AN202601291004118224950',
          'dialogVisible': false,
          'animationVisible': false,
          'className': 'animation202601291004118224950',
          'animationRef': null,
          'formData': {
            'type': 'img',
            'content': '',
            'imgUrl': '',
            'imgUrlName': '',
            'swiperOptions': {
              'imgList': [{'imgUrl': '', 'animationType': 'Swipe'}],
              'autoplay': true,
              'delay': 2000,
              'infinite': true,
              'controls': true,
              'pagination': true,
              'fluxIndex': true
            },
            'keys': ['w', 'h', 'x', 'y', 'background', 'rotate', 'scaleX', 'scaleY', 'skewX', 'skewY', 'color', 'fontSize', 'fontWeight', 'textShadow'],
            'style': {'x': 728, 'y': 608, 'w': 200, 'h': 200},
            'runKeys': ['w', 'h', 'x', 'y', 'background', 'rotate', 'scaleX', 'scaleY', 'skewX', 'skewY', 'color', 'fontSize', 'fontWeight', 'textShadow'],
            'runStyle': {'x': 728, 'y': 608, 'w': 200, 'h': 200},
            'hoverClass': [],
            'hoverKeys': [],
            'hoverStyle': {},
            'animation': [{
              'animationKeys': ['duration', 'w', 'h', 'x', 'y', 'background', 'rotate', 'scaleX', 'scaleY', 'skewX', 'skewY', 'color', 'fontSize', 'fontWeight', 'textShadow', 'repeat', 'delay', 'yoyo', 'toKey', 'ease'],
              'animationStyle': {'w': 555, 'skewY': 56}
            }],
            'animationTab': 1,
            'animationType': 'scroll'
          },
          'pid': '20260129100344148352',
          'horizontal': false
        },
        {
          'type': 'animation',
          'uuid': 'a1b2c3d4-5e6f-7a8b-9c0d-1e2f3a4b5c6d20260129101100000001',
          'level': 3,
          'name': '丝滑圆环',
          'id': '20260129101100000001',
          'linkName': 'AN20260129101100000001',
          'dialogVisible': false,
          'animationVisible': false,
          'className': 'animation20260129101100000001',
          'animationRef': null,
          'formData': {
            'type': 'img',
            'content': '',
            'imgUrl': '',
            'imgUrlName': '',
            'swiperOptions': {
              'imgList': [{'imgUrl': '', 'animationType': 'Swipe'}],
              'autoplay': true,
              'delay': 2000,
              'infinite': true,
              'controls': true,
              'pagination': true,
              'fluxIndex': true
            },
            'keys': ['w', 'h', 'x', 'y', 'background', 'rotate', 'scaleX', 'scaleY', 'skewX', 'skewY', 'color', 'fontSize', 'fontWeight', 'textShadow', 'borderRadius'],
            'style': {'x': 200, 'y': 300, 'w': 150, 'h': 150, 'background': 'radial-gradient(circle, rgba(99, 102, 241, 0.8) 0%, rgba(139, 92, 246, 0.6) 100%)', 'borderRadius': '50%'},
            'runKeys': ['w', 'h', 'x', 'y', 'background', 'rotate', 'scaleX', 'scaleY', 'skewX', 'skewY', 'color', 'fontSize', 'fontWeight', 'textShadow', 'opacity'],
            'runStyle': {},
            'hoverClass': [],
            'hoverKeys': [],
            'hoverStyle': {'duration': 0.5, 'scaleX': 1.2, 'scaleY': 1.2, 'boxShadow': '0 0 40px rgba(139, 92, 246, 0.8)'},
            'animation': [{
              'animationKeys': ['duration', 'w', 'h', 'x', 'y', 'background', 'rotate', 'scaleX', 'scaleY', 'skewX', 'skewY', 'color', 'fontSize', 'fontWeight', 'textShadow', 'repeat', 'delay', 'yoyo', 'toKey', 'ease', 'opacity'],
              'animationStyle': {'duration': 2, 'scaleX': 0, 'scaleY': 0, 'opacity': 0, 'rotate': 180, 'toKey': 'from', 'ease': 'elastic.out(1, 0.5)', 'delay': 0.2}
            }],
            'animationTab': 1,
            'animationType': 'scroll'
          },
          'pid': '20260129100344148352',
          'horizontal': false
        },
        {
          'type': 'animation',
          'uuid': 'e5f6a7b8-c9d0-1e2f-3a4b-5c6d7e8f9a0b20260129101100000002',
          'level': 3,
          'name': '流光卡片',
          'id': '20260129101100000002',
          'linkName': 'AN20260129101100000002',
          'dialogVisible': false,
          'animationVisible': false,
          'className': 'animation20260129101100000002',
          'animationRef': null,
          'formData': {
            'type': 'img',
            'content': '',
            'imgUrl': '',
            'imgUrlName': '',
            'swiperOptions': {
              'imgList': [{'imgUrl': '', 'animationType': 'Swipe'}],
              'autoplay': true,
              'delay': 2000,
              'infinite': true,
              'controls': true,
              'pagination': true,
              'fluxIndex': true
            },
            'keys': ['w', 'h', 'x', 'y', 'background', 'rotate', 'scaleX', 'scaleY', 'skewX', 'skewY', 'color', 'fontSize', 'fontWeight', 'textShadow', 'borderRadius', 'boxShadow'],
            'style': {'x': 450, 'y': 200, 'w': 280, 'h': 180, 'background': 'linear-gradient(135deg, rgba(236, 72, 153, 0.3) 0%, rgba(244, 114, 182, 0.3) 100%)', 'borderRadius': '20px', 'border': '2px solid rgba(244, 114, 182, 0.5)'},
            'runKeys': ['w', 'h', 'x', 'y', 'background', 'rotate', 'scaleX', 'scaleY', 'skewX', 'skewY', 'color', 'fontSize', 'fontWeight', 'textShadow', 'opacity'],
            'runStyle': {},
            'hoverClass': [],
            'hoverKeys': [],
            'hoverStyle': {'duration': 0.4, 'scaleX': 1.05, 'scaleY': 1.05, 'boxShadow': '0 25px 50px rgba(236, 72, 153, 0.4)', 'background': 'linear-gradient(135deg, rgba(236, 72, 153, 0.5) 0%, rgba(244, 114, 182, 0.5) 100%)'},
            'animation': [{
              'animationKeys': ['duration', 'w', 'h', 'x', 'y', 'background', 'rotate', 'scaleX', 'scaleY', 'skewX', 'skewY', 'color', 'fontSize', 'fontWeight', 'textShadow', 'repeat', 'delay', 'yoyo', 'toKey', 'ease', 'opacity'],
              'animationStyle': {'duration': 1.8, 'y': 100, 'opacity': 0, 'toKey': 'from', 'ease': 'power4.out', 'delay': 0.4}
            }, {
              'animationKeys': ['duration', 'w', 'h', 'x', 'y', 'background', 'rotate', 'scaleX', 'scaleY', 'skewX', 'skewY', 'color', 'fontSize', 'fontWeight', 'textShadow', 'repeat', 'delay', 'yoyo', 'toKey', 'ease'],
              'animationStyle': {'duration': 0.8, 'scaleX': 1.1, 'scaleY': 1.1, 'toKey': 'to', 'ease': 'back.out(1.7)', 'delay': 0.6}
            }],
            'animationTab': 1,
            'animationType': 'scroll'
          },
          'pid': '20260129100344148352',
          'horizontal': false
        },
        {
          'type': 'animation',
          'uuid': '1c2d3e4f-5a6b-7c8d-9e0f-1a2b3c4d5e6f20260129101100000003',
          'level': 3,
          'name': '悬浮方块',
          'id': '20260129101100000003',
          'linkName': 'AN20260129101100000003',
          'dialogVisible': false,
          'animationVisible': false,
          'className': 'animation20260129101100000003',
          'animationRef': null,
          'formData': {
            'type': 'img',
            'content': '',
            'imgUrl': '',
            'imgUrlName': '',
            'swiperOptions': {
              'imgList': [{'imgUrl': '', 'animationType': 'Swipe'}],
              'autoplay': true,
              'delay': 2000,
              'infinite': true,
              'controls': true,
              'pagination': true,
              'fluxIndex': true
            },
            'keys': ['w', 'h', 'x', 'y', 'background', 'rotate', 'scaleX', 'scaleY', 'skewX', 'skewY', 'color', 'fontSize', 'fontWeight', 'textShadow', 'borderRadius', 'boxShadow'],
            'style': {'x': 700, 'y': 350, 'w': 120, 'h': 120, 'background': 'linear-gradient(45deg, rgba(16, 185, 129, 0.7) 0%, rgba(52, 211, 153, 0.7) 100%)', 'borderRadius': '24px', 'boxShadow': '0 10px 30px rgba(16, 185, 129, 0.3)'},
            'runKeys': ['w', 'h', 'x', 'y', 'background', 'rotate', 'scaleX', 'scaleY', 'skewX', 'skewY', 'color', 'fontSize', 'fontWeight', 'textShadow', 'opacity'],
            'runStyle': {},
            'hoverClass': [],
            'hoverKeys': [],
            'hoverStyle': {'duration': 0.5, 'y': -20, 'boxShadow': '0 30px 60px rgba(16, 185, 129, 0.5)', 'background': 'linear-gradient(45deg, rgba(16, 185, 129, 0.9) 0%, rgba(52, 211, 153, 0.9) 100%)'},
            'animation': [{
              'animationKeys': ['duration', 'w', 'h', 'x', 'y', 'background', 'rotate', 'scaleX', 'scaleY', 'skewX', 'skewY', 'color', 'fontSize', 'fontWeight', 'textShadow', 'repeat', 'delay', 'yoyo', 'toKey', 'ease', 'opacity'],
              'animationStyle': {'duration': 1.5, 'y': 80, 'opacity': 0, 'toKey': 'from', 'ease': 'expo.out', 'delay': 0.6}
            }],
            'animationTab': 1,
            'animationType': 'scroll'
          },
          'pid': '20260129100344148352',
          'horizontal': false
        },
        {
          'type': 'animation',
          'uuid': '6f7a8b9c-0d1e-2f3a-4b5c-6d7e8f9a0b1c20260129101100000004',
          'level': 3,
          'name': '脉冲波纹',
          'id': '20260129101100000004',
          'linkName': 'AN20260129101100000004',
          'dialogVisible': false,
          'animationVisible': false,
          'className': 'animation20260129101100000004',
          'animationRef': null,
          'formData': {
            'type': 'img',
            'content': '',
            'imgUrl': '',
            'imgUrlName': '',
            'swiperOptions': {
              'imgList': [{'imgUrl': '', 'animationType': 'Swipe'}],
              'autoplay': true,
              'delay': 2000,
              'infinite': true,
              'controls': true,
              'pagination': true,
              'fluxIndex': true
            },
            'keys': ['w', 'h', 'x', 'y', 'background', 'rotate', 'scaleX', 'scaleY', 'skewX', 'skewY', 'color', 'fontSize', 'fontWeight', 'textShadow', 'borderRadius', 'boxShadow'],
            'style': {'x': 900, 'y': 550, 'w': 100, 'h': 100, 'background': 'radial-gradient(circle, rgba(251, 146, 60, 0.8) 0%, rgba(245, 158, 11, 0.4) 100%)', 'borderRadius': '50%'},
            'runKeys': ['w', 'h', 'x', 'y', 'background', 'rotate', 'scaleX', 'scaleY', 'skewX', 'skewY', 'color', 'fontSize', 'fontWeight', 'textShadow', 'opacity'],
            'runStyle': {},
            'hoverClass': [],
            'hoverKeys': [],
            'hoverStyle': {'duration': 0.6, 'scaleX': 1.3, 'scaleY': 1.3, 'background': 'radial-gradient(circle, rgba(251, 146, 60, 1) 0%, rgba(245, 158, 11, 0.6) 100%)'},
            'animation': [{
              'animationKeys': ['duration', 'w', 'h', 'x', 'y', 'background', 'rotate', 'scaleX', 'scaleY', 'skewX', 'skewY', 'color', 'fontSize', 'fontWeight', 'textShadow', 'repeat', 'delay', 'yoyo', 'toKey', 'ease', 'opacity'],
              'animationStyle': {'duration': 1.6, 'scaleX': 0, 'scaleY': 0, 'opacity': 0, 'toKey': 'from', 'ease': 'back.out(2)', 'delay': 0.8}
            }],
            'animationTab': 1,
            'animationType': 'scroll'
          },
          'pid': '20260129100344148352',
          'horizontal': false
        }],
        'pid': '202601291003441486289',
        'parentClassName': 'panel202601291003441486289'
      }],
      'pid': 0
    }, {
      'templateView': 'customizeAnimation',
      'id': '202601291003452608676',
      'linkName': 'PB202601291003452608676',
      'uuid': '24931fac-7909-49b7-8027-c5b66f190ed7202601291003452608676',
      'type': 'panel',
      'className': 'panel202601291003452608676',
      'name': '竖屏',
      'horizontal': false,
      'style': {'backgroundImage': ' linear-gradient(147deg, rgb(255, 229, 59) 0%, rgb(255, 37, 37) 74%)'},
      'formData': {
        'animationKeys': ['duration', 'ease', 'xPercent', 'yPercent', 'background', 'rotate', 'scale', 'skew'],
        'animationStyle': {'xPercent': 100}
      },
      'level': 1,
      'children': [{
        'templateView': 'customizeAnimation',
        'id': '202601291003452606214',
        'linkName': 'PB202601291003452606214',
        'uuid': '22a54327-8c5b-4d29-88bd-738028e58a7a202601291003452606214',
        'type': 'panel',
        'className': 'panel202601291003452606214',
        'name': '竖屏',
        'horizontal': false,
        'style': {'backgroundImage': ' linear-gradient(19deg, rgb(33, 212, 253) 0%, rgb(183, 33, 255) 100%)'},
        'formData': {'animationKeys': [], 'animationStyle': {}},
        'level': 2,
        'children': [{
          'type': 'animation',
          'uuid': '2b3c4d5e-6f7a-8b9c-0d1e-2f3a4b5c6d7e20260129101100000005',
          'level': 3,
          'name': '3D旋转立方',
          'id': '20260129101100000005',
          'linkName': 'AN20260129101100000005',
          'dialogVisible': false,
          'animationVisible': false,
          'className': 'animation20260129101100000005',
          'animationRef': null,
          'formData': {
            'type': 'img',
            'content': '',
            'imgUrl': '',
            'imgUrlName': '',
            'swiperOptions': {
              'imgList': [{'imgUrl': '', 'animationType': 'Swipe'}],
              'autoplay': true,
              'delay': 2000,
              'infinite': true,
              'controls': true,
              'pagination': true,
              'fluxIndex': true
            },
            'keys': ['w', 'h', 'x', 'y', 'background', 'rotate', 'scaleX', 'scaleY', 'skewX', 'skewY', 'color', 'fontSize', 'fontWeight', 'textShadow', 'borderRadius', 'boxShadow'],
            'style': {'x': 400, 'y': 250, 'w': 200, 'h': 200, 'background': 'linear-gradient(135deg, rgba(59, 130, 246, 0.6) 0%, rgba(99, 102, 241, 0.6) 100%)', 'borderRadius': '32px', 'boxShadow': '0 20px 60px rgba(59, 130, 246, 0.4)'},
            'runKeys': ['w', 'h', 'x', 'y', 'background', 'rotate', 'scaleX', 'scaleY', 'skewX', 'skewY', 'color', 'fontSize', 'fontWeight', 'textShadow', 'opacity'],
            'runStyle': {},
            'hoverClass': [],
            'hoverKeys': [],
            'hoverStyle': {'duration': 0.6, 'rotate': 45, 'scaleX': 1.1, 'scaleY': 1.1, 'boxShadow': '0 30px 80px rgba(59, 130, 246, 0.6)'},
            'animation': [{
              'animationKeys': ['duration', 'w', 'h', 'x', 'y', 'background', 'rotate', 'scaleX', 'scaleY', 'skewX', 'skewY', 'color', 'fontSize', 'fontWeight', 'textShadow', 'repeat', 'delay', 'yoyo', 'toKey', 'ease', 'opacity'],
              'animationStyle': {'duration': 2.2, 'rotate': -180, 'scaleX': 0, 'scaleY': 0, 'opacity': 0, 'toKey': 'from', 'ease': 'elastic.out(1, 0.4)', 'delay': 0.3}
            }],
            'animationTab': 1,
            'animationType': 'scroll'
          },
          'pid': '202601291003452606214',
          'horizontal': false
        },
        {
          'type': 'animation',
          'uuid': '3d4e5f6a-7b8c-9d0e-1f2a-3b4c5d6e7f8a20260129101100000006',
          'level': 3,
          'name': '弹性文字',
          'id': '20260129101100000006',
          'linkName': 'AN20260129101100000006',
          'dialogVisible': false,
          'animationVisible': false,
          'className': 'animation20260129101100000006',
          'animationRef': null,
          'formData': {
            'type': 'text',
            'content': '精彩动画',
            'imgUrl': '',
            'imgUrlName': '',
            'swiperOptions': {
              'imgList': [{'imgUrl': '', 'animationType': 'Swipe'}],
              'autoplay': true,
              'delay': 2000,
              'infinite': true,
              'controls': true,
              'pagination': true,
              'fluxIndex': true
            },
            'keys': ['w', 'h', 'x', 'y', 'background', 'rotate', 'scaleX', 'scaleY', 'skewX', 'skewY', 'color', 'fontSize', 'fontWeight', 'textShadow', 'borderRadius', 'boxShadow', 'letterSpacing'],
            'style': {'x': 350, 'y': 500, 'w': 300, 'h': 80, 'color': '#ffffff', 'fontSize': 48, 'fontWeight': 900, 'letterSpacing': '8px', 'textShadow': '0 4px 20px rgba(255, 255, 255, 0.5)'},
            'runKeys': ['w', 'h', 'x', 'y', 'background', 'rotate', 'scaleX', 'scaleY', 'skewX', 'skewY', 'color', 'fontSize', 'fontWeight', 'textShadow', 'opacity'],
            'runStyle': {},
            'hoverClass': [],
            'hoverKeys': [],
            'hoverStyle': {'duration': 0.4, 'scaleX': 1.1, 'scaleY': 1.1, 'color': '#fbbf24', 'textShadow': '0 6px 30px rgba(251, 191, 36, 0.8)'},
            'animation': [{
              'animationKeys': ['duration', 'w', 'h', 'x', 'y', 'background', 'rotate', 'scaleX', 'scaleY', 'skewX', 'skewY', 'color', 'fontSize', 'fontWeight', 'textShadow', 'repeat', 'delay', 'yoyo', 'toKey', 'ease', 'opacity'],
              'animationStyle': {'duration': 1.2, 'y': 50, 'opacity': 0, 'scaleX': 0.5, 'scaleY': 0.5, 'toKey': 'from', 'ease': 'back.out(2.5)', 'delay': 0.5}
            }],
            'animationTab': 1,
            'animationType': 'scroll'
          },
          'pid': '202601291003452606214',
          'horizontal': false
        }],
        'pid': '202601291003452608676',
        'parentClassName': 'panel202601291003452608676'
      }],
      'pid': 0
    }, {
      'templateView': 'customizeAnimation',
      'id': '20260129100345492397',
      'linkName': 'PB20260129100345492397',
      'uuid': '073ed98e-0030-42a6-bb1d-aec3681058ee20260129100345492397',
      'type': 'panel',
      'className': 'panel20260129100345492397',
      'name': '竖屏',
      'horizontal': false,
      'style': {'backgroundImage': ' linear-gradient(90deg, rgb(250, 217, 97) 0%, rgb(247, 107, 28) 100%)'},
      'formData': {
        'animationKeys': ['duration', 'ease', 'xPercent', 'yPercent', 'background', 'rotate', 'scale', 'skew'],
        'animationStyle': {'xPercent': 100}
      },
      'level': 1,
      'children': [{
        'templateView': 'customizeAnimation',
        'id': '202601291003454923288',
        'linkName': 'PB202601291003454923288',
        'uuid': 'e57b5206-cc02-46e8-8ace-c73c848bd175202601291003454923288',
        'type': 'panel',
        'className': 'panel202601291003454923288',
        'name': '竖屏',
        'horizontal': false,
        'style': {'backgroundImage': ' linear-gradient(19deg, rgb(33, 212, 253) 0%, rgb(183, 33, 255) 100%)'},
        'formData': {'animationKeys': [], 'animationStyle': {}},
        'level': 2,
        'children': [{
          'type': 'animation',
          'uuid': '4f5a6b7c-8d9e-0f1a-2b3c-4d5e6f7a8b9c20260129101100000007',
          'level': 3,
          'name': '闪耀星星',
          'id': '20260129101100000007',
          'linkName': 'AN20260129101100000007',
          'dialogVisible': false,
          'animationVisible': false,
          'className': 'animation20260129101100000007',
          'animationRef': null,
          'formData': {
            'type': 'img',
            'content': '',
            'imgUrl': '',
            'imgUrlName': '',
            'swiperOptions': {
              'imgList': [{'imgUrl': '', 'animationType': 'Swipe'}],
              'autoplay': true,
              'delay': 2000,
              'infinite': true,
              'controls': true,
              'pagination': true,
              'fluxIndex': true
            },
            'keys': ['w', 'h', 'x', 'y', 'background', 'rotate', 'scaleX', 'scaleY', 'skewX', 'skewY', 'color', 'fontSize', 'fontWeight', 'textShadow', 'borderRadius', 'boxShadow'],
            'style': {'x': 300, 'y': 200, 'w': 80, 'h': 80, 'background': 'radial-gradient(circle, rgba(253, 224, 71, 0.9) 0%, rgba(250, 204, 21, 0.6) 100%)', 'borderRadius': '50%', 'boxShadow': '0 0 40px rgba(253, 224, 71, 0.8)'},
            'runKeys': ['w', 'h', 'x', 'y', 'background', 'rotate', 'scaleX', 'scaleY', 'skewX', 'skewY', 'color', 'fontSize', 'fontWeight', 'textShadow', 'opacity'],
            'runStyle': {},
            'hoverClass': [],
            'hoverKeys': [],
            'hoverStyle': {'duration': 0.3, 'scaleX': 1.5, 'scaleY': 1.5, 'boxShadow': '0 0 60px rgba(253, 224, 71, 1)'},
            'animation': [{
              'animationKeys': ['duration', 'w', 'h', 'x', 'y', 'background', 'rotate', 'scaleX', 'scaleY', 'skewX', 'skewY', 'color', 'fontSize', 'fontWeight', 'textShadow', 'repeat', 'delay', 'yoyo', 'toKey', 'ease', 'opacity'],
              'animationStyle': {'duration': 1.5, 'scaleX': 0, 'scaleY': 0, 'opacity': 0, 'rotate': 360, 'toKey': 'from', 'ease': 'elastic.out(1, 0.6)', 'delay': 0.2}
            }],
            'animationTab': 1,
            'animationType': 'scroll'
          },
          'pid': '202601291003454923288',
          'horizontal': false
        },
        {
          'type': 'animation',
          'uuid': '5a6b7c8d-9e0f-1a2b-3c4d-5e6f7a8b9c0d20260129101100000008',
          'level': 3,
          'name': '彩虹圆环',
          'id': '20260129101100000008',
          'linkName': 'AN20260129101100000008',
          'dialogVisible': false,
          'animationVisible': false,
          'className': 'animation20260129101100000008',
          'animationRef': null,
          'formData': {
            'type': 'img',
            'content': '',
            'imgUrl': '',
            'imgUrlName': '',
            'swiperOptions': {
              'imgList': [{'imgUrl': '', 'animationType': 'Swipe'}],
              'autoplay': true,
              'delay': 2000,
              'infinite': true,
              'controls': true,
              'pagination': true,
              'fluxIndex': true
            },
            'keys': ['w', 'h', 'x', 'y', 'background', 'rotate', 'scaleX', 'scaleY', 'skewX', 'skewY', 'color', 'fontSize', 'fontWeight', 'textShadow', 'borderRadius', 'boxShadow'],
            'style': {'x': 600, 'y': 300, 'w': 180, 'h': 180, 'background': 'conic-gradient(from 0deg, #ef4444, #f97316, #eab308, #22c55e, #3b82f6, #8b5cf6, #ef4444)', 'borderRadius': '50%', 'border': '4px solid rgba(255, 255, 255, 0.3)'},
            'runKeys': ['w', 'h', 'x', 'y', 'background', 'rotate', 'scaleX', 'scaleY', 'skewX', 'skewY', 'color', 'fontSize', 'fontWeight', 'textShadow', 'opacity'],
            'runStyle': {},
            'hoverClass': [],
            'hoverKeys': [],
            'hoverStyle': {'duration': 0.8, 'rotate': 180, 'boxShadow': '0 0 50px rgba(139, 92, 246, 0.8)'},
            'animation': [{
              'animationKeys': ['duration', 'w', 'h', 'x', 'y', 'background', 'rotate', 'scaleX', 'scaleY', 'skewX', 'skewY', 'color', 'fontSize', 'fontWeight', 'textShadow', 'repeat', 'delay', 'yoyo', 'toKey', 'ease', 'opacity'],
              'animationStyle': {'duration': 2, 'scaleX': 0, 'scaleY': 0, 'opacity': 0, 'rotate': -360, 'toKey': 'from', 'ease': 'elastic.out(1, 0.4)', 'delay': 0.4}
            }],
            'animationTab': 1,
            'animationType': 'scroll'
          },
          'pid': '202601291003454923288',
          'horizontal': false
        },
        {
          'type': 'animation',
          'uuid': '6b7c8d9e-0f1a-2b3c-4d5e-6f7a8b9c0d1e20260129101100000009',
          'level': 3,
          'name': '液态圆',
          'id': '20260129101100000009',
          'linkName': 'AN20260129101100000009',
          'dialogVisible': false,
          'animationVisible': false,
          'className': 'animation20260129101100000009',
          'animationRef': null,
          'formData': {
            'type': 'img',
            'content': '',
            'imgUrl': '',
            'imgUrlName': '',
            'swiperOptions': {
              'imgList': [{'imgUrl': '', 'animationType': 'Swipe'}],
              'autoplay': true,
              'delay': 2000,
              'infinite': true,
              'controls': true,
              'pagination': true,
              'fluxIndex': true
            },
            'keys': ['w', 'h', 'x', 'y', 'background', 'rotate', 'scaleX', 'scaleY', 'skewX', 'skewY', 'color', 'fontSize', 'fontWeight', 'textShadow', 'borderRadius', 'boxShadow'],
            'style': {'x': 850, 'y': 450, 'w': 140, 'h': 140, 'background': 'radial-gradient(ellipse at 30% 30%, rgba(167, 139, 250, 0.9) 0%, rgba(139, 92, 246, 0.6) 100%)', 'borderRadius': '60% 40% 70% 30%', 'boxShadow': '0 15px 40px rgba(139, 92, 246, 0.5)'},
            'runKeys': ['w', 'h', 'x', 'y', 'background', 'rotate', 'scaleX', 'scaleY', 'skewX', 'skewY', 'color', 'fontSize', 'fontWeight', 'textShadow', 'opacity'],
            'runStyle': {},
            'hoverClass': [],
            'hoverKeys': [],
            'hoverStyle': {'duration': 0.7, 'borderRadius': '30% 60% 40% 70%', 'scaleX': 1.15, 'scaleY': 1.15},
            'animation': [{
              'animationKeys': ['duration', 'w', 'h', 'x', 'y', 'background', 'rotate', 'scaleX', 'scaleY', 'skewX', 'skewY', 'color', 'fontSize', 'fontWeight', 'textShadow', 'repeat', 'delay', 'yoyo', 'toKey', 'ease', 'opacity'],
              'animationStyle': {'duration': 1.8, 'scaleX': 0, 'scaleY': 0, 'opacity': 0, 'toKey': 'from', 'ease': 'back.out(1.8)', 'delay': 0.6}
            }],
            'animationTab': 1,
            'animationType': 'scroll'
          },
          'pid': '202601291003454923288',
          'horizontal': false
        },
        {
          'type': 'animation',
          'uuid': '7c8d9e0f-1a2b-3c4d-5e6f-7a8b9c0d1e2f20260129101100000010',
          'level': 3,
          'name': '3D翻转卡片',
          'id': '20260129101100000010',
          'linkName': 'AN20260129101100000010',
          'dialogVisible': false,
          'animationVisible': false,
          'className': 'animation20260129101100000010',
          'animationRef': null,
          'formData': {
            'type': 'img',
            'content': '',
            'imgUrl': '',
            'imgUrlName': '',
            'swiperOptions': {
              'imgList': [{'imgUrl': '', 'animationType': 'Swipe'}],
              'autoplay': true,
              'delay': 2000,
              'infinite': true,
              'controls': true,
              'pagination': true,
              'fluxIndex': true
            },
            'keys': ['w', 'h', 'x', 'y', 'background', 'rotate', 'scaleX', 'scaleY', 'skewX', 'skewY', 'color', 'fontSize', 'fontWeight', 'textShadow', 'borderRadius', 'boxShadow', 'perspective'],
            'style': {'x': 250, 'y': 600, 'w': 250, 'h': 180, 'background': 'linear-gradient(135deg, rgba(168, 85, 247, 0.7) 0%, rgba(192, 132, 252, 0.7) 100%)', 'borderRadius': '20px', 'boxShadow': '0 25px 50px rgba(168, 85, 247, 0.4)'},
            'runKeys': ['w', 'h', 'x', 'y', 'background', 'rotate', 'scaleX', 'scaleY', 'skewX', 'skewY', 'color', 'fontSize', 'fontWeight', 'textShadow', 'opacity', 'perspective'],
            'runStyle': {},
            'hoverClass': [],
            'hoverKeys': [],
            'hoverStyle': {'duration': 0.5, 'rotateX': 15, 'rotateY': 15, 'boxShadow': '0 35px 70px rgba(168, 85, 247, 0.6)'},
            'animation': [{
              'animationKeys': ['duration', 'w', 'h', 'x', 'y', 'background', 'rotate', 'scaleX', 'scaleY', 'skewX', 'skewY', 'color', 'fontSize', 'fontWeight', 'textShadow', 'repeat', 'delay', 'yoyo', 'toKey', 'ease', 'opacity', 'rotateX', 'rotateY'],
              'animationStyle': {'duration': 2, 'rotateX': 180, 'rotateY': 180, 'opacity': 0, 'toKey': 'from', 'ease': 'power4.inOut', 'delay': 0.3}
            }],
            'animationTab': 1,
            'animationType': 'scroll'
          },
          'pid': '202601291003454923288',
          'horizontal': false
        },
        {
          'type': 'animation',
          'uuid': '8d9e0f1a-2b3c-4d5e-6f7a-8b9c0d1e2f3a20260129101100000011',
          'level': 3,
          'name': '霓虹光圈',
          'id': '20260129101100000011',
          'linkName': 'AN20260129101100000011',
          'dialogVisible': false,
          'animationVisible': false,
          'className': 'animation20260129101100000011',
          'animationRef': null,
          'formData': {
            'type': 'img',
            'content': '',
            'imgUrl': '',
            'imgUrlName': '',
            'swiperOptions': {
              'imgList': [{'imgUrl': '', 'animationType': 'Swipe'}],
              'autoplay': true,
              'delay': 2000,
              'infinite': true,
              'controls': true,
              'pagination': true,
              'fluxIndex': true
            },
            'keys': ['w', 'h', 'x', 'y', 'background', 'rotate', 'scaleX', 'scaleY', 'skewX', 'skewY', 'color', 'fontSize', 'fontWeight', 'textShadow', 'borderRadius', 'boxShadow'],
            'style': {'x': 500, 'y': 550, 'w': 160, 'h': 160, 'background': 'radial-gradient(circle, rgba(236, 72, 153, 0.9) 0%, rgba(219, 39, 119, 0.4) 100%)', 'borderRadius': '50%', 'border': '3px solid rgba(236, 72, 153, 0.8)', 'boxShadow': '0 0 30px rgba(236, 72, 153, 0.6), inset 0 0 20px rgba(236, 72, 153, 0.3)'},
            'runKeys': ['w', 'h', 'x', 'y', 'background', 'rotate', 'scaleX', 'scaleY', 'skewX', 'skewY', 'color', 'fontSize', 'fontWeight', 'textShadow', 'opacity'],
            'runStyle': {},
            'hoverClass': [],
            'hoverKeys': [],
            'hoverStyle': {'duration': 0.4, 'boxShadow': '0 0 60px rgba(236, 72, 153, 1), 0 0 100px rgba(236, 72, 153, 0.6), inset 0 0 30px rgba(236, 72, 153, 0.5)', 'scaleX': 1.2, 'scaleY': 1.2},
            'animation': [{
              'animationKeys': ['duration', 'w', 'h', 'x', 'y', 'background', 'rotate', 'scaleX', 'scaleY', 'skewX', 'skewY', 'color', 'fontSize', 'fontWeight', 'textShadow', 'repeat', 'delay', 'yoyo', 'toKey', 'ease', 'opacity'],
              'animationStyle': {'duration': 1.6, 'scaleX': 0, 'scaleY': 0, 'opacity': 0, 'rotate': 720, 'toKey': 'from', 'ease': 'elastic.out(1, 0.3)', 'delay': 0.5}
            }],
            'animationTab': 1,
            'animationType': 'scroll'
          },
          'pid': '202601291003454923288',
          'horizontal': false
        },
        {
          'type': 'animation',
          'uuid': '9e0f1a2b-3c4d-5e6f-7a8b-9c0d1e2f3a4b20260129101100000012',
          'level': 3,
          'name': '波浪圆环',
          'id': '20260129101100000012',
          'linkName': 'AN20260129101100000012',
          'dialogVisible': false,
          'animationVisible': false,
          'className': 'animation20260129101100000012',
          'animationRef': null,
          'formData': {
            'type': 'img',
            'content': '',
            'imgUrl': '',
            'imgUrlName': '',
            'swiperOptions': {
              'imgList': [{'imgUrl': '', 'animationType': 'Swipe'}],
              'autoplay': true,
              'delay': 2000,
              'infinite': true,
              'controls': true,
              'pagination': true,
              'fluxIndex': true
            },
            'keys': ['w', 'h', 'x', 'y', 'background', 'rotate', 'scaleX', 'scaleY', 'skewX', 'skewY', 'color', 'fontSize', 'fontWeight', 'textShadow', 'borderRadius', 'boxShadow'],
            'style': {'x': 750, 'y': 600, 'w': 130, 'h': 130, 'background': 'linear-gradient(45deg, rgba(6, 182, 212, 0.8) 0%, rgba(34, 211, 238, 0.6) 100%)', 'borderRadius': '50%', 'boxShadow': '0 0 25px rgba(6, 182, 212, 0.5)'},
            'runKeys': ['w', 'h', 'x', 'y', 'background', 'rotate', 'scaleX', 'scaleY', 'skewX', 'skewY', 'color', 'fontSize', 'fontWeight', 'textShadow', 'opacity'],
            'runStyle': {},
            'hoverClass': [],
            'hoverKeys': [],
            'hoverStyle': {'duration': 0.5, 'scaleX': 1.25, 'scaleY': 1.25, 'boxShadow': '0 0 50px rgba(6, 182, 212, 0.8)'},
            'animation': [{
              'animationKeys': ['duration', 'w', 'h', 'x', 'y', 'background', 'rotate', 'scaleX', 'scaleY', 'skewX', 'skewY', 'color', 'fontSize', 'fontWeight', 'textShadow', 'repeat', 'delay', 'yoyo', 'toKey', 'ease', 'opacity'],
              'animationStyle': {'duration': 1.4, 'scaleX': 0, 'scaleY': 0, 'opacity': 0, 'y': 60, 'toKey': 'from', 'ease': 'sine.inOut', 'delay': 0.7}
            }],
            'animationTab': 1,
            'animationType': 'scroll'
          },
          'pid': '202601291003454923288',
          'horizontal': false
        },
        {
          'type': 'animation',
          'uuid': '0f1a2b3c-4d5e-6f7a-8b9c-0d1e2f3a4b5c20260129101100000013',
          'level': 3,
          'name': '弹性粒子',
          'id': '20260129101100000013',
          'linkName': 'AN20260129101100000013',
          'dialogVisible': false,
          'animationVisible': false,
          'className': 'animation20260129101100000013',
          'animationRef': null,
          'formData': {
            'type': 'img',
            'content': '',
            'imgUrl': '',
            'imgUrlName': '',
            'swiperOptions': {
              'imgList': [{'imgUrl': '', 'animationType': 'Swipe'}],
              'autoplay': true,
              'delay': 2000,
              'infinite': true,
              'controls': true,
              'pagination': true,
              'fluxIndex': true
            },
            'keys': ['w', 'h', 'x', 'y', 'background', 'rotate', 'scaleX', 'scaleY', 'skewX', 'skewY', 'color', 'fontSize', 'fontWeight', 'textShadow', 'borderRadius', 'boxShadow'],
            'style': {'x': 300, 'y': 200, 'w': 90, 'h': 90, 'background': 'radial-gradient(circle, rgba(34, 197, 94, 0.9) 0%, rgba(22, 163, 74, 0.5) 100%)', 'borderRadius': '50%', 'boxShadow': '0 10px 30px rgba(34, 197, 94, 0.5)'},
            'runKeys': ['w', 'h', 'x', 'y', 'background', 'rotate', 'scaleX', 'scaleY', 'skewX', 'skewY', 'color', 'fontSize', 'fontWeight', 'textShadow', 'opacity'],
            'runStyle': {},
            'hoverClass': [],
            'hoverKeys': [],
            'hoverStyle': {'duration': 0.3, 'scaleX': 1.4, 'scaleY': 1.4, 'boxShadow': '0 20px 60px rgba(34, 197, 94, 0.8)'},
            'animation': [{
              'animationKeys': ['duration', 'w', 'h', 'x', 'y', 'background', 'rotate', 'scaleX', 'scaleY', 'skewX', 'skewY', 'color', 'fontSize', 'fontWeight', 'textShadow', 'repeat', 'delay', 'yoyo', 'toKey', 'ease', 'opacity'],
              'animationStyle': {'duration': 1.3, 'scaleX': 0, 'scaleY': 0, 'opacity': 0, 'x': -80, 'y': -50, 'toKey': 'from', 'ease': 'elastic.out(1.2, 0.5)', 'delay': 0.2}
            }],
            'animationTab': 1,
            'animationType': 'scroll'
          },
          'pid': '202601291003454923288',
          'horizontal': false
        },
        {
          'type': 'animation',
          'uuid': '1a2b3c4d-5e6f-7a8b-9c0d-1e2f3a4b5c6d20260129101100000014',
          'level': 3,
          'name': '螺旋方块',
          'id': '20260129101100000014',
          'linkName': 'AN20260129101100000014',
          'dialogVisible': false,
          'animationVisible': false,
          'className': 'animation20260129101100000014',
          'animationRef': null,
          'formData': {
            'type': 'img',
            'content': '',
            'imgUrl': '',
            'imgUrlName': '',
            'swiperOptions': {
              'imgList': [{'imgUrl': '', 'animationType': 'Swipe'}],
              'autoplay': true,
              'delay': 2000,
              'infinite': true,
              'controls': true,
              'pagination': true,
              'fluxIndex': true
            },
            'keys': ['w', 'h', 'x', 'y', 'background', 'rotate', 'scaleX', 'scaleY', 'skewX', 'skewY', 'color', 'fontSize', 'fontWeight', 'textShadow', 'borderRadius', 'boxShadow'],
            'style': {'x': 550, 'y': 150, 'w': 110, 'h': 110, 'background': 'linear-gradient(145deg, rgba(251, 146, 60, 0.8) 0%, rgba(249, 115, 22, 0.6) 100%)', 'borderRadius': '16px', 'boxShadow': '0 15px 35px rgba(251, 146, 60, 0.4)'},
            'runKeys': ['w', 'h', 'x', 'y', 'background', 'rotate', 'scaleX', 'scaleY', 'skewX', 'skewY', 'color', 'fontSize', 'fontWeight', 'textShadow', 'opacity'],
            'runStyle': {},
            'hoverClass': [],
            'hoverKeys': [],
            'hoverStyle': {'duration': 0.5, 'rotate': 360, 'scaleX': 1.2, 'scaleY': 1.2, 'boxShadow': '0 25px 55px rgba(251, 146, 60, 0.6)'},
            'animation': [{
              'animationKeys': ['duration', 'w', 'h', 'x', 'y', 'background', 'rotate', 'scaleX', 'scaleY', 'skewX', 'skewY', 'color', 'fontSize', 'fontWeight', 'textShadow', 'repeat', 'delay', 'yoyo', 'toKey', 'ease', 'opacity'],
              'animationStyle': {'duration': 2, 'rotate': -720, 'scaleX': 0, 'scaleY': 0, 'opacity': 0, 'x': -100, 'y': -80, 'toKey': 'from', 'ease': 'circ.inOut', 'delay': 0.4}
            }],
            'animationTab': 1,
            'animationType': 'scroll'
          },
          'pid': '202601291003454923288',
          'horizontal': false
        },
        {
          'type': 'animation',
          'uuid': '2b3c4d5e-6f7a-8b9c-0d1e-2f3a4b5c6d7e20260129101100000015',
          'level': 3,
          'name': '星光圆环',
          'id': '20260129101100000015',
          'linkName': 'AN20260129101100000015',
          'dialogVisible': false,
          'animationVisible': false,
          'className': 'animation20260129101100000015',
          'animationRef': null,
          'formData': {
            'type': 'img',
            'content': '',
            'imgUrl': '',
            'imgUrlName': '',
            'swiperOptions': {
              'imgList': [{'imgUrl': '', 'animationType': 'Swipe'}],
              'autoplay': true,
              'delay': 2000,
              'infinite': true,
              'controls': true,
              'pagination': true,
              'fluxIndex': true
            },
            'keys': ['w', 'h', 'x', 'y', 'background', 'rotate', 'scaleX', 'scaleY', 'skewX', 'skewY', 'color', 'fontSize', 'fontWeight', 'textShadow', 'borderRadius', 'boxShadow'],
            'style': {'x': 800, 'y': 250, 'w': 145, 'h': 145, 'background': 'radial-gradient(circle, rgba(244, 63, 94, 0.9) 0%, rgba(225, 29, 72, 0.5) 100%)', 'borderRadius': '50%', 'boxShadow': '0 0 35px rgba(244, 63, 94, 0.6), 0 0 60px rgba(244, 63, 94, 0.3)'},
            'runKeys': ['w', 'h', 'x', 'y', 'background', 'rotate', 'scaleX', 'scaleY', 'skewX', 'skewY', 'color', 'fontSize', 'fontWeight', 'textShadow', 'opacity'],
            'runStyle': {},
            'hoverClass': [],
            'hoverKeys': [],
            'hoverStyle': {'duration': 0.6, 'scaleX': 1.3, 'scaleY': 1.3, 'boxShadow': '0 0 70px rgba(244, 63, 94, 1), 0 0 120px rgba(244, 63, 94, 0.5)'},
            'animation': [{
              'animationKeys': ['duration', 'w', 'h', 'x', 'y', 'background', 'rotate', 'scaleX', 'scaleY', 'skewX', 'skewY', 'color', 'fontSize', 'fontWeight', 'textShadow', 'repeat', 'delay', 'yoyo', 'toKey', 'ease', 'opacity'],
              'animationStyle': {'duration': 1.7, 'scaleX': 0, 'scaleY': 0, 'opacity': 0, 'rotate': 540, 'toKey': 'from', 'ease': 'back.out(2.2)', 'delay': 0.6}
            }],
            'animationTab': 1,
            'animationType': 'scroll'
          },
          'pid': '202601291003454923288',
          'horizontal': false
        },
        {
          'type': 'animation',
          'uuid': '3c4d5e6f-7a8b-9c0d-1e2f-3a4b5c6d7e8f20260129101100000016',
          'level': 3,
          'name': '极光三角',
          'id': '20260129101100000016',
          'linkName': 'AN20260129101100000016',
          'dialogVisible': false,
          'animationVisible': false,
          'className': 'animation20260129101100000016',
          'animationRef': null,
          'formData': {
            'type': 'img',
            'content': '',
            'imgUrl': '',
            'imgUrlName': '',
            'swiperOptions': {
              'imgList': [{'imgUrl': '', 'animationType': 'Swipe'}],
              'autoplay': true,
              'delay': 2000,
              'infinite': true,
              'controls': true,
              'pagination': true,
              'fluxIndex': true
            },
            'keys': ['w', 'h', 'x', 'y', 'background', 'rotate', 'scaleX', 'scaleY', 'skewX', 'skewY', 'color', 'fontSize', 'fontWeight', 'textShadow', 'borderRadius', 'boxShadow', 'clipPath'],
            'style': {'x': 650, 'y': 350, 'w': 170, 'h': 170, 'background': 'linear-gradient(135deg, rgba(14, 165, 233, 0.8) 0%, rgba(56, 189, 248, 0.5) 100%)', 'borderRadius': '0', 'boxShadow': '0 20px 50px rgba(14, 165, 233, 0.5)', 'clipPath': 'polygon(50% 0%, 0% 100%, 100% 100%)'},
            'runKeys': ['w', 'h', 'x', 'y', 'background', 'rotate', 'scaleX', 'scaleY', 'skewX', 'skewY', 'color', 'fontSize', 'fontWeight', 'textShadow', 'opacity', 'clipPath'],
            'runStyle': {},
            'hoverClass': [],
            'hoverKeys': [],
            'hoverStyle': {'duration': 0.5, 'rotate': 60, 'scaleX': 1.15, 'scaleY': 1.15, 'boxShadow': '0 30px 70px rgba(14, 165, 233, 0.7)'},
            'animation': [{
              'animationKeys': ['duration', 'w', 'h', 'x', 'y', 'background', 'rotate', 'scaleX', 'scaleY', 'skewX', 'skewY', 'color', 'fontSize', 'fontWeight', 'textShadow', 'repeat', 'delay', 'yoyo', 'toKey', 'ease', 'opacity'],
              'animationStyle': {'duration': 2.2, 'scaleX': 0, 'scaleY': 0, 'opacity': 0, 'rotate': -180, 'y': 80, 'toKey': 'from', 'ease': 'expo.inOut', 'delay': 0.5}
            }],
            'animationTab': 1,
            'animationType': 'scroll'
          },
          'pid': '202601291003454923288',
          'horizontal': false
        }],
        'pid': '20260129100345492397',
        'parentClassName': 'panel20260129100345492397'
      }],
      'pid': 0
    }],

  'id': 14
}



let pageList = ref([])
let list = listData.list ||  []
pageList.value = list
</script>
<style scoped lang="scss">
body {
  overscroll-behavior: none;
  height: 100vh;
}

.content-warp {
  overflow-x: hidden;
}

.container-horizontal {
  overscroll-behavior: none;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-wrap: nowrap;
}

.panel {
  position: relative;
  width: 100vw;
  height: 100vh;
}


</style>
