let students = [
    {
        "name": "Isabella Williams",
        "roll": 38,
    },
    {
        "name": "Sophia Heels",
        "roll": 45,
    },
    {
        "name": "Ava Benjamin",
        "roll": 17,
    },
    {
        "name": "Amelia Brown",
        "roll": 8,
    },
]

students.sort((s1, s2) =>{
    return s1.roll - s2.roll
})
console.log(students[0]);