const activities = Array.from(document.querySelectorAll('.card-container'));
const current = document.querySelector('.current');
const previous = document.querySelector('.previous');
const daily = document.getElementById('daily');
let timeFrame = document.querySelector('.timeframe');
timeFrame = timeFrame.querySelectorAll('p');

window.addEventListener('load', () => {

    fetch('data.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not okay');
            }
            return response.json();   
        })

        .then(data => {
            getTimeFrame('daily', 'Yesterday');
            daily.classList.add('active');

            timeFrame.forEach(item => {
                item.addEventListener('click', () => {
                    timeFrame.forEach(element => {
                        if (element !== item) {
                            element.classList.remove('active');
                        }
                    })

                    if (item.id === 'daily') {
                        getTimeFrame('daily', 'Yesterday');
                        item.classList.add('active');
                    }

                    if (item.id === 'weekly') {
                        getTimeFrame('weekly', 'Last week');
                        item.classList.add('active');
                    }

                    if (item.id === 'monthly') {
                        getTimeFrame('monthly', 'Last month');
                        item.classList.add('active');
                    }
                })
    
            })

            function getTimeFrame(timeframe, period) {
                for (let i = 0; i < activities.length; i++) {
                    activities[i].querySelector('.current').textContent = data[i].timeframes[timeframe].current.toString() + "hrs";
                    activities[i].querySelector('.previous').textContent = `${period} - ` + data[i].timeframes[timeframe].previous.toString() + "hrs";
                }
            }

        })
        .catch(err => {
            console.log(err.message)
        })
})
    
    
