<template>
  <animation-layer v-if="pageList && pageList.length>0" :pageList="pageList" :disable="false"></animation-layer>
  <empty-template v-else></empty-template>
</template>
<script setup lang="ts">

definePageMeta({
  layout: false
})
import AnimationLayer from '~~/components/animation-layer/animation-layer.vue'


let listData = {
  "id": 100,
  "user_id": null,
  "list": [
    // 首页部分 - 企业品牌展示
    {
      "templateView": "infinitePanelScrollAnimation",
      "id": "20250127000000001",
      "linkName": "PG20250127000000001",
      "uuid": "a1b2c3d4-e5f6-7890-abcd-ef1234567890",
      "type": "panel",
      "className": "panel20250127000000001",
      "name": "企业首页",
      "horizontal": false,
      "style": {
        "backgroundImage": "linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)"
      },
      "formData": {
        "animationKeys": [],
        "animationStyle": {}
      },
      "level": 1,
      "children": [
        {
          "templateView": "infinitePanelScrollAnimation",
          "id": "20250127000000002",
          "linkName": "PN20250127000000002",
          "uuid": "b2c3d4e5-f6a7-8901-bcde-f23456789012",
          "type": "panel",
          "className": "panel20250127000000002",
          "name": "品牌展示区",
          "horizontal": false,
          "style": {
            "backgroundImage": "linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)"
          },
          "formData": {
            "animationKeys": [],
            "animationStyle": {}
          },
          "level": 2,
          "children": [
            // 企业Logo/品牌标识
            {
              "type": "animation",
              "uuid": "c3d4e5f6-a7b8-9012-cdef-345678901234",
              "level": 3,
              "name": "企业品牌标识",
              "id": "20250127000000003",
              "linkName": "AN20250127000000003",
              "dialogVisible": false,
              "animationVisible": false,
              "className": "animation20250127000000003",
              "animationRef": null,
              "formData": {
                "type": "text",
                "content": "创新科技<br/>引领未来",
                "imgUrl": "/images/company-logo.svg",
                "imgUrlName": "公司Logo",
                "swiperOptions": {
                  "imgList": [
                    {
                      "imgUrl": "",
                      "animationType": "Swipe"
                    }
                  ],
                  "autoplay": true,
                  "delay": 3000,
                  "infinite": true,
                  "controls": true,
                  "pagination": true,
                  "fluxIndex": true
                },
                "keys": [
                  "w",
                  "h",
                  "x",
                  "y",
                  "background",
                  "rotate",
                  "scaleX",
                  "scaleY",
                  "skewX",
                  "skewY",
                  "color",
                  "fontSize",
                  "fontWeight",
                  "textShadow"
                ],
                "style": {
                  "x": 150,
                  "y": 200,
                  "w": 700,
                  "h": 200,
                  "color": "#ffffff",
                  "fontSize": 64,
                  "fontWeight": "bold",
                  "textShadow": "2px 2px 8px rgba(0,0,0,0.5)",
                  "textAlign": "center"
                },
                "runKeys": [
                  "toKey",
                  "ease",
                  "w",
                  "h",
                  "x",
                  "y",
                  "background",
                  "opacity",
                  "scale"
                ],
                "runStyle": {},
                "hoverClass": [],
                "hoverKeys": [],
                "hoverStyle": {},
                "animation": [
                  {
                    "animationKeys": [
                      "duration",
                      "w",
                      "h",
                      "x",
                      "y",
                      "background",
                      "rotate",
                      "scaleX",
                      "scaleY",
                      "skewX",
                      "skewY",
                      "color",
                      "fontSize",
                      "fontWeight",
                      "textShadow",
                      "repeat",
                      "delay",
                      "yoyo",
                      "toKey",
                      "ease",
                      "scale"
                    ],
                    "animationStyle": {
                      "duration": 1.5,
                      "scale": 0.8,
                      "opacity": 0,
                      "toKey": "from",
                      "ease": "power3.out"
                    }
                  }
                ],
                "animationTab": 1,
                "animationType": "scroll"
              },
              "pid": "20250127000000002",
              "horizontal": false
            },
            // 企业使命/愿景描述
            {
              "type": "animation",
              "uuid": "d4e5f6a7-b8c9-0123-def0-456789012345",
              "level": 3,
              "name": "企业使命",
              "id": "20250127000000004",
              "linkName": "AN20250127000000004",
              "dialogVisible": false,
              "animationVisible": false,
              "className": "animation20250127000000004",
              "animationRef": null,
              "formData": {
                "type": "text",
                "content": "致力于为全球企业提供<br/>领先的数字化转型解决方案",
                "imgUrl": "",
                "imgUrlName": "",
                "swiperOptions": {
                  "imgList": [
                    {
                      "imgUrl": "",
                      "animationType": "Swipe"
                    }
                  ],
                  "autoplay": true,
                  "delay": 3000,
                  "infinite": true,
                  "controls": true,
                  "pagination": true,
                  "fluxIndex": true
                },
                "keys": [
                  "w",
                  "h",
                  "x",
                  "y",
                  "background",
                  "rotate",
                  "scaleX",
                  "scaleY",
                  "skewX",
                  "skewY",
                  "color",
                  "fontSize",
                  "fontWeight",
                  "textShadow"
                ],
                "style": {
                  "x": 200,
                  "y": 450,
                  "w": 600,
                  "h": 120,
                  "color": "#e0e7ff",
                  "fontSize": 24,
                  "fontWeight": "normal",
                  "textShadow": "1px 1px 4px rgba(0,0,0,0.3)",
                  "textAlign": "center"
                },
                "runKeys": [
                  "toKey",
                  "ease",
                  "w",
                  "h",
                  "x",
                  "y",
                  "background",
                  "opacity"
                ],
                "runStyle": {},
                "hoverClass": [],
                "hoverKeys": [],
                "hoverStyle": {},
                "animation": [
                  {
                    "animationKeys": [
                      "duration",
                      "w",
                      "h",
                      "x",
                      "y",
                      "background",
                      "rotate",
                      "scaleX",
                      "scaleY",
                      "skewX",
                      "skewY",
                      "color",
                      "fontSize",
                      "fontWeight",
                      "textShadow",
                      "repeat",
                      "delay",
                      "yoyo",
                      "toKey",
                      "ease"
                    ],
                    "animationStyle": {
                      "duration": 1.5,
                      "delay": 0.3,
                      "x": 0,
                      "opacity": 0,
                      "toKey": "from",
                      "ease": "power3.out"
                    }
                  }
                ],
                "animationTab": 1,
                "animationType": "scroll"
              },
              "pid": "20250127000000002",
              "horizontal": false
            }
          ],
          "pid": "20250127000000001",
          "parentClassName": "panel20250127000000001"
        }
      ],
      "pid": 0
    },
    // 产品服务展示
    {
      "templateView": "infinitePanelScrollAnimation",
      "id": "20250127000000005",
      "linkName": "PG20250127000000005",
      "uuid": "e5f6a7b8-c9d0-1234-ef01-567890123456",
      "type": "panel",
      "className": "panel20250127000000005",
      "name": "产品与服务",
      "horizontal": false,
      "style": {
        "backgroundImage": "linear-gradient(135deg, #f0f9ff 0%, #e6f7ff 100%)"
      },
      "formData": {
        "animationKeys": [],
        "animationStyle": {}
      },
      "level": 1,
      "children": [
        {
          "templateView": "infinitePanelScrollAnimation",
          "id": "20250127000000006",
          "linkName": "PN20250127000000006",
          "uuid": "f6a7b8c9-d0e1-2345-f012-678901234567",
          "type": "panel",
          "className": "panel20250127000000006",
          "name": "核心产品展示",
          "horizontal": false,
          "style": {
            "backgroundImage": "linear-gradient(135deg, #f0f9ff 0%, #e6f7ff 100%)"
          },
          "formData": {
            "animationKeys": [],
            "animationStyle": {}
          },
          "level": 2,
          "children": [
            // 云服务平台
            {
              "type": "animation",
              "uuid": "a7b8c9d0-e1f2-3456-0123-789012345678",
              "level": 3,
              "name": "云服务平台",
              "id": "20250127000000007",
              "linkName": "AN20250127000000007",
              "dialogVisible": false,
              "animationVisible": false,
              "className": "animation20250127000000007",
              "animationRef": null,
              "formData": {
                "type": "img",
                "content": "",
                "imgUrl": "/images/cloud-platform.svg",
                "imgUrlName": "云平台图标",
                "swiperOptions": {
                  "imgList": [
                    {
                      "imgUrl": "",
                      "animationType": "Swipe"
                    }
                  ],
                  "autoplay": true,
                  "delay": 3000,
                  "infinite": true,
                  "controls": true,
                  "pagination": true,
                  "fluxIndex": true
                },
                "keys": [
                  "w",
                  "h",
                  "x",
                  "y",
                  "background",
                  "rotate",
                  "scaleX",
                  "scaleY",
                  "skewX",
                  "skewY",
                  "color",
                  "fontSize",
                  "fontWeight",
                  "textShadow"
                ],
                "style": {
                  "x": 150,
                  "y": 150,
                  "w": 250,
                  "h": 250,
                  "background": "rgba(255,255,255,0.9)",
                  "borderRadius": "20px",
                  "boxShadow": "0 10px 30px rgba(0,0,0,0.1)",
                  "display": "flex",
                  "justifyContent": "center",
                  "alignItems": "center",
                  "border": "2px solid #1890ff"
                },
                "runKeys": [
                  "toKey",
                  "ease",
                  "w",
                  "h",
                  "x",
                  "y",
                  "background",
                  "opacity",
                  "scale",
                  "rotate"
                ],
                "runStyle": {},
                "hoverClass": [],
                "hoverKeys": [],
                "hoverStyle": {
                  "duration": 0.3,
                  "scale": 1.05,
                  "boxShadow": "0 15px 40px rgba(24, 144, 255, 0.3)"
                },
                "animation": [
                  {
                    "animationKeys": [
                      "duration",
                      "w",
                      "h",
                      "x",
                      "y",
                      "background",
                      "rotate",
                      "scaleX",
                      "scaleY",
                      "skewX",
                      "skewY",
                      "color",
                      "fontSize",
                      "fontWeight",
                      "textShadow",
                      "repeat",
                      "delay",
                      "yoyo",
                      "toKey",
                      "ease"
                    ],
                    "animationStyle": {
                      "duration": 1,
                      "scale": 0.5,
                      "opacity": 0,
                      "toKey": "from",
                      "ease": "back.out(1.7)"
                    }
                  }
                ],
                "animationTab": 1,
                "animationType": "scroll"
              },
              "pid": "20250127000000006",
              "horizontal": false
            },
            // 数据分析服务
            {
              "type": "animation",
              "uuid": "b8c9d0e1-f2a3-4567-1234-890123456789",
              "level": 3,
              "name": "数据分析服务",
              "id": "20250127000000008",
              "linkName": "AN20250127000000008",
              "dialogVisible": false,
              "animationVisible": false,
              "className": "animation20250127000000008",
              "animationRef": null,
              "formData": {
                "type": "img",
                "content": "",
                "imgUrl": "/images/data-analysis.svg",
                "imgUrlName": "数据分析图标",
                "swiperOptions": {
                  "imgList": [
                    {
                      "imgUrl": "",
                      "animationType": "Swipe"
                    }
                  ],
                  "autoplay": true,
                  "delay": 3000,
                  "infinite": true,
                  "controls": true,
                  "pagination": true,
                  "fluxIndex": true
                },
                "keys": [
                  "w",
                  "h",
                  "x",
                  "y",
                  "background",
                  "rotate",
                  "scaleX",
                  "scaleY",
                  "skewX",
                  "skewY",
                  "color",
                  "fontSize",
                  "fontWeight",
                  "textShadow"
                ],
                "style": {
                  "x": 500,
                  "y": 150,
                  "w": 250,
                  "h": 250,
                  "background": "rgba(255,255,255,0.9)",
                  "borderRadius": "20px",
                  "boxShadow": "0 10px 30px rgba(0,0,0,0.1)",
                  "display": "flex",
                  "justifyContent": "center",
                  "alignItems": "center",
                  "border": "2px solid #52c41a"
                },
                "runKeys": [
                  "toKey",
                  "ease",
                  "w",
                  "h",
                  "x",
                  "y",
                  "background",
                  "opacity",
                  "scale",
                  "rotate"
                ],
                "runStyle": {},
                "hoverClass": [],
                "hoverKeys": [],
                "hoverStyle": {
                  "duration": 0.3,
                  "scale": 1.05,
                  "boxShadow": "0 15px 40px rgba(82, 196, 26, 0.3)"
                },
                "animation": [
                  {
                    "animationKeys": [
                      "duration",
                      "w",
                      "h",
                      "x",
                      "y",
                      "background",
                      "rotate",
                      "scaleX",
                      "scaleY",
                      "skewX",
                      "skewY",
                      "color",
                      "fontSize",
                      "fontWeight",
                      "textShadow",
                      "repeat",
                      "delay",
                      "yoyo",
                      "toKey",
                      "ease"
                    ],
                    "animationStyle": {
                      "duration": 1,
                      "delay": 0.2,
                      "scale": 0.5,
                      "opacity": 0,
                      "toKey": "from",
                      "ease": "back.out(1.7)"
                    }
                  }
                ],
                "animationTab": 1,
                "animationType": "scroll"
              },
              "pid": "20250127000000006",
              "horizontal": false
            },
            // 人工智能解决方案
            {
              "type": "animation",
              "uuid": "c9d0e1f2-a3b4-5678-2345-901234567890",
              "level": 3,
              "name": "AI解决方案",
              "id": "20250127000000009",
              "linkName": "AN20250127000000009",
              "dialogVisible": false,
              "animationVisible": false,
              "className": "animation20250127000000009",
              "animationRef": null,
              "formData": {
                "type": "img",
                "content": "",
                "imgUrl": "/images/ai-solution.svg",
                "imgUrlName": "AI解决方案图标",
                "swiperOptions": {
                  "imgList": [
                    {
                      "imgUrl": "",
                      "animationType": "Swipe"
                    }
                  ],
                  "autoplay": true,
                  "delay": 3000,
                  "infinite": true,
                  "controls": true,
                  "pagination": true,
                  "fluxIndex": true
                },
                "keys": [
                  "w",
                  "h",
                  "x",
                  "y",
                  "background",
                  "rotate",
                  "scaleX",
                  "scaleY",
                  "skewX",
                  "skewY",
                  "color",
                  "fontSize",
                  "fontWeight",
                  "textShadow"
                ],
                "style": {
                  "x": 150,
                  "y": 450,
                  "w": 250,
                  "h": 250,
                  "background": "rgba(255,255,255,0.9)",
                  "borderRadius": "20px",
                  "boxShadow": "0 10px 30px rgba(0,0,0,0.1)",
                  "display": "flex",
                  "justifyContent": "center",
                  "alignItems": "center",
                  "border": "2px solid #722ed1"
                },
                "runKeys": [
                  "toKey",
                  "ease",
                  "w",
                  "h",
                  "x",
                  "y",
                  "background",
                  "opacity",
                  "scale",
                  "rotate"
                ],
                "runStyle": {},
                "hoverClass": [],
                "hoverKeys": [],
                "hoverStyle": {
                  "duration": 0.3,
                  "scale": 1.05,
                  "boxShadow": "0 15px 40px rgba(114, 46, 209, 0.3)"
                },
                "animation": [
                  {
                    "animationKeys": [
                      "duration",
                      "w",
                      "h",
                      "x",
                      "y",
                      "background",
                      "rotate",
                      "scaleX",
                      "scaleY",
                      "skewX",
                      "skewY",
                      "color",
                      "fontSize",
                      "fontWeight",
                      "textShadow",
                      "repeat",
                      "delay",
                      "yoyo",
                      "toKey",
                      "ease"
                    ],
                    "animationStyle": {
                      "duration": 1,
                      "delay": 0.4,
                      "scale": 0.5,
                      "opacity": 0,
                      "toKey": "from",
                      "ease": "back.out(1.7)"
                    }
                  }
                ],
                "animationTab": 1,
                "animationType": "scroll"
              },
              "pid": "20250127000000006",
              "horizontal": false
            },
            // 安全服务
            {
              "type": "animation",
              "uuid": "d0e1f2a3-b4c5-6789-3456-012345678901",
              "level": 3,
              "name": "网络安全服务",
              "id": "20250127000000010",
              "linkName": "AN20250127000000010",
              "dialogVisible": false,
              "animationVisible": false,
              "className": "animation20250127000000010",
              "animationRef": null,
              "formData": {
                "type": "img",
                "content": "",
                "imgUrl": "/images/cyber-security.svg",
                "imgUrlName": "网络安全图标",
                "swiperOptions": {
                  "imgList": [
                    {
                      "imgUrl": "",
                      "animationType": "Swipe"
                    }
                  ],
                  "autoplay": true,
                  "delay": 3000,
                  "infinite": true,
                  "controls": true,
                  "pagination": true,
                  "fluxIndex": true
                },
                "keys": [
                  "w",
                  "h",
                  "x",
                  "y",
                  "background",
                  "rotate",
                  "scaleX",
                  "scaleY",
                  "skewX",
                  "skewY",
                  "color",
                  "fontSize",
                  "fontWeight",
                  "textShadow"
                ],
                "style": {
                  "x": 500,
                  "y": 450,
                  "w": 250,
                  "h": 250,
                  "background": "rgba(255,255,255,0.9)",
                  "borderRadius": "20px",
                  "boxShadow": "0 10px 30px rgba(0,0,0,0.1)",
                  "display": "flex",
                  "justifyContent": "center",
                  "alignItems": "center",
                  "border": "2px solid #fa8c16"
                },
                "runKeys": [
                  "toKey",
                  "ease",
                  "w",
                  "h",
                  "x",
                  "y",
                  "background",
                  "opacity",
                  "scale",
                  "rotate"
                ],
                "runStyle": {},
                "hoverClass": [],
                "hoverKeys": [],
                "hoverStyle": {
                  "duration": 0.3,
                  "scale": 1.05,
                  "boxShadow": "0 15px 40px rgba(250, 140, 22, 0.3)"
                },
                "animation": [
                  {
                    "animationKeys": [
                      "duration",
                      "w",
                      "h",
                      "x",
                      "y",
                      "background",
                      "rotate",
                      "scaleX",
                      "scaleY",
                      "skewX",
                      "skewY",
                      "color",
                      "fontSize",
                      "fontWeight",
                      "textShadow",
                      "repeat",
                      "delay",
                      "yoyo",
                      "toKey",
                      "ease"
                    ],
                    "animationStyle": {
                      "duration": 1,
                      "delay": 0.6,
                      "scale": 0.5,
                      "opacity": 0,
                      "toKey": "from",
                      "ease": "back.out(1.7)"
                    }
                  }
                ],
                "animationTab": 1,
                "animationType": "scroll"
              },
              "pid": "20250127000000006",
              "horizontal": false
            }
          ],
          "pid": "20250127000000005",
          "parentClassName": "panel20250127000000005"
        }
      ],
      "pid": 0
    },
    // 联系我们页面
    {
      "templateView": "infinitePanelScrollAnimation",
      "id": "20250127000000011",
      "linkName": "PG20250127000000011",
      "uuid": "e1f2a3b4-c5d6-7890-4567-123456789012",
      "type": "panel",
      "className": "panel20250127000000011",
      "name": "联系我们",
      "horizontal": false,
      "style": {
        "backgroundImage": "linear-gradient(135deg, #f6ffed 0%, #eafff2 100%)"
      },
      "formData": {
        "animationKeys": [],
        "animationStyle": {}
      },
      "level": 1,
      "children": [
        {
          "templateView": "infinitePanelScrollAnimation",
          "id": "20250127000000012",
          "linkName": "PN20250127000000012",
          "uuid": "f2a3b4c5-d6e7-8901-5678-234567890123",
          "type": "panel",
          "className": "panel20250127000000012",
          "name": "联系方式",
          "horizontal": false,
          "style": {
            "backgroundImage": "linear-gradient(135deg, #f6ffed 0%, #eafff2 100%)"
          },
          "formData": {
            "animationKeys": [],
            "animationStyle": {}
          },
          "level": 2,
          "children": [
            // 联系标题
            {
              "type": "animation",
              "uuid": "a3b4c5d6-e7f8-9012-6789-345678901234",
              "level": 3,
              "name": "合作咨询",
              "id": "20250127000000013",
              "linkName": "AN20250127000000013",
              "dialogVisible": false,
              "animationVisible": false,
              "className": "animation20250127000000013",
              "animationRef": null,
              "formData": {
                "type": "text",
                "content": "商务合作",
                "imgUrl": "",
                "imgUrlName": "",
                "swiperOptions": {
                  "imgList": [
                    {
                      "imgUrl": "",
                      "animationType": "Swipe"
                    }
                  ],
                  "autoplay": true,
                  "delay": 3000,
                  "infinite": true,
                  "controls": true,
                  "pagination": true,
                  "fluxIndex": true
                },
                "keys": [
                  "w",
                  "h",
                  "x",
                  "y",
                  "background",
                  "rotate",
                  "scaleX",
                  "scaleY",
                  "skewX",
                  "skewY",
                  "color",
                  "fontSize",
                  "fontWeight",
                  "textShadow"
                ],
                "style": {
                  "x": 325,
                  "y": 150,
                  "w": 350,
                  "h": 80,
                  "color": "#1d39c4",
                  "fontSize": 48,
                  "fontWeight": "bold",
                  "textShadow": "2px 2px 8px rgba(0,0,0,0.1)"
                },
                "runKeys": [
                  "toKey",
                  "ease",
                  "w",
                  "h",
                  "x",
                  "y",
                  "background",
                  "opacity"
                ],
                "runStyle": {},
                "hoverClass": [],
                "hoverKeys": [],
                "hoverStyle": {},
                "animation": [
                  {
                    "animationKeys": [
                      "duration",
                      "w",
                      "h",
                      "x",
                      "y",
                      "background",
                      "rotate",
                      "scaleX",
                      "scaleY",
                      "skewX",
                      "skewY",
                      "color",
                      "fontSize",
                      "fontWeight",
                      "textShadow",
                      "repeat",
                      "delay",
                      "yoyo",
                      "toKey",
                      "ease"
                    ],
                    "animationStyle": {
                      "duration": 1.2,
                      "y": -30,
                      "opacity": 0,
                      "toKey": "from",
                      "ease": "power3.out"
                    }
                  }
                ],
                "animationTab": 1,
                "animationType": "scroll"
              },
              "pid": "20250127000000012",
              "horizontal": false
            },
            // 联系信息
            {
              "type": "animation",
              "uuid": "b4c5d6e7-f8a9-0123-7890-456789012345",
              "level": 3,
              "name": "联系方式",
              "id": "20250127000000014",
              "linkName": "AN20250127000000014",
              "dialogVisible": false,
              "animationVisible": false,
              "className": "animation20250127000000014",
              "animationRef": null,
              "formData": {
                "type": "text",
                "content": "商务合作邮箱: business@company.com<br/>技术支持热线: 400-888-8888<br/>公司地址: 上海市浦东新区世纪大道1001号",
                "imgUrl": "",
                "imgUrlName": "",
                "swiperOptions": {
                  "imgList": [
                    {
                      "imgUrl": "",
                      "animationType": "Swipe"
                    }
                  ],
                  "autoplay": true,
                  "delay": 3000,
                  "infinite": true,
                  "controls": true,
                  "pagination": true,
                  "fluxIndex": true
                },
                "keys": [
                  "w",
                  "h",
                  "x",
                  "y",
                  "background",
                  "rotate",
                  "scaleX",
                  "scaleY",
                  "skewX",
                  "skewY",
                  "color",
                  "fontSize",
                  "fontWeight",
                  "textShadow"
                ],
                "style": {
                  "x": 200,
                  "y": 280,
                  "w": 600,
                  "h": 200,
                  "color": "#595959",
                  "fontSize": 20,
                  "fontWeight": "normal",
                  "textShadow": "1px 1px 4px rgba(0,0,0,0.05)",
                  "lineHeight": "1.8"
                },
                "runKeys": [
                  "toKey",
                  "ease",
                  "w",
                  "h",
                  "x",
                  "y",
                  "background",
                  "opacity"
                ],
                "runStyle": {},
                "hoverClass": [],
                "hoverKeys": [],
                "hoverStyle": {},
                "animation": [
                  {
                    "animationKeys": [
                      "duration",
                      "w",
                      "h",
                      "x",
                      "y",
                      "background",
                      "rotate",
                      "scaleX",
                      "scaleY",
                      "skewX",
                      "skewY",
                      "color",
                      "fontSize",
                      "fontWeight",
                      "textShadow",
                      "repeat",
                      "delay",
                      "yoyo",
                      "toKey",
                      "ease"
                    ],
                    "animationStyle": {
                      "duration": 1.2,
                      "delay": 0.3,
                      "x": 0,
                      "opacity": 0,
                      "toKey": "from",
                      "ease": "power3.out"
                    }
                  }
                ],
                "animationTab": 1,
                "animationType": "scroll"
              },
              "pid": "20250127000000012",
              "horizontal": false
            }
          ],
          "pid": "20250127000000011",
          "parentClassName": "panel20250127000000011"
        }
      ],
      "pid": 0
    }
  ],
  "name": "企业官方网站",
  "options": null,
  "code": null,
  "item": null,
  "mask": null,
  "templateView": "infinitePanelScrollAnimation"
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
