//1. generate random no ==Math.random()
// 2. convert random no into hexadecimal ==toString()
// 3. random hex code should be 6 digit and with out 0 &"." ==slice()
// 4. FOR UNDERSTANDING :: if we want atleast N no digit
//     & if it is no then add "0" at the end
// 5. generate color as per hex code
// 6. add # to hex code to show on home page

const setBg = () => {
    const randomColor = Math.random().toString(16).slice(2, 8).padEnd(6, 0);
    // console.log(randomColor);
    document.body.style.backgroundColor = "#" + randomColor;
    color.innerHTML = "#" + randomColor;
  };
  
  btn.addEventListener("click", setBg);
  setBg();
  
  //        ***    TYPE -@ 2    ***
  
  // const setBg = () => {
  //   const randomColor = Math.floor(Math.random()*16777215).toString(16);
  //   document.body.style.backgroundColor = "#" + randomColor;
  //   color.innerHTML = "#" + randomColor;
  // }
  
  // btn.addEventListener("click", setBg);
  // setBg();
  