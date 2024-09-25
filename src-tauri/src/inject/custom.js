/*
 * This file serves as a collection point for external JS and CSS dependencies.
 * It amalgamates these external resources for easier injection into the application.
 * Additionally, you can directly include any script files in this file
 * that you wish to attach to the application.
 */

document.addEventListener('DOMContentLoaded', () => {
  setInterval(() => {
    console.log('start');

    // 指定要隐藏的 class 名称
    const classNamesToHide = ['layout_header_logo__uEjF9', 'layout_header_left__vpsuJ', 'layout_mobile_link_cta__6twrc', 'layout_plan_name__xtBaL', 'onboarding_small_upgrade__j_jZ5', 'onboarding_upgrade__WISaN', 'layout_user_menu__l75BE', 'layout_header_avatar__CjhHu'];

    // 遍历所有需要隐藏的 class 名称
    classNamesToHide.forEach(className => {
      // 使用 querySelectorAll 选择所有具有该 class 的元素
      const elements = document.querySelectorAll(`.${className}`);
      // 遍历所有选中的元素，并隐藏它们
      elements.forEach(element => {
        element.style.display = 'none';
      });
    });

    // 替换指定文本
    // 获取所有具有指定类名的元素
    const elements = document.querySelectorAll('.selectx_label__jS8s2');
    // 遍历所有匹配的元素
    elements.forEach(element => {
      // 获取当前元素的文本内容
      const currentText = element.textContent;
      // 替换文本内容
      const newText = currentText.replace('getimg.ai', '独家大模型');
      // 设置新的文本内容
      element.textContent = newText;
    });

    // 修改高度
    // 选择 class 为 11 和 22 的元素
    const element11 = document.querySelector('.ai-generator__parameters__ecEcR.ai-generator_free__qU2sN');
    const element22 = document.querySelector('.ai-generator_parameters___YH5u.ai-generator_free__qU2sN');

    // 计算高度
    const calculatedHeight = 'calc(100vh - 69px - 37px - 48px - 18px)';

    // 设置高度
    if (element11) {
      element11.style.height = calculatedHeight;
    }

    if (element22) {
      element22.style.height = calculatedHeight;
      element22.style.maxHeight = calculatedHeight;
    }
  }, 200);
});

