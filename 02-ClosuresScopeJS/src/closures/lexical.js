const buildCount = (i) => {
    let count = i;
    const displayCount = () => {
        console.log(count++);
    }
    return displayCount;
};

const myCount = buildCount(4);
myCount();

const myOtherCount = buildCount(10);
myOtherCount();
myOtherCount();

