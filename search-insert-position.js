var searchInsert = function(nums, target) {
    if(nums.includes(target)){
        return nums.indexOf(target);
    }
    else{
        for(let i = 0; i < nums.length; i++){
            if(target < nums[i]){  
            return i;}
        }
        return nums.length;
    }
};
