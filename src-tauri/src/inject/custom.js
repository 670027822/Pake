/*
 * This file serves as a collection point for external JS and CSS dependencies.
 * It amalgamates these external resources for easier injection into the application.
 * Additionally, you can directly include any script files in this file
 * that you wish to attach to the application.
 */



setInterval(() => {
	
console.log('start');
	
// 指定要隐藏的 class 名称
const classNamesToHide = ['flex.items-center.gap-x-12', 'w-full.md\\:h-96.lg\\:overflow-y-auto.p-4.box-border.lg\\:col-span-7.flex.items-center.justify-center.relative','inline-flex.items-center.justify-center.rounded-md.px-2.text-gray-700','min-w-20.px-2.py-1\\.5.rounded.text-xs.text-gray-400.bg-white\\/10.cursor-not-allowed.transform.duration-500.group.inline-flex.items-center.justify-center.gap-1'];

// 遍历所有需要隐藏的 class 名称
classNamesToHide.forEach(className => {
    // 使用 querySelectorAll 选择所有具有该 class 的元素
    const elements = document.querySelectorAll(`.${className}`);
    // 遍历所有选中的元素，并隐藏它们
    elements.forEach(element => {
        element.style.display = 'none';
    });
});

	

//移除监听事件
	
const avatarElement = document.querySelector('.rounded-full.cursor-pointer');
avatarElement.outerHTML = avatarElement.outerHTML;
	
// 获取具有指定class的元素
var elements = document.querySelectorAll('.w-full.p-3.mb-2.border-b.border-gray-100.text-xs.text-zinc-900.flex.flex-col.items-start.gap-2');

// 遍历所有找到的元素
elements.forEach(function(element) {
    // 获取之后的相邻两个元素
    var nextElement = element.nextElementSibling;
    if (nextElement) {
        nextElement.style.display = 'none'; // 隐藏第一个相邻元素
        var nextNextElement = nextElement.nextElementSibling;
        if (nextNextElement) {
            nextNextElement.style.display = 'none'; // 隐藏第二个相邻元素
        }
    }
});
	
	
}, 200);


