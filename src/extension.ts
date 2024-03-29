// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import { addIncludeCommand } from './easy-include';
import { switchBetweenHeaderAndSourceFile } from './header-source-switch';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
	context.subscriptions.push(
		vscode.commands.registerCommand(
			"cpptools.addInclude", addIncludeCommand));

	context.subscriptions.push(
		vscode.commands.registerCommand(
			"cpptools.switchHeaderSource", switchBetweenHeaderAndSourceFile));
}

// this method is called when your extension is deactivated
export function deactivate() { }
