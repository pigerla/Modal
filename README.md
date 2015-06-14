# Modal

一个纯js的Modal插件

> 注： 此modal插件无测过浏览器兼容性。

## 如何使用？

1.在`head`内引入`modal.css`文件，如下：

    <link rel="stylesheet" href="modal.css的路径/modal.css"/>

2.在`body`的底部内引入`modal.js`文件，如下：

    <script type="text/javascript" src="modal.js的路径/modal.js"></script>

3.创建一个Modal实例，并初始化

如`test`文件夹中的`modal.html`所展示一样，先自定义自己Modal内容，如：

    <div id="content">
        <h1>这里是Modal的标题</h1>
        <p>这是一些文字描述。</p>
    </div>

然后，创建modal实例，如：

    var modalContent = document.getElementById('content');

    // 创建modal实例，配置content
    var modal = new Modal({
        content: modalContent
    });

4.现在可以调用modal的方法了，目前只有两个方法`open()`和`close()`, 如：

打开modal方法，调用：

    modal.open();

关闭modal方法，调用：

    modal.close();


