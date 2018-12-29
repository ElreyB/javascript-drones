const wait = require('waait');
import socket from '../socket';
const commandDelays = require('../../backend/commandDelays');

const commands = [
  'takeoff',
  'land',
  'takeoff',
  'ccw 90',
  'ccw 90',
  'flip l',
  'land'
];

export const sendCommand = command => {
  return function() {
    console.log(`Sending the command ${command}`);
    socket.emit('command', command);
  };
};

export const parseCommand = command => {
  return command.split(' ')[0];
};

export const parseDelayCommands = commands => {
  return commands.map(command => parseCommand(command));
};

let i = 0;
export async function dronography() {
  const command = commands[i];
  const delay = commandDelays[parseCommand(command)];
  console.log(`running command: ${command}`);
  sendCommand(command)();

  await wait(delay);
  i += 1;
  if (i < commands.length) {
    return dronography();
  }
  i = 0;
  return sendCommand('land');

  console.log('done!');
}

export async function dronographyTwo(choreography) {
  console.warn('dance', choreography);
  const command = choreography[i];
  const delay = commandDelays[parseCommand(command)];
  console.log(`running command: ${command}`);
  sendCommand(command)();

  await wait(delay);
  i += 1;
  if (i < choreography.length) {
    return dronographyTwo(choreography);
  }
  i = 0;
  return sendCommand('land');

  console.log('done!');
}
