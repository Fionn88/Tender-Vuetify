import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    certificates: [],
    currentCertificateAmount: 0,
    banks: ["004 臺灣銀行",
      "005 臺灣土地銀行",
      "006 合作金庫商業銀行",
      "007 第一商業銀行",
      "008 華南商業銀行",
      "009 彰化商業銀行",
      "011 上海商業儲蓄銀行",
      "012 台北富邦商業銀行",
      "013 國泰世華商業銀行",
      "016 高雄銀行",
      "017 兆豐國際商業銀行",
      "021 花旗(台灣)商業銀行",
      "050 臺灣中小企業銀行",
      "052 渣打國際商業銀行",
      "053 台中商業銀行",
      "054 京城商業銀行",
      "101 瑞興商業銀行",
      "102 華泰商業銀行",
      "103 臺灣新光商業銀行",
      "108 陽信商業銀行",
      "114 基隆第一信用合作社",
      "115 基隆市第二信用合作社",
      "118 板信商業銀行",
      "119 淡水第一信用合作社",
      "130 新竹第一信用合作社",
      "132 新竹第三信用合作社",
      "146 台中市第二信用合作社",
      "147 三信商業銀行",
      "162 彰化第六信用合作社",
      "215 花蓮第一信用合作社",
      "216 花蓮第二信用合作社",
      "600 農金資訊股份有限公司",
      "700 中華郵政股份有限公司",
      "803 聯邦商業銀行",
      "805 遠東國際商業銀行",
      "806 元大商業銀行",
      "807 永豐商業銀行",
      "808 玉山商業銀行",
      "809 凱基商業銀行",
      "812 台新國際商業銀行",
      "815 日盛國際商業銀行",
      "816 安泰商業銀行",
      "822 中國信託商業銀行",
      "952 財團法人農漁會南區資訊中心",
      "997 中華民國信用合作社聯合社南區聯合資訊處理中心"
    ],
    accountCurrecy: ["台幣", "美金"]
  },
  getters: {
  },
  mutations: {
    addCertificate(state, newCertificate) {
      state.certificates.push(newCertificate)

      if(state.currentCertificateAmount == 0){
        var currentInt = Number(newCertificate.amount)
        state.currentCertificateAmount += currentInt
        console.log("currentCertificateAmount: "+state.currentCertificateAmount)
      }else{
        var current = Number(newCertificate.amount)
        state.currentCertificateAmount += current
        console.log("currentCertificateAmount: "+state.currentCertificateAmount)
      }

    }
  },
  actions: {
  },
  modules: {
  }
})
