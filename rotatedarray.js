// Question:-Prior to being passed to your function, nums is possibly rotated at
            // an unknown pivot index k (1 <= k < nums.length) such that the resulting
            // array is [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]] 
            // (0-indexed). For example, [0,1,2,4,5,6,7] might be rotated at pivot index 3 
            // and become [4,5,6,7,0,1,2].

            //Given the array nums after the possible rotation and an integer target, return the index of target if it is in nums, or -1 if it is not in nums.

            //You must write an algorithm with O(log n) runtime complexity.
            
            // Example 1:
            // Input: nums = [4,5,6,7,0,1,2], target = 0
            // Output: 4
            
            // Example 2:
            // Input: nums = [4,5,6,7,0,1,2], target = 3
            // Output: -1


var search = function(nums, target) {     //nums = [4,5,6,7,0,1,2], targate=0
    //     var start = 0;    
    //     var end = nums.length-1;
    // while(start<=end){
    //     var mid=start+Math.floor((end-start)/2);
    //     if(nums[mid]==target){
    //         return mid;
    //     }
    //      if(nums[start]<=nums[mid]){  //start to mid part is sorted
    //         if( nums[start]<=target && target < nums[mid]){
    //                 end=mid-1;
    //         }
    //         else{
    //             start=mid+1;
    //         }
    //     }
    //     else if(nums[mid]<=nums[end]){  // mid to end part sorted
    //         if(nums[mid]<target && target <= nums[end]){
    //             start=mid+1;
    //         }
    //         else{
    //             end=mid-1;
    //         }
    //     }
    // }
    // return -1;
    
//     var start=0;
//     var end = nums.length-1;
//     while(start<=end){
//         var mid=start+Math.floor((end-start)/2);   
//         if(nums[mid]==target){
//             return mid;
//         }
//         else if(nums[start]<=nums[mid]){  //start to mid part is sorted
//             if(nums[mid]>target && nums[start]<=target){
//                     end=mid-1;
//             }
//             else{
//                 start=mid+1;
//             }
//         }
//         else if(nums[mid]<=nums[end]){  // mid to end part sorted
//             if(nums[mid]<=target && nums[end]>=target){
//                 start=mid+1;
//             }
//             else{
//                 end=mid-1;
//             }
//         }
//     }
//     return -1;
    
    var start=0;
    var end = nums.length-1;
    
    while(start<=end){
        var mid=start+Math.floor((end-start)/2);
        
        if(nums[mid]==target){
            return mid;
        }
        else if(nums[start]<=nums[mid]){   //start to mid part is sorted
            if(nums[mid]>target && nums[start]<=target){
                    end=mid-1;
            }
            else{
                start=mid+1;
            }
        }
        else if(nums[mid]<=nums[end]){      // mid to end part sorted
            if(nums[mid]<target && nums[end]>=target){
                start=mid+1;
            }
            else{
                end=mid-1;
            }
        }
    }
    return -1;
};
console.log(search([4,5,6,7,0,1,2], 0))