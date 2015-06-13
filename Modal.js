/**
 * Created by spy on 15-6-13.
 */
// Create a closure
;(function () {
	this.Modal = function () {  // this 这里默认是 window
		// 定义私有变量
		this.overlay = null;
		this.closeButton = null;
		this.modal = null;

		var defaults = {
			className : 'fade-and-drop',
			closeButton : true,
			overlay : true,
			content : '',
			minWidth : 300,
			maxWidth : 800
		};

		// 初始化时，检查是有配置信息
		this.options = arguments[0] && typeof arguments[0] === 'object' ? extendDefaults(defaults, arguments[0]) : defaults;

	};

	// Modal 公共的方法
	Modal.prototype.open = function () {

	};

	Modal.prototype.hide = function () {

	};

	function buildOut () {
		var content, contentHolder, documentFragment;

		// 检查配置的content是否是'string'类型，或者是dom对象
		if (typeof this.options.content === 'string') {
			content = this.options.content;
		} else {
			content = this.options.content.innerHtml;
		}

		// 创建一个文档片段
		documentFragment = document.createDocumentFragment();

		// 创建一个 Modal
		this.modal = document.createElement('div');
		this.modal.className = 'pigerla-modal ' + this.options.className;
		this.modal.style.minWidth = this.options.minWidth + 'px';
		this.modal.style.maxWidth = this.options.maxWidth + 'px';

		// 检查配置的closeButton
		if (this.options.closeButton === true) {
			this.closeButton = document.createElement('div');
			this.closeButton.className = 'pigerla-close close-button';
			this.closeButton.innerHTML = '×';
			this.modal.appendChild(this.closeButton);
		}

		// 检查覆盖层overlay
		if (this.options.overlay === true) {
			this.overlay = document.createElement('div');
			this.overlay.className = 'pigerla-overlay ' + this.options.className;
			documentFragment.appendChild(this.overlay);
		}

		// 创建modal的内容
		contentHolder = document.createElement('div');
		contentHolder.className = 'pigerla-content';
		contentHolder.innerHTML = content;
		this.modal.appendChild(contentHolder);

		// 将modal加到文档片段
	  documentFragment.appendChild(this.modal);

		document.body.appendChild(documentFragment);

	}

	function extendDefaults (source, properties) {
		var property ;
		for (property in properties) {
		if (properties.hasOwnProperty(property)) {
				source[property] = properties[property];
			}
		}
	}

} ());