const daily = document.getElementById('daily');
const weekly = document.getElementById('weekly');
const monthly = document.getElementById('monthly');
const work = document.querySelector('.work');
const play = document.querySelector('.play');
const study = document.querySelector('.study');
const exercise = document.querySelector('.exercise');
const social = document.querySelector('.social');
const selfCare = document.querySelector('.self-care');
const current = document.querySelector('.current');
const previous = document.querySelector('.previous');
const timeFrame = [daily, weekly, monthly];

window.addEventListener('load', () => {

    fetch('data.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not okay');
            }
            return response.json();
            
        })


        .then(data => {
            dailyF();
            daily.classList.add('active');

            timeFrame.forEach(item => {
                item.addEventListener('click', () => {
                    timeFrame.forEach(element => {
                        if (element !== item) {
                            element.classList.remove('active');
                        }
                    })

                    if (item.id === 'daily') {
                        dailyF();
                        item.classList.add('active');
                    }

                    if (item.id === 'weekly') {
                        weeklyF();
                        item.classList.add('active');
                    }

                    if (item.id === 'monthly') {
                        MonthlyF();
                        item.classList.add('active');
                    }
                })
    
            })

            















            function dailyF() {
                work.querySelector('.current').textContent = data[0].timeframes.daily.current.toString() + "hrs";
                work.querySelector('.previous').textContent = "Yesterday - " + data[0].timeframes.daily.previous.toString() + "hrs";
        
                play.querySelector('.current').textContent = data[1].timeframes.daily.current.toString() + "hrs";
                play.querySelector('.previous').textContent = "Yesterday - " +  data[1].timeframes.daily.previous.toString() + "hrs";
        
                study.querySelector('.current').textContent = data[2].timeframes.daily.current.toString() + "hrs";
                study.querySelector('.previous').textContent = "Yesterday - " +  data[2].timeframes.daily.previous.toString() + "hrs";
        
                exercise.querySelector('.current').textContent = data[3].timeframes.daily.current.toString() + "hrs";
                exercise.querySelector('.previous').textContent = "Yesterday - " +  data[3].timeframes.daily.previous.toString() + "hrs";
        
                social.querySelector('.current').textContent = data[4].timeframes.daily.current.toString() + "hrs";
                social.querySelector('.previous').textContent = "Yesterday - " +  data[4].timeframes.daily.previous.toString() + "hrs";
        
                selfCare.querySelector('.current').textContent = data[5].timeframes.daily.current.toString() + "hrs";
                selfCare.querySelector('.previous').textContent = "Yesterday - " +  data[5].timeframes.daily.previous.toString() + "hrs";
        
            }
        
            function weeklyF() {
                work.querySelector('.current').textContent = data[0].timeframes.weekly.current.toString() + "hrs";
                work.querySelector('.previous').textContent = "Last week - " +  data[0].timeframes.weekly.previous.toString() + "hrs";
        
                play.querySelector('.current').textContent = data[1].timeframes.weekly.current.toString() + "hrs";
                play.querySelector('.previous').textContent = "Last week - " +  data[1].timeframes.weekly.previous.toString() + "hrs";
        
                study.querySelector('.current').textContent = data[2].timeframes.weekly.current.toString() + "hrs";
                study.querySelector('.previous').textContent = "Last week - " +  data[2].timeframes.weekly.previous.toString() + "hrs";
        
                exercise.querySelector('.current').textContent = data[3].timeframes.weekly.current.toString() + "hrs";
                exercise.querySelector('.previous').textContent = "Last week - " +  data[3].timeframes.weekly.previous.toString() + "hrs";
        
                social.querySelector('.current').textContent = data[4].timeframes.weekly.current.toString() + "hrs";
                social.querySelector('.previous').textContent = "Last week - " +  data[4].timeframes.weekly.previous.toString() + "hrs";
        
                selfCare.querySelector('.current').textContent = data[5].timeframes.weekly.current.toString() + "hrs";
                selfCare.querySelector('.previous').textContent = "Last week - " +  data[5].timeframes.weekly.previous.toString() + "hrs";
        
            }
        
            function MonthlyF() {
                work.querySelector('.current').textContent = data[0].timeframes.monthly.current.toString() + "hrs";
                work.querySelector('.previous').textContent = "Last month - " +  data[0].timeframes.monthly.previous.toString() + "hrs";
        
                play.querySelector('.current').textContent = data[1].timeframes.monthly.current.toString() + "hrs";
                play.querySelector('.previous').textContent = "Last month - " +  data[1].timeframes.monthly.previous.toString() + "hrs";
        
                study.querySelector('.current').textContent = data[2].timeframes.monthly.current.toString() + "hrs";
                study.querySelector('.previous').textContent = "Last month - " +  data[2].timeframes.monthly.previous.toString() + "hrs";
        
                exercise.querySelector('.current').textContent = data[3].timeframes.monthly.current.toString() + "hrs";
                exercise.querySelector('.previous').textContent = "Last month - " +  data[3].timeframes.monthly.previous.toString() + "hrs";
        
                social.querySelector('.current').textContent = data[4].timeframes.monthly.current.toString() + "hrs";
                social.querySelector('.previous').textContent = "Last month - " +  data[4].timeframes.monthly.previous.toString() + "hrs";
        
                selfCare.querySelector('.current').textContent = data[5].timeframes.monthly.current.toString() + "hrs";
                selfCare.querySelector('.previous').textContent = "Last month - " +  data[5].timeframes.monthly.previous.toString() + "hrs";
        
            }

         
        })
})
    
    
