/*

import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

export default defineEventHandler(async (event) => {
  try {
    // 使用 import.meta.url 获取当前模块的 URL，并转换为文件路径
    const __filename = fileURLToPath(import.meta.url)
    // __dirname 是 __filename 去掉文件名后的部分
    const __dirname = path.dirname(__filename)

    const filePath = path.join(__dirname, '../../public/data/data.json')

    // 读取文件内容（这里省略了错误处理，实际应用中应添加）
    const fileContent = fs.readFileSync(filePath, 'utf8')
    const data = JSON.parse(fileContent)

    return {
      code: 200,
      data: data
    }
  } catch (e) {
    console.error(e)
    return {
      data: 'Error reading data.json',
      headers: {
        'Cache-Control': 'no-cache, no-store, must-revalidate',
        'Pragma': 'no-cache',
        'Expires': '0'
      }
    }
  }
})
*/

import fs from 'fs/promises' // 使用异步 API
import path from 'path'
import { fileURLToPath } from 'url'

export default defineEventHandler(async (event) => {
  try {
    const __filename = fileURLToPath(import.meta.url)
    const __dirname = path.dirname(__filename)

    const filePath = path.join(__dirname, '../../public/data/data.json')

    // 异步读取文件内容
    const fileContent = await fs.readFile(filePath, 'utf8')

    let data
    try {
      data = JSON.parse(fileContent)
    } catch (parseError) {
      console.error('Failed to parse JSON:', parseError)
      throw new Error('Invalid JSON format in data.json')
    }

    return {
      code: 200,
      data: data
    }
  } catch (e) {
    console.error('Error reading data.json:', e.message)
    return {
      data: 'Error reading data.json',
      headers: {
        'Cache-Control': 'no-cache, no-store, must-revalidate',
        'Pragma': 'no-cache',
        'Expires': '0'
      }
    }
  }
})
