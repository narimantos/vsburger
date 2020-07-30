const vscode = require('vscode');

function activate(context) {

    console.log('vsburger has been activated. Use `Order Burger` from the command pallette to launch. ');

    let disposable = vscode.commands.registerCommand('extension.orderBurger', function () {
        let config = vscode.workspace.getConfiguration('vsburger');
        let customBurger = config.get("customBurger");

        vscode.commands.executeCommand('vscode.open', vscode.Uri.parse(customBurger));
    });

    context.subscriptions.push(disposable);
}
exports.activate = activate;

function deactivate() {
}
exports.deactivate = deactivate;