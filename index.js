function fizzBuzz(x) {
  const fizz = 3;
  const fizzString = "Fizz";
  const buzz = 5;
  const buzzString = "Buzz";
  let res = "";
  if (x % fizz === 0) {
    res += fizzString;
  }
  if (x % buzz === 0) {
    res += buzzString;
  }
  console.log(res.length > 0 ? res : x);
}
