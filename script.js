const dailyHours = document.querySelector("#daily");
const weeklyHours = document.querySelector("#weekly");
const monthlyHours = document.querySelector("#monthly");
const timeline = document.querySelectorAll(".active");

dailyHours.addEventListener("click", ()=>{
    const currentHours = [5, 1, 0, 1, 1, 0];
    const workHours = document.querySelector("#work-hours");
    const playHours = document.querySelector("#play-hours");
    const studyHours = document.querySelector("#study-hours");
    const exerciseHours = document.querySelector("#exercise-hours");
    const socialHours = document.querySelector("#social-hours");
    const selfHours = document.querySelector("#self-hours");

    workHours.innerHTML = currentHours[0];
    playHours.innerHTML = currentHours[1];
    studyHours.innerHTML = currentHours[2];
    exerciseHours.innerHTML = currentHours[3];
    socialHours.innerHTML = currentHours[4];
    selfHours.innerHTML = currentHours[5];

    const previousHours = [7, 2, 1, 1, 3, 1];
    const prevWorkHours = document.querySelector("#previous");
    const prevPlayHours = document.querySelector("#play-prev-week");
    const prevStudyHours = document.querySelector("#study-prev-week");
    const prevExerciseHours = document.querySelector("#exercise-prev-week");
    const prevSocialHours = document.querySelector("#social-prev-week");
    const prevSelfHours = document.querySelector("#self-prev-week");

    prevWorkHours.innerHTML = previousHours[0];
    prevPlayHours.innerHTML = previousHours[1];
    prevStudyHours.innerHTML = previousHours[2];
    prevExerciseHours.innerHTML = previousHours[3];
    prevSocialHours.innerHTML = previousHours[4];
    prevSelfHours.innerHTML = previousHours[5];
    
}) 
weeklyHours.addEventListener("click", ()=>{
    const currentHours = [32, 10, 4, 4, 5, 2];
    const workHours = document.querySelector("#work-hours");
    const playHours = document.querySelector("#play-hours");
    const studyHours = document.querySelector("#study-hours");
    const exerciseHours = document.querySelector("#exercise-hours");
    const socialHours = document.querySelector("#social-hours");
    const selfHours = document.querySelector("#self-hours");

    workHours.innerHTML = currentHours[0];
    playHours.innerHTML = currentHours[1];
    studyHours.innerHTML = currentHours[2];
    exerciseHours.innerHTML = currentHours[3];
    socialHours.innerHTML = currentHours[4];
    selfHours.innerHTML = currentHours[5];

    const previousHours = [36, 8, 7, 5, 10, 2];
    const prevWorkHours = document.querySelector("#previous");
    const prevPlayHours = document.querySelector("#play-prev-week");
    const prevStudyHours = document.querySelector("#study-prev-week");
    const prevExerciseHours = document.querySelector("#exercise-prev-week");
    const prevSocialHours = document.querySelector("#social-prev-week");
    const prevSelfHours = document.querySelector("#self-prev-week");

    prevWorkHours.innerHTML = previousHours[0];
    prevPlayHours.innerHTML = previousHours[1];
    prevStudyHours.innerHTML = previousHours[2];
    prevExerciseHours.innerHTML = previousHours[3];
    prevSocialHours.innerHTML = previousHours[4];
    prevSelfHours.innerHTML = previousHours[5];
    
}) 
monthlyHours.addEventListener("click", ()=>{
    const currentHours = [103, 23, 13, 11, 21, 7];
    const workHours = document.querySelector("#work-hours");
    const playHours = document.querySelector("#play-hours");
    const studyHours = document.querySelector("#study-hours");
    const exerciseHours = document.querySelector("#exercise-hours");
    const socialHours = document.querySelector("#social-hours");
    const selfHours = document.querySelector("#self-hours");

    workHours.innerHTML = currentHours[0];
    playHours.innerHTML = currentHours[1];
    studyHours.innerHTML = currentHours[2];
    exerciseHours.innerHTML = currentHours[3];
    socialHours.innerHTML = currentHours[4];
    selfHours.innerHTML = currentHours[5];

    const previousHours = [128, 29, 19, 18, 23, 11];
    const prevWorkHours = document.querySelector("#previous");
    const prevPlayHours = document.querySelector("#play-prev-week");
    const prevStudyHours = document.querySelector("#study-prev-week");
    const prevExerciseHours = document.querySelector("#exercise-prev-week");
    const prevSocialHours = document.querySelector("#social-prev-week");
    const prevSelfHours = document.querySelector("#self-prev-week");

    prevWorkHours.innerHTML = previousHours[0];
    prevPlayHours.innerHTML = previousHours[1];
    prevStudyHours.innerHTML = previousHours[2];
    prevExerciseHours.innerHTML = previousHours[3];
    prevSocialHours.innerHTML = previousHours[4];
    prevSelfHours.innerHTML = previousHours[5];
    
}) 

 
let selectedDuration = document.querySelectorAll(".duration");

selectedDuration.forEach(duration => {
    duration.addEventListener('click', function () {
        selectedDuration.forEach(time => time.classList.remove('active'));
        this.classList.add('active');
    });
});

/*
timeline.forEach((duration) => {
    duration.addEventListener("click", () => {
        duration.classList.remove("active");
        const newtimeline = document.querySelectorAll(".active");
    })
})
*/





