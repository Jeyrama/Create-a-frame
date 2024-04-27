/*
*************************
*  Create a frame!      *
*           __     __   *
*          /  \~~~/  \  *
*    ,----(     ..    ) *
*   /      \__     __/  *
*  /|         (\  |(    *
* ^  \  /___\  /\ |     *
*    |__|   |__|-..     *
*************************

Given an array of strings and a character to be used as border, 
output the frame with the content inside.

Notes:
  Always keep a space between the input string and the left and right borders.
  The biggest string inside the array should always fit in the frame.
  The input array is never empty.

Example:
  frame(['Create', 'a', 'frame'], '+')

Output:
  ++++++++++
  + Create +
  + a      +
  + frame  +
  ++++++++++
*/


// Solution

const frame = (text, char) => {
  const r = " " + char + "\n";
  const l = char + " ";
  let f, ln;
  let maxlen = 0;
  for (const s of text)
    if (s.length > maxlen)
      maxlen = s.length;
  ln = char.repeat(maxlen+4);
  f = ln + "\n";
  for (const s of text)
    f += l + s + " ".repeat(maxlen - s.length) + r;
  return f + ln;
};

// or

const asciiFrame = (text, char) => {
  const width = text.reduce((maxWidth, v) => v.length > maxWidth ? v.length : maxWidth, 0)
  const line = content => `${char} ${content.padEnd(width, ' ')} ${char}`
  const edge = char.repeat(width + 4)
  
  return [edge, ...text.map(line), edge].join('\n');
};