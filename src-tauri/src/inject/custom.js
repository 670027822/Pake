/*
 * This file serves as a collection point for external JS and CSS dependencies.
 * It amalgamates these external resources for easier injection into the application.
 * Additionally, you can directly include any script files in this file
 * that you wish to attach to the application.
 */


setInterval(() => {
	
console.log('start');
	
// 指定要隐藏的 class 名称
const classNamesToHide = ['cursor-pointer.logo_box', 'mt-auto.text-xs', 'fixed.right-1.bottom-20.md\\:right-6.md\\:bottom-4.z-50'];

// 遍历所有需要隐藏的 class 名称
classNamesToHide.forEach(className => {
    // 使用 querySelectorAll 选择所有具有该 class 的元素
    const elements = document.querySelectorAll(`.${className}`);
    // 遍历所有选中的元素，并隐藏它们
    elements.forEach(element => {
        element.style.display = 'none';
    });
});
	
//隐藏相邻元素
	
  const targetElement = document.querySelector('.px-2.w-full.h-6.overflow-hidden.cursor-pointer');
  if (targetElement) {
    targetElement.style.display = 'none';
    let sibling = targetElement.previousElementSibling;
    for (let i = 0; i < 2 && sibling; i++) {
      sibling.style.display = 'none';
      sibling = sibling.previousElementSibling;
    }
  }

//移除监听事件
	
const avatarElement = document.querySelector('.user-avatar');
avatarElement.outerHTML = avatarElement.outerHTML;
	

	
	
}, 200);


