const anotherFunction2 = () => {
  for (var i = 0; i < 10; i++) {
    setTimeout(() => {
      console.log(i); // 0 1 2 3 4 5 6 7 8 9
    }, 1000);
  }
};
anotherFunction2();
