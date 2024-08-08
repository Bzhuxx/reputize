const buttonsAnswer = [...document.querySelectorAll('.btn-answer')];
const buttonsReview = [...document.querySelectorAll('.btn-review')];
const buttonsView = [...document.querySelectorAll('.btn-view')];
const buttonsFilter = [...document.querySelectorAll('.analytic__filter-button')];
const ctx = document.getElementById('myChart');

const tags = ['Июнь 2023', 'Июнь 2023', 'Июнь 2023', 'Июнь 2023', 'Июнь 2023', 'Июнь 2023']

const dataSales2020 = {
	type: 'line',
	data: [19, 7, 15, 9, 20, 25],
	borderColor: 'rgba(81, 206, 138, 1)',
	borderWidth: 4,
	borderRadius: 4,
	pointStyle: false,
	tension: 0.3,
};

const dataSales2021 = {
	type: 'bar',
	data: [17, 18, 19, 18, 19, 20],
	backgroundColor: 'rgba(235, 230, 225, 1)',
	borderColor: 'rgba(235, 230, 225, 1)',
	borderWidth: 1,
	pointStyle: false,
	tension: 0.2,
};

buttonsAnswer.forEach(button => {
	button.addEventListener('click', () => {
		document.querySelector('.btn-answer.active').classList.remove('active');
		button.classList.add('active');
	})
})

buttonsReview.forEach(button => {
	button.addEventListener('click', () => {
		document.querySelector('.btn-review.active').classList.remove('active');
		button.classList.add('active');
	})
})

buttonsView.forEach(button => {
	button.addEventListener('click', () => {
		document.querySelector('.btn-view.active').classList.remove('active');
		button.classList.add('active');
	})
})

for (var i = 0; i < buttonsFilter.length; i++) {
	buttonsFilter[i].addEventListener("click", function () {
		this.classList.toggle('add');
	});
}

new Chart(ctx, {
	data: {
		labels: tags,
		datasets: [
			dataSales2020,
			dataSales2021,
		],
	},
	options: {
		layout: {
			padding: {
				right: 50
			}
		},
		plugins: {
			legend: false
		},
		scales: {
			y: {
				grid: {
					display: false
				},
				border: {
					display: false
				},
				ticks: {
					display: false
				}
			},
			x: {
				grid: {
					display: false
				},
				border: {
					display: false
				}
			}
		}
	}
});

new AirDatepicker('#airdatepicker', {
	range: true,
	multipleDatesSeparator: ' - '
});
new AirDatepicker('#airdatepicker1', {
});


var elem = document.querySelector('.grid');
var msnry = new Masonry(elem, {
	// options
	itemSelector: '.grid-item',
	columnWidth: 200
});

// element argument can be a selector string
//   for an individual element
var msnry = new Masonry('.grid', {
	// options
});