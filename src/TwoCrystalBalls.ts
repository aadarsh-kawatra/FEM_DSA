export default function two_crystal_balls(breaks: boolean[]): number {
    const jump = ~~(breaks.length ** 0.5);
    let i = jump;
    for (; i < breaks.length; i += jump) {
        if (breaks[i]) break;
    }
    i -= jump;
    for (let j = i; j <= i + jump; j++) {
        if (breaks[j]) return j;
    }
    return -1;
}
