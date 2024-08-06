const exercises = [
    { name: "تمرين ضغط", duration: 60, image: "https://files1.elsport.com/imagine/pictures_730_400/4458228_1483794577.jpg" },
    { name: "تمرين سكوات", duration: 90, image: "https://static.webteb.net/images/content/slideshowslide_sss_10214_5906357cedb-473a-4ba8-87f4-c311dc4b9f54.jpg" },
    { name: "تمرين بلانك", duration: 120, image: "https://static.webteb.net/images/content/slideshowslide_sss_10214_5906357cedb-473a-4ba8-87f4-c311dc4b9f54.jpg" },
    { name: "تمرين سحب", duration: 75, image: "https://arabic.sport360.com/wp-content/uploads/2016/12/Behind-The-Neck-Cable-Pulldown.jpg" },
    { name: "تمرين كرنش", duration: 60, image: "https://static.webteb.net/images/content/slideshowslide_sss_10214_5906357cedb-473a-4ba8-87f4-c311dc4b9f54.jpg" },
    { name: "تمرين اندفاع", duration: 90, image: "https://static.webteb.net/images/content/slideshowslide_sss_10214_5906357cedb-473a-4ba8-87f4-c311dc4b9f54.jpg" },
    { name: "تمرين رفع أثقال", duration: 120, image: "https://arabic.sport360.com/wp-content/uploads/2016/12/Behind-The-Neck-Cable-Pulldown.jpg" },
    { name: "تمرين قفز الحبل", duration: 150, image: "https://static.webteb.net/images/content/slideshowslide_sss_10214_5906357cedb-473a-4ba8-87f4-c311dc4b9f54.jpg" },
    { name: "تمرين دراجة", duration: 180, image: "https://static.webteb.net/images/content/slideshowslide_sss_10214_5906357cedb-473a-4ba8-87f4-c311dc4b9f54.jpg" },
    { name: "تمرين يوجا", duration: 300, image: "https://static.webteb.net/images/content/slideshowslide_sss_10214_5906357cedb-473a-4ba8-87f4-c311dc4b9f54.jpg" },
    { name: "تمرين مشي", duration: 120, image: "https://static.webteb.net/images/content/slideshowslide_sss_10214_5906357cedb-473a-4ba8-87f4-c311dc4b9f54.jpg" },
    { name: "تمرين شد عضلي", duration: 150, image: "https://static.webteb.net/images/content/slideshowslide_sss_10214_5906357cedb-473a-4ba8-87f4-c311dc4b9f54.jpg" }
];

let currentExerciseIndex = 0;
let timerInterval;

document.getElementById('start-workout').addEventListener('click', function() {
    document.getElementById('exercise-container').classList.remove('hidden');
    startExercise();
});

document.getElementById('start-exercise').addEventListener('click', function() {
    startTimer();
});

document.getElementById('next-exercise').addEventListener('click', function() {
    clearInterval(timerInterval);
    currentExerciseIndex++;
    if (currentExerciseIndex < exercises.length) {
        startExercise();
    } else {
        document.getElementById('exercise-info').innerHTML = '<p>انتهى تمرين اليوم!</p>';
    }
});

document.getElementById('finish-exercise').addEventListener('click', function() {
    clearInterval(timerInterval);
    document.getElementById('exercise-info').innerHTML = '<p>تمارينك انتهت بنجاح!</p>';
});

function startExercise() {
    const exercise = exercises[currentExerciseIndex];
    document.getElementById('exercise-name-text').textContent = `${currentExerciseIndex + 1}. ${exercise.name}`;
    document.getElementById('exercise-image').src = exercise.image;
    document.getElementById('exercise-image').alt = exercise.name;
    document.getElementById('start-exercise').classList.remove('hidden');
    document.getElementById('next-exercise').classList.add('hidden');
    document.getElementById('finish-exercise').classList.add('hidden');
    document.getElementById('timer').textContent = formatTime(exercise.duration);
}

function startTimer() {
    const exercise = exercises[currentExerciseIndex];
    let timeLeft = exercise.duration;
    timerInterval = setInterval(() => {
        timeLeft--;
        document.getElementById('timer').textContent = formatTime(timeLeft);
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            document.getElementById('next-exercise').classList.remove('hidden');
            document.getElementById('start-exercise').classList.add('hidden');
        }
    }, 1000);
}

function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes < 10 ? '0' : ''}${minutes}:${secs < 10 ? '0' : ''}${secs}`;
}
