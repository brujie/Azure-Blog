(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{426:function(n,e,t){"use strict";t.r(e);var r=t(31),s=Object(r.a)({},(function(){var n=this.$createElement,e=this._self._c||n;return e("ContentSlotsDistributor",{attrs:{"slot-key":this.$parent.slotKey}},[e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("数组去重\n\n​```\n代码：\nlet nums = [1,1,2];\nlet removeDuplicates = function(nums) {\n    let tempArr = [];\n    for(let i=0;i<nums.length;i++){\n        let flag = tempArr.indexOf(nums[i]);\n        if(flag == -1){\n            tempArr.push(nums[i]);\n        }\n    }\n    return tempArr;\n};\nremoveDuplicates(nums);\n​```\n\n\n旋转数组\n给你一个数组，将数组中的元素向右轮转 k 个位置，其中 k 是非负数。\n​```\n示例 1:\n\n输入: nums = [1,2,3,4,5,6,7], k = 3\n输出: [5,6,7,1,2,3,4]\n解释:\n向右轮转 1 步: [7,1,2,3,4,5,6]\n向右轮转 2 步: [6,7,1,2,3,4,5]\n向右轮转 3 步: [5,6,7,1,2,3,4]\n示例 2:\n\n输入：nums = [-1,-100,3,99], k = 2\n输出：[3,99,-1,-100]\n解释: \n向右轮转 1 步: [99,-1,-100,3]\n向右轮转 2 步: [3,99,-1,-100]\n​```\n​```\n代码:\nlet  nums = [1,2,3,4,5,6,7]\nlet rotate = function(nums, k) {\n    if(nums.length == k){l\n        nums.reverse();\n    }\n    let temp = Object.assign([], nums);    // 获取之后的数据\n    temp = temp.slice(-k);\n    nums.length = nums.length - k;\n    return [...temp,...nums];\n};\nrotate(nums,3)\n​```\n存在重复元素\n​```\n给定一个整数数组，判断是否存在重复元素。\n\n如果存在一值在数组中出现至少两次，函数返回 true 。如果数组中每个元素都不相同，则返回 false 。\n\n \n\n示例 1:\n\n输入: [1,2,3,1]\n输出: true\n示例 2:\n\n输入: [1,2,3,4]\n输出: false\n示例 3:\n\n输入: [1,1,1,3,3,4,3,2,4,2]\n输出: true\n​```\n​```\n代码：\nlet arr = [1,1,1,3,3,4,3,2,4,2];\nlet containsDuplicate = function(nums) {\n    for(let i = 0; i < nums.length - 1; i++) {\n        if (nums[i] == nums[i + 1]) {\n            return true;\n        }\n    }\n    return false;\n}\ncontainsDuplicate(arr)\n​```\n\n只出现一次的数字\n给定一个非空整数数组，除了某个元素只出现一次以外，其余每个元素均出现两次。找出那个只出现了一次的元素。\n\n说明：\n\n你的算法应该具有线性时间复杂度。 你可以不使用额外空间来实现吗？\n\n示例 1:\n\n输入: [2,2,1]\n输出: 1\n示例 2:\n\n输入: [4,1,2,1,2]\n输出: 4\n\n​```\nlet arr =  [4,1,2,1,2];\n\nvar singleNumber = function(arr,k) {\n    let tempArr = [];\n    for(let i=0;i<arr.length;i++){\n        if(arr[i] == k){\n            tempArr.push(arr[i]);\n        } \n    }\n    if(tempArr.length == 1){\n        return tempArr[0];\n    } else {\n        return false;\n    }\n};\nsingleNumber(arr,4)\n​```\n")])])])])}),[],!1,null,null,null);e.default=s.exports}}]);