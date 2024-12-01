import liff from '@line/liff'

const initLiff = async () => {
  try {
    await liff.init({ liffId: 'YOUR_LIFF_ID' }) // 替換為你的 LIFF ID
    console.log('LIFF 初始化成功')
  } catch (error) {
    console.error('LIFF 初始化失敗', error)
  }
}

export default initLiff
