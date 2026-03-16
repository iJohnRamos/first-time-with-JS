const a = "3";
const b = "5";

const result = Number(a) * Number(b);

console.log(result);

if (Number.isNaN(result)) {
    console.log(a + " is not a number");
}