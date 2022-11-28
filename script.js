

setInterval(function(){
    const discountDate = new Date('2022-12-30');
    const currentDate = new Date();
    const diffInMS = discountDate.getTime() - currentDate.getTime();
    const totalDiffInSeconds = diffInMS / 1000;
    const totalDiffInMinutes = totalDiffInSeconds / 60;
    const totalDiffInHours = Math.floor(totalDiffInMinutes / 60);
    const diffInSeconds = Math.floor(totalDiffInSeconds % 60);
    const diffInMinutes = Math.floor(totalDiffInMinutes % 60);
    const totalDiffInDays = Math.floor(totalDiffInHours / 24);
    const diffInHours = totalDiffInHours % 24;
    const diffInWeeks = Math.floor(totalDiffInDays / 7);
    const diffInDays = totalDiffInDays % 7;

    const result = `weeks: ${diffInWeeks} days: ${diffInDays} hours: ${diffInHours} minutes: ${
        diffInMinutes} seconds: ${diffInSeconds}`;
    
    console.log(result) 
}, 1000)
  
