const findTheOldest = (people) => {
    return people.reduce((prev, curr) => {
        const previousPerson = getAge(prev.yearOfBirth, prev.yearOfDeath);

        const currentPerson = getAge(curr.yearOfBirth, curr.yearOfDeath);

        return previousPerson < currentPerson ? curr : prev;

    });
};

const getAge = (birth, death) => {
    if(!death){
        death = new Date().getFullYear();
    }
    return death - birth;
}
// Do not edit below this line
module.exports = findTheOldest;
