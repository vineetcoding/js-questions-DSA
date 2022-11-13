var searchRange = function(nums, target) {
    var ans =[-1,-1];
    var start = 0;
     var end = nums.length-1;
    //first Position
    while(start<=end){
        let mid = start + Math.floor(end-start/2);
        if(nums[mid]==target){
          ans[0]=mid;
          end=mid-1;
        }else if(nums[mid]<target){
          start=mid+1;
        }else{
          end=mid-1;
        }
    }
    // return ans;
    //Last Position.....
    var start = 0;
    var end = nums.length-1;
    while(start<=end){
        let mid = start + Math.floor(end-start/2);
        if(nums[mid]==target){
          ans[1]=mid;
          start=mid+1;
        }else if(nums[mid]<target){
          start=mid+1;
        }else{
          end=mid-1;
        }
    }
    return ans;
};