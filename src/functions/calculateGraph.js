export default function calculateGraph({ max, min }) {
  const averageTemps = [];

  max.forEach((item, index) => {
    averageTemps.push((item + min[index]) / 2);
  });
  const maxValue = Math.max(...averageTemps);
  const minValue = Math.min(...averageTemps);

  const range = maxValue - minValue;
  const coefficient = 40 / range;

  const differences = [];
  const boxes = [];
  averageTemps.forEach((item, index) => {
    differences.push((item - minValue) * coefficient);
  });
  differences.forEach((item) => {
    boxes.push(40 - item + 2.5);
  });
  // console.log(boxes);

  for (let i = 0; i < 4; i++) {
    differences[i] = {
      y1: 40 - differences[i] + 2.5,
      y2: 40 - differences[i + 1] + 2.5,
    };
  }
  // console.log(differences);

  return { line: differences, box: boxes };
}
