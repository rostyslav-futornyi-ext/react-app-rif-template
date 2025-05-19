#!/usr/bin/env node

import { execSync } from 'child_process';
import chalk from 'chalk';

// Helper function to run commands and handle errors
const runCommand = (command, errorMessage) => {
  try {
    execSync(command, { stdio: 'inherit' });
    return true;
  } catch (error) {
    console.error(chalk.red(`\n❌ ${errorMessage}`));
    return false;
  }
};

// Display header
console.log('\n' + chalk.blue('╔═══════════════════════════════════════════════╗'));
console.log(chalk.blue('║                                               ║'));
console.log(chalk.blue(`║  ${chalk.yellow('🔍 Running pre-commit checks...')}               ║`));
console.log(chalk.blue('║                                               ║'));
console.log(chalk.blue('╚═══════════════════════════════════════════════╝') + '\n');

// Run lint-staged with spinner
console.log(chalk.cyan('⏳ Running lint-staged to check code quality...'));

if (runCommand('npx lint-staged', 'Lint-staged check failed. Please fix the issues and try again.')) {
  console.log(chalk.green('✅ Lint-staged check passed!'));
} else {
  console.log(chalk.red('❌ Lint-staged check failed. Please fix the issues above.'));
  process.exit(1);
}

// Run TypeScript check
console.log(chalk.cyan('\n⏳ Running TypeScript type checking...'));

if (runCommand('npx tsc --noEmit', 'TypeScript check failed. Please fix the type errors.')) {
  console.log(chalk.green('✅ TypeScript check passed!'));
} else {
  console.log(chalk.red('❌ TypeScript check failed. Please fix the type errors above.'));
  process.exit(1);
}

// Success message
console.log('\n' + chalk.green('╔═══════════════════════════════════════════════╗'));
console.log(chalk.green('║                                               ║'));
console.log(chalk.green(`║  ${chalk.white('✨ All checks passed! Committing changes...')}   ║`));
console.log(chalk.green('║                                               ║'));
console.log(chalk.green('╚═══════════════════════════════════════════════╝') + '\n');

process.exit(0); 