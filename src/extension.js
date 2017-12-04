const vscode = require('vscode');

function activate(context) {

    console.log('vspizza has been activated. Use `Order Pizza` from the command pallette to launch. ');

    let disposable = vscode.commands.registerCommand('extension.orderPizza', function () {
        let config = vscode.workspace.getConfiguration('vspizza');
        let customPizza = config.get("customPizza");

        vscode.commands.executeCommand('vscode.open', vscode.Uri.parse(customPizza));
    });

    context.subscriptions.push(disposable);
}
exports.activate = activate;

function deactivate() {
}
exports.deactivate = deactivate;