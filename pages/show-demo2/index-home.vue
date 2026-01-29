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
  'name': '专业网站首页',
  'templateView': 'customizeAnimation',
  'projectName': 'Professional-Website',
  'list': [
    {
      'templateView': 'customizeAnimation',
      'id': '20260129200000000001',
      'linkName': 'PB20260129200000000001',
      'uuid': 'a1b2c3d4-e5f6-7a8b-9c0d-1e2f3a4b5c6d202601292000000001',
      'type': 'panel',
      'className': 'panel20260129200000000001',
      'name': '横屏首页',
      'horizontal': true,
      'style': {'backgroundImage': ' linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)'},
      'formData': {
        'animationKeys': ['duration', 'ease', 'xPercent', 'yPercent', 'background', 'rotate', 'scale', 'skew'],
        'animationStyle': {}
      },
      'level': 1,
      'children': [{
        'templateView': 'customizeAnimation',
        'id': '20260129200000000002',
        'linkName': 'PB20260129200000000002',
        'uuid': 'b2c3d4e5-f6a7-8b9c-0d1e-2f3a4b5c6d7e202601292000000002',
        'type': 'panel',
        'className': 'panel20260129200000000002',
        'name': '主内容区',
        'horizontal': false,
        'style': {'backgroundImage': 'none', 'background': 'transparent'},
        'formData': {'animationKeys': [], 'animationStyle': {}},
        'level': 2,
        'children': [
          {
            'type': 'animation',
            'uuid': 'c1d2e3f4-a5b6-c7d8-e9f0-1a2b3c4d5e6f202601292000000001',
            'level': 3,
            'name': '网站标题',
            'id': '202601292000000001',
            'linkName': 'AN202601292000000001',
            'dialogVisible': false,
            'animationVisible': false,
            'className': 'animation202601292000000001',
            'animationRef': null,
            'formData': {
              'type': 'text',
              'content': '创新科技 引领未来',
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
              'style': {'x': 100, 'y': 80, 'w': 600, 'h': 100, 'color': '#ffffff', 'fontSize': 72, 'fontWeight': 700, 'letterSpacing': '4px', 'textShadow': '0 4px 20px rgba(255, 255, 255, 0.3)'},
              'runKeys': ['w', 'h', 'x', 'y', 'background', 'rotate', 'scaleX', 'scaleY', 'skewX', 'skewY', 'color', 'fontSize', 'fontWeight', 'textShadow', 'opacity'],
              'runStyle': {},
              'hoverClass': [],
              'hoverKeys': [],
              'hoverStyle': {'duration': 0.4, 'scaleX': 1.05, 'scaleY': 1.05, 'color': '#00d4ff', 'textShadow': '0 6px 30px rgba(0, 212, 255, 0.5)'},
              'animation': [{
                'animationKeys': ['duration', 'w', 'h', 'x', 'y', 'background', 'rotate', 'scaleX', 'scaleY', 'skewX', 'skewY', 'color', 'fontSize', 'fontWeight', 'textShadow', 'repeat', 'delay', 'yoyo', 'toKey', 'ease', 'opacity'],
                'animationStyle': {'duration': 1.5, 'x': -100, 'opacity': 0, 'toKey': 'from', 'ease': 'power4.out', 'delay': 0.2}
              }],
              'animationTab': 1,
              'animationType': 'scroll'
            },
            'pid': '20260129200000000002',
            'horizontal': false
          },
          {
            'type': 'animation',
            'uuid': 'd2e3f4a5-b6c7-d8e9-f0a1-2b3c4d5e6f7a202601292000000002',
            'level': 3,
            'name': '副标题',
            'id': '202601292000000002',
            'linkName': 'AN202601292000000002',
            'dialogVisible': false,
            'animationVisible': false,
            'className': 'animation202601292000000002',
            'animationRef': null,
            'formData': {
              'type': 'text',
              'content': '专业的技术解决方案，助力您的业务腾飞',
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
              'style': {'x': 100, 'y': 180, 'w': 800, 'h': 60, 'color': '#a0aec0', 'fontSize': 28, 'fontWeight': 400, 'letterSpacing': '2px', 'textShadow': '0 2px 10px rgba(0, 0, 0, 0.3)'},
              'runKeys': ['w', 'h', 'x', 'y', 'background', 'rotate', 'scaleX', 'scaleY', 'skewX', 'skewY', 'color', 'fontSize', 'fontWeight', 'textShadow', 'opacity'],
              'runStyle': {},
              'hoverClass': [],
              'hoverKeys': [],
              'hoverStyle': {'duration': 0.4, 'scaleX': 1.03, 'scaleY': 1.03, 'color': '#ffffff'},
              'animation': [{
                'animationKeys': ['duration', 'w', 'h', 'x', 'y', 'background', 'rotate', 'scaleX', 'scaleY', 'skewX', 'skewY', 'color', 'fontSize', 'fontWeight', 'textShadow', 'repeat', 'delay', 'yoyo', 'toKey', 'ease', 'opacity'],
                'animationStyle': {'duration': 1.5, 'x': -100, 'opacity': 0, 'toKey': 'from', 'ease': 'power4.out', 'delay': 0.4}
              }],
              'animationTab': 1,
              'animationType': 'scroll'
            },
            'pid': '20260129200000000002',
            'horizontal': false
          },
          {
            'type': 'animation',
            'uuid': 'e3f4a5b6-c7d8-e9f0-a1b2-3c4d5e6f7a8b202601292000000003',
            'level': 3,
            'name': '主按钮1',
            'id': '202601292000000003',
            'linkName': 'AN202601292000000003',
            'dialogVisible': false,
            'animationVisible': false,
            'className': 'animation202601292000000003',
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
              'keys': ['w', 'h', 'x', 'y', 'background', 'rotate', 'scaleX', 'scaleY', 'skewX', 'skewY', 'color', 'fontSize', 'fontWeight', 'textShadow', 'borderRadius', 'boxShadow', 'letterSpacing'],
              'style': {'x': 100, 'y': 280, 'w': 200, 'h': 60, 'background': 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', 'borderRadius': '30px', 'border': '2px solid rgba(255, 255, 255, 0.2)', 'boxShadow': '0 10px 30px rgba(102, 126, 234, 0.4)'},
              'runKeys': ['w', 'h', 'x', 'y', 'background', 'rotate', 'scaleX', 'scaleY', 'skewX', 'skewY', 'color', 'fontSize', 'fontWeight', 'textShadow', 'opacity'],
              'runStyle': {},
              'hoverClass': [],
              'hoverKeys': [],
              'hoverStyle': {'duration': 0.3, 'scaleX': 1.08, 'scaleY': 1.08, 'boxShadow': '0 15px 40px rgba(102, 126, 234, 0.6)'},
              'animation': [{
                'animationKeys': ['duration', 'w', 'h', 'x', 'y', 'background', 'rotate', 'scaleX', 'scaleY', 'skewX', 'skewY', 'color', 'fontSize', 'fontWeight', 'textShadow', 'repeat', 'delay', 'yoyo', 'toKey', 'ease', 'opacity'],
                'animationStyle': {'duration': 1.2, 'y': 30, 'opacity': 0, 'scaleX': 0.9, 'scaleY': 0.9, 'toKey': 'from', 'ease': 'back.out(1.7)', 'delay': 0.6}
              }],
              'animationTab': 1,
              'animationType': 'scroll'
            },
            'pid': '20260129200000000002',
            'horizontal': false
          },
          {
            'type': 'animation',
            'uuid': 'f4a5b6c7-d8e9-f0a1-b2c3-4d5e6f7a8b9c202601292000000004',
            'level': 3,
            'name': '副按钮',
            'id': '202601292000000004',
            'linkName': 'AN202601292000000004',
            'dialogVisible': false,
            'animationVisible': false,
            'className': 'animation202601292000000004',
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
              'keys': ['w', 'h', 'x', 'y', 'background', 'rotate', 'scaleX', 'scaleY', 'skewX', 'skewY', 'color', 'fontSize', 'fontWeight', 'textShadow', 'borderRadius', 'boxShadow', 'letterSpacing'],
              'style': {'x': 330, 'y': 280, 'w': 180, 'h': 60, 'background': 'rgba(255, 255, 255, 0.1)', 'borderRadius': '30px', 'border': '2px solid rgba(255, 255, 255, 0.3)', 'boxShadow': '0 10px 30px rgba(0, 0, 0, 0.2)'},
              'runKeys': ['w', 'h', 'x', 'y', 'background', 'rotate', 'scaleX', 'scaleY', 'skewX', 'skewY', 'color', 'fontSize', 'fontWeight', 'textShadow', 'opacity'],
              'runStyle': {},
              'hoverClass': [],
              'hoverKeys': [],
              'hoverStyle': {'duration': 0.3, 'scaleX': 1.08, 'scaleY': 1.08, 'background': 'rgba(255, 255, 255, 0.2)', 'boxShadow': '0 15px 40px rgba(0, 0, 0, 0.3)'},
              'animation': [{
                'animationKeys': ['duration', 'w', 'h', 'x', 'y', 'background', 'rotate', 'scaleX', 'scaleY', 'skewX', 'skewY', 'color', 'fontSize', 'fontWeight', 'textShadow', 'repeat', 'delay', 'yoyo', 'toKey', 'ease', 'opacity'],
                'animationStyle': {'duration': 1.2, 'y': 30, 'opacity': 0, 'scaleX': 0.9, 'scaleY': 0.9, 'toKey': 'from', 'ease': 'back.out(1.7)', 'delay': 0.7}
              }],
              'animationTab': 1,
              'animationType': 'scroll'
            },
            'pid': '20260129200000000002',
            'horizontal': false
          },
          {
            'type': 'animation',
            'uuid': 'a5b6c7d8-e9f0-a1b2-c3d4-5e6f7a8b9c0d202601292000000005',
            'level': 3,
            'name': '装饰圆环1',
            'id': '202601292000000005',
            'linkName': 'AN202601292000000005',
            'dialogVisible': false,
            'animationVisible': false,
            'className': 'animation202601292000000005',
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
              'style': {'x': 1400, 'y': 150, 'w': 400, 'h': 400, 'background': 'conic-gradient(from 0deg, #667eea, #764ba2, #f093fb, #667eea)', 'borderRadius': '50%', 'opacity': 0.3, 'border': '3px solid rgba(102, 126, 234, 0.3)'},
              'runKeys': ['w', 'h', 'x', 'y', 'background', 'rotate', 'scaleX', 'scaleY', 'skewX', 'skewY', 'color', 'fontSize', 'fontWeight', 'textShadow', 'opacity'],
              'runStyle': {},
              'hoverClass': [],
              'hoverKeys': [],
              'hoverStyle': {'duration': 0.8, 'rotate': 360, 'opacity': 0.5},
              'animation': [{
                'animationKeys': ['duration', 'w', 'h', 'x', 'y', 'background', 'rotate', 'scaleX', 'scaleY', 'skewX', 'skewY', 'color', 'fontSize', 'fontWeight', 'textShadow', 'repeat', 'delay', 'yoyo', 'toKey', 'ease', 'opacity'],
                'animationStyle': {'duration': 2, 'scaleX': 0, 'scaleY': 0, 'opacity': 0, 'rotate': -180, 'toKey': 'from', 'ease': 'elastic.out(1, 0.4)', 'delay': 0.5}
              }],
              'animationTab': 1,
              'animationType': 'scroll'
            },
            'pid': '20260129200000000002',
            'horizontal': false
          },
          {
            'type': 'animation',
            'uuid': 'b6c7d8e9-f0a1-b2c3-d4e5-6f7a8b9c0d1e202601292000000006',
            'level': 3,
            'name': '装饰圆环2',
            'id': '202601292000000006',
            'linkName': 'AN202601292000000006',
            'dialogVisible': false,
            'animationVisible': false,
            'className': 'animation202601292000000006',
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
              'style': {'x': 1500, 'y': 250, 'w': 300, 'h': 300, 'background': 'radial-gradient(circle, rgba(102, 126, 234, 0.4) 0%, rgba(118, 75, 162, 0.2) 100%)', 'borderRadius': '50%', 'border': '2px solid rgba(255, 255, 255, 0.2)'},
              'runKeys': ['w', 'h', 'x', 'y', 'background', 'rotate', 'scaleX', 'scaleY', 'skewX', 'skewY', 'color', 'fontSize', 'fontWeight', 'textShadow', 'opacity'],
              'runStyle': {},
              'hoverClass': [],
              'hoverKeys': [],
              'hoverStyle': {'duration': 0.6, 'scaleX': 1.15, 'scaleY': 1.15, 'border': '2px solid rgba(255, 255, 255, 0.4)'},
              'animation': [{
                'animationKeys': ['duration', 'w', 'h', 'x', 'y', 'background', 'rotate', 'scaleX', 'scaleY', 'skewX', 'skewY', 'color', 'fontSize', 'fontWeight', 'textShadow', 'repeat', 'delay', 'yoyo', 'toKey', 'ease', 'opacity'],
                'animationStyle': {'duration': 1.8, 'scaleX': 0, 'scaleY': 0, 'opacity': 0, 'toKey': 'from', 'ease': 'back.out(2)', 'delay': 0.6}
              }],
              'animationTab': 1,
              'animationType': 'scroll'
            },
            'pid': '20260129200000000002',
            'horizontal': false
          },
          {
            'type': 'animation',
            'uuid': 'c7d8e9f0-a1b2-c3d4-e5f6-7a8b9c0d1e2f202601292000000007',
            'level': 3,
            'name': '特性卡片1',
            'id': '202601292000000007',
            'linkName': 'AN202601292000000007',
            'dialogVisible': false,
            'animationVisible': false,
            'className': 'animation202601292000000007',
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
              'style': {'x': 100, 'y': 450, 'w': 350, 'h': 250, 'background': 'rgba(255, 255, 255, 0.08)', 'borderRadius': '20px', 'border': '1px solid rgba(255, 255, 255, 0.1)', 'boxShadow': '0 20px 50px rgba(0, 0, 0, 0.3)'},
              'runKeys': ['w', 'h', 'x', 'y', 'background', 'rotate', 'scaleX', 'scaleY', 'skewX', 'skewY', 'color', 'fontSize', 'fontWeight', 'textShadow', 'opacity'],
              'runStyle': {},
              'hoverClass': [],
              'hoverKeys': [],
              'hoverStyle': {'duration': 0.4, 'scaleX': 1.05, 'scaleY': 1.05, 'background': 'rgba(255, 255, 255, 0.12)', 'boxShadow': '0 25px 60px rgba(0, 0, 0, 0.4)'},
              'animation': [{
                'animationKeys': ['duration', 'w', 'h', 'x', 'y', 'background', 'rotate', 'scaleX', 'scaleY', 'skewX', 'skewY', 'color', 'fontSize', 'fontWeight', 'textShadow', 'repeat', 'delay', 'yoyo', 'toKey', 'ease', 'opacity'],
                'animationStyle': {'duration': 1.4, 'y': 50, 'opacity': 0, 'toKey': 'from', 'ease': 'power4.out', 'delay': 0.8}
              }],
              'animationTab': 1,
              'animationType': 'scroll'
            },
            'pid': '20260129200000000002',
            'horizontal': false
          },
          {
            'type': 'animation',
            'uuid': 'd8e9f0a1-b2c3-d4e5-f6a7-8b9c0d1e2f3a202601292000000008',
            'level': 3,
            'name': '特性卡片2',
            'id': '202601292000000008',
            'linkName': 'AN202601292000000008',
            'dialogVisible': false,
            'animationVisible': false,
            'className': 'animation202601292000000008',
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
              'style': {'x': 500, 'y': 450, 'w': 350, 'h': 250, 'background': 'rgba(255, 255, 255, 0.08)', 'borderRadius': '20px', 'border': '1px solid rgba(255, 255, 255, 0.1)', 'boxShadow': '0 20px 50px rgba(0, 0, 0, 0.3)'},
              'runKeys': ['w', 'h', 'x', 'y', 'background', 'rotate', 'scaleX', 'scaleY', 'skewX', 'skewY', 'color', 'fontSize', 'fontWeight', 'textShadow', 'opacity'],
              'runStyle': {},
              'hoverClass': [],
              'hoverKeys': [],
              'hoverStyle': {'duration': 0.4, 'scaleX': 1.05, 'scaleY': 1.05, 'background': 'rgba(255, 255, 255, 0.12)', 'boxShadow': '0 25px 60px rgba(0, 0, 0, 0.4)'},
              'animation': [{
                'animationKeys': ['duration', 'w', 'h', 'x', 'y', 'background', 'rotate', 'scaleX', 'scaleY', 'skewX', 'skewY', 'color', 'fontSize', 'fontWeight', 'textShadow', 'repeat', 'delay', 'yoyo', 'toKey', 'ease', 'opacity'],
                'animationStyle': {'duration': 1.4, 'y': 50, 'opacity': 0, 'toKey': 'from', 'ease': 'power4.out', 'delay': 0.9}
              }],
              'animationTab': 1,
              'animationType': 'scroll'
            },
            'pid': '20260129200000000002',
            'horizontal': false
          },
          {
            'type': 'animation',
            'uuid': 'e9f0a1b2-c3d4-e5f6-a7b8-9c0d1e2f3a4b202601292000000009',
            'level': 3,
            'name': '特性卡片3',
            'id': '202601292000000009',
            'linkName': 'AN202601292000000009',
            'dialogVisible': false,
            'animationVisible': false,
            'className': 'animation202601292000000009',
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
              'style': {'x': 900, 'y': 450, 'w': 350, 'h': 250, 'background': 'rgba(255, 255, 255, 0.08)', 'borderRadius': '20px', 'border': '1px solid rgba(255, 255, 255, 0.1)', 'boxShadow': '0 20px 50px rgba(0, 0, 0, 0.3)'},
              'runKeys': ['w', 'h', 'x', 'y', 'background', 'rotate', 'scaleX', 'scaleY', 'skewX', 'skewY', 'color', 'fontSize', 'fontWeight', 'textShadow', 'opacity'],
              'runStyle': {},
              'hoverClass': [],
              'hoverKeys': [],
              'hoverStyle': {'duration': 0.4, 'scaleX': 1.05, 'scaleY': 1.05, 'background': 'rgba(255, 255, 255, 0.12)', 'boxShadow': '0 25px 60px rgba(0, 0, 0, 0.4)'},
              'animation': [{
                'animationKeys': ['duration', 'w', 'h', 'x', 'y', 'background', 'rotate', 'scaleX', 'scaleY', 'skewX', 'skewY', 'color', 'fontSize', 'fontWeight', 'textShadow', 'repeat', 'delay', 'yoyo', 'toKey', 'ease', 'opacity'],
                'animationStyle': {'duration': 1.4, 'y': 50, 'opacity': 0, 'toKey': 'from', 'ease': 'power4.out', 'delay': 1.0}
              }],
              'animationTab': 1,
              'animationType': 'scroll'
            },
            'pid': '20260129200000000002',
            'horizontal': false
          },
          {
            'type': 'animation',
            'uuid': 'f0a1b2c3-d4e5-f6a7-b8c9-0d1e2f3a4b5c202601292000000010',
            'level': 3,
            'name': '底部装饰球',
            'id': '202601292000000010',
            'linkName': 'AN202601292000000010',
            'dialogVisible': false,
            'animationVisible': false,
            'className': 'animation202601292000000010',
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
              'style': {'x': 1600, 'y': 750, 'w': 150, 'h': 150, 'background': 'radial-gradient(circle, rgba(102, 126, 234, 0.5) 0%, rgba(118, 75, 162, 0.2) 100%)', 'borderRadius': '50%', 'boxShadow': '0 20px 60px rgba(102, 126, 234, 0.4)'},
              'runKeys': ['w', 'h', 'x', 'y', 'background', 'rotate', 'scaleX', 'scaleY', 'skewX', 'skewY', 'color', 'fontSize', 'fontWeight', 'textShadow', 'opacity'],
              'runStyle': {},
              'hoverClass': [],
              'hoverKeys': [],
              'hoverStyle': {'duration': 0.5, 'scaleX': 1.2, 'scaleY': 1.2, 'boxShadow': '0 30px 80px rgba(102, 126, 234, 0.6)'},
              'animation': [{
                'animationKeys': ['duration', 'w', 'h', 'x', 'y', 'background', 'rotate', 'scaleX', 'scaleY', 'skewX', 'skewY', 'color', 'fontSize', 'fontWeight', 'textShadow', 'repeat', 'delay', 'yoyo', 'toKey', 'ease', 'opacity'],
                'animationStyle': {'duration': 1.6, 'scaleX': 0, 'scaleY': 0, 'opacity': 0, 'y': -60, 'toKey': 'from', 'ease': 'elastic.out(1, 0.5)', 'delay': 1.2}
              }],
              'animationTab': 1,
              'animationType': 'scroll'
            },
            'pid': '20260129200000000002',
            'horizontal': false
          },
          {
            'type': 'animation',
            'uuid': 'a1b2c3d4-e5f6-7a8b-9c0d-1e2f3a4b5c6d202601292000000011',
            'level': 3,
            'name': '左侧装饰',
            'id': '202601292000000011',
            'linkName': 'AN202601292000000011',
            'dialogVisible': false,
            'animationVisible': false,
            'className': 'animation202601292000000011',
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
              'style': {'x': 50, 'y': 850, 'w': 120, 'h': 120, 'background': 'linear-gradient(45deg, #667eea 0%, #764ba2 100%)', 'borderRadius': '50%', 'opacity': 0.6, 'boxShadow': '0 15px 40px rgba(102, 126, 234, 0.4)'},
              'runKeys': ['w', 'h', 'x', 'y', 'background', 'rotate', 'scaleX', 'scaleY', 'skewX', 'skewY', 'color', 'fontSize', 'fontWeight', 'textShadow', 'opacity'],
              'runStyle': {},
              'hoverClass': [],
              'hoverKeys': [],
              'hoverStyle': {'duration': 0.5, 'scaleX': 1.3, 'scaleY': 1.3, 'opacity': 0.9},
              'animation': [{
                'animationKeys': ['duration', 'w', 'h', 'x', 'y', 'background', 'rotate', 'scaleX', 'scaleY', 'skewX', 'skewY', 'color', 'fontSize', 'fontWeight', 'textShadow', 'repeat', 'delay', 'yoyo', 'toKey', 'ease', 'opacity'],
                'animationStyle': {'duration': 1.5, 'scaleX': 0, 'scaleY': 0, 'opacity': 0, 'x': -50, 'toKey': 'from', 'ease': 'back.out(2)', 'delay': 1.0}
              }],
              'animationTab': 1,
              'animationType': 'scroll'
            },
            'pid': '20260129200000000002',
            'horizontal': false
          },
          {
            'type': 'animation',
            'uuid': 'b2c3d4e5-f6a7-8b9c-0d1e-2f3a4b5c6d7e202601292000000012',
            'level': 3,
            'name': '导航栏',
            'id': '202601292000000012',
            'linkName': 'AN202601292000000012',
            'dialogVisible': false,
            'animationVisible': false,
            'className': 'animation202601292000000012',
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
              'style': {'x': 1200, 'y': 30, 'w': 650, 'h': 60, 'background': 'rgba(255, 255, 255, 0.05)', 'borderRadius': '30px', 'border': '1px solid rgba(255, 255, 255, 0.1)', 'boxShadow': '0 10px 30px rgba(0, 0, 0, 0.2)'},
              'runKeys': ['w', 'h', 'x', 'y', 'background', 'rotate', 'scaleX', 'scaleY', 'skewX', 'skewY', 'color', 'fontSize', 'fontWeight', 'textShadow', 'opacity'],
              'runStyle': {},
              'hoverClass': [],
              'hoverKeys': [],
              'hoverStyle': {'duration': 0.3, 'background': 'rgba(255, 255, 255, 0.08)', 'boxShadow': '0 15px 40px rgba(0, 0, 0, 0.3)'},
              'animation': [{
                'animationKeys': ['duration', 'w', 'h', 'x', 'y', 'background', 'rotate', 'scaleX', 'scaleY', 'skewX', 'skewY', 'color', 'fontSize', 'fontWeight', 'textShadow', 'repeat', 'delay', 'yoyo', 'toKey', 'ease', 'opacity'],
                'animationStyle': {'duration': 1.2, 'x': 100, 'opacity': 0, 'toKey': 'from', 'ease': 'power4.out', 'delay': 0.1}
              }],
              'animationTab': 1,
              'animationType': 'scroll'
            },
            'pid': '20260129200000000002',
            'horizontal': false
          }
        ],
        'pid': '20260129200000000001',
        'parentClassName': 'panel20260129200000000001'
      }],
      'pid': 0
    },
    {
      'templateView': 'customizeAnimation',
      'id': '20260129200000000003',
      'linkName': 'PB20260129200000000003',
      'uuid': 'c3d4e5f6-a7b8-c9d0-e1f2-3a4b5c6d7e8f202601292000000003',
      'type': 'panel',
      'className': 'panel20260129200000000003',
      'name': '产品展示',
      'horizontal': true,
      'style': {'backgroundImage': 'linear-gradient(135deg, #0f3460 0%, #16213e 50%, #1a1a2e 100%)'},
      'formData': {
        'animationKeys': ['duration', 'ease', 'xPercent', 'yPercent', 'background', 'rotate', 'scale', 'skew'],
        'animationStyle': {}
      },
      'level': 1,
      'children': [{
        'templateView': 'customizeAnimation',
        'id': '20260129200000000004',
        'linkName': 'PB20260129200000000004',
        'uuid': 'd4e5f6a7-b8c9-d0e1-f2a3-4b5c6d7e8f9a202601292000000004',
        'type': 'panel',
        'className': 'panel20260129200000000004',
        'name': '产品内容区',
        'horizontal': false,
        'style': {'backgroundImage': 'none', 'background': 'transparent'},
        'formData': {'animationKeys': [], 'animationStyle': {}},
        'level': 2,
        'children': [
          {
            'type': 'animation',
            'uuid': 'e5f6a7b8-c9d0-e1f2-a3b4-5c6d7e8f9a0b202601292000000013',
            'level': 3,
            'name': '产品标题',
            'id': '202601292000000013',
            'linkName': 'AN202601292000000013',
            'dialogVisible': false,
            'animationVisible': false,
            'className': 'animation202601292000000013',
            'animationRef': null,
            'formData': {
              'type': 'text',
              'content': '核心产品',
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
              'style': {'x': 100, 'y': 80, 'w': 400, 'h': 80, 'color': '#ffffff', 'fontSize': 56, 'fontWeight': 700, 'letterSpacing': '3px', 'textShadow': '0 4px 20px rgba(0, 212, 255, 0.3)'},
              'runKeys': ['w', 'h', 'x', 'y', 'background', 'rotate', 'scaleX', 'scaleY', 'skewX', 'skewY', 'color', 'fontSize', 'fontWeight', 'textShadow', 'opacity'],
              'runStyle': {},
              'hoverClass': [],
              'hoverKeys': [],
              'hoverStyle': {'duration': 0.4, 'scaleX': 1.05, 'scaleY': 1.05, 'color': '#00d4ff'},
              'animation': [{
                'animationKeys': ['duration', 'w', 'h', 'x', 'y', 'background', 'rotate', 'scaleX', 'scaleY', 'skewX', 'skewY', 'color', 'fontSize', 'fontWeight', 'textShadow', 'repeat', 'delay', 'yoyo', 'toKey', 'ease', 'opacity'],
                'animationStyle': {'duration': 1.5, 'x': -100, 'opacity': 0, 'toKey': 'from', 'ease': 'power4.out', 'delay': 0.2}
              }],
              'animationTab': 1,
              'animationType': 'scroll'
            },
            'pid': '20260129200000000004',
            'horizontal': false
          },
          {
            'type': 'animation',
            'uuid': 'f6a7b8c9-d0e1-f2a3-b4c5-6d7e8f9a0b1c202601292000000014',
            'level': 3,
            'name': '产品描述',
            'id': '202601292000000014',
            'linkName': 'AN202601292000000014',
            'dialogVisible': false,
            'animationVisible': false,
            'className': 'animation202601292000000014',
            'animationRef': null,
            'formData': {
              'type': 'text',
              'content': '我们提供全方位的技术解决方案',
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
              'style': {'x': 100, 'y': 150, 'w': 600, 'h': 50, 'color': '#a0aec0', 'fontSize': 24, 'fontWeight': 400, 'letterSpacing': '2px'},
              'runKeys': ['w', 'h', 'x', 'y', 'background', 'rotate', 'scaleX', 'scaleY', 'skewX', 'skewY', 'color', 'fontSize', 'fontWeight', 'textShadow', 'opacity'],
              'runStyle': {},
              'hoverClass': [],
              'hoverKeys': [],
              'hoverStyle': {'duration': 0.3, 'scaleX': 1.03, 'scaleY': 1.03, 'color': '#ffffff'},
              'animation': [{
                'animationKeys': ['duration', 'w', 'h', 'x', 'y', 'background', 'rotate', 'scaleX', 'scaleY', 'skewX', 'skewY', 'color', 'fontSize', 'fontWeight', 'textShadow', 'repeat', 'delay', 'yoyo', 'toKey', 'ease', 'opacity'],
                'animationStyle': {'duration': 1.5, 'x': -100, 'opacity': 0, 'toKey': 'from', 'ease': 'power4.out', 'delay': 0.4}
              }],
              'animationTab': 1,
              'animationType': 'scroll'
            },
            'pid': '20260129200000000004',
            'horizontal': false
          },
          {
            'type': 'animation',
            'uuid': 'a7b8c9d0-e1f2-a3b4-c5d6-7e8f9a0b1c2d202601292000000015',
            'level': 3,
            'name': '产品卡片1',
            'id': '202601292000000015',
            'linkName': 'AN202601292000000015',
            'dialogVisible': false,
            'animationVisible': false,
            'className': 'animation202601292000000015',
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
              'style': {'x': 100, 'y': 250, 'w': 400, 'h': 450, 'background': 'linear-gradient(145deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)', 'borderRadius': '24px', 'border': '1px solid rgba(255,255,255,0.15)', 'boxShadow': '0 25px 60px rgba(0,0,0,0.3)'},
              'runKeys': ['w', 'h', 'x', 'y', 'background', 'rotate', 'scaleX', 'scaleY', 'skewX', 'skewY', 'color', 'fontSize', 'fontWeight', 'textShadow', 'opacity'],
              'runStyle': {},
              'hoverClass': [],
              'hoverKeys': [],
              'hoverStyle': {'duration': 0.4, 'scaleX': 1.06, 'scaleY': 1.06, 'background': 'linear-gradient(145deg, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0.08) 100%)', 'boxShadow': '0 35px 80px rgba(0,0,0,0.4)'},
              'animation': [{
                'animationKeys': ['duration', 'w', 'h', 'x', 'y', 'background', 'rotate', 'scaleX', 'scaleY', 'skewX', 'skewY', 'color', 'fontSize', 'fontWeight', 'textShadow', 'repeat', 'delay', 'yoyo', 'toKey', 'ease', 'opacity'],
                'animationStyle': {'duration': 1.4, 'y': 80, 'opacity': 0, 'toKey': 'from', 'ease': 'power4.out', 'delay': 0.6}
              }],
              'animationTab': 1,
              'animationType': 'scroll'
            },
            'pid': '20260129200000000004',
            'horizontal': false
          },
          {
            'type': 'animation',
            'uuid': 'b8c9d0e1-f2a3-b4c5-d6e7-8f9a0b1c2d3e202601292000000016',
            'level': 3,
            'name': '产品卡片2',
            'id': '202601292000000016',
            'linkName': 'AN202601292000000016',
            'dialogVisible': false,
            'animationVisible': false,
            'className': 'animation202601292000000016',
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
              'style': {'x': 550, 'y': 250, 'w': 400, 'h': 450, 'background': 'linear-gradient(145deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)', 'borderRadius': '24px', 'border': '1px solid rgba(255,255,255,0.15)', 'boxShadow': '0 25px 60px rgba(0,0,0,0.3)'},
              'runKeys': ['w', 'h', 'x', 'y', 'background', 'rotate', 'scaleX', 'scaleY', 'skewX', 'skewY', 'color', 'fontSize', 'fontWeight', 'textShadow', 'opacity'],
              'runStyle': {},
              'hoverClass': [],
              'hoverKeys': [],
              'hoverStyle': {'duration': 0.4, 'scaleX': 1.06, 'scaleY': 1.06, 'background': 'linear-gradient(145deg, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0.08) 100%)', 'boxShadow': '0 35px 80px rgba(0,0,0,0.4)'},
              'animation': [{
                'animationKeys': ['duration', 'w', 'h', 'x', 'y', 'background', 'rotate', 'scaleX', 'scaleY', 'skewX', 'skewY', 'color', 'fontSize', 'fontWeight', 'textShadow', 'repeat', 'delay', 'yoyo', 'toKey', 'ease', 'opacity'],
                'animationStyle': {'duration': 1.4, 'y': 80, 'opacity': 0, 'toKey': 'from', 'ease': 'power4.out', 'delay': 0.7}
              }],
              'animationTab': 1,
              'animationType': 'scroll'
            },
            'pid': '20260129200000000004',
            'horizontal': false
          },
          {
            'type': 'animation',
            'uuid': 'c9d0e1f2-a3b4-c5d6-e7f8-9a0b1c2d3e4f202601292000000017',
            'level': 3,
            'name': '产品卡片3',
            'id': '202601292000000017',
            'linkName': 'AN202601292000000017',
            'dialogVisible': false,
            'animationVisible': false,
            'className': 'animation202601292000000017',
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
              'style': {'x': 1000, 'y': 250, 'w': 400, 'h': 450, 'background': 'linear-gradient(145deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)', 'borderRadius': '24px', 'border': '1px solid rgba(255,255,255,0.15)', 'boxShadow': '0 25px 60px rgba(0,0,0,0.3)'},
              'runKeys': ['w', 'h', 'x', 'y', 'background', 'rotate', 'scaleX', 'scaleY', 'skewX', 'skewY', 'color', 'fontSize', 'fontWeight', 'textShadow', 'opacity'],
              'runStyle': {},
              'hoverClass': [],
              'hoverKeys': [],
              'hoverStyle': {'duration': 0.4, 'scaleX': 1.06, 'scaleY': 1.06, 'background': 'linear-gradient(145deg, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0.08) 100%)', 'boxShadow': '0 35px 80px rgba(0,0,0,0.4)'},
              'animation': [{
                'animationKeys': ['duration', 'w', 'h', 'x', 'y', 'background', 'rotate', 'scaleX', 'scaleY', 'skewX', 'skewY', 'color', 'fontSize', 'fontWeight', 'textShadow', 'repeat', 'delay', 'yoyo', 'toKey', 'ease', 'opacity'],
                'animationStyle': {'duration': 1.4, 'y': 80, 'opacity': 0, 'toKey': 'from', 'ease': 'power4.out', 'delay': 0.8}
              }],
              'animationTab': 1,
              'animationType': 'scroll'
            },
            'pid': '20260129200000000004',
            'horizontal': false
          },
          {
            'type': 'animation',
            'uuid': 'd0e1f2a3-b4c5-d6e7-f8f9-a0b1c2d3e4f5202601292000000018',
            'level': 3,
            'name': '右侧装饰圆',
            'id': '202601292000000018',
            'linkName': 'AN202601292000000018',
            'dialogVisible': false,
            'animationVisible': false,
            'className': 'animation202601292000000018',
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
              'style': {'x': 1600, 'y': 400, 'w': 250, 'h': 250, 'background': 'conic-gradient(from 0deg, #00d4ff, #667eea, #f093fb, #00d4ff)', 'borderRadius': '50%', 'opacity': 0.25, 'border': '3px solid rgba(0, 212, 255, 0.3)'},
              'runKeys': ['w', 'h', 'x', 'y', 'background', 'rotate', 'scaleX', 'scaleY', 'skewX', 'skewY', 'color', 'fontSize', 'fontWeight', 'textShadow', 'opacity'],
              'runStyle': {},
              'hoverClass': [],
              'hoverKeys': [],
              'hoverStyle': {'duration': 0.8, 'rotate': 360, 'opacity': 0.4},
              'animation': [{
                'animationKeys': ['duration', 'w', 'h', 'x', 'y', 'background', 'rotate', 'scaleX', 'scaleY', 'skewX', 'skewY', 'color', 'fontSize', 'fontWeight', 'textShadow', 'repeat', 'delay', 'yoyo', 'toKey', 'ease', 'opacity'],
                'animationStyle': {'duration': 2, 'scaleX': 0, 'scaleY': 0, 'opacity': 0, 'rotate': -180, 'toKey': 'from', 'ease': 'elastic.out(1, 0.4)', 'delay': 0.5}
              }],
              'animationTab': 1,
              'animationType': 'scroll'
            },
            'pid': '20260129200000000004',
            'horizontal': false
          },
          {
            'type': 'animation',
            'uuid': 'e1f2a3b4-c5d6-e7f8-a9b0-c1d2e3f4a5b6202601292000000019',
            'level': 3,
            'name': '底部装饰',
            'id': '202601292000000019',
            'linkName': 'AN202601292000000019',
            'dialogVisible': false,
            'animationVisible': false,
            'className': 'animation202601292000000019',
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
              'style': {'x': 80, 'y': 850, 'w': 100, 'h': 100, 'background': 'linear-gradient(45deg, #00d4ff 0%, #667eea 100%)', 'borderRadius': '50%', 'opacity': 0.5, 'boxShadow': '0 15px 40px rgba(0, 212, 255, 0.4)'},
              'runKeys': ['w', 'h', 'x', 'y', 'background', 'rotate', 'scaleX', 'scaleY', 'skewX', 'skewY', 'color', 'fontSize', 'fontWeight', 'textShadow', 'opacity'],
              'runStyle': {},
              'hoverClass': [],
              'hoverKeys': [],
              'hoverStyle': {'duration': 0.5, 'scaleX': 1.25, 'scaleY': 1.25, 'opacity': 0.8},
              'animation': [{
                'animationKeys': ['duration', 'w', 'h', 'x', 'y', 'background', 'rotate', 'scaleX', 'scaleY', 'skewX', 'skewY', 'color', 'fontSize', 'fontWeight', 'textShadow', 'repeat', 'delay', 'yoyo', 'toKey', 'ease', 'opacity'],
                'animationStyle': {'duration': 1.5, 'scaleX': 0, 'scaleY': 0, 'opacity': 0, 'x': -50, 'toKey': 'from', 'ease': 'back.out(2)', 'delay': 1.0}
              }],
              'animationTab': 1,
              'animationType': 'scroll'
            },
            'pid': '20260129200000000004',
            'horizontal': false
          }
        ],
        'pid': '20260129200000000003',
        'parentClassName': 'panel20260129200000000003'
      }],
      'pid': 0
    },
    {
      'templateView': 'customizeAnimation',
      'id': '20260129200000000005',
      'linkName': 'PB20260129200000000005',
      'uuid': 'e2f3a4b5-c6d7-e8f9-a0b1-c2d3e4f5a6b7202601292000000005',
      'type': 'panel',
      'className': 'panel20260129200000000005',
      'name': '服务介绍',
      'horizontal': true,
      'style': {'backgroundImage': 'linear-gradient(135deg, #1a1a2e 0%, #0f3460 50%, #16213e 100%)'},
      'formData': {
        'animationKeys': ['duration', 'ease', 'xPercent', 'yPercent', 'background', 'rotate', 'scale', 'skew'],
        'animationStyle': {}
      },
      'level': 1,
      'children': [{
        'templateView': 'customizeAnimation',
        'id': '20260129200000000006',
        'linkName': 'PB20260129200000000006',
        'uuid': 'f3a4b5c6-d7e8-f9a0-b1c2-d3e4f5a6b7c8202601292000000006',
        'type': 'panel',
        'className': 'panel20260129200000000006',
        'name': '服务内容区',
        'horizontal': false,
        'style': {'backgroundImage': 'none', 'background': 'transparent'},
        'formData': {'animationKeys': [], 'animationStyle': {}},
        'level': 2,
        'children': [
          {
            'type': 'animation',
            'uuid': 'a4b5c6d7-e8f9-a0b1-c2d3-e4f5a6b7c8d9202601292000000020',
            'level': 3,
            'name': '服务标题',
            'id': '202601292000000020',
            'linkName': 'AN202601292000000020',
            'dialogVisible': false,
            'animationVisible': false,
            'className': 'animation202601292000000020',
            'animationRef': null,
            'formData': {
              'type': 'text',
              'content': '专业服务',
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
              'style': {'x': 100, 'y': 80, 'w': 400, 'h': 80, 'color': '#ffffff', 'fontSize': 56, 'fontWeight': 700, 'letterSpacing': '3px', 'textShadow': '0 4px 20px rgba(118, 75, 162, 0.3)'},
              'runKeys': ['w', 'h', 'x', 'y', 'background', 'rotate', 'scaleX', 'scaleY', 'skewX', 'skewY', 'color', 'fontSize', 'fontWeight', 'textShadow', 'opacity'],
              'runStyle': {},
              'hoverClass': [],
              'hoverKeys': [],
              'hoverStyle': {'duration': 0.4, 'scaleX': 1.05, 'scaleY': 1.05, 'color': '#f093fb'},
              'animation': [{
                'animationKeys': ['duration', 'w', 'h', 'x', 'y', 'background', 'rotate', 'scaleX', 'scaleY', 'skewX', 'skewY', 'color', 'fontSize', 'fontWeight', 'textShadow', 'repeat', 'delay', 'yoyo', 'toKey', 'ease', 'opacity'],
                'animationStyle': {'duration': 1.5, 'x': -100, 'opacity': 0, 'toKey': 'from', 'ease': 'power4.out', 'delay': 0.2}
              }],
              'animationTab': 1,
              'animationType': 'scroll'
            },
            'pid': '20260129200000000006',
            'horizontal': false
          },
          {
            'type': 'animation',
            'uuid': 'b5c6d7e8-f9a0-b1c2-d3e4-f5a6b7c8d9e0202601292000000021',
            'level': 3,
            'name': '服务描述',
            'id': '202601292000000021',
            'linkName': 'AN202601292000000021',
            'dialogVisible': false,
            'animationVisible': false,
            'className': 'animation202601292000000021',
            'animationRef': null,
            'formData': {
              'type': 'text',
              'content': '为您提供最优质的专业服务体验',
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
              'style': {'x': 100, 'y': 150, 'w': 600, 'h': 50, 'color': '#a0aec0', 'fontSize': 24, 'fontWeight': 400, 'letterSpacing': '2px'},
              'runKeys': ['w', 'h', 'x', 'y', 'background', 'rotate', 'scaleX', 'scaleY', 'skewX', 'skewY', 'color', 'fontSize', 'fontWeight', 'textShadow', 'opacity'],
              'runStyle': {},
              'hoverClass': [],
              'hoverKeys': [],
              'hoverStyle': {'duration': 0.3, 'scaleX': 1.03, 'scaleY': 1.03, 'color': '#ffffff'},
              'animation': [{
                'animationKeys': ['duration', 'w', 'h', 'x', 'y', 'background', 'rotate', 'scaleX', 'scaleY', 'skewX', 'skewY', 'color', 'fontSize', 'fontWeight', 'textShadow', 'repeat', 'delay', 'yoyo', 'toKey', 'ease', 'opacity'],
                'animationStyle': {'duration': 1.5, 'x': -100, 'opacity': 0, 'toKey': 'from', 'ease': 'power4.out', 'delay': 0.4}
              }],
              'animationTab': 1,
              'animationType': 'scroll'
            },
            'pid': '20260129200000000006',
            'horizontal': false
          },
          {
            'type': 'animation',
            'uuid': 'c6d7e8f9-a0b1-c2d3-e4f5-a6b7c8d9e0f1202601292000000022',
            'level': 3,
            'name': '服务项目1',
            'id': '202601292000000022',
            'linkName': 'AN202601292000000022',
            'dialogVisible': false,
            'animationVisible': false,
            'className': 'animation202601292000000022',
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
              'style': {'x': 100, 'y': 250, 'w': 270, 'h': 320, 'background': 'linear-gradient(145deg, rgba(118, 75, 162, 0.2) 0%, rgba(240, 147, 251, 0.1) 100%)', 'borderRadius': '20px', 'border': '1px solid rgba(240, 147, 251, 0.2)', 'boxShadow': '0 20px 50px rgba(0,0,0,0.3)'},
              'runKeys': ['w', 'h', 'x', 'y', 'background', 'rotate', 'scaleX', 'scaleY', 'skewX', 'skewY', 'color', 'fontSize', 'fontWeight', 'textShadow', 'opacity'],
              'runStyle': {},
              'hoverClass': [],
              'hoverKeys': [],
              'hoverStyle': {'duration': 0.4, 'scaleX': 1.08, 'scaleY': 1.08, 'background': 'linear-gradient(145deg, rgba(118, 75, 162, 0.3) 0%, rgba(240, 147, 251, 0.15) 100%)', 'boxShadow': '0 30px 70px rgba(240, 147, 251, 0.3)'},
              'animation': [{
                'animationKeys': ['duration', 'w', 'h', 'x', 'y', 'background', 'rotate', 'scaleX', 'scaleY', 'skewX', 'skewY', 'color', 'fontSize', 'fontWeight', 'textShadow', 'repeat', 'delay', 'yoyo', 'toKey', 'ease', 'opacity'],
                'animationStyle': {'duration': 1.3, 'y': 60, 'opacity': 0, 'toKey': 'from', 'ease': 'back.out(1.5)', 'delay': 0.6}
              }],
              'animationTab': 1,
              'animationType': 'scroll'
            },
            'pid': '20260129200000000006',
            'horizontal': false
          },
          {
            'type': 'animation',
            'uuid': 'd7e8f9a0-b1c2-d3e4-f5a6-b7c8d9e0f1f2202601292000000023',
            'level': 3,
            'name': '服务项目2',
            'id': '202601292000000023',
            'linkName': 'AN202601292000000023',
            'dialogVisible': false,
            'animationVisible': false,
            'className': 'animation202601292000000023',
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
              'style': {'x': 410, 'y': 250, 'w': 270, 'h': 320, 'background': 'linear-gradient(145deg, rgba(102, 126, 234, 0.2) 0%, rgba(118, 75, 162, 0.1) 100%)', 'borderRadius': '20px', 'border': '1px solid rgba(102, 126, 234, 0.2)', 'boxShadow': '0 20px 50px rgba(0,0,0,0.3)'},
              'runKeys': ['w', 'h', 'x', 'y', 'background', 'rotate', 'scaleX', 'scaleY', 'skewX', 'skewY', 'color', 'fontSize', 'fontWeight', 'textShadow', 'opacity'],
              'runStyle': {},
              'hoverClass': [],
              'hoverKeys': [],
              'hoverStyle': {'duration': 0.4, 'scaleX': 1.08, 'scaleY': 1.08, 'background': 'linear-gradient(145deg, rgba(102, 126, 234, 0.3) 0%, rgba(118, 75, 162, 0.15) 100%)', 'boxShadow': '0 30px 70px rgba(102, 126, 234, 0.3)'},
              'animation': [{
                'animationKeys': ['duration', 'w', 'h', 'x', 'y', 'background', 'rotate', 'scaleX', 'scaleY', 'skewX', 'skewY', 'color', 'fontSize', 'fontWeight', 'textShadow', 'repeat', 'delay', 'yoyo', 'toKey', 'ease', 'opacity'],
                'animationStyle': {'duration': 1.3, 'y': 60, 'opacity': 0, 'toKey': 'from', 'ease': 'back.out(1.5)', 'delay': 0.7}
              }],
              'animationTab': 1,
              'animationType': 'scroll'
            },
            'pid': '20260129200000000006',
            'horizontal': false
          },
          {
            'type': 'animation',
            'uuid': 'e8f9a0b1-c2d3-e4f5-a6b7-c8d9e0f1f2f3202601292000000024',
            'level': 3,
            'name': '服务项目3',
            'id': '202601292000000024',
            'linkName': 'AN202601292000000024',
            'dialogVisible': false,
            'animationVisible': false,
            'className': 'animation202601292000000024',
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
              'style': {'x': 720, 'y': 250, 'w': 270, 'h': 320, 'background': 'linear-gradient(145deg, rgba(0, 212, 255, 0.2) 0%, rgba(102, 126, 234, 0.1) 100%)', 'borderRadius': '20px', 'border': '1px solid rgba(0, 212, 255, 0.2)', 'boxShadow': '0 20px 50px rgba(0,0,0,0.3)'},
              'runKeys': ['w', 'h', 'x', 'y', 'background', 'rotate', 'scaleX', 'scaleY', 'skewX', 'skewY', 'color', 'fontSize', 'fontWeight', 'textShadow', 'opacity'],
              'runStyle': {},
              'hoverClass': [],
              'hoverKeys': [],
              'hoverStyle': {'duration': 0.4, 'scaleX': 1.08, 'scaleY': 1.08, 'background': 'linear-gradient(145deg, rgba(0, 212, 255, 0.3) 0%, rgba(102, 126, 234, 0.15) 100%)', 'boxShadow': '0 30px 70px rgba(0, 212, 255, 0.3)'},
              'animation': [{
                'animationKeys': ['duration', 'w', 'h', 'x', 'y', 'background', 'rotate', 'scaleX', 'scaleY', 'skewX', 'skewY', 'color', 'fontSize', 'fontWeight', 'textShadow', 'repeat', 'delay', 'yoyo', 'toKey', 'ease', 'opacity'],
                'animationStyle': {'duration': 1.3, 'y': 60, 'opacity': 0, 'toKey': 'from', 'ease': 'back.out(1.5)', 'delay': 0.8}
              }],
              'animationTab': 1,
              'animationType': 'scroll'
            },
            'pid': '20260129200000000006',
            'horizontal': false
          },
          {
            'type': 'animation',
            'uuid': 'f9a0b1c2-d3e4-f5a6-b7c8-d9e0f1f2f3f4202601292000000025',
            'level': 3,
            'name': '服务项目4',
            'id': '202601292000000025',
            'linkName': 'AN202601292000000025',
            'dialogVisible': false,
            'animationVisible': false,
            'className': 'animation202601292000000025',
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
              'style': {'x': 1030, 'y': 250, 'w': 270, 'h': 320, 'background': 'linear-gradient(145deg, rgba(240, 147, 251, 0.2) 0%, rgba(0, 212, 255, 0.1) 100%)', 'borderRadius': '20px', 'border': '1px solid rgba(240, 147, 251, 0.2)', 'boxShadow': '0 20px 50px rgba(0,0,0,0.3)'},
              'runKeys': ['w', 'h', 'x', 'y', 'background', 'rotate', 'scaleX', 'scaleY', 'skewX', 'skewY', 'color', 'fontSize', 'fontWeight', 'textShadow', 'opacity'],
              'runStyle': {},
              'hoverClass': [],
              'hoverKeys': [],
              'hoverStyle': {'duration': 0.4, 'scaleX': 1.08, 'scaleY': 1.08, 'background': 'linear-gradient(145deg, rgba(240, 147, 251, 0.3) 0%, rgba(0, 212, 255, 0.15) 100%)', 'boxShadow': '0 30px 70px rgba(240, 147, 251, 0.3)'},
              'animation': [{
                'animationKeys': ['duration', 'w', 'h', 'x', 'y', 'background', 'rotate', 'scaleX', 'scaleY', 'skewX', 'skewY', 'color', 'fontSize', 'fontWeight', 'textShadow', 'repeat', 'delay', 'yoyo', 'toKey', 'ease', 'opacity'],
                'animationStyle': {'duration': 1.3, 'y': 60, 'opacity': 0, 'toKey': 'from', 'ease': 'back.out(1.5)', 'delay': 0.9}
              }],
              'animationTab': 1,
              'animationType': 'scroll'
            },
            'pid': '20260129200000000006',
            'horizontal': false
          },
          {
            'type': 'animation',
            'uuid': 'a0b1c2d3-e4f5-a6b7-c8d9-e0f1f2f3f4f5202601292000000026',
            'level': 3,
            'name': '服务项目5',
            'id': '202601292000000026',
            'linkName': 'AN202601292000000026',
            'dialogVisible': false,
            'animationVisible': false,
            'className': 'animation202601292000000026',
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
              'style': {'x': 1340, 'y': 250, 'w': 270, 'h': 320, 'background': 'linear-gradient(145deg, rgba(118, 75, 162, 0.2) 0%, rgba(240, 147, 251, 0.1) 100%)', 'borderRadius': '20px', 'border': '1px solid rgba(118, 75, 162, 0.2)', 'boxShadow': '0 20px 50px rgba(0,0,0,0.3)'},
              'runKeys': ['w', 'h', 'x', 'y', 'background', 'rotate', 'scaleX', 'scaleY', 'skewX', 'skewY', 'color', 'fontSize', 'fontWeight', 'textShadow', 'opacity'],
              'runStyle': {},
              'hoverClass': [],
              'hoverKeys': [],
              'hoverStyle': {'duration': 0.4, 'scaleX': 1.08, 'scaleY': 1.08, 'background': 'linear-gradient(145deg, rgba(118, 75, 162, 0.3) 0%, rgba(240, 147, 251, 0.15) 100%)', 'boxShadow': '0 30px 70px rgba(118, 75, 162, 0.3)'},
              'animation': [{
                'animationKeys': ['duration', 'w', 'h', 'x', 'y', 'background', 'rotate', 'scaleX', 'scaleY', 'skewX', 'skewY', 'color', 'fontSize', 'fontWeight', 'textShadow', 'repeat', 'delay', 'yoyo', 'toKey', 'ease', 'opacity'],
                'animationStyle': {'duration': 1.3, 'y': 60, 'opacity': 0, 'toKey': 'from', 'ease': 'back.out(1.5)', 'delay': 1.0}
              }],
              'animationTab': 1,
              'animationType': 'scroll'
            },
            'pid': '20260129200000000006',
            'horizontal': false
          },
          {
            'type': 'animation',
            'uuid': 'b1c2d3e4-f5a6-b7c8-d9e0-f1f2f3f4f5f6202601292000000027',
            'level': 3,
            'name': '服务项目6',
            'id': '202601292000000027',
            'linkName': 'AN202601292000000027',
            'dialogVisible': false,
            'animationVisible': false,
            'className': 'animation202601292000000027',
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
              'style': {'x': 100, 'y': 600, 'w': 270, 'h': 320, 'background': 'linear-gradient(145deg, rgba(102, 126, 234, 0.2) 0%, rgba(118, 75, 162, 0.1) 100%)', 'borderRadius': '20px', 'border': '1px solid rgba(102, 126, 234, 0.2)', 'boxShadow': '0 20px 50px rgba(0,0,0,0.3)'},
              'runKeys': ['w', 'h', 'x', 'y', 'background', 'rotate', 'scaleX', 'scaleY', 'skewX', 'skewY', 'color', 'fontSize', 'fontWeight', 'textShadow', 'opacity'],
              'runStyle': {},
              'hoverClass': [],
              'hoverKeys': [],
              'hoverStyle': {'duration': 0.4, 'scaleX': 1.08, 'scaleY': 1.08, 'background': 'linear-gradient(145deg, rgba(102, 126, 234, 0.3) 0%, rgba(118, 75, 162, 0.15) 100%)', 'boxShadow': '0 30px 70px rgba(102, 126, 234, 0.3)'},
              'animation': [{
                'animationKeys': ['duration', 'w', 'h', 'x', 'y', 'background', 'rotate', 'scaleX', 'scaleY', 'skewX', 'skewY', 'color', 'fontSize', 'fontWeight', 'textShadow', 'repeat', 'delay', 'yoyo', 'toKey', 'ease', 'opacity'],
                'animationStyle': {'duration': 1.3, 'y': 60, 'opacity': 0, 'toKey': 'from', 'ease': 'back.out(1.5)', 'delay': 1.1}
              }],
              'animationTab': 1,
              'animationType': 'scroll'
            },
            'pid': '20260129200000000006',
            'horizontal': false
          },
          {
            'type': 'animation',
            'uuid': 'c2d3e4f5-a6b7-c8d9-e0f1-f2f3f4f5f6f7202601292000000028',
            'level': 3,
            'name': '右侧装饰',
            'id': '202601292000000028',
            'linkName': 'AN202601292000000028',
            'dialogVisible': false,
            'animationVisible': false,
            'className': 'animation202601292000000028',
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
              'style': {'x': 1680, 'y': 500, 'w': 180, 'h': 180, 'background': 'radial-gradient(circle, rgba(240, 147, 251, 0.4) 0%, rgba(118, 75, 162, 0.2) 100%)', 'borderRadius': '50%', 'border': '2px solid rgba(240, 147, 251, 0.3)'},
              'runKeys': ['w', 'h', 'x', 'y', 'background', 'rotate', 'scaleX', 'scaleY', 'skewX', 'skewY', 'color', 'fontSize', 'fontWeight', 'textShadow', 'opacity'],
              'runStyle': {},
              'hoverClass': [],
              'hoverKeys': [],
              'hoverStyle': {'duration': 0.6, 'scaleX': 1.2, 'scaleY': 1.2, 'border': '2px solid rgba(240, 147, 251, 0.5)'},
              'animation': [{
                'animationKeys': ['duration', 'w', 'h', 'x', 'y', 'background', 'rotate', 'scaleX', 'scaleY', 'skewX', 'skewY', 'color', 'fontSize', 'fontWeight', 'textShadow', 'repeat', 'delay', 'yoyo', 'toKey', 'ease', 'opacity'],
                'animationStyle': {'duration': 1.8, 'scaleX': 0, 'scaleY': 0, 'opacity': 0, 'toKey': 'from', 'ease': 'elastic.out(1, 0.5)', 'delay': 0.5}
              }],
              'animationTab': 1,
              'animationType': 'scroll'
            },
            'pid': '20260129200000000006',
            'horizontal': false
          }
        ],
        'pid': '20260129200000000005',
        'parentClassName': 'panel20260129200000000005'
      }],
      'pid': 0
    },
    {
      'templateView': 'customizeAnimation',
      'id': '20260129200000000007',
      'linkName': 'PB20260129200000000007',
      'uuid': 'f3a4b5c6-d7e8-f9a0-b1c2-d3e4f5a6b7c8202601292000000007',
      'type': 'panel',
      'className': 'panel20260129200000000007',
      'name': '联系我们',
      'horizontal': true,
      'style': {'backgroundImage': 'linear-gradient(135deg, #16213e 0%, #1a1a2e 50%, #0f3460 100%)'},
      'formData': {
        'animationKeys': ['duration', 'ease', 'xPercent', 'yPercent', 'background', 'rotate', 'scale', 'skew'],
        'animationStyle': {}
      },
      'level': 1,
      'children': [{
        'templateView': 'customizeAnimation',
        'id': '20260129200000000008',
        'linkName': 'PB20260129200000000008',
        'uuid': 'a4b5c6d7-e8f9-a0b1-c2d3-e4f5a6b7c8d9202601292000000008',
        'type': 'panel',
        'className': 'panel20260129200000000008',
        'name': '联系内容区',
        'horizontal': false,
        'style': {'backgroundImage': 'none', 'background': 'transparent'},
        'formData': {'animationKeys': [], 'animationStyle': {}},
        'level': 2,
        'children': [
          {
            'type': 'animation',
            'uuid': 'b5c6d7e8-f9a0-b1c2-d3e4-f5a6b7c8d9e0202601292000000029',
            'level': 3,
            'name': '联系标题',
            'id': '202601292000000029',
            'linkName': 'AN202601292000000029',
            'dialogVisible': false,
            'animationVisible': false,
            'className': 'animation202601292000000029',
            'animationRef': null,
            'formData': {
              'type': 'text',
              'content': '联系我们',
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
              'style': {'x': 100, 'y': 80, 'w': 400, 'h': 80, 'color': '#ffffff', 'fontSize': 56, 'fontWeight': 700, 'letterSpacing': '3px', 'textShadow': '0 4px 20px rgba(0, 212, 255, 0.3)'},
              'runKeys': ['w', 'h', 'x', 'y', 'background', 'rotate', 'scaleX', 'scaleY', 'skewX', 'skewY', 'color', 'fontSize', 'fontWeight', 'textShadow', 'opacity'],
              'runStyle': {},
              'hoverClass': [],
              'hoverKeys': [],
              'hoverStyle': {'duration': 0.4, 'scaleX': 1.05, 'scaleY': 1.05, 'color': '#00d4ff'},
              'animation': [{
                'animationKeys': ['duration', 'w', 'h', 'x', 'y', 'background', 'rotate', 'scaleX', 'scaleY', 'skewX', 'skewY', 'color', 'fontSize', 'fontWeight', 'textShadow', 'repeat', 'delay', 'yoyo', 'toKey', 'ease', 'opacity'],
                'animationStyle': {'duration': 1.5, 'x': -100, 'opacity': 0, 'toKey': 'from', 'ease': 'power4.out', 'delay': 0.2}
              }],
              'animationTab': 1,
              'animationType': 'scroll'
            },
            'pid': '20260129200000000008',
            'horizontal': false
          },
          {
            'type': 'animation',
            'uuid': 'c6d7e8f9-a0b1-c2d3-e4f5-a6b7c8d9e0f1202601292000000030',
            'level': 3,
            'name': '联系描述',
            'id': '202601292000000030',
            'linkName': 'AN202601292000000030',
            'dialogVisible': false,
            'animationVisible': false,
            'className': 'animation202601292000000030',
            'animationRef': null,
            'formData': {
              'type': 'text',
              'content': '期待与您的合作，共创美好未来',
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
              'style': {'x': 100, 'y': 150, 'w': 600, 'h': 50, 'color': '#a0aec0', 'fontSize': 24, 'fontWeight': 400, 'letterSpacing': '2px'},
              'runKeys': ['w', 'h', 'x', 'y', 'background', 'rotate', 'scaleX', 'scaleY', 'skewX', 'skewY', 'color', 'fontSize', 'fontWeight', 'textShadow', 'opacity'],
              'runStyle': {},
              'hoverClass': [],
              'hoverKeys': [],
              'hoverStyle': {'duration': 0.3, 'scaleX': 1.03, 'scaleY': 1.03, 'color': '#ffffff'},
              'animation': [{
                'animationKeys': ['duration', 'w', 'h', 'x', 'y', 'background', 'rotate', 'scaleX', 'scaleY', 'skewX', 'skewY', 'color', 'fontSize', 'fontWeight', 'textShadow', 'repeat', 'delay', 'yoyo', 'toKey', 'ease', 'opacity'],
                'animationStyle': {'duration': 1.5, 'x': -100, 'opacity': 0, 'toKey': 'from', 'ease': 'power4.out', 'delay': 0.4}
              }],
              'animationTab': 1,
              'animationType': 'scroll'
            },
            'pid': '20260129200000000008',
            'horizontal': false
          },
          {
            'type': 'animation',
            'uuid': 'd7e8f9a0-b1c2-d3e4-f5a6-b7c8d9e0f1f2202601292000000031',
            'level': 3,
            'name': '联系信息卡片',
            'id': '202601292000000031',
            'linkName': 'AN202601292000000031',
            'dialogVisible': false,
            'animationVisible': false,
            'className': 'animation202601292000000031',
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
              'style': {'x': 100, 'y': 250, 'w': 400, 'h': 300, 'background': 'linear-gradient(145deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)', 'borderRadius': '24px', 'border': '1px solid rgba(255,255,255,0.15)', 'boxShadow': '0 25px 60px rgba(0,0,0,0.3)'},
              'runKeys': ['w', 'h', 'x', 'y', 'background', 'rotate', 'scaleX', 'scaleY', 'skewX', 'skewY', 'color', 'fontSize', 'fontWeight', 'textShadow', 'opacity'],
              'runStyle': {},
              'hoverClass': [],
              'hoverKeys': [],
              'hoverStyle': {'duration': 0.4, 'scaleX': 1.05, 'scaleY': 1.05, 'background': 'linear-gradient(145deg, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0.08) 100%)', 'boxShadow': '0 35px 80px rgba(0,0,0,0.4)'},
              'animation': [{
                'animationKeys': ['duration', 'w', 'h', 'x', 'y', 'background', 'rotate', 'scaleX', 'scaleY', 'skewX', 'skewY', 'color', 'fontSize', 'fontWeight', 'textShadow', 'repeat', 'delay', 'yoyo', 'toKey', 'ease', 'opacity'],
                'animationStyle': {'duration': 1.4, 'x': -80, 'opacity': 0, 'toKey': 'from', 'ease': 'power4.out', 'delay': 0.6}
              }],
              'animationTab': 1,
              'animationType': 'scroll'
            },
            'pid': '20260129200000000008',
            'horizontal': false
          },
          {
            'type': 'animation',
            'uuid': 'e8f9a0b1-c2d3-e4f5-a6b7-c8d9e0f1f2f3202601292000000032',
            'level': 3,
            'name': '联系表单',
            'id': '202601292000000032',
            'linkName': 'AN202601292000000032',
            'dialogVisible': false,
            'animationVisible': false,
            'className': 'animation202601292000000032',
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
              'style': {'x': 550, 'y': 250, 'w': 400, 'h': 300, 'background': 'linear-gradient(145deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)', 'borderRadius': '24px', 'border': '1px solid rgba(255,255,255,0.15)', 'boxShadow': '0 25px 60px rgba(0,0,0,0.3)'},
              'runKeys': ['w', 'h', 'x', 'y', 'background', 'rotate', 'scaleX', 'scaleY', 'skewX', 'skewY', 'color', 'fontSize', 'fontWeight', 'textShadow', 'opacity'],
              'runStyle': {},
              'hoverClass': [],
              'hoverKeys': [],
              'hoverStyle': {'duration': 0.4, 'scaleX': 1.05, 'scaleY': 1.05, 'background': 'linear-gradient(145deg, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0.08) 100%)', 'boxShadow': '0 35px 80px rgba(0,0,0,0.4)'},
              'animation': [{
                'animationKeys': ['duration', 'w', 'h', 'x', 'y', 'background', 'rotate', 'scaleX', 'scaleY', 'skewX', 'skewY', 'color', 'fontSize', 'fontWeight', 'textShadow', 'repeat', 'delay', 'yoyo', 'toKey', 'ease', 'opacity'],
                'animationStyle': {'duration': 1.4, 'y': 80, 'opacity': 0, 'toKey': 'from', 'ease': 'power4.out', 'delay': 0.7}
              }],
              'animationTab': 1,
              'animationType': 'scroll'
            },
            'pid': '20260129200000000008',
            'horizontal': false
          },
          {
            'type': 'animation',
            'uuid': 'f9a0b1c2-d3e4-f5a6-b7c8-d9e0f1f2f3f4202601292000000033',
            'level': 3,
            'name': '地图区域',
            'id': '202601292000000033',
            'linkName': 'AN202601292000000033',
            'dialogVisible': false,
            'animationVisible': false,
            'className': 'animation202601292000000033',
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
              'style': {'x': 1000, 'y': 250, 'w': 600, 'h': 400, 'background': 'linear-gradient(145deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)', 'borderRadius': '24px', 'border': '1px solid rgba(255,255,255,0.15)', 'boxShadow': '0 25px 60px rgba(0,0,0,0.3)'},
              'runKeys': ['w', 'h', 'x', 'y', 'background', 'rotate', 'scaleX', 'scaleY', 'skewX', 'skewY', 'color', 'fontSize', 'fontWeight', 'textShadow', 'opacity'],
              'runStyle': {},
              'hoverClass': [],
              'hoverKeys': [],
              'hoverStyle': {'duration': 0.4, 'scaleX': 1.03, 'scaleY': 1.03, 'background': 'linear-gradient(145deg, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0.08) 100%)', 'boxShadow': '0 35px 80px rgba(0,0,0,0.4)'},
              'animation': [{
                'animationKeys': ['duration', 'w', 'h', 'x', 'y', 'background', 'rotate', 'scaleX', 'scaleY', 'skewX', 'skewY', 'color', 'fontSize', 'fontWeight', 'textShadow', 'repeat', 'delay', 'yoyo', 'toKey', 'ease', 'opacity'],
                'animationStyle': {'duration': 1.4, 'x': 100, 'opacity': 0, 'toKey': 'from', 'ease': 'power4.out', 'delay': 0.8}
              }],
              'animationTab': 1,
              'animationType': 'scroll'
            },
            'pid': '20260129200000000008',
            'horizontal': false
          },
          {
            'type': 'animation',
            'uuid': 'a0b1c2d3-e4f5-a6b7-c8d9-e0f1f2f3f4f5202601292000000034',
            'level': 3,
            'name': '底部按钮',
            'id': '202601292000000034',
            'linkName': 'AN202601292000000034',
            'dialogVisible': false,
            'animationVisible': false,
            'className': 'animation202601292000000034',
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
              'style': {'x': 100, 'y': 600, 'w': 200, 'h': 60, 'background': 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', 'borderRadius': '30px', 'border': '2px solid rgba(255, 255, 255, 0.2)', 'boxShadow': '0 10px 30px rgba(102, 126, 234, 0.4)'},
              'runKeys': ['w', 'h', 'x', 'y', 'background', 'rotate', 'scaleX', 'scaleY', 'skewX', 'skewY', 'color', 'fontSize', 'fontWeight', 'textShadow', 'opacity'],
              'runStyle': {},
              'hoverClass': [],
              'hoverKeys': [],
              'hoverStyle': {'duration': 0.3, 'scaleX': 1.08, 'scaleY': 1.08, 'boxShadow': '0 15px 40px rgba(102, 126, 234, 0.6)'},
              'animation': [{
                'animationKeys': ['duration', 'w', 'h', 'x', 'y', 'background', 'rotate', 'scaleX', 'scaleY', 'skewX', 'skewY', 'color', 'fontSize', 'fontWeight', 'textShadow', 'repeat', 'delay', 'yoyo', 'toKey', 'ease', 'opacity'],
                'animationStyle': {'duration': 1.2, 'y': 30, 'opacity': 0, 'scaleX': 0.9, 'scaleY': 0.9, 'toKey': 'from', 'ease': 'back.out(1.7)', 'delay': 1.0}
              }],
              'animationTab': 1,
              'animationType': 'scroll'
            },
            'pid': '20260129200000000008',
            'horizontal': false
          },
          {
            'type': 'animation',
            'uuid': 'b1c2d3e4-f5a6-b7c8-d9e0-f1f2f3f4f5f6202601292000000035',
            'level': 3,
            'name': '右上装饰圆',
            'id': '202601292000000035',
            'linkName': 'AN202601292000000035',
            'dialogVisible': false,
            'animationVisible': false,
            'className': 'animation202601292000000035',
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
              'style': {'x': 1650, 'y': 100, 'w': 200, 'h': 200, 'background': 'conic-gradient(from 0deg, #667eea, #764ba2, #f093fb, #667eea)', 'borderRadius': '50%', 'opacity': 0.25, 'border': '3px solid rgba(102, 126, 234, 0.3)'},
              'runKeys': ['w', 'h', 'x', 'y', 'background', 'rotate', 'scaleX', 'scaleY', 'skewX', 'skewY', 'color', 'fontSize', 'fontWeight', 'textShadow', 'opacity'],
              'runStyle': {},
              'hoverClass': [],
              'hoverKeys': [],
              'hoverStyle': {'duration': 0.8, 'rotate': 360, 'opacity': 0.4},
              'animation': [{
                'animationKeys': ['duration', 'w', 'h', 'x', 'y', 'background', 'rotate', 'scaleX', 'scaleY', 'skewX', 'skewY', 'color', 'fontSize', 'fontWeight', 'textShadow', 'repeat', 'delay', 'yoyo', 'toKey', 'ease', 'opacity'],
                'animationStyle': {'duration': 2, 'scaleX': 0, 'scaleY': 0, 'opacity': 0, 'rotate': -180, 'toKey': 'from', 'ease': 'elastic.out(1, 0.4)', 'delay': 0.5}
              }],
              'animationTab': 1,
              'animationType': 'scroll'
            },
            'pid': '20260129200000000008',
            'horizontal': false
          },
          {
            'type': 'animation',
            'uuid': 'c2d3e4f5-a6b7-c8d9-e0f1-f2f3f4f5f6f7202601292000000036',
            'level': 3,
            'name': '左下装饰',
            'id': '202601292000000036',
            'linkName': 'AN202601292000000036',
            'dialogVisible': false,
            'animationVisible': false,
            'className': 'animation202601292000000036',
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
              'style': {'x': 80, 'y': 850, 'w': 120, 'h': 120, 'background': 'linear-gradient(45deg, #667eea 0%, #764ba2 100%)', 'borderRadius': '50%', 'opacity': 0.6, 'boxShadow': '0 15px 40px rgba(102, 126, 234, 0.4)'},
              'runKeys': ['w', 'h', 'x', 'y', 'background', 'rotate', 'scaleX', 'scaleY', 'skewX', 'skewY', 'color', 'fontSize', 'fontWeight', 'textShadow', 'opacity'],
              'runStyle': {},
              'hoverClass': [],
              'hoverKeys': [],
              'hoverStyle': {'duration': 0.5, 'scaleX': 1.3, 'scaleY': 1.3, 'opacity': 0.9},
              'animation': [{
                'animationKeys': ['duration', 'w', 'h', 'x', 'y', 'background', 'rotate', 'scaleX', 'scaleY', 'skewX', 'skewY', 'color', 'fontSize', 'fontWeight', 'textShadow', 'repeat', 'delay', 'yoyo', 'toKey', 'ease', 'opacity'],
                'animationStyle': {'duration': 1.5, 'scaleX': 0, 'scaleY': 0, 'opacity': 0, 'x': -50, 'toKey': 'from', 'ease': 'back.out(2)', 'delay': 1.2}
              }],
              'animationTab': 1,
              'animationType': 'scroll'
            },
            'pid': '20260129200000000008',
            'horizontal': false
          }
        ],
        'pid': '20260129200000000007',
        'parentClassName': 'panel20260129200000000007'
      }],
      'pid': 0
    }],

  'id': 1
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
