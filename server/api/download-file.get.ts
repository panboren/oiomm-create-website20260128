// server/api/download-file.get.ts
import fs from 'fs/promises'
import path from 'path'
import { fileURLToPath } from 'url'

export default defineEventHandler(async (event) => {
  try {
    const __filename = fileURLToPath(import.meta.url)
    const __dirname = path.dirname(__filename)
    const filePath = path.join(__dirname, '../../public/file/oiomm-code.zip')

    // 检查文件是否存在
    try {
      await fs.access(filePath)
    } catch {
      event.node.res.statusCode = 404
      return { error: 'File not found' }
    }

    // 读取文件内容
    const fileBuffer = await fs.readFile(filePath)

    // 设置响应头
    event.node.res.setHeader('Content-Type', 'application/zip')
    event.node.res.setHeader('Content-Disposition', 'attachment; filename="oiomm-code.zip"')
    event.node.res.setHeader('Content-Length', fileBuffer.length)

    // 直接发送缓冲区
    event.node.res.end(fileBuffer)
  } catch (error) {
    console.error('Download error:', error)
    event.node.res.statusCode = 500
    return { error: 'Failed to download file' }
  }
})
