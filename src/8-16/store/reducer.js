const defaultState = {
    languages: [
      { id: 'en', label: 'English', content: {
        topTitle: '👕 Support Parcel by getting an awesome t-shirt or hoodie! All proceeds support our Open Collective. ✨',
        mainTitle: 'Blazing fast, zero configuration web application bundler'    } 
      },
      {
        id: 'cn', label: '中文', content: {
          topTitle: '👕 通过T恤商店支持 Parcel t-shirt or hoodie！所有的收益将作为我们的募捐基金 Open Collective。 ✨',
          mainTitle: '极速零配置Web应用打包工具'
        }
      },
      {
        id: 'japan', label: '日本', content: {
          topTitle: '👕 最高の Tシャツとパーカーを買って、Parcel を応援してください！全利益が、 私達 Open Collective の事業の支えになります。 ✨',
          mainTitle: '驚くほど速く、設定不要なWebアプリケーションバンドラー'
        }
      }
    ],
    lang: 'cn',
    pageContent: {}
  }  
   
export default (state = defaultState, action) => {
    const newState = JSON.parse(JSON.stringify(state))
    switch (action.type) {
        case 'onSelectLang':
            newState.lang = action.value;
            default:
        // 让第一次默认的时候拿到页面的文字
            newState.pageContent = newState.languages.find((item) => item.id === newState.lang).content;
            return newState
    }
}
