import { exec } from 'child_process';

const runCheckPassword = (password: string): Promise<string> => {
  return new Promise((resolve, reject) => {
    exec(
      `ts-node ./src/lib/check-password.ts ${password}`,
      (error, stdout, stderr) => {
        if (error) {
          reject(error);
        } else if (stderr) {
          reject(stderr);
        } else {
          resolve(stdout.trim());
        }
      }
    );
  });
};

describe('CheckPassword CLI', () => {
  test('should return 0 steps for a strong password', async () => {
    const output = await runCheckPassword('StrongPassword1');
    expect(output).toBe(
      'Minimum steps required to make the password strong: 0'
    );
  });

  test('should return an error message for no password', async () => {
    const output = await runCheckPassword('');
    expect(output).toBe('Please provide a password as an argument.');
  });
});
