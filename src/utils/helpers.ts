export const NOOP = () => {};

export const generateRandomString = () => Math.random().toString(36).substring(2, 15);

export const getDate = (date: string) => {
    const months = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'
    ];
    const arr = [date.slice(8, 10), date.slice(5, 7), date.slice(0, 4)];

    return `${arr[0]} ${months[+arr[1] - 1]} ${arr[2]}`;
};

export const splitArrayIntoThree = (array: any, imageWidth = 416, paddings = 20) => {
    let left = 0;
    let middle = 0;
    let right = 0;
    const leftList: any = [];
    const middleList: any = [];
    const rightList: any = [];
    let min = 0;

    for (let i = 0; i < array.length; i++) {
        min = Math.min(left, middle, right);
        const itemHeight = array[i].height * (imageWidth / array[i].width) + paddings;

        if (min == left) {
            left += itemHeight;
            leftList.push(array[i]);
        } else if (min == middle) {
            middle += itemHeight;
            middleList.push(array[i]);
        } else {
            right += itemHeight;
            rightList.push(array[i]);
        }
    }

    return [leftList, middleList, rightList];
};

export const splitArrayIntoTwo = (array: any, imageWidth = 471, paddings = 20) => {
    let left = 0;
    let right = 0;
    let leftList: any = [];
    let rightList: any = [];
    let min = 0;

    for (let i = 0; i < array.length; i++) {
        min = Math.min(left, right);
        const itemHeight = array[i].height * (imageWidth / array[i].width) + paddings;

        if (min == left) {
            left += itemHeight;
            leftList.push(array[i]);
        } else {
            right += itemHeight;
            rightList.push(array[i]);
        }
    }

    return [leftList, rightList];
};
