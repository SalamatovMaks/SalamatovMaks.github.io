'use strick'

var app = {
	createElement: function (params) {
		var element = document.createElement(params.tagName);

		if (params.tagName === 'input') {
			element.setAttribute('type', params.inputType);
		};

		if (params.content){
			element.innerHTML = params.content;
		};

		return element;
	},

	generateQuestion: function (questionNum, answerNum) {
		for (var i = 0; i < questionNum; i++) {
			var question = this.createElement({
				tagName: 'h2',
				content: 'Вопрос №' + (i + 1)
			});
		};

		for (var j = 0; j < answerNum; j++) {
			var label = this.createElement({
				tagName: 'label',
				content: 'Ответ №' + (j + 1)
			});
		};

		body.appendChild(question);
		body.appendChild(label);
	}
}

var title = app.createElement({
	tagName: 'h1',
	content: 'Тест по программированию'
});

var button = app.createElement({
	tagName: 'input',
	inputType: 'submit'

});


var body = document.querySelector('body');

body.appendChild(title);
app.generateQuestion(3, 3);

body.appendChild(button);