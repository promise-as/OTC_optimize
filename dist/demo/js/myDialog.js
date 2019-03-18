$().ready(function () {
  $("#base_message").click(function () {
    HSJ.util.alert.common({status: "success", message: "成功的"})
  })
  $("#base_message_redirect").click(function () {
    HSJ.util.alert.common({status: "error", message: "操作失败了！！！", uri: "#?aaa=123"})
  })
  $("#base_message_callback").click(function () {
    HSJ.util.alert.common({
      status: "warn", message: "你得到了一个警告", callback: function () {
        alert("这是回调函数")
      }
    })
  })
  $("#base_message_redirect_callback").click(function () {
    HSJ.util.alert.common({
      status: "success", message: "开始", uri: "#?abc=11111", callback: function () {
        alert("这是回调函数")
      }
    })
  })
  $("#base_dialog_suc").click(function () {
    HSJ.util.confirm.common.suc({
      message: "成功得文本", ok_callback: function () {
        // alert("这是确定的回调函数")
      }, cancel_callback: function () {
        // alert("这是取消的回调函数")
      }
    })
  })
  $("#base_dialog_warn").click(function () {
    HSJ.util.confirm.common.warn({
      message: "我是提示信息", ok_callback: function () {
        alert("这是确定的回调函数")
      }, cancel_callback: function () {
        alert("这是取消的回调函数")
      }
    })
  })
  $("#base_dialog_err").click(function () {
    HSJ.util.confirm.common.err({
      message: "我是提示信息", ok_callback: function () {
        alert("这是确定的回调函数")
      }, cancel_callback: function () {
        alert("这是取消的回调函数")
      }
    })
  })
})