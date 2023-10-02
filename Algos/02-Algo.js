const nums1 = [5,3,4,2,1]
const nums2=[9,2,5,6,4,3,7,10,1,8]


function bubblesort(nums){

for(j=0;j=nums.length;j++){

    for(i=0; i<nums.length;i++ ){
        tempo = nums[i]
        watch = nums[i+1]
        console.log(nums[i])
    if (nums[i]>nums[j]){
        nums[i+1] = tempo
        nums[i]= nums[j]
    }
    else{
        break
    }
}
console.log("THIS IS TEMPO :",tempo,"THIS IS WATCH",watch,nums);

   
    }

}


console.log(bubblesort(nums1))