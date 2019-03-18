'use strict';

var app = new Vue({
  el: '#app',
  data: {
    /*支付USDT-数据*/
    logoText: '全球领先的数字资产兑换平台',
    logoTextEn: 'The world\'s leading digital asset exchange platform',
    phoneNumber: '020-253 2564',
    // vendorName: '商家1', // 商户名称
    // USDTNumber: '46.33 USDT / ¥314.1', // USDT数量
    // clientInfo: 'lavender', // 客户信息
    // payOrder: 'WIRES0022020209901', // 支付单号
    orderError: false, // 订单错误提示
    // 提示文本
    remitText: [{
      key: 0,
      value: '[10551] 您提交的次数有点多，请您休息一会儿~'
    }, {
      key: 1,
      value: '[10552] 您提交的订单信息有误'
    }, {
      key: 2,
      value: '[10553] 您提交的订单参数错误'
    }],
    isShowSkip: false, // 跳转至 USDT购买 页面

    payUSDT: '支付USDT',
    payUSDTEn: 'Pay USDT',
    merchantName: '商户名称',
    merchantNameEn: 'Merchant Name',
    merchantNameValue: '商户1',
    merchantNameValueEn: 'Merchant name 1',
    USDTNumber: 'USDT数量',
    USDTNumberEn: 'USDT Number',
    USDTNumberValue: '46.33 USDT / ¥314.1',
    payBtnValue: '确认向商户支付USDT',
    payBtnValueEn: 'Confirm payment of USDT to merchant',
    orderInfo: '订单信息',
    orderInfoEn: 'Order Info',
    clientInfo: '客户信息',
    clientInfoEn: 'Order Info',
    clientInfoValue: 'lavender',
    paymentOrder: '支付单号',
    paymentOrderEn: 'Payment Order',
    paymentOrderValue: 'WIRES0022020209901',
    otherOrder: '您还有以下进行中的订单',
    otherOrderEn: 'You also have the following order in progress',

    /*购买USDT-数据*/
    buyUSDT: '购买USDT',
    buyUSDTEn: 'Buy USDT',
    payAmount: '6000.00', // 支付金额
    payName: '',

    /*收银台-数据*/
    payment: ['银行转账', '支付宝扫码', '微信扫码'],
    paymentEn: ['Bank Transfer', 'Alipay', 'Wechat Pay'],
    paymentIndex: 0,
    username: '李四',
    bankInfo: '招商银行深圳车公庙支行',
    bankAccount: '6222 0000 0000 0000 000',
    TransferNoteCode: '897524',
    bankTypes: ['ICBC', 'CCB', 'BOC', 'CMB', 'ABC', 'Bocom'],

    isRemind: false,
    haveTransfer: false, // 已转账
    notTransfer: false, // 未转账
    selectedBankIndex: 0, // 选中银行的下标

    operatorName: '车国秀',
    ServiceTimes: '1000',
    AverageTotalAffirmTime: '00:05:00',

    countdown: true, // 倒计时中
    overtime: false, // 支付已超时
    HasRemind: false, // 已提醒服务商收款

    isShowFacilitatorMsg: false, // 服务商信息显示和隐藏
    isShowProgressOrder: false, // 进行中的订单显示和隐藏

    /*重复点击*/
    isRepeatClick: true,
    repeatText: '[10509]订单已经点击[我已向服务商转账], 请勿重复点击'
  },

  methods: {
    /*支付方式切换*/
    tabHead: function tabHead(index) {
      this.paymentIndex = index;
    },

    // 未转账
    notTransferHandle: function notTransferHandle() {
      this.isRemind = true;
      this.notTransfer = true;
    },
    // 已转账
    haveTransferHandle: function haveTransferHandle() {
      this.notTransfer = false;
      this.haveTransfer = true;
    },
    // 重复点击
    repeatClickHandle: function repeatClickHandle() {
      this.isRepeatClick = true;
      this.notTransfer = true;
    },

    // 关闭提醒
    closeRemind: function closeRemind() {
      this.isRemind = false;
    },
    // 选中的银行
    selectedBank: function selectedBank(index) {
      // console.log(index, bank)
      this.selectedBankIndex = index;
    },

    // 服务商信息 显示和隐藏
    showFacilitatorMsg: function showFacilitatorMsg() {
      this.isShowFacilitatorMsg = !this.isShowFacilitatorMsg;
    },

    // 进行中的订单 显示和隐藏
    showProgressOrder: function showProgressOrder() {
      this.isShowProgressOrder = !this.isShowProgressOrder;
    }
  }
});