// 全选功能
$("#all-checked").change(function() {
  var i = $("input[type='checkbox']").prop("checked");
  $("input[type='checkbox']").prop("checked", i);
});
//小复选框全部选中，全选也选中
$(".items-li input[type='checkbox']").change(function() {
  if (
    $(".items-li input[type='checkbox']:checked").length ===
    $(".items-li input[type='checkbox']").length
  ) {
    $("#all-checked").prop("checked", true);
  } else {
    $("#all-checked").prop("checked", false);
  }
});
//   删除功能
$(".del").click(function() {
  console.log("删除");
  $(this)
    .parents(".items-li")
    .remove();
});
// 增加减少商品数量功能
$(".add").click(function() {
  var i = $(this).siblings("input");
  var value = parseInt(i.prop("value")) + 1;
  i.val(value);
  getSum();
});
$(".sub").click(function() {
  var i = $(this).siblings("input");
  var value = parseInt(i.prop("value")) - 1;
  if (value <= 0) {
    i.val("0");
  } else {
    i.val(value);
  }
  getSum;
});
//每个商品金额的小计功能
$(".add,.sub").click(function() {
  // 单价
  var unitprice = $(this)
    .parents()
    .siblings()
    .children(".unit-price")
    .text()
    .replace(/[^\d.]/g, "");
  // 数量
  var number = parseFloat(
    $(this)
      .siblings("input")
      .val()
  );
  // 每个商品总金额
  var total = parseFloat(
    $(this)
      .parent()
      .siblings()
      .children(".total")
      .text()
      .replace(/[^\d.]/g, "")
  );
  $(this)
    .parent()
    .siblings()
    .children(".total ")
    .text((number * unitprice).toFixed(2));
});
// 如果修改商品个数，该商品小计也会改变
$(".items-right input").change(function() {
  // 数量
  var number = $(this).val();
  console.log(number);
  // 单价
  var unitprice = $(this)
    .parents()
    .siblings()
    .children(".unit-price")
    .text()
    .replace(/[^\d.]/g, "");
  console.log(unitprice);
  var total = parseFloat(
    $(this)
      .parent()
      .siblings()
      .children(".total")
      .text()
      .replace(/[^\d.]/g, "")
  );
  $(this)
    .parent()
    .siblings()
    .children(".total ")
    .text((number * unitprice).toFixed(2));
});
// 计算总计和总模块
function getSum() {
  var count = 0; //计算总件数
  var money = 0; //计算总价钱
  $(".items-right input").each(function(i, ele) {
    count += parseInt($(ele).val());
    money +=
      parseFloat($(ele).val()) *
      parseFloat(
        $(ele)
          .parents()
          .siblings()
          .children(".unit-price")
          .text()
          .replace(/[^\d.]/g, "")
      );
  });
  $(".count b").text(count);
  console.log(money);
  $(".money b").text(money.toFixed(2));
}
