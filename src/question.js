import React, { Fragment } from 'react';
import _ from 'lodash';
import Alert from './components/Alert';
import inputTypes from './inputTypes/index';

class Question extends React.Component {
	handleInputChange(questionId, value) {
		this.props.onAnswerChange(questionId, value, this.props.validations, this.props.validateOn);
	}

	handleInputBlur(questionId, value) {
		this.props.onQuestionBlur(questionId, value, this.props.validations, this.props.validateOn);
	}

	handleInputFocus(questionId) {
		this.props.onQuestionFocus(questionId);
	}

	handleInputClick(questionSetId, questionId) {
		this.props.onQuestionClick(questionSetId, questionId);
	}

	handleQuestionAction(e, questionSetId = '', questionId = '', key = '', counts = {}) {
		e.preventDefault();
		this.props.onQuestionAction(e, questionSetId, questionId, key, counts);
	}

	render() {
		var Input = inputTypes[this.props.input.type];
		if (!Input) {
			throw new Error('Winterfell: Input Type "' + this.props.input.type + '" not defined as Winterfell Input Type');
		}

		/*
		 * Conditional Questions
		 *
		 * Go through the inputs options and filter them down
		 * to options where the value matches the current questions
		 * value. If we have conditional questions on a given option,
		 * then render this component with the props for the conditional
		 * question.
		 */
		var conditionalItems = [];
		if (typeof this.props.input.options !== 'undefined') {
			this.props.input.options
				.filter(option => {
					return this.props.value instanceof Array ? this.props.value.indexOf(option.value) > -1 : this.props.value == option.value;
				})
				.filter(option => {
					return typeof option.conditionalQuestions !== 'undefined' && option.conditionalQuestions.length > 0;
				})
				.forEach(option =>
					[].forEach.bind(option.conditionalQuestions, conditionalQuestion => {
						conditionalItems.push(
							<Question
								key={conditionalQuestion.questionId}
								questionSetId={this.props.questionSetId}
								questionId={conditionalQuestion.questionId}
								question={conditionalQuestion.question}
								text={conditionalQuestion.text}
								postText={conditionalQuestion.postText}
								validateOn={conditionalQuestion.validateOn}
								validations={conditionalQuestion.validations}
								value={this.props.questionAnswers[conditionalQuestion.questionId]}
								input={conditionalQuestion.input}
								classes={this.props.classes}
								nested={true}
								renderError={this.props.renderError}
								readOnly={this.props.readOnly}
								questionAnswers={this.props.questionAnswers}
								questionActions={this.props.questionActions}
								questionNotifications={this.props.questionNotifications}
								validationErrors={this.props.validationErrors}
								onAnswerChange={this.props.onAnswerChange}
								onQuestionFocus={this.props.onQuestionFocus}
								onQuestionClick={this.props.onQuestionClick}
								onQuestionAction={this.props.onQuestionAction}
								onQuestionBlur={this.props.onQuestionBlur}
								onKeyDown={this.props.onKeyDown}
								counts={conditionalQuestion.counts}
							/>
						);
					})()
				);
		}

		// Get the current value. If none is set, then use
		// the default if given.
		var value =
			typeof this.props.value !== 'undefined'
				? this.props.value
				: typeof this.props.input.default !== 'undefined'
				? this.props.input.default
				: typeof this.props.questionAnswers[this.props.questionId] !== 'undefined'
				? this.props.questionAnswers[this.props.questionId]
				: undefined;

		// Disable input
		var disabled = typeof this.props.input.disabled !== 'undefined' ? this.props.input.disabled : false;

		// Retrieve the validation errors for the
		// current question and map them in to
		// error-message blocks.
		var validationErrors =
			typeof this.props.validationErrors[this.props.questionId] !== 'undefined'
				? this.props.validationErrors[this.props.questionId].map(error => {
						return typeof this.props.renderError === 'function' ? (
							this.props.renderError(error, this.props.questionId)
						) : (
							<div key={this.props.questionId + 'Error' + error.type} className={this.props.classes.errorMessage}>
								{error.message}
							</div>
						);
				  })
				: [];

		var questionActions =
			typeof this.props.questionActions !== 'undefined' && this.props.questionActions.length > 0 ? (
				<div className={this.props.classes.actionControl}>
					{this.props.questionActions.map(action => {
						let actionCount = 0;
						let actionClass = 'toolTipHidden';
						if (action.key === 'messages' && this.props.counts && this.props.counts.messagesCount > 0) {
							actionCount = this.props.counts.messagesCount;
							actionClass = this.props.classes.toolTip;
						} else if (action.key === 'notes' && this.props.counts && this.props.counts.notesCount > 0) {
							actionCount = this.props.counts.notesCount;
							actionClass = this.props.classes.toolTip;
						}

						return (
							<div key={action.key} className={actionClass}>
								{actionCount > 0 ? <div className={this.props.classes.actionCount}>{actionCount}</div> : ''}
								<i
									className={action.icon}
									style={{ color: action.color }}
									onClick={e =>
										this.handleQuestionAction(e, this.props.questionSetId, this.props.questionId, action.key, this.props.counts)
									}
								/>

								<span className={`${this.props.classes.toolTipText} ${this.props.classes.toolTipTop}`}>{action.toolTip}</span>
							</div>
						);
					})}
				</div>
			) : (
				''
			);

		let questionNotifications = '';

		/* if (typeof this.props.questionActions !== 'undefined' && this.props.questionActions.length > 0) {
			let displayIcons = false;
			let displayedQuestionActions = this.props.questionActions.map(action => {
				if (action.count > 0) {
					displayIcons = true;
					return (
						<Fragment>
							<div key={action.key} className={this.props.classes.toolTip}>
								<div className={this.props.classes.actionCount}>{action.count}</div>
								<i
									className={action.icon}
									style={{ color: action.color }}
									onClick={e => this.handleQuestionAction(e, this.props.questionSetId, this.props.questionId, action.key)}
								/>

								<span className={`${this.props.classes.toolTipText} ${this.props.classes.toolTipTop}`}>{action.toolTip}</span>
							</div>
						</Fragment>
					);
				}
			});
			if (displayIcons) {
				questionNotifications = <div className={this.props.classes.actionNotifications}>{displayedQuestionActions}</div>;
			}
		} */

		let labelId = `${this.props.questionId}-label`;

		let readOnly = typeof this.props.input.readOnly !== 'undefined' ? this.props.input.readOnly : this.props.readOnly;

		return (
			<div
				className={
					this.props.nested
						? `${this.props.classes.question} ${this.props.classes.question}-${this.props.classes.nested}`
						: this.props.classes.question
				}>
				<div className={this.props.classes.questionWrap}>
					{!!this.props.question ? (
						<Fragment>
							<label className={this.props.classes.label} id={labelId} htmlFor={this.props.questionId}>
								{this.props.question}
								{typeof this.props.renderRequiredAsterisk !== 'undefined' && this.props.input.required
									? this.props.renderRequiredAsterisk()
									: undefined}
							</label>
							{questionNotifications}
							{questionActions}
						</Fragment>
					) : undefined}
					{!!this.props.text ? <p className={this.props.classes.questionText}>{this.props.text}</p> : undefined}
					{validationErrors}
					<Input
						name={this.props.questionId}
						id={this.props.questionId}
						questionSetId={this.props.questionSetId}
						labelId={labelId}
						value={value}
						disabled={disabled}
						text={this.props.input.text}
						icon={this.props.input.icon}
						class={this.props.input.class}
						action={this.props.input.action}
						options={this.props.input.options}
						placeholder={this.props.input.placeholder}
						required={this.props.input.required}
						readOnly={readOnly}
						classes={this.props.classes}
						onChange={this.handleInputChange.bind(this, this.props.questionId)}
						onFocus={this.handleInputFocus.bind(this, this.props.questionId)}
						onClick={this.handleInputClick.bind(this, this.props.questionSetId, this.props.questionId)}
						onBlur={this.handleInputBlur.bind(this, this.props.questionId)}
						onKeyDown={this.props.onKeyDown}
						{...(typeof this.props.input.props === 'object' ? this.props.input.props : {})}
					/>
					{!!this.props.postText ? <p className={this.props.classes.questionPostText}>{this.props.postText}</p> : undefined}

					{typeof this.props.input.questionAlert !== 'undefined' ? (
						<Alert
							alert={this.props.input.questionAlert}
							questionSetId={this.props.questionSetId}
							questionId={this.props.questionId}
							handleQuestionAction={this.handleQuestionAction.bind(this)}
						/>
					) : (
						''
					)}
				</div>
				{conditionalItems}
			</div>
		);
	}

	componentDidMount() {
		if (
			typeof this.props.input.default === 'undefined' ||
			(this.props.input.type === 'checkboxInput' && typeof this.props.questionAnswers[this.props.questionId] === 'undefined')
		) {
			return;
		}

		this.handleInputChange.call(this, this.props.questionId, this.props.input.default);
	}
}

Question.defaultProps = {
	questionSetId: undefined,
	questionId: undefined,
	question: '',
	validateOn: 'blur',
	validations: [],
	text: undefined,
	postText: undefined,
	value: undefined,
	input: {
		default: undefined,
		type: 'textInput',
		limit: undefined,
		placeholder: undefined,
		icon: undefined,
		class: undefined,
		action: undefined,
		disabled: undefined,
		questionAlert: undefined,
		readOnly: undefined,
	},
	classes: {},
	questionAnswers: {},
	questionActions: [],
	questionNotifications: [],
	validationErrors: {},
	onAnswerChange: () => {},
	onQuestionBlur: () => {},
	onQuestionFocus: () => {},
	onKeyDown: () => {},
	renderError: undefined,
	renderRequiredAsterisk: undefined,
	readOnly: false,
	nested: false,
	counts: undefined,
};

export default Question;
